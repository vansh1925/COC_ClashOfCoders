import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('all-time');

  const leaderboardData = [
    {
      rank: 1,
      username: "CodeMaster",
      level: 25,
      xp: 12500,
      winRate: "85%",
      matchesWon: 127,
      totalEarnings: "15.5 ETH"
    },
    {
      rank: 2,
      username: "AlgoNinja",
      level: 23,
      xp: 11200,
      winRate: "82%",
      matchesWon: 98,
      totalEarnings: "12.8 ETH"
    },
    {
      rank: 3,
      username: "BugHunter",
      level: 21,
      xp: 9800,
      winRate: "78%",
      matchesWon: 85,
      totalEarnings: "10.2 ETH"
    },
    {
      rank: 4,
      username: "SyntaxKing",
      level: 20,
      xp: 9200,
      winRate: "75%",
      matchesWon: 76,
      totalEarnings: "9.5 ETH"
    },
    {
      rank: 5,
      username: "CodeWarrior",
      level: 19,
      xp: 8800,
      winRate: "72%",
      matchesWon: 68,
      totalEarnings: "8.8 ETH"
    }
  ];

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-header">
        <h1>Leaderboard</h1>
        <div className="time-filter">
          <button 
            className={timeFilter === 'all-time' ? 'active' : ''} 
            onClick={() => setTimeFilter('all-time')}
          >
            All Time
          </button>
          <button 
            className={timeFilter === 'monthly' ? 'active' : ''} 
            onClick={() => setTimeFilter('monthly')}
          >
            Monthly
          </button>
          <button 
            className={timeFilter === 'weekly' ? 'active' : ''} 
            onClick={() => setTimeFilter('weekly')}
          >
            Weekly
          </button>
        </div>
      </div>

      <div className="leaderboard-table">
        <div className="table-header">
          <div className="rank">Rank</div>
          <div className="player">Player</div>
          <div className="level">Level</div>
          <div className="xp">XP</div>
          <div className="win-rate">Win Rate</div>
          <div className="matches">Matches Won</div>
          <div className="earnings">Earnings</div>
        </div>

        {leaderboardData.map((player) => (
          <div key={player.rank} className="table-row">
            <div className="rank">
              <span className={`rank-badge rank-${player.rank}`}>{player.rank}</span>
            </div>
            <div className="player">
              <span className="username">{player.username}</span>
            </div>
            <div className="level">{player.level}</div>
            <div className="xp">{player.xp.toLocaleString()}</div>
            <div className="win-rate">{player.winRate}</div>
            <div className="matches">{player.matchesWon}</div>
            <div className="earnings">{player.totalEarnings}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard; 