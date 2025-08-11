'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Plugin,
    ChartOptions,
    TooltipItem
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceChart: React.FC<IPerformanceChartProps> = ({ correct, total }) => {
    const incorrect = total - correct;

    const centerTextPlugin: Plugin<'doughnut'> = {
        id: 'centerText',
        beforeDraw: (chart) => {
            const { width, height, ctx } = chart;
            ctx.restore();

            const fontSize = Math.min(width, height) * 0.10;
            ctx.font = `bold ${fontSize}px Raleway, sans-serif`;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#9ca3af';

            const text = `${correct}/${total}`;
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    };

    const data = {
        datasets: [
            {
                data: [correct, incorrect],
                backgroundColor: [
                    '#FF0B55',
                    '#9ca3af'
                ],
                borderWidth: 2,
                cutout: '70%'
            }
        ]
    };

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
            tooltip: {
                usePointStyle: true,
                displayColors: false,
                callbacks: {
                    label: function (context: TooltipItem<'doughnut'>) {
                        return context.dataset.data[context.dataIndex] === correct ? 'Corretas' : 'Incorretas'
                    },
                },
            }
        }
    };

    return (
        <div className="w-44 h-64 mx-auto">
            <Doughnut
                data={data}
                options={options}
                plugins={[centerTextPlugin]}
            />
        </div>
    );
};

export default PerformanceChart;