import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDeleteDialog } from "./hooks";
import { Button } from "../Button";
import { Input } from "../Input";

export const DeleteDialog: React.FC<IDeleteDialogProps> = ({ 
  onClose, 
  onConfirm,
  isOpen
}) => {
  const {
    handleBackdropClick,
    handleDelete,
    value,
    setValue,
    disableButton
  } = useDeleteDialog({ onClose, onConfirm });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="flex flex-col items-center justify-center bg-white p-3 py-4 md:p-6 rounded-sm max-w-lg text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="w-full text-md sm:text-xl font-bold text-gray-800 mb-4">
              Tem certeza que deseja deletar o Deck?
            </h2>
            <p className="w-full text-sm sm:text-md text-gray-900">
              Você deverá preencher o campo abaixo com a palavra{" "}
              <span className="font-bold text-principal">confirmar</span>, para liberar o botão de confirmação.
            </p>
            <div className="w-10/12 sm:w-full mt-2 mb-4">
              <Input
                value={value}
                placeholder="Insira a palavra"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="w-30 sm:w-4/12">
                <Button
                  full 
                  shape="rounded" 
                  type="default" 
                  size="small"
                  disabled={disableButton}
                  onClick={handleDelete}
                >
                  Deletar
                </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteDialog;