import React from 'react';
import { IButtonProps } from './types';
import { icons, LucideIcon } from 'lucide-react';

const Button: React.FC<IButtonProps> = ({
  onClick,
  shape = 'rounded',
  variant = 'default',
  size = 'medium',
  iconName,
  children,
  full = false,
  disabled = false
}) => {
  const shapeStyles = {
    square: 'rounded-xl',
    rounded: 'rounded-full',
  };

  const variantStyles = {
    default: disabled
      ? 'bg-zinc-600 text-white cursor-not-allowed'
      : 'bg-principal text-white hover:bg-red-700',
    outlined: disabled
      ? 'border border-gray-400 text-gray-400 cursor-not-allowed'
      : 'border border-gray-800 text-gray-800 bg-transparent hover:bg-gray-900',
  };

  const cursorType = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
  const width = full ? 'w-full' : '';

  const sizeStyles = {
    small: 'px-2 md:px-3 py-1 md:py-1.5 text-xs sm:text-sm',
    medium: 'px-2 md:px-4 py-1 md:py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const Icon = iconName ? icons[iconName] as LucideIcon : null;

  return (
    <button
      className={`flex items-center font-medium transition justify-center ${shapeStyles[shape]} ${variantStyles[variant]} ${sizeStyles[size]} ${cursorType} ${width}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

export default Button;