import React from 'react'

export default function Header() {
    return (
        <div className='pt-3 pb-10'>
            <div className='flex items-center lg:justify-between'>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 items-center">
                    <select className="select bg-[#F5F6FE] w-[130px] lg:w-full ">
                        <option disabled selected>
                            Team
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select className="select bg-[#F5F6FE]  w-[130px] lg:w-full ">
                        <option>Weekly</option>
                        <option>Monthly</option>

                    </select>
                    <button className='bg-green-700 px-7 py-3 rounded-md text-white '>
                        Elite
                    </button>
                </div>

            </div>
        </div>
    )
}
