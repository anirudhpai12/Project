import React from 'react'
import Link from 'next/link'

export const Newscard = ({news}) => {

    return (
        <div>
            <div className="overflow-hidden shadow-lg rounded-lg min-h-min w-60 md:w-80 cursor-pointer glassmorphism">
                <Link href={`/news/${news?.id}`}>
                    <a className="w-full block h-full">
                        <img
                            alt="blog photo"
                            src={news?.data?.image}
                            className="object-cover min-w-full h-48"
                        />
                        <div className="bg-slate-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium"></p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                {news?.data?.title}
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}
