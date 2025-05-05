import { Button, SectionTitle } from "@/components";
import { FlashCard } from "./components";

export const CardsStep: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
                <SectionTitle>
                    Crie seus cards
                </SectionTitle>
                <div className="flex flex-col items-center gap-4">
                    <div className="self-start sm:w-full">
                        <Button shape="square">
                            Criar Flash Card
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        <FlashCard title="aaa" id={"1"} />
                        <FlashCard title="aaa" id={"1"} />
                        <FlashCard title="aaa" id={"1"} />
                        <FlashCard title="aaa" id={"1"} />
                        <FlashCard title="aaa" id={"1"} />
                        <FlashCard title="aaa" id={"1"} />
                    </div>
                </div>
            </div>
        </div>
    );
};