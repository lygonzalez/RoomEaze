import { useState } from "react";
import React from "react";
import "./todo.css"


export default function TaskModal({roommates, onClose, onAddTask}) {
    const[taskName, setTaskName] = useState("");
    const[selectedRoommate, setSelectedRoommate] = useState(roommates[0]);
    const[frequency, setFrequency] = useState("Daily");

    const handleSubmit = () => {
        if (taskName.trim()) {
            onAddTask(selectedRoommate, taskName);
            setTaskName("");
            onClose();
        }
    };

    return (
        <div className = "modal">
            <div className = "modal-content">
                <h2> Add New Chore </h2>
                <input
                    type = "text"
                    placeholder = "Chore Name"
                    value = {taskName}
                    onChange = {(event) => setTaskName(event.target.value)}
                    className = "chore-input"
                />

                <select
                    value = {selectedRoommate}
                    onChange={(event) => setSelectedRoommate(event.target.value)}
                    className = "roommate-select"
                >
                    {roommates.map((roommate) => (
                        <option key = {roommate} value = {roommate} > {roommate}</option>
                    ))}
                </select>

                <select
                    value = {frequency}
                    onChange = {(event) => setFrequency(event.target.value)}
                    className = "frequencySelect">
                    <option value = "Daily"> Daily </option>
                    <option value = "Weekly"> Weekly </option>
                    <option value = "Monthly"> Monthly </option>
                </select>
                <div className = "modal-buttons">
                    <button onClick = {handleSubmit} className = "submitButton"> Add Chore </button>
                    <button onClick = {onClose} className = "closeButton"> Cancel </button>
                </div>

            </div>
        </div>
    );
}