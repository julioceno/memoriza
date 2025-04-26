interface IShowToast {
    message: string;
    type?: ToastEnum;
    duration?: number;
}

type ToastContextType = {
    show: (value: IShowToast) => void;
};
