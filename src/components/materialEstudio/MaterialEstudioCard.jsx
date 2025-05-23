/* Código crossOriginIsolated, el que yo hice */

/* 
import React from 'react'

export const MaterialEstudioCard = ({ data, url, image }) => {


    return (
        <div className='w-full h-auto max-w-full flex flex-wrap items-center justify-center p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-500'>
            <a href={url} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data}</h5>                    
                </div>
                
            </a>
        </div>
    )
}
 */

import React from 'react'
import { motion } from 'framer-motion'

export const MaterialEstudioCard = ({ data, url, image }) => {
  return (
    <motion.div
      className="w-full flex justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <a
        href={url}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:shadow-xl transition duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-60 md:h-auto md:w-48 md:rounded-l-lg rounded-t-lg"
          src={image}
          alt={data}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data}
          </h5>
        </div>
      </a>
    </motion.div>
  )
}
