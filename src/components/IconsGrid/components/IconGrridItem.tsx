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

    const labelStyle = isSelected
        ? "font-bold"
        : "font-semibold";

    return (
        <button
            onClick={() => onClick(id)}
            className={`flex flex-col md:w-30 items-center justify-center p-1.5 md:p-3 rounded-lg shadow-md border bg-white ${borderStyle} hover:border-principal hover:text-principal transition`}
        >
            <div className={`w-6 h-6 md:w-10 md:h-10 ${colorStyle}`}>{React.cloneElement(icon, { className: "w-full h-full w" })}</div>
            <span className={`mt-1 md:mt-2 text-xs md:text-sm ${labelStyle}`}>{label}</span>
        </button>
    );
}

export default IconGridItem;