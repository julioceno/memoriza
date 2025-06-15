export interface IActionsProps {
    id: string;
    onEdit: () => void;
    onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}