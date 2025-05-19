import React from 'react'
//import './style.css'
import slogan from './images/slogan.jpg'
import logo from './images/logodian.png'
import logocontraloria from './images/logocontraloria.png'
import felicidad from './images/felicidad.jpg'
import aplicar from './images/aplicar.jpg'
import inscripcion from './images/inscripcion.webp'
import { Link } from 'react-router-dom'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CampaignIcon from '@mui/icons-material/Campaign';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PagesIcon from '@mui/icons-material/Pages';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PanToolIcon from '@mui/icons-material/PanTool';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HubIcon from '@mui/icons-material/Hub';
import WindowIcon from '@mui/icons-material/Window';
import QuizIcon from '@mui/icons-material/Quiz';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ViewListIcon from '@mui/icons-material/ViewList';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { SeccionComentarios } from '../components/seccionComentarios/SeccionComentarios'
import { Carrusel } from '../components/carrusel/Carrusel'



export const Home = () => {
    return (

        <div className=" flex justify-center items-center flex-col">
            <div className='bg-red-500 w-full h-3'></div> {/* banda roja */}


            <div className="bg-cyan-500 text-white text-2xl font-bold text-center p-5 w-full">
                <ul className='flex gap-10 justify-center'>
                    <li className=''><a href='https://cv-jorge-loaiza.vercel.app/'>Acerca del autor</a></li>
                    <Link to='/category/list'><li className=''>Practicar por temas</li></Link>
                    <Link to='/materialEstudio'><li className=''>Material de estudio</li></Link>
                    <li className=''><a href='https://convocatoriacnsc.com/simulacros-pruebas-funcionales/'>Simulacros CNSC</a></li>
                </ul>
            </div>

            <div className='w-full mx-auto mt-5 mb-2'><Carrusel /></div>


            <br></br>
            {/*  <div className="m-5">
                <img src={slogan} alt="" />
            </div> */}


            <div className='flex flex-row justify-center gap-5 sm:justify-around md:justify-center lg:justify-center'>


                <div className='flex flex-col items-center p-10 w-2/5 rounded-lg bg-white shadow-lg'>
                    <div className="container mt-20">
                        <div className="content space-y-10 mt-1">
                            <h1 className="text-4xl text-center ">Nuevo concurso meritocrático para cubrir vacantes en la DIAN</h1>
                            <img className="rounded-lg" src={felicidad} alt="" />
                            <p className='text-2xl text-justify'>La Comisión Nacional del Servicio Civil (CNSC), designada por la Constitución Política en el artículo 130,
                                tiene como función principal la administración y supervisión de las carreras de los servidores públicos, exceptuando aquellas de carácter especial.
                                Este organismo estatal, con autonomía, lleva a cabo concursos de méritos para la designación de funcionarios que no están sujetos a sistemas de nombramiento específicos
                                establecidos por la ley, según lo dispuesto en el artículo 125 de la Constitución. Los empleos estarán disponibles para los niveles profesional, técnico y asistencial,
                                en los que se requieren diferentes meses o años de experiencia, dependiendo del rol a desempeñar.</p>
                        </div>
                    </div>


                    <div className="">
                        <div className="container">
                            <div className="content space-y-10 mt-10">
                                <h1 className="text-4xl text-center">¿Cómo aplicar a las nuevas vacantes para la DIAN con el CNSC?</h1>
                                <img className='rounded-lg' src={aplicar} alt="" />
                                <p className='text-2xl text-justify'>El pasado 19 de noviembre de 2024, el CNSC compartió la Resolución No. 16475 “Por la cual se declara desierto el Proceso de Selección DIAN 2667 en la modalidad de Ascenso, para algunos empleos”. Es por esto que ahora los esfuerzos están centrados en convocar a participar del Proceso de Selección DIAN 2667 para la etapa de inscripciones en Modalidad de Ingreso. Este proceso comenzará el próximo 26 de noviembre y finalizará el 9 de diciembre. Todos los aspirantes que deseen postularse a las vacantes disponibles en esta modalidad deberán inscribirse a través del Sistema de Apoyo para la Igualdad, el Mérito y la Oportunidad – SIMO, allí podrán consultar toda la Oferta Pública de Empleos de Carrera de la DIAN.</p>

                                <h1 className='recomendaciones'>Recomendaciones importantes para los aspirantes, según el CNSC:</h1>
                                <ul className='list-disc text-xl'>
                                    <li>Revisar el Acuerdo y Anexo correspondiente para conocer los requisitos de inscripción.</li>
                                    <li>Registrar y completar su inscripción en la fecha indicada para asegurar su participación en el proceso de selección.</li>
                                    <li>Consultar los plazos y documentos necesarios para el proceso.</li>
                                </ul>
                                <br></br>
                                <p className='text-base'>La Resolución de la declaratoria de Ascenso desierta está disponible en este link: <br></br><a href="https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65"> https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65 </a></p>
                                <br></br>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>



                    <div className="container ">
                        <div className="content space-y-10 mt-10">
                            <h1 className="text-4xl text-center">¿Cómo inscribirse en las convocatorias de la CNSC?</h1>
                            <img className='rounded-lg' src={inscripcion} alt="" />
                            <p className='text-2xl text-justify'>Periódicamente, la Comisión Nacional del Servicio Civil publica en su portal web los procesos de selección que se están adelantando, junto con los acuerdos técnicos o anexos, para que los interesados puedan conocer con más detalle la convocatoria; sin embargo, la inscripción se lleva a cabo directamente en el aplicativo ‘SIMO’, por lo que, para acceder y postularse, deberá:</p>

                            <ul className='list-disc text-xl'>
                                <li>Ingresar a la página oficial de 'SIMO' o hacer clic en el siguiente enlace: <a href="https://simo.cnsc.gov.co/"> https://simo.cnsc.gov.co/ </a></li>
                                <li>En la parte superior derecha, oprimir el botón 'Registrarse' para crear un usuario / contraseña.</li>
                                <li>Iniciar sesión en el aplicativo y en el menú izquierdo, completar todo lo relacionado con la información personal, experiencia laboral, formación educativa, entre otros.</li>
                                <li>Luego, dar clic en el botón 'Oferta Pública de Empleos de Carrera' (OPEC) e indicar el proceso de selección en el que desea participar.</li>
                            </ul>
                            <br></br>
                            <p className='text-2xl pb-10'>Una vez hecho este paso, el sistema le mostrará todas las vacantes disponibles para la convocatoria elegida, los requisitos y el salario mensual del cargo. Cuando encuentre el puesto ideal, oprima el botón de confirmación del empleo y haga el respectivo pago de los derechos de participación, que para este año, tienen un valor de $65.000 COP (niveles asesor y profesional) y de $43.350 COP (nivel técnico y asistencial).</p>
                        </div>
                        <div className="clear"></div>
                    </div>

                </div>




                <div className=' w-1/5 flex flex-col items-center justify-start gap-8'>

                    <div className=' shadow-2xl bg-white rounded-lg p-8 '>

                        <div>
                            <h1 className="text-2xl text-center">Proceso de selección DIAN 2667</h1> <hr className='mt-2 mb-5 h-1 bg-sky-300'></hr>
                            <ul className="max-w-md space-y-3 list-inside">

                                <li>< AccountBalanceIcon /> <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65'>Normatividad</a></button></li><hr></hr>
                                <li><CampaignIcon />        <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=64'>Avisos informativos</a></button></li><hr></hr>
                                <li><ImportContactsIcon />  <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=66'>Acciones constitucionales</a></button></li><hr></hr>
                                <li><PagesIcon />           <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=1479'>Acciones administrativas</a></button></li><hr></hr>
                                <li><SpaceDashboardIcon />  <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=1410'>Guías</a></button></li><hr></hr>
                                <li><ListAltIcon />         <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=1461'>Listas desiertas</a></button></li><hr></hr>
                                <li><SpeakerNotesIcon />    <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/divulgacion/dian-2667'>Divulgaciones</a></button></li><hr></hr>
                                <li><FilePresentIcon />     <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/sites/default/files/2024-10/anexo-acuerdo-dian_2667_0.pdf'>Anexo DIAN 2667</a></button></li>
                            </ul>
                        </div>
                    </div>

                    <div className=' shadow-2xl bg-white rounded-lg p-8 '>

                        <div>
                            <h1 className="text-2xl text-center">Otros procesos de selección</h1> <hr className='mt-2 mb-5 h-1 bg-sky-300'></hr>
                            <ul className="max-w-md space-y-3 list-inside">

                                <li><AccountTreeIcon />         <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/en-desarrollo'>Procesos de selección en desarrollo</a></button></li><hr></hr>
                                <li><FormatListNumberedIcon />  <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/en-uso-de-listas'>Lista de Elegibles</a></button></li><hr></hr>
                                <li><PanToolIcon />             <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/historicas'>Procesos de selección finalizados</a></button></li><hr></hr>
                                <li><SchoolIcon />              <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/universidades-acreditadas'>IES acreditadas</a></button></li><hr></hr>
                                <li><MenuBookIcon />            <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/convocatorias/tutoriales-y-videos'>Tutoriales y videos</a></button></li><hr></hr>
                                <li><WorkspacePremiumIcon />    <button type="button" className="ml-2 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/procesos-de-seleccion/modelo-de-certificacion'>Modelo de certificación</a></button></li><hr></hr>

                            </ul>
                        </div>
                    </div>


                    <div className=' shadow-2xl bg-white rounded-lg p-8 '>

                        <div>
                            <h1 className="text-2xl text-center">Enlaces de interés</h1> <hr className='mt-2 mb-5 h-1 bg-sky-300'></hr>
                            <ul className="max-w-md space-y-3 list-inside">

                                <li><LaptopChromebookIcon />     <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://simo4.cnsc.gov.co/'>Portal SIMO 4.0</a></button></li><hr></hr>
                                <li><HubIcon />                  <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://simo.cnsc.gov.co/'>SIMO</a></button></li><hr></hr>
                                <li><WindowIcon />               <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='http://gestion.cnsc.gov.co/cpqr/'>Ventanilla única CNSC</a></button></li><hr></hr>
                                <li><QuizIcon />                 <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://edl.cnsc.gov.co/'>Evaluación del desempeño laboral EDL</a></button></li><hr></hr>
                                <li><LocalLibraryIcon />         <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://escuelavirtual.cnsc.gov.co/'>Escuela virtual CNSC</a></button></li><hr></hr>
                                <li><ConnectWithoutContactIcon /><button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://doctrina.cnsc.gov.co/doctrina/'>Doctrina</a></button></li><hr></hr>
                                <li><ViewListIcon />             <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://bnle.cnsc.gov.co/bnle-listas/bnle-listas-consulta-general'>Banco Nacional de Lista de Elegibles</a></button></li><hr></hr>
                                <li><ChildCareIcon />            <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.cnsc.gov.co/sites/default/files/site_ninos/'>CNSC para niños</a></button></li><hr></hr>


                            </ul>
                        </div>
                    </div>


                    <div className=' shadow-2xl bg-white rounded-lg p-8 '>

                        <img src={logo} /> <hr className='mt-2 mb-5 h-1 bg-sky-300'></hr>
                        <ul className="max-w-md space-y-3 list-inside">

                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/Paginas/Inicio.aspx'>Sitio web Institucional</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/Presentacion.aspx'>Presentación</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/Organigrama.aspx'>Organigrama</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/OfertasEmpleo.aspx'>Oferta de Empleos</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/PlaneacionEvaluacionInstitucional.aspx'>Planeación y evaluación institucional</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/Manual_de_Funciones.aspx'>Manual de funciones</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/mapaprocesos.aspx'>Manual de Procesos</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf'>Código de ética</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/Paginas/Escuela-DIAN.aspx'>Escuela DIAN</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/entidad/Paginas/GDocumental.aspx'>Gestión documental</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.dian.gov.co/dian/contratacion/Contratacion/MN_FI_0013_Manual_de_Contratacion_SGRF.pdf'>Manual de contratación</a></button></li><hr></hr>
                        </ul>

                    </div>


                    <div className=' shadow-2xl bg-white rounded-lg p-8 '>

                        <img src={logocontraloria} /> <hr className='mt-2 mb-5 h-1 bg-sky-300'></hr>
                        <ul className="max-w-md space-y-3 list-inside">

                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/es/web/guest/contraloria/la-entidad/organigrama-y-dependencias'>Organigrama y dependencias</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/contraloria/la-entidad/historiaycontralores'>Historia y contralores</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/web/guest/mision-y-vision'>Misión y visión</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/web/guest/simbolos-institucionales'>Símbolos institucionales</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/web/guest/guia-de-auditoria'>Guía de auditoría</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/es/web/guest/control-fiscal/responsabilidad-fiscal/certificado-de-antecedentes-fiscales'>Certificado de antecedentes fiscales</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/web/guest/atencion-al-ciudadano'>Atención al ciudadano</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/en/web/rendicion-de-cuentas/transparencia-y-acceso-a-la-informacion-p%C3%BAblica'>Transparencia y accesso a la información pública</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/web/guest/resultados-e-informes'>Resultados e informes</a></button></li><hr></hr>
                            <li>          <button type="button" className="ml-1 py-2.5 px-5 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href='https://www.contraloria.gov.co/resultados/notificaciones-y-citaciones'>Notificaciones y citaciones</a></button></li><hr></hr>

                        </ul>

                    </div>




                </div>

            </div>

            <div className='w-2/5 mt-8  mr-[17%] border-2 mb-5 border-gray-300 rounded-lg bg-white shadow-lg'>
                <SeccionComentarios />
            </div>


        </div>
    )
}

