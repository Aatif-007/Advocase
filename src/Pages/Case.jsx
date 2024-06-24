import React from 'react'
import Caseflow from '../Components/Caseflow'
import RightSidebar from '../Components/RightSidebar'
import Sidebar from '../Components/Sidebar'
const Case = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
        <Sidebar />
        <Caseflow/>
        <RightSidebar/>
    </div>
  )
}

export default Case