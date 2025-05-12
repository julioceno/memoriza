import React, { useState } from "react";
import { motion } from "framer-motion";
import { ICardProps } from "./types";

export const Card: React.FC<ICardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="relative w-80 h-48 cursor-pointer perspective"
      onClick={handleFlip}
    >
      <motion.div
        className={`absolute w-full h-full rounded-lg shadow-lg transform` }
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute w-full h-full bg-white flex flex-col items-center justify-center rounded-lg"
        >
          <p>{frontContent}</p>
          Clique para ver o cartão
        </div>

        <div
          className="absolute w-full h-full bg-red-100 flex items-center justify-center rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p>{backContent}</p>
        </div>
      </motion.div>
    </div>
  );
};