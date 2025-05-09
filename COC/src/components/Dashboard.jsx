import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy data for now
  const userData = {
    username: "CodeMaster",
    level: 15,
    xp: 2750,
    nextLevelXp: 3000,
    walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    rank: "Diamond",
    matchesPlayed: 42,
    matchesWon: 28,
    winRate: "66.7%",
    totalEarnings: "2.5 ETH",
    achievements: [
      { id: 1, name: "First Victory", icon: "🏆" },
      { id: 2, name: "Speed Demon", icon: "⚡" },
      { id: 3, name: "Perfect Score", icon: "💯" },
      { id: 4, name: "10 Win Streak", icon: "🔥" }
    ],
    nfts: [
      { id: 1, name: "Code Warrior", image: "https://via.placeholder.com/150", rarity: "Rare" },
      { id: 2, name: "Algorithm Master", image: "https://via.placeholder.com/150", rarity: "Epic" },
      { id: 3, name: "Bug Hunter", image: "https://via.placeholder.com/150", rarity: "Common" }
    ]
  };

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <span className="avatar-text">{userData.username[0]}</span>
            </div>
            <div className="profile-info">
              <h2>{userData.username}</h2>
              <div className="wallet-address">
                <span>{userData.walletAddress.slice(0, 6)}...{userData.walletAddress.slice(-4)}</span>
                <button className="copy-btn">Copy</button>
              </div>
            </div>
          </div>
          <div className="level-progress">
            <div className="level-info">
              <span className="level">Level {userData.level}</span>
              <span className="xp">{userData.xp}/{userData.nextLevelXp} XP</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${(userData.xp / userData.nextLevelXp) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="stats-card">
          <h3>Battle Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">{userData.matchesPlayed}</span>
              <span className="stat-label">Matches</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{userData.matchesWon}</span>
              <span className="stat-label">Wins</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{userData.winRate}</span>
              <span className="stat-label">Win Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{userData.totalEarnings}</span>
              <span className="stat-label">Earnings</span>
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="achievements-card">
          <h3>Achievements</h3>
          <div className="achievements-grid">
            {userData.achievements.map(achievement => (
              <div key={achievement.id} className="achievement-item">
                <span className="achievement-icon">{achievement.icon}</span>
                <span className="achievement-name">{achievement.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NFTs Card */}
        <div className="nfts-card">
          <h3>NFT Collection</h3>
          <div className="nfts-grid">
            {userData.nfts.map(nft => (
              <div key={nft.id} className="nft-item">
                <div className="nft-image">
                  <img src={nft.image} alt={nft.name} />
                  <span className="nft-rarity">{nft.rarity}</span>
                </div>
                <span className="nft-name">{nft.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 