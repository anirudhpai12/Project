import React from 'react'

export default function Table() {
  return (
    <>
       <div className="container mx-auto px-4 sm:px-8">
            <div className="">
                <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                <div className='w-1/5'>
                    <h2 className='text-transparent text-4xl font-[600] mb-3 bg-clip-text bg-green-300'>Users</h2>
                    <div className='mb-4 horizontal-line bg-gradient-to-r from-green-300 to-slate-900 col-span-3 w-2/3 h-[2px] rounded'></div>
                </div>
                <div className="text-end">
                    <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className=" relative ">
                        <input
                        type="text"
                        id='"form-subscribe-Filter'
                        className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-slate-600"
                        placeholder="Name"
                        />
                    </div>
                    <button
                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-green-100 bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        type="submit"
                    >
                        Filter
                    </button>
                    </form>
                </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
                    <table className="min-w-full leading-normal ">
                    <thead>
                        <tr>
                        <th
                            scope="col"
                            className="px-5 py-3 bg-slate-600  border-b border-gray-500 text-slate-200  text-left text-sm uppercase font-normal"
                        >
                            User
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 bg-slate-600  border-b border-gray-500 text-slate-200  text-left text-sm uppercase font-normal"
                        >
                            Role
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 bg-slate-600  border-b border-gray-500 text-slate-200  text-left text-sm uppercase font-normal"
                        >
                            Created at
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 bg-slate-600  border-b border-gray-500 text-slate-200  text-left text-sm uppercase font-normal"
                        >
                            status
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 bg-slate-600  border-b border-gray-500 text-slate-200  text-left text-sm uppercase font-normal"
                        ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="block relative">
                                <img
                                    alt="profil"
                                    src="/images/person/8.jpg"
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-slate-100 whitespace-no-wrap">
                                Jean marc
                                </p>
                            </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-100 whitespace-no-wrap">Admin</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-100 whitespace-no-wrap">12/09/2020</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <a href="#" className="text-green-500 hover:text-green-600">
                            Edit
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="block relative">
                                <img
                                    alt="profil"
                                    src="/images/person/9.jpg"
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-slate-200 whitespace-no-wrap">
                                Marcus coco
                                </p>
                            </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-200 whitespace-no-wrap">Designer</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-200 whitespace-no-wrap">01/10/2012</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <a href="#" className="text-green-500 hover:text-green-600">
                            Edit
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="block relative">
                                <img
                                    alt="profil"
                                    src="/images/person/10.jpg"
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-slate-200 whitespace-no-wrap">
                                Ecric marc
                                </p>
                            </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-200 whitespace-no-wrap">Developer</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-200 whitespace-no-wrap">02/10/2018</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <a href="#" className="text-green-500 hover:text-green-600">
                            Edit
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="block relative">
                                <img
                                    alt="profil"
                                    src="/images/person/6.jpg"
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-slate-200 whitespace-no-wrap">
                                Julien Huger
                                </p>
                            </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-200 whitespace-no-wrap">User</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <p className="text-slate-200 whitespace-no-wrap">23/09/2010</p>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 bg-slate-800  border-b border-gray-500 text-slate-200 text-sm">
                            <a href="#" className="text-green-500 hover:text-green-600">
                            Edit
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    
                </div>
                </div>
            </div>
            </div>

    </>
  )
}
