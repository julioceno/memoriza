import { ToastEnum } from '@/constants';
import { useToast } from '@/context/toast/toast';
import { useMemo, useState } from 'react';

export const useDeleteDialog = ({ onClose }: IUseDeleteDialog) => {
    const toast = useToast()
    const [value, setValue] = useState("");

    const handleDelete = () => {
        if (value.toLocaleLowerCase() === "confirmar") {
            toast.show({
                type: ToastEnum.ERROR,
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

    const disableButton = useMemo(() => {
        return value.toLocaleLowerCase() !== "confirmar";
    }
    , [value]);

    return {
        handleDelete,
        handleBackdropClick,
        disableButton,
        value,
        setValue
    };
};