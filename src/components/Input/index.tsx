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
  full = false
}) => {
  const [focus, setFocus] = useState(false);

  const getStatusStyles = () => {
    if (focus) {
      return statusStyles.filling;
    }

    const isFilled = value.length > 0;
    if (isFilled) {
      return statusStyles.filled;
    }

    return statusStyles.empty;
  }

  const getPlaceholderColor = () => {
    if (focus) {
      return placeholderColors.focus;
    }

    return value.length > 0 ? placeholderColors.filled : placeholderColors.empty;
  };

  const width = full ? 'w-full' : '';

  return (
    <div
      className={`flex items-center gap-2 border ${width} ${getStatusStyles()} ${sizeStyles[size]} transition`}
    >
      <input
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`flex-grow bg-transparent outline-none ${getPlaceholderColor()}`}

      />
    </div>
  );
};