import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './TicTacToe/Board.jsx'
import UserInput from './TicTacToe/UserInput.jsx'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleStartGame = ({player1, player2}) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setGameStarted(true);
  };

  if (!gameStarted) {
    return (
      <UserInput handleStartGame={handleStartGame} />
    );
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {/* <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button> */}
      <Board player1={player1} player2={player2} />
    </div>
  )
}

export default App;

// return (
  //   <div className={`App ${darkMode ? 'dark' : ''}`}>
  //     {!gameStarted ? (
  //       <div className="user-input-wrapper">
  //         <div className="top-controls">
  //           <button
  //             className="dark-mode-toggle"
  //             onClick={() => setDarkMode(!darkMode)}
  //           >
  //             {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
  //           </button>
  //         </div>
  //         <UserInput handleStartGame={handleStartGame} />
  //       </div>
  //     ) : (
  //       <Board player1={player1} player2={player2} />
  //     )}
  //   </div>
  // );
