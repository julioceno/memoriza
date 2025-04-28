import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { icons } from 'lucide-react';

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'rounded' | 'square';
  size?: 'small' | 'medium' | 'large';
  iconName?: keyof typeof icons;
};

type LucideIcon = ForwardRefExoticComponent<Icons.LucideProps & RefAttributes<SVGSVGElement>>;
