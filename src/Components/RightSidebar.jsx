import React from 'react';
import { FaCheck } from 'react-icons/fa'

const RightSidebar = () => {
  return (
    <div className="flex flex-col w-1/4 h-screen p-4 bg-gray-50">
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-blue-500 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-blue-500'>Start</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-blue-500 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-blue-500'>Continue</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-blue-500 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-blue-500'>Analysis</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-gray-600 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-gray-600'>Additional Documents</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-gray-600 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-gray-600'>Releif</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-gray-600 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-gray-600'>Suggestions</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-gray-600 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-gray-600'>First Draft </p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-gray-600 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-gray-600'>Q & A</p></div>
      </div>
      <div className='flex items-center mb-3 '>
        <div className=' flex items-center  w-4 h-4 bg-gray-600 rounded-xl'><FaCheck size={12} className='text-white m-auto'/></div>
        <div><p className='ml-3 text-gray-600'>Final Draft</p></div>
      </div>
      
      <button className="mt-auto p-2 rounded-2xl bg-blue-600 text-white ">Continue</button>
    </div>
  );
};

export default RightSidebar;
