import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

const App = () => {

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, [location])
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/comming-soon' element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App