import React, { useState, useRef } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useAuth } from '../../context/TraderxContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from './Sidebar'

export const Signup = () => {

  const { signup } = useAuth()

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ number, setNumber ] = useState(null)
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  // const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  const data = {email, password, firstName, lastName, number}

  function handleSignup(e) {
    e.preventDefault()
    console.log(data)

    if(password !== confirmPassword){
      return toast.error('Passwords do not match. Make sure you have put the same password in both fields.')
    }

    if((firstName || lastName || email || password || number || confirmPassword) == ''){
      return toast.error('No fields can be empty')
    }

    try{
      signup(data)
      .then(() => {
        toast.success('Successfully created an account')
        router.push('/')
      })
    } catch(err) {
      return toast.error('Failed to create an account')
    }
  }

  return (
    <div className="w-full min-h-screen bg-transparent navbar-radial py-6 sm:py-8 lg:py-12">
      <Sidebar />
        <div className="w-fit p-4 rounded-md translate-y-10 md:p-8 mx-auto glassmorphism">
          <h2 className="text-center text-gray-100 border-b border-slate-700 pb-4 text-3xl mb-6">Signup</h2>
          
          <form onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div className='flex flex-col w-72'>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  required
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="first_name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  required
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="last_name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              
              <div className='flex flex-col'>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  required
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  required
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="phone"
                  type="text"
                  pattern="[0-9]{10}"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
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

              <div className='flex flex-col'>
                <label
                  htmlFor="confirm"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm Password
                </label>
                <input
                  required
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="confirm"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className="w-full col-span-2 m-1 text-center py-4 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-500/90 focus:outline-none focus:bg-blue-500/90">
                SignUp
              </button>

              <Link href='/login'>
                <a className="col-span-2 text-sm text-center mt-4 text-gray-500 uppercase dark:text-gray-400 hover:underline">
                  Already have an account? Try to <span className="text-blue-700">Log In</span>.
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
