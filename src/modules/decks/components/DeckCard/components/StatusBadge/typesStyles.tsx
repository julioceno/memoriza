import { ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";

export enum StatusBadgeEnum {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
}

export const typeStyles = {
  [StatusBadgeEnum.SUCCESS]: {
    style: "bg-green-100 text-green-800",
    text: "Você está bem",
    icon: <ThumbsUp className="text-green-600" />,
  },
  [StatusBadgeEnum.ERROR]: {
    style: "bg-red-100 text-red-800",
    text: "Você está mal",
    icon: <ThumbsDown className="text-red-600" />,
  },
  [StatusBadgeEnum.WARNING]: {
    style: "bg-yellow-100 text-yellow-800",
    text: "Fique ligado",
    icon: <AlertTriangle className="text-yellow-600" />,
  },
};
