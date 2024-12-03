import React from 'react'
import './style.css'
import slogan from './images/slogan.jpg'
import logo from './images/logodian.png'
import felicidad from './images/felicidad.jpg'
import aplicar from './images/aplicar.jpg'
import { Link } from 'react-router-dom'


export const Home = () => {
    return (

        <div>
            <div className="tail-top">
                <div id="header">
                    <div className="row-1">
                        <div className="fleft"><img src={logo} alt="" /></div>
                        <div className="fright">
                            <ul>
                                <li>home</li>
                                <li>about</li>
                                <Link to='/category/list'><li>Practicar por categorías</li></Link>
                                <li>Material de estudio</li>
                                <li>contacts</li>
                                <li>contacts</li>
                                <li>sitemap</li>
                            </ul>
                        </div>
                    </div>
                    <br></br>
                    <div className="row-2"><span><b><img src={slogan} alt="" /></b></span></div>
                </div>
                <div id="content">
                    <div className="row-1">
                        <div className="inside">
                            <div className="container">

                                <div className="content">
                                    <center><p className="txt1">Nuevo concurso meritocrático para cubrir vacantes en la DIAN</p></center> <br></br>
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
                                    <center><p className="txt1">¿Cómo aplicar a las nuevas vacantes para la DIAN con el CNSC?</p></center> <br></br>
                                    <div className="img-box1 alt"><img src={aplicar} alt="" />El pasado 19 de noviembre de 2024, el CNSC compartió la Resolución No. 16475 “Por la cual se declara desierto el Proceso de Selección DIAN 2667 en la modalidad de Ascenso, para algunos empleos”. Es por esto que ahora los esfuerzos están centrados en convocar a participar del Proceso de Selección DIAN 2667 para la etapa de inscripciones en Modalidad de Ingreso. Este proceso comenzará el próximo 26 de noviembre y finalizará el 9 de diciembre. Todos los aspirantes que deseen postularse a las vacantes disponibles en esta modalidad deberán inscribirse a través del Sistema de Apoyo para la Igualdad, el Mérito y la Oportunidad – SIMO, allí podrán consultar toda la Oferta Pública de Empleos de Carrera de la DIAN.</div>
                                    <h1 className='recomendaciones'>Recomendaciones importantes para los aspirantes, según el CNSC:</h1>
                                    <ul>
                                        <li>Revisar el Acuerdo y Anexo correspondiente para conocer los requisitos de inscripción.</li>
                                        <li>Registrar y completar su inscripción en la fecha indicada para asegurar su participación en el proceso de selección.</li>
                                        <li>Consultar los plazos y documentos necesarios para el proceso.</li>
                                    </ul>
                                    <br></br>
                                    <p>La Resolución de la declaratoria de Ascenso desierta está disponible en este link: <a href='https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65'>https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65'</a></p>
                                    <br></br>
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
                                    <center><p className="txt1">¿Cómo inscribirse en las convocatorias de la CNSC?</p><br></br></center>
                                    <div className="img-box1 alt"><img src={aplicar} alt="" />Periódicamente, la Comisión Nacional del Servicio Civil publica en su portal web los procesos de selección que se están adelantando, junto con los acuerdos técnicos o anexos, para que los interesados puedan conocer con más detalle la convocatoria; sin embargo, la inscripción se lleva a cabo directamente en el aplicativo ‘SIMO’, por lo que, para acceder y postularse, deberá:</div>

                                    <ul>
                                        <li>Ingresar a la página oficial de ‘SIMO’ o hacer clic en el siguiente enlace: <a href='https://simo.cnsc.gov.co/'>https://simo.cnsc.gov.co/</a></li>
                                        <li>En la parte superior derecha, oprimir el botón ‘Registrarse’ para crear un usuario / contraseña.</li>
                                        <li>Iniciar sesión en el aplicativo y en el menú izquierdo, completar todo lo relacionado con la información personal, experiencia laboral, formación educativa, entre otros.</li>
                                        <li>Luego, dar clic en el botón ‘Oferta Pública de Empleos de Carrera’ (OPEC) e indicar el proceso de selección en el que desea participar.</li>
                                    </ul>
                                    <br></br>
                                    <p>Una vez hecho este paso, el sistema le mostrará todas las vacantes disponibles para la convocatoria elegida, los requisitos y el salario mensual del cargo. Cuando encuentre el puesto ideal, oprima el botón de confirmación del empleo y haga el respectivo pago de los derechos de participación, que para este año, tienen un valor de $65.000 COP (niveles asesor y profesional) y de $43.350 COP (nivel técnico y asistencial).</p>
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

