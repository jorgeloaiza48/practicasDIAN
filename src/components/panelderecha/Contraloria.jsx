import logocontraloria from '../../page/images/logocontraloria.png'
import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import GavelIcon from '@mui/icons-material/Gavel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PublicIcon from '@mui/icons-material/Public';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';

const links = [
  {
    label: "Organigrama y dependencias",
    href: "https://www.contraloria.gov.co/es/web/guest/contraloria/la-entidad/organigrama-y-dependencias",
    icon: <AccountBalanceIcon fontSize="medium" />,
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-300",
    hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800",
    hoverText: "hover:text-blue-900 dark:hover:text-blue-100",
  },
  {
    label: "Historia y contralores",
    href: "https://www.contraloria.gov.co/contraloria/la-entidad/historiaycontralores",
    icon: <HistoryEduIcon fontSize="medium" />,
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
    hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800",
    hoverText: "hover:text-purple-900 dark:hover:text-purple-100",
  },
  {
    label: "Misión y visión",
    href: "https://www.contraloria.gov.co/web/guest/mision-y-vision",
    icon: <VisibilityIcon fontSize="medium" />,
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-300",
    hoverBg: "hover:bg-green-200 dark:hover:bg-green-800",
    hoverText: "hover:text-green-900 dark:hover:text-green-100",
  },
  {
    label: "Símbolos institucionales",
    href: "https://www.contraloria.gov.co/web/guest/simbolos-institucionales",
    icon: <EmojiSymbolsIcon fontSize="medium" />,
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-800 dark:text-yellow-300",
    hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800",
    hoverText: "hover:text-yellow-900 dark:hover:text-yellow-100",
  },
  {
    label: "Guía de auditoría",
    href: "https://www.contraloria.gov.co/web/guest/guia-de-auditoria",
    icon: <GavelIcon fontSize="medium" />,
    bgColor: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-800 dark:text-red-300",
    hoverBg: "hover:bg-red-200 dark:hover:bg-red-800",
    hoverText: "hover:text-red-900 dark:hover:text-red-100",
  },
  {
    label: "Certificado de antecedentes fiscales",
    href: "https://www.contraloria.gov.co/es/web/guest/control-fiscal/responsabilidad-fiscal/certificado-de-antecedentes-fiscales",
    icon: <AssignmentIcon fontSize="medium" />,
    bgColor: "bg-indigo-100 dark:bg-indigo-900",
    textColor: "text-indigo-800 dark:text-indigo-300",
    hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800",
    hoverText: "hover:text-indigo-900 dark:hover:text-indigo-100",
  },
  {
    label: "Atención al ciudadano",
    href: "https://www.contraloria.gov.co/web/guest/atencion-al-ciudadano",
    icon: <HeadsetMicIcon fontSize="medium" />,
    bgColor: "bg-pink-100 dark:bg-pink-900",
    textColor: "text-pink-800 dark:text-pink-300",
    hoverBg: "hover:bg-pink-200 dark:hover:bg-pink-800",
    hoverText: "hover:text-pink-900 dark:hover:text-pink-100",
  },
  {
    label: "Transparencia y acceso a la información pública",
    href: "https://www.contraloria.gov.co/en/web/rendicion-de-cuentas/transparencia-y-acceso-a-la-informacion-pública",
    icon: <PublicIcon fontSize="medium" />,
    bgColor: "bg-teal-100 dark:bg-teal-900",
    textColor: "text-teal-800 dark:text-teal-300",
    hoverBg: "hover:bg-teal-200 dark:hover:bg-teal-800",
    hoverText: "hover:text-teal-900 dark:hover:text-teal-100",
  },
  {
    label: "Resultados e informes",
    href: "https://www.contraloria.gov.co/web/guest/resultados-e-informes",
    icon: <BarChartIcon fontSize="medium" />,
    bgColor: "bg-orange-100 dark:bg-orange-900",
    textColor: "text-orange-800 dark:text-orange-300",
    hoverBg: "hover:bg-orange-200 dark:hover:bg-orange-800",
    hoverText: "hover:text-orange-900 dark:hover:text-orange-100",
  },
  {
    label: "Notificaciones y citaciones",
    href: "https://www.contraloria.gov.co/resultados/notificaciones-y-citaciones",
    icon: <CampaignIcon fontSize="medium" />,
    bgColor: "bg-cyan-100 dark:bg-cyan-900",
    textColor: "text-cyan-800 dark:text-cyan-300",
    hoverBg: "hover:bg-cyan-200 dark:hover:bg-cyan-800",
    hoverText: "hover:text-cyan-900 dark:hover:text-cyan-100",
  },
];

export const Contraloria = () => (
  <section className="max-w-md mx-auto">
    <img src={logocontraloria} alt="Logo Contraloría" />
    <hr className="mt-2 mb-5 h-1 bg-sky-300" />
    <ul className="space-y-3 list-inside">
      {links.map(({ label, href, icon, bgColor, textColor, hoverBg, hoverText }) => (
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
