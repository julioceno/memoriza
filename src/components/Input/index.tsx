import React, { useState } from "react";

const statusStyles = {
  filled: "border-black text-black placeholder:text-black",
  filling: "border-principal text-principal placeholder:text-principal",
  empty: "border-gray-400 text-gray-900 placeholder:text-gray-400",
};

const sizeStyles = {
  small: "rounded-xl px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm",
  medium: "rounded-2xl px-4 py-2 text-sm",
  large: "rounded-xl md:rounded-2xl px-2 md:px-4 py-1.5 md:py-2 text-md md:text-lg",
};

const placeholderColors = {
  focus: "placeholder-principal",
  filled: "placeholder-black",
  empty: "placeholder-gray-400",
};

export const Input: React.FC<IInputProps> = ({
  value,
  placeholder,
  size = "small",
  onChange,
  full = false,
  textarea = false,
  rows,
}) => {
  const [focus, setFocus] = useState(false);

  const isFilled = value.length > 0;

  const getStatusStyles = () =>
    focus ? statusStyles.filling : isFilled ? statusStyles.filled : statusStyles.empty;

  const getPlaceholderColor = () =>
    focus ? placeholderColors.focus : isFilled ? placeholderColors.filled : placeholderColors.empty;

  const widthClass = full ? "w-full" : "";
  const baseInputStyle = `flex-grow bg-transparent outline-none ${getPlaceholderColor()}`;

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div
      className={`flex items-center gap-2 border ${widthClass} ${getStatusStyles()} ${sizeStyles[size]} transition`}
    >
      {textarea ? (
        <textarea
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={baseInputStyle}
          rows={rows}
        />
      ) : (
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={baseInputStyle}
        />
      )}
    </div>
  );
};