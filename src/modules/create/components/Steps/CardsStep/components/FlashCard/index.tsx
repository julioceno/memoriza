import React from "react";
import { Actions } from "./components";
import { truncateText } from "@/utils";

export const FlashCard: React.FC<IFlashCardProps> = ({ id, title, answer }) => {
  return (
    <div className="flex flex-col p-4 bg-white h-full items-end sm:w-sm rounded-lg shadow-md hover:shadow-lg transition">
      <Actions id={id} />
      <div className="flex-start w-full">
        <h3 className="text-gray-800 font-bold text-lg">{truncateText(title, 40)}</h3>
        <h3 className="text-gray-400 text-sm">{truncateText(answer, 30)}</h3>
      </div>
    </div>
  );
};