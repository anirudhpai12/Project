import React, { useState, useEffect } from "react"
import Sidebar from "../components/user-components/Sidebar"
import Card from '../components/user-components/recycle/Card'
import { Footer } from "../components/user-components/Footer"
import Link from "next/link"
import { Refer } from "../components/user-components/Refer"
import { FaBalanceScale } from 'react-icons/fa'
import { BiBarChart } from 'react-icons/bi'
import { FiFlag } from 'react-icons/fi'
import { Newscard } from "../components/user-components/recycle/Newscard"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Navbar } from "../components/user-components/Navbar"
import { useAuth } from "../context/TraderxContext"
import HashLoader from "react-spinners/HashLoader"

export default function Home() {

  const [ loading, setLoading ] = useState(true)
  const { Idea, News } = useAuth()

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <div className="">
      {
        loading ? (
          <div className='loader'>
            <HashLoader color='blue' loading={loading} size={100} />
          </div>
        ) : (
        <div>
          <Sidebar/>
          <Navbar />

          <div className="container-radial w-full h-fit lg:w-[87%] float-right py-20 p-8 lg:py-20 lg:px-0 col-flex">
            <div className="col-flex justify-center md:row-flex min-h-max md:px-[7.3rem] items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="col-flex justify-center items-start h-full w-full lg:w-1/2 p-6 bg-[url('../public/images/3d_icons/coins.png')] bg-no-repeat bg-contain bg-right glassmorphism">
                <h2 className="text-white mr-20 lg:mr-40">Start your investment journey</h2>
                <p className="text-white text-sm font-thin mr-32 lg:mr-48 mt-8">Pick among the collection of well researched ideas and invest in them. </p>
                <Link href='/discover'>
                  <a className="flex w-40 mt-4 items-center justify-between px-5 py-2 transition-colors bg-blue-700 border border-blue-600 rounded-lg shadow-lg dark:shadow-blue-900/70 hover:bg-transparent group focus:outline-none focus:ring" href="/download">
                    <span className="text-sm text-white transition-colors group-active:text-blue-500 group-hover:text-blue-500">
                      Start Here
                    </span>
                    <span className="flex-shrink-0 p-2 ml-1 text-blue-600 bg-white group-hover:bg-transparent border border-current rounded-full group-active:text-blue-500">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
              
              <div className="col-flex justify-center items-start h-full w-full lg:w-1/2 p-6 bg-[url('../public/images/3d_icons/wallet_with_cash.png')] bg-no-repeat bg-contain bg-right glassmorphism">
                <h2 className="text-white mr-20 lg:mr-40 ">Learn with TraderX</h2>
                <p className="text-white text-sm font-thin mr-32 lg:mr-48 mt-8">New to the club? Take a small tour in how to trade with TraderX.</p>
                <a className="flex w-44 mt-4 items-center justify-between px-5 py-2 transition-colors bg-blue-700 border border-blue-600 rounded-lg shadow-lg dark:shadow-blue-900/70 hover:bg-transparent group focus:outline-none focus:ring" href="/download">
                  <span className="text-sm text-white transition-colors group-active:text-blue-500 group-hover:text-blue-500">
                    Learn More
                  </span>
                  <span className="flex-shrink-0 p-2 ml-1 text-blue-600 bg-white group-hover:bg-transparent border border-current rounded-full group-active:text-blue-500">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="h-fit w-full col-flex items-center bg_grid py-4 md:px-[7.3rem]">
              <div className="glassmorphism-ideal h-full w-full bg-transparent p-8 md:bg-[url('../public/images/3d_icons/money-tree.png')] bg-contain bg-right-bottom bg-no-repeat">
                <h1 className="text-white text-2xl font-[500] text-left">Ideal for new investors</h1>
                <p className="text-white font-thin mt-6 md:w-[52%]">Ideas with low volatility, low risk and stable return in mid to long term time frame.</p>
                <div className="col-flex md:row-flex items-start mt-8 gap-5">
                  <div className="row-flex text-white gap-2">
                    <div className="bg-white text-blue-600 py-1 px-4 rounded-2xl">
                      <FaBalanceScale fontSize={21}/>
                    </div>
                    <h3>Stable Return</h3>
                  </div>
                  <div className="row-flex text-white gap-2">
                    <div className="bg-white text-blue-600 py-1 px-4 rounded-2xl">
                      <FiFlag fontSize={21}/>
                    </div>
                    <h3>Low Risk</h3>
                  </div>
                  <div className="row-flex text-white gap-2">
                    <div className="bg-white text-blue-600 py-1 px-4 rounded-2xl">
                      <BiBarChart fontSize={21}/>
                    </div>
                    <h3>Low volatility</h3>
                  </div>
                </div>
                <div>
                <button 
                  type="button"
                  className="mt-6 text-white transition-colors bg-blue-700 border border-blue-600 rounded-lg shadow-lg dark:shadow-blue-900/70 hover:bg-transparent group focus:outline-none focus:ring text-sm px-8 py-3.5 text-center "
                >
                  Invest Now
                </button>
                </div>
              </div>
            </div>

            <div className="h-full w-full py-4 md:px-[7.3rem] ">
              <h2 className="text-white text-2xl font-[500] mb-4">Trending Ideas</h2>
              <div className="row-flex overflow-x-auto gap-6">
                {Idea.slice(0,6).map(idea => (
                  <Card className="text-white" idea={idea} key={idea.id}/>
                ))}
                <Link href='/discover'>
                  <a 
                  className="absolute right-28 h-[40%] bg-gradient-to-l from-night via-night/70 to-transparent rounded-md min-w-max p-2 text-light-blue flex items-center hover:bg-gradient-to-l hover:from-night hover:to-night/60"
                  >
                  View all
                  <MdOutlineKeyboardArrowRight fontSize={24} />
                  </a>
                </Link>
              </div>
            </div>

            <div className=" h-full w-full py-4 md:px-[7.3rem] ">
              <Refer />
            </div>

            <div className="h-full w-full py-4 md:px-[7.3rem] ">
              <h2 className="text-white text-2xl font-[500] mb-4">News</h2>
              <div className="row-flex overflow-x-auto gap-6">
                {News?.slice(0,6).map(article => (
                  <Newscard news={article} key={article.id}/>
                ))}
                <Link href='/news'>
                  <a 
                  className="absolute right-28 h-[50%] bg-gradient-to-l from-night via-night/70 to-transparent rounded-md min-w-max p-2 text-light-blue flex items-center hover:bg-gradient-to-l hover:from-night hover:to-night/60"
                  >
                  View all
                  <MdOutlineKeyboardArrowRight fontSize={24} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[87%] float-right">
            <Footer />
          </div>
        </div>
        )}
    </div>
  )
}
