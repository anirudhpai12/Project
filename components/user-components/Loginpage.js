import React, { useState }  from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../context/TraderxContext'
import { useRouter } from 'next/dist/client/router'
import Sidebar from './Sidebar'

export const Loginpage = () => {

  const { login } = useAuth()
  const router = useRouter()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const data = { email, password }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(data)

    login(data)
  }

  return (
      <div className="min-h-screen navbar-radial flex items-center py-6 sm:py-8 lg:py-12">
        <Sidebar />
          <div className="w-[30%] p-4 rounded-md md:p-8 mx-auto glassmorphism">
            <h2 className="text-center text-gray-100 border-b border-slate-700 pb-4 text-3xl mb-6">Login</h2>
            <form onSubmit={handleLogin}>
              <div className='flex flex-col gap-5'>
                <div className=' flex flex-col'>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    required
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="phone"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
            
                <div className='flex flex-col'>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    required
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  className="w-full col-span-2 m-1 text-center py-4 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-500/90 focus:outline-none focus:bg-blue-500/90">
                  Login
                </button>

                <Link href="/signup">
                  <a
                    className="text-xs text-center mt-2 text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    Don't have an account? <span className="text-blue-700">Register Now</span>.
                  </a>
                </Link>
              </div>
            </form>
          </div>
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
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
