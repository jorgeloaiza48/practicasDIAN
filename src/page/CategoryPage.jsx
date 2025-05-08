import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { aspectos_generales, conceptos_generales_DIAN, ofimatica_sistemas, basicasorganizacionales, pruebaIntegridad, conocimientosTributariosI, conductualesInterpersonales, tramites_Servicios } from './data'
import { Question } from '../components/Question'

export const CategoryPage = () => {

  const { category } = useParams()  //capturo la categoría seleccionada que viene por la url
  let preguntas = [] //guardará todas las preguntas de una sola categoría

  const [indexQuestion, setIndexQuestion] = useState(0)

  if (category === "Aspectos generales") { preguntas = aspectos_generales }
  else if (category === "Conceptos generales DIAN") { preguntas = conceptos_generales_DIAN }
  else if (category === "Ofimática y Sistemas") { preguntas = ofimatica_sistemas }
  else if (category === "Basicas Organizacionales") { preguntas = basicasorganizacionales }
  else if (category === "Prueba de Integridad") { preguntas = pruebaIntegridad }
  else if (category === "Conocimientos Tributarios I") { preguntas = conocimientosTributariosI }
  else if (category === "Conductuales e interpersonales") { preguntas = conductualesInterpersonales }
  else { preguntas = tramites_Servicios }

  return (
    <div className='flex flex-col items-center justify-center gap-10 my-3' style={{ height: 'calc(100vh-5rem)' }}>
      <Question preguntasIndex={preguntas[indexQuestion]}
        setIndexQuestion={setIndexQuestion}
        indexQuestion={indexQuestion}
        preguntas={preguntas}
        categoria={category}
      />
    </div>
  )
}
