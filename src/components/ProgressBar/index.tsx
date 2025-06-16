import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// TODO: criar um hook para o componente
export const ProgressBar: React.FC<IProgressBarProps> = ({
  percentage,
  onNext,
  onPrevious,
  disableNext = false
}) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  const isLeftDisabled = clampedPercentage === 0;
  const isRightDisabled = clampedPercentage === 100 || disableNext;

  function handlePrevious() {
    if (isLeftDisabled) return;
    onPrevious();
  }
  
  function handleNext() {
    if (isRightDisabled) return;
    onNext();
  }

  function getButtonStyles(disable: boolean) {
    if (disable) {
      return 'text-gray-400 cursor-not-allowed'
    }

    return 'hover:text-principal';
  }

  return (
    <div className="flex items-center text-black">
      <ChevronLeft 
        className={`cursor-pointer transition-colors ${getButtonStyles(isLeftDisabled)}`}
        onClick={handlePrevious}
      />
      <div className={`w-full h-4 border-gray-300 border-2 rounded-full overflow-hidden`}>
        <motion.div
          className={`h-3 bg-principal rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: `${clampedPercentage}%` }}
          transition={{
            duration: .4,
            ease: clampedPercentage === 0 ? "backIn" : "backOut",
          }}
        />
      </div>
      <ChevronRight 
        className={`cursor-pointer transition-colors ${getButtonStyles(isRightDisabled)}`}
        onClick={handleNext}
      />
    </div>
  );
};