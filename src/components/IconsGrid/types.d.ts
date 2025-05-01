
interface IIconGridItemProps {
    id: number;
    icon: React.JSX.Element;
    label: string;
    isSelected: boolean;
    onClick: (id: number) => void;
}
