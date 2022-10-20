import React from 'react'
import { useAuth } from '../../../context/TraderxContext'
import { useRouter } from 'next/router'
import Sidebar from '../Sidebar'
import { useMemo } from 'react'
import { Navbar } from '../Navbar'
import { Newscard } from './Newscard'

export const NewsPage = () => {

	const router = useRouter()

	const { News, singleNews, getSingleNews } = useAuth()
	
	console.log(News)

	useMemo(() => {
		getSingleNews(router.query.newsid)
	}, [router])

  	return (
	<div className=''>
		<Sidebar />
		<Navbar />
		<div className='navbar-radial min-h-screen lg:w-[87%] float-right p-20 grid grid-cols-4'>
			<div className='flex flex-col col-span-3'>
				<div>
					<h2 className='text-light-blue text-2xl text-center'>{singleNews?.title}</h2>
					<div className='flex justify-center '>
						<p className='text-slate-300 text-justify mt-4 italic lg:w-[80%] px-10'>{singleNews?.brief}</p>
					</div>
				</div>
				<div className='flex justify-center mt-6 '>
					<img src={singleNews?.image} alt="" className='rounded-lg lg:w-[75%]'/>
				</div>
				<div>
					<p className='text-slate-300 text-center mt-4'>Posted on: {singleNews?.time}</p>
				</div>
				<div>
					<h2 className='text-light-blue text-2xl text-center underline mt-10'>Article</h2>
					<div className='flex justify-center'>
						<p className='text-slate-300 text-justify mt-4 lg:w-[80%]'>{singleNews?.article}</p>
					</div>
				</div>
			</div>

			<aside className='col-span-1 flex flex-col gap-5'>
				{News?.map(news => (
					<Newscard className="text-white" news={news} key={news.id}/>
				))}
			</aside>
		</div>
	</div>
  )
}
