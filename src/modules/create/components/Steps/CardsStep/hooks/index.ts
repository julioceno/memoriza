import { useSortableList } from "@/hooks";
import { useState } from "react";

interface ICard {
    id: string;
    title: string;
    answer: string;
}

export function useCardStep() {
    const {
        items: cards,
        activeItem: activeCard,
        itemsIds: cardsIds,
        handleAddItem: handleAddCard,
        handleDragStart,
        handleDragEnd,
        handleDragCancel,
        sensors,
        sortableStrategy,
    } = useSortableList<ICard>([]);

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const handleCreateFlashCard = ({ question, answer }: { question: string; answer: string }) => {
        handleModalClose();
        handleAddCard({
            id: (cards.length + 1).toString(),
            title: question,
            answer: answer,
        });
    };


    return {
        cards,
        handleDragEnd,
        handleDragStart,
        handleDragCancel,
        activeCard,
        sensors,
        sortableStrategy,
        cardsIds,

        isModalOpen,
        handleModalOpen,
        handleModalClose,
        handleCreateFlashCard
    }
}