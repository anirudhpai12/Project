import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { Navbar } from '../components/user-components/Navbar'
import Sidebar from '../components/user-components/Sidebar'
import { useAuth } from '../context/TraderxContext'
import { WishlistCard } from '../components/user-components/recycle/WishlistCard'

export default function Wishlist() {

  const router = useRouter()
  const { getWishlistedIdeas, singleUser, wishlist, wishlistedIdeaData, listedIdeas, currentUser } = useAuth()

  if(!currentUser) router.push('/signup')

  useMemo(() => {
    getWishlistedIdeas()
  }, [singleUser])

  useMemo(() => {
    wishlist?.map((wish) => {
      wishlistedIdeaData(wish)
    })
  }, [wishlist])

  for(let i=0; i<listedIdeas?.length; i++) {
    if(listedIdeas[i]?.id === listedIdeas[i+1]?.id){
      listedIdeas.splice(i+1, 1)
    }
  }

  console.log(listedIdeas)

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='navbar-radial w-full lg:w-[87%] min-h-screen float-right p-20'>
        <div className=''>
          <h2 className='text-3xl text-light-blue font-medium pb-4 border-b border-slate-700'>Wishlist</h2>
          {listedIdeas ? (
            <div>
              {listedIdeas?.map((idea, index) => (
                <WishlistCard idea={idea} key={index} />
              ))}
            </div>
          ) : (
            <div className='p-5'>
              <div className='text-2xl text-slate-400 pb-5 border-b border-slate-700'>No ideas have been wishlisted.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
