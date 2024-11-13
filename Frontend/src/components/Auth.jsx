// src/components/Auth.js
import React, { useState } from 'react';
import { signup, login } from '../services/api';
import './Auth.css'; // Import the CSS file

const Auth = ({ setToken }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isSignup ? await signup(formData) : await login(formData);
      setToken(response.data.token);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">{isSignup ? 'Sign Up' : 'Log In'}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {isSignup && (
          <input
            className="auth-input"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        )}
        <input
          className="auth-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="auth-button" type="submit">
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </form>
      <button
        className="auth-switch-button"
        onClick={() => setIsSignup(!isSignup)}
      >
        Switch to {isSignup ? 'Log In' : 'Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
