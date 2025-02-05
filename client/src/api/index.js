//
import axios from "axios";

//
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

//
export const createTask = (payload) => api.post("/create-task", payload);
export const getAllTasks = () => api.get("/read-tasks");
export const updateTaskById = (id, payload) =>
  api.patch("/update-task/${id}", payload);
// eslint-disable-next-line no-unused-vars
export const deleteTaskById = (id) => api.delete("/delete-task/${id}");
// eslint-disable-next-line no-unused-vars
export const getTaskById = (id) => api.get("/read-task/${id}");

// 
const apis = {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
  getTaskById,
};

// 
export default apis