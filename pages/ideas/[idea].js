import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import Sidebar from '../../components/user-components/Sidebar'
import { useAuth } from '../../context/TraderxContext'
import { MdStars } from 'react-icons/md'
import { AiOutlineRise } from 'react-icons/ai'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { BiRupee } from 'react-icons/bi'
import { Button } from '../../components/user-components/recycle/Button'
import { Navbar } from '../../components/user-components/Navbar'
import { InvestButton } from '../../components/user-components/recycle/InvestButton'
import HashLoader from "react-spinners/HashLoader"

const styles = {
  body: `flex flex-col overflow-hidden md:float-right md:w-[87%] bg-night py-16 md:py-16`,
  statistics: `px-5 grid grid-cols-3 gap-3 w-full h-fit mt-8`,
}

export default function Idea() {

  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const [ popupText, setPopupText ] = useState(false)

  const handleMouseOver = () => {
    setPopupText(!popupText)
  }

	const { fetchSingleIdea, singleIdea, currentUser } = useAuth()

  if(!currentUser) router.push('/signup')

	useMemo(() => {

    setLoading(true)
		fetchSingleIdea(router.query.idea)

    setTimeout(() => {
      setLoading(false)
    }, 4000)
    
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
	const [rating, setRating] = useState()
	const [buyPrice, setBuyPrice] = useState()
	const [targetPrice, setTargetPrice] = useState()
	const [gain, setGain] = useState()
	const [stopLoss, setStopLoss] = useState()
	const [timeDuration, setTimeDuration] = useState()
	const [description, setDescription] = useState()
	const [overview, setOverview] = useState()
	const [image, setImage] = useState()
	const [status, setStatus] = useState()
  const [sharesBought, setSharesBought] = useState(1)
  const [investors, setInvestors] = useState()

  useEffect(() => {
    setShareCode(singleIdea?.shareCode)
		setShareName(singleIdea?.shareName)
		setMarketPrice(singleIdea?.marketPrice)
		setMarketCap(singleIdea?.marketCap)
		setHigh(singleIdea?.high)
		setLow(singleIdea?.low)
		setEPS(singleIdea?.EPS)
		setEPSPerc(singleIdea?.EPSPerc)
		setROE(singleIdea?.ROE)
		setFunds(singleIdea?.funds)
		setRating(singleIdea?.rating)
		setBuyPrice(singleIdea?.buyPrice)
		setTargetPrice(singleIdea?.targetPrice)
		setGain(singleIdea?.gain)
		setStopLoss(singleIdea?.stopLoss)
		setTimeDuration(singleIdea?.timeDuration)
		setDescription(singleIdea?.description)
		setOverview(singleIdea?.overview)
		setImage(singleIdea?.image)
		setStatus(singleIdea?.status)
    setInvestors(singleIdea?.investors)
  }, [singleIdea])

  let nDays

  if(timeDuration?.toLowerCase() === 'short term'){
    nDays = '4 - 21'
  } else if(timeDuration?.toLowerCase() === 'mid term'){
    nDays = '21 - 60'
  } else {
    nDays = '60 - 100'
  }

  let investmentData = {
    shareCode: shareCode,
    buyPrice: parseInt(buyPrice),
    targetPrice: targetPrice, 
    sharesBought: parseInt(sharesBought),
    stopLoss: stopLoss
  }


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
            <div className={styles.body}>
              <div className={styles.statistics}>
                  <div className='reverse-navbar-radial col-span-2 w-full p-4 md:px-8 md:pt-8 md:pb-0 col-flex items-start rounded-md text-light-blue '>
                    <div className='w-full'>
                      <img src={image} alt="" className='object-cover w-full h-52 rounded-md'/>
                      <h2 className='text-3xl font-[500] bg-gradient-to-tr from-night-lite to-transparent p-3 -translate-y-14 rounded-md'>
                        {shareName} ({shareCode})
                        <span className={`text-base ml-6 px-2 rounded-full ${status?.toLowerCase()==='in progress' ? `bg-blue-700` : (status?.toLowerCase()==='target reached' ? `bg-green-700` : (status?.toLowerCase()==='target failed' ? `bg-red-700` : `bg-yellow-500`))}`}>{status}</span>
                      </h2>  
                      <p className='text-sm md:text-base text-light-blue -translate-y-10 px-4'>{description}</p>
                    </div>
                  </div>

                  <div className='navbar-radial col-span-1 w-full p-4 md:p-8 col-flex  rounded-md text-light-blue '>
                    <div className='grid grid-cols-2 gap-3 items-start justify-around p-3 rounded-md w-full'>
                      <div className=''>
                          <p className='text-gray-400 text-sm md:text-base mb-1 '>Rating</p>
                          <h2 className='text-2xl md:text-4xl flex flex-row items-end'>{rating}<span className='text-xl'>/5</span></h2>
                      </div>
                      <div className=''>
                          <p className='text-gray-400 text-sm md:text-base mb-1 '>Status</p>
                          <div className={`text-lg md:text-lg flex flex-row items-center justify-center px-2 py-1 rounded-full ${status?.toLowerCase()==='in progress' ? `bg-blue-700` : (status?.toLowerCase()==='target reached' ? `bg-green-700` : (status?.toLowerCase()==='target failed' ? `bg-red-700` : `bg-yellow-500`))}`}>{status}</div>
                      </div>
                      <div className=''>
                          <p className='text-gray-400 text-sm md:text-base mb-1 '>Current Price</p>
                          <h2 className='text-2xl md:text-4xl flex flex-row items-center'><BiRupee />{marketPrice}</h2>
                      </div>
                      <div className=''>
                          <p className='text-gray-400 text-sm md:text-base mb-1 '>Buy Price</p>
                          <h2 className='text-2xl md:text-4xl flex flex-row items-center'><BiRupee />{buyPrice}</h2>
                      </div>
                      <div className=''>
                        <p className='text-gray-400 text-sm md:text-base mb-1 '>Target Price</p>
                        <h2 className='text-2xl md:text-4xl flex flex-row items-center'><BiRupee />{targetPrice}</h2>
                      </div>
                      <div className='bg-green-800 p-2 rounded-md'>
                          <p className=' text-sm md:text-base mb-1'>Total Profit</p>
                          <h2 className='text-2xl md:text-4xl flex flex-row items-center'><BiRupee />{gain}<span className='text-lg'>/share</span></h2>
                      </div>
                    </div>
                  </div>
              </div>

              <div className='mx-auto flex flex-row float-right h-fit w-[87%]  md:p-6 bg-night border-b border-slate-700'>
                <div className= 'w-full px-2 py-4 md:px-8 md:py-6 row-flex items-start justify-center rounded-md  text-light-blue border border-light-blue'>
                    <div className='absolute flex flex-row items-center -translate-y-7 md:-translate-y-9 bg-night px-3'>
                      Short term gain &nbsp; <MdStars fontSize={23}/>
                    </div>
                    <div className='md:pl-6 md:w-full flex '>
                      <h2 className='text-sm md:text-lg row-flex md:w-full justify-center'>
                        <span className='text-base font-bold md:text-3xl text-green-500 flex items-end justify-center'>
                        <AiOutlineRise className='font-bold'/> &nbsp; {Math.ceil((gain * 100) / buyPrice)}% Profit
                        </span>
                        &nbsp; in {nDays} Days (Estimated)
                      </h2>
                    </div>
                </div>
              </div>

              <div className='grid grid-cols-3 h-full md:float-right mx-auto md:p-6 bg-night text-light-blue'>
                <div className='col-span-2 px-10 text-justify'>
                  <h2 className='text-2xl font-[600] mb-2'>Overview</h2>
                  <p className=''>
                    {overview}
                  </p>
                </div>
                <div className='flex flex-col gap-3 p-5 border-l-2 border-slate-800 sticky'>
                  <div>
                    <h2 className='font-medium row-flex' onClick={handleMouseOver} >Invest in the idea &nbsp; <IoIosHelpCircleOutline className='cursor-pointer' /></h2>
                    { popupText && <div className='absolute w-36 right-10 bg-night-lite text-left text-xs p-2'>You can allocate the recommended portion of your invetment capital into this idea.</div> }
                  </div>
                  <div className='flex flex-row border-t-2 border-slate-800 pt-3 gap-2 justify-between items-center'>
                    <h3>Total Shares</h3>
                    <input 
                      type="number"
                      id="total-shares"
                      value={sharesBought}
                      onChange={(e) => setSharesBought(e.target.value)}
                      className='bg-night-lite rounded-md text-lg w-32 p-2 text-center'
                    />
                  </div>
                  <div className='flex flex-row border-t-2 border-slate-800 pt-2 gap-2 justify-between items-center'>
                    <h3>Total Amount</h3>
                    <div className='bg-clip-text flex items-center text-3xl '>
                      <BiRupee /><h2 className='text-3xl font-bold'>{sharesBought * buyPrice}</h2>
                    </div>
                  </div>
                  <InvestButton title="Invest Now" idea={singleIdea} investment={ investmentData }/>
                  <Button title="Add to Wishlist" idea={singleIdea}/>
                </div>
              </div>

              <div className='p-10 text-light-blue border-t border-slate-800 mx-10'>
                <h2 className='text-2xl font-[600] mb-4 pl-5'>Fundamental Information</h2>
                <div className='grid grid-cols-6 p-5 text-center'>
                  <div className='border-b border-r p-4'>EPS</div>
                  <div className='border-b border-r p-4'>EPS Percentage</div>
                  <div className='border-b border-r p-4'>FII & DII</div>
                  <div className='border-b border-r p-4'>Return on Equity</div>
                  <div className='border-b border-r p-4'>52 Week High</div>
                  <div className='border-b p-4'>52 Week Low</div>
                  <div className='border-r p-4'>{EPS}</div>
                  <div className='border-r p-4'>{EPSPerc}</div>
                  <div className='border-r p-4'>{funds}</div>
                  <div className='border-r p-4'>{ROE}</div>
                  <div className='border-r p-4'>{high}</div>
                  <div className='p-4'>{low}</div>
                </div>
              </div>
            </div>
          </div>
        )
      }  
    </div>
  )
}
