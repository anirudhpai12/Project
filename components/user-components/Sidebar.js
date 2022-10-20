import Link from 'next/link'
import { Sidebardata } from './recycle/Sidebardata'
import { IoMdLogOut } from 'react-icons/io'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../context/TraderxContext'

const Sidebar = () => {

  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    try{
      logout()
    } catch(err) {
      return toast.error('Failed to logout')
    }
  }
  return (
    <>
      <aside className="font-poppins radial ml-[-100%] fixed z-10 top-0 pb-3 w-full flex flex-col justify-between h-screen border-r border-slate-900 bg-night md:w-4/12 lg:ml-0 lg:w-[13%] ">
        <div>
          <div className="-mx-6 px-10 py-4 ">
            <a href="" className=''>
            <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M265.472 290.74L174.635 158.612C165.826 145.767 158.119 135.674 151.512 128.333C144.906 120.626 136.281 113.836 125.638 107.964C114.994 102.091 101.965 98.7881 86.5498 98.0541V87.0435H152.614C168.762 87.0435 182.342 92.3653 193.353 103.009C204.363 113.285 216.475 128.15 229.688 147.602L298.504 249.45L386.589 378.825C397.967 395.708 410.078 409.838 422.924 421.216C436.137 432.226 450.634 438.282 466.416 439.383V450.394H408.61C392.829 450.394 378.882 444.889 366.77 433.878C354.658 422.5 342.914 407.819 331.536 389.835L265.472 290.74Z" fill="#AED6FF" fillOpacity="0.4"/>
              <path d="M245.456 290.74L154.618 158.612C145.81 145.767 138.102 135.674 131.496 128.333C124.889 120.626 116.265 113.836 105.621 107.964C94.9773 102.091 81.9481 98.7881 66.5332 98.0541V87.0435H132.597C148.746 87.0435 162.326 92.3653 173.336 103.009C184.347 113.285 196.459 128.15 209.671 147.602L278.488 249.45L366.573 378.825C377.95 395.708 390.062 409.838 402.908 421.216C416.12 432.226 430.618 438.282 446.4 439.383V450.394H388.594C372.812 450.394 358.865 444.889 346.753 433.878C334.642 422.5 322.897 407.819 311.519 389.835L245.456 290.74Z" fill="#AED6FF"/>
              <path d="M222.933 290.74L132.095 158.612C123.287 145.767 115.579 135.674 108.973 128.333C102.367 120.626 93.7416 113.836 83.098 107.964C72.4544 102.091 59.4251 98.7881 44.0103 98.0541V87.0435H110.074C126.223 87.0435 139.803 92.3653 150.813 103.009C161.824 113.285 173.936 128.15 187.148 147.602L255.965 249.45L344.05 378.825C355.427 395.708 367.539 409.838 380.385 421.216C393.597 432.226 408.095 438.282 423.877 439.383V450.394H366.071C350.289 450.394 336.342 444.889 324.231 433.878C312.119 422.5 300.374 407.819 288.997 389.835L222.933 290.74Z" fill="url(#paint0_radial_39_8)"/>
              <path d="M341.797 122.077C326.782 290.99 135.938 427.445 34 457.401C307.433 426.283 368.194 183.777 384.338 122.077H341.797Z" fill="url(#paint1_radial_39_8)"/>
              <path d="M369.323 42C361.028 60.7681 338.506 107.944 305.512 130.836C315.522 134.959 325.531 134.959 341.797 125.831L380.584 129.584C380.584 129.584 393.096 134.959 412.653 134.959C390.594 113.319 374.328 75.7825 369.323 42Z" fill="url(#paint2_radial_39_8)"/>
              <defs>
              <radialGradient id="paint0_radial_39_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(274.232 319.768) rotate(-132.51) scale(285.154 298.116)">
              <stop offset="0.291667" stopColor="#2053A0"/>
              <stop offset="1" stopColor="#AED6FF"/>
              </radialGradient>
              <radialGradient id="paint1_radial_39_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(269.227 321.019) rotate(-68.4534) scale(313.434 284.068)">
              <stop offset="0.234375" stopColor="#2053A0"/>
              <stop offset="1" stopColor="#AED6FF"/>
              </radialGradient>
              <radialGradient id="paint2_radial_39_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(269.227 321.019) rotate(-68.4534) scale(313.434 284.068)">
              <stop offset="0.234375" stopColor="#2053A0"/>
              <stop offset="1" stopColor="#AED6FF"/>
              </radialGradient>
              </defs>
            </svg>
            </a>
          </div>
        </div>

        <div>
          <ul className="space-y-1 flex flex-col tracking-wide mb-16 pr-4">
            {
              Sidebardata.map((item, index) => (
                  <li key={index} className=''>
                    <Link href={item.path}>
                      <a className={router.pathname == item.path ? 'flex flex-row text-slate-200 items-center gap-3 text-base hover:bg-blue-900 p-3 pl-5 menu bg-blue-900' : 'flex flex-row text-slate-200 items-center gap-3 text-base hover:bg-blue-900 p-3 pl-5 menu '}>
                        {item.icon}
                        <h4>{item.title}</h4>
                      </a>
                    </Link>
                  </li>
            ))}
          </ul>
        </div>
        <div className=" pt-4 border-t border-slate-900 pr-4">
          <button 
          onClick={handleLogout}
          className=" text-slate-200 flex items-center gap-3 hover:bg-blue-900 rounded-md w-full text-base p-3 pl-5 menu">
            <IoMdLogOut fontSize={24}/>
            <span className="">Logout</span>
          </button>
        </div>
      </aside>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </>
  )
}

export default Sidebar