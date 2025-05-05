'use client';

import { SectionTitle, SortableItem } from "@/components";
import {
  DndContext,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { DeckCard, useDecks } from "@/modules";
import { restrictToFirstScrollableAncestor, restrictToParentElement } from "@dnd-kit/modifiers";

export default function Deck() {
  const {
    sensors,
    handleDragEnd,
    decks,
    handleDragStart,
    handleDragCancel,
    activeDeck,
    sortableStrategy
  } = useDecks();

  return (
    <div className="mt-20 md:mt-40 flex flex-col items-center">
      <SectionTitle>
        Aqui estão seus decks, vamos práticar!
      </SectionTitle>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToParentElement, restrictToFirstScrollableAncestor]}
      >
        <SortableContext
          // TODO: adicionar esse items dentro de um useMemo no useDecks
          items={decks.map(deck => deck.id)}
          strategy={sortableStrategy}
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
