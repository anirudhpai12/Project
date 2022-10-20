import React, { useState } from 'react'
import Link from 'next/dist/client/link'
import { TbArrowWaveRightUp } from 'react-icons/tb'
import { BiTargetLock, BiRupee } from 'react-icons/bi'
import { BsBookmark, BsBookmarkHeartFill } from 'react-icons/bs'
import { useRouter } from 'next/dist/client/router'
import { useAuth } from '../../../context/TraderxContext'

const Card = ({ idea }) => {

  const [wish, setWish] = useState(false)
  const [icon, setIcon] = useState(<BsBookmark fontSize={24}/>)

  const { removeFromWishList, addToWishList } = useAuth()

  const handleIcon = () => {
    if(!wish){
      setIcon(<BsBookmarkHeartFill className='text-red-500' fontSize={24} />)
      addToWishList(idea.id)
      setWish(!wish)
    }
    else {
      setIcon(<BsBookmark fontSize={24}/>)
      removeFromWishList(idea.id)
      setWish(!wish)
    }
  }

  const router = useRouter()

  let flag = false
  
  if(router.pathname === '/') flag = true
  else flag = false


  return (
    <div className=''>
        <div className={flag ? "min-w-max block p-4 rounded-lg shadow-sm shadow-blue-600 glassmorphism" : "block p-4 rounded-lg shadow-sm shadow-blue-600 glassmorphism"}>
          <img
            src={idea.data.image}
            className="object-cover w-full h-32 rounded-md mask"
          />
          <div className={!flag ? 'text-slate-300 absolute right-4 top-[6.5rem] p-2 cursor-pointer' : 'hidden'}
          onClick={handleIcon}>
            {icon}
          </div>
        <Link href={`/ideas/${idea.id}`}>
          <a>
            <div className="mt-2">
              <div className='flex flex-row justify-between '>
                <div>
                  <div className="text-sm text-gray-500">Equity • {idea.data.timeDuration}</div>
                  <div className="font-medium text-xl text-white">{idea.data.shareName}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Rating</div>
                  <div className="font-medium text-xl text-white text-center">{idea.data.rating}</div>
                </div>
              </div>
              <div className="flex items-center justify-around mt-6 text-xs gap-2">
                <div className="">
                    <div className="text-slate-300 text-xs md:text-sm">Current Price</div>
                    <div className="font-medium text-white text-base md:text-lg flex flex-row items-center">
                      <BiRupee />{idea.data.marketPrice}
                      &nbsp;<TbArrowWaveRightUp fontSize={21} className="text-white"/>
                    </div>
                </div>
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <div className="">
                    <div className="text-slate-300 text-xs md:text-sm">Target Price</div>
                    <div className="font-medium text-white text-base md:text-lg flex flex-row items-center">
                      <BiRupee />{idea.data.targetPrice}
                      &nbsp; <BiTargetLock fontSize={21} className="text-white"/>
                    </div>
                  </div>
                </div>
                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                  <div className="">
                    <div className="text-slate-300 text-xs md:text-sm">Total profit</div>
                    <div className="font-medium text-green-500 text-base md:text-lg flex flex-row items-center">
                      <BiRupee />{idea.data.gain}/share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
        </div>
    </div>
  )
}

export default Card