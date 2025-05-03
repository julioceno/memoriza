import React from "react";
import { Briefcase, NotebookText } from "lucide-react";
import Actions from "./components/Actions";
import StatusBadge from "./components/StatusBadge";
import { StatusBadgeEnum } from "./components/StatusBadge/typesStyles";

interface IDeckCardProps {
  title: string;
  cardCount: number;
  statusBadgeType: StatusBadgeEnum;
}

export const DeckCard: React.FC<IDeckCardProps> = ({ title, cardCount, statusBadgeType }) => {
  return (
    <div className="flex flex-col p-4 bg-white w-sm rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-1 sm:gap-4 w-full">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-2xl">
          <Briefcase className="text-principal w-6 h-6" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <StatusBadge type={statusBadgeType} />
          <Actions />
        </div>
      </div>
      <div className="flex-start w-full">
        <h3 className="text-gray-800 font-bold text-lg">{title}</h3>
        <div className="flex gap-1 text-slate-400 items-center">
          <NotebookText className="w-4 h-4" strokeWidth={1.8}/>
          <p className="text-sm">{cardCount} cards</p>
        </div>
      </div>
    </div>
  );
};