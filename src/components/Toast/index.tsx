'use client';

import React  from 'react';
import { ToastEnum } from '@/constants';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { IToastProps } from './types';
import { useToastConfig } from './hooks';

const Toast: React.FC<IToastProps> = ({
  message,
  onClose,
  position,
  type = ToastEnum.INFO,
  duration = 3000,
}) => {
  const {
    animationVariants,
    bg,
    text,
    positionStyles,
    colorProgressBar,
    progress,
    icon
  } = useToastConfig({ type, duration, onClose });

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