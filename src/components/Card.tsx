import { Sparkles } from "lucide-react";
import { useState } from "react";

function Card() {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="relative h-16 w-16 cursor-pointer" onClick={handleClick}>
            <div className={`h-full w-full preserve-3d ${isFlipped && "rotate-y-180"} transition-transform duration-500`}>
                <div className="backface-hidden absolute flex h-full w-full bg-pink items-center justify-center rounded-xl border-2 border-white/20">
                    <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="backface-hidden rotate-y-180 absolute flex h-full w-full bg-white items-center justify-center rounded-xl border-2 border-purple-200">
                    🍬
                </div>
            </div>
        </div>
    );
}

export default Card;
