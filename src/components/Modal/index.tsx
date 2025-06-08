import React from "react";
import { IModalProps } from "./types";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "./hooks";
import { Button } from "../Button";

export const Modal = ({
  isOpen,
  onClose,
  onPrimaryAction,
  children,
  closeButtonLabel = "Fechar",
  primaryButtonLabel = "Próximo", 
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
             className="flex flex-col items-center w-full bg-white p-3 py-4 md:p-6 rounded-xl max-w-lg text-center gap-3"
             initial={{ y: "-100%" }}
             animate={{ y: 0 }}
             exit={{ y: "-100%" }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
           >
            <div className="self-start">
              {children}
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <Button 
                type="outlined" 
                size="medium" 
                full
                onClick={onClose}
              >
                {closeButtonLabel}
              </Button>
              <Button 
                full
                size="medium" 
                onClick={onPrimaryAction}
              >
                {primaryButtonLabel}
              </Button>
            </div>
           </motion.div>
         </motion.div>
       )}
     </AnimatePresence>
  );
};
