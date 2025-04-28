import React from "react";
import { ThumbsUp, Edit, Trash2, MoreHorizontal, Briefcase } from "lucide-react";
import Actions from "./components/Actions";

interface DeckCardProps {
  title: string;
  cardCount: number;
  statusMessage: string;
}

const DeckCard: React.FC<DeckCardProps> = ({ title, cardCount, statusMessage }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-2xl">
          <Briefcase className="text-pink-500 w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-800 font-bold text-lg">{title}</h3>
          <p className="text-gray-500 text-sm">{cardCount} cards</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
          <ThumbsUp className="w-4 h-4" />
          {statusMessage}
        </div>
        <Actions />
      </div>
    </div>
  );
};

export default DeckCard;