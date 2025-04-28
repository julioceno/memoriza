import React from 'react';
import { IButtonProps } from './types';
import { icons, LucideIcon } from 'lucide-react';

const Button: React.FC<IButtonProps> = ({
  onClick,
  variant = 'square',
  size = 'medium',
  iconName,
  children
}) => {
  const variantStyles = variant === 'rounded' ? 'rounded-full' : 'rounded-xl';
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-2 md:px-4 py-1 md:py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const Icon = iconName ? icons[iconName] as LucideIcon : null;

  return (
    <button
      className={`flex items-center font-medium shadow-md transition ${variantStyles} ${sizeStyles[size]} bg-principal cursor-pointer text-white`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

export default Button;