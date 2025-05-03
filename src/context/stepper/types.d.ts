export interface IStepperContextProps {
    currentStep: number;
    data: Record<string, unknown>;
    setData: (key: string, value: unknown) => void;
    nextStep: () => void;
    prevStep: () => void;
}