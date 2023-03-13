import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Language({ Data }) {

    const languages = Data.weekly.team_hulk.languages

    // create array og languages
    const languagesArray = languages.map((language, index) => {
        return language.language
    })

    // create array of percentage
    const percentageArray = languages.map((language, index) => {
        return language.percentage
    })



    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5'>
            <h1 className='text-xl font-semibold mb-5'>Language</h1>
            <div className='flex gap-5 mb-3'>
                <div className='bg-white rounded-md p-3'>
                    <picture>
                        <img src="/img/Group 75.svg" className='w-5 h-5' alt="" />
                    </picture>
                </div>
                <div>
                    <h1 className='text-lg font-semibold '>
                        {
                            languages.reduce((acc, curr) => {
                                return acc + curr.contributions
                            }, 0)
                        }
                    </h1>
                    <p className='text-sm text-gray-400 '>Number of contribution</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-3'>
                {
                    languages.map((language, index) => {
                        return (
                            <div key={index} className="flex justify-between text-sm">
                                <div className='flex items-center gap-2'>
                                    {/* bullet circle */}
                                    <div
                                        style={{ backgroundColor: language.color }}
                                        className=' rounded-full w-3 h-3'></div>
                                    <h3>
                                        <span className=''>
                                            {language.language}
                                        </span>
                                    </h3>
                                </div>
                                <h4>
                                    <span className='font-semibold'>
                                        {language.percentage}%
                                    </span>
                                </h4>
                            </div>
                        )
                    })
                }

            </div>
            <div className='flex gap-5 mt-3 mb-5'>

            </div>


            {/* doughnut chart react-chartjs-2*/}
            <div className='mt-5 mb-3 w-full'>

                <Doughnut
                    data={{
                        labels: languagesArray,
                        datasets: [
                            {
                                label: 'Language',
                                data: percentageArray,
                                backgroundColor: [
                                    '#F84F50',
                                    '#33BFFA',
                                    '#9F6BF2',
                                    '#478938'
                                ],
                                borderColor: [
                                    '#F84F50',
                                    '#33BFFA',
                                    '#9F6BF2',
                                    '#478938'
                                ],
                                borderWidth: 1,
                                borderAlign: "inner",
                                borderRadius: 10,
                            },
                        ],
                    }}



                    options={{
                        cutout: '82%',
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    }}
                    plugins={[
                        {
                            id: 'textCenter',
                            beforeDatasetsDraw: (chart) => {
                                const { ctx, data } = chart;

                                ctx.save();
                                ctx.font = 'bolder 30px poppins';
                                ctx.fillStyle = '#3D3E41';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(`${data.datasets[0].data[0]}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
                                ctx.restore();
                            }
                        }
                    ]}
                />

            </div>
        </div>
    )
}

export default Language
