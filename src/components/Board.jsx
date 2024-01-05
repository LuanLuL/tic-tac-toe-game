import { Square } from "./Square";

export function Board({ isX, squares, onPlay }) {
  console.log({ isX, squares, onPlay });

  function handleClickOnSquares(position) {
    if (squares[position] !== "" || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (isX) {
      nextSquares[position] = "X";
    } else {
      nextSquares[position] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner !== null) {
    status = `Winner: ${winner}`;
  } else {
    status = `Próximo jogador: ${isX ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClickOnSquares(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClickOnSquares(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClickOnSquares(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClickOnSquares(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClickOnSquares(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClickOnSquares(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClickOnSquares(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClickOnSquares(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClickOnSquares(8);
          }}
        />
      </div>
    </>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== "" &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
