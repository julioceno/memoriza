import DeckCard from "@/components/DeckCard";
import { StatusBadgeEnum } from "@/components/DeckCard/components/StatusBadge/typesStyles";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
      <main className="mt-20 md:mt-40">
        <SectionTitle>
          Aqui estao seus decks, vamos práticar!
        </SectionTitle>
        <div className="flex flex-wrap gap-4 mt-10 w-full max-w-7xl justify-center mx-auto">
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.ERROR}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.WARNING}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusBadgeType={StatusBadgeEnum.SUCCESS}
            />
        </div>
      </main>
  );
}