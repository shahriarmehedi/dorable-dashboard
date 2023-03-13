import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: [
        'Mon', '', '', '', '', '', 'Tue', '', '', '', '', '', 'Wed', '', '', '', '', '', 'Thu', '', '', '', '', '', 'Fri', '', '', '', '', '', 'Sat', '', '', '', '', '', 'Sun'

    ],
    datasets: [
        {
            type: 'bar',
            label: 'Incidents',
            data: [
                5, 5, 2, 2, 1, 3, 6, 5, 5, 2, 2, 1, 3, 6, 5, 5, 2, 2, 1, 3, 6, 5, 5, 7, 2, 1, 3, 6, 5, 5, 2, 2, 1, 7, 6, 5, 5, 2, 2, 1
            ],
            // yellow color
            backgroundColor: '#EFDB70',
            borderColor: '#EFDB70',
            borderWidth: 1,
            fill: true,
            borderRadius: 10,
        },
        {
            type: 'line',
            label: 'Deployments',
            data: [
                7, 8, 9, 10, 11, 10, 13, 12, 8, 10, 10, 11, 10, 11, 12, 8, 15, 10, 11, 10, 13, 12, 8, 11, 10, 11, 10, 11, 11, 10, 11, 10, 13, 12, 8, 11, 10, 11, 10, 11
            ],
            borderColor: '#24365A',
            backgroundColor: '#24365A',
            ShadowRoot: 10,
            fill: false,
        },
    ],
};

const options = {
    tension: 0.5,
    pointRadius: 0,
    scales: {
        x: {
            ticks: {
                display: true,
            },
            grid: {
                display: false,
            },
            // x-axis labels display straight line
            offset: true,

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

    plugins: {
        legend: {
            position: 'top',
            labels: {
                boxWidth: 7,
                boxHeight: 7,
                borderRadius: 10,
                padding: 20,
                font: {
                    size: 12,
                    family: 'poppins',
                    color: '#3D3E41'
                }
            },

        },
    },
};

const Deployments = () => {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5 relative h-full'>
            <h1 className='text-xl font-semibold mb-7'>Deployments & Incidents</h1>
            <div className=' w-full pr-5'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Deployments;
