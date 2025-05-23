import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PanToolIcon from '@mui/icons-material/PanTool';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const otherProcesses = [
  { icon: <AccountTreeIcon fontSize="small" />, label: "Procesos en desarrollo", href: "https://www.cnsc.gov.co/convocatorias/en-desarrollo", color: "bg-sky-100 hover:bg-sky-200 text-sky-800" },
  { icon: <FormatListNumberedIcon fontSize="small" />, label: "Lista de Elegibles", href: "https://www.cnsc.gov.co/convocatorias/en-uso-de-listas", color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800" },
  { icon: <PanToolIcon fontSize="small" />, label: "Procesos finalizados", href: "https://www.cnsc.gov.co/convocatorias/historicas", color: "bg-red-100 hover:bg-red-200 text-red-800" },
  { icon: <SchoolIcon fontSize="small" />, label: "IES acreditadas", href: "https://www.cnsc.gov.co/convocatorias/universidades-acreditadas", color: "bg-green-100 hover:bg-green-200 text-green-800" },
  { icon: <MenuBookIcon fontSize="small" />, label: "Tutoriales y videos", href: "https://www.cnsc.gov.co/convocatorias/tutoriales-y-videos", color: "bg-indigo-100 hover:bg-indigo-200 text-indigo-800" },
  { icon: <WorkspacePremiumIcon fontSize="small" />, label: "Modelo de certificación", href: "https://www.cnsc.gov.co/procesos-de-seleccion/modelo-de-certificacion", color: "bg-purple-100 hover:bg-purple-200 text-purple-800" },
];

export const OtrosProcesosSeleccion = () => (
  <section className="w-full max-w-md mx-auto">
    <div className="bg-white shadow-lg rounded-xl p-4">
      <h2 className="text-xl text-center font-semibold">Otros procesos de selección</h2>
      <hr className="my-3 h-1 bg-sky-300 border-0 rounded" />
      <ul className="space-y-2">
        {otherProcesses.map(({ icon, label, href, color }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-2 text-sm font-medium border border-gray-200 rounded-lg transition ${color} dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {icon}
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
