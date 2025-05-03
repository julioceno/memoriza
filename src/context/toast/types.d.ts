import { IToastProps } from "@/components/Toast/types";

type IShowToast = Omit<IToastProps, 'onClose'>;

interface IToastContext {
    show: (value: IShowToast) => void;
}