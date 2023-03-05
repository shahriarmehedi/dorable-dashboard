import React from 'react'

export default function Vulnerabilities() {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-2 border-[4px] border-red-400 '>
            <div className="flex justify-between items-center px-5 pt-5">
                <div className='flex items-center gap-2'>
                    <picture>
                        <img src="https://i.pinimg.com/474x/74/09/08/740908747d3caf2959734fc10f36f0f4.jpg" className='w-7 h-7 rounded-md' alt="" />
                    </picture>
                    <div>
                        <h1 className='text-lg font-bold '>Vulnerabilities</h1>
                    </div>
                </div>
                <div>
                    <h2>
                        View all
                    </h2>
                </div>
            </div>

            <div className='p-5 flex flex-col gap-3'>
                <div className='flex justify-between items-center bg-blue-900 rounded-lg w-full py-3 text-white px-5'>
                    <h3 className='font-semibold'>PROXY-CONTAINER</h3>
                    <h3 className='font-semibold'>8</h3>
                </div>
                <div className='flex justify-between items-center bg-blue-900 rounded-lg w-full py-3 text-white px-5'>
                    <h3 className='font-semibold'>KITCHEN-SINK</h3>
                    <h3 className='font-semibold'>3</h3>
                </div>
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg font-bold '>Kitchen-Sink</h1>
                            <h3 className='font-semibold text-gray-800 text-xs'>
                                05/12/2022
                            </h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-gray-400 text-sm'>
                                Production
                            </h3>
                            <h3 className='font-semibold text-gray-800'>
                                Alice Combes
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg font-bold '>Kitchen-Sink</h1>
                            <h3 className='font-semibold text-gray-800 text-xs'>
                                05/12/2022
                            </h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-gray-400 text-sm'>
                                Production
                            </h3>
                            <h3 className='font-semibold text-gray-800'>
                                Alice Combes
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg font-bold '>Kitchen-Sink</h1>
                            <h3 className='font-semibold text-gray-800 text-xs'>
                                05/12/2022
                            </h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-gray-400 text-sm'>
                                Production
                            </h3>
                            <h3 className='font-semibold text-gray-800'>
                                Alice Combes
                            </h3>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
