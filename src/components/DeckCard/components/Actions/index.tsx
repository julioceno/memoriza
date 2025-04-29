import { Edit, GripVertical, Trash2 } from 'lucide-react';

const Actions: React.FC = () => {
    return (
        <div className="flex items-center gap-1.5 sm:gap-2">
             <button className="text-gray-500 hover:text-gray-900 ">
                <Edit className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-900">
                <Trash2 className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-900">
                <GripVertical className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Actions;