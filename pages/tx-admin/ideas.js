import React, { useState } from 'react'
import SidebarTemp from '../../components/admin-components/SidebarTemp'
import { useAuth } from '../../context/TraderxContext'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'

export default function Idea() {

  const { Idea } = useAuth()
  const heading = ['Share Name','Share Code', 'Buy Price', 'Current Price', 'Target Price', 'Profit/Loss', 'Status', '']
  const [ searchTerm, setSearchterm ] = useState("")

  return (
    <div className="flex-1">
      <SidebarTemp />
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col py-10 pl-40 pr-16 h-screen">
        <div className="mt-2 mb-4 ml-2">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="absolute mt-3 ml-2 text-gray-300">
              <BsSearch fontSize={18}/>
            </div>
            <input
              type="text"
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="Search for items"
              onChange={(e) => setSearchterm(e.target.value)}
            />
        </div>
      <div className="relative overflow-x-auto">
        <div className='grid grid-cols-8 border rounded text-center'>
          {
            heading.map((head, key) => (
              <div className='bg-slate-800 text-light-blue p-3 border-r' >{head}</div>
            ))
          }
        </div>
        {
          Idea?.filter((item) => {
            if( searchTerm == "") return item
            else if( item?.data?.shareName?.toLowerCase().includes(searchTerm.toLowerCase()) ) return item
          }).map((item, key) => (
            <div>
              <div className='grid grid-cols-8 border bg-slate-700 text-light-blue rounded text-center'>
                <div className='border-r p-3' >{item.data.shareName}</div>
                <div className='border-r p-3' >{item.data.shareCode}</div>
                <div className='border-r p-3' >{item.data.buyPrice}</div>
                <div className='border-r p-3' >{item.data.marketPrice}</div>
                <div className='border-r p-3' >{item.data.targetPrice}</div>
                <div className='border-r p-3 text-lg' >{item.data.gain} ({Math.ceil((item.data.gain * 100) / item.data.buyPrice)}%)</div>
                <div className='border-r p-2 flex items-center justify-center' >
                  <div className={`rounded-full text-center w-full p-2 ${item?.data?.status?.toLowerCase()==='in progress' ? `bg-blue-700` : (item?.data?.status?.toLowerCase()==='target reached' ? `bg-green-700` : (item?.data?.status?.toLowerCase()==='target failed' ? `bg-red-700` : `bg-yellow-500`))}`}>{item.data.status}</div>
                </div>
                <div className='border-r p-3 flex items-center justify-center' >
                  <Link href={`/tx-admin/update/${item.id}`}>
                    <button 
                      className="rounded items-center text-center py-2 px-7 bg-blue-700 hover:bg-blue-800"
                    >
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}
