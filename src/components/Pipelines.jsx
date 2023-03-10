import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Pipelines({ Data }) {


    const pipelines = Data.weekly.team_hulk.pipelines

    const total = parseInt(pipelines.total_successes) + parseInt(pipelines.total_failures)
    const successPercentage = (parseInt(pipelines.total_successes) / total) * 100
    const failurePercentage = (parseInt(pipelines.total_failures) / total) * 100

    const successPercentagefixed = successPercentage.toFixed(0)




    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5'>
            <h1 className='text-xl font-semibold mb-5'>Pipelines</h1>
            <div className='flex gap-5 mb-3'>
                <div className='bg-white rounded-md p-3'>
                    <picture>
                        <img src="/img/Group.svg" className='w-5 h-5' alt="" />
                    </picture>
                </div>
                <div>
                    <h1 className='text-lg font-semibold '>
                        {pipelines.total_time}
                    </h1>
                    <p className='text-sm text-gray-400 '>Created 2 days ago</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='bg-white rounded-md p-3'>
                    <picture>
                        <img src="/img/Group.svg" className='w-5 h-5' alt="" />
                    </picture>
                </div>
                <div>
                    <h1 className='text-lg font-semibold '>
                        {pipelines.average_duration}
                    </h1>
                    <p className='text-sm text-gray-400 '>Average duration</p>
                </div>
            </div>


            {/* doughnut chart react-chartjs-2*/}
            <div className=' w-full mt-[52px]'>

                <Doughnut
                    data={{
                        labels: ['Success', 'Failure'],
                        datasets: [
                            {
                                label: 'Pipelines',
                                data: [successPercentage, failurePercentage],
                                backgroundColor: [
                                    '#478938',
                                    '#F84F50'
                                ],
                                borderColor: [
                                    '#478938',
                                    '#F84F50'
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}

                    // height & width of the chart
                    // width={200}
                    // height={200}

                    options={{

                        elements: {
                            center: {
                                text: '90%',
                                sidePadding: 60
                            }
                        },

                        cutout: '80%',
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                        },

                    }
                    }


                    plugins={[
                        {
                            id: 'textCenter',
                            beforeDatasetsDraw: (chart) => {
                                const { ctx } = chart;

                                ctx.save();
                                ctx.font = 'bolder 30px poppins';
                                ctx.fillStyle = '#3D3E41';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(`${successPercentagefixed}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
                                ctx.restore();
                            }
                        }
                    ]}
                />
            </div>
        </div >
    )
}

export default Pipelines
