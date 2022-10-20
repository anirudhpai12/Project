import React from 'react'


const statistics = () => {
  return (
    <div>
        <div className='mx-auto flex flex-row float-right h-fit w-[87%] p-6 bg-night'>
            <div className='bg-night-lite w-full p-4 px-8 row-flex items-start rounded-md py-8 text-light-blue '>
                <div className='w-3/6 pr-6'>
                    <h2 className='text-2xl font-[700]'>Share Name</h2>
                    <p className='text-grey-300'>Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas.</p>
                </div>
                <div className='w-1/6'>
                    <p className='text-gray-400 text-sm mb-1'>Buy Price</p>
                    <h2 className='text-4xl'>1410</h2>
                </div>
                <div className='w-1/6'>
                  <p className='text-gray-400 text-sm mb-1'>Target Price</p>
                  <h2 className='text-4xl'>1510</h2>
                  <div className="flex gap-1 mt-1 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>

                    <p className="flex gap-2 text-xs">25% Profit</p>
                </div>
                </div>
                <div className='w-1/6'>
                  <p className='text-gray-400 text-sm'>Timeframe</p>
                  <h2 className='text-2xl'>Short Term</h2>
                  <p className='text-gray-400 text-sm'>4-21 Days</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default statistics
