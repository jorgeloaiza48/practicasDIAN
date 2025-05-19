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

import React, { useState, useEffect } from "react";
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

