import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">ClashOfCoders</h1>
        <p className="hero-subtitle">Where Code Meets Competition</p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">⚔️</span>
            <h3>Real-time Battles</h3>
            <p>Challenge other coders in intense coding duels</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🏆</span>
            <h3>Win Rewards</h3>
            <p>Earn NFTs and crypto rewards for your victories</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📈</span>
            <h3>Level Up</h3>
            <p>Grow your skills and climb the ranks</p>
          </div>
        </div>
        <Link to="/matches" className="start-battle-btn">
          Start Battle
        </Link>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create or Join</h3>
            <p>Start a new match or join an existing one</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Code & Compete</h3>
            <p>Solve challenges against other coders</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Win & Earn</h3>
            <p>Collect rewards and level up your profile</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <h3>10K+</h3>
          <p>Active Coders</p>
        </div>
        <div className="stat">
          <h3>50K+</h3>
          <p>Matches Played</p>
        </div>
        <div className="stat">
          <h3>100K+</h3>
          <p>ETH Rewarded</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 