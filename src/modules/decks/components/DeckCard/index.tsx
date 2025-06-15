import React, { useState } from "react";
import { Briefcase, NotebookText } from "lucide-react";
import StatusBadge from "./components/StatusBadge";
import { Actions } from "@/components/Actions";
import { DeleteDialog } from "@/components";
import { useRouter } from "next/navigation";

export const DeckCard: React.FC<IDeckCardProps> = ({
  id,
  title,
  cardCount,
  statusBadgeType
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  function handleOnClickDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation(); 
    setIsDialogOpen(true);
  }

  const handleCardClick = () => {
    console.log("Card clicado:", id);
    router.push(`decks/game`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col cursor-pointer p-4 bg-white sm:w-sm rounded-lg shadow-md hover:shadow-lg transition"
    >
      <div className="flex items-start justify-between gap-1 sm:gap-4 w-full">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-2xl">
          <Briefcase className="text-principal w-6 h-6" />
        </div>

        <div
          className="flex items-center gap-2 sm:gap-4"
        >
          <StatusBadge type={statusBadgeType} />
          <Actions
            id={id}
            onDelete={handleOnClickDelete}
            onEdit={() => {}}
          />
        </div>
      </div>

      <div className="flex-start w-full">
        <h3 className="text-gray-800 font-bold text-lg truncate">{title}</h3>
        <div className="flex gap-1 text-slate-400 items-center">
          <NotebookText className="w-4 h-4" strokeWidth={1.8} />
          <p className="text-sm">{cardCount} cards</p>
        </div>
      </div>

      <div onClick={(e) => e.stopPropagation()}>
        <DeleteDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onConfirm={() => setIsDialogOpen(false)}
        />
      </div>
    </div>
  );
};