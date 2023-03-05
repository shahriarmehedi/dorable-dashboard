// create a new component called PullRequests that will render a list of pull requests as a smooth line chart using reacrt-chartjs-2

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function PullRequests() {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-5'>
            <h1 className='text-xl font-semibold mb-7'>Pull Requests</h1>

            <div>
                <h1 className='text-lg font-semibold '>Total count of pull requests</h1>
                <p className='text-3xl font-semibold '>1324</p>
            </div>

            {/* Line chart */}
            <div className='mt-2 relative w-full'>
                <Line
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Pull Requests',
                                data: [75, 10, 75, 10, 75, 10, 75, 10, 75, 10, 75, 10],
                                fill: true,
                                backgroundColor: '#6B46C1',
                                borderColor: '#6B46C1',
                            },
                        ],
                    }}
                    options={{
                        tension: 0.5,
                        pointRadius: 0,
                        maintainAspectRatio: true,
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                                display: false,
                            },
                            x: {
                                display: false,
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default PullRequests