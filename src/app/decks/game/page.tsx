'use client';

import { SectionTitle } from '@/components';
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components';
import React from 'react';

const GamePage: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-10'>

      <div className='w-68 xs:w-6/12 xl:w-3/12 h-52 flex flex-col gap-2'>
        <ProgressBar percentage={20} />
        <Card
          frontContent="aaaa"
          backContent="bbbb"
        />
      </div>
      <SectionTitle>
        Você acertou?
      </SectionTitle>
    </div>
  );
};

export default GamePage;