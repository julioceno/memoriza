import { ToastEnum } from "@/constants";

interface IShowToast {
    message: string;
    type?: ToastEnum;
    duration?: number;
    maxWidth?: number;
}

type ToastContextType = {
    show: (value: IShowToast) => void;
};
