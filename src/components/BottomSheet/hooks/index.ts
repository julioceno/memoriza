import { useEffect } from "react";

export const useBottomSheet = ({
    onClose,
    isOpen
}: IBottomSheetProps) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
    
        return () => {
          document.body.style.overflow = "";
        };
      }, [isOpen]);

    return {
        handleBackdropClick
    };
}