import { ToastEnum } from "@/constants";

export interface IToastProps {
  message: string;
  type?: ToastEnum;
  duration?: number;
  onClose: () => void;
};