import React from "react";
import logo from "../../assets/logodian.png"; // Asegúrate de que la ruta del logo sea correcta

import {
  ExternalLink,
  Globe,
  BookOpen,
  Building2,
  Users,
  FileText,
  ClipboardList,
  Landmark,
  School,
  FolderOpen,
  FileSearch,
} from "lucide-react";

export const DIAN = () => {
  const links = [
    {
      text: "Sitio web Institucional",
      url: "https://www.dian.gov.co/Paginas/Inicio.aspx",
      icon: <Globe size={18} />,
      style: "bg-sky-100 text-sky-800 border-sky-300 hover:bg-sky-200 hover:text-sky-900",
    },
    {
      text: "Presentación",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/Presentacion.aspx",
      icon: <BookOpen size={18} />,
      style: "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200 hover:text-blue-900",
    },
    {
      text: "Organigrama",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/Organigrama.aspx",
      icon: <Building2 size={18} />,
      style: "bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 hover:text-purple-900",
    },
    {
      text: "Oferta de Empleos",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/OfertasEmpleo.aspx",
      icon: <Users size={18} />,
      style: "bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200 hover:text-emerald-900",
    },
    {
      text: "Planeación y evaluación institucional",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/PlaneacionEvaluacionInstitucional.aspx",
      icon: <FileText size={18} />,
      style: "bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200 hover:text-orange-900",
    },
    {
      text: "Manual de funciones",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/Manual_de_Funciones.aspx",
      icon: <ClipboardList size={18} />,
      style: "bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200 hover:text-yellow-900",
    },
    {
      text: "Manual de Procesos",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/mapaprocesos.aspx",
      icon: <ClipboardList size={18} />,
      style: "bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200 hover:text-yellow-900",
    },
    {
      text: "Código de ética",
      url: "https://www.dian.gov.co/dian/entidad/CodigoBuenGobierno/Codigo-de-Etica-Vr1-2021.pdf",
      icon: <Landmark size={18} />,
      style: "bg-red-100 text-red-800 border-red-300 hover:bg-red-200 hover:text-red-900",
    },
    {
      text: "Escuela DIAN",
      url: "https://www.dian.gov.co/Paginas/Escuela-DIAN.aspx",
      icon: <School size={18} />,
      style: "bg-teal-100 text-teal-800 border-teal-300 hover:bg-teal-200 hover:text-teal-900",
    },
    {
      text: "Gestión documental",
      url: "https://www.dian.gov.co/dian/entidad/Paginas/GDocumental.aspx",
      icon: <FolderOpen size={18} />,
      style: "bg-indigo-100 text-indigo-800 border-indigo-300 hover:bg-indigo-200 hover:text-indigo-900",
    },
    {
      text: "Manual de contratación",
      url: "https://www.dian.gov.co/dian/contratacion/Contratacion/MN_FI_0013_Manual_de_Contratacion_SGRF.pdf",
      icon: <FileSearch size={18} />,
      style: "bg-pink-100 text-pink-800 border-pink-300 hover:bg-pink-200 hover:text-pink-900",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto text-center mb-8">
      <img src={logo} alt="DIAN Logo" className="w-48 mx-auto mb-4" />
      <hr className="mt-2 mb-5 h-1 bg-sky-300" />
      <ul className="space-y-3 text-left">
        {links.map((link, index) => (
          <li key={index}>
            <button
              type="button"
              className={`flex items-center w-full gap-2 py-2.5 px-5 text-sm font-medium rounded-lg border focus:outline-none focus:z-10 focus:ring-4 ${link.style}`}
            >
              {link.icon}
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex-grow text-left">
                {link.text}
              </a>
              <ExternalLink size={16} className="text-gray-400" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};





