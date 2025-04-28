import DeckCard from "@/components/DeckCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div>
      <main className="mt-20 md:mt-40">
        <SectionTitle>
          Aqui estao seus decks, vamos práticar!
        </SectionTitle>
        <div className="flex gap-4 mt-10">
          <DeckCard 
            title="Entrevista Java" 
            cardCount={10} 
            statusMessage="Você está bem!" 
          />
        </div>
      </main>
    </div>
  );
}