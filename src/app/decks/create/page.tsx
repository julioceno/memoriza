'use client';

import SectionTitle from '@/components/SectionTitle';
import Input from '@/components/Input';
import Button from '@/components/Button';
import React, { useState } from 'react';

const CreatePage: React.FC = () => {
    const [deckName, setDeckName] = useState("");

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-32 md:mt-40 flex flex-col gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
                <SectionTitle>
                    Escolha um nome para seu deck
                </SectionTitle>
                <Input
                    value={deckName}
                    placeholder="Insira um nome"
                    size='large'
                    full
                    status={deckName ? "filled" : "empty"}
                    onChange={(e) => setDeckName(e.target.value)}
                />
                <Button full disabled={!deckName}>
                    Próximo
                </Button>
            </div>
        </div>
    );
};

export default CreatePage;