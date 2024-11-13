// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../services/api';
import './TaskForm.css'; // Import the CSS file

const TaskForm = ({ token, taskToEdit, onTaskUpdated }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setFormData({ title: taskToEdit.title, description: taskToEdit.description });
    }
  }, [taskToEdit]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (taskToEdit) {
        await updateTask(taskToEdit._id, formData, token);
      } else {
        await createTask(formData, token);
      }
      onTaskUpdated();
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error('Failed to submit task:', error);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={formData.title}
      />
      <textarea
        className="task-form__textarea"
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={formData.description}
      />
      <button className="task-form__button" type="submit">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
