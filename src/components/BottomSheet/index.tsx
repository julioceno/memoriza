import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBottomSheet } from "./hooks";

export const BottomSheet: React.FC<IBottomSheetProps> = ({
  isOpen,
  onClose,
  children
}) => {
  const {
    handleBackdropClick
  } = useBottomSheet({ onClose })

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-end bg-black/20 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="w-full bg-white rounded-t-3xl p-4 shadow-lg"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.15 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) {
                onClose();
              }
            }}
          >
            <div className="mt-1 w-12 h-1 bg-gray-700 mx-auto rounded cursor-pointer"></div>
            <div className="overflow-y-auto mt-4">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};