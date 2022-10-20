import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-10 ">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                <div>
                    <a
                    href="#"
                    className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                    >
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
                <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">
                    Join 31,000+ other and never miss out on new tips, tutorials, and
                    more.
                </p>
                <div className="flex mt-4 -mx-2">
                    <a
                    href="#"
                    className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Linkden"
                    >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                    </svg>
                    </a>
                    <a
                    href="#"
                    className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Facebook"
                    >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                    </svg>
                    </a>
                    <a
                    href="#"
                    className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    aria-label="Twitter"
                    >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Company
                    </a>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    community
                    </a>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Careers
                    </a>
                </div>
                <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Tec
                    </a>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Music
                    </a>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Videos
                    </a>
                </div>
                <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                    Products
                    </h3>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Mega cloud
                    </a>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Aperion UI
                    </a>
                    <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                    Meraki UI
                    </a>
                </div>
                <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +1 526 654 8965
                    </span>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    example@email.com
                    </span>
                </div>
                </div>
            </div>
            </div>
            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
            <div>
            <p className="text-center text-gray-800 dark:text-white">
                © Brand 2020 - All rights reserved
            </p>
            </div>
        </div>
        </footer>

  )
}
