import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CategoryPage, HomePage } from './page'
import { Navbar } from './components'
import { CategoryList } from './components/CategoryList'
import Footer from './components/Footer'


export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/category/:category' element={<CategoryPage />}></Route>
        <Route path='/category/list' element={<CategoryList />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
