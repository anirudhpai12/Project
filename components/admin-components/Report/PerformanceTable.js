import React, { useState } from 'react'
import { useAuth } from '../../../context/TraderxContext'
import Link from 'next/link'

export const PerformanceTable = () => {

  const { Idea } = useAuth()
  const heading = ['Share Code', 'Buy Price', 'Current Price', 'Target Price', 'Profit/Loss', 'Status']
  return (
    <div className="flex-1">
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col">
      <div className="relative overflow-x-auto">
        <div className='grid grid-cols-6 border rounded text-center'>
          {
            heading.map((head, key) => (
              <div className='bg-slate-800 text-light-blue p-3 border-r' >{head}</div>
            ))
          }
        </div>
        {
          Idea?.slice(0,6).map((item) => (
            <div>
              <div className='grid grid-cols-6 border bg-slate-700 text-light-blue rounded text-center'>
                <div className='border-r p-3' >{item.data.shareCode}</div>
                <div className='border-r p-3' >{item.data.buyPrice}</div>
                <div className='border-r p-3' >{item.data.marketPrice}</div>
                <div className='border-r p-3' >{item.data.targetPrice}</div>
                <div className='border-r p-3 text-lg' >{item.data.gain} ({Math.ceil((item.data.gain * 100) / item.data.buyPrice)}%)</div>
                <div className='border-r p-2 flex items-center justify-center' >
                <div className={`rounded-full text-center w-full p-2 ${item?.data?.status?.toLowerCase()==='in progress' ? `bg-blue-700` : (item?.data?.status?.toLowerCase()==='target reached' ? `bg-green-700` : (item?.data?.status?.toLowerCase()==='target failed' ? `bg-red-700` : `bg-yellow-500`))}`}>{item.data.status}</div>
                </div>
                {/* <div className='border-r p-3 flex items-center justify-center' >
                  <Link href={`/tx-admin/update/${item.id}`}>
                    <button 
                      className="rounded items-center text-center py-2 px-7 bg-blue-700 hover:bg-blue-800"
                    >
                      Edit
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}
