import React from "react";
import GavelIcon from '@mui/icons-material/Gavel';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import logofiscalia from "../../page/images/logofiscalia.png"; 

const fiscaliaLinks = [
  {
    label: "Quiénes somos",
    href: "https://www.fiscalia.gov.co/colombia/la-entidad/quienes-somos/mision-y-vision/",
    icon: <PeopleIcon fontSize="medium" />,
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-300",
    hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800",
    hoverText: "hover:text-blue-900 dark:hover:text-blue-100",
  },
  {
    label: "Estructura orgánica - organigrama",
    href: "https://www.fiscalia.gov.co/colombia/la-entidad/organigrama/",
    icon: <AccountBalanceIcon fontSize="medium" />,
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-300",
    hoverBg: "hover:bg-green-200 dark:hover:bg-green-800",
    hoverText: "hover:text-green-900 dark:hover:text-green-100",
  },
  {
    label: "Direccionaiento estratégico",
    href: "https://www.fiscalia.gov.co/colombia/gestion/direccionamiento-estrategico/",
    icon: <GavelIcon fontSize="medium" />,
    bgColor: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-800 dark:text-red-300",
    hoverBg: "hover:bg-red-200 dark:hover:bg-red-800",
    hoverText: "hover:text-red-900 dark:hover:text-red-100",
  },
  {
    label: "Gestión del talento humano",
    href: "https://www.fiscalia.gov.co/colombia/la-entidad/gestion-del-talento-humano/",
    icon: <ArticleIcon fontSize="medium" />,
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-800 dark:text-yellow-300",
    hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800",
    hoverText: "hover:text-yellow-900 dark:hover:text-yellow-100",
  },
  {
    label: "Atención y servicios a ciudadanía",
    href: "https://www.fiscalia.gov.co/colombia/menu-atencion-y-servicios-a-la-ciudadania/",
    icon: <ContactSupportIcon fontSize="medium" />,
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
    hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800",
    hoverText: "hover:text-purple-900 dark:hover:text-purple-100",
  },
  {
    label: "Transparencia y acceso a la información",
    href: "https://www.fiscalia.gov.co/colombia/transparencia-y-acceso-a-informacion-publica/",
    icon: <PublicIcon fontSize="medium" />,
    bgColor: "bg-indigo-100 dark:bg-indigo-900",
    textColor: "text-indigo-800 dark:text-indigo-300",
    hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800",
    hoverText: "hover:text-indigo-900 dark:hover:text-indigo-100",
  },
];

export const Fiscalia = () => (
  <section className="max-w-md mx-auto">
    <img src={logofiscalia} alt="Logo Fiscalía" />
    <hr className="mt-2 mb-5 h-1 bg-sky-300" />
    <ul className="space-y-3 list-inside">
      {fiscaliaLinks.map(({ label, href, icon, bgColor, textColor, hoverBg, hoverText }) => (
        <li key={label} className="flex items-center gap-4">
          <span className={`${textColor} transition-transform duration-300`}>
            {icon}
          </span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-grow py-3 px-6 text-sm font-semibold rounded-lg
              ${bgColor} ${textColor}
              ${hoverBg} ${hoverText}
              cursor-pointer
              shadow-sm
              transition
              duration-300
              ease-in-out
              transform
              hover:scale-105
              hover:shadow-lg
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
