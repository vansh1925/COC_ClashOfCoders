import React from 'react';
import { Link,NavLink ,useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/choose-mode');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/app">ClashOfCoders</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/app" className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"}>Home</NavLink>
        <NavLink to="/matches" className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"}>Matchmaking</NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"}>Leaderboard</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"}>Dashboard</NavLink>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 