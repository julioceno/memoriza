import React, { useState } from "react";
import { IModalProps } from "./types";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "./hooks";

const Modal = ({
  isOpen,
  onClose,
}: IModalProps) => {
  const { handleBackdropClick } = useModal({ onClose })

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
          
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;