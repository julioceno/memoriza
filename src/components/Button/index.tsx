import React from 'react';
import { IButtonProps } from './types';
import { icons, LucideIcon } from 'lucide-react';
import { useButton } from './hooks';

export const Button: React.FC<IButtonProps> = (props) => {
  const {
  onClick,
  shape = 'rounded',
  type = 'default',
  size = 'medium',
  children,
  disabled = false
} = props;
  const {
    Icon,
    shapeStyles,
    sizeStyles,
    types,
    cursorType,
    width
  } = useButton(props)

  return (
    <button
      className={`flex items-center font-medium transition justify-center ${shapeStyles[shape]} ${types[type]} ${sizeStyles[size]} ${cursorType} ${width}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};
