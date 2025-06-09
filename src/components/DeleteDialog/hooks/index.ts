import { ToastEnum, ToastPositionEnum } from '@/constants';
import { useToast } from '@/context/toast/toast';
import { useCloseOnEscape } from '@/hooks/useCloseOnEscape';
import { useMemo, useState } from 'react';

export const useDeleteDialog = ({ onClose, onConfirm }: IUseDeleteDialog) => {
    const toast = useToast()
    const [value, setValue] = useState("");

    const handleDelete = () => {
        if (value.toLocaleLowerCase() === "confirmar") {
            onConfirm()
            toast.show({
                type: ToastEnum.SUCCESS,
                // TODO: tornar mensagem personalizável
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

    const disableButton = useMemo(() => {
        return value.toLocaleLowerCase() !== "confirmar";
    }, [value]);

    useCloseOnEscape(onClose);

    return {
        handleDelete,
        handleBackdropClick,
        disableButton,
        value,
        setValue
    };
};