'use client';

import { SectionTitle } from '@/components';
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components';
import React from 'react';
import { FeedbackCard } from '@/components/FeedbackCard';

const GamePage: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-10 w-full mt-20'>
      <div className='w-68 sm:w-[350px] xl:w-[400px] h-52 flex flex-col gap-2'>
        <ProgressBar percentage={20} />
        <Card
          frontContent="aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa " 
          backContent="bbbb"
        />
      </div>
      <SectionTitle>
        Você acertou?
      </SectionTitle>
      <div className='flex gap-4'>
        <FeedbackCard
          variant="like" 
        />
        <FeedbackCard 
          variant="dislike" 
        />
      </div>
    </div>
  );
};

export default GamePage;