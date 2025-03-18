import { useState } from "react";

export const useStepper = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i) {
        if (i < 0 || i >= steps.length) return;
        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}