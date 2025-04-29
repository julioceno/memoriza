import React, { useState } from "react";
import { Edit, GripVertical, Trash2 } from "lucide-react";
import DeleteDialog from "@/components/DeleteDialog";

const Actions: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button className="text-gray-500 hover:text-gray-900">
          <Edit className="w-5 h-5" />
        </button>
        <button
          className="text-gray-500 hover:text-gray-900"
          onClick={() => setIsDialogOpen(true)}
        >
          <Trash2 className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-900">
          <GripVertical className="w-5 h-5" />
        </button>
      </div>
      {isDialogOpen && (
        <DeleteDialog
          onClose={() => setIsDialogOpen(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default Actions;