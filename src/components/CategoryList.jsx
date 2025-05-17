
import { imgs, categories } from '../page/data'
import { CategoryCard } from './CategoryCard'
import { Link } from 'react-router-dom'
import { aspectos_generales, conceptos_generales_DIAN, ofimatica_sistemas, basicasorganizacionales, pruebaIntegridad, conocimientosTributariosI, conductualesInterpersonales, tramites_Servicios,competencia_administrativa, codigo_general_proceso_en_colombia, estructura_del_estado, modelo_integrado_de_gestión, competencias_comportamentales_para_profesionales, codigoUnicoDisciplinario, razonamiento_logico_nivel_basico} from '../page/data'

const [ag1, cgDIAN, ofimatica, basicas_organizacionales, integridad, tributarios1, conductuales, tramitesServicios, competencia_admin, codigo_general_proceso, estructura_estado, mipg, comportamentales, cud,razonamientologico ] = imgs


export const CategoryList = () => {
    return (
        <div>
            <div className='flex justify-center my-4  sm:justify-between sm:w-5/6 sm:mx-auto'>

                <Link to={'/'}>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:ml-2">Inicio</button>
                </Link>

                <h1 className='text-3xl'>Categorías</h1>
                <div className='text-white'>pfdfggfffggg</div> {/* Este div me tocó colocarlo para que el div principal quede con tres elementos y así al darle "justify-between" entonces el botón Incio se va para la izquierda y la palabra Categoría se centra. También hay que darle color blanco al texto para que no aparezca */}
            </div>
            <div className='sm:flex sm:flex-col sm:mx-auto md:justify-around md:w-80 lg:flex lg:flex-row lg:flex-wrap lg:w-3/5'> {/* sm es para 640px */}
                <CategoryCard category={categories.aspectos_generales} src={ag1} alt={`categoria ${categories.aspectos_generales}`} gradientColor={'from-purple-500 to-pink-500'} cantidadPreguntas={aspectos_generales} />
                <CategoryCard category={categories.conceptos_generales_DIAN} src={cgDIAN} alt={`categoria ${categories.conceptos_generales_DIAN}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={conceptos_generales_DIAN} />
                <CategoryCard category={categories.ofimatica_sistemas} src={ofimatica} alt={`categoria ${categories.ofimatica_sistemas}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={ofimatica_sistemas} />
                <CategoryCard category={categories.basicas_organizacionales} src={basicas_organizacionales} alt={`categoria ${categories.basicas_organizacionales}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={basicasorganizacionales} />
                <CategoryCard category={categories.prueba_integridad} src={integridad} alt={`categoria ${categories.prueba_integridad}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={pruebaIntegridad} />
                <CategoryCard category={categories.conocimientosTributariosI} src={tributarios1} alt={`categoria ${categories.conocimientosTributariosI}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={conocimientosTributariosI} />
                <CategoryCard category={categories.conductuales} src={conductuales} alt={`categoria ${categories.conductuales}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={conductualesInterpersonales} />
                <CategoryCard category={categories.tramitesServicios} src={tramitesServicios} alt={`categoria ${categories.tramitesServicios}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={tramites_Servicios} />
                <CategoryCard category={categories.competencia_administrativa} src={competencia_admin} alt={`categoria ${categories.competencia_administrativa}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={competencia_administrativa} />
                <CategoryCard category={categories.codigo_general_proceso_colombia} src={codigo_general_proceso} alt={`categoria ${categories.codigo_general_proceso_colombia}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={codigo_general_proceso_en_colombia} />
                <CategoryCard category={categories.estructura_estado_colombiano} src={estructura_estado} alt={`categoria ${categories.estructura_estado_colombiano}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={estructura_del_estado} />
                <CategoryCard category={categories.modelo_integrado_gestion} src={mipg} alt={`categoria ${categories.modelo_integrado_gestion}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={modelo_integrado_de_gestión} />
                <CategoryCard category={categories.competencia_comportamentales} src={comportamentales} alt={`categoria ${categories.competencia_comportamentales}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={competencias_comportamentales_para_profesionales} />
                <CategoryCard category={categories.codigo_unico_disciplinario} src={cud} alt={`categoria ${categories.codigo_unico_disciplinario}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={codigoUnicoDisciplinario} />
                <CategoryCard category={categories.razonamientologico} src={razonamientologico} alt={`categoria ${categories.razonamientologico}`} gradientColor={'from-lime-400   to-teal-700'} cantidadPreguntas={razonamiento_logico_nivel_basico} />
            </div>
        </div>
    )
}
