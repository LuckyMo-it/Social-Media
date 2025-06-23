
import { useState } from 'react'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [selectedHeader,setSelectedHeader]=useState('Home')

  return (
    <BrowserRouter>

    <div className='bg-gray-200  min-w-screen '>
      <Routes>
        
      </Routes>
      <Header selectedHeader={selectedHeader} setSelectedHeader={setSelectedHeader}/>
    </div>
    </BrowserRouter>
  )
}

export default App
