import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  aspectos_generales,
  conceptos_generales_DIAN,
  ofimatica_sistemas,
  basicasorganizacionales,
  pruebaIntegridad,
  conocimientosTributarios,
  conductualesInterpersonales,
  tramites_Servicios,
  competencia_administrativa,
  codigo_general_proceso_en_colombia,
  estructura_del_estado,
  modelo_integrado_de_gestión,
  competencias_comportamentales_para_profesionales,
  razonamiento_logico_nivel_basico,
  comprension_lectora,
  razonamiento_numerico,
  aptitud_verbal,
  principios_deberes_constitucionales,
  gobierno_digital,
  gestion_talento_humano,
  seguridad_salud_trabajo
} from './data'
import { Question } from '../components/Question'

export const CategoryPage = () => {

  const { category } = useParams()  //capturo la categoría seleccionada que viene por la url
  let preguntas = [] //guardará todas las preguntas de una sola categoría

  const [indexQuestion, setIndexQuestion] = useState(0)

  if (category === "Aspectos generales DIAN") { preguntas = aspectos_generales }

  else if (category === "Conceptos generales DIAN") { preguntas = conceptos_generales_DIAN }
  else if (category === "Ofimática y Sistemas") { preguntas = ofimatica_sistemas }
  else if (category === "Basicas Organizacionales") { preguntas = basicasorganizacionales }
  else if (category === "Prueba de Integridad") { preguntas = pruebaIntegridad }
  else if (category === "Conocimientos Tributarios") { preguntas = conocimientosTributarios }
  else if (category === "Conductuales e interpersonales") { preguntas = conductualesInterpersonales }
  else if (category === "Trámites y servicios") { preguntas = tramites_Servicios }
  else if (category === "Competencia administrativa") { preguntas = competencia_administrativa }
  else if (category === "Código General del Proceso en Colombia") { preguntas = codigo_general_proceso_en_colombia }
  else if (category === "Estructura del Estado colombiano") { preguntas = estructura_del_estado }
  else if (category === "Modelo integrado de gestión") { preguntas = modelo_integrado_de_gestión }
  else if (category === "Competencias comportamentales para profesionales") { preguntas = competencias_comportamentales_para_profesionales }
  else if (category === "Razonamiento lógico (nivel básico)") { preguntas = razonamiento_logico_nivel_basico }
  else if (category === "Comprensión lectora") { preguntas = comprension_lectora }
  else if (category === "Razonamiento numérico (nivel básico)") { preguntas = razonamiento_numerico }
  else if (category === "Aptitud Verbal") { preguntas = aptitud_verbal }
  else if (category === "Principios y deberes constitucionales") { preguntas = principios_deberes_constitucionales }
  else if (category === "Gestión del talento humano") { preguntas = gestion_talento_humano }
  else if (category === "Gobierno digital") { preguntas = gobierno_digital }


  else { preguntas = seguridad_salud_trabajo }

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
