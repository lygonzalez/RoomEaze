import "./todo.css";
import React from "react";
import {useState} from "react";
export default function RoommateCard({ name, tasks }) {
    const [checkedList, setCheckedList] = useState<string[]>([]);

    const handleSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedList([...checkedList, value]);
        } else {
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
    };

    return (
        <div className = "card">
            <h2 className = "roommate-name">
                {name} 
            </h2>
            {tasks.length === 0 ? (
                <p className = "noTasks"> No Chores! </p>
            ) : (
                <div className = "chore-list">
                    {tasks.map((task) => {
                        return (
                            <div key={task.id} className ="checkboxContainer">
                                <input
                                    type = "checkbox"
                                    name = "tasks"
                                    id = {task.id}
                                    value = {task.name}
                                    onChange = {handleSelect}
                                />
                                <label htmlFor={task.id}>{task.name}</label>
                            </div>
                        );
                    })}
                </div>
            )}
            </div>
    );
};