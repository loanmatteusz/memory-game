import DifficultySelector from "./components/DifficultySelector";
import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import ScoreBoard from "./components/ScoreBoard";

function App() {

  const gameCompleted = false;
  const difficulty = null;

  if (!difficulty) return <DifficultySelector />

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 gap-4 sm:p-8 sm:gap-8">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      
      <GameBoard />

      {
        gameCompleted &&
          <GameModal moves={10} time={30} onRestart={() => {}} />
      }
    </div>
  );
}

export default App;
