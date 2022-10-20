import { useRouter } from 'next/dist/client/router'
import React, { useMemo, useState } from 'react'
import Link from 'next/dist/client/link'
import { useAuth } from '../../../context/TraderxContext'

export const InvestedIdeas = (portfolio) => {

  	return (
		<div className='glassmorphism w-full h-24 mt-5'>
			<Link href={`ideas/${portfolio.portfolio.idea}`}>
			
				<div class="grid grid-cols-4 items-center">
					<div className='col-flex text-light-blue border-r border-slate-700 p-3'>
						<div className='text-md text-gray-300'>Share Code</div>
						<div className='text-xl'>{portfolio.portfolio.shareCode}</div>
					</div>
					<div className='col-flex text-light-blue border-r border-slate-700 p-3'>
						<div className='text-md text-gray-300'>Buy Price</div>
						<div className='text-xl'>{portfolio.portfolio.buyPrice}</div>
					</div>
					<div className='col-flex text-light-blue border-r border-slate-700 p-3'>
						<div className='text-md text-gray-300'>Shares Bought</div>
						<div className='text-xl'>{portfolio.portfolio.sharesBought}</div>
					</div>
					<div className='col-flex text-light-blue border-slate-700 p-3'>
						<div className='text-md text-gray-300'>Invested Amount</div>
						<div className='text-xl'>{portfolio.portfolio.investedAmount}</div>
					</div>
					
				</div>

			</Link>


			{/* <div className='w-1/5 flex items-center'>
				<div className='col-flex text-light-blue'>
					<span className={`text-base ml-6 px-2 rounded-full ${singleIdea?.status?.toLowerCase()==='in progress' ? `bg-blue-700` : (singleIdea?.status?.toLowerCase()==='target reached' ? `bg-green-700` : (singleIdea?.status?.toLowerCase()==='target failed' ? `bg-red-700` : `bg-yellow-500`))}`}>{singleIdea?.status}</span>
				</div>
			</div> */}
		</div>
  	)
}
