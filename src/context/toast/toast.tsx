"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/components/Toast';
import { ToastEnum } from '@/constants';
import { AnimatePresence } from 'framer-motion';
import { IShowToast, ToastContextType } from './types';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<IShowToast | null>(null);

  const show = ({
    message,
    type = ToastEnum.INFO,
    duration,
    maxWidth,
  }: IShowToast) => {
    setToast(null);

    setTimeout(() => {
      setToast({ message, type, maxWidth, duration });
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
          />
        )}
      </AnimatePresence>
    
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};