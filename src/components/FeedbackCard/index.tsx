import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface IFeedbackCardProps {
  variant: "like" | "dislike";
  onClick?: () => void;
  disabled?: boolean;
}

export const FeedbackCard: React.FC<IFeedbackCardProps> = ({
  variant,
  onClick,
  disabled = false,
}) => {
  const isLike = variant === "like";
  
  const variantClasses = isLike 
    ? "bg-green-50 text-green-600 hover:bg-green-100" 
    : "bg-red-50 text-red-600 hover:bg-red-100";
  
  const Icon = isLike ? ThumbsUp : ThumbsDown;

  return (
    <button
      className={`flex items-center justify-center w-20 h-20 rounded-xl cursor-pointer transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <Icon size={30} strokeWidth={2} />
    </button>
  );
};