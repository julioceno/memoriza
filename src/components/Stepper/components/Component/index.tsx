import { StepperContext } from "@/context/steoer";
import { useState } from "react";

export const Stepper: React.FC<IStepperProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setDataState] = useState<Record<string, unknown>>({});

  const setData = (key: string, value: unknown) => {
    setDataState((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <StepperContext.Provider value={{ currentStep, data, setData, nextStep, prevStep }}>
      {children}
    </StepperContext.Provider>
  );
};