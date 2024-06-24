import React from 'react'
import { FiSettings } from 'react-icons/fi';
import { RiNotification3Line , RiTeamLine} from 'react-icons/ri'
import { FaUserCircle,FaHome,FaNetworkWired,FaCommentAlt } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md' ;

const Header = () => {
  return (
    <div className='my-1'>
      <header className="flex items-center justify-between bg-white shadow">
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 w-full'>
            <div className='flex items-center justify-between'>
                <div className='text-3xl text-gray-800'>Advocase</div>
                
                <div className='block sm:hidden'>
                    <button className='text-gray-800'>
                        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
                
                <div className='hidden sm:flex items-center space-x-6 text-gray-800 flex-grow'>
                    <div className='flex items-center'> <MdRssFeed className='mx-2'/> News Feeds</div>
                    <div className='flex items-center'><RiTeamLine className='mx-2'/> Find Lawyer</div>
                    <div className='flex items-center bg-blue-600 rounded-xl h-[2rem] px-3 text-white'> <FaHome className='mx-2'/> Home</div>
                    <div className='flex items-center'> <FaNetworkWired className='mx-2'/> Connections</div>
                    <div className='flex items-center'> <FaCommentAlt className='mx-2'/> Chats</div>
                </div>

               
                <div className='hidden sm:hidden'>
                    
                    <div className='mt-2 py-2 px-3 bg-white shadow-lg rounded-lg'>
                        <div className='flex items-center space-x-2'>
                            <MdRssFeed className='text-gray-600 w-6 h-6'/>
                            <span className='text-gray-900'>News Feeds</span>
                        </div>
                        <div className='flex items-center space-x-2 mt-2'>
                            <RiTeamLine className='text-gray-600 w-6 h-6'/>
                            <span className='text-gray-900'>Find Lawyer</span>
                        </div>
                        <div className='flex items-center space-x-2 mt-2'>
                            <FaHome className='text-gray-600 w-6 h-6'/>
                            <span className='text-gray-900'>Home</span>
                        </div>
                        <div className='flex items-center space-x-2 mt-2'>
                            <FaNetworkWired className='text-gray-600 w-6 h-6'/>
                            <span className='text-gray-900'>Connections</span>
                        </div>
                        <div className='flex items-center space-x-2 mt-2'>
                            <FaCommentAlt className='text-gray-600 w-6 h-6'/>
                            <span className='text-gray-900'>Chats</span>
                        </div>
                    </div>
                </div>
              
                <div className='flex items-center space-x-4 text-gray-800'>
                    <span><FiSettings className='w-6 h-6'/></span>
                    <span><RiNotification3Line className='w-6 h-6'/></span>
                    <span><FaUserCircle className='w-6 h-6'/></span>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header