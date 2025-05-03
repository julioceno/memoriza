import Button from "@/components/Button";
import Input from "@/components/Input";
import SectionTitle from "@/components/SectionTitle";
import { useStepper } from "@/context/steoer";
import { useState } from "react";

export const CreateName: React.FC = () => {
    const {
        nextStep,
    } = useStepper()
    const [deckName, setDeckName] = useState("");

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-32 md:mt-40 flex flex-col gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
                <SectionTitle>
                    Escolha um nome para seu deck
                </SectionTitle>
                <Input
                    value={deckName}
                    placeholder="Insira um nome"
                    size='large'
                    full
                    onChange={(e) => setDeckName(e.target.value)}
                />
                <Button full onClick={() => nextStep()} disabled={!deckName}>
                    Próximo
                </Button>
            </div>
        </div>
    );
};