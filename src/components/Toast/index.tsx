'use client';
import React, { useEffect, useState } from 'react';
import { typeStyles } from './typesStyles';
import { ToastEnum, ToastPositionEnum } from '@/constants';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { IToastProps } from './types';

const Toast: React.FC<IToastProps> = ({
  message,
  onClose,
  position,
  type = ToastEnum.INFO,
  duration = 3000,
}) => {
  const { bg, text, icon, colorProgressBar } = typeStyles[type];
  const [progress, setProgress] = useState(100);

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

  return (
    <motion.div
      initial={animationVariants[position].initial}
      animate={animationVariants[position].animate}
      exit={animationVariants[position].exit}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed flex flex-col gap-2 max-w-[300px] rounded-lg shadow-lg ${bg} ${text} ${positionStyles[position]}`}
    >
      <div className="flex items-center gap-3 px-4 pt-3 ">
        {React.cloneElement(icon, { className: 'flex-shrink-0 w-6 h-6', strokeWidth: 2.5 })}
        <span className="text-sm md:text-md font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded cursor-pointer transition"
          aria-label="Fechar toast"
        >
          <X className="w-4 h-4 text-gray-700" strokeWidth={2} />
        </button>
      </div>
      <div className="relative w-full h-1 rounded">
        <div
          className={`absolute top-0 left-0 h-full transition-all ${colorProgressBar}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default Toast;