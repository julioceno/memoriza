import React from "react";

const Input: React.FC<IInputProps> = ({ 
    value, 
    placeholder, 
    status, 
    size = "small", 
    onChange 
}) => {
  const statusStyles = {
    filled: "border-black text-black",
    filling: "border-principal text-principal",
    empty: "border-gray-400 text-gray-900",
  };

  const sizeStyles = {
    small: "rounded-xl px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm",
    medium: "rounded-2xl px-4 py-2 text-sm",
    large: "rounded-2xl px-4 py-2 text-lg",
  };

  return (
    <div
      className={`flex items-center  gap-2 border ${statusStyles[status]} ${sizeStyles[size]} transition`}
    >
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="flex-grow bg-transparent outline-none"
      />
    </div>
  );
};

export default Input;