import { useState, useEffect } from 'react';
import './styles/UserInput.css';

const UserInput = ({handleStartGame}) =>{
    
    const [player1, setPlayer1] = useState('X');
    const [player2, setPlayer2] = useState('O');
    console.log("Start clicked", player1, player2);
    return (
        <div className="user-input-container">
            <div className="setup-card">
                <div className="setup-title">Tic Tac Toe</div>
                Enter Player Names:
                <input className="input-player-names" type="text" placeholder="Player 1 (X)" onChange={(e) => setPlayer1(e.target.value)} />
                <br></br>
                <input className="input-player-names" type="text" placeholder="Player 2 (O)" onChange={(e) => setPlayer2(e.target.value)} />
                <br></br>
                <button className="start-game-button" onClick={() => {
                    handleStartGame({player1, player2});
                }}>Start Game</button>
            </div>
        </div>
    )
}

export default UserInput;