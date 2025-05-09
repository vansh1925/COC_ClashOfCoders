import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/app">ClashOfCoders</Link>
      </div>
      <div className="nav-links">
        <Link to="/app" className="nav-link">Home</Link>
        <Link to="/matches" className="nav-link">Matchmaking</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <button className="connect-wallet-btn">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 