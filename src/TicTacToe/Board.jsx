import Square from './Square';
import { useState, useEffect } from 'react';

const calculateWinner = (squares)=>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
            return squares[a];
    }
    return null;
}


const Board = ({player1, player2}) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(s => s !== null);

    let status = null;

    if (winner){
        status = 'Winner: ' + winner;
    } else if (isDraw) {
        status = 'Draw!';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    // Update scores when there's a winner
    useEffect(() => {
        if (winner === 'X') {
            setScore1(score1 + 1);
        } else if (winner === 'O') {
            setScore2(score2 + 1);
        }
    }, [winner]);

    // Play again resets the board but keeps the score
    const playAgain =() =>{
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        // setScore1(0);
        // setScore2(0);
    }

    const handleReset = () =>{
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    const handleClick = (i) =>{
        
        if (squares[i] === null && calculateWinner(squares) === null){
            const nextSquares = squares.slice();
            if (xIsNext)
                nextSquares[i] = 'X';
            else
                nextSquares[i] = 'O';
            setSquares(nextSquares);
            setXIsNext(!xIsNext);
    }
    }
    
    return (
        <div className = "board-container">
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}   />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
            <div>   
                {(winner || isDraw) && (
                        <button className="play-again-button" onClick={playAgain}>Play Again</button>
                )}
                <button className = "play-again-button" onClick = {handleReset}>Reset</button>
            </div>
            <div className="score-board">
                <h3>Score:</h3>
                <p>Player {player1}: {score1}</p>
                <p>Player {player2}: {score2}</p>
            </div>
        </div>
    )
}

export default Board;