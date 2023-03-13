import React from 'react'

export default function Tips({ Data }) {


    const tips = Data.weekly.team_hulk.tips

    return (
        <div className='bg-[#F5F6FE] rounded-xl p-2'>
            <div className="flex justify-between items-center px-5 pt-5">
                <div className='flex items-center gap-2'>
                    <picture>
                        <img src="https://purepng.com/public/uploads/large/purepng.com-tips-iconsymbolsiconsapple-iosiosios-8-iconsios-8-7215225961248jtx5.png" className='w-7 h-7 rounded-md' alt="" />
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
                                    <div className='flex justify-center items-center rounded-md'>
                                        <picture className=''>
                                            <img src="https://forencisdata.com/assets/img/icons/key.png" className='w-10 h-10' alt="" />
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
