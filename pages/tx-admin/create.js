import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import SidebarTemp from '../../components/admin-components/SidebarTemp'
import { db } from "../../firebase"
import { addDoc, arrayUnion, collection, updateDoc, doc } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../context/TraderxContext'

export default function Create() {

  const router = useRouter()

  const { consolidatedDocument, consolidatedInvestmentDocument } = useAuth()

  useMemo(() => {
    consolidatedInvestmentDocument()
  }, [router])

  const [shareCode, setShareCode] = useState()
  const [shareName, setShareName] = useState()
  const [marketPrice, setMarketPrice] = useState()
  const [marketCap, setMarketCap] = useState()
  const [high, setHigh] = useState()
  const [low, setLow] = useState()
  const [EPS, setEPS] = useState()
  const [EPSPerc, setEPSPerc] = useState()
  const [ROE, setROE] = useState()
  const [funds, setFunds] = useState()
  const [rating, setRating] = useState('1')
  const [buyPrice, setBuyPrice] = useState()
  const [targetPrice, setTargetPrice] = useState()
  const [gain, setGain] = useState()
  const [stopLoss, setStopLoss] = useState()
  const [timeDuration, setTimeDuration] = useState('Short Term')
  const [description, setDescription] = useState()
  const [overview, setOverview] = useState()
  const [image, setImage] = useState()
  const [status, setStatus] = useState('In Progress')

  const current = new Date()

  const timeStamp = `${current.toLocaleDateString()} ${current.toLocaleTimeString()}`

  const data = [
    shareCode,shareName,marketPrice,marketCap,high,low,
    EPS,EPSPerc,ROE,funds,rating,buyPrice,targetPrice,gain,stopLoss,
    timeDuration,description,overview,image,status
  ]

  const n = data.length
  
  console.log(consolidatedDocument && consolidatedDocument[0].data.recommendations)

  const addDataToFirebase = () => {

    // for(let i=0; i<n; i++){
    //   if(data[i] === undefined) return toast.error('No field can be left empty.')
    // }

    const ideaColRef = collection(db, 'ideas')
    const consolidatedDocRef = doc(db, 'consolidatedInvestment', 'dLTFSu3et9p2089jTtT0')

    let noOfInvestors = consolidatedDocument[0].data.recommendations

    try{
      addDoc(ideaColRef, {
        shareCode: shareCode,
        shareName: shareName,
        marketPrice: Number(marketPrice),
        marketCap: Number(marketCap),
        high: Number(high),
        low: Number(low),
        EPS: Number(EPS),
        EPSPerc: Number(EPSPerc),
        ROE: Number(ROE),
        funds: Number(funds),
        rating: Number(rating),
        buyPrice: Number(buyPrice),
        targetPrice: Number(targetPrice),
        gain: Number(gain),
        stopLoss: Number(stopLoss),
        timeDuration: timeDuration,
        description: description,
        overview: overview,
        image: image,
        status: status, 
        timeStamp: timeStamp,
        investment: arrayUnion({
          totalInvestment: 0,
          totalSharesBought: 0
        })
      })

      updateDoc(consolidatedDocRef, {
        recommendations: noOfInvestors + 1
      })
    
      .then(() => {
        toast.success('New idea has been created!')
        router.reload(window.location.pathname)
      })
    }

    catch(err) {
      toast.error('Idea could not be created')
      console.log(err)
    }
  }

  return (
    <div className="flex-1">
      <SidebarTemp />
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col py-10 pl-32 pr-16 h-full">
        <h2 className='text-transparent text-4xl font-bold mb-3 col-span-3 bg-clip-text bg-gradient-to-r from-green-300  to-slate-900'>Create a new idea</h2>
        <div className='mb-4 horizontal-line bg-gradient-to-r from-green-300 to-slate-900 col-span-3 h-[2px] w-1/2 rounded'></div>
        <div className="grid gap-6 mb-6 lg:grid-cols-3">
            <div className='flex flex-col text-white col-span-3'>
              <h2 className='text-2xl text-slate-100 font-bold mb-3'>Fundamental Information</h2>
              <p className='text-slate-300'>Details about the fundamentals of the share.</p>
            </div>
          <div className='horizontal-line bg-gradient-to-r from-slate-600 to-slate-900 col-span-3 h-[1px] w-full rounded'></div>
          <div>
            <label
              htmlFor="share_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Share Code
            </label>
            <input
              type="text"
              id="share_code"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={shareCode}
              onChange={(e) => setShareCode(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="share_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Share Name
            </label>
            <input
              type="text"
              id="share_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={shareName}
              onChange={(e) => setShareName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="market_price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Current Market Price
            </label>
            <input
              type="text"
              id="market_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={marketPrice}
              onChange={(e) => setMarketPrice(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="marketcap"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Marketcap (in Cr.)
            </label>
            <input
              type="text"
              id="marketcap"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={marketCap}
              onChange={(e) => setMarketCap(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="52WH"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              52 Week High
            </label>
            <input
              type="text"
              id="52WH"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required=""
              value={high}
              onChange={(e) => setHigh(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="52WL"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              52 Week Low
            </label>
            <input
              type="text"
              id="52WL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={low}
              onChange={(e) => setLow(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="EPS"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              EPS
            </label>
            <input
              type="text"
              id="EPS"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={EPS}
              onChange={(e) => setEPS(e.target.value)}
            />
          </div>
        
          <div>
            <label
              htmlFor="EPSPerce"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              EPS Percentage Change
            </label>
            <input
              type="text"
              id="EPS_perce"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={EPSPerc}
              onChange={(e) => setEPSPerc(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="ROE"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ROE
            </label>
            <input
              type="text"
              id="ROE"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={ROE}
              onChange={(e) => setROE(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="institution_holding"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Number of Funds
            </label>
            <input
              type="text"
              id="institution_holding"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={funds}
              onChange={(e) => setFunds(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="overall_rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Overall Rating
            </label>
            <select 
              id="time_duration"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="image_link"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image Link
            </label>
            <input
              type="text"
              id="image_link"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className='horizontal-line bg-gradient-to-r from-slate-600 to-slate-900 col-span-3 h-[1px] w-full rounded'></div>
          
          <div className='flex flex-col text-white col-span-3'>
            <h2 className='text-2xl font-bold mb-3 text-slate-100'>Trading Information</h2>
            <p className='text-slate-300'>Enter the data pertaining the information about the trading conditions of a share.</p>
          </div>

          <div className='horizontal-line bg-gradient-to-r from-slate-600 to-slate-900 col-span-3 h-[1px] w-full rounded'></div>

          <div>
            <label
              htmlFor="buy_price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Buying Price
            </label>
            <input
              type="text"
              id="buy_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="sell_price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Selling Price
            </label>
            <input
              type="text"
              id="sell_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="total_gain"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Total Gain
            </label>
            <input
              type="text"
              id="total_gain"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={gain}
              onChange={(e) => setGain(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="stoploss"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Stoploss
            </label>
            <input
              type="text"
              id="stoploss"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="time_duration"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Time Duration
            </label>
            <select 
              id="time_duration"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={timeDuration}
              onChange={(e) => setTimeDuration(e.target.value)}
            >
              <option value="Short Term">Short Term</option>
              <option value="Mid Term">Mid Term</option>
              <option value="Long Term">Long Term</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Idea Status
            </label>
            <select 
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="In Progress">In Progress</option>
              <option value="Target Reached">Target Reached</option>
              <option value="Target failed">Target Failed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Description (about company)
          </label>
          <textarea 
            className='h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
            placeholder=""
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="overview"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Overview of the idea
          </label>
          <textarea 
            className='h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
            placeholder=""
            id="overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          >
          </textarea>
        </div>
        <button
          onClick={addDataToFirebase}
          className="text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-12 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
    </div>
    <ToastContainer 
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
  )
}
