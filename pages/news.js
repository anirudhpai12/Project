import React, { useState } from 'react'
import Sidebar from '../components/user-components/Sidebar'
import { useAuth } from '../context/TraderxContext'
import { Navbar } from '../components/user-components/Navbar'
import { BsSearch } from 'react-icons/bs'
import HashLoader from "react-spinners/HashLoader"
import { Newscard } from '../components/user-components/recycle/Newscard'

export default function News() {

  const [ loading, setLoading ] = useState(true)
  const [ searchTerm, setSearchterm ] = useState("")

  const { News } = useAuth()

  console.log(News)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <div>
      {
        loading ? (
          <div className='loader'>
            <HashLoader color='blue' loading={loading} size={100} />
          </div>
        ) : (
        <div>
          <Sidebar />
          <Navbar />
          <div className='lg:w-[87%] float-right min-h-screen bg-night justify-center'>
            <div className='mt-20 gap-6'>
              <div className=' mx-20 grid items-center'>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="absolute ml-2 text-gray-300">
                  <BsSearch fontSize={18}/>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Search for items"
                  onChange={(e) => setSearchterm(e.target.value)}
                />
              </div>
            </div>

            <div className='grid grid-cols-3 gap-5 px-20 pb-8 mt-6'>
              {News?.filter((item) => {
                if( searchTerm == "") return item
                else if( item?.data?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ) return item
                }).map(news => (
                <Newscard className="text-white" news={news} key={news.id}/>
              ))}
            </div>
          </div>
        </div>
    )}
    </div>
  )
}
