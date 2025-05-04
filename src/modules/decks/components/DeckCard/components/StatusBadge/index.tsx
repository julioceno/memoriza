import React from "react";
import { typeStyles } from "./typesStyles";
import { IStatusBadgeProps } from "./types";

const StatusBadge: React.FC<IStatusBadgeProps> = ({ type }) => {
  const { style, icon, text } = typeStyles[type];

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${style}`}>
      {React.cloneElement(icon, { className: 'flex-shrink-0 w-4 h-4' })}
      {text}
    </div>
  );
};

export default StatusBadge;