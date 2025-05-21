import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import ScoreBoard from "./components/ScoreBoard";

function App() {

  const gameCompleted = false;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 gap-4">
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
