type GameModalProps = {
    moves: number;
    time: number;
    onRestart: () => void;
}

function GameModal({ moves, time, onRestart }: GameModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="max-w-sm rounded-xl bg-white p-6 text-center sm:p-8">
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                    🎉 Congratulations! 🎉
                </h2>
                <p className="mb-6 text-lg">
                    You completed the game in <br/>
                    <b>{moves} moves</b> and <b>{time}</b>!
                </p>
                <button onClick={onRestart} className="bg-pink px-6 py-3 rounded-lg font-medium text-white transition-opacity hover:opacity-90">
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default GameModal;
