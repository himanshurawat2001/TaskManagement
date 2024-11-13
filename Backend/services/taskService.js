// services/taskService.js
const Task = require('../models/Task');

exports.getTasks = async (userId) => {
  try {
    return await Task.find({ createdBy: userId });  // Fetch tasks created by the logged-in user
  } catch (error) {
    throw error;
  }
};
