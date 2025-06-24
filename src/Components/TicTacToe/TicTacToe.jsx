import React, { useState, useEffect } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [gameStatus, setGameStatus] = useState(null); // 'win', 'draw', or null
    
    const toggle = (num) => {
        if (lock || board[num] !== "") {
            return;
        }
        
        const newBoard = [...board];
        const currentPlayer = count % 2 === 0 ? "x" : "o";
        newBoard[num] = currentPlayer;
        
        setBoard(newBoard);
        setCount(count + 1);
        checkWin(newBoard, currentPlayer);
    }

    useEffect(() => {
        if (gameStatus === 'win') {
            const winner = count % 2 === 0 ? 'o' : 'x'; // Previous player won
            toast.success(`Player ${winner.toUpperCase()} wins!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        } else if (gameStatus === 'draw') {
            toast.info("It's a draw!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    }, [gameStatus, count]);

    const checkWin = (currentBoard, player) => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (
                currentBoard[a] && 
                currentBoard[a] === currentBoard[b] && 
                currentBoard[a] === currentBoard[c]
            ) {
                setLock(true);
                setGameStatus('win');
                return;
            }
        }
        
        // Check for draw
        if (currentBoard.every(square => square !== "")) {
            setLock(true);
            setGameStatus('draw');
            return;
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setCount(0);
        setLock(false);
        setGameStatus(null);
        toast.dismiss();
    }

    return (
        <div className='container'>
            <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={() => toggle(0)}>
                        {board[0] === "x" && <img src={cross_icon} alt="X" />}
                        {board[0] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(1)}>
                        {board[1] === "x" && <img src={cross_icon} alt="X" />}
                        {board[1] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(2)}>
                        {board[2] === "x" && <img src={cross_icon} alt="X" />}
                        {board[2] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={() => toggle(3)}>
                        {board[3] === "x" && <img src={cross_icon} alt="X" />}
                        {board[3] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(4)}>
                        {board[4] === "x" && <img src={cross_icon} alt="X" />}
                        {board[4] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(5)}>
                        {board[5] === "x" && <img src={cross_icon} alt="X" />}
                        {board[5] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={() => toggle(6)}>
                        {board[6] === "x" && <img src={cross_icon} alt="X" />}
                        {board[6] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(7)}>
                        {board[7] === "x" && <img src={cross_icon} alt="X" />}
                        {board[7] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(8)}>
                        {board[8] === "x" && <img src={cross_icon} alt="X" />}
                        {board[8] === "o" && <img src={circle_icon} alt="O" />}
                    </div>
                </div>
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
            
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}