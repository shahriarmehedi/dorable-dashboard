import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Pipelines() {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5'>
            <h1 className='text-xl font-semibold mb-7'>Pipelines</h1>
            <div className='flex gap-5 mb-3'>
                <div className='bg-white rounded-md p-3'>
                    <picture>
                        <img src="https://cdn.pixabay.com/photo/2016/08/19/20/37/time-1606153__480.png" className='w-5 h-5' alt="" />
                    </picture>
                </div>
                <div>
                    <h1 className='text-lg font-bold '>435 Hours</h1>
                    <p className='text-sm text-gray-400 '>Created 2 days ago</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='bg-white rounded-md p-3'>
                    <picture>
                        <img src="https://cdn.pixabay.com/photo/2016/08/19/20/37/time-1606153__480.png" className='w-5 h-5' alt="" />
                    </picture>
                </div>
                <div>
                    <h1 className='text-lg font-bold '>435 Hours</h1>
                    <p className='text-sm text-gray-400 '>Created 2 days ago</p>
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
                <div className='absolute bottom-28 left-10 text-center'>
                    <h3 className='lg:text-xl'>
                        Success rate <br />
                        <span className='text-3xl font-bold'>75%</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Pipelines
