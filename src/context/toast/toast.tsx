"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/components/Toast';
import { ToastEnum } from '@/constants';
import { AnimatePresence } from 'framer-motion';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<IShowToast | null>(null);

  const show = ({
    message,
    type = ToastEnum.INFO,
    duration = 3000,
    maxWidth = 300,
  }: IShowToast) => {
    setToast({ message, type, maxWidth, duration });
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