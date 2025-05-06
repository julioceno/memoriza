import React from "react";
import { Pencil, GripVertical, Trash2 } from "lucide-react";
import { IActionsProps } from "./types";
import { useSortable } from "@dnd-kit/sortable";

export const Actions: React.FC<IActionsProps> = ({ id, onEdit, onDelete }) => {
  const { listeners } = useSortable({ id });

  return (
    <>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button 
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
          onClick={onEdit}
        >
          <Pencil className="w-5 h-5" />
        </button>
        <button
          className="text-gray-500 hover:text-gray-900 cursor-pointer"
          onClick={onDelete}
        >
          <Trash2 className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-900 cursor-move touch-none" {...listeners}>
          <GripVertical className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};