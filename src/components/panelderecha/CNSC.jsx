import React from "react";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HubIcon from '@mui/icons-material/Hub';
import WindowIcon from '@mui/icons-material/Window';
import QuizIcon from '@mui/icons-material/Quiz';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ViewListIcon from '@mui/icons-material/ViewList';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import logoCnsc from '../../page/images/logoCnsc.png'

const cnscLinks = [
  {
    label: "Portal SIMO 4.0",
    href: "https://simo4.cnsc.gov.co/",
    icon: <LaptopChromebookIcon fontSize="medium" />,
    bgColor: "bg-sky-100 dark:bg-sky-900",
    textColor: "text-sky-800 dark:text-sky-300",
    hoverBg: "hover:bg-sky-200 dark:hover:bg-sky-800",
    hoverText: "hover:text-sky-900 dark:hover:text-sky-100",
  },
  {
    label: "SIMO",
    href: "https://simo.cnsc.gov.co/",
    icon: <HubIcon fontSize="medium" />,
    bgColor: "bg-teal-100 dark:bg-teal-900",
    textColor: "text-teal-800 dark:text-teal-300",
    hoverBg: "hover:bg-teal-200 dark:hover:bg-teal-800",
    hoverText: "hover:text-teal-900 dark:hover:text-teal-100",
  },
  {
    label: "Ventanilla única CNSC",
    href: "http://gestion.cnsc.gov.co/cpqr/",
    icon: <WindowIcon fontSize="medium" />,
    bgColor: "bg-pink-100 dark:bg-pink-900",
    textColor: "text-pink-800 dark:text-pink-300",
    hoverBg: "hover:bg-pink-200 dark:hover:bg-pink-800",
    hoverText: "hover:text-pink-900 dark:hover:text-pink-100",
  },
  {
    label: "Evaluación del desempeño (EDL)",
    href: "https://edl.cnsc.gov.co/",
    icon: <QuizIcon fontSize="medium" />,
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-800 dark:text-yellow-300",
    hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800",
    hoverText: "hover:text-yellow-900 dark:hover:text-yellow-100",
  },
  {
    label: "Escuela virtual CNSC",
    href: "https://escuelavirtual.cnsc.gov.co/",
    icon: <LocalLibraryIcon fontSize="medium" />,
    bgColor: "bg-indigo-100 dark:bg-indigo-900",
    textColor: "text-indigo-800 dark:text-indigo-300",
    hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800",
    hoverText: "hover:text-indigo-900 dark:hover:text-indigo-100",
  },
  {
    label: "Doctrina",
    href: "https://doctrina.cnsc.gov.co/doctrina/",
    icon: <ConnectWithoutContactIcon fontSize="medium" />,
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
    hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800",
    hoverText: "hover:text-purple-900 dark:hover:text-purple-100",
  },
  {
    label: "Banco Nacional de Lista de Elegibles",
    href: "https://bnle.cnsc.gov.co/bnle-listas/bnle-listas-consulta-general",
    icon: <ViewListIcon fontSize="medium" />,
    bgColor: "bg-lime-100 dark:bg-lime-900",
    textColor: "text-lime-800 dark:text-lime-300",
    hoverBg: "hover:bg-lime-200 dark:hover:bg-lime-800",
    hoverText: "hover:text-lime-900 dark:hover:text-lime-100",
  },
  {
    label: "CNSC para niños",
    href: "https://www.cnsc.gov.co/sites/default/files/site_ninos/",
    icon: <ChildCareIcon fontSize="medium" />,
    bgColor: "bg-orange-100 dark:bg-orange-900",
    textColor: "text-orange-800 dark:text-orange-300",
    hoverBg: "hover:bg-orange-200 dark:hover:bg-orange-800",
    hoverText: "hover:text-orange-900 dark:hover:text-orange-100",
  },
];

export const CNSC = () => (
  <section className="max-w-md mx-auto">
    <img src={logoCnsc} alt="Logo CNSC" />
    <hr className="mt-2 mb-5 h-1 bg-sky-300" />
    <ul className="space-y-3 list-inside">
      {cnscLinks.map(({ label, href, icon, bgColor, textColor, hoverBg, hoverText }) => (
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
