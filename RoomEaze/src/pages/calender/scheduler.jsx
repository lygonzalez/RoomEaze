import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./scheduler.css";

const localizer = momentLocalizer(moment);

const MyScheduler = () => {
    const[ events, setEvents] =  useState([
        {
            title: "Wash Dishes - Alex",
            start: new Date(2025, 3, 1, 10, 0), // april 1 2025 at 10 am
            end: new Date(2025, 3, 1, 11, 0),
        },
        {
            title: "Vacuum - Sam",
            start: new Date(2025, 3, 3, 14, 0), //april 3 2025 at 2 pm
            end: new Date(2025, 3, 3, 15, 0),
        },
        {
            title: "Meeting - Sam",
            start: new Date(2025, 3, 7, 12, 0), //  at 12 pm
            end: new Date(2025, 3, 7, 16, 0),
        },
    ]);

    //add new event (function)
    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt("Enter event title or chore:");
        const startTime = window.prompt("Enter start time (YYYY-MM-DD HH:MM):");
        const endTime = window.prompt("Enter end time (YYYY-MM-DD HH:MM):");
    
        if (title && startTime && endTime) {
          const startDate = new Date(startTime);
          const endDate = new Date(endTime);
    
          if (startDate && endDate && startDate < endDate) {
            setEvents([
              ...events,
              { title, start: startDate, end: endDate },
            ]);
          } else {
            alert("Invalid dates. Please check the format.");
          }
        }
      };

      //add option to edit or delete event
      const handleEventClick = (event) => {
        const action = window.prompt("Edit or Delete event? (edit/delete):");
    
        if (action === "edit") {
          const newTitle = window.prompt("Enter new title:", event.title);
          const newStartTime = window.prompt("Enter new start time (YYYY-MM-DD HH:MM):");
          const newEndTime = window.prompt("Enter new end time (YYYY-MM-DD HH:MM):");
    
          const newStartDate = new Date(newStartTime);
          const newEndDate = new Date(newEndTime);
    
          if (newTitle && newStartDate && newEndDate && newStartDate < newEndDate) {
            setEvents(events.map((e) =>
              e === event ? { ...e, title: newTitle, start: newStartDate, end: newEndDate } : e
            ));
          } else {
            alert("Invalid input. Please check the date and time format.");
          }
        } else if (action === "delete") {
          setEvents(events.filter((e) => e !== event));
        }
      };
    
 // Set initial view (default to month view)
 const [view, setView] = useState(Views.MONTH);
 const [date, setDate] = useState( new Date(2025, 3, 1));

 const goToToday = () => setDate(new Date());
    const goToNext = () => {
        const nextDate = moment(date).add(1, view === Views.MONTH ? "months" : view === Views.WEEK ? "weeks" : "days").toDate();
        setDate(nextDate);
    };

    const goToBack = () => {
      const prevDate = moment(date).subtract(1, view === Views.MONTH ? "months" : view === Views.WEEK ? "weeks" : "days").toDate();
      setDate(prevDate);
  };

const monthYear = moment(date).format("MMMM YYYY");

 return (
   <div style={{ height: 700, margin: "50px", paddingTop: 0 }}>
     <h2>Roommate Chore & Event Scheduler</h2>

     {/* View Controls */}

     <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setView(Views.MONTH)} className="view-button view-button-month">
          Month View
        </button>
        <button onClick={() => setView(Views.WEEK)} className="view-button view-button-week">
          Week View
        </button>
        <button onClick={() => setView(Views.DAY)} className="view-button view-button-day">
          Day View
        </button>
      </div>

      {/* Navigation Controls */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={goToBack} className="view-button view-button-back">
          Back
        </button>
        <button onClick={goToNext} className="view-button view-button-next">
          Next
        </button>
      </div>

 {/* Month-Year Display */}
 <div style={{ marginBottom: "10px" }}>
        <span className="month-year-display">{monthYear}</span>
      </div>

  {/* Calendar Component */}
  
  <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleEventClick}
        view={view}  // Explicitly setting the view to the state
        views={["month", "week", "day"]} // Allowing switching between views
        step={30} // Time slot interval in minutes
        timeslots={2}
        style={{ height: "600px"}}
        onView = {setView}
        toolbar = {false}
        defaultDate={new Date(2025, 3, 1)} // April 1, 2025
        eventPropGetter={(event) => {
            const colorMap = {
                Alex: "#ffc0cb", // light pink
                Sam: "#6495ed", // Cornflower Blue
                Default: "#ccc", // Gray for unknown names
              };
          
              // Extract roommate name from event title
              const roommate = event.title.split(" - ")[1];
              const backgroundColor = colorMap[roommate] || colorMap["Default"];
          
              return {
                style: {
                  backgroundColor,
                  color: "#fff",
                  borderRadius: "5px",
                  padding: "5px",
                  border: "none",
                },
              };
            }}

      />
    </div>
  );
};

export default MyScheduler;