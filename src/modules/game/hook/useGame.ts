import { ICardRef } from '@/components/Card/types';
import { useState, useMemo, useRef } from 'react';

// TODO: remover esse cara daqui
interface IFlashCard {
    id: string;
    title: string;
    answer: string;
}

export const useGame = () => {
    const flashcards: IFlashCard[] = useMemo(() => [
        { id: '1', title: 'O que é polimorfismo na programação orientada a objetos?', answer: 'É a capacidade de um objeto assumir muitas formas. Ou seja, diferentes classes podem implementar métodos com o mesmo nome, mas com comportamentos diferentes.' },
        { id: '2', title: 'O que é encapsulamento?', answer: 'É o princípio de ocultar os detalhes internos de uma classe e expor apenas uma interface pública.' },
        { id: '3', title: 'O que é herança?', answer: 'É o mecanismo que permite que uma classe herde características de outra classe.' },
        { id: '4', title: 'O que é abstração?', answer: 'É o processo de simplificar objetos complexos, focando apenas nos aspectos relevantes.' },
        { id: '5', title: 'O que é uma interface?', answer: 'É um contrato que define quais métodos uma classe deve implementar.' },
        { id: '6', title: 'O que é sobrecarga de método?', answer: 'É a capacidade de definir múltiplos métodos com o mesmo nome, mas com diferentes parâmetros.' },
        { id: '7', title: 'O que é sobrescrita de método?', answer: 'É a redefinição de um método herdado em uma classe filha.' },
        { id: '8', title: 'O que é uma classe abstrata?', answer: 'É uma classe que não pode ser instanciada diretamente e geralmente contém métodos abstratos.' },
        { id: '9', title: 'O que é composição?', answer: 'É uma relação onde uma classe é composta por objetos de outras classes.' },
        { id: '10', title: 'O que é agregação?', answer: 'É uma relação onde uma classe contém referências a objetos de outras classes, mas não os possui exclusivamente.' }
    ], []);

    const cardRef = useRef<ICardRef>(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [answeredCards, setAnsweredCards] = useState<Set<string>>(new Set());
    const totalCards = flashcards.length;

    const currentCard = useMemo(() => {
        return flashcards[currentCardIndex] || null;
    }, [currentCardIndex, flashcards]);

    const percentage = useMemo(() => {
        if (currentCardIndex === 0) return 0;
        return Math.round(((currentCardIndex + 1) / totalCards) * 100);
    }, [currentCardIndex, totalCards]);

    const isFirstCard = useMemo(() => {
        return currentCardIndex === 0;
    }, [currentCardIndex]);

    const isLastCard = useMemo(() => {
        return currentCardIndex === totalCards - 1;
    }, [currentCardIndex, totalCards]);

    const isCurrentCardAnswered = useMemo(() => {
        return currentCard ? answeredCards.has(currentCard.id) : false;
    }, [currentCard, answeredCards]);

    const disableNavigateToNext = useMemo(() => {
        return !isCurrentCardAnswered || isLastCard;
    }, [isCurrentCardAnswered, isLastCard]);

    const handlePrevious = () => {
        cardRef.current?.resetFlip();
        setCurrentCardIndex(prev => Math.max(prev - 1, 0));
    }

    const handleNext = () => {
        cardRef.current?.resetFlip();
        setCurrentCardIndex(prev => Math.min(prev + 1, totalCards - 1));
    }

    const handleCardFeedback = (isCorrect: boolean) => {
        console.log({ isCorrect })
        if (isLastCard) return;
        setAnsweredCards(prev => new Set([...prev, currentCard.id]));
        handleNext();

    }

    return {
        currentCard,
        currentCardIndex,
        totalCards,
        percentage,
        isFirstCard,
        isLastCard,
        isCurrentCardAnswered,
        disableNavigateToNext,
        handlePrevious,
        handleNext,
        handleCardFeedback,
        cardRef
    };
};