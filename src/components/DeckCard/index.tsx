import React from "react";
import { Briefcase } from "lucide-react";
import Actions from "./components/Actions";
import StatusBadge from "./components/StatusBadge";

interface DeckCardProps {
  title: string;
  cardCount: number;
  statusMessage: string;
}

const DeckCard: React.FC<DeckCardProps> = ({ title, cardCount, statusMessage }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white w-sm rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-4 w-full">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-2xl">
          <Briefcase className="text-pink-500 w-6 h-6" />
        </div>
        <div className="flex items-center gap-4">
            <StatusBadge>{statusMessage}</StatusBadge>
            <Actions />
        </div>
      </div>
      <div className="flex-start w-full">
          <h3 className="text-gray-800 font-bold text-lg">{title}</h3>
          <p className="text-gray-500 text-sm">{cardCount} cards</p>
        </div>
    </div>
  );
};

export default DeckCard;