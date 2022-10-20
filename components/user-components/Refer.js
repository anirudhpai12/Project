import React from 'react'
import Image from 'next/image'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export const Refer = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl glassmorphism">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <div className="w-full h-32 mb-2 bg-[url('../public/images/3d_icons/announce.png')] bg-no-repeat bg-contain bg-center"></div>
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Share & Earn Together
        </h2>
        <div className='flex flex-col justify-start md:justify-center md:items-center'>
          <hr className="w-32 md:w-52 my-4 border-gray-300" />
        </div>
        <p className="text-base text-slate-400 md:text-lg md:px-20">
          Spread the word about how you are earning through TraderX Ideas!
        </p>
        <button 
          type="button"
          className="flex flex-row mx-auto text-base items-center gap-1 my-4 text-white transition-colors bg-green-700 border border-green-600 rounded-lg shadow-lg dark:shadow-green-900/70 hover:bg-transparent group focus:outline-none focus:ring px-10 py-3 text-center "
        >
          Share <AiOutlineWhatsApp />
        </button>
      </div>
    </div>
  )
}