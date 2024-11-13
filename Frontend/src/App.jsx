// App.js
import React, { useState } from 'react';
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [reloadTasks, setReloadTasks] = useState(false); // Add state to trigger task list reload

  if (!token) {
    return (
      <div className="app-container">
        <Auth setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Task Management Dashboard</h1>
      <div className="dashboard">
        <TaskForm
          token={token}
          taskToEdit={taskToEdit}
          onTaskUpdated={() => {
            setTaskToEdit(null);
            setReloadTasks(!reloadTasks); // Toggle reloadTasks to trigger re-fetch
          }}
        />
        <TaskList token={token} onEdit={setTaskToEdit} reloadTasks={reloadTasks} />
      </div>
      <button className="logout-button" onClick={() => setToken(null)}>
        Logout
      </button>
    </div>
  );
}

export default App;
