import Button from "@/components/Button";
import { useStepper } from "@/context/steoer";
import { IStepperControlsProps } from "./types";

export const StepperControls: React.FC<IStepperControlsProps> = ({
    isNextDisabled,
    isPrevVisible = true
}) => {
    const { nextStep, prevStep } = useStepper();

    return (
        <div className="flex gap-3 w-full">
            {isPrevVisible && (
                <Button 
                    full 
                    type="outlined" 
                    onClick={prevStep}
                >
                    Voltar
                </Button>
            )}
            <Button 
                full 
                onClick={nextStep}
                disabled={isNextDisabled}
            >
                Próximo
            </Button>
        </div>
    );
};