import { ToastEnum, ToastPositionEnum } from '@/constants';
import { useToast } from '@/context/toast/toast';
import { useCloseOnEscape } from '@/hooks/useCloseOnEscape';
import { useMemo, useState } from 'react';

export const useDeleteDialog = ({ onClose }: IUseDeleteDialog) => {
    const toast = useToast()
    const [value, setValue] = useState("");

    const handleDelete = () => {
        if (value.toLocaleLowerCase() === "confirmar") {
            toast.show({
                type: ToastEnum.ERROR,
                message: "Deck deletado com sucesso!",
                position: ToastPositionEnum.BOTTOM_RIGHT,
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

    useCloseOnEscape(onClose);

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