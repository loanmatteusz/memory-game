import { cn } from "@/lib/utils";
import { Brain, Sparkles, Zap } from "lucide-react";

const DIFFICULTY_STYLES = {
    button: "h-20 sm:h-32 w-full sm:w-32 rounded-xl bg-gradient-to-b",
    buttonContent: "flex items-center justify-center gap-2 sm:flex-col",
}

const DIFFICULTIES = [
    {
        label: 'Easy',
        icon: Sparkles,
        color: "from-green-400 to-emerald-500"
    },
    {
        label: 'Medium',
        icon: Brain,
        color: "from-blue-400 to-indigo-500"
    },
    {
        label: 'Hard',
        icon: Zap,
        color: "from-purple-400 to-purple-700"
    },
] as const;

function DifficultySelector() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 gap-4 sm:p-8 sm:gap-8">
            <div className="flex flex-col w-full gap-6">
                <h2 className="mb-2 text-center text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                    Select Difficulty
                </h2>

                <div className="flex w-full flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                    {
                        DIFFICULTIES.map(({ label, icon: Icon, color }) => (
                            <button key={label} className={cn(DIFFICULTY_STYLES.button, color)}>
                                <div className={cn(DIFFICULTY_STYLES.buttonContent)}>
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                                    <span className="text-base font-medium sm:text-lg">{label}</span>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default DifficultySelector;
