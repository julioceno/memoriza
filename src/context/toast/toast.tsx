"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/components/Toast';
import { AnimatePresence } from 'framer-motion';
import { IShowToast, IToastContext  } from './types';

const ToastContext = createContext<IToastContext | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<IShowToast | null>(null);

  const show = (props: IShowToast) => {
    setToast(null);
    setTimeout(() => {
      setToast(props);
    }, 300);
  };

  const hide = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={hide} 
            duration={toast.duration} 
            position={toast.position}
          />
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = (): IToastContext => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};