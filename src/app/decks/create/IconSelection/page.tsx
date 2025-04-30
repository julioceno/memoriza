'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import React, { useState } from 'react';

const IconSelectionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="mt-32 md:mt-40 flex flex-col gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
        <SectionTitle>
            Escolha um Ícone
        </SectionTitle>
        
        <div className="flex gap-3">
            <Button full type='outlined'>
                Voltar
            </Button>
            <Button full>
                Próximo
            </Button>
        </div>
    </div>
</div>
  );
};

export default IconSelectionPage;