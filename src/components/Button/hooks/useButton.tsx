import { icons, LucideIcon } from 'lucide-react';
import { IButtonProps } from '../types';

export const useButton = ({
    iconName,
    disabled,
    full
}: IButtonProps) => {
    const shapeStyles = {
        square: 'rounded-xl',
        rounded: 'rounded-full',
    };

    const types = {
        default: disabled
            ? 'bg-zinc-600 text-white cursor-not-allowed'
            : 'bg-principal text-white hover:bg-red-700',
        outlined: disabled
            ? 'border md:border-2 border-gray-400 text-gray-400 cursor-not-allowed'
            : 'border md:border-2 border-gray-800 text-gray-800 bg-transparent hover:bg-gray-200',
    };

    const cursorType = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
    const width = full ? 'w-full' : '';

    const sizeStyles = {
        small: 'px-2 md:px-3 py-1 md:py-1.5 text-xs sm:text-sm',
        medium: 'px-2 md:px-4 py-1 md:py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const Icon = iconName ? icons[iconName] as LucideIcon : null;


    return {
        shapeStyles,
        types,
        cursorType,
        sizeStyles,
        Icon,
        width
    };
};