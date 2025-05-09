import React, { useState } from 'react';
import './CreateMatchModal.css';

const CreateMatchModal = ({ isOpen, onClose }) => {
  const [matchData, setMatchData] = useState({
    title: '',
    level: 'Beginner',
    maxPlayers: 4,
    timeLimit: 30,
    prize: 0.1,
    language: 'JavaScript'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle match creation
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create New Match</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Match Title</label>
            <input
              type="text"
              value={matchData.title}
              onChange={(e) => setMatchData({...matchData, title: e.target.value})}
              placeholder="Enter match title"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Difficulty Level</label>
            <select
              value={matchData.level}
              onChange={(e) => setMatchData({...matchData, level: e.target.value})}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Max Players</label>
            <input
              type="number"
              min="2"
              max="8"
              value={matchData.maxPlayers}
              onChange={(e) => setMatchData({...matchData, maxPlayers: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Time Limit (minutes)</label>
            <input
              type="number"
              min="15"
              max="120"
              value={matchData.timeLimit}
              onChange={(e) => setMatchData({...matchData, timeLimit: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Prize (ETH)</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={matchData.prize}
              onChange={(e) => setMatchData({...matchData, prize: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Programming Language</label>
            <select
              value={matchData.language}
              onChange={(e) => setMatchData({...matchData, language: e.target.value})}
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
            </select>
          </div>

          <button type="submit" className="create-btn">Create Match</button>
        </form>
      </div>
    </div>
  );
};

export default CreateMatchModal; 