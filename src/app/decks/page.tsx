'use client';

import { SectionTitle } from "@/components";
import {
  DndContext,
  closestCenter,
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
  } = useDecks()

  return (
    <div className="mt-20 md:mt-40 flex flex-col items-center">
      <SectionTitle>
        Aqui estao seus decks, vamos práticar!
      </SectionTitle>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
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
      </DndContext>
    </div>
  );
}