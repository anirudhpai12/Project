import React from 'react'
import Link from 'next/dist/client/link'
import { useAuth } from '../../../context/TraderxContext'

export const WishlistCard = ({idea}) => {

	const { removeFromWishList } = useAuth()

	const handleRemoveWishlist = () => {
		removeFromWishList(idea?.id)
	}

  	return (
		<div className='glassmorphism w-full h-24 flex flex-row mt-5'>
			<div class="w-1/6 p-2 flex items-center">
				<img src={idea?.data?.image} alt="" width={100} className='rounded'/>
			</div>
			<Link href={`ideas/${idea?.id}`} className=''>
				<div class="w-1/3 flex items-center cursor-pointer text-2xl font-medium text-light-blue">{idea?.data?.shareName}</div>
			</Link>
			
			<div class="w-2/5 flex items-center">
				<div className='col-flex text-light-blue border-r border-slate-700 p-3'>
					<div className='text-md text-gray-300'>Buy Price</div>
					<div className='text-xl'>{idea?.data?.buyPrice}</div>
				</div>
				<div className='col-flex text-light-blue border-r border-slate-700 p-3'>
					<div className='text-md text-gray-300'>Target Price</div>
					<div className='text-xl'>{idea?.data?.targetPrice}</div>
				</div>
				<div className='col-flex text-light-blue'>
					<span className={`text-base ml-6 px-2 rounded-full ${idea?.data?.status?.toLowerCase()==='in progress' ? `bg-blue-700` : (idea?.data?.status?.toLowerCase()==='target reached' ? `bg-green-700` : (idea?.data?.status?.toLowerCase()==='target failed' ? `bg-red-700` : `bg-yellow-500`))}`}>{idea?.data?.status}</span>
				</div>
			</div>

			<div className='w-1/5 flex items-center'>
				<button className='p-3 bg-red-500 rounded-lg text-white'
				onClick={handleRemoveWishlist}>
					Remove
				</button>
			</div>
		</div>
  	)
}
