import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 gap-4">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      <GameBoard />
    </div>
  );
}

export default App;
