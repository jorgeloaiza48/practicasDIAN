import React from 'react'
import './style.css'
import slogan from './images/slogan.jpg'
import logo from './images/logodian.png'
import felicidad from './images/felicidad.jpg'
import aplicar from './images/aplicar.jpg'


export const Home = () => {
    return (

        <div>
            <div className="tail-top">
                <div id="header">
                    <div className="row-1">
                        <div className="fleft"><a href="#"><img src={logo} alt="" /></a></div>
                        <div className="fright">
                            <ul>
                                <li><a href="index.html" className="active">home</a></li>
                                <li><a href="about-us.html">about</a></li>
                                <li><a href="articles.html">articles</a></li>
                                <li><a href="contact-us.html">contacts</a></li>
                                <li><a href="sitemap.html">sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row-2"><span><b><img src={slogan} alt="" /></b></span></div>
                </div>
                <div id="content">
                    <div className="row-1">
                        <div className="inside">
                            <div className="container">

                                <div className="content">
                                    <p className="txt1"><strong>Nuevo concurso meritocrático para cubrir vacantes en la DIAN</strong></p>
                                    <div className="img-box1 alt"><img src={felicidad} alt="" />La Comisión Nacional del Servicio Civil (CNSC), designada por la Constitución Política en el artículo 130, tiene como función principal la administración y supervisión de las carreras de los servidores públicos, exceptuando aquellas de carácter especial. Este organismo estatal, con autonomía, lleva a cabo concursos de méritos para la designación de funcionarios que no están sujetos a sistemas de nombramiento específicos establecidos por la ley, según lo dispuesto en el artículo 125 de la Constitución. Los empleos estarán disponibles para los niveles profesional, técnico y asistencial, en los que se requieren diferentes meses o años de experiencia, dependiendo del rol a desempeñar. </div>
                                    <p></p>
                                    {/* <div className="wrapper"><a href="#" className="link1"><em><b>Read More</b></em></a></div> */}
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div id="content">
                    <div className="row-1">
                        <div className="inside">
                            <div className="container">
                                <div className="content">
                                    <p className="txt1">¿Cómo aplicar a las nuevas vacantes para la DIAN con el CNSC?</p>
                                    <div className="img-box1 alt"><img src={aplicar} alt="" />El pasado 19 de noviembre de 2024, el CNSC compartió la Resolución No. 16475 “Por la cual se declara desierto el Proceso de Selección DIAN 2667 en la modalidad de Ascenso, para algunos empleos”. Es por esto que ahora los esfuerzos están centrados en convocar a participar del Proceso de Selección DIAN 2667 para la etapa de inscripciones en Modalidad de Ingreso. Este proceso comenzará el próximo 26 de noviembre y finalizará el 9 de diciembre. Todos los aspirantes que deseen postularse a las vacantes disponibles en esta modalidad deberán inscribirse a través del Sistema de Apoyo para la Igualdad, el Mérito y la Oportunidad – SIMO, allí podrán consultar toda la Oferta Pública de Empleos de Carrera de la DIAN.</div>
                                    <h1 className='recomendaciones'>Recomendaciones importantes para los aspirantes, según el CNSC:</h1>
                                    <ul>
                                        <li>Revisar el Acuerdo y Anexo correspondiente para conocer los requisitos de inscripción.</li>
                                        <li>Registrar y completar su inscripción en la fecha indicada para asegurar su participación en el proceso de selección.</li>
                                        <li>Consultar los plazos y documentos necesarios para el proceso.</li>
                                    </ul>
                                    <br></br>
                                   <p>La Resolución de la declaratoria de Ascenso desierta está disponible en este link: <a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65'>https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65'</a></p>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

