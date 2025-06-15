'use client';

import { SectionTitle } from '@/components';
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components';
import React, { useState, useMemo } from 'react';
import { FeedbackCard } from '@/components/FeedbackCard';

const GamePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const percentage = useMemo(() => {
    return Math.round((currentStep / totalSteps) * 100);
  }, [currentStep, totalSteps])
;
  const handleLeftClick = () => {
    setCurrentStep(prev => {
      return Math.max(prev - 1, 0)
    }); 
  };

  const handleRightClick = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  return (
    <div className='flex flex-col items-center gap-10 w-full mt-20'>
      <div className='w-68 sm:w-[350px] xl:w-[400px] h-52 flex flex-col gap-2'>
        <ProgressBar 
          percentage={percentage} 
          onLeftClick={handleLeftClick}
          onRightClick={handleRightClick}
        />
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