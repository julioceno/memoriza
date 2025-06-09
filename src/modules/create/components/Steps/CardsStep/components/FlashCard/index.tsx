import { DeleteDialog } from "@/components";
import { Actions } from "@/components/Actions";
import React, { useState } from "react";

export const FlashCard: React.FC<IFlashCardProps> = ({ 
  id, 
  title, 
  answer,

  onEdit,
  onDelete
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleDelete() {
    onDelete();
    setIsDialogOpen(false);
  }

  return (
    <div className="flex flex-col p-4 min-h-24 bg-white items-end sm:w-sm rounded-lg shadow-md hover:shadow-lg transition">
      <Actions 
        onEdit={onEdit}
        onDelete={() => setIsDialogOpen(true)}
        id={id} 
      />
      <div className="flex-start w-full">
        <h3 className="text-gray-800 font-bold text-sm sm:text-lg truncate">{title}</h3>
        <h3 className="text-gray-400 text-xs sm:text-md truncate">{answer}</h3>
      </div>

      <DeleteDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};