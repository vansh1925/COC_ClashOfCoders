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
import Leaderboard from './components/Leaderboard';
import './App.css';
import { useAuth } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return null; // or a loading spinner
  if (!isSignedIn) return <Navigate to="/login" replace />;
  return children;
}

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
            <ProtectedRoute>
              <Navbar />
              <ChooseMode />
            </ProtectedRoute>
          } />
          <Route path="/matches" element={
            <ProtectedRoute>
              <Navbar />
              <Matches />
            </ProtectedRoute>
          } />
          <Route path="/leaderboard" element={
            <ProtectedRoute>
              <Navbar />
              <Leaderboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Navbar />
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/game/:matchId" element={
            <ProtectedRoute>
              <Navbar />
              <Game />
            </ProtectedRoute>
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
