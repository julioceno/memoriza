import { useIsMobile } from "@/hooks";
import { DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, rectSortingStrategy, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";

export function useCardStep() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [cards, setCards] = useState([
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

    const isMobile = useIsMobile();
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

    const sortableStrategy = useMemo(() => {
        if (isMobile) return verticalListSortingStrategy

        return rectSortingStrategy
    }, [isMobile])

    const activeCard = useMemo(() => {
        return cards.find(deck => deck.id === activeId);
    }, [activeId, cards]);

    function handleDragStart(event: DragEndEvent) {
        const { active } = event;
        setActiveId(active.id.toString());
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id === over?.id) return;

        setCards((prev) => {
            const oldIndex = prev.findIndex(deck => deck.id === active.id);
            const newIndex = prev.findIndex(deck => deck.id === over!.id);

            return arrayMove(prev, oldIndex, newIndex);
        });
    }

    function handleDragCancel() {
        setActiveId(null);
    }

     
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