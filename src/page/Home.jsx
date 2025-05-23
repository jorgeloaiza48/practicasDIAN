import React from 'react'
//import './style.css'
import { Link } from 'react-router-dom'

import { SeccionComentarios } from '../components/seccionComentarios/SeccionComentarios'
import { Carrusel } from '../components/carrusel/Carrusel'
import { PostsList } from '../components/posts/PostsList'
import { BookOpen, ListChecks, GraduationCap, User, Info, Mail } from 'lucide-react';
import { ProcesoSeleccionDIAN } from '../components/panelderecha/ProcesoSeleccionDIAN'
import { OtrosProcesosSeleccion } from '../components/panelderecha/OtrosProcesosSeleccion'
import { EnlacesInteres } from '../components/panelderecha/EnlacesInteres'
import {DIAN} from '../components/panelderecha/DIAN'
import { Contraloria } from '../components/panelderecha/Contraloria'
import { Fiscalia } from '../components/panelderecha/Fiscalia'
import { Procuraduria } from '../components/panelderecha/Procuraduria'
import {CNSC} from '../components/panelderecha/CNSC'
import {EnlacesSIMO} from '../components/panelderecha/EnlacesSIMO'



export const Home = () => {
    return (

        <div className="flex justify-center items-center flex-col">
            <div className='bg-red-500 w-full h-3'></div> {/* banda roja */}

            <div className="grid grid-cols-1 xl:grid-cols-6 px-20 py-5 bg-sky-100 w-full">
                <a href='https://cv-jorge-loaiza.vercel.app/'>
                    <div className="flex items-center gap-3">
                        <User className="text-blue-600" />
                        <span>Acerca del autor</span>
                    </div>
                </a>
                <Link to='/category/list'>
                    <div className="flex items-center gap-3">
                        <ListChecks className="text-green-600" />
                        <span>Practicar por temas</span>
                    </div>
                </Link>
                <Link to='/materialEstudio'>
                    <div className="flex items-center gap-3">
                        <BookOpen className="text-blue-600" />
                        <span>Material de estudio</span>
                    </div>
                </Link>
                <a href='https://convocatoriacnsc.com/simulacros-pruebas-funcionales/'>
                    <div className="flex items-center gap-3">
                        <GraduationCap className="text-purple-600" />
                        <span>Otros simulacros</span>
                    </div>
                </a>
                <Link to='/formulario-contacto'>
                    <div className="flex items-center gap-3">
                        <Mail className="text-sky-600" />
                        <span>Contáctame</span>
                    </div>
                </Link>
                <Link to='/about-this-site'>
                    <div className="flex items-center gap-3">
                        <Info className="text-blue-400" />
                        <span>Acerca de este sitio</span>
                    </div>
                </Link>
            </div>
            <div className='w-full mx-auto mt-5 mb-2'><Carrusel /></div>

            <br></br>



            <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 py-8">
                <div className="lg:w-2/3 w-full">
                    <PostsList />
                </div>
                <div className="lg:w-1/3 w-full flex flex-col gap-6">
                    <ProcesoSeleccionDIAN />
                    <OtrosProcesosSeleccion />
                    <EnlacesInteres />
                    <DIAN/>
                    <Contraloria/>
                    <Fiscalia/>
                    <Procuraduria/>
                    <CNSC/>
                    <EnlacesSIMO/>
                </div>
            </div>




            <div className='w-2/5 mt-8  mr-[17%] border-2 mb-5 border-gray-300 rounded-lg bg-white shadow-lg'>
                <SeccionComentarios />
            </div>


        </div>
    )
}

