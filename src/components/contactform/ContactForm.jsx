import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

export const ContactForm = () => {
    const form = useRef();
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_bqn5taj',
                'template_76is7zp',
                form.current,
                'plG1fiKu5fnF2x_ac'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setEnviado(true);
                    setError(false);
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    setError(true);
                }
            );
    };

    return (
        <div>
            <div>
                <Link to={'/'}>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 sm:ml-2">Inicio</button>
                </Link>
            </div>

            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Contáctame</h2>
                {enviado && <p className="text-green-600 text-center mb-4">¡Mensaje enviado!</p>}
                {error && <p className="text-red-600 text-center mb-4">Error al enviar. Intenta de nuevo.</p>}
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Nombre</label>
                        <input type="text" name="user_name" required className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Correo electrónico</label>
                        <input type="email" name="user_email" required className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Mensaje</label>
                        <textarea name="message" rows="5" required className="w-full border p-2 rounded"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};


/* Este componente permite enviar un correo directamente desde el front sin necesidad de un Backend por medio del servicio EmailJS https://www.emailjs.com/
Los pasos para ello son:
PASOS PARA INTEGRAR EMAILJS CON REACT
1. Crear una cuenta en EmailJS

    Ve a https://www.emailjs.com y crea una cuenta gratuita.

2. Configurar EmailJS

    En tu panel:

        Crea un Email Service (usa Gmail o cualquier otro proveedor).

        Crea una Plantilla de correo (Email Template) y personalízala.

        Ve a Account → API Keys y copia tu Public Key.

Guarda:

    Service ID

    Template ID

    Public Key
 */