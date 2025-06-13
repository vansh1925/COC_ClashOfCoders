import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConnectWallet.css';

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    setIsConnecting(true);
    setError('');

    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
        // After successful connection, navigate to matches
        navigate('/matches');
      } catch (error) {
        console.error('Error connecting wallet:', error);
        setError('Failed to connect wallet. Please try again.');
      }
    } else {
      setError('Please install MetaMask or another Web3 wallet to continue.');
    }
    setIsConnecting(false);
  };

  return (
    <div className="wallet-container">
      <div className="wallet-card">
        <h2>Connect Your Wallet</h2>
        <p className="wallet-subtitle">
          Connect your Web3 wallet to start competing for real prizes
        </p>

        <div className="wallet-features">
          <div className="feature">
            <span className="feature-icon">💰</span>
            <p>Win ETH prizes</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎨</span>
            <p>Collect NFT trophies</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🏆</span>
            <p>Compete in paid battles</p>
          </div>
        </div>

        <button 
          onClick={connectWallet} 
          className="connect-button"
          disabled={isConnecting}
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>

        {error && <p className="error-message">{error}</p>}

        <div className="wallet-help">
          <p>Don't have a wallet?</p>
          <a 
            href="https://metamask.io/download/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="help-link"
          >
            Get MetaMask
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet; 