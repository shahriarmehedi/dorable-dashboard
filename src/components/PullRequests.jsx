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

function PullRequests({ Data }) {

    const pullRequestData = Data.weekly.team_hulk.pull_requests

    return (
        <div className='bg-[#F5F6FE] h-full rounded-xl px-5 pt-5 pb-2'>
            <h1 className='text-xl font-semibold mb-5'>Total Count of Pull Requests</h1>

            <div>
                <p className='text-3xl font-semibold text-[#112D5A] '>
                    {pullRequestData.total_count}
                </p>
            </div>

            {/* Line chart */}
            <div className='mt-2 relative w-full'>
                <Line
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Pull Requests',
                                data: [55, 45, 40, 40, 45, 40, 45, 55, 40, 45, 35, 48],
                                fill: true,

                                backgroundColor: '#53BAE5',
                                borderColor: '#53BAE5',
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