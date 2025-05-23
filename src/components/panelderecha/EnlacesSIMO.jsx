import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import logosimo from '../../page/images/LogoSIMO.png'

const simoLinks = [
    {
        icon: <HomeIcon className="text-blue-600" />,
        label: "Portal principal de SIMO",
        href: "https://simo.cnsc.gov.co/",
    },
    {
        icon: <HelpIcon className="text-green-600" />,
        label: "Preguntas frecuentes",
        href: "https://simo.cnsc.gov.co/documentacion/preguntas-frecuentes",
    },
    {
        icon: <LibraryBooksIcon className="text-purple-600" />,
        label: "Documentación SIMO",
        href: "https://simo.cnsc.gov.co/documentacion",
    },
    {
        icon: <DescriptionIcon className="text-red-600" />,
        label: "Manual de usuario",
        href: "https://simo.cnsc.gov.co/documentacion/manual-usuario",
    },
    {
        icon: <GroupIcon className="text-yellow-600" />,
        label: "Registro de usuarios",
        href: "https://simo.cnsc.gov.co/registro",
    },
    {
        icon: <EmailIcon className="text-pink-600" />,
        label: "Contáctanos",
        href: "https://simo.cnsc.gov.co/contacto",
    },
];

export const EnlacesSIMO = () => (
    <section className="w-full max-w-md mx-auto my-6">       
        <div className="bg-white shadow-md rounded-xl p-5">
            <img src={logosimo} alt="Logo SIMO" />
            <hr className="mb-4 h-1 bg-sky-400 border-0 rounded" />
            <ul className="space-y-3">
                {simoLinks.map(({ icon, label, href }) => (
                    <li key={label} className="flex items-center gap-3">
                        {icon}
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-800 px-4 py-2 w-full bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white transition"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);
