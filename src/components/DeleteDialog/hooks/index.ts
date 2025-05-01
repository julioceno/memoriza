import { useToast } from '@/context/toast/toast';
import { useState } from 'react';

export const useDeleteDialog = ({ onClose }: IUseDeleteDialog) => {
    const toast = useToast()
    const [value, setValue] = useState("");

    const getStatus = () => {
        if (value.length > 0) return "filled";
        if (value === "") return "empty";
        return "filling";
    };

    const handleDelete = () => {
        if (value.toLocaleLowerCase() === "confirmar") {
            toast.show({
                type: "success",
                message: "Deck deletado com sucesso!",
            })
            onClose();
        }
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setValue("")
            onClose();
        }
    };


    return {
        handleDelete,
        getStatus,
        handleBackdropClick,
        value,
        setValue
    };
};