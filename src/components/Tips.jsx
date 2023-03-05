import React from 'react'

export default function Tips() {
    return (
        <div className='bg-[#F5F6FE] rounded-xl p-2'>
            <div className="flex justify-between items-center px-5 pt-5">
                <div className='flex items-center gap-2'>
                    <picture>
                        <img src="https://i.pinimg.com/474x/74/09/08/740908747d3caf2959734fc10f36f0f4.jpg" className='w-7 h-7 rounded-md' alt="" />
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
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <picture className='w-[20%]'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXblgXspg0u0XI2yniZQhp2fwX6C-wKB8WwA&usqp=CAU" className='w-7 h-7 rounded-md' alt="" />
                    </picture>
                    <div>
                        <h1 className='text-lg font-bold '>Feature branches</h1>
                        <p className='text-xs text-gray-400'>
                            Feature branches are a great way to organize your work and keep your codebase clean. They allow you to work on a feature without affecting the main branch.
                        </p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <picture className='w-[20%]'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXblgXspg0u0XI2yniZQhp2fwX6C-wKB8WwA&usqp=CAU" className='w-7 h-7 rounded-md' alt="" />
                    </picture>
                    <div>
                        <h1 className='text-lg font-bold '>Feature branches</h1>
                        <p className='text-xs text-gray-400'>
                            Feature branches are a great way to organize your work and keep your codebase clean. They allow you to work on a feature without affecting the main branch.
                        </p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <picture className='w-[20%]'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXblgXspg0u0XI2yniZQhp2fwX6C-wKB8WwA&usqp=CAU" className='w-7 h-7 rounded-md' alt="" />
                    </picture>
                    <div>
                        <h1 className='text-lg font-bold '>Feature branches</h1>
                        <p className='text-xs text-gray-400'>
                            Feature branches are a great way to organize your work and keep your codebase clean. They allow you to work on a feature without affecting the main branch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
