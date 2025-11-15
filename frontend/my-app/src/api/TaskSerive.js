import axios from "axios";
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1",
});

export const fetchTasks = (params) =>
  API.get("/tasks", { params }).then((res) => res.data);
export const createTask = (data) =>
  API.post("/tasks", data).then((res) => res.data);
export const updateTask = (id, data) =>
  API.put(`/tasks/${id}`, data).then((res) => res.data);
export const patchTask = (id, data) =>
  API.patch(`/tasks/${id}`, data).then((res) => res.data);
export const deleteTask = (id) =>
  API.delete(`/tasks/${id}`).then((res) => res.data);
export const updateStatus = (id, status) =>
  API.patch(`/tasks/${id}/status`, { status }).then((res) => res.data);
