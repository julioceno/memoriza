import DeckCard from "@/components/DeckCard";
import { StatusBadgeEnum } from "@/components/DeckCard/components/StatusBadge/typesStyles";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
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
    <main className="mt-20 md:mt-40">
      <SectionTitle>
        Aqui estao seus decks, vamos práticar!
      </SectionTitle>
      <div className="flex flex-wrap gap-4 mt-10 w-full max-w-7xl justify-center mx-auto">
        {decks.map((deck, index) => (
          <DeckCard
            key={index}
            title={deck.title}
            cardCount={deck.cardCount}
            statusBadgeType={deck.statusBadgeType}
          />
        ))}
      </div>
    </main>
  );
}