import { useStepper } from "@/context/steoer";
import { ReactNode } from "react";

interface StepProps {
    stepIndex: number;
    children: ReactNode;
}

export const Step: React.FC<StepProps> = ({ stepIndex, children }) => {
    const { currentStep } = useStepper();
    return currentStep === stepIndex ? <div>{children}</div> : null;
};