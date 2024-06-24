import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  let navigate = useNavigate()
  const handleBack = () =>{
    navigate('/question')
  }
  return (
    <div className="flex flex-col w-[15%] h-screen p-4 bg-gray-50">
       <div className='flex items-center justify-between '>
        <button onClick={handleBack} className='flex items-center justify-center bg-gray-200 rounded-xl w-7 h-7'>
          <FaAngleLeft />
        </button>
        <button className='bg-blue-500 h-7 w-32 text-white rounded-md'>Back to home</button>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Given information</h2>
        <hr />
        <div className="mt-4">
          <p className="font-bold">Your search</p>
          <p className="text-gray-500">Habeas Corpus</p>
        </div>
        <div className="mt-4">
          <p className="font-bold">Recents</p>
          <div className="mt-2 space-y-2 overflow-hidden">
            <div className="flex items-center justify-between p-2 bg-white border rounded shadow">
              <span>The Cyberbullying Consp...</span>
              <span className="text-green-600">Completed</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white border rounded shadow">
              <span>The Data Breach Dilemma</span>
              <span className="text-yellow-600">In progress</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white border rounded shadow">
              <span>The Green Tech Scandal</span>
              <span className="text-red-600">Failed</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white border rounded shadow">
              <span>The Cyberbullying Consp...</span>
              <span className="text-green-600">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
