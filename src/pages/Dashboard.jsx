import React from 'react'
import Deployments from '../components/Deployments'
import Language from '../components/Language'
import Pipelines from '../components/Pipelines'
import PullRequests from '../components/PullRequests'
import ReviewTime from '../components/ReviewTime'
import Sidebar from '../components/Sidebar'
import StalePullRequest from '../components/StalePullRequest'
import Tips from '../components/Tips'
import Vulnerabilities from '../components/Vulnerabilities'
import WordtPerformingRepos from '../components/WordtPerformingRepos'
import Data from '../dashboard.json'



export default function Dashboard() {
    return (

        <div className='flex'>
            <div className='w-full lg:w-[300px] hidden lg:block '>
                <Sidebar />
            </div>
            <div className='w-full lg:w-[70%] px-5 lg:px-0 container mx-auto text-gray-800 py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                    <Pipelines Data={Data} />
                    <Language Data={Data} />
                    <Tips Data={Data} />
                </div>
                <div className='flex flex-col lg:flex-row gap-7 mt-7'>
                    <div className='flex flex-col w-full lg:w-[66%]'>
                        <div className='grid grid-cols-2 gap-7'>
                            <PullRequests Data={Data} />
                            <ReviewTime Data={Data} />
                        </div>
                        <div className='grid grid-cols-1 gap-7 w-full mt-7'>
                            <Deployments Data={Data} />
                        </div>

                    </div>
                    <div className='w-full lg:w-[33%]'>
                        <StalePullRequest Data={Data} />
                    </div>

                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-7'>
                    <WordtPerformingRepos Data={Data} />
                    <Vulnerabilities Data={Data} />
                </div>
            </div>
        </div>

    )
}




