import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import MainLayout from './components/MainLayout/MainLayout'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
