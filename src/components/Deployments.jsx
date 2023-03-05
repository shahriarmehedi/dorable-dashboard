import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            type: 'bar',
            label: 'Incidents',
            data: [
                10, 5, 7, 2, 9, 12, 6, 10, 5, 7, 2, 9, 12, 6, 10, 5, 7, 2, 9, 12, 6, 10, 5, 7, 2, 9, 12, 6, 10, 5, 7, 2, 9, 12, 6, 10, 5, 7, 2, 9
            ],
            // yellow color
            backgroundColor: 'rgb(255, 205, 86)',
        },
        {
            type: 'line',
            label: 'Deployments',
            data: [
                12, 8, 15, 10, 17, 10, 13, 12, 8, 15, 10, 17, 10, 13, 12, 8, 15, 10, 17, 20, 13, 12, 8, 15, 10, 17, 10, 13, 15, 10, 17, 20, 13, 12, 8, 15, 10, 17, 10, 13
            ],
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
        },
    ],
};

const options = {
    tension: 0.5,
    scales: {
        x: {
            ticks: {
                display: true,
            },
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
                display: true,
                beginAtZero: true,
            },
            grid: {
                display: true,
            },
        },
    },
    // position bottom
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const Deployments = () => {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5 relative'>
            <h1 className='text-xl font-semibold mb-7'>Deployments & Incidents</h1>
            <div className=' w-full pr-5'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Deployments;
