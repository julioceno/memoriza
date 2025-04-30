import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { icons } from 'lucide-react';

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  shape?: 'rounded' | 'square';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'outlined';
  iconName?: keyof typeof icons;
  full?: boolean;
  disabled?: boolean;
};

type LucideIcon = ForwardRefExoticComponent<Icons.LucideProps & RefAttributes<SVGSVGElement>>;
