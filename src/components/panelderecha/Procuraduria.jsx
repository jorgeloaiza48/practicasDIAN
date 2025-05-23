import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import PublicIcon from '@mui/icons-material/Public';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SecurityIcon from '@mui/icons-material/Security';
import logoprocuraduria from '../../page/images/procuraduria.jpg'

const procuraduriaLinks = [
  {
    label: "Sitio web oficial",
    href: "https://www.procuraduria.gov.co/Pages/Inicio.aspx",
    icon: <AccountCircleIcon fontSize="medium" />,
    bgColor: "bg-cyan-100 dark:bg-cyan-900",
    textColor: "text-cyan-800 dark:text-cyan-300",
    hoverBg: "hover:bg-cyan-200 dark:hover:bg-cyan-800",
    hoverText: "hover:text-cyan-900 dark:hover:text-cyan-100",
  },
  {
    label: "Transparencia y acceso a la información pública",
    href: "https://www.procuraduria.gov.co/Pages/Transparenci.aspx",
    icon: <GavelIcon fontSize="medium" />,
    bgColor: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-800 dark:text-red-300",
    hoverBg: "hover:bg-red-200 dark:hover:bg-red-800",
    hoverText: "hover:text-red-900 dark:hover:text-red-100",
  },
  {
    label: "Atención y servicios a la ciudadanía",
    href: "https://www.procuraduria.gov.co/Pages/Transparenci.aspx#",
    icon: <InfoIcon fontSize="medium" />,
    bgColor: "bg-amber-100 dark:bg-amber-900",
    textColor: "text-amber-800 dark:text-amber-300",
    hoverBg: "hover:bg-amber-200 dark:hover:bg-amber-800",
    hoverText: "hover:text-amber-900 dark:hover:text-amber-100",
  },
  {
    label: "Procuraduría",
    href: "https://www.procuraduria.gov.co/Pages/participa.aspx#",
    icon: <DescriptionIcon fontSize="medium" />,
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-300",
    hoverBg: "hover:bg-green-200 dark:hover:bg-green-800",
    hoverText: "hover:text-green-900 dark:hover:text-green-100",
  },
  {
    label: "Sala de prensa",
    href: "https://www.procuraduria.gov.co/Pages/participa.aspx#",
    icon: <PublicIcon fontSize="medium" />,
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-300",
    hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800",
    hoverText: "hover:text-blue-900 dark:hover:text-blue-100",
  },
  {
    label: "Procuraduría para niños",
    href: "https://www.procuraduria.gov.co/Pages/ninos.aspx",
    icon: <ContactMailIcon fontSize="medium" />,
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
    hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800",
    hoverText: "hover:text-purple-900 dark:hover:text-purple-100",
  },
  {
    label: "Certificado de antecedentes",
    href: "https://www.procuraduria.gov.co/Pages/certificado-antecedentes.aspx",
    icon: <SecurityIcon fontSize="medium" />,
    bgColor: "bg-gray-100 dark:bg-gray-800",
    textColor: "text-gray-800 dark:text-gray-300",
    hoverBg: "hover:bg-gray-200 dark:hover:bg-gray-700",
    hoverText: "hover:text-gray-900 dark:hover:text-white",
  },
];

export const Procuraduria = () => (
  <section className="max-w-md mx-auto">
    <img src={logoprocuraduria} alt="Logo Procuraduría" />
    <hr className="mt-2 mb-5 h-1 bg-sky-300" />
    <ul className="space-y-3 list-inside">
      {procuraduriaLinks.map(({ label, href, icon, bgColor, textColor, hoverBg, hoverText }) => (
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
