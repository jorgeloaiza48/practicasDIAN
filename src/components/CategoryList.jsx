
import { imgs, categories } from '../page/data'
import { CategoryCard } from './CategoryCard'
import { Link } from 'react-router-dom'

const [ag1, ag2, ag3, cgDIAN, ofimatica, basicas_organizacionales] = imgs

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
                <CategoryCard category={categories.aspectos_generales1} src={ag1} alt={`categoria ${categories.aspectos_generales1}`} gradientColor={'from-purple-500 to-pink-500'} />
                <CategoryCard category={categories.aspectos_generales2} src={ag2} alt={`categoria ${categories.aspectos_generales2}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.aspectos_generales3} src={ag3} alt={`categoria ${categories.aspectos_generales3}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.conceptos_generales_DIAN} src={cgDIAN} alt={`categoria ${categories.conceptos_generales_DIAN}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.ofimatica_sistemas} src={ofimatica} alt={`categoria ${categories.ofimatica_sistemas}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.basicas_organizacionales} src={basicas_organizacionales} alt={`categoria ${categories.basicas_organizacionales}`} gradientColor={'from-lime-400   to-teal-700'} />
            </div>            
        </div>
    )
}
