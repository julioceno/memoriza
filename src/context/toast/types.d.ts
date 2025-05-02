import { ToastEnum } from "@/constants";

interface IShowToast extends Omit<IToastProps, 'onClose'> {}

type ToastContextType = {
    show: (value: IShowToast) => void;
};
