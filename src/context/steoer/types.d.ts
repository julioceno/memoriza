export interface IStepperContextProps {
    currentStep: number;
    data: Record<string, any>;
    setData: (key: string, value: any) => void;
    nextStep: () => void;
    prevStep: () => void;
}