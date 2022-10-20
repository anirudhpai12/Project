import React from 'react'
import Table from '../../components/admin-components/Report/Table'
import SidebarTemp from '../../components/admin-components/SidebarTemp'

export default function Users() {
  return (
    <div className="flex-1">
      <SidebarTemp />
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 flex flex-col py-10 pl-32 pr-16 h-screen">
        <div className="bg-gradient-to-br from-slate-900 to-gray-900 py-10 h-full">
          <Table />
        </div>
      </div>
    </div>
  )
}
