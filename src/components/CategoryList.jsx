import { Link } from 'react-router-dom'
import { CategoryCard } from './CategoryCard'
import { imgs, categories } from '../page/data'

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
  codigoUnicoDisciplinario,
  razonamiento_logico_nivel_basico,
  comprension_lectora,
  razonamiento_numerico,
  aptitud_verbal,
  principios_deberes_constitucionales,
  gobierno_digital
} from '../page/data'

// Mapa de categorías a tipos (puedes ajustar y expandir)
const categoryTypes = {
  aspectos_generales: 'general',
  conceptos_generales_DIAN: 'general',
  ofimatica_sistemas: 'tecnologia',
  basicas_organizacionales: 'general',
  prueba_integridad: 'juridico',
  conocimientosTributarios: 'juridico',
  conductuales: 'habilidades',
  tramitesServicios: 'general',
  competencia_administrativa: 'juridico',
  codigo_general_proceso_colombia: 'juridico',
  estructura_estado_colombiano: 'juridico',
  modelo_integrado_gestion: 'gestion',
  competencia_comportamentales: 'habilidades',
  codigo_unico_disciplinario: 'juridico',
  razonamientologico: 'razonamiento',
  comprensionlectora: 'razonamiento',
  razonamientonumerico: 'razonamiento',
  aptitudverbal: 'razonamiento',
  principiosconstitucionales: 'juridico',
  gobiernodigital: 'gestion',
}

// Degradados por tipo
const typeColors = {
  general: 'from-purple-500 to-pink-500',
  tecnologia: 'from-cyan-500 to-blue-600',
  juridico: 'from-red-500 to-orange-600',
  habilidades: 'from-teal-400 to-emerald-500',
  gestion: 'from-green-500 to-emerald-600',
  razonamiento: 'from-yellow-500 to-amber-600',
}

const preguntaData = [
  { key: 'aspectos_generales', preguntas: aspectos_generales },
  { key: 'conceptos_generales_DIAN', preguntas: conceptos_generales_DIAN },
  { key: 'ofimatica_sistemas', preguntas: ofimatica_sistemas },
  { key: 'basicas_organizacionales', preguntas: basicasorganizacionales },
  { key: 'prueba_integridad', preguntas: pruebaIntegridad },
  { key: 'conocimientosTributarios', preguntas: conocimientosTributarios },
  { key: 'conductuales', preguntas: conductualesInterpersonales },
  { key: 'tramitesServicios', preguntas: tramites_Servicios },
  { key: 'competencia_administrativa', preguntas: competencia_administrativa },
  { key: 'codigo_general_proceso_colombia', preguntas: codigo_general_proceso_en_colombia },
  { key: 'estructura_estado_colombiano', preguntas: estructura_del_estado },
  { key: 'modelo_integrado_gestion', preguntas: modelo_integrado_de_gestión },
  { key: 'competencia_comportamentales', preguntas: competencias_comportamentales_para_profesionales },
  { key: 'codigo_unico_disciplinario', preguntas: codigoUnicoDisciplinario },
  { key: 'razonamientologico', preguntas: razonamiento_logico_nivel_basico },
  { key: 'comprensionlectora', preguntas: comprension_lectora },
  { key: 'razonamientonumerico', preguntas: razonamiento_numerico },
  { key: 'aptitudverbal', preguntas: aptitud_verbal },
  { key: 'principiosconstitucionales', preguntas: principios_deberes_constitucionales },
  { key: 'gobiernodigital', preguntas: gobierno_digital },
]

export const CategoryList = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center sm:w-5/6 sm:mx-auto mt-4 mb-6">
        <div></div>
        <h1 className="text-3xl font-bold text-center flex-1">Temas</h1>
        <Link to={'/'}>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Inicio
          </button>
        </Link>
      </div>

      <div className="sm:flex sm:flex-col sm:mx-auto md:justify-around md:w-80 lg:flex lg:flex-row lg:flex-wrap lg:w-3/5 gap-4">
        {preguntaData.map((item, index) => {
          const tipo = categoryTypes[item.key] || 'general'
          const gradientColor = typeColors[tipo] || typeColors.general
          return (
            <CategoryCard
              key={item.key}
              category={categories[item.key]}
              src={imgs[index]}
              alt={`categoria ${categories[item.key]}`}
              gradientColor={gradientColor}
              cantidadPreguntas={item.preguntas}
            />
          )
        })}
      </div>
    </div>
  )
}
