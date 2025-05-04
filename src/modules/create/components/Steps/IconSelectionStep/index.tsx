'use client';

import React, { useState } from 'react';
import { Briefcase, Dumbbell, FlaskConical, Gamepad2, Globe, GraduationCap, HandMetal, PiggyBank, Pizza } from 'lucide-react';
import IconGridItem from '@/modules/create/components/Steps/IconSelectionStep/components/IconGridItem/IconGrridItem';
import { StepperControls } from '../../StepperControls';
import { SectionTitle } from '@/components';

const icons = [
    { id: 1, icon: <Briefcase />, label: "Trabalho" },
    { id: 2, icon: <GraduationCap />, label: "Academico" },
    { id: 3, icon: <Globe />, label: "Idiomas" },
    { id: 4, icon: <FlaskConical />, label: "Labs" },
    { id: 5, icon: <HandMetal />, label: "Metal" },
    { id: 6, icon: <Pizza />, label: "Comida" },
    { id: 7, icon: <Gamepad2 />, label: "Jogos" },
    { id: 8, icon: <PiggyBank />, label: "Dinheiro" },
    { id: 9, icon: <Dumbbell />, label: "Academia" },
];

export const IconSelectionStep: React.FC = () => {
    const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelectedIcon(id);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-32 md:mt-40 flex flex-col justify-center items-center gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
                <SectionTitle>Escolha um Ícone</SectionTitle>
                <div className="grid grid-cols-3 gap-2 md:gap-3.5 w-fit items-center justify-center">
                    {icons.map(({ id, icon, label }) => (
                        <IconGridItem
                            key={id}
                            id={id}
                            icon={icon}
                            label={label}
                            isSelected={selectedIcon === id}
                            onClick={() => handleSelect(id)}
                        />
                    ))}
                </div>
                <StepperControls 
                    isNextDisabled={selectedIcon === null}
                    isPrevVisible={true}
                />
            </div>
        </div>
    );
};