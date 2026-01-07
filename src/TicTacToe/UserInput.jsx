import { useState, useEffect } from 'react';
import Board from './Board';


const UserInput = ({handleStartGame}) =>{
    const [player1, setPlayer1] = useState('X');
    const [player2, setPlayer2] = useState('O');

    return (
        <div>
            <h2>Enter Player Names:</h2>
            <input type="text" placeholder="Player 1 (X)" onChange={(e) => setPlayer1(e.target.value)} />
            <br></br>
            <input type="text" placeholder="Player 2 (O)" onChange={(e) => setPlayer2(e.target.value)} />
            <br></br>
            <button onClick={() => {
                handleStartGame({player1, player2});
            }}>Start Game</button>
        </div>
    )
}

export default UserInput;