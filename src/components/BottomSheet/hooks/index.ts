import { PanInfo } from "framer-motion";
import { useEffect } from "react";

export const useBottomSheet = ({
    onClose,
    isDisableClose,
    isOpen
}: IBottomSheetProps) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDisableClose) return;
      if (e.target !== e.currentTarget) return;
      onClose();
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (isDisableClose) return;
      if (info.offset.y < 50) return;

      onClose();
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
        handleBackdropClick,
        handleDragEnd
    };
}