import React from "react";

// TODO: ajustar hover do icone quando passar o mouse
const IconGridItem = ({
    icon,
    id,
    label,
    isSelesasacted,
    onClick
}: IIconGridItemProps) => {
    const borderStyle = isSelected
        ? "border-principal text-principal"
        : "border-gray-300 text-gray-600";

    const colorStyle = isSelected
        ? "text-principal"
        : "text-gray-700";

    return (
        <button
            onClick={() => onClick(id)}
            className={`flex flex-col items-center justify-center p-1.5 sm:p-3 rounded-lg shadow-md border bg-white ${borderStyle} hover:border-principal hover:text-principal transition`}
        >
            <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${colorStyle} hover:text-principal`}>{React.cloneElement(icon, { className: "w-full h-full" })}</div>
            <span className={`mt-1 md:mt-2 text-xs md:text-sm font-semibold`}>{label}</span>
        </button>
    );
}

export default IconGridItem;