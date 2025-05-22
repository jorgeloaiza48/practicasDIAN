'use client';

import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom'


export const AboutSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 md:px-12 overflow-hidden">
            {/* Fondo decorativo SVG */}
            <Link to={'/'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:ml-2">Inicio</button>
            </Link>
            <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="relative max-w-5xl mx-auto text-center z-10">
                <motion.h2
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Acerca de este sitio
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    El objetivo de este sitio es brindar material de preparación para concursos de mérito y carrera administrativa.
                    Aquí encontrarás material de estudio actualizado, simulacros interactivos y herramientas diseñadas para ayudarte a fortalecer tus conocimientos y habilidades en cada etapa del proceso de selección.

                    Nuestro fin es acompañarte con recursos confiables, contenidos alineados con la normatividad vigente y prácticas evaluativas que te preparan para enfrentar con éxito los desafíos de los concursos públicos en Colombia.

                    Prepárate aquí y avanza con confianza hacia tu futuro en el servicio público.
                </motion.p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                    {[
                        { title: 'Misión', text: 'Brindar acceso a contenido relevante y actualizado para todos los usuarios.' },
                        { title: 'Visión', text: 'Ser un referente digital confiable, promoviendo conocimiento e innovación.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full md:w-1/3"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center space-x-6 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <a href="https://www.facebook.com/jeloaiza2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition">
                        <Facebook size={24} />
                    </a>
                    <a href="https://github.com/jorgeloaiza48" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 dark:hover:text-sky-400 transition">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/jelm48/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:hover:text-blue-400 transition">
                        <Linkedin size={24} />
                    </a>
                </motion.div>

                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
                    whileTap={{ scale: 0.95 }}
                >
                    <Mail size={20} />
                    Contáctame
                </motion.button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <motion.div
                        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl max-w-md w-full relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl"
                        >
                            ×
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contáctame</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                            Puedes escribirme a mi correo electrónico o seguirme en redes sociales. ¡Estoy para ayudarte!
                        </p>
                        <a
                            href="jorgeloaiza@gmail.com"
                            className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition"
                        >
                            jorgeloaiza@gmail.com
                        </a>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
