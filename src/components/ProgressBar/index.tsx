import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProgressBar: React.FC<IProgressBarProps> = ({
  percentage,
  onNext,
  onPrevious
}) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  const isLeftDisabled = clampedPercentage === 0;
  const isRightDisabled = clampedPercentage === 100;


  function handlePrevious() {
    if (isLeftDisabled) return;
    onPrevious();
  }
  function handleNext() {
    if (isRightDisabled) return;
    onNext();
  }


  return (
    <div className="flex items-center text-black">
      <ChevronLeft 
        className={`cursor-pointer transition-colors ${
          isLeftDisabled 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'hover:text-principal'
        }`}
        onClick={handlePrevious}
      />
      <div className={`w-full h-4 border-gray-300 border-2 rounded-full overflow-hidden`}>
        <motion.div
          className={`h-3 bg-principal rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: `${clampedPercentage}%` }}
          transition={{
            duration: .4,
            ease: "backOut",
          }}
        />
      </div>
      <ChevronRight 
        className={`cursor-pointer transition-colors ${
          isRightDisabled 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'hover:text-principal'
        }`}
        onClick={handleNext}
      />
    </div>
  );
};