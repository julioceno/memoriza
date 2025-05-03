'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../Button';

const Header: React.FC = () => {
    const { back, push } = useRouter()

    const handleBack = () => {
        back();
    };

    const handleCreateDeck = () => {
        push('/decks/create');
    };

    return (
        <header className="flex items-center justify-between ">
            <button 
                className="flex items-center text-gray-600 cursor-pointer"
                onClick={handleBack}
            >
                <ChevronLeft className="w-8 md:w-12 h-8 md:h-12" />
            </button>
            <Button iconName="Plus" onClick={handleCreateDeck}>
                Criar novo Deck
            </Button>
        </header>
    );
};

export default Header;