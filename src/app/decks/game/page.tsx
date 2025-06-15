'use client';

import { Card } from '@/components/Card';
import React from 'react';

const GamePage: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
          <Card 
            frontContent="aaaa"
            backContent="bbbb"
          />
        </div>
    );
};

export default GamePage;