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
        <div className='bg-[#F5F6FE] rounded-xl p-5'>
            <h1 className='text-xl font-semibold mb-7'>Review Time</h1>

            <div>
                <h1 className='text-lg font-semibold '>Average review time</h1>
                <p className='text-3xl font-semibold '>2 hours</p>
            </div>

            {/* Bar chart */}
            <div className='mt-2 relative w-full'>
                <Bar
                    data={{
                        labels:
                            // 20 lebels
                            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],

                        datasets: [
                            {
                                label: 'Review Time',
                                data: [
                                    // 20 data points
                                    23, 19, 3, 5, 2, 3, 20, 3, 5, 2, 3, 20,
                                    23, 19, 3, 5, 2, 3, 20, 3

                                ],
                                fill: true,
                                backgroundColor: '#6B46C1',
                                borderColor: '#6B46C1',
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