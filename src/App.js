import React from 'react'
import Bottom from './components/Bottom'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='w-full h-screen relative'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </div>
  )
}
