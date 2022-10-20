import React, { useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useAuth } from '../../../context/TraderxContext'

export const InvestButton = ({title, idea, investment}) => {

  const router = useRouter()

  const { investedUser, consolidatedInvestmentDocument, consolidatedDocument } = useAuth()

  useMemo(() => {
    consolidatedInvestmentDocument()
  }, [router])

  const handleInvestment = () => {
    investedUser(investment, idea, consolidatedDocument[0]?.id)
  }

  return (
    <a 
    onClick={handleInvestment}
    className="flex w-full items-center cursor-pointer justify-between px-5 py-2 transition bg-green-700 border border-green-600 rounded-lg shadow-lg dark:shadow-green-900/70 hover:bg-transparent group focus:outline-none focus:ring hover:scale-105">
        <span className=" text-lg text-center text-white transition-colors group-active:text-green-500 group-hover:text-green-500">
        	{title}
        </span>
        <span className="flex-shrink-0 p-2 ml-1 text-green-600 bg-white group-hover:bg-transparent border border-current rounded-full group-active:text-green-500">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        </span>
    </a>
  )
}
