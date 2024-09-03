import { useState } from "react";

export const useStepper = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);
    console.log(currentStep)

    function changeStep(i, e) {
        //O hook form Hook ja faz isso de não deixa submeter o form
        if (e) e.preventDefault();
        console.log(i);
        console.log(steps);
        
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