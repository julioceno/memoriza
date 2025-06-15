import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";


export const FeedbackCard: React.FC<IFeedbackCardProps> = ({
  variant,
  onClick,
  disabled,
}) => {
  const isLike = variant === "like";
  
  const getVariantClasses = () => {
    if (disabled) {
      return "bg-gray-200 text-gray-900";
    }

    if (isLike) {
      return "bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700";
    }

    return "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700";
  }

  const Icon = isLike ? ThumbsUp : ThumbsDown;

  return (
    <button
      className={`flex items-center justify-center w-20 h-20 rounded-xl cursor-pointer transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${getVariantClasses()}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <Icon size={30} strokeWidth={2} />
    </button>
  );
};