'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import React, { useState } from 'react';
import { Briefcase, Globe, GraduationCap } from 'lucide-react';
import IconGrid from '@/components/IconsGrid';


const IconSelectionPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <div className="mt-32 md:mt-40 flex flex-col justify-center items-center gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
            <SectionTitle>Escolha um Ícone</SectionTitle>
            
            <IconGrid />

            <div className="flex gap-3 w-full">
                <Button full type="outlined">
                    Voltar
                </Button>
                <Button full disabled>Próximo</Button>
            </div>
        </div>
        </div>
    );
};

export default IconSelectionPage;