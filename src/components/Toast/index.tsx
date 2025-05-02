'use client';
import React, { useEffect, useState } from 'react';
import { typeStyles } from './typesStyles';
import { ToastEnum } from '@/constants';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { IToastProps } from './types';

const Toast: React.FC<IToastProps> = ({
  message,
  type = ToastEnum.INFO,
  onClose,
  duration = 3000,
}) => {
  const { bg, text, icon } = typeStyles[type];
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
    };
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed bottom-5 right-5 flex flex-col gap-2 max-w-[300px] rounded-lg shadow-lg ${bg} ${text}`}
    >
      <div className="flex items-center gap-3 px-4 pt-3 ">
        {React.cloneElement(icon, { className: 'flex-shrink-0 w-6 h-6', strokeWidth: 2.8 })}
        <span className="text-sm md:text-md font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded cursor-pointer transition"
          aria-label="Fechar toast"
        >
          <X className="w-4 h-4 text-gray-700" strokeWidth={3} />
        </button>
      </div>
      <div className="relative w-full h-1 rounded">
        <div
          className="absolute top-0 left-0 h-full bg-green-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default Toast;