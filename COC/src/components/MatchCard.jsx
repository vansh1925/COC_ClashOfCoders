import React from 'react';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="match-header">
        <span className="match-level">{match.level}</span>
        <span className="match-status">{match.status}</span>
      </div>
      <div className="match-content">
        <h3 className="match-title">{match.title}</h3>
        <div className="match-info">
          <div className="info-item">
            <span className="info-label">Players</span>
            <span className="info-value">{match.players}/{match.maxPlayers}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Time</span>
            <span className="info-value">{match.timeLimit} min</span>
          </div>
          <div className="info-item">
            <span className="info-label">Prize</span>
            <span className="info-value">{match.prize} ETH</span>
          </div>
        </div>
      </div>
      <button className="join-btn">Join Match</button>
    </div>
  );
};

export default MatchCard; 