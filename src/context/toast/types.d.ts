import { IToastProps } from "@/components/Toast/types";

interface IShowToast extends Omit<IToastProps, 'onClose'> {}

interface IToastContext {
    show: (value: IShowToast) => void;
};
