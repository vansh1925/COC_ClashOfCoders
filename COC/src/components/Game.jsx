import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Game.css';

const Game = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameStatus, setGameStatus] = useState('waiting'); // waiting, running, finished
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player1', status: 'ready' },
    { id: 2, name: 'Player2', status: 'ready' }
  ]);

  // Dummy match data - replace with actual data from your backend
  const matchData = {
    id: matchId,
    title: 'Algorithm Battle',
    difficulty: 'Medium',
    timeLimit: 30, // minutes
    problem: {
      title: 'Find the Longest Palindromic Substring',
      description: `Given a string s, return the longest palindromic substring in s.
A palindrome is a string that reads the same backward as forward, e.g., "madam" or "racecar".`,
      examples: [
        {
          input: 's = "babad"',
          output: '"bab" or "aba"',
          explanation: '"bab" and "aba" are both valid answers.'
        },
        {
          input: 's = "cbbd"',
          output: '"bb"',
          explanation: 'The longest palindromic substring is "bb".'
        }
      ],
      constraints: [
        '1 <= s.length <= 1000',
        's consist only of lowercase English letters.'
      ]
    }
  };

  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            setGameStatus('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isGameStarted]);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setGameStatus('running');
    setTimeLeft(matchData.timeLimit * 60); // Convert minutes to seconds
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    // Add code submission logic here
    console.log('Code submitted:', code);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="game-page">
      <div className="game-header">
        <div className="game-info">
          <h1>{matchData.title}</h1>
          <span className="difficulty">{matchData.difficulty}</span>
        </div>
        <div className="game-timer">
          {isGameStarted ? (
            <span className={`timer ${timeLeft < 300 ? 'warning' : ''}`}>
              {formatTime(timeLeft)}
            </span>
          ) : (
            <button 
              className="start-game-btn"
              onClick={handleStartGame}
              disabled={gameStatus !== 'waiting'}
            >
              Start Game
            </button>
          )}
        </div>
      </div>

      <div className="game-content">
        <div className="problem-section">
          <div className="problem-description">
            <h2>{matchData.problem.title}</h2>
            <p>{matchData.problem.description}</p>
            
            <div className="examples">
              <h3>Examples:</h3>
              {matchData.problem.examples.map((example, index) => (
                <div key={index} className="example">
                  <p><strong>Input:</strong> {example.input}</p>
                  <p><strong>Output:</strong> {example.output}</p>
                  <p><strong>Explanation:</strong> {example.explanation}</p>
                </div>
              ))}
            </div>

            <div className="constraints">
              <h3>Constraints:</h3>
              <ul>
                {matchData.problem.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="code-section">
          <div className="code-editor">
            <div className="editor-header">
              <select className="language-select">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
              <button 
                className="submit-btn"
                onClick={handleSubmit}
                disabled={!isGameStarted}
              >
                Submit
              </button>
            </div>
            <textarea
              value={code}
              onChange={handleCodeChange}
              placeholder="Write your code here..."
              disabled={!isGameStarted}
            />
          </div>
        </div>

        <div className="players-section">
          <h3>Players</h3>
          <div className="players-list">
            {players.map(player => (
              <div key={player.id} className="player-item">
                <span className="player-name">{player.name}</span>
                <span className={`player-status ${player.status}`}>
                  {player.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game; 