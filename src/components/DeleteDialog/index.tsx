import React, { useState } from "react";
import Button from "../Button";

interface DeleteDialogProps {
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 px-3">
      <div className="flex flex-col items-center justify-center bg-white p-3 py-4 md:p-6 rounded-sm max-w-lg text-center">
        <h2 className="text-md sm:text-xl font-bold text-gray-800 mb-4">
          Tem certeza que deseja deletar o Deck?
        </h2>
        <p className="text-sm sm:text-md text-gray-900 mb-4">
          Você deverá preencher o campo abaixo com a palavra{" "}
          <span className="font-bold text-red-500">Confirmar</span>, para liberar o botão de confirmação.
        </p>
       
       <div className="w-30 sm:w-4/12">
            <Button full variant="rounded" size="small">
                Deletar
            </Button>
       </div>
      </div>
    </div>
  );
};

export default DeleteDialog;