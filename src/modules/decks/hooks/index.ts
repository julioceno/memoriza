import { useState } from "react";
import { StatusBadgeEnum } from "../components/DeckCard/components/StatusBadge/typesStyles";
import { DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export function useDecks() {
    const [decks, setDecks] = useState([
        { id: "1", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "2", title: "Fundamentos de JavaScript", cardCount: 15, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "3", title: "Algoritmos e Estruturas de Dados", cardCount: 20, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "4", title: "React Avançado", cardCount: 12, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "5", title: "Design Patterns em Java", cardCount: 18, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "6", title: "Entrevista Python", cardCount: 14, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "7", title: "Banco de Dados SQL", cardCount: 16, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "8", title: "Redes de Computadores", cardCount: 11, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "9", title: "Estrutura de Sistemas Operacionais", cardCount: 13, statusBadgeType: StatusBadgeEnum.SUCCESS },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 200,
                tolerance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );


    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id === over?.id) return;

        setDecks((prev) => {
            const oldIndex = prev.findIndex(deck => deck.id === active.id);
            const newIndex = prev.findIndex(deck => deck.id === over!.id);

            const newDecks = arrayMove(prev, oldIndex, newIndex);
            return newDecks;
        });
    }

    return {
        decks,
        handleDragEnd,
        sensors
    }
}