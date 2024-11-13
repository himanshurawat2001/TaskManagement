// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signup = (userData) =>
  axios.post(`${API_URL}/auth/signup`, userData);
export const login = (userData) =>
  axios.post(`${API_URL}/auth/login`, userData);

export const getTasks = (token) =>
  axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },  // Ensure the token is passed here
  });

export const createTask = (taskData, token) =>
  axios.post(`${API_URL}/tasks/create`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateTask = (taskId, taskData, token) =>
  axios.put(`${API_URL}/tasks/${taskId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteTask = (taskId, token) =>
  axios.delete(`${API_URL}/tasks/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });


