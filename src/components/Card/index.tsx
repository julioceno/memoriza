import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { ICardProps, ICardRef } from "./types";

export const Card = forwardRef<ICardRef, ICardProps>(({ frontContent, backContent }, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = () => setIsFlipped(!isFlipped);

  const resetFlip = () => setIsFlipped(false);

  useImperativeHandle(ref, () => ({
    resetFlip,
  }), []);

  return (
    <div
      className="relative w-full h-52 text-black cursor-pointer perspective-origin-right"
      onClick={handleToggleFlip}
    >
      <motion.div
        className="absolute w-full h-full rounded-lg shadow-lg transform text-center"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0, rotateX: isFlipped ? 15 : 0 }}
        transition={{ 
          duration: 0.4, 
          type: "spring", 
          stiffness: 250, 
          damping: 20 
        }}
      >
        <div
          className="absolute w-full h-full bg-white flex flex-col items-center justify-center rounded-lg"
        >
          <p className="absolute top-1/2 transform -translate-y-1/2 text-sm px-2">{frontContent}</p>
          <p className="absolute bottom-4 text-xs font-semibold">Clique para ver a resposta</p>
        </div>

        <div
          className="absolute w-full h-full bg-green-50 flex items-center justify-center rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="absolute top-1/2 transform -translate-y-1/2 text-sm px-2">{backContent}</p>
          <p className="absolute bottom-4 text-xs font-semibold">Clique para ver a questão</p>
        </div>
      </motion.div>
    </div>
  );
});