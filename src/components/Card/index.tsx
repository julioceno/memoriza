import React, { useState } from "react";
import { motion } from "framer-motion";
import { ICardProps } from "./types";

export const Card: React.FC<ICardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="relative w-68 xs:w-6/12 xl:w-3/12 h-52 cursor-pointer perspective-origin-right"
      onClick={handleFlip}
    >
      <motion.div
        className="absolute w-full h-full rounded-lg shadow-lg transform text-center"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute w-full h-full bg-white flex flex-col items-center justify-center rounded-lg"
        >
          <p className="absolute top-1/2 transform -translate-y-1/2 text-sm px-2">{frontContent}</p>
          <p className="absolute bottom-4 text-xs font-semibold">Clique para ver o cartão</p>
        </div>

        <div
          className="absolute w-full h-full bg-red-50 flex items-center justify-center rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="absolute top-1/2 transform -translate-y-1/2 text-sm px-2">{backContent}</p>
        </div>
      </motion.div>
    </div>
  );
};