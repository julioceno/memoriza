import React from "react";
import { Actions } from "./components";

export const FlashCard: React.FC<IFlashCardProps> = ({ id, title }) => {
  return (
    <div className="flex flex-col p-4 bg-white w-sm items-end rounded-lg shadow-md hover:shadow-lg transition">
      <Actions id={id} />
      <div className="flex-start w-full">
        <h3 className="text-gray-800 font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
};