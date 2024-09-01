import React from 'react'

const Herosection = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-purple-800 py-10 w-full rounded-b-xl'>
            <span className="flex text-4xl font-semibold mx-20 mb-6">
                Social Parivartan
            </span>
            <span className="flex text-3xl text-yellow-500 font-semibold mx-20 mb-6">
                Parivartan hi sansar ka niyam he
            </span>
            <div className="flex gap-4">
                <button className='bg-yellow-500 text-black p-2 rounded-xl'>Get Started</button>
                <button className='text-yellow-500 hover:text-black hover:bg-yellow-500 transition ease-in-out duration-500 font-semibold p-2 rounded-xl'>Get Started</button>
            </div>
        </div>
    )
}

export default Herosection