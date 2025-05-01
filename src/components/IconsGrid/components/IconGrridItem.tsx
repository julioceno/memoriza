import React from "react";

const IconGridItem = ({ icon, id, label, isSelected, onClick }: IIconGridItemProps) => {
    return (
        <button
        onClick={() => onClick(id)}
        className={`flex flex-col w-30 items-center justify-center p-3 rounded-lg shadow-md border bg-white ${
            isSelected
            ? "border-principal text-principal"
            : "border-gray-300 text-gray-600"
        } hover:border-principal hover:text-principal transition`}
        >
            <div className={`w-10 h-10 ${isSelected? "text-principal" : "text-gray-700"}`}>{React.cloneElement(icon, { className: "w-full h-full w" })}</div>
            <span className={`mt-2 text-sm ${isSelected? 'font-bold' : 'font-semibold'}`}>{label}</span>
        </button>
    );
}

export default IconGridItem;