import React, { useState } from 'react';
import FileUpload from './Components/FileUpload';
import RecentStudies from './Components/RecentStudies';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './Components/Header';
import Questions from './Pages/QuestionStuff';
import Case from './Pages/Case';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (newFiles) => {
    setFiles([...files, ...newFiles]);
  };

  const handleFileRemove = (fileIndex) => {
    const newFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(newFiles);
  };

  return (

    <div className='font-inter'>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <div className='flex items-center justify-center gap-5'><RecentStudies/> <FileUpload onFileUpload={handleFileUpload} files={files} onFileRemove={handleFileRemove} /> </div> } />
        <Route path='/question' element={ <Questions /> } />
        <Route path='/case' element={ <Case /> } />

      </Routes>
    </Router>
    </div>
  )}

export default App;

{/* <main className="flex gap-4 mt-4 ">
        <RecentStudies />
        <FileUpload onFileUpload={handleFileUpload} files={files} onFileRemove={handleFileRemove} />
    </main> */}
// 

