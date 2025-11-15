import React, { useEffect, useState } from "react";
import { fetchTasks } from "./api/TaskSerive";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="app-container">
      <h1>My ToDo</h1>
      <TaskForm onAdded={(t) => setTasks((prev) => [t, ...prev])} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
