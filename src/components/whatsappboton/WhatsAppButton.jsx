/* import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#25D366",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  zIndex: 1000,
  cursor: "pointer",
};

export const WhatsAppButton = () => {
  const phoneNumber = "573122727084"; // Reemplaza con tu número (código de país + número)
  const message = "Hola, deseo más información.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={buttonStyle} onClick={handleClick} title="Contáctanos por WhatsApp">
      <FaWhatsapp />
    </div>
  );
};
 */

/* import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#25D366",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  zIndex: 1000,
  cursor: "pointer",
};

const tooltipStyle = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "8px",
  fontSize: "14px",
  zIndex: 1001,
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  maxWidth: "200px",
};

export const WhatsAppButton = () => {
  const phoneNumber = "573001234567"; // Reemplaza con tu número
  const message = "Hola, deseo más información.";

  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setShowTooltip(false);
  };

  return (
    <>
      {showTooltip && <div style={tooltipStyle}>¿Necesitas ayuda? Escríbeme por WhatsApp</div>}
      <div style={buttonStyle} onClick={handleClick} title="Contáctanos por WhatsApp">
        <FaWhatsapp />
      </div>
    </>
  );
};
 */

import React from 'react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573122727084"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="fixed bottom-4 left-4 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
    >
      <svg
        className="w-7 h-7 md:w-8 md:h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.4 0 .02 5.37 0 12c0 2.11.56 4.15 1.61 5.95L0 24l6.25-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.93 11.93 0 0 0-3.48-8.52zM12 22c-1.86 0-3.69-.48-5.3-1.38l-.38-.22-3.7.96.99-3.6-.25-.37A9.97 9.97 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.87c-.28-.14-1.63-.8-1.88-.9-.25-.1-.43-.14-.62.14s-.71.9-.87 1.08c-.16.17-.32.19-.6.05a8.14 8.14 0 0 1-2.39-1.48 9.1 9.1 0 0 1-1.68-2.1c-.17-.3 0-.47.13-.6.13-.13.3-.33.44-.5.14-.16.19-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.45-.62-.45l-.53-.01c-.17 0-.44.06-.67.28s-.88.86-.88 2.1c0 1.24.9 2.44 1.02 2.61.12.17 1.78 2.85 4.3 4 .6.26 1.06.41 1.42.52.6.19 1.15.17 1.58.1.48-.07 1.48-.6 1.7-1.18.21-.58.21-1.07.15-1.18-.07-.1-.25-.16-.53-.3z" />
      </svg>
    </a>
  );
};



