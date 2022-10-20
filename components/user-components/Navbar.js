import Link from 'next/link'
import React, { useMemo } from 'react'
import { useAuth } from '../../context/TraderxContext'
import { IoIosNotifications } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"
import { useRouter } from 'next/router'

export const Navbar = () => {

    const router = useRouter()

    const { currentUser, fetchSingleUser, singleUserData } = useAuth()

    useMemo(() => {
        fetchSingleUser()
    }, [router])

    return (
        <header className='fixed top-0 z-50 px-10 flex flex-row items-center justify-between w-full navbar-radial border-b border-slate-900 h-14 lg:w-[87%] lg:translate-x-[15%]'>
            {
                currentUser ? 
                (
                    <div className='w-full row-flex justify-between'>
                        <div>
                            <h2 className='text-white'>Welcome <span className='underline capitalize'>{singleUserData?.firstName}</span></h2>
                        </div>
                        <div className='space-x-4'>
                            <button className='bg-blue-700 p-2 rounded-3xl'>
                                <IoIosNotifications fontSize={24} className='text-white'/>
                            </button>
                            <button className='bg-blue-700 p-2 rounded-3xl'>
                                <FaUserCircle fontSize={24} className='text-white'/>
                            </button>
                        </div>
                    </div>
                )   
                :   
                (
                    <div className='w-full md:pr-10'>
                        <Link href='/signup'>
                            <a className='bg-blue-700 float-right px-8 py-2 text-light-blue border border-blue-700 hover:bg-transparent rounded-lg'>
                                Get started
                            </a>
                        </Link>
                    </div>
                )
            }   
        </header>
  )
}
