import { useState } from "react";
import DifficultySelector from "./components/DifficultySelector";
import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import ScoreBoard from "./components/ScoreBoard";
import { useMemoryGame } from "./hooks/use-memory-game";
import { Difficulty } from "./types";

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const { cards, moves, time, gameCompleted, handleCardClick, resetGame } = useMemoryGame(difficulty || "easy");

  if (!difficulty) return <DifficultySelector onSelect={setDifficulty} />

  const handleRestart = () => {
    setDifficulty(null);
    resetGame();
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 gap-4 sm:p-8 sm:gap-8">
      <ScoreBoard moves={moves} time={time} onRestart={handleRestart} />
      
      <GameBoard cards={cards} difficulty={difficulty} onCardClick={handleCardClick} />

      {
        gameCompleted &&
          <GameModal moves={moves} time={time} onRestart={resetGame} />
      }
    </div>
  );
}

export default App;
