import React, { useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SidebarQuestion = () => {
  const [fileData, setFileData] = useState([]);
    let navigate = useNavigate()

const handleReturn = ()=>{
    navigate('/')
}
  useEffect(() => {
    const storedFiles = [];
    for (let i = 0; i < localStorage.length; i++) {
      const fileName = localStorage.key(i);
      storedFiles.push(fileName);
    }
    setFileData(storedFiles);
  }, []);

  return (
    <div className="flex w-[20%] gap-5 h-[30rem] flex-col p-4 mt-2 bg-white shadow rounded mb-4 overflow-hidden">
      <div className='flex items-center justify-between '>
        <button onClick={handleReturn} className='flex items-center justify-center bg-gray-200 rounded-xl w-7 h-7'>
          <FaAngleLeft />
        </button>
        <button className='bg-blue-500 h-7 w-32 text-white rounded-md'>Back to home</button>
      </div>
      <div>
        <h2 className='font-bold'>Given Information</h2>
        <hr />
      </div>
      <div>
        <h2 className='font-bold'>Text Entered</h2>
        <p className='text-sm text-gray-400'>
          I'm searching for environment regulations. Can you summarize the Clean Air Act and its objective with details?
        </p>
      </div>
      <hr />
      <div>
        <h2>Uploads</h2>
        <div className='bg-blue-500 p-2 rounded '>
          {fileData.length > 0 ? (
            fileData.map((fileName, index) => (
              <div key={index} className='text-white text-sm'>
                {fileName} <hr />
              </div>
            ))
          ) : (
            <div className='text-white text-sm'>No files uploaded</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarQuestion;
