import { useEffect, useState } from "react";
import { EMOJIS } from "@/constants";
import { Card } from "@/types";
import { useTimer } from "./use-timer";

export const createShuffledCards = () => {
    return [...EMOJIS, ...EMOJIS].sort(() => Math.random() - 0.5).map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
    }));
}

const checkGameCompletion = (cards: Card[]) => {
    return cards.every(card => card.isMatched);
}

export function useMemoryGame() {
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCards, setFlippedCards] = useState<Card[]>([]);
    const [moves, setMoves] = useState<number>(0);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [gameCompleted, setGameCompleted] = useState<boolean>(false);

    const { time, resetTime } = useTimer(gameStarted && !gameCompleted);

    const initializeGame = () => {
        setCards(createShuffledCards());
        setMoves(0);
        resetTime();
        setGameStarted(false);
        setGameCompleted(false);
        setFlippedCards([]);
    }

    useEffect(initializeGame, []);

    const handleCardClick = (id: number) => {
        const clickedCard = cards.find(card => card.id === id)!;

        if (flippedCards.length === 2 || clickedCard.isFlipped || clickedCard.isMatched) return;
        if (!gameStarted) setGameStarted(true);

        setCards((prevCards) =>
            prevCards.map(
                card => card.id === id ? { ...card, isFlipped: true } : card,
            ),
        );

        const newFlippedCards = [...flippedCards, clickedCard];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2){
            const [firstCard, secondCard] = newFlippedCards;
            const isMatched = firstCard.emoji === secondCard.emoji;
            setTimeout(() => {
                const updatedCards = cards.map(card => {
                    if (card.id === firstCard.id || card.id === secondCard.id) {
                        return {
                            ...card,
                            isFlipped: isMatched,
                            isMatched,
                        }
                    }
                    return card;
                });
    
                setCards(updatedCards);
                setFlippedCards([]);
                setMoves(prevModes => prevModes + 1);

                if (isMatched && checkGameCompletion(updatedCards)) {
                    setGameCompleted(true);
                }
            }, 500);
        }
    }

    return {
        cards,
        moves,
        time,
        gameCompleted,
        handleCardClick,
        resetGame: initializeGame,
    }
}
