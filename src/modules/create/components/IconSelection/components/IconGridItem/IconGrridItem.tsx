import React from "react";

const IconGridItem = ({
    icon,
    id,
    label,
    isSelected,
    onClick
}: IIconGridItemProps) => {
    const borderStyle = isSelected
        ? "border-principal text-principal"
        : "border-gray-300 text-gray-600";

    const colorStyle = isSelected
        ? "text-principal"
        : "text-gray-700";

    const hoverStyle = !isSelected
        ? "hover:border-gray-800" 
        : "";

    return (
        <button
            onClick={() => onClick(id)}
            className={`flex flex-col items-center justify-center p-1.5 sm:p-3 rounded-lg shadow-md border bg-white transition ${borderStyle} ${hoverStyle}`}
        >
            <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${colorStyle}`}>{React.cloneElement(icon, { className: "w-full h-full" })}</div>
            <span className={`mt-1 md:mt-2 text-xs md:text-sm font-semibold`}>{label}</span>
        </button>
    );
}

export default IconGridItem;