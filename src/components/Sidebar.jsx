import React from 'react'

export default function Sidebar() {
    return (
        <div className='hidden lg:block fixed h-screen w-[300px] bg-[#F5F6FE]'>
            <div className='flex items-center justify-center h-20 mb-10'>
                <img src='https://dorable.netlify.app/logo.png' className='h-10' alt='logo' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-5 bg-blue-900 pl-7 text-white py-4'>
                    <img src='https://www.nicepng.com/png/full/800-8005038_login-dashboard-icon-white-png.png' className='w-7' alt='dashboard' />
                    <p className='text-lg'>Dashboard</p>
                </div>
                <div className='flex items-center gap-5 pl-7 text-gray-800 py-4'>
                    <img src='https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png' className='w-7' alt='dashboard' />
                    <p className='text-lg'>Dora metrics</p>
                </div>
                <div className='flex items-center gap-5 pl-7 text-gray-800 py-4'>
                    <img src='https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png' className='w-7' alt='dashboard' />
                    <p className='text-lg'>Incident <br /> observability</p>
                </div>
                <div className='flex items-center gap-5 pl-7 text-gray-800 py-4'>
                    <img src='https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png' className='w-7' alt='dashboard' />
                    <p className='text-lg'>CI/CD insights</p>
                </div>
                <div className='flex items-center gap-5 pl-7 text-gray-800 py-4'>
                    <img src='https://cdn0.iconfinder.com/data/icons/octicons/1024/dashboard-512.png' className='w-7' alt='dashboard' />
                    <p className='text-lg'>Deployments & incidents</p>
                </div>
            </div>
        </div>
    )
}




