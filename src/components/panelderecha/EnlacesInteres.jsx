import React from "react";
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import enlaceinteres from '../../page/images/enlaces-de-interes.jpeg'

const concursosLinks = [
  {
    label: "Convocatorias en desarrollo",
    href: "https://www.cnsc.gov.co/convocatorias-en-desarrollo",
    icon: <EventNoteIcon fontSize="medium" />,
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-300",
    hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800",
    hoverText: "hover:text-blue-900 dark:hover:text-blue-100",
  },
  {
    label: "Convocatorias cerradas",
    href: "https://www.cnsc.gov.co/convocatorias-cerradas",
    icon: <ArticleIcon fontSize="medium" />,
    bgColor: "bg-gray-100 dark:bg-gray-900",
    textColor: "text-gray-800 dark:text-gray-300",
    hoverBg: "hover:bg-gray-200 dark:hover:bg-gray-800",
    hoverText: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    label: "Resultados de procesos",
    href: "https://www.cnsc.gov.co/resultados",
    icon: <BarChartIcon fontSize="medium" />,
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-300",
    hoverBg: "hover:bg-green-200 dark:hover:bg-green-800",
    hoverText: "hover:text-green-900 dark:hover:text-green-100",
  },
  {
    label: "Calendario de concursos",
    href: "https://www.cnsc.gov.co/calendario",
    icon: <ScheduleIcon fontSize="medium" />,
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-800 dark:text-yellow-300",
    hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800",
    hoverText: "hover:text-yellow-900 dark:hover:text-yellow-100",
  },
  {
    label: "Consulta de empleos",
    href: "https://simo.cnsc.gov.co/#ofertasEmpleo",
    icon: <SearchIcon fontSize="medium" />,
    bgColor: "bg-indigo-100 dark:bg-indigo-900",
    textColor: "text-indigo-800 dark:text-indigo-300",
    hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800",
    hoverText: "hover:text-indigo-900 dark:hover:text-indigo-100",
  },
  {
    label: "Preguntas frecuentes sobre concursos",
    href: "https://www.cnsc.gov.co/preguntas-frecuentes",
    icon: <InfoIcon fontSize="medium" />,
    bgColor: "bg-rose-100 dark:bg-rose-900",
    textColor: "text-rose-800 dark:text-rose-300",
    hoverBg: "hover:bg-rose-200 dark:hover:bg-rose-800",
    hoverText: "hover:text-rose-900 dark:hover:text-rose-100",
  },
];

export const EnlacesInteres = () => (
  <section className="max-w-md mx-auto">
   {/*  <img src={enlaceinteres} alt="Logo Concursos CNSC" className="mb-4" /> */}
    <h2 className="text-xl font-semibold text-center mb-3">Enlaces de interés</h2>
    <hr className="mb-5 h-1 bg-cyan-300" />
    <ul className="space-y-3 list-inside">
      {concursosLinks.map(({ label, href, icon, bgColor, textColor, hoverBg, hoverText }) => (
        <li key={label} className="flex items-center gap-4">
          <span className={`${textColor}`}>{icon}</span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-grow py-3 px-6 text-sm font-semibold rounded-lg
              ${bgColor} ${textColor}
              ${hoverBg} ${hoverText}
              shadow-sm transition duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600
            `}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </section>
);



