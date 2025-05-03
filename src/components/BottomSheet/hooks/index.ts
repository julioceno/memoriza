import { IUseBottomSheet } from "./types";

export const useBottomSheet = ({
    onClose
}: IUseBottomSheet) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return {
        handleBackdropClick
    };
}