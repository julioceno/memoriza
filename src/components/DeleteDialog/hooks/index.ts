import { ToastEnum, ToastPositionEnum } from '@/constants';
import { useToast } from '@/context/toast/toast';
import { useMemo, useState } from 'react';

export const useDeleteDialog = ({ onClose }: IUseDeleteDialog) => {
    const toast = useToast()
    const [value, setValue] = useState("");

    const handleDelete = () => {
        // TODO: alterar o position quando estiver no mobile
        if (value.toLocaleLowerCase() === "confirmar") {
            toast.show({
                type: ToastEnum.ERROR,
                message: "Deck deletado com sucesso!",
                position: ToastPositionEnum.TOP_RIGHT,
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