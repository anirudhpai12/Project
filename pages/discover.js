import React, { useState } from 'react'
import Sidebar from '../components/user-components/Sidebar'
import { Filter } from '../components/user-components/Filter'
import { VscFilter } from 'react-icons/vsc'
import { useAuth } from '../context/TraderxContext'
import Card from '../components/user-components/recycle/Card'
import { Navbar } from '../components/user-components/Navbar'
import { BsSearch } from 'react-icons/bs'
import HashLoader from "react-spinners/HashLoader"

export default function Discover() {

  const [ loading, setLoading ] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [ searchTerm, setSearchterm ] = useState("")

  const handleFilter = () => {
    setIsOpen(!isOpen)
  }

  const { Idea } = useAuth()

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
          <div className='lg:w-[87%] float-right min-h-screen bg-night'>
            <div className='grid grid-cols-5 mt-20 gap-6'>
              <div className='col-span-4 ml-20 grid items-center'>
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
              <div className='col-span-1 grid w-32'>
                <button className='bg-gray-600 text-light-blue row-flex px-4 py-1 justify-center rounded' onClick={handleFilter}>Filter &nbsp; <VscFilter /></button>
              </div>
            </div>

            <Filter isOpen={isOpen}/>

            <div>Ideas</div>

            <div className='grid grid-cols-3 gap-5 px-20 pb-8'>
              {Idea?.filter((item) => {
                if( searchTerm == "") return item
                else if( item?.data?.shareName?.toLowerCase().includes(searchTerm.toLowerCase()) ) return item
                }).map(idea => (
                <Card className="text-white" idea={idea} key={idea.id}/>
              ))}
            </div>
          </div>
        </div>
    )}
    </div>
  )
}
