import { useState } from "react";
import { Board } from "./components/Board.jsx";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const isX = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((squares /*array[move]*/, move /*index*/) => {
    return (
      <li key={move}>
        <button onClick={() => setCurrentMove(move)}>
          {move > 0
            ? `Vá para o movimento #${move}`
            : "Vá para o inicio do jogo"}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isX={isX} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
