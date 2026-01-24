import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import MenuIcon from './assets/menuIcon'
import Works from './pages/works/works'
import Contact from './pages/contact'
import Blog from './pages/blog/blog'
import NavBar from './components/navBar/navBar'
import Home from './pages/home/home'
import WorkDetail from './pages/workDetail/workDetail'
import Resume from './pages/resume/resume'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element={<Works />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/workDetail' element={<WorkDetail />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
    </>
  )
}

export default App
