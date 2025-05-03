'use client';

import React from 'react';
import { Step, Stepper } from '@/components/Stepper';
import { CreateName } from '../../../modules/create/components/CreateName';
import { IconSelection } from '@/modules/create/components/IconSelection';
import { StepperControls } from '@/modules/create/components/StepperControls';

const CreatePage: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col w-full'>
                <Stepper>
                    <Step stepIndex={0}>
                        <CreateName />
                    </Step>
                    <Step stepIndex={1}>
                        <IconSelection />
                    </Step>
                    <Step stepIndex={2}>
                        Ultimo
                    </Step>
                </Stepper>
            </div>
        </div>
    );
};

export default CreatePage;