import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const CARD_STYLES = {
    base: "absolute flex h-full w-full items-center justify-center rounded-xl border-2 backface-hidden",
    front: "rotate-y-180 bg-white border-purple-200 text-2xl sm:text-4xl",
    verse: "bg-pink border-white/20",
}

type CardProps = {
    emoji: string;
}

function Card({ emoji }: CardProps) {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="relative h-16 w-16 cursor-pointer xs:h-20 xs:w-20 sm:h-24 sm:w-24" onClick={handleClick}>
            <div className={ cn("h-full w-full preserve-3d transition-transform duration-500", isFlipped && "rotate-y-180") }>
                <div className={ cn(CARD_STYLES.base, CARD_STYLES.verse) }>
                    <Sparkles className="h-6 w-6 text-white sm:h-8 sm:w-8 animate-pulse" />
                </div>
                <div className={ cn(CARD_STYLES.base, CARD_STYLES.front) }>
                    { emoji }
                </div>
            </div>
        </div>
    );
}

export default Card;
