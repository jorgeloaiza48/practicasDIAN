import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CampaignIcon from '@mui/icons-material/Campaign';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PagesIcon from '@mui/icons-material/Pages';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import FilePresentIcon from '@mui/icons-material/FilePresent';

const links = [
  { icon: <AccountBalanceIcon fontSize="small" />, label: "Normatividad", href: "https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=65", color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
  { icon: <CampaignIcon fontSize="small" />, label: "Avisos informativos", href: "https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=64", color: 'bg-green-100 hover:bg-green-200 text-green-800' },
  { icon: <ImportContactsIcon fontSize="small" />, label: "Acciones constitucionales", href: "https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=66", color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' },
  { icon: <PagesIcon fontSize="small" />, label: "Acciones administrativas", href: "https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=1479", color: 'bg-red-100 hover:bg-red-200 text-red-800' },
  { icon: <SpaceDashboardIcon fontSize="small" />, label: "Guías", href: "https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=1410", color: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800' },
  { icon: <ListAltIcon fontSize="small" />, label: "Listas desiertas", href: "https://www.cnsc.gov.co/convocatorias/dian-2667?field_tipo_de_contenido_convocat_target_id=1461", color: 'bg-purple-100 hover:bg-purple-200 text-purple-800' },
  { icon: <SpeakerNotesIcon fontSize="small" />, label: "Divulgaciones", href: "https://www.cnsc.gov.co/divulgacion/dian-2667", color: 'bg-pink-100 hover:bg-pink-200 text-pink-800' },
  { icon: <FilePresentIcon fontSize="small" />, label: "Anexo DIAN 2667", href: "https://www.cnsc.gov.co/sites/default/files/2024-10/anexo-acuerdo-dian_2667_0.pdf", color: 'bg-teal-100 hover:bg-teal-200 text-teal-800' },
];

export const ProcesoSeleccionDIAN = () => {
  return (
    <aside className="w-full max-w-md mx-auto lg:mx-0">
      <div className="bg-white shadow-xl rounded-xl p-4">
        <h2 className="text-xl font-semibold text-center mb-3">Proceso de selección DIAN 2667</h2>
        <ul className="space-y-2">
          {links.map(({ icon, label, href, color }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 p-2 text-sm border border-gray-200 rounded-lg transition ${color}`}
              >
                {icon}
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};






{/* <div className=' w-1/5 flex flex-col items-center justify-start gap-8'>

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




                </div> */}