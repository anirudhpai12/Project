import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { Navbar } from '../components/user-components/Navbar'
import { InvestedIdeas } from '../components/user-components/portfolio/InvestedIdeas'
import { Total } from '../components/user-components/portfolio/Total'
import Sidebar from '../components/user-components/Sidebar'
import { useAuth } from '../context/TraderxContext'

export default function Portfolio() {

  const router = useRouter()
  
	const { fetchSingleUser, singleUserData } = useAuth()

  useMemo(() => {
    fetchSingleUser()
  }, [router])

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='navbar-radial min-h-screen w-full lg:w-[87%] float-right p-20'>
        <div className='text-4xl text-white font-medium pb-4 border-b border-slate-700'>
          Portfolio
        </div>
        <div className='pb-6 border-b border-slate-700'>
          <Total portfolio={singleUserData?.portfolio}/>
        </div>
        <div>
          {
            singleUserData?.portfolio?.map((data) => (
              <InvestedIdeas portfolio={data}/>
            )
          )}
        </div>
      </div>
    </div>
  )
}
