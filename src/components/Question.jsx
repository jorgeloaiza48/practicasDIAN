import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const Question = ({ preguntasIndex, setIndexQuestion, indexQuestion, preguntas, categoria }) => {

    //preguntasIndex trae de uno en uno las preguntas de cada categoría.
    //setIndexQuestion va seteando la variable indexQuestion de uno en uno para que vaya recorreindo el array de las preguntas.
    //indexQuestion es el valor para ir recorriendo el array de las preguntas. Llega en cero la primera vez.
    //preguntas es el array con todas las preguntas en cada categoría.Es decir, si hay 20 preguntas de ciencia entonces "preguntas es de longitud 20"
    //categoria es la variable que contiene la categoría seleccionada y que aparece en la URL.

    const [answersRandom, setAnswersRandom] = useState([])
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
    let disableBotonLastQuestion = false
    let disableBotonFirstQuestion = false

    useEffect(() => {
        const answers = [...preguntasIndex.incorrect_answers, preguntasIndex.correct_answer] //en la variable "answers" se guarda tanto las respuestas correctas como las incorrectas
        setAnswersRandom(answers.sort(() => Math.random() - 0.5)) //genera de manera aleatoria para que no se muestren en el mismo orden cada vez que se carga la pregunta correspondiente
    }, [preguntasIndex])

    const nextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnswerIndex(null) //en esta línea se setea a null de nuevo para que la siguiente pregunta no le aparezca una opción ya coloreada
    }
    const previousQuestion = () => {
        setIndexQuestion(indexQuestion - 1)
    }

    const checkAnswer = (index) => {
        setSelectAnswerIndex(index);
    };

    if ((indexQuestion + 1) / preguntas.length === 1) { disableBotonLastQuestion = true }//cuando hacen click en el botón "siguiente pregunta" y ya no hay más entonces se convierte a true para ocultar el botón.
    if (indexQuestion === 0) { disableBotonFirstQuestion = true }


    const exportarPDF = () => {
        const doc = new jsPDF();
        let y = 20;

        doc.setFontSize(16);
        doc.text(`Preguntas - Categoría: ${categoria}`, 14, y);
        y += 10;

        preguntas.forEach((pregunta, idx) => {
            const opciones = [...pregunta.incorrect_answers, pregunta.correct_answer].sort(() => Math.random() - 0.5);

            const data = opciones.map((opcion) => [
                opcion,
                opcion === pregunta.correct_answer ? '✅ Correcta' : '',
            ]);

            autoTable(doc, {
                startY: y,
                head: [[`Pregunta ${idx + 1}: ${pregunta.question}`, 'Respuesta']],
                body: data,
                theme: 'grid',
                headStyles: { fillColor: [22, 160, 133] },
                bodyStyles: { textColor: 20 },
            });

            // Agregar descripción debajo de la tabla
            const tablaY = doc.lastAutoTable.finalY;
            doc.setFontSize(11);
            doc.setTextColor(80);
            doc.text(`Justificación: ${pregunta.description}`, 14, tablaY + 6);

            y = tablaY + 16;

            // Salto de página si el contenido se sale
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });

        doc.save(`${categoria}_preguntas.pdf`);
    };

    return (
        <div className="border-4 flex flex-col shadow-md shadow-salet-300 rounded-lg w-5/6 top-2  sm:w-3/5 md:border-indigo-100/100 md:w-3/5 md:mt-20 mb-10">
            <div className="flex justify-end p-4">
                <button
                    onClick={exportarPDF}
                    className="border border-green-700 px-4 py-2 rounded-lg text-green-700 hover:bg-green-600 hover:text-white font-bold transition-all"
                >
                    Descargar estas preguntas en PDF
                </button>
            </div>

            <span className='text-xl font-bold text-center mb-6'>
                Categoría: {categoria}
            </span>
            <div className="w-3/5 mx-auto mb-6">
                <span className='text-xl font-bold'>
                    {/* Número de pregunta actual y totales */}
                    Pregunta {indexQuestion + 1} de {preguntas.length}
                </span>
            </div>
            <div className='flex mx-auto w-3/5 text-justify'>
                <h1 className='font-bold pb-6'>{preguntasIndex.question}</h1>
            </div>
            {/* Las respuestas aquí */}
            <div className='grid grid-cols-1 gap-3 mx-auto w-4/5'>
                {answersRandom.map((answer, index) => (
                    <button className={`border p-5 rounded-lg flex items-center ${selectAnswerIndex !== null &&
                        index === selectAnswerIndex ? answer === preguntasIndex.correct_answer ? 'bg-green-500' : 'bg-red-500' : ''}`}
                        key={answer}
                        onClick={() => checkAnswer(index)}>
                        <p className='font-medium text-center text-sm text-justify'>{answer}</p>
                    </button>

                ))}
            </div>
            <div className='w-3/5 mt-4 mx-auto ml-8 sm:ml-10 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24'>
                {answersRandom.map((answer, index) => (
                    <p> {selectAnswerIndex !== null && index === selectAnswerIndex ? answer === preguntasIndex.correct_answer ? <strong className='animate-pulse'>{preguntasIndex.description}</strong> : <strong>Respuesta incorrecta</strong> : ''}
                    </p>
                ))}
            </div>
            <div className='flex justify-between mt-10  mx-auto w-5/6'>
                <button className={`w-1/2 border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium' ${indexQuestion === 0 ? 'cursor-not-allowed' : ''}`} onClick={previousQuestion} disabled={disableBotonFirstQuestion} >
                    <p className='text-xs'>Anterior pegunta</p><svg className="h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                </button>

                <button className={`w-1/2 border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium ${(indexQuestion + 1) / preguntas.length === 1 ? 'cursor-not-allowed' : ''}`} onClick={nextQuestion} disabled={disableBotonLastQuestion}>
                    <p className='text-xs'>Siguiente pegunta</p><svg className=" h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
            </div>

            <div className='flex justify-center my-3.5'>
                <Link to='/category/list'>
                    <button className="border border-blue-600 px-5 py-2 rounded-lg font-bold transition-all hover:bg-blue-500 hover:text-gray-900">
                        Volver a las categorías
                    </button>
                </Link>
            </div>





        </div>
    )
}
