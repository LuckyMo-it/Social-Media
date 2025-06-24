
import { useState } from 'react'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostList } from './components/PostList'
function App() {
  const [selectedHeader,setSelectedHeader]=useState('Home')
  const posts=[]
  return (
    <BrowserRouter>

    <div className='bg-gray-200  min-w-screen '>
      <Routes>
        
      </Routes>
      <Header selectedHeader={selectedHeader} setSelectedHeader={setSelectedHeader}/>
      <PostList posts={posts}/>
    </div>
    </BrowserRouter>
  )
}

export default App
