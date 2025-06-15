import { IModalProps } from "../types";

export function useModal({
    onClose,
    isDisableClose
}: IModalProps) {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDisableClose) return;
        if (e.target !== e.currentTarget) return;
        onClose();
    };

    return {
        handleBackdropClick
    };
}