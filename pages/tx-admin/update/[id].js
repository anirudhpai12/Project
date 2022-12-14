import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useAuth } from '../../../context/TraderxContext'
import { BiArrowBack } from 'react-icons/bi'
import { 
	collection,
    updateDoc,
    doc,
	deleteDoc
} from "firebase/firestore"
import { db } from "../../../firebase"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Id() {
  	const router = useRouter()

	const { fetchSingleIdea, singleIdea } = useAuth()

	useMemo(() => {
		fetchSingleIdea(router.query.id)
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
	const [minInvestment, setMinInvestment] = useState()

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
		setMinInvestment(singleIdea?.minInvestment)
	}, [singleIdea])

	const data = [
		shareCode,shareName,marketPrice,marketCap,high,low,
		EPS,EPSPerc,ROE,funds,rating,buyPrice,targetPrice,gain,stopLoss,
		minInvestment,timeDuration,description,overview,image,status
	]

	const addDataToFirebase = (e) => {
		e.preventDefault()
		
		const databaseRef = doc(db, 'ideas', router.query.id)
		updateDoc(databaseRef, {
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
			minInvestment: Number(minInvestment),
			timeDuration: timeDuration,
			description: description,
			overview: overview,
			image: image,
			status: status,
		}, [shareCode])
		.then(() => {
			alert('Data updated')
		})
	}

	const handleDeleteDocument = async(e) => {
		e.preventDefault()
		
		const docRef = doc(db, 'ideas', router.query.id)
		try{
			await deleteDoc(docRef)
			.then(() => {
				toast.success('Successfully deleted this idea')
				router.push('/tx-admin/ideas')
			})
		}
		catch(error) {
			toast.error('Cannot delete this idea')
			console.log(error)
		}
	}

  	return (
		<div className="flex-1">
		<div className='w-[10%] h-full col-flex fixed bg-slate-700 p-4 pt-10'>
			<button 
			onClick={() => router.push('/tx-admin/ideas')}
			className='text-light-blue p-2 rounded-lg hover:bg-slate-600'>
				<BiArrowBack fontSize={28}/>
			</button>
		</div>
		
		<div className="w-[90%] float-right bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col py-10 pl-10 pr-24 h-full">
			<h2 className='text-transparent text-4xl font-bold mb-3 col-span-3 bg-clip-text bg-gradient-to-r from-green-300  to-slate-900'>Edit Idea</h2>
			<div className='mb-4 horizontal-line bg-gradient-to-r from-green-300 to-slate-900 col-span-3 h-[2px] w-1/2 rounded'></div>
			<div className="">
				<div className='flex flex-col text-white col-span-3'>
					<h2 className='text-2xl text-slate-100 font-bold mb-3'>Fundamental Information</h2>
					<p className='text-slate-300 mb-5'>Details about the fundamentals of the share.</p>
				</div>
			<div className='horizontal-line bg-gradient-to-r from-slate-600 to-slate-900 col-span-3 h-[1px] w-full rounded'></div>
			<form 
				className='grid gap-6 mb-6 lg:grid-cols-3 mt-6'
				onSubmit={addDataToFirebase}>
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
					htmlFor="minimum_investment"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
					Recommended no. of shares to buy
					</label>
					<input
					type="text"
					id="minimum_investment"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder=""
					required=""
					value={minInvestment}
					onChange={(e) => setMinInvestment(e.target.value)}
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

				
				<div className="mb-6 col-span-3">
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
				<div className="mb-6 col-span-3">
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
					type='submit'
					className="col-span-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-12 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
				<a
					className="col-span-3 text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-12 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800"
					onClick={handleDeleteDocument}
				>
					Delete
				</a>
			</form>
			</div>
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
