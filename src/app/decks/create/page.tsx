'use client';

import React from 'react';
import { Step, Stepper } from '@/components/Stepper';
import { CreateName } from '../../../modules/create/components/CreateName';
import { IconSelection } from '@/modules/create/components/IconSelection';

const CreatePage: React.FC = () => {
    return (
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
    );
};

export default CreatePage;