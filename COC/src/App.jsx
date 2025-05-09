import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Matches from './components/Matches';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Game from './components/Game';
import Login from './components/Login';
import ConnectWallet from './components/ConnectWallet';
import ChooseMode from './components/ChooseMode';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/choose-mode" element={
            <>
              <Navbar />
              <ChooseMode />
            </>
          } />
          <Route path="/matches" element={
            <>
              <Navbar />
              <Matches />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <Navbar />
              <Dashboard />
            </>
          } />
          <Route path="/game/:matchId" element={
            <>
              <Navbar />
              <Game />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="*" element={<Navigate to="/app" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
