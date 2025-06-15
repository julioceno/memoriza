'use client';

import { SectionTitle } from '@/components';
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components';
import React from 'react';
import { FeedbackCard } from '@/components/FeedbackCard';
import { useGame } from '@/modules/game';

const GamePage: React.FC = () => {
  const {
    percentage,
    handlePrevious,
    handleNext,
    currentCard,
    handleCardFeedback
  } = useGame();

  return (
    <div className='flex flex-col items-center gap-10 w-full mt-20'>
      <div className='w-68 sm:w-[350px] xl:w-[400px] h-52 flex flex-col gap-2'>
        <ProgressBar 
          percentage={percentage} 
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
        <Card
          frontContent={currentCard.title}
          backContent={currentCard.answer}
        />
        <p className='text-black'>{percentage}</p>
      </div>
      <SectionTitle>
        Você acertou?
      </SectionTitle>
      <div className='flex gap-4'>
        <FeedbackCard
          variant="like" 
          onClick={() => handleCardFeedback(true)}
        />
        <FeedbackCard 
          variant="dislike" 
          onClick={() => handleCardFeedback(false)}
        />
      </div>
    </div>
  );
};

export default GamePage;