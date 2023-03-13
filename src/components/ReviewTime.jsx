// create a new component called ReviewTime that will render a list of review time as a vertical bar chart using reacrt-chartjs-2

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ReviewTime() {
    return (
        <div className='bg-[#F5F6FE] rounded-xl px-5 pt-5 pb-2'>
            <h1 className='text-xl font-semibold mb-5'>Average Review Time</h1>

            <div>
                <p className='text-3xl font-semibold text-[#112D5A] '>
                    2 hours
                </p>
            </div>

            {/* Bar chart */}
            <div className='mt-2 relative w-full'>
                <Bar
                    data={{
                        labels:
                            // 20 lebels
                            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],

                        datasets: [
                            {
                                label: 'Review Time',
                                data: [
                                    // 20 data points
                                    9, 10, 3, 5, 2, 3, 12, 3, 5, 2, 3, 8,
                                    15, 5, 3, 5, 2, 3, 9, 3, 5, 2, 3, 7,

                                ],
                                fill: true,
                                backgroundColor: '#BDE4FF',
                                borderColor: '#BDE4FF',
                                borderRadius: 10,
                            },
                        ],
                    }}
                    options={{
                        //   remove x and y axis lebels
                        scales: {
                            x: {
                                display: false,
                            },
                            y: {
                                display: false,
                            },
                        },

                        tension: 0.5,
                        pointRadius: 0,
                        maintainAspectRatio: true,
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },

                    }}
                />
            </div>
        </div>
    );
}

export default ReviewTime;