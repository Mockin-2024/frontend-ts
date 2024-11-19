import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import {TimePriceData} from "../type/TimePriceData";
import {useCurrency} from "../../../context/CurrencyContext";

ChartJS.register(...registerables);

interface Props {
    data: TimePriceData[];
    curr: string
}

const StockChart: React.FC<Props> = ({ data, curr }) => {
    const {convertToKRW} = useCurrency()
    const prices = data.map(point => convertToKRW(parseFloat(point.last), curr));
    const labels = data.map(point => `${point.kymd} ${point.khms}`);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'KRW',
                data: prices,
                borderColor: 'rgba(245, 101, 101, 1)',
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
