import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function FileUpload({ onFileUpload, files, onFileRemove }) {
  const [fileInput, setFileInput] = useState(null);

  let navigate = useNavigate()

  function handleStart(){
    navigate('question')
  }

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    newFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        localStorage.setItem(file.name, base64String);
      };
      reader.readAsDataURL(file);
    });
    onFileUpload(newFiles);
  };

  const handleFileRemove = (fileIndex) => {
    const file = files[fileIndex];
    localStorage.removeItem(file.name);
    onFileRemove(fileIndex);
  };

  return (
    <div className="p-4 w-[60%] h-[30rem] bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Get Complete info about any case from AI-driven research assistance</h2>
      <input
        type="text"
        placeholder="Ex: Land dispute, Mumbai, recent judgments."
        className="w-full p-2 border rounded mb-4"
      />
      <div className="border-dashed h-32 border-2 p-4 rounded flex flex-col items-center mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          ref={setFileInput}
          multiple
        />
        <button onClick={() => fileInput.click()} className="bg-blue-500 text-white my-auto px-4 py-2 rounded">Upload a file</button>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Uploaded files {files.length}/ 5</h3>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b">
              <span>{file.name}</span>
              <button onClick={() => handleFileRemove(index)} className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-end'>
        <button onClick={handleStart} className='w-[6rem] h-[2rem] bg-blue-500 text-white mt-6'>Start</button>
      </div>
    </div>
  );
}

export default FileUpload;

