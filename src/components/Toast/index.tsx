'use client";'
import React from 'react';
import { typeStyles } from './typesStyles';
import { ToastEnum } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type ToastProps = {
  message: string;
  type?: ToastEnum;
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type = ToastEnum.INFO,
  onClose
}) => {
  const { bg, text, icon } = typeStyles[type];

  return (
    <AnimatePresence>
     <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }} 
          className={`fixed bottom-5 right-5 flex items-center gap-3 px-4 py-3 max-w-[300px] rounded-lg shadow-lg ${bg} ${text}`}
        >
          {React.cloneElement(icon, { className: 'flex-shrink-0 w-5 h-5' })}
          <span className="text-sm font-medium">{message}</span>
          <button
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded cursor-pointer transition"
          aria-label="Fechar toast"
        >
          <X className="w-4 h-4 text-gray-700" strokeWidth={3}/>
        </button>
        </motion.div>
  </AnimatePresence>
  );
};

export default Toast;