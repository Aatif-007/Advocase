import React from 'react'
import ContentQuestion from '../Components/ContentQuestion'
import SidebarQuestion from '../Components/SidebarQuestion'

const QuestionStuff = () => {
  return (
    <div className='flex items-center justify-center'>
        <SidebarQuestion />
        <ContentQuestion />
    </div>
  )
}

export default QuestionStuff