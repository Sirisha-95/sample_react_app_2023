
import MyButton from './Button';
import { useState } from 'react';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isNext, setNextPlayer] = useState(false);

    const handleSquares = function (i) {
        //const nextSquares = squares.slice();
        const nextSquares = [...squares];

        if (!isNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setNextPlayer(!isNext);
        setSquares(nextSquares);


    }
    const calWinner = function () {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const winner = calWinner(squares);
    let status;
    if (winner) {
        status = 'Winner' + winner;
    } else {
        status = "Next player: " + (!isNext ? "X" : "O");
    };

    return (
        <div className="App">
            <div className="status">{status}</div>
            <div className='board-row'>
                < MyButton value={squares[0]} onBtnClick={() => handleSquares(0)} />
                < MyButton value={squares[1]} onBtnClick={() => handleSquares(1)} />
                < MyButton value={squares[2]} onBtnClick={() => handleSquares(2)} />
            </div>
            <div className='board-row'>
                < MyButton value={squares[3]} onBtnClick={() => handleSquares(3)} />
                < MyButton value={squares[4]} onBtnClick={() => handleSquares(4)} />
                < MyButton value={squares[5]} onBtnClick={() => handleSquares(5)} />
            </div>
            <div className='board-row'>
                < MyButton value={squares[6]} onBtnClick={() => handleSquares(6)} />
                < MyButton value={squares[7]} onBtnClick={() => handleSquares(7)} />
                < MyButton value={squares[8]} onBtnClick={() => handleSquares(8)} />
            </div>
        </div >
    );
}

export default Board;
