import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CategoryPage, HomePage, Home } from './page'
import { Navbar } from './components'
import { CategoryList } from './components/CategoryList'
import Footer from './components/Footer'
import { MaterialEstudioList } from './components/materialEstudio/MaterialEstudioList'



export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/homePage' element={<HomePage />}></Route>
        <Route path='/category/:category' element={<CategoryPage />}></Route>
        <Route path='/category/list' element={<CategoryList />}></Route>
        <Route path='/materialEstudio' element={<MaterialEstudioList />}></Route>
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </>
  )
}
