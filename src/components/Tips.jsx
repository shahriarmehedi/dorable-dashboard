import React from 'react'

export default function Tips({ Data }) {


    const tips = Data.weekly.team_hulk.tips

    return (
        <div className='bg-[#F5F6FE] rounded-xl p-2'>
            <div className="flex justify-between items-center px-5 pt-5">
                <div className='flex items-center gap-2'>
                    <picture>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvR2L6BkA7G-ZvBZZuUPrFkHUIHz9GaPn28LjQH7JQxfFX14Z_Mjlf4bmmKaprtD3XX9g&usqp=CAU" className='w-7 h-7 rounded-md' alt="" />
                    </picture>
                    <div>
                        <h1 className='text-lg font-bold '>Tips</h1>
                    </div>
                </div>
                <div>
                    <h2>
                        View all
                    </h2>
                </div>
            </div>

            <div className='p-5 flex flex-col gap-3'>
                {
                    tips.map((tip, index) => {
                        return (
                            <div className='bg-white p-3 rounded-lg flex items-center gap-3'>
                                <div className='w-[15%]'>
                                    <div className='bg-gray-100 p-1 flex justify-center items-center rounded-md h-10 w-10'>
                                        <picture className=''>
                                            <img src="/img/feature.png" className='w-7 h-7 rounded-md' alt="" />
                                        </picture>
                                    </div>
                                </div>
                                <div>
                                    <h1 className=' font-semibold '>
                                        {tip.name}
                                    </h1>
                                    <p className='text-xs text-gray-400'>
                                        {tip.tip}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
