import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './pages/PostList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostDetail from './components/PostDetail'
import Header from './components/header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/post/:id' element={<PostDetail/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
