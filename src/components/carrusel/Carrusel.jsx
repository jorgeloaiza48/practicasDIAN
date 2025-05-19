import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slogan from './imagenesCarrusel/slogan.jpg'
import slogan2 from './imagenesCarrusel/slogan2.jpg'
import slogan3 from './imagenesCarrusel/slogan3.jpg'
import slogan4 from './imagenesCarrusel/slogan4.jpg'
import slogan5 from './imagenesCarrusel/slogan5.webp'
import slogan6 from './imagenesCarrusel/slogan6.jpg'
import slogan7 from './imagenesCarrusel/slogan7.png'
import slogan8 from './imagenesCarrusel/slogan8.jpeg'




export const Carrusel = () => {
    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <Slider {...settings}>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan} alt="Slide 1" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan2} alt="Slide 2" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan3} alt="Slide 3" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan4} alt="Slide 3" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan5} alt="Slide 3" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan6} alt="Slide 3" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan7} alt="Slide 3" /></div>
                <div><img className="w-full h-[400px] object-cover transition duration-500" src={slogan8} alt="Slide 3" /></div>
               
            </Slider>
        </div>
    );
};


// Carrusel.js
/* import React, { useState, useEffect } from "react";

export const Carrusel = ({ imagenes, autoPlay = true, intervalo = 3000 }) => {
  const [indexActual, setIndexActual] = useState(0);

  const siguiente = () => {
    setIndexActual((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndexActual((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay || imagenes.length === 0) return;
    const id = setInterval(siguiente, intervalo);
    return () => clearInterval(id);
  }, [imagenes, intervalo, autoPlay]);

  if (imagenes.length === 0) {
    return <p className="text-center">Cargando imágenes...</p>;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={imagenes[indexActual]}
        alt={`Slide ${indexActual + 1}`}
        className="w-full h-auto transition duration-500"
      />

      <button
        onClick={anterior}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={siguiente}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imagenes.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === indexActual ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};


 */