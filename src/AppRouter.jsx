import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CategoryPage, HomePage, Home } from './page'
import { Navbar } from './components'
import { CategoryList } from './components/CategoryList'
import Footer from './components/Footer'
import { MaterialEstudioList } from './components/materialEstudio/MaterialEstudioList'
import { BarraRedesSociales } from './components/barraredessociales/BarraRedesSociales'
import { WhatsAppButton } from './components/whatsappboton/WhatsAppButton'
import { ContactForm } from './components/contactform/ContactForm'
import { AboutSection } from './components/aboutThisSite/AboutSection'




export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <BarraRedesSociales />
      <WhatsAppButton />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/homePage' element={<HomePage />}></Route>
        <Route path='/category/:category' element={<CategoryPage />}></Route>
        <Route path='/category/list' element={<CategoryList />}></Route>
        <Route path='/materialEstudio' element={<MaterialEstudioList />}></Route>
        <Route path='/formulario-contacto' element={<ContactForm />}></Route>
        <Route path='/about-this-site' element={<AboutSection />}></Route>       
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </>
  )
}
