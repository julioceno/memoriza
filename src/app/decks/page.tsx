'use client';

import { useState } from "react";
import { DeckCard, SectionTitle } from "@/components";
import { StatusBadgeEnum } from "@/components/DeckCard/components/StatusBadge/typesStyles";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

export default function Deck() {
  const [decks, setDecks] = useState([
    { id: "1", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { id: "2", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.ERROR },
    { id: "3", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { id: "4", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.WARNING },
    { id: "5", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },

    { id: "10", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { id: "20", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.ERROR },
    { id: "30", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { id: "40", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.WARNING },
    { id: "50", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = decks.findIndex(deck => deck.id === active.id);
      const newIndex = decks.findIndex(deck => deck.id === over.id);
      setDecks(arrayMove(decks, oldIndex, newIndex));
    }
  }

  return (
    <div className="mt-20 md:mt-40 flex flex-col items-center">
      <SectionTitle>
        Aqui estao seus decks, vamos práticar!
      </SectionTitle>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={decks.map(deck => deck.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            {decks.map((deck) => (
              <SortableItem key={deck.id} id={deck.id}>
                <DeckCard
                  title={deck.title}
                  cardCount={deck.cardCount}
                  statusBadgeType={deck.statusBadgeType}
                />
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  children: React.ReactNode;
};

export function SortableItem({ id, children }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 9999 : 1,
  };


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      {children}
      <button
        className=" right-2 p-2 bg-blue-500 text-white rounded"
        {...listeners}  
      >
        Mover
      </button>
    </div>
  );
}