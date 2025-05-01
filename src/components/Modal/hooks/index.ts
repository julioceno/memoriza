export function useModal({
    onClose
}: IUseModalReturn) {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return {
        handleBackdropClick
    };
}