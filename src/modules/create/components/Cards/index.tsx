import { StepperControls } from "../StepperControls";
import { SectionTitle } from "@/components";

export const CardsStep: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-32 md:mt-40 flex flex-col gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
                <SectionTitle>
                    Crie seus cards
                </SectionTitle>
                
                <StepperControls
                    isNextDisabled={true}
                />
            </div>
        </div>
    );
};