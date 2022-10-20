import React, { useMemo, useState } from "react"
import SidebarTemp from "../../components/admin-components/SidebarLayout"
import { BsBank } from "react-icons/bs"
import { FaRupeeSign } from "react-icons/fa"
import { TiDocumentText } from "react-icons/ti"
import { AiOutlineFieldNumber } from "react-icons/ai"
import { AiOutlineStock } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { BsEnvelopeOpen } from "react-icons/bs"
import Performance from "../../components/admin-components/overviewComponents/Performance"
import Listcard from "../../components/admin-components/overviewComponents/Listcard"
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router"
import { useAuth } from "../../context/TraderxContext"
import { db } from "../../firebase"
import { 
    collection,
    getDocs
} from "firebase/firestore"
import { PerformanceTable } from "../../components/admin-components/Report/PerformanceTable"

export default function Home() {

  const router = useRouter()

  const { consolidatedInvestmentDocument, consolidatedDocument } = useAuth()

  var noOfRecommendations

  const [ counter, setCounter ] = useState(0)

  useMemo(() => {
    consolidatedInvestmentDocument()

    const colRef = collection(db, 'ideas')
    noOfRecommendations = getDocs(colRef)
    noOfRecommendations?.docs?.map(doc => {
      setCounter(counter+1)
      console.log(counter)
    })
  }, [router])

  console.log(counter)

  return (
    <div className="">
      <SidebarTemp />
      { consolidatedDocument &&
        <div className="bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col py-10 pl-32 pr-16 min-h-screen">
          <div>
            <h2 className='text-transparent text-4xl font-bold mb-3 bg-clip-text bg-gradient-to-r from-green-300  to-slate-900'>Dashboard</h2>
            <div className='mb-4 horizontal-line bg-gradient-to-r from-green-300 to-slate-900 col-span-3 h-[2px] w-1/5 rounded'></div>
          </div>
          <div className="grid gap-3 grid-cols-3  h-full">
            <div className="flex flex-row row-span-1 col-span-2 items-start rounded-2xl bg-slate-800 p-4 gap-3">
              <div className="w-1/4 bg-gradient-to-br from-green-300 to-slate-900 p-[2px] rounded-2xl transition transform hover:scale-[1.05] ease-in-out duration-600 ">
                <div className='rounded-2xl bg-slate-900 w-full flex flex-col text-green-300 p-4'>
                  <BsBank className="rounded-md mb-4 text-orange-500" fontSize={46}/>
                  <h2 className="text-green-100 text-base mb-1">Amount Invested</h2>
                  <div className="flex flex-row">
                    <FaRupeeSign fontSize={31} className=''/>
                    <h2 className="text-4xl -mt-2">{consolidatedDocument[0].data.consolidatedAmount}</h2>
                  </div>
                </div>
              </div>

              <div className="w-1/4 bg-gradient-to-br from-green-300 to-slate-900 p-[2px] rounded-2xl transition transform hover:scale-[1.05] ease-in-out duration-600">
                <div className='rounded-2xl bg-slate-900 w-full flex flex-col text-green-300 p-4'>
                <TiDocumentText className="rounded-md mb-4 text-blue-500" fontSize={46}/>
                <h2 className="text-green-100 text-base mb-1">Total Shares Bought</h2>
                  <div className="flex flex-row">
                    <AiOutlineFieldNumber fontSize={31} className=''/>
                    <h2 className="text-4xl -mt-2 ml-2">{consolidatedDocument[0].data.consolidatedShares}</h2>
                  </div>
                </div>
              </div>

              <div className="w-1/4 bg-gradient-to-br from-green-300 to-slate-900 p-[2px] rounded-2xl transition transform hover:scale-[1.05] ease-in-out duration-600">
                <div className='rounded-2xl bg-slate-900 w-full flex flex-col text-green-300 p-4'>
                  <AiOutlineStock className="rounded-md mb-4 text-green-600" fontSize={46}/>
                  <h2 className="text-green-100 text-base mb-1">Total Profit</h2>
                  <div className="flex flex-row">
                    <FaRupeeSign fontSize={31} className=''/>
                    <h2 className="text-4xl -mt-2">1,700</h2>
                  </div>
                </div>
              </div>

              <div className="w-1/4 bg-gradient-to-br from-green-300 to-slate-900 p-[2px] rounded-2xl transition transform hover:scale-[1.05] ease-in-out duration-600">
                <div className='rounded-2xl bg-slate-900 w-full flex flex-col text-green-300 p-4'>
                  <BsEnvelopeOpen className="rounded-md mb-4 text-yellow-300" fontSize={46}/>
                  <h2 className="text-green-100 text-base mb-1">Recommendations</h2>
                  <div className="flex flex-row">
                    <AiOutlineStar fontSize={31} className=''/>
                    <h2 className="text-4xl -mt-2">12</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-span-2 col-span-1 rounded-2xl bg-slate-800 p-3 px-5 h-full">
              <Listcard />
            </div>
            <div className="row-span-2 col-span-2 p-3 rounded-2xl bg-slate-800 overflow-y-scroll">
              <PerformanceTable />
            </div>
            <div className="grid grid-cols-5 row-span-1 col-span-1 rounded-2xl bg-slate-800 p-3">
              <div className="py-20"></div>
              <div></div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
