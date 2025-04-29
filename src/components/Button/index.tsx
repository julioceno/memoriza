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
}) => {
  const shapeStyles = {
    square: 'rounded-xl',
    rounded: 'rounded-full',
  };

  const variantStyles = {
    default: 'bg-principal text-white hover:bg-red-700',
    outlined: 'border border-gray-800 text-gray-800 bg-transparent hover:bg-gray-900',
  };

  const sizeStyles = {
    small: 'px-2 md:px-3 py-1 md:py-1.5 text-xs sm:text-sm',
    medium: 'px-2 md:px-4 py-1 md:py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const Icon = iconName ? icons[iconName] as LucideIcon : null;

  return (
    <button
      className={`flex items-center font-medium transition cursor-pointer justify-center ${shapeStyles[shape]} ${variantStyles[variant]} ${sizeStyles[size]} ${full ? 'w-full' : ''}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

export default Button;