import React, { useState } from "react";
import { createTask } from "../api/TaskSerive";

export default function TaskForm({ onAdded }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) {
      setError("Title required");
      return;
    }
    try {
      const task = await createTask({ title });
      setTitle("");
      onAdded(task);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create task");
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
