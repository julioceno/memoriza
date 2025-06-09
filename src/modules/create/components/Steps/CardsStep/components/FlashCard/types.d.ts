interface IFlashCardProps {
  id: string;
  title: string;
  answer: string;

  onEdit: () => void;
  onDelete: () => void;
}
