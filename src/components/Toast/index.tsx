'use client";'
import React, { useState, useEffect } from 'react';
import { typeStyles } from './typesStyles';
import { ToastEnum } from '@/constants';

type ToastProps = {
  message: string;
  type?: ToastEnum;
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, type = ToastEnum.INFO }) => {
  const { bg, text, icon } = typeStyles[type];

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${bg} ${text}`}
    >
      {icon}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default Toast;