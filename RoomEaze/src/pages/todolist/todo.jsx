import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { getDocs, query, collection, where, doc, getDoc } from "firebase/firestore";
import RoommateCard from "./roommate-card";
import TaskModal from "./task-modal";
import "./todo.css";

function Todo() {
  const [groupMembers, setGroupMembers] = useState([]);
  const [tasks, setTasks] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (roommate, task) => {
    setTasks((prev) => ({
      ...prev,
      [roommate]: [...(prev[roommate] || []), { id: Date.now(), name: task }],
    }));
  };

  useEffect(() => {
    const fetchGroupMembers = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      const groupId = userData?.groupId;

      if (!groupId) return;

      const membersQuery = query(
        collection(db, "users"),
        where("groupId", "==", groupId)
      );

      const membersSnap = await getDocs(membersQuery);
      const names = membersSnap.docs.map((doc) => doc.data().name || "Unnamed");
      setGroupMembers(names);
    };

    fetchGroupMembers();
  }, []);

  return (
    <div className="todo-container">
      <h1 className="heading">To-Do List</h1>
      <div className="roommate-grid">
        {groupMembers.map((name) => (
          <RoommateCard
            key={name}
            name={name}
            tasks={tasks[name] || []}
          />
        ))}
      </div>
      <button className="addTaskButton" onClick={() => setIsModalOpen(true)}>
        + Add Chore
      </button>
      {isModalOpen && (
        <TaskModal
          roommates={groupMembers}
          onClose={() => setIsModalOpen(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}

export default Todo;
