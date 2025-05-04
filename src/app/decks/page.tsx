'use client';

import { useState } from "react";
import { SectionTitle } from "@/components";
import {
  DndContext,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import {
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { DeckCard, SortableItem, useDecks } from "@/modules";
import { restrictToFirstScrollableAncestor, restrictToParentElement } from "@dnd-kit/modifiers";

export default function Deck() {
  const {
    sensors,
    handleDragEnd,
    decks,
  } = useDecks();

  const [activeId, setActiveId] = useState<string | null>(null);

  const activeDeck = decks.find((deck) => deck.id === activeId);

  return (
    <div className="mt-20 md:mt-40 flex flex-col items-center">
      <SectionTitle>
        Aqui estão seus decks, vamos práticar!
      </SectionTitle>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={(event) => setActiveId(event.active.id as string)}
        onDragEnd={(event) => {
          handleDragEnd(event);
          setActiveId(null);
        }}
        onDragCancel={() => setActiveId(null)}
        modifiers={[restrictToParentElement, restrictToFirstScrollableAncestor]}
      >
        <SortableContext
          items={decks.map(deck => deck.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            {decks.map((deck) => (
              <SortableItem key={deck.id} id={deck.id}>
                <DeckCard
                  id={deck.id}
                  title={deck.title}
                  cardCount={deck.cardCount}
                  statusBadgeType={deck.statusBadgeType}
                />
              </SortableItem>
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeDeck ? (
            <DeckCard
              id={activeDeck.id}
              title={activeDeck.title}
              cardCount={activeDeck.cardCount}
              statusBadgeType={activeDeck.statusBadgeType}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
