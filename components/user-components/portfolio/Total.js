import React from 'react'
import { BiRupee } from 'react-icons/bi'

export const Total = (portfolio) => {

  let totalAmountInvested = 0

  console.log(portfolio.portfolio)

  for(let i=0; i<portfolio.portfolio.length; i++) {
    totalAmountInvested += portfolio.portfolio[i].investedAmount
  }


  return (
    <div className=''>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        <div className='col-span-1 glassmorphism-ideal text-light-blue p-6 col-flex '>
          <h4>Total investment</h4>
          <h2 className='text-5xl mt-2 font-medium flex'><BiRupee />{totalAmountInvested}</h2>
        </div>
        <div className='flex flex-row col-span-3 gap-2 glassmorphism-ideal text-light-blue p-6 text-center'>
          <div className='w-1/3 p-3'>
            <h4>Total Ideas</h4>
            <h2 className='text-5xl mt-2 font-medium '>{portfolio.portfolio.length}</h2>
          </div>
          <div className='w-1/3 bg-blue-800 p-3 rounded'>
            <h4>Total Profit/Loss</h4>
            <h2 className='text-5xl mt-2 font-medium flex justify-center'><BiRupee />400</h2>
          </div>
          <div className='w-1/3 p-3'>
            <h4>Ideas In Progress</h4>
            <h2 className='text-5xl mt-2 font-medium'>2</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
