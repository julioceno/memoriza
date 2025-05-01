'use client';

import React, { useState } from 'react';
import { Briefcase, Globe, GraduationCap } from 'lucide-react';
import IconGridItem from './components/IconGrridItem';

const icons = [
    { id: 1, icon: <Briefcase />, label: "Trabalho" },
    { id: 2, icon: <GraduationCap />, label: "Academico" },
    { id: 3, icon: <Globe />, label: "Idiomas" },
    { id: 4, icon: <Briefcase />, label: "Trabalho" },
    { id: 5, icon: <GraduationCap />, label: "Academico" },
    { id: 6, icon: <Globe />, label: "Idiomas" },
    { id: 7, icon: <Briefcase />, label: "Trabalho" },
    { id: 8, icon: <GraduationCap />, label: "Academico" },
    { id: 9, icon: <Globe />, label: "Idiomas" },
];

const IconGrid: React.FC = () => {
    const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelectedIcon(id);
    };

    return (
        <div className="grid grid-cols-3 gap-4 w-fit items-center justify-center">
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
    );
};

export default IconGrid;