import React from "react";
import { ThumbsUp } from "lucide-react";

const StatusBadge: React.FC<IStatusBadgeProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
      <ThumbsUp className="w-4 h-4" />
      {children}
    </div>
  );
};

export default StatusBadge;