import { useContext, createContext } from "react";
import { IStepperContextProps } from "./types";

export const StepperContext = createContext<IStepperContextProps | undefined>(undefined);

export const useStepper = () => {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error("useStepper must be used within a StepperProvider");
    }
    return context;
};
