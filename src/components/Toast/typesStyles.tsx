import { ToastEnum } from '@/constants';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

export const typeStyles = {
    [ToastEnum.SUCCESS]: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      icon: <CheckCircle className="text-green-600" />,
    },
    [ToastEnum.ERROR]: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      icon: <XCircle className="text-red-600" />,
    },
    [ToastEnum.INFO]: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      icon: <Info className="text-blue-600" />,
    },
    [ToastEnum.WARNING]: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      icon: <AlertTriangle className="text-yellow-600" />,
    },
  };