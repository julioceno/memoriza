import { useSortableList } from "@/hooks";
import { useMemo, useState } from "react";

// TODO: adicionar tipagem no arquivo de tipagens
interface ICard {
    id: string;
    title: string;
    answer: string;
}

interface IHandleOpenModalParams {
    id?: string;
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
        handleEditItem
    } = useSortableList<ICard>([]);

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeId, setActiveId] = useState<string>();
    const [initialQuestion, setInitialQuestion] = useState<string>("");
    const [initialAnswer, setInitialAnswer] = useState<string>("");

    const disablePrimaryButton = useMemo(() => {
        return cards.length === 0;
    }, [cards.length]);

    const handleModalOpen = (params?: IHandleOpenModalParams) => {
        setIsModalOpen(true);

        if (params?.id) {
            const cardToEdit = cards.find(card => card.id === params?.id);
            if (cardToEdit) {
                setActiveId(cardToEdit.id);
                setInitialQuestion(cardToEdit.title);
                setInitialAnswer(cardToEdit.answer);
            }
        }
    }

    const handleModalClose = () => {
        setIsModalOpen(false);

        setInitialAnswer("");
        setInitialQuestion("");
        setActiveId("");
    }

    const handleCreateOrEditFlashCard = ({ id, question, answer }: { id?: string, question: string; answer: string }) => {
        if (id) {
            handleEditItem(id, { title: question, answer: answer });
        } else {
            const newId = (cards.length + 1).toString();

            handleAddCard({
                id: newId,
                title: question,
                answer: answer,
            });
        }
        
        handleModalClose();
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
        disablePrimaryButton,

        isModalOpen,
        handleModalOpen,
        handleModalClose,
        handleCreateOrEditFlashCard,

        activeId,
        initialQuestion,
        initialAnswer
    }
}