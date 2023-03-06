import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Language() {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5'>
            <h1 className='text-xl font-semibold mb-7'>Language</h1>
            <div className='flex gap-5 mb-3'>
                <div className='bg-white rounded-md p-3'>
                    <picture>
                        <img src="https://cdn.pixabay.com/photo/2016/08/19/20/37/time-1606153__480.png" className='w-5 h-5' alt="" />
                    </picture>
                </div>
                <div>
                    <h1 className='text-lg font-bold '>11070</h1>
                    <p className='text-sm text-gray-400 '>Number of contribution</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div>

                </div>
            </div>


            {/* doughnut chart react-chartjs-2*/}
            <div className='mt-2 relative w-2/3'>

                <Doughnut
                    data={{
                        labels: ['Success', 'Failure'],
                        datasets: [
                            {
                                label: 'Pipelines',
                                data: [75, 18],
                                backgroundColor: [
                                    '#6B46C1',
                                    '#FCD34D'
                                ],
                                borderColor: [
                                    '#6B46C1',
                                    '#FCD34D'
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}

                    options={{
                        cutout: '82%',
                        maintainAspectRatio: true,
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                        },
                    }}
                />
                <div className='absolute bottom-24 left-6 text-center'>
                    <h3 className='lg:text-lg'>
                        Success rate <br />
                        <span className='text-2xl font-bold'>75%</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Language
