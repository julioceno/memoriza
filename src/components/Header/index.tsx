import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../Button';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between ">
            <button className="flex items-center text-gray-600 cursor-pointer">
                <ChevronLeft className="w-8 md:w-12 h-8 md:h-12" />
            </button>
            <Button iconName="Plus" variant="rounded">
                Criar novo Deck
            </Button>
        </header>
    );
};

export default Header;