'use client';

import { Button, SectionTitle } from '@/components';
import PerformanceChart from '@/components/PerformanceChart';
import React from 'react';

const FeedbackPage: React.FC = () => {
    const correctAnswers = 10;
    const totalQuestions = 15;

    return (
        <div className='flex flex-col items-center gap-10 w-full mt-20'>
            <SectionTitle>
                Parabéns! Você terminou mais uma revisão
            </SectionTitle>
            
            <PerformanceChart 
                correct={correctAnswers} 
                total={totalQuestions} 
            />
            
            <div className='flex flex-col sm:flex-row w-full sm:w-md gap-4'> 
                <Button type="outlined" full> 
                    Ir para a home
                </Button>
                <Button full>
                    Fazer novamente
                </Button>
            </div>
        </div>
    );
};

export default FeedbackPage;