import React from 'react'

export default function Header() {
    return (
        <div className='absolute top-2'>
            <div className='flex items-center justify-between'>
                <div className="flex gap-10 items-center">
                    <select className="select bg-[#F5F6FE]  w-full max-w-sm ">
                        <option disabled selected>

                            Team
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select className="select bg-[#F5F6FE]  w-full max-w-sm ">
                        <option>Weekly</option>
                        <option>Monthly</option>

                    </select>
                    <button className='bg-green-700 px-5 py-2 rounded-md text-white relative left-52'>
                        Elite
                    </button>
                </div>

            </div>
        </div>
    )
}
