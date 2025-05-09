import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <Link to="/app" className="nav-link">Home</Link>
        <Link to="/matches" className="nav-link">Matchmaking</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 