import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { useAuth } from '@clerk/clerk-react';

const Landing = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [codeText, setCodeText] = useState('');
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const codeSnippet = `class ClashOfCoders {
  constructor() {
    this.battlefield = new Battlefield();
    this.players = new Set();
  }

  async enterBattlefield() {
    await this.initialize();
    return this.battlefield;
  }
}`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setCodeText(codeSnippet.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (isSignedIn) {
        navigate('/choose-mode', { replace: true });
      } else {
        navigate('/app', { replace: true });
      }
    }, 1500);
  };

  return (
    <div className={`landing ${isAnimating ? 'animate-out' : ''}`}>
      <div className="landing-content">
        <div className="code-container">
          <div className="code-header">
            <div className="code-dot red"></div>
            <div className="code-dot yellow"></div>
            <div className="code-dot green"></div>
          </div>
          <pre className="code-display">
            <code>{codeText}</code>
          </pre>
        </div>
        <div className="tagline">
          <span className="tagline-text">"Clash of Coders — A real-time coding battle arena where skill meets thrill, and every match brings rewards."</span>
        </div>
        <button 
          className="enter-btn"
          onClick={handleEnter}
          disabled={isAnimating}
        >
          Enter Battlefield
        </button>
      </div>
    </div>
  );
};

export default Landing; 