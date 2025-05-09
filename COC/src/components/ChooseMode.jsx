import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseMode.css';

const ChooseMode = () => {
  const navigate = useNavigate();

  const handleWeb2Click = () => {
    navigate('/login');
  };

  const handleWeb3Click = () => {
    navigate('/connect-wallet');
  };

  return (
    <div className="choose-mode-container">
      <h1>Choose Your Experience</h1>
      <div className="mode-options">
        <div className="mode-card web2">
          <h2>Web2 Mode</h2>
          <div className="mode-features">
            <p>🎮 Play for fun and practice</p>
            <p>🏆 Earn digital badges</p>
            <p>📈 Track your progress</p>
            <p>💫 Free to play</p>
          </div>
          <button onClick={handleWeb2Click} className="mode-button">
            Continue with Email
          </button>
        </div>

        <div className="mode-card web3">
          <h2>Web3 Mode</h2>
          <div className="mode-features">
            <p>💰 Win real prizes</p>
            <p>🎨 Collect NFT trophies</p>
            <p>💎 Earn cryptocurrency</p>
            <p>🏅 Compete for rewards</p>
          </div>
          <button onClick={handleWeb3Click} className="mode-button">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseMode; 