
interface IFeedbackCardProps {
  variant: "like" | "dislike";
  onClick?: () => void;
  disabled?: boolean;
}