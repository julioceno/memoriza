import Button from "@/components/Button";
import { useStepper } from "@/context/steoer";

export const StepperControls: React.FC = () => {
    const { nextStep, prevStep } = useStepper();

    return (
        <div className="flex gap-3 w-full">
            <Button full type="outlined" onClick={prevStep}>
                Voltar
            </Button>
            <Button full onClick={nextStep}>
                Próximo
            </Button>
        </div>
    );
};
