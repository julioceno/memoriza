import { StepperControls } from "../../StepperControls";
import { Button, SectionTitle } from "@/components";
import { FlashCard } from "./components";

export const CardsStep: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-32 md:mt-40 flex flex-col gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
                <SectionTitle>
                    Crie seus cards
                </SectionTitle>
                <div className="flex flex-col gap-4">
                    <div>
                        <Button shape="square">
                            Criar Flash Card
                        </Button>
                    </div>
                    <FlashCard title="aaa" id={"1"}/>
                </div>
                <StepperControls
                    isNextDisabled={true}
                />
            </div>
        </div>
    );
};