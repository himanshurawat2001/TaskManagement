import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token'); // Get token from localStorage

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(token);  // Pass token for authentication
        setTasks(response.data);  // Set tasks data received from API
      } catch (err) {
        setError('Failed to load tasks');
      }
    };

    if (token) {
      fetchTasks();
    } else {
      setError('Please log in first');
    }
  }, [token]); // Ensure token is passed on component load

  return (
    <div>
      <h1>Your Tasks</h1>
      {error && <p>{error}</p>}
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title} - {task.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
