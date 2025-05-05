import { useSortableList } from "@/hooks";

export function useCardStep() {
    const {
        items: cards,
        activeItem: activeCard,
        handleDragStart,
        handleDragEnd,
        handleDragCancel,
        sensors,
        sortableStrategy,
    } = useSortableList([
        { id: "1", title: "Pergunta 1" },
        { id: "2", title: "Pergunta 2" },
        { id: "3", title: "Pergunta 3" },
        { id: "4", title: "Pergunta 4" },
        { id: "5", title: "Pergunta 5" },
        { id: "6", title: "Pergunta 6" },
        { id: "7", title: "Pergunta 7" },
        { id: "8", title: "Pergunta 8" },
        { id: "9", title: "Pergunta 9" },
    ]);

    return {
        cards,
        handleDragEnd,
        handleDragStart,
        handleDragCancel,
        activeCard,
        sensors,
        sortableStrategy
    }
}