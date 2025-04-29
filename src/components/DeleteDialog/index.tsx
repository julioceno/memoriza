import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";

interface DeleteDialogProps {
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ onClose, onConfirm }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 px-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center bg-white p-3 py-4 md:p-6 rounded-sm max-w-lg text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h2 className="text-md sm:text-xl font-bold text-gray-800 mb-4">
          Tem certeza que deseja deletar o Deck?
        </h2>
        <p className="text-sm sm:text-md text-gray-900 mb-4">
          Você deverá preencher o campo abaixo com a palavra{" "}
          <span className="font-bold text-red-500">Confirmar</span>, para liberar o botão de confirmação.
        </p>

        <div className="w-30 sm:w-4/12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button full variant="rounded" size="small">
              Deletar
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteDialog;