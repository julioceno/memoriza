import { ToastEnum, ToastPositionEnum } from "@/constants";

export interface IToastProps {
  message: string;
  position: ToastPositionEnum;
  type?: ToastEnum;
  duration?: number;
  onClose: () => void;
};