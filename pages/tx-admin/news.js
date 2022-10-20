import React, { useContext, useState } from 'react'
import SidebarTemp from '../../components/admin-components/SidebarTemp'
import { app, db } from "../../firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore"

export default function News() {

  const [title, setTitle] = useState()
  const [brief, setBrief] = useState()
  const [image, setImage] = useState()
  const [article, setArticle] = useState()

  const databaseRef = collection(db, 'news')

  const addDataToFirebase = () => {
    addDoc(databaseRef, {
        title: title,
        image: image,
        brief: brief,
        time: time,
        article: article
    })
    .then(() => {
        alert('News has been created')
        setImage('')
        setTitle('')
        setBrief('')
        setTime('')
        setArticle('')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const current = new Date()

  const time = `${current.toLocaleDateString()} ${current.toLocaleTimeString()}`

  return (
    <div className="flex-1">
      <SidebarTemp />
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col py-10 pl-32 pr-16 h-full">
        <h2 className='text-transparent text-4xl font-bold mb-3 col-span-3 bg-clip-text bg-gradient-to-r from-green-300  to-slate-900'>Create News</h2>
        <div className='mb-4 horizontal-line bg-gradient-to-r from-green-300 to-slate-900 col-span-3 h-[2px] w-1/2 rounded'></div>
        <div className="grid gap-6 mb-6 lg:grid-cols-3">
            <div className='flex flex-col text-white col-span-3'>
              <h2 className='text-2xl text-slate-100 font-bold mb-3'>News Article Information</h2>
              <div className='horizontal-line bg-gradient-to-r from-slate-600 to-slate-900 col-span-3 h-[1px] w-full rounded'></div>
            </div>
          
          <div className='col-span-3'>
            <label
              htmlFor="share_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className='col-span-3'>
            <label
              htmlFor="imagelink"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image Link
            </label>
            <input
              type="text"
              id="imagelink"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className='col-span-3'>
            <label
              htmlFor="brief"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Brief
            </label>
            <textarea
              type="text"
              id="brief"
              className="bg-gray-50 h-52 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
            />
          </div>

          <div className='col-span-3'>
            <label
              htmlFor="article"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Article
            </label>
            <textarea
              type="text"
              id="article"
              className="bg-gray-50 h-52 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </div>

          <button
          onClick={addDataToFirebase}
          className="text-white col-span-3 h-14 text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full w-full sm:w-auto px-12 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        </div>
    </div>
  </div>
  )
}
