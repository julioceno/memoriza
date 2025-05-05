import { useState } from "react";
import { StepperControls } from "../../StepperControls";
import { Input, SectionTitle } from "@/components";

export const CreateNameStep: React.FC = () => {
    const [deckName, setDeckName] = useState("");

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
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
                <StepperControls
                    isNextDisabled={!deckName.length}
                    isPrevVisible={false}
                />
            </div>
        </div>
    );
};