import DeckCard from "@/components/DeckCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div>
      <main className="mt-20 md:mt-40">
        <SectionTitle>
          Aqui estao seus decks, vamos práticar!
        </SectionTitle>
        <div className="flex">
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center">
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
             <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
            <DeckCard 
              title="Entrevista Java" 
              cardCount={10} 
              statusMessage="Você está bem!" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}