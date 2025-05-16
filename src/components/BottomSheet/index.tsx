import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBottomSheet } from "./hooks";
import { Button } from "../Button";

export const BottomSheet: React.FC<IBottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  actionButtonText
}) => {
  const { handleBackdropClick } = useBottomSheet({ onClose });

  useEffect(() => {
    // TODO: mover essa lógica para um hook
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-end bg-black/20 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="flex flex-col w-full bg-white rounded-t-3xl h-8/12 p-4 shadow-lg"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 50) {
                onClose();
              }
            }}
          >
            <div className="mt-1 w-12 h-1 bg-gray-700 mx-auto rounded cursor-pointer"></div>
            <div className="mt-4">
              {children}
            </div>
            {actionButtonText && (
              <div className="mt-auto">
                <Button full>{actionButtonText}</Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};