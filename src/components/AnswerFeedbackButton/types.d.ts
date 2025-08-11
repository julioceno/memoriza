
interface IAnswerFeedbackButtonProps {
  variant: "like" | "dislike";
  onClick: () => void;
  disabled?: boolean;
}