import { useState, useCallback, useMemo } from 'react';


export const useGame = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 3;

    const percentage = useMemo(() => {
        return Math.round((currentStep / totalSteps) * 100);
    }, [currentStep, totalSteps])
        ;
    const handlePrevious = () => {
        setCurrentStep(prev => {
            return Math.max(prev - 1, 0)
        });
    };

    const handleNext = () => {
        setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    };

    return {
        currentStep,
        totalSteps,
        percentage,
        handlePrevious: useCallback(handlePrevious, []),
        handleNext: useCallback(handleNext, [])
    }
};