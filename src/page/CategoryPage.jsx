import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { aspectos_generales1, aspectos_generales2, aspectos_generales3, conceptos_generales_DIAN, ofimatica_sistemas, basicasorganizacionales } from './data'
import { Question } from '../components/Question'

export const CategoryPage = () => {

  const { category } = useParams()  //capturo la categoría seleccionada que viene por la url
  let preguntas = [] //guardará todas las preguntas de una sola categoría

  const [indexQuestion, setIndexQuestion] = useState(0)

  if (category === "Aspectos generales I") { preguntas = aspectos_generales1 }
  else if (category === "Aspectos generales II") { preguntas = aspectos_generales2 }
  else if (category === "Aspectos generales III") { preguntas = aspectos_generales3 }
  else if (category === "Conceptos generales DIAN") { preguntas = conceptos_generales_DIAN }
  else if (category === "Ofimática y Sistemas") { preguntas = ofimatica_sistemas }
  else { preguntas = basicasorganizacionales }

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-32' style={{ height: 'calc(100vh-5rem)' }}>
      <Question preguntasIndex={preguntas[indexQuestion]}
        setIndexQuestion={setIndexQuestion}
        indexQuestion={indexQuestion}
        preguntas={preguntas}
        categoria={category}
      />
    </div>
  )
}
