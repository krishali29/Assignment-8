import React from "react";
import { updateStatus, deleteTask } from "../api/TaskSerive";

export default function TaskList({ tasks, setTasks }) {
  const toggleStatus = async (task) => {
    try {
      const updated = await updateStatus(
        task._id,
        task.status === "pending" ? "done" : "pending"
      );
      setTasks((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t))
      );
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  const remove = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t._id}>
          <span className={t.status === "done" ? "completed" : ""}>
            {t.title}
          </span>
          <button onClick={() => toggleStatus(t)}>
            {t.status === "pending" ? "Complete" : "Undo"}
          </button>
          <button onClick={() => remove(t._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
