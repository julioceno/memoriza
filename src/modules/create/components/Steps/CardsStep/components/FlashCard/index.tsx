import React from "react";
import { Actions } from "./components";

export const FlashCard: React.FC<IFlashCardProps> = ({ id, title, answer }) => {
  return (
    <div className="flex flex-col p-4 min-h-24 bg-white items-end sm:w-sm rounded-lg shadow-md hover:shadow-lg transition">
      <Actions id={id} />
      <div className="flex-start w-full">
        <h3 className="text-gray-800 font-bold text-sm sm:text-lg truncate">{title}</h3>
        <h3 className="text-gray-400 text-xs sm:text-md truncate">{answer}</h3>
      </div>
    </div>
  );
};