import DifficultySelector from "./components/DifficultySelector";
import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import ScoreBoard from "./components/ScoreBoard";
import { useMemoryGame } from "./hooks/use-memory-game";

function App() {
  const difficulty = "easy";

  const { cards, moves, time, gameCompleted, handleCardClick, resetGame } = useMemoryGame();

  if (!difficulty) return <DifficultySelector />

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 gap-4 sm:p-8 sm:gap-8">
      <ScoreBoard moves={moves} time={time} onRestart={resetGame} />
      
      <GameBoard cards={cards} onCardClick={handleCardClick} />

      {
        gameCompleted &&
          <GameModal moves={moves} time={time} onRestart={resetGame} />
      }
    </div>
  );
}

export default App;
