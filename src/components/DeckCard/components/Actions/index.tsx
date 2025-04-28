import { Edit, GripVertical, Trash2 } from 'lucide-react';
import React from 'react';

const Actions: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
             <button className="text-gray-500 hover:text-gray-700">
                <Edit className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
                <Trash2 className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
                <GripVertical className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Actions;