import React from "react";
import { motion } from "framer-motion";

export const ProgressBar: React.FC<IProgressBarProps> = ({
  percentage,
}) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
      <div className={`w-full h-4 border-gray-200 border-2 rounded-full overflow-hidden`}>
        <motion.div
          className={`h-3 bg-principal rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: `${clampedPercentage}%` }}
          transition={{
            duration: .8,
            ease: "backOut",
          }}
        />
      </div>
  );
};

export default ProgressBar;