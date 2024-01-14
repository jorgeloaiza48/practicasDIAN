
import { imgs, categories } from '../page/data'
import { CategoryCard } from './CategoryCard'
import { Link } from 'react-router-dom'

const [ag1,ag2,ag3,cgDIAN,ofimatica,basicas_organizacionales] = imgs

export const CategoryList = () => {
    return (
        <div>
            <Link to={'/'}>
                <button type="button" className="absolute top-32 left-80 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Inicio</button>
            </Link>
            <h1 className='absolute top-32 right-1/2 text-3xl'>Categorías</h1>
            <div className=' mt-40 grid grid-cols-3 w-2/3 mx-auto gap-y-3'>                
                <CategoryCard category={categories.aspectos_generales1}      src={ag1}       alt={`categoria ${categories.aspectos_generales1}`}      gradientColor={'from-purple-500 to-pink-500'} />
                <CategoryCard category={categories.aspectos_generales2}      src={ag2}       alt={`categoria ${categories.aspectos_generales2}`}      gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.aspectos_generales3}      src={ag3}       alt={`categoria ${categories.aspectos_generales3}`}      gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.conceptos_generales_DIAN} src={cgDIAN}    alt={`categoria ${categories.conceptos_generales_DIAN}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.ofimatica_sistemas}       src={ofimatica} alt={`categoria ${categories.ofimatica_sistemas}`}       gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.basicas_organizacionales} src={basicas_organizacionales} alt={`categoria ${categories.basicas_organizacionales}`} gradientColor={'from-lime-400   to-teal-700'} />
                {/*<CategoryCard category={categories.historia} src={Historia} alt={`categoria ${categories.historia}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.historia} src={Historia} alt={`categoria ${categories.historia}`} gradientColor={'from-lime-400   to-teal-700'} />
                <CategoryCard category={categories.historia} src={Historia} alt={`categoria ${categories.historia}`} gradientColor={'from-lime-400   to-teal-700'} /> */}
            </div>
        </div>
    )
}
