import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css"

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple login check (you can replace this with real authentication logic)
    if (username === 'admin' && password === 'admin') {
      // Store the login status in sessionStorage (or localStorage)
      sessionStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to Admin Dashboard
      navigate('/admindashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
