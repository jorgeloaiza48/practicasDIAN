/* Código original, el que hice yo */


/* 
import React from 'react'
import { MaterialEstudioCard } from './MaterialEstudioCard'
import { material_estudio_data } from './materialEstudioData'
import { Link } from 'react-router-dom'
import { Carrusel } from '../carrusel/Carrusel'


export const MaterialEstudioList = () => {

    const material_estudio = material_estudio_data.map((material) => {

        return <MaterialEstudioCard  key={material.id} data={material.titulo} url={material.url} image={material.image} />
    })


    return (
        <div>
          
            <h1 className='text-5xl text-center my-10 hover:text-blue-600 pb-5 shadow-xl'>Material de Estudio</h1>
            <Link to={'/'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:ml-2">Inicio</button>
            </Link>
            <div className='w-full h-auto max-w-full flex flex-wrap items-center justify-center p-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {material_estudio} 
                </div>
            </div>
        </div>

    )
} 
 */




import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { material_estudio_data } from './materialEstudioData'
import { MaterialEstudioCard } from './MaterialEstudioCard'

export const MaterialEstudioList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Todas')

    // Obtener todas las categorías únicas, agregar opción "Todas"
    const categories = ['Todas', ...new Set(material_estudio_data.map(item => item.categoria))]

    // Filtrar según búsqueda y categoría
    const filteredItems = material_estudio_data.filter(item => {
        const matchesSearch = item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'Todas' || item.categoria === selectedCategory
        return matchesSearch && matchesCategory
    })

    const totalItems = filteredItems.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    // Al cambiar filtro categoría o búsqueda, reiniciar página
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        setCurrentPage(1)
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        setCurrentPage(1)
    }

    return (
        <div className='mb-10'>
            <motion.h1
                className='text-5xl text-center my-10 hover:text-blue-600 pb-5 shadow-xl'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Material de Estudio
            </motion.h1>

            <Link to={'/'}>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4 sm:ml-2">
                    Inicio
                </button>
            </Link>

            {/* Filtros: Categoría y búsqueda */}
            <div className="flex justify-center items-center mb-4 space-x-4 flex-wrap">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 rounded px-4 py-2"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Buscar por título o palabra clave..."
                    className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Items per page */}
            <div className="flex justify-center items-center mb-4">
                <label className="mr-2 font-medium">Ítems por página:</label>
                <select
                    value={itemsPerPage}
                    onChange={(e) => {
                        setItemsPerPage(Number(e.target.value))
                        setCurrentPage(1)
                    }}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                </select>
            </div>

            {/* Cards */}
            <div className='w-full h-auto max-w-full flex flex-wrap items-center justify-center p-8'>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    key={currentPage}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentItems.map((material) => (
                        <MaterialEstudioCard
                            key={material.id}
                            data={material.titulo}
                            url={material.url}
                            image={material.image}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2 relative">
                {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1
                    const isActive = currentPage === page
                    return (
                        <div key={page} className="relative">
                            {isActive && (
                                <motion.div
                                    layoutId="paginationHighlight"
                                    className="absolute inset-0 bg-blue-500 rounded z-0"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <button
                                className={`px-3 py-1 rounded relative z-10 ${isActive ? 'text-white' : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                onClick={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        </div>
                    )
                })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
                <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}
