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
  const handlePrevious = () => {
    setCurrentStep(prev => {
      return Math.max(prev - 1, 0)
    }); 
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  return (
    <div className='flex flex-col items-center gap-10 w-full mt-20'>
      <div className='w-68 sm:w-[350px] xl:w-[400px] h-52 flex flex-col gap-2'>
        <ProgressBar 
          percentage={percentage} 
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
        <Card
          frontContent="que é polimorfismo na programação orientada a objetos?" 
          backContent="É a capacidade de um objeto assumir muitas formas. Ou seja, diferentes classes podem implementar métodos com o mesmo nome, mas com comportamentos diferentes."
        />
      </div>
      <SectionTitle>
        Você acertou?
      </SectionTitle>
      <div className='flex gap-4'>
        <FeedbackCard
          variant="like" 
          onClick={handleNext}
        />
        <FeedbackCard 
          variant="dislike" 
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default GamePage;