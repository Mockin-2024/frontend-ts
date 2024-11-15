import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

interface DataPoint {
    last: string;
}

interface StockChartProps {
    data: DataPoint[];
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
    const prices = data.map(point => parseFloat(point.last));

    const chartData = {
        labels: prices.map((_, index) => index + 1),
        datasets: [
            {
                label: '주가',
                data: prices, // 종가 데이터 사용
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
                pointRadius: 3,
            },
        ],
    };


    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default StockChart;
