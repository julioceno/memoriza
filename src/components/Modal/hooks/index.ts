export function useModal({
    onClose
}: IUseModal) {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return {
        handleBackdropClick
    };
}