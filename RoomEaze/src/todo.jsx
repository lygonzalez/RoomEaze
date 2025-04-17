import React from "react";
import {useState} from "react";
import RoommateCard from "./roommate-card";
import TaskModal from "./task-modal"
import "./todo.css";

function Todo() {

  const [roommates, setRoommates] = useState(["Shayla", "Mahati", "Anjali"]);
  const [tasks, setTasks] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const addTask = (roommate, task) => {
    setTasks((prev) => ({...prev, [roommate]:[...(prev[roommate] || []), {id:Date.now(), name: task}],
  }));
};

  return (
    <div className= "todo-container">
      <h1 className = "heading"> To-Do List </h1>
      <div className = "roommate-grid">
        {roommates.map((roommate) => (
        <RoommateCard key = {roommate} name = {roommate} tasks = {tasks[roommate] || []} />
        ))}
      </div>
      <button className = "addTaskButton" onClick = {() => setIsModalOpen(true)}>
        + Add Chore
      </button>
      {isModalOpen && (
        <TaskModal roommates={roommates} onClose = {() => setIsModalOpen(false)} onAddTask = {addTask}/>
      )}
    </div>
  );
}

export default Todo;
