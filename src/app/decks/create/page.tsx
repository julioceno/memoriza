'use client';

import React from 'react';
import { Step, Stepper } from '@/components/Stepper';
import { CardsStep, CreateNameStep, IconSelectionStep } from '@/modules';

const CreatePage: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col w-full mt-20 md:mt-40'>
                <Stepper>
                    <Step stepIndex={0}>
                        <CreateNameStep />
                    </Step>
                    <Step stepIndex={1}>
                        <IconSelectionStep />
                    </Step>
                    <Step stepIndex={2}>
                        <CardsStep />
                    </Step>
                </Stepper>
            </div>
        </div>
    );
};

export default CreatePage;