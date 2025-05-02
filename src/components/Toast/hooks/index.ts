import { ToastPositionEnum } from '@/constants';
import { useState, useEffect } from 'react';
import { typeStyles } from '../typesStyles';

interface IUseToastProps {
    type: keyof typeof typeStyles;
    duration: number;
    onClose: () => void;
}

export const useToastConfig = ({ type, duration, onClose }: IUseToastProps) => {
    const { bg, text, icon, colorProgressBar } = typeStyles[type];
    const [progress, setProgress] = useState(100);

    const positionStyles = {
        [ToastPositionEnum.BOTTOM_RIGHT]: 'bottom-5 right-5',
        [ToastPositionEnum.TOP_RIGHT]: 'top-5 right-5',
        [ToastPositionEnum.TOP_CENTER]: 'top-5 left-1/2 transform -translate-x-1/2',
        [ToastPositionEnum.BOTTOM_CENTER]: 'bottom-5 left-1/2 transform -translate-x-1/2',
        [ToastPositionEnum.TOP_LEFT]: 'top-5 left-5',
        [ToastPositionEnum.BOTTOM_LEFT]: 'bottom-5 left-5',
    };

    const animationVariants = {
        [ToastPositionEnum.BOTTOM_RIGHT]: {
            initial: { x: '100%', opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: '100%', opacity: 0 }
        },
        [ToastPositionEnum.TOP_RIGHT]: {
            initial: { x: '100%', opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: '100%', opacity: 0 }
        },
        [ToastPositionEnum.TOP_CENTER]: {
            initial: { y: '-100%', opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: '-100%', opacity: 0 }
        },
        [ToastPositionEnum.BOTTOM_CENTER]: {
            initial: { y: '100%', opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: '100%', opacity: 0 }
        },
        [ToastPositionEnum.TOP_LEFT]: {
            initial: { x: '-100%', opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: '-100%', opacity: 0 }
        },
        [ToastPositionEnum.BOTTOM_LEFT]: {
            initial: { x: '-100%', opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: '-100%', opacity: 0 }
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => Math.max(prev - (100 / (duration / 100)), 0));
        }, 100);

        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            setProgress(100);
        };
    }, [duration, onClose]);

    return {
        bg,
        text,
        icon,
        colorProgressBar,
        progress,
        positionStyles,
        animationVariants
    };
};