'use client';
import { DeckCard, SectionTitle } from "@/components";
import { StatusBadgeEnum } from "@/components/DeckCard/components/StatusBadge/typesStyles";

export default function Deck() {
  const decks = [
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.ERROR },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.WARNING },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
    { title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
  ];

  return (
    <div className="mt-20 md:mt-40 flex flex-col items-center">
      <SectionTitle>
        Aqui estao seus decks, vamos práticar!
      </SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {decks.map((deck, index) => (
          <DeckCard
            key={index}
            title={deck.title}
            cardCount={deck.cardCount}
            statusBadgeType={deck.statusBadgeType}
          />
        ))}
      </div>
    </div>
  );
}