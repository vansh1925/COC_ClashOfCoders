import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchCard from './MatchCard';
import CreateMatchModal from './CreateMatchModal';
import './Matches.css';

const Matches = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const matches = [
    {
      id: 1,
      level: 'easy',
      status: 'active',
      title: 'Quick Python Challenge',
      players: 3,
      maxPlayers: 4,
      timeLimit: 30,
      prize: 100,
      language: 'Python'
    },
    {
      id: 2,
      level: 'medium',
      status: 'waiting',
      title: 'JavaScript Battle',
      players: 2,
      maxPlayers: 4,
      timeLimit: 45,
      prize: 250,
      language: 'JavaScript'
    },
    {
      id: 3,
      level: 'hard',
      status: 'active',
      title: 'Algorithm Master',
      players: 4,
      maxPlayers: 4,
      timeLimit: 60,
      prize: 500,
      language: 'Any'
    }
  ];

  const handleJoinMatch = (matchId) => {
    // In a real application, this would make an API call to join the match
    // For now, we'll just navigate to the game page
    navigate(`/game/${matchId}`);
  };

  const filteredMatches = matches.filter(match => 
    filter === 'all' ? true : match.level === filter
  );

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'prize':
        return b.prize - a.prize;
      case 'players':
        return b.players - a.players;
      default:
        return 0;
    }
  });

  return (
    <div className="matches-page">
      <div className="matches-header">
        <h1>Active Matches</h1>
        <button className="create-match-btn" onClick={() => setIsModalOpen(true)}>
          Create Match
        </button>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Filter by Level:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="prize">Prize Amount</option>
            <option value="players">Players</option>
          </select>
        </div>
      </div>

      <div className="matches-grid">
        {sortedMatches.map(match => (
          <div key={match.id} className="match-card">
            <div className="match-header">
              <h2>{match.title}</h2>
              <span className={`difficulty ${match.level.toLowerCase()}`}>
                {match.level}
              </span>
            </div>
            <div className="match-info">
              <p>Players: {match.players}/{match.maxPlayers}</p>
              <p>Time Limit: {match.timeLimit} minutes</p>
              <p>Status: <span className={`status ${match.status}`}>{match.status}</span></p>
            </div>
            <button
              className="join-btn"
              onClick={() => handleJoinMatch(match.id)}
              disabled={match.players >= match.maxPlayers || match.status === 'active'}
            >
              {match.status === 'active' ? 'In Progress' : 'Join Match'}
            </button>
          </div>
        ))}
      </div>

      <CreateMatchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Matches; 