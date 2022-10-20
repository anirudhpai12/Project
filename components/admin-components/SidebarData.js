import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as GoIcons from 'react-icons/go'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/tx-admin',
        icon: <GoIcons.GoDashboard fontSize={24}/>
    },
    {
        title: 'News',
        path: '/tx-admin/news',
        icon: <BiIcons.BiNews fontSize={26}/>
    },
    {
        title: 'Create',
        path: '/tx-admin/create',
        icon: <BsIcons.BsPencilSquare fontSize={24}/>
    },
    {
        title: 'Users',
        path: '/tx-admin/users',
        icon: <FaIcons.FaUserAstronaut fontSize={24}/>
    },
    {
        title: 'Ideas',
        path: '/tx-admin/ideas',
        icon: <BsIcons.BsEnvelopeOpen fontSize={24}/>
    },
    {
        title: 'Reports',
        path: '/tx-admin/reports',
        icon: <HiIcons.HiOutlineDocumentReport fontSize={27}/>
    },
    {
        title: 'Settings',
        path: '/tx-admin/settings',
        icon: <FiIcons.FiSettings fontSize={24}/>
    },
]
