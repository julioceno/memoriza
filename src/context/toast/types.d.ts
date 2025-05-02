import { IToastProps } from "@/components/Toast/types";

// eslint-disable @typescript-eslint/no-empty-interface
interface IShowToast extends Omit<IToastProps, 'onClose'> {}

interface IToastContext {
    show: (value: IShowToast) => void;
};
