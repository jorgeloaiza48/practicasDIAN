import ag1 from '../assets/ag1.png';
import cgDIAN from '../assets/cgDIAN.png'
import ofimatica from '../assets/ofimatica.png'
import basicas_organizacionales from '../assets/basicas_organizacionales.png'
import integridad from '../assets/integridad.png'
import conductuales from '../assets/conductuales.png'
import tramitesServicios from '../assets/tramitesServicios.png'
import competencia_admin from '../assets/competencia_administrativa.jpg'
import codigo_general_proceso from '../assets/codigo_general_proceso.gif'
import estructura_estado from '../assets/estructura_estado.webp'
import mipg from '../assets/mipg.png'
import comportamentales from '../assets/comportamentales.gif'
import cud from '../assets/cud.gif'
import razonamientologico from '../assets/razonamiento_logico.png'
import comprensionlectora from '../assets/comprensionlectora.jpeg'
import razonamientonumerico from '../assets/razonamientonumerico.jpeg'
import aptitudverbal from '../assets/aptitudverbal.gif'
import principiosconstitucionales from '../assets/principiosconstitucionales.png'
import gobiernodigital from '../assets/gobiernodigital.png'
import conocimiento_tributario from '../assets/conocimiento_tributario.png'


export const imgs = [
	ag1,
	cgDIAN,  //conceptos generales DIAN
	ofimatica,
	basicas_organizacionales,
	integridad,
	conocimiento_tributario,
	conductuales,
	tramitesServicios,
	competencia_admin,
	codigo_general_proceso,
	estructura_estado,
	mipg,
	comportamentales,
	cud,
	razonamientologico,
	comprensionlectora,
	razonamientonumerico,
	"https://plus.unsplash.com/premium_photo-1678361172092-85da0a5e812f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //aptitud verbal
	principiosconstitucionales,
	"https://plus.unsplash.com/premium_photo-1677093906033-dc2beb53ace3?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1610030852212-438471e34223?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1664301191471-0dc137e504bc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" //SST
];

export const categories = {
	aspectos_generales: 'Aspectos generales DIAN',
	conceptos_generales_DIAN: 'Conceptos generales DIAN',
	ofimatica_sistemas: 'Ofimática y Sistemas',
	basicas_organizacionales: 'Basicas Organizacionales',
	prueba_integridad: 'Prueba de Integridad',
	conocimientosTributarios: 'Conocimientos Tributarios',
	conductuales: "Conductuales e interpersonales",
	tramitesServicios: "Trámites y servicios",
	competencia_administrativa: "Competencia administrativa",
	codigo_general_proceso_colombia: "Código General del Proceso",
	estructura_estado_colombiano: "Estructura del Estado colombiano",
	modelo_integrado_gestion: "Modelo integrado de gestión (MIPG)",
	competencia_comportamentales: "Competencias comportamentales para profesionales",
	codigo_unico_disciplinario: "Código Único Disciplinario",
	razonamientologico: "Razonamiento lógico (nivel básico)",
	comprensionlectora: "Comprensión lectora",
	razonamientonumerico: "Razonamiento numérico (nivel básico)",
	aptitudverbal: "Aptitud Verbal",
	principiosconstitucionales: "Principios y deberes constitucionales",
	gobiernodigital: "Gobierno digital",
	gestion_talento_humano: "Gestión del talento humano",
	seguridad_salud_trabajo: "Seguridad y salud en el trabajo"
};

export const aspectos_generales = [
	{
		id: 1,
		question: '¿Cuál de estos macro procesos NO pertenecen a la DIAN?',
		correct_answer: 'Recaudación y Control Interno',
		incorrect_answers: ['Misionales', 'Estratégicos', 'De apoyo y evaluación'],
		description: '¡¡¡Correcto!!!! '
	},
	{
		id: 2,
		question: 'A partir de la expedición del decreto 4048 del 22 de Octubre de 2008 la DIAN se estructura funcionalmente:',
		correct_answer: 'Con un enfoque por procesos',
		incorrect_answers: ['Con un enfoque por funciones', 'Con un enfoque Social', 'Con un enfoque técnico - Tributario'],
		description: '¡¡¡Correcto!!!!'
	}
	,
	{
		id: 3,
		question: 'El modelo de Gestión Muisca se refiere a:',
		correct_answer: 'Modelo Único de Ingresos, Servicio y Control automatizado.',
		incorrect_answers: ['Modelo Unificado de Intereses Sociales Para el Control Tributario.', 'Modelo Único para el Servicio Tributario, Aduanero y Cambiario.',
			'Modelo Único de Ingresos y Servicios del Control Cambiario.',
		],
		description: '¡¡¡Correcto!!!!'
	}
	,
	{
		id: 4,
		question: '¿Cuáles son las clases de macro procesos que caracterizan a la DIAN?',
		correct_answer: 'Proceso Estratégico, misional, de apoyo y de evaluación y control',
		incorrect_answers: [
			'Proceso Tributario, aduanero y cambiario.',
			'Proceso de Gestión y asistencia, de fiscalización y cobranzas.',
			'Proceso Misional, de apoyo y operativo.',
		],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 5,
		question: 'Gestión Jurídica, es un proceso:',
		correct_answer: 'Proceso Misional.',
		incorrect_answers: ['Proceso de control.', 'Proceso Estratégico.', 'Proceso de apoyo.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 6,
		question: 'Teniendo en cuenta el decreto 2460 de 2013, cuando a un ciudadano se le expide el RUT, la responsabilidad de la información que contiene este registro es de:',
		correct_answer: 'La responsabilidad es de quien lo suscribe.',
		incorrect_answers: ['La responsabilidad es de quien lo emite, en este caso la DIAN.', 'La responsabilidad es compartida; del ciudadano y de la entidad.', 'La responsabilidad no es ni del ciudadano, ni de la entidad.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 7,
		question: '¿Cuál es la naturaleza jurídica de la DIAN?',
		correct_answer: 'La DIAN es una Unidad Administrativa Especial de orden nacional, de carácter eminentemente técnico y especializado, está adscrito al ministerio de hacienda y 	crédito público, presenta autonomía administrativa y presupuestal.',
		incorrect_answers: ['La DIAN es una Unidad Autónoma Nacional, de carácter eminentemente operativo y de recaudo, está adscrita a la Presidencia de la Republica, presenta autonomía administrativa y presupuestal.', 'La DIAN es una Unidad Administrativa Delegada de orden nacional, de carácter eminentemente técnico y especializado, está adscrita al ministerio del Interior,presenta autonomía administrativa y presupuestal.', 'Ninguna de las opciones.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 8,
		question: '¿En qué ciudades tiene jurisdicción la DIAN?',
		correct_answer: 'La jurisdicción de la DIAN es a nivel nacional.',
		incorrect_answers: ['La jurisdicción de la DIAN es solo en las principales ciudades del país.', 'La jurisdicción de la DIAN es internacional.', 'Ninguna de las opciones.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 9,
		question: '¿Cuál es la finalidad de los procesos estratégicos en la DIAN?',
		correct_answer: 'La finalidad es orientar a la entidad para cumplir con su misión, visión, política y los objetivos encaminados a satisfacer las necesidades de sus usuarios.',
		incorrect_answers: ['Proporcionar soporte a las políticas económicas generadas por el gobierno nacional.', 'Proporcionar mecanismos informáticos para el control de los omisos en todas las clases de impuestos.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 10,
		question: 'En cuanto a la misión, la DIAN es responsable de administrar con calidad el cumplimiento de las obligaciones tributarias, aduaneras y cambiarias, mediante:',
		correct_answer: 'El servicio, la fiscalización y el control.',
		incorrect_answers: ['Las operación de control a la evasion y la formalizacion.', 'Las normas que en esta material determine el gobierno nacional.', 'Las operaciones nacionales e internacionales de control.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 11,
		question: '¿De las siguientes, ¿qué información tributaria NO cuenta con el principio de reserva total o parcial?',
		correct_answer: 'Calendarios tributarios.',
		incorrect_answers: ['Declaraciones tributarias', 'Declaraciones aduaneras', 'Expedientes'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 12,
		question: '¿Qué es una zona franca?',
		correct_answer: 'Territorio sobre el cual es aplicado un régimen especial en materia aduanera,cambiaria, comercio exterior, inversión de capitales y adicionalmente aplica beneficios fiscales a la venta de bienes y servicios a mercados externos.',
		incorrect_answers: ['Área geográfica que cuenta con una alta aglomeración de empresas que producen bienes o servicios.', 'Asociación de empresas que prestan servicios o producen bienes similares entre si y que se asocian para beneficiarse entre sí.', 'Área geográfica ubicada a las afueras del país y que es utilizada como puente aéreo para buscar reducir costos en el envío de mercancías.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 13,
		question: '¿Qué se entiende por renta liquida?',
		correct_answer: 'Es el resultado de restar a la renta bruta las deducciones que tengan causalidad con la actividad desarrollada por el contribuyente y que cumplen con los requisitos legales.',
		incorrect_answers: ['Es el resultado de sumar a la renta bruta las deducciones que tengan causalidad con la actividad desarrollada por el contribuyente y que cumplen con los requisitos legales.', 'Es el resultado de restar al patrimonio las deducciones que tengan causalidad con la actividad desarrollada por el contribuyente y que cumplen con los requisitos legales.', 'Es el resultado de sumar a la renta bruta el patrimonio bruto y las ganancias ocasionales obtenidas por el contribuyente y que cumplen con los requisitos legales.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 14,
		question: '¿Qué se entiende por un pasivo?',
		correct_answer: 'Es la representación financiera de una obligación presente del ente económico,ocurrida en eventos pasados, por la cual se reconoce que en el futuro se deberán transferir recursos o proveer servicios a otros entes.',
		incorrect_answers: ['Es el total de ingresos que posee una persona en el periodo fiscal ya sea por su actividad económica permanente o por ganancias ocasionales', 'Es el portafolio completo de inversiones realizadas por un contribuyente, ya sea de inversiones privadas o sociales.', 'Es la cantidad de inventario de cualquier producto, que tiene una salida lenta o pasiva frente al mercado.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 15,
		question: '¿Qué se entiende por ingresos gravados?',
		correct_answer: 'Son ingresos obtenidos por los contribuyentes que generan gravamen a tasas determinadas de acuerdo a lo establecido por la administración de impuestos.',
		incorrect_answers: ['Son ingresos que únicamente provienen de remesas del exterior.', 'Son ingresos que únicamente provienen de loterías y juegos de azar en general y que beneficios tributarios especiales.', 'Son ingresos que únicamente provienen del mercado informal como lo son vendedores ambulantes.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 16,
		question: '¿Qué se entiende por impuesto de ganancia ocasional?',
		correct_answer: 'Es un impuesto de carácter complementario que grava aquellos ingresos que son recibidos en forma esporádica, son obtenidos por azar o por actividades que no hacen parte del giro ordinario de sus negocios.',
		incorrect_answers: ['Es un impuesto que grava los ingresos que se obtienen como resultado de giro ordinario de los negocios del contribuyente.', 'Es el impuesto que grava los ingresos que obtienen los contribuyentes como resultado de remesas y ayudas por parte de otros países.', 'Es un impuesto que grava documentos por transacciones de traslado de bienes inmuebles a ciertos porcentajes.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 17,
		question: '¿Qué se entiende por importación temporal?',
		correct_answer: 'Es la introducción de mercancías al territorio nacional que cuentan con suspensión de tributos aduaneros y que están destinadas a la reexportación en un plazo determinado.',
		incorrect_answers: ['Es el caso en que una persona natural o jurídica decide realizar una importación de mercancía, pero esta acción no vuelve a repetirse.', 'Es cuando la persona natural o jurídica no tiene la capacidad de realizar la importación por sí mismo y decide hacerlo mediante una agencia aduanera quien lo representara temporalmente.', 'Es cuando la mercancía importada no es legalizada en el tiempo estimado para ello y se decide devolver dicha mercancía a su punto de partida.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 18,
		question: 'En una declaración de renta, ¿qué se entiende por causalidad?',
		correct_answer: 'Es el nexo o vinculo que entre los costos y las deducciones guardan con la actividad productora de renta.',
		incorrect_answers: ['Es un estimulo fiscal que consiste en otorgar beneficios para el fomento de inversiones en establecimientos hoteleros.', 'Es la relación que existe entre el patrimonio bruto y la renta liquida originada por ingresos no constitutivos de renta.', 'Es la situación cuando se presenta una declaración de renta sin pago, para posteriormente realizar dicho pago sin intereses moratorios.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 19,
		question: 'En el caso de conformación de las sociedades ¿Que se entiende por la modalidad de escisión?',
		correct_answer: 'Cuando sin necesidad de disolverse, una sociedad transfiere parte de su patrimonio a una o más sociedades existentes o lo hace con el fin de crear una o varias sociedades.',
		incorrect_answers: ['Cuando una sociedad restringe las negociaciones con una sociedad en especial como resultado de malas transacciones.', 'Cuando una sociedad decide congelar sus ventas por motivo de liquidación de la misma.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 20,
		question: 'En el caso de conformación de las sociedades ¿Cuándo se presume un caso de subordinación?',
		correct_answer: 'Cuando más del cincuenta por ciento (50%) del capital pertenezca a la matriz,directamente o por intermedio o con el concurso de sus subordinadas, o de las subordinadas de éstas.',
		incorrect_answers: ['Cuando la forma de contratación a los empleados no brinda los beneficios de ley ni garantice el tiempo al cual puede estar sometido un empleado.', 'Cuando la empresa se encuentra intervenida por la DNE como resultado de la inclusión de dineros de dudosa procedencia.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 21,
		question: 'Según el Artículo 565 del Estatuto Tributario. ¿De las siguientes, cual NO representa una forma de notificación existente para las actuaciones de la administración tributaria?',
		correct_answer: 'Notificación Vos a vos.',
		incorrect_answers: ['Notificación electrónica.', 'Notificación personal.', 'Notificación por correo.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 22,
		question: 'Teniendo en cuenta el Artículo 580 del Estatuto Tributario. ¿De las siguientes,cuál es una causal para dar por no presentada una declaración?',
		correct_answer: 'Cuando no se presente firmada por quien deba cumplir el deber formal de declarar, o cuando se omita la firma del contador público o revisor fiscal existiendo la obligación legal.',
		incorrect_answers: ['Cuando la declaración sea presentada en una ciudad diferente a la cual pertenece su administración.', 'Cuando la declaración haya sido calculada previamente por medio del programa ayuda renta correspondiente.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 23,
		question: '¿Qué documento reemplaza para todos los efectos la declaración del impuesto de renta y complementarios en el caso de las personas asalariadas no declarantes?',
		correct_answer: 'Certificado de ingresos y retenciones.',
		incorrect_answers: ['pasado judicial.', 'Carta laboral expedida por la empresa contratante.', 'Referencias personales firmadas y autenticadas.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 24,
		question: 'Teniendo en cuenta el Articulo 594-2 del Estatuto Tributario. ¿Qué sucede cuando una persona que NO está obligada a declarar, presenta alguna declaración tributaria?',
		correct_answer: 'La declaración no produce efecto legal alguno.',
		incorrect_answers: ['Inmediatamente la persona queda obligada a seguir declarando de acuerdo al impuesto objeto de la declaración.', 'Existe una sanción de cien (100) UVTs', 'Existe una sanción de mil (1.000) UVTs'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 25,
		question: 'Teniendo en cuenta el Artículo 650 del Estatuto Tributario. ¿Cuál es la sanción 	para las personas que hagan uso fraudulento de cedulas?',
		correct_answer: 'Será denunciado como autor de fraude procesal.',
		incorrect_answers: ['Será sancionado con diez (10) UVTs', 'Será sancionado con mil (1.000) UVTs', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 26,
		question: 'Es un impuesto directo, que recae sobre los contribuyentes individualmente considerados y grava a quienes en la ley están previstos como sujetos pasivos que hayan percibido ingresos - hecho generador del impuesto - susceptibles de producir un incremento neto de patrimonio',
		correct_answer: 'Impuesto de Renta.',
		incorrect_answers: ['Impuesto al Patrimonio.', 'Impuesto de Valorización.', 'Retención en la fuente.'],
		description: '¡¡¡Correcto!!!'
	},
	{
		id: 27,
		question: '¿Cuál es la sanción impuesta para los contribuyentes que no expidan factura o documento equivalente estando obligado a ello?',
		correct_answer: 'Se aplicara clausura por tres (3) días del sitio o sede respectiva del contribuyente.',
		incorrect_answers: ['La sanción equivaldrá a cien (100) UVTs', 'Se le cancelara automáticamente la Inscripción en el Registro Único Tributario', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 28,
		question: '¿Qué entidad es la encargada de llevar a cabo las sanciones a contadores públicos, auditores o revisores fiscales?',
		correct_answer: 'Junta central de contadores.',
		incorrect_answers: ['Ministerio del Interior.', 'DIAN', 'Ministerio de protección social.'],
		description: '¡¡¡Correcto!!!!'

	},
	{
		id: 29,
		question: '¿Cuál de las siguientes NO es catalogada como una operación de Cambios?',
		correct_answer: 'Prestación de servicios médicos dentro del territorio nacional.',
		incorrect_answers: ['Inversiones Colombianas en el exterior.', 'Inversiones de capitales del Exterior en el país.', 'Importaciones y exportaciones de bienes y servicios.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 30,
		question: '¿Qué es la balanza comercial?',
		correct_answer: 'Es la variable de medición que refleja la diferencia entre las exportaciones e importaciones realizadas por un país en periodos determinados.',
		incorrect_answers: ['Es la cuenta del sector externo donde se registran las transacciones económicas de un país con el exterior.', 'Es el punto máximo y mínimo al cual puede llegar la inflación en un país.', 'Es el sistema por el cual los países de manera unilateral o en el marco de acuerdos comerciales plurilaterales resuelven eliminar en un periodo de tiempo sus tarifas aduaneras.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 31,
		question: '¿Qué es la balanza de pagos?',
		correct_answer: 'Cuenta externa expresada en dólares, donde se registran las transacciones económicas de un país con el exterior.',
		incorrect_answers: ['Es la variable por la cual los países de manera unilateral o en el marco de acuerdos comerciales plurilaterales resuelven eliminar en un periodo de tiempo sus tarifas aduaneras.', 'Máximo y mínimo al cual puede llegar la inflación en un país.', 'Es la variable de medición que refleja la diferencia entre las exportaciones e importaciones realizadas por un país en periodos determinados.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 32,
		question: '¿En qué caso existe superávit en la balanza comercial?',
		correct_answer: 'Cuando en un país, el valor de las exportaciones es mayor que el valor de las importaciones.',
		incorrect_answers: ['Cuando en un país, el valor de las importaciones es mayor que el valor de las exportaciones.', 'Cuando en un país el valor de las exportaciones es igual al valor de las importaciones.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 33,
		question: '¿En qué caso existe déficit en la balanza comercial?',
		correct_answer: 'Cuando en un país, el valor de las importaciones es mayor que el valor de las exportaciones.',
		incorrect_answers: ['Cuando en un país, el valor de las exportaciones es mayor que el valor de las importaciones.', 'Cuando en un país el valor de las exportaciones es igual al valor de las importaciones.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 34,
		question: '¿Qué se entiende por desmonte arancelario?',
		correct_answer: 'Se refiere a la reducción gradual de las tarifas aduaneras y barreras no arancelarias en un periodo de tiempo determinado, con el fin de posibilitar el libre comercio de bienes y servicios entre países.',
		incorrect_answers: ['Es la exención total o parcial del pago de los derechos e impuestos a la importación y/o exportación aplicables a las mercancías que entran o salen del territorio aduanero.', 'Se refiere a las devoluciones aduaneras que se hacen efectivas en cada declaración de importación o exportación con el fin de cruzar valores y desmontar aranceles.', 'Ninguna de las opciones.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 35,
		question: '¿Qué se entiende por enclave?',
		correct_answer: 'Parte del territorio de un país, donde no se aplican las disposiciones aduaneras o se permite la aplicación de disposiciones aduaneras de otro país.',
		incorrect_answers: ['Es la exención total o parcial del pago de los derechos e impuestos a la importación y/o exportación aplicables a las mercancías que entran o salen del territorio aduanero.', 'Es la variable de medición que refleja la diferencia entre las exportaciones e importaciones realizadas por un país en periodos determinados.', 'Es la cuenta del sector externo donde se registran las transacciones económicas de un país con el exterior.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 36,
		question: '¿Qué se entiende por franquicia aduanera?',
		correct_answer: 'Es cuando se otorga exención total o parcial del pago de los derechos e impuestos a la importación y/o exportación aplicables a las mercaderías que entran o salen del territorio aduanero.',
		incorrect_answers: ['Es cuando la Administración de Aduanas, delega a otra entidad la tarea de fiscalizar y recaudar los tributos aduaneros en calidad de franquicia.', 'Es una especie de sistema prepago que adquieren las empresas altamente exportadoras con el fin de pagar anticipadamente el valor de sus transacciones aduaneras con descuentos especiales.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 37,
		question: '¿Qué se entiende por transito aduanero?',
		correct_answer: 'Es la modalidad que permite el transporte terrestre de mercancías nacionales o de procedencia extranjera, bajo control aduanero, de una Aduana a otra situadas en el territorio aduanero nacional.',
		incorrect_answers: ['Es la modalidad que permite a un usuario aduanero sacar rápidamente las mercancías del territorio nacional, sin que estas requieran ser inspeccionadas por la autoridad aduanera.', 'Es la modalidad que permite la legalización de mercancías que ingresan al territorio nacional de una manera rápida y sin necesidad de inspección por parte de las autoridades aduaneras.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 38,
		question: 'Las iglesias católicas, están obligadas a presentar:',
		correct_answer: 'Declaración de Ingresos y Patrimonio.',
		incorrect_answers: ['Declaración de renta ordinaria.', 'Declaración de renta especial.', 'Declaración de bienes y rentas.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 39,
		question: '¿Qué se entiende por activos fijos o inmovilizados?',
		correct_answer: 'Bienes corporales muebles o inmuebles y los incorporales que no se enajenen dentro del giro ordinario de los negocios del contribuyente.',
		incorrect_answers: ['Bienes corporales mueble o inmuebles que se enajenen dentro del giro ordinario de los negocios del contribuyente.', 'Bienes incorporales que se enajenen dentro del giro ordinario de los negocios del contribuyente.', 'Bienes muebles o inmuebles que hayan sido donados dentro del año fiscal objeto de la declaración.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 40,
		question: '¿Qué se entiende por activos depreciables?',
		correct_answer: 'Los activos fijos tangibles que no sean amortizables, con excepción de los terrenos.',
		incorrect_answers: ['Los activos fijos intangibles que no sean amortizables, con excepción de los terrenos.', 'Los activos fijos tangibles que no sean amortizables, con excepción de los vehículos', 'Los terrenos y los activos intangibles, además de los bienes respecto de los cuales se enajeno el derecho de usufructo'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 41,
		question: '¿Qué se entiende por pasivos en una declaración de renta?',
		correct_answer: 'Las obligaciones a cargo del contribuyente vigentes a 31 de diciembre del año gravable que afecten el patrimonio bruto del contribuyente.',
		incorrect_answers: ['Las inversiones realizadas dentro del año gravable.', 'El ahorro realizado con corte a 31 de diciembre del año gravable.', 'Los giros del exterior que ha recibido el contribuyente durante el año gravable a declarar.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 42,
		question: 'En cuanto a las ventas de bienes o servicios, ¿Cuál es el momento de causación del IVA?',
		correct_answer: 'En la fecha de emisión de la factura o documento equivalente.',
		incorrect_answers: ['Cuando el usuario del bien o servicio quede satisfecho con el mismo.', 'Cuando el cliente del bien o servicio muestre interés por el mismo, sin que haya comprado el bien o servicio', 'Cuando se haga uso de la garantía del bien o servicio.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 43,
		question: 'En el caso de bienes importados ¿En qué momento se causará el IVA?',
		correct_answer: 'Al momento de nacionalizar el bien importado.',
		incorrect_answers: ['En el momento cuando es embarcada la mercancía desde su punto de partida.', 'Al momento de realizar el trato o negocio de importación.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 44,
		question: '¿Qué se entiende por IVA?',
		correct_answer: 'Es un gravamen que recae sobre el consumo de bienes, servicios y explotación de juegos de suerte y azar.',
		incorrect_answers: ['Es un impuesto que tiene por objeto obtener en forma gradual el recaudo sobre documentos que constituyen valor.', 'Es un mecanismo anticipado de recaudo del impuesto sobre la renta.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 45,
		question: '¿Cuál es la diferencia entre bienes exentos del IVA y bienes excluidos del IVA?',
		correct_answer: 'Los bienes exentos si están sometidos al impuesto de IVA a la tarifa 0% y los excluidos simplemente no están sometidos al impuesto.',
		incorrect_answers: ['Los bienes excluidos si están sometidos al impuesto de IVA a la tarifa 0% y los exentos simplemente no están sometidos al impuesto.', 'No existe diferencia', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 46,
		question: '¿Un comerciante que introduce mercancías de procedencia extranjera al territorio Aduanero Nacional, a que régimen debe pertenecer?',
		correct_answer: 'Régimen Común.',
		incorrect_answers: ['Régimen simplificado.', 'Régimen sancionatorio.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 47,
		question: '¿Cuál es la finalidad de la retención en la fuente?',
		correct_answer: 'Su finalidad es que el impuesto se recaude, en el momento en que se cause.',
		incorrect_answers: ['Su finalidad es otorgar beneficios tributarios como descuentos, exenciones para quienes están obligados.', 'Su finalidad es gravar las ganancias ocasionales y las remesas del exterior, que son las que más evasión generan.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 48,
		question: '¿Qué se entiende por aduana de partida?',
		correct_answer: 'Es aquella donde se inicia legalmente un tránsito aduanero.',
		incorrect_answers: ['Es el punto de partida donde las mercancías obtienen su código de barras para poder ser comercializada.', 'Es una partida arancelaria que tiene beneficios para el ente exportador.', 'Es un ítem que contiene la declaración de exportación.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 49,
		question: '¿Qué se entiende por abandono legal?',
		correct_answer: 'Situación en que se encuentra una mercancía cuando vencido el término de permanencia en depósito no ha obtenido su levante o no se ha reembarcado.',
		incorrect_answers: ['Es el acto mediante el cual quien tiene derecho a disponer de la mercancía comunica por escrito a la autoridad aduanera que la deja a favor de la Nación en forma total o parcial.', 'Es una medida cautelar consistente en la retención de mercancías respecto de las cuales se configure alguno de los eventos previstos en el Artículo 502 de decreto 2685.', 'Son aquellas mercancías que un viajero importa o exporta para desarrollar las actividades inherentes a su oficio, profesión, actividad artística o deportiva.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 50,
		question: 'De las siguientes ¿Cuál NO es una modalidad de importación?',
		correct_answer: 'Importación chárter.',
		incorrect_answers: ['Importación ordinaria.', 'Entregas urgentes.', 'Viajeros.'],
		description: '¡¡¡Correcto!!!!'

	},

	{
		id: 51,
		question: '¿De las siguientes, cual NO es una modalidad de Exportación?',
		correct_answer: 'Exportación contractual.',
		incorrect_answers: ['Reembarque.', 'Exportación de menajes.', 'Exportación definitiva.'],
		description: '¡¡¡Correcto!!!!'

	},
	{
		id: 52,
		question: '¿Cómo está conformado el Mercado Cambiario?',
		correct_answer: 'Está conformado por la totalidad de las divisas que deben ser canalizadas a través de los intermediarios autorizados para este efecto o a través del mecanismo de compensación.',
		incorrect_answers: ['Está conformado por la totalidad de impuestos de orden nacional sobre los cuales debe ejercer control la DIAN.', 'Está conformado por la totalidad de la producción generada en el territorio nacional en relación al PIB.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 53,
		question: 'De las siguientes entidades ¿Cuál NO es un intermediario del mercado cambiario?',
		correct_answer: 'Fondo internacional para el desarrollo exportador.',
		incorrect_answers: ['Bancos comerciales.', 'Corporaciones financieras.', 'Banco de comercio exterior de Colombia.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 54,
		question: '¿Cuál de las siguientes NO es una operación autorizada por el banco de la republica para los intermediarios del mercado cambiario?',
		correct_answer: 'Emitir tasas de especulación de acuerdo a estadísticas propias para ser tomadas y aplicadas por el mercado cambiario en general.',
		incorrect_answers: ['Realizar operaciones activas de crédito en moneda extranjera expresamente autorizadas en un plazo igual o inferior al de la financiación obtenida.', 'Respaldar obligaciones de residentes en el exterior.', 'Enviar o recibir pagos en moneda extranjera y efectuar remesas de divisas desde o hacia el exterior y realizar gestiones de cobro servicios bancarios similare'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 55,
		question: '¿Qué se entiende por contratos de empréstito?',
		correct_answer: 'Son aquellos que tienen por objeto proveer a la entidad estatal contratante de recursos en moneda nacional o extranjera con plazo para su pago.',
		incorrect_answers: ['Son aquellos que tienen por objeto proveer exclusivamente servicios de asesoramiento empresarial y en materia de gestión.', 'Son aquellos que tienen por objeto realizar una intermediación en cuando a los trámites que se deben realizar para exportar o importar bienes o servicios.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 56,
		question: 'La firma electronica de la DIAN se emite a nombre de:',
		correct_answer: 'Personas naturales que actúan a nombre propio y a nombre de personas jurídicas.',
		incorrect_answers: ['Personas jurídicas.', 'Personas jurídicas que actúan a nombre de personas naturales.', 'Únicamente para grandes contribuyentes.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 57,
		question: '¿De los siguientes cual NO representa un procedimiento valido para el RUT?',
		correct_answer: 'Escisión.',
		incorrect_answers: ['Inscripción.', 'Actualización.', 'Cancelación o cese de responsabilidades.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 58,
		question: '¿Cuándo se debe actualizar el Registro Único Tributario?',
		correct_answer: 'Cuando existan cambios a realizar, puesto que este registro no tiene vencimiento.',
		incorrect_answers: ['Cada año puesto que este registro vence anualmente.', 'Cada dos (2) años cancelando la suma de 10 UVTs.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 59,
		question: 'En el caso de personas naturales ¿Cuándo se cancela el Registro Único Tributario?',
		correct_answer: 'En el caso de fallecimiento de la persona natural, en el momento cuando se liquide la sucesión cuando a ello hubiere lugar.',
		incorrect_answers: ['Cuando la persona natural decida terminar sus actividades mercantiles.', 'Cuando la persona deje de ejercer actividades como prestador de servicios y se convierta en asalariado.', 'Niguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 60,
		question: '¿Las fuentes de salvaguardia del derecho procedimental tributario se refieren a:',
		correct_answer: 'Esta clase de fuente no existe.',
		incorrect_answers: ['La jurisprudencia, la costumbre, la doctrina y los principios generales del derecho.', 'La constitución y las leyes que regulan el procedimiento.', 'Los decretos reglamentarios expedidos por el gobierno nacional.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 61,
		question: 'Las fuentes directas del derecho procedimental tributario se refieren a:',
		correct_answer: 'La constitución y las leyes que regulan el procedimiento.',
		incorrect_answers: ['La jurisprudencia, la costumbre, la doctrina y los principios generales del derecho.', 'Esta clase de fuente no existe.', 'Los decretos reglamentarios expedidos por el gobierno nacional.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 62,
		question: 'Las fuentes indirectas del derecho procedimental tributario de refieren a:',
		correct_answer: 'La jurisprudencia, la costumbre, la doctrina y los principios generales del derecho.',
		incorrect_answers: ['La constitución y las leyes que regulan el procedimiento.', 'Esta clase de fuente no existe.', 'Los decretos reglamentarios expedidos por el gobierno nacional.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 63,
		question: 'Nuestra constitución política está fundamentada en:',
		correct_answer: 'El estado social de derecho.',
		incorrect_answers: ['Las normas de convivencia ciudadana.', 'El estado social Bolivariano.', 'Niguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 64,
		question: 'Las leyes pueden definirse como preceptos dictados por la autoridad competente. ¿En Colombia quien elabora las leyes?',
		correct_answer: 'Es elaborada a través de la función legislativa (Congreso de la republica).',
		incorrect_answers: ['Es elaborada a través de la función pública.', 'Es elaborada a través de la función judicial.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 65,
		question: 'De las siguientes ¿Cuál NO representa una de las características que cumplen las leyes en Colombia?',
		correct_answer: 'No tienen validez si el ciudadano manifiesta desconocer la ley prevista.',
		incorrect_answers: ['Las leyes son de estricta obligatoriedad.', 'Son generales, esto quiere decir que cobijan a todas las personas.', 'No están hechas para regir casos individuales ni ciertas personas determinadas.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 66,
		question: '¿De los siguientes, cual NO representa un principio del Derecho Procesal Tributario?',
		correct_answer: 'Principio de lealtad.',
		incorrect_answers: ['Principio de equidad.', 'Principio de progresividad.', 'Principio de eficiencia.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 67,
		question: '¿A que hace referencia el Principio de Progresividad?',
		correct_answer: 'Hace referencia al reparto de las cargas tributarias, entre mas se tiene más se tributa.',
		incorrect_answers: ['Hace referencia al progreso de la nación como resultado del pago d impuestos y al buen manejo de los recursos.', 'No existe el principio de progresividad.', 'Ninuna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 68,
		question: 'Los emplazamientos, requerimientos, liquidaciones oficiales y demás actos administrativos proferidos por la Administración de Impuestos, podrán referirse:',
		correct_answer: 'A varios periodos gravables en el caso de las declaraciones del impuesto sobre las ventas y retenciones en la fuente.',
		incorrect_answers: ['A un solo periodo gravable en el caso de las declaraciones del impuesto sobre las ventas y retenciones en la fuente.', 'A un solo periodo gravable y en el caso de ser varios periodos, deben enviar varios emplazamientos, requerimientos o liquidaciones oficiales.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 69,
		question: '¿Un requerimiento y una liquidación pueden referirse al mismo tiempo al impuesto de renta y al impuesto de ventas?',
		correct_answer: 'Si podrán determinarse oficialmente los dos (2) tributos, en cuyo caso el fallo del recurso comprenderá uno y otro.',
		incorrect_answers: ['No podrán determinarse oficialmente los dos (2) tributos, debido a que el fallo del recurso no podrá comprender uno y otro.', 'No podrán determinarse oficialmente los dos (2) tributos, ya que se declarara inexequible el requerimiento.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 70,
		question: 'Según el Artículo 729 del Estatuto Tributario. Los expedientes de recursos solo podrán ser examinados por:',
		correct_answer: 'Todas las opciones',
		incorrect_answers: ['El contribuyente.', 'Un apoderado legalmente constituido por el contribuyente.', 'Un abogado autorizado mediante memorial presentado personalmente por el contribuyente.'],
		description: '¡¡¡Correcto!!!!'
	},

	{
		id: 71,
		question: 'Según el Artículo 738 del Estatuto Tributario. ¿Quién tiene la competencia para fallar las solicitudes de revocatoria directa?',
		correct_answer: 'El Administrador de impuestos nacionales respectivo o su delegado.',
		incorrect_answers: ['Quien notifica el acto respectivo.', 'El sustanciador del caso.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 72,
		question: '¿Qué se entiende por reimportación por perfeccionamiento pasivo?',
		correct_answer: 'Es la reimportación de mercancía exportada temporalmente para elaboración, reparación o transformación, causará tributos aduaneros sobre el valor agregado en el exterior, incluidos los gastos complementarios a dichas operaciones, para lo cual se aplicarán las tarifas correspondientes a la subpartida arancelaria del producto terminado que se importa. La mercancía así importada quedará en libre disposición.',
		incorrect_answers: ['Es la situación en la cual se podrá importar sin el pago de los tributos aduaneros, la mercancía exportada temporal o definitivamente que se encuentre en libre disposición, siempre que no haya sufrido modificación en el extranjero y se establezca plenamente que la mercancía que se reimporta es la misma que fue exportada y que se hayan cancelado los impuestos internos exonerados y reintegrado los beneficios obtenidos con la exportación. La mercancía así importada quedará en libre disposición.', 'Es la situación en la cual se podrá importar sin el pago de tributos aduaneros, la mercancía que en cumplimiento de una garantía del fabricante o proveedor, se haya reparado en el exterior, o reemplace otra previamente exportada, que haya resultado averiada, defectuosa o impropia para el fin para el cual fue importada. La mercancía así importada quedará en libre disposición.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 73,
		question: '¿Qué se entiende por la modalidad de Importación Temporal para procesamiento Industrial?',
		correct_answer: 'Es la modalidad bajo la cual se importan temporalmente materias primas e insumos que van a ser sometidos a transformación, procesamiento o manufactura industrial, por parte de industrias reconocidas como Usuarios Altamente Exportadores y autorizadas para el efecto por la autoridad aduanera, y con base en la cual su disposición quedará restringida.',
		incorrect_answers: ['Es la modalidad bajo la cual se importan mercancías que van a ser sometidas a procesos de transformación o ensamble, por parte de industrias reconocidas como tales por la autoridad competente, y autorizadas para el efecto por la Dirección de Impuestos y Aduanas Nacionales, y con base en la cual su disposición quedará restringida.', 'Es la modalidad bajo la cual se importan permanentemente materias primas e insumos que van a ser sometidos a transformación, procesamiento o manufactura industrial, por parte de industrias reconocidas como Usuarios Altamente Exportadores y autorizadas para el efecto por la autoridad aduanera, y con base en la cual su disposición quedará restringida.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 74,
		question: '¿Qué se entiende por la modalidad de Importación para transformación o ensamble?',
		correct_answer: 'Es la modalidad bajo la cual se importan mercancías que van a ser sometidas a procesos de transformación o ensamble, por parte de industrias reconocidas como tales por la autoridad competente, y autorizadas para el efecto por la Dirección de Impuestos y Aduanas Nacionales, y con base en la cual su disposición quedará restringida.',
		incorrect_answers: ['Es la modalidad bajo la cual se importan permanentemente materias primas e insumos que van a ser sometidos a transformación, procesamiento o manufactura industrial, por parte de industrias reconocidas como Usuarios Altamente Exportadores y autorizadas para el efecto por la autoridad aduanera, y con base en la cual su disposición quedará restringida.', 'Es la modalidad bajo la cual se importan temporalmente materias primas e insumos que van a ser sometidos a transformación, procesamiento o manufactura industrial, por parte de industrias reconocidas como Usuarios Altamente Exportadores y autorizadas para el efecto por la autoridad aduanera, y con base en la cual su disposición quedará restringida.', 'Ninguna de las opciones.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 75,
		question: '¿De las siguientes, cual NO es una modalidad de Exportación?',
		correct_answer: 'Exportación contractual.',
		incorrect_answers: ['Reembarque.', 'Exportación de menajes.', 'Exportación definitiva.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 76,
		question: '¿Qué se entiende por exportación temporal para perfeccionamiento pasivo?',
		correct_answer: 'Es la modalidad de exportación que regula la salida temporal de mercancías nacionales o nacionalizadas, del territorio aduanero nacional, para ser sometidas a transformación, elaboración o reparación en el exterior o en una zona franca, debiendo ser reimportadas dentro del plazo señalado en la declaración de exportación correspondiente, prorrogables por un año más.',
		incorrect_answers: ['Es la modalidad de exportación que regula la salida permanente de mercancías nacionales o nacionalizadas, del territorio aduanero nacional, para ser sometidas a transformación, elaboración o reparación en el exterior o en una zona franca, debiendo ser exportadas dentro del plazo señalado en la declaración de exportación correspondiente, prorrogables por un año más.', 'Es la modalidad de exportación que regula la salida de mercancías nacionales o nacionalizadas, del territorio aduanero nacional para su uso o consumo definitivo en otro país.', 'Es la modalidad de exportación que regula la salida de mercancías nacionales o nacionalizadas, del territorio aduanero nacional para su uso o consumo temporal en otro país.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 77,
		question: '¿Qué se entiende por transito aduanero?',
		correct_answer: 'Es la modalidad que permite el transporte terrestre de mercancías nacionales o de procedencia extranjera, bajo control aduanero, de una Aduana a otra situadas en el territorio aduanero nacional.',
		incorrect_answers: ['Es la modalidad que permite a un usuario aduanero sacar rápidamente las mercancías del territorio nacional, sin que estas requieran ser inspeccionadas por la autoridad aduanera.', 'Es la modalidad que permite la legalización de mercancías que ingresan al territorio nacional de una manera rápida y sin necesidad de inspección por parte de las autoridades aduaneras.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 78,
		question: '¿Qué se entiende por política cambiaria?',
		correct_answer: 'Se refiere a la intervención del Estado sobre las diversas materias económicas, con el propósito de obtener determinados resultados en la balanza de pagos, teniendo en cuenta variables como la tasa de cambio, el movimiento de capital entre otras.',
		incorrect_answers: ['Es la política que regula la creación y estandarización de las empresas en el territorio nacional, tiene en cuenta variables como la responsabilidad de los socios gestores, los tipos de fusión entre otros.', 'Es la política que regula el movimiento económico en lo referente a los juegos de azar y las apuestas en establecimientos autorizados para tal fin.', 'Ninguna de las opciones'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 79,
		question: '¿Cuál de las siguientes NO es catalogada como una operación de Cambios?',
		correct_answer: 'Prestación de servicios médicos dentro del territorio nacional.',
		incorrect_answers: ['Inversiones Colombianas en el exterior.', 'Inversiones de capitales del Exterior en el país.', 'Importaciones y exportaciones de bienes y servicios.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 80,
		question: 'Según el Artículo 701 del Estatuto Tributario. Cuando el contribuyente, responsable, agente retenedor o declarante, no hubiere liquidado en su declaración las sanciones a que estuviere obligado o las hubiere liquidado incorrectamente la Administración las liquidará:',
		correct_answer: 'Las liquidara incrementadas en un treinta por ciento (30%). Cuando la sanción se imponga mediante resolución independiente procede el recurso de reconsideración.',
		incorrect_answers: ['Las liquidara sin incremento. Cuando la sanción se imponga mediante resolución independiente procede el recurso de reconsideración.', 'Las liquidara incrementadas en un diez por ciento (10%). Cuando la sanción se imponga mediante resolución independiente no procede el recurso de reconsideración.', 'Las liquidara sin incremento. Cuando la sanción se imponga mediante resolución independiente no procede el recurso de reconsideración.'],
		description: '¡¡¡Correcto!!!!'
	}

]


export const conceptos_generales_DIAN = [
	{
		id: 1,
		question: 'El “Supuesto Jurídico”, está condicionado al surgimiento, manifestación o materialización del deber que impone la norma, pues se halla subordinado a que en la vida real se:',
		correct_answer: 'Materialicen o no, los supuestos de hecho que contempla la norma, junto con los ingredientes que ella dispone.',
		incorrect_answers: ['Implanten de hecho dentro de los conceptos básicos y normativas de los deberes que la norma impone.', 'Presenten dentro del legislativo, mostrando en detalle el entendimiento de la norma.', 'Creen en los espacios de entendimiento de la norma, la facilidad particular de ser clara para el ciudadano del común.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 2,
		question: 'La imposición de deberes entendidos como supuesto de hecho y su realización trae consigo la “consecuencia”;  por regla general la imposición de un deber, estará acompañado de:',
		correct_answer: 'El reconocimiento correlativo de un derecho.',
		incorrect_answers: ['Los sistemas básicos de la norma general.', 'Los recursos interpuestos para dar claridad a la norma.', 'La necesidad de entender la norma dentro de un proceso jurídico.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 3,
		question: 'En el Derecho Tributario, el supuesto de hecho es de naturaleza económica, comúnmente denominado como el “hecho generador” y su consecuencia jurídica se traduce en:',
		correct_answer: 'La transferencia de dinero a favor del Estado, a través de la liquidación y pago de impuestos.',
		incorrect_answers: ['Las consecuencias expuestas dentro de la conservación de la norma.', 'Los principios jurídicos que puedan surgir del hecho de la creación de la norma en cada proceso.', 'Generación de nuevas propuestas que beneficien el área normativa.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 4,
		question: 'Para que surja la obligación de pagar un impuesto, será necesario entonces:',
		correct_answer: 'Verificar que se produzca el hecho generador, contemplado en el ordenamiento jurídico.',
		incorrect_answers: ['Verificar las objeciones de la norma y las propuestas básicas que de esta obligación se tenga.', 'Proponer de manera clara y dentro de la norma, el ofrecimiento legal de exigencia del pago de esta obligación.', 'Proporcionar las bases que ameriten de forma clara y legal el pago de la obligación.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 5,
		question: 'La facultad que tiene el Estado para establecer tributos como manifestación omnímoda, unilateral y de poder soberano es llamado:',
		correct_answer: 'Poder de imposición.',
		incorrect_answers: ['Poder de normalización.', 'Control de pagos.', 'Manejo de normalización de impuestos nacionales.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 6,
		question: 'Para la expedición de una norma fiscal, la facultad de crear un impuesto radica únicamente en el órgano legislativo investido para ello, mediante:',
		correct_answer: 'La expedición de una ley con estricto apego a las reglas de la Constitución Política fija.',
		incorrect_answers: ['Las resoluciones tomadas por diferentes órganos del Control del Estado, que tienen dentro de sus funciones el control de los impuestos nacionales.', 'Un decreto fijado por la Presidencia de la Republica, estipulando las entidades a cargo de los recaudos de los impuestos.', 'Las diferentes entidades encargadas de los presupuestos nacionales.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 7,
		question: 'En materia tributaria, el principio que se orienta a imponer cargas y otorgar beneficios sin distingos, de manera que todos los contribuyentes paguen o se beneficien, es llamado:',
		correct_answer: 'Equidad.',
		incorrect_answers: ['Eficacia.', 'Moralidad.', 'Buena Fe.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 8,
		question: 'El tema de la prueba se define a partir de los hechos, circunstancias y requisitos que la norma señala como necesarios, para acreditar:',
		correct_answer: 'La existencia de un derecho o la configuración de una obligación.',
		incorrect_answers: ['La normatividad que pueda existir dentro de determinadas investigaciones en caso de corrupción.', 'El derecho de la entidad a dar una conclusión basada en las investigaciones y no en los señalamientos de terceros influyentes en el caso.', 'Las diferentes situaciones esclareciendo los hechos de cada caso y el proceso a seguir para su investigación.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 9,
		question: 'Para obtener los mejores resultados en la etapa probatoria, es preciso identificar:',
		correct_answer: 'Los hechos a probar, los medios de prueba conducentes y por ultimo verificar si las pruebas obtenidas soportan los hechos que se pretenden probar.',
		incorrect_answers: ['Los temas sobre los cuales se hará la investigación y la comprobación de la normatividad en la ejecución de los hechos a investigar.', 'La calidad de los procesos del funcionario responsable del caso y su verificación de documentación para conclusión del caso investigado.', 'La trazabilidad realizada y la importancia dada al caso desde su detección por la entidad encargada.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 10,
		question: 'La potestad de investigación con la que cuenta la DIAN, se materializa en acciones tendientes a verificar el cumplimiento de la normatividad fiscal, las cuales se decantan en:',
		correct_answer: 'Los procedimientos establecidos para el efecto.',
		incorrect_answers: ['La normatividad ejecutoria de cada proceso.', 'La calidad del funcionario responsable del caso.', 'El tiempo que lleven las investigaciones de cada caso.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 11,
		question: 'Las determinaciones de la DIAN deben fundamentarse en las demostraciones aportadas al proceso, bien por las oficinas de impuestos o por los contribuyentes, utilizando:',
		correct_answer: 'Los medios de pruebas señalados en las leyes de contenido fiscal o en el código de procedimiento civil en cuanto sea compatible con los impuestos.',
		incorrect_answers: ['Las diferentes opciones de presentación de pruebas las cuales pueden darse físicas o por medio de información que lleve a recolectarlas.', 'El manejo de la normatividad en ejecución de la calidad de la presentación de las investigaciones expuesta por el funcionario responsable del caso.', 'La relación entre entidades del gobierno en la aclaración de los temas a investigar.'],
		description: '¡¡¡Correcto!!!!'
	},

	{
		id: 12,
		question: 'La inobservancia del contenido normativo, el incumplimiento o la inejecución de la conducta que la misma contempla, permite al Estado por conducto de la autoridad pública, imponer:',
		correct_answer: 'Una consecuencia adversa al infractor, traducida por regla general en una sanción.',
		incorrect_answers: ['Los derechos que la norma especifica.', 'Los procesos legislativos y ejecutarlos en la interposición de la norma.', 'Claridad sobre cualquier actividad donde se integre la norma.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 13,
		question: 'La potestad tributaria por regla general, informa que el poder de imposición se confiere en la Constitución Política a la institución parlamentaria o a las corporaciones de orden territorial de elección popular, el cual debe:',
		correct_answer: 'Ser ejercido conforme a las reglas que ella misma establece.',
		incorrect_answers: ['Proporcionar de manera clara ante el Estado los compromisos de pagos de impuestos que exige la norma.', 'Controlar las entidades encargadas del recaudo de los impuestos a nivel Nacional.', 'Relacionar ante el Estado la lista de compromisos que adquieren las entidades encargadas del manejo de los impuestos.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 14,
		question: 'Para expedir leyes de contenido fiscal según la Constitución Política, el Congreso de la Republica debe agotar un procedimiento especial; así las leyes pueden tener origen en cualquiera de las Cámaras a propuesta de sus respectivos miembros, del Gobierno Nacional o por iniciativa popular en casos específicos. Sin embargo, cuando se trata de leyes relacionadas con las rentas nacionales, la iniciativa debe ser:',
		correct_answer: 'Gubernamental e iniciar su trámite en la Cámara de Representantes.',
		incorrect_answers: ['Basada en las propuestas generadas por la norma en los numerales que citen las obligaciones de pago de los impuestos.', 'Una propuesta hecha desde las instituciones del gobierno que tienen el deber de realizar el control y recaudo de cada uno de los impuestos a nivel nacional.', 'Creada desde la entidad con más poder monetario a nivel nacional como lo es el Banco de la Republica.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 15,
		question: 'El “principio de legalidad del tributo”, históricamente concebida como una protección para los contribuyentes frente a los regímenes monárquicos absolutistas y que con la evolución de los sistemas políticos, ha pasado a ser un derecho del ciudadano, es una garantía en sentido que:',
		correct_answer: 'El destinatario de la norma que lo contempla, deberá pagar únicamente los impuestos establecidos mediante una ley adoptada por el congreso el cual es un órgano de representación popular.',
		incorrect_answers: ['El contribuyente tendrá un tiempo determinado dentro de la normatividad establecida para el cumplimiento de la obligación del impuesto que deba pagar dentro de los requisitos establecidos por las entidades del gobierno.', 'Será un pago que se efectúe a nivel nacional y para todos los contribuyentes que de una forma determinada posean representativamente alguna posesión que deba ser registraba o gravada en los impuestos nacionales.', 'Es una normatividad establecida a nivel nacional sin distinción alguna.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 16,
		question: 'El ejercicio de la potestad reglamentaria, no autoriza al ejecutivo para completar la norma en los elementos estructurales de la misma, so pena de ser calificado y sancionado con la inconstitucionalidad. Por tanto, es necesario que la ley determine:',
		correct_answer: 'Todos los elementos que configuran el tributo en forma inteligible, sin que ello signifique que se establezcan todos los detalles que en la práctica sean necesarios.',
		incorrect_answers: ['Los procesos que ante las diferentes entidades del gobierno se establezcan dentro de los marcos constitucionales presentados para los pagos de los tributos a nivel nacional.', 'La creación de las normatividades presentadas para cada impuesto y el registro de estos a nivel nacional, dentro de la aprobación del Congreso y la repartición de las labores de cobro en las entidades gubernamentales.', 'La presentación de los impuestos que se deben pagar determinando los procesos de cobros, montos, reglamentación y descripción de los pasos a seguir para su respectivo pago.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 17,
		question: 'El Congreso de la Republica, debe dictar normas generales, y señalar en ellas los objetivos y criterios a los cuales debe sujetarse el gobierno para regular el comercio exterior y modificar por razones de política comercial a:',
		correct_answer: 'Los aranceles, tarifas y demás disposiciones concernientes al régimen de aduanas.',
		incorrect_answers: ['Los impuestos involucrados por las ventas realizadas de artículos que por su exclusividad deben ser importados al país.', 'Los convenios de comercio entre países específicos de donde se traen en sistema de importación artículos que también son de comercio nacional, con probabilidades de oxigenar el comercio nacional y darle oportunidades al comprador.', 'Los compradores e importadores de los diversos productos del exterior.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 18,
		question: 'Corresponde al ejecutivo asegurar el bienestar de todos los ciudadanos y el orden público económico en el país, en este contexto la facultad constitucional de promulgar las normas respecto del manejo de la política monetaria y cambiaria, corresponde a:',
		correct_answer: 'La Junta Directiva del Banco de la Republica como máxima autoridad y al Banco el poder de reglamentar su aplicación.',
		incorrect_answers: ['Las entidades del gobierno que determinan los sistemas de cobro de los impuestos en el país.', 'El Ministerio de Hacienda a través de las entidades representativas de manejo de políticas de cobros de los impuestos.', 'La Presidencia de la Republica como ente mayor de creación de normativas que permitan los manejos de políticas de inversión internacional.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 19,
		question: 'Conjunto de principio, valores y virtudes fundamentales aceptados por la generalidad de los individuos, que deben informar permanentemente las actuaciones del Estado, a través de sus organismos y agentes, con el fin de lograr la convivencia de sus miembros, libre y digna y respetuosa, así como la realización de sus asociados tanto en el plano individual como en su ser o dimensión social.',
		correct_answer: 'Moralidad administrativa',
		incorrect_answers: ['Actuación administrativa', 'Principio de eficacia', 'Percepción de servicio del Estado'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 20,
		question: 'El debido proceso es un derecho fundamental que debe ser observado en todo tipo de procesos y procedimientos, sin distingos de naturaleza, origen onormatividad que lo rija; principio que es inherente a los postulados esenciales de un Estado Constitucional Democrático, como también a:',
		correct_answer: 'Los principios y valores que la propia Constitución incorpora.',
		incorrect_answers: ['Las reglamentaciones estipuladas en cada una de las entidades del gobierno.', 'Las posiciones ideológicas de los gobernantes del país.', 'Los procesos que no tengan nada que ver con la regulación de las normativas dentro de cada zona del país.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 21,
		question: 'El principio de eficiencia materializa la relación que debe existir entre los ingresos tributarios obtenidos y los recursos utilizados por el Estado para conseguirlos; en tal sentido, el tributo será eficiente únicamente cuando:',
		correct_answer: 'No se distorsione la economía, donde el Estado pueda obtener los recursos que le permitan financiar su funcionamiento y satisfacer las necesidades de los ciudadanos a un costo razonable.',
		incorrect_answers: ['La producción sea el equivalente a las ventas en el mercado y su balance permita al Estado obtener las ganancias necesarias para su funcionamiento.', 'El proceso económico permita que el producto interno bruto sea comparable dentro del mercado nacional promoviendo su auto sostenimiento.', 'Las regalías obtenidas de la venta de los recursos nacionales explotables permitan un sostenimiento propio separado de las producciones a nivel nacional.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 22,
		question: 'Si son las que modifican el tributo, por ejemplo, nuevos bases gravables, nuevas tarifas, nuevos ingresos no contributivos de renta, nuevas rentas exentas, nuevos descuentos tributarios, hablamos de:',
		correct_answer: 'Norma tributaria sustantiva.',
		incorrect_answers: ['Norma tributaria especial.', 'Norma tributaria adjetiva.', 'Norma contributiva.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 23,
		question: 'A diferencia de las otras leyes que rigen a partir del día siguiente de su promulgación, la ley tributaria por regla general, solo entra a regir a partir del periodo fiscal siguiente a aquel en que es sancionada y publicada cumpliendo así la finalidad de:',
		correct_answer: 'Brindar seguridad al ordenamiento jurídico en materia fiscal.',
		incorrect_answers: ['Compromiso, ya que se deberá pulir los procesos que al momento se encuentren con pocas bases.', 'Incorporación de los procesos faltantes en la renovación de los planes fijados dentro de cada periodo fiscal.', 'Proporcionar los datos exactos de cada periodo fiscal, cerrando así los ciclos sin ninguna anomalía.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 24,
		question: 'La legalidad de los tributos es esencial en todo sistema impositivo, pues no puede haber impuesto o contribución que no esté expresamente consagrado en una norma o en la ley. La ley debe fijar por consiguiente:',
		correct_answer: 'Los elementos de la obligación tributaria, es decir los sujetos activos y pasivos, los hechos, las bases gravables y las tarifas del impuesto.',
		incorrect_answers: ['Los datos de los procesos de grabación de los montos de cada impuesto y la percepción estipulada como periodo de pago.', 'La creación de la normalización especifica dentro de los procesos de cobros y manejo de ellos en las entidades gubernamentales.', 'Los casos de excepción en los pagos de los impuestos de rentas o prediales, permitiendo una visión más amplia de los ingresos a la nación.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 25,
		question: 'Las medidas adoptadas y los objetivos planteados en la política fiscal, deberán ser orientados a desarrollar la finalidad de la ley que contempla el tributo, teniendo en cuenta que:',
		correct_answer: 'No solo se encaminarán a la satisfacción de los requerimientos de la sociedad sino llevar a cabo la meta institucional en la consecución de un resultado eficaz.',
		incorrect_answers: ['Los procesos que se lleven a cabo en el desarrollo de la implementación de la medida deben ser eficaz.', 'Proporcionaran los datos necesarios en la distribución de los pagos de los impuestos a nivel nacional.', 'Colocaran dentro de los planes de desarrollo, políticas alternas de incremento en los cobros de los impuestos que permitan una mayor rentabilidad de estos.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 26,
		question: 'El intercambio de bienes y servicios materiales e intangibles preside el comercio nacional e internacional, involucrando elementos tales como el uso, venta y transformación entre otros. Estas actividades tienen incidencia en:',
		correct_answer: 'El mercado al punto que sobrepasan las fronteras de los Estados a nivel mundial.',
		incorrect_answers: ['Los procesos de creación de nuevas normas que permitan la facilitación del mejoramiento de sistemas de cobro de los impuestos.', 'La presentación de los planes de desarrollo dentro de los principios obtenidos en las reformas tributarias.', 'Los procesos de reglamentación tributaria a nivel nacional.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 27,
		question: 'Conceptos como la optimización de recursos, la eficiencia económica, la externalización, el libre comercio, la liberalización y la armonización jurídica o la revolución de las telecomunicaciones han sido desarrolladas por la sociedad moderna, con incidencia en la economía no solo interna sino externa y es conocido como:',
		correct_answer: 'Globalización.',
		incorrect_answers: ['Perfeccionamiento de mercado.', 'Reglamentación definida.', 'Posicionamiento de mercados.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 28,
		question: 'La oportuna y correcta determinación de las obligaciones fiscales y la adecuada aplicación de la legislación en materia fiscal, es una función eminentemente técnica que se basa en la continua y constante presencia fiscalizadora de la entidad ante:',
		correct_answer: 'El conjunto de clientes, mediante control extensivo, intensivo, atención a las solicitudes técnicas y el reporte de operaciones sospechosas.',
		incorrect_answers: ['Las entidades de cobros catastrales que nos permiten recibir los más grandes recursos por su buen manejo de recaudación de cartera.', 'El Ministerio de hacienda, realizando los respectivos informes de gestión correspondientes a los periodos fiscales.', 'El Banco de la Republica, permitiendo tener una visión más amplia económicamente de los ingresos durante los periodos fiscales.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 29,
		question: 'En cumplimiento de la legislación Colombiana, el objetivo y propósito de cada uno de los subprocesos varía dependiendo del contenido del mismo atendiendo las normas fiscales que lo regulan. El subproceso se surte por:',
		correct_answer: 'Las divisiones internas de la Dirección de Impuestos y Aduanas Nacionales “DIAN” en ejercicio de sus competencias.',
		incorrect_answers: ['La necesidad de complementar los procesos en la Dirección de Policía Fiscal y Aduanera.', 'Los procesos de facilitación de la revisión de los complementos en la gestión fiscal de la revisión de los sistemas de impuestos.', 'La creación de una normalización impuesta en la DIAN para la creación de oficinas de control de calidad, que permita identificar las fallas del sistema de cobro.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 30,
		question: 'Si tiene por objeto controlar las obligaciones fiscales que en forma voluntaria determinan los clientes en las declaraciones tributarias, aduaneras, cambiarias o documentos establecidos para ello, o identificar responsables omisos o renuentes a cumplir con sus obligaciones fiscales, conocemos este subproceso como:',
		correct_answer: 'Investigación y determinación de impuestos y gravámenes.',
		incorrect_answers: ['Determinación e imposición de sanciones.', 'Control y prevención de acciones sospechosas.', 'Control de lavado de activos.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 31,
		question: 'La declaratoria de incumplimiento de obligaciones y efectividad de garantías es un subproceso que se encarga de:',
		correct_answer: 'Verificar el cumplimiento de las obligaciones aduaneras avaladas mediante garantías que otorgan los clientes y acepta la entidad a fin de verificar y declarar el incumplimiento y ordenar la efectividad de la misma.',
		incorrect_answers: ['Controlar de forma certera los procesos de las obligaciones aduaneras, de manera que no se procesen actividades de forma fraudulenta que pueda alterar los procesos de la entidad de impuestos.', 'Encarga de procesar las solicitudes de entrega de vehículos hurtados en otros países.', 'Aplica la legislación aduanera para definir la situación jurídica de la mercancía sobre la cual se adoptó medida cautelar de aprehensión de decomiso ordinario.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 32,
		question: 'El conjunto de actividades administrativas y técnicas tendientes a la planificación, manejo y organización de la documentación producida y recibida de diferentes proveedores internos y externos, desde su origen hasta su asignación al empleado público competente, con el objeto de preparar la ejecución de la fiscalización, es conocida como:',
		correct_answer: 'Gestión administrativa documental.',
		incorrect_answers: ['Asignación y fiscalización de formas administrativas.', 'Recolección de pruebas de organización de fiscalización de casos procesales.', 'Iniciación de acción de fiscalización.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 33,
		question: 'Para conformar un expediente o carpeta preliminar, que contenga los documentos necesarios para dar inicio a la acción de fiscalización, los responsables del proceso de fiscalización y liquidación deberán:',
		correct_answer: 'Aplicar el memorando 233 del 27 de abril de 2010, de la Subdirección de Gestión de Recursos Físicos que contiene los lineamientos sobre la materia.',
		incorrect_answers: ['Aplicar el memorando 344 del 6 de enero de 2012, donde se especifican los procesos de investigación realizados por la entidad.', 'Complementar mediante acta de investigación de proceso, respaldo por ayudas graficas que permitan evidenciar los hechos.', 'Crear de forma ordenada y cronológica la situación en la investigación y los resultados de estos.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 34,
		question: 'Cuando existan documentos como catálogos, folletos, muestras, fotografías, etc., que por su condición y tamaño no pueden incorporarse dentro del cuerpo del expediente con los mismos se conformara e identificara un cuaderno anexo, el cual debe tener:',
		correct_answer: 'Una numeración propia que inicie con 1, independiente del cuaderno del expediente.',
		incorrect_answers: ['La continuación de la numeración del expediente para no perder el consecutivo y sea más fácil realizarse seguimiento.', 'Procesar el material como prueba fotográfica registrándolos por aparte con una nueva asignación y a parte de los archivos iniciales.', 'Una copia de la conclusión del historial para no perder la continuidad de la información.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 35,
		question: 'El auditor responsable del proceso de fiscalización y liquidación, podrá encontrar una serie de situaciones que afectan el ejercicio libre y objetivo de la labor que le es encomendada; bajo este término se abordan asuntos relacionados con:',
		correct_answer: 'Los conflictos de impedimento y recusación, que obliga al empleado público responsable a apartarse de la acción de fiscalización.',
		incorrect_answers: ['Los presupuestos entregados en las investigaciones y las negociaciones establecidas con el empleado público sobre el tema de auditoria.', 'Los procesos de respaldo de esta auditoría y las diferencias que se pueden obtener dentro de las investigaciones fiscales.', 'La creación de bases fiscales en la determinación de las conclusiones de la auditoria mediante las investigaciones realizadas.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 36,
		question: 'Aquella circunstancia negativa del individuo, el defecto o impedimento para ejercer u obtener un empleo o que le resta mérito para ejercer ciertas funciones en un cargo determinado y se traduce en la prohibición legal para desempeñarlo independientemente de otras, es conocida como:',
		correct_answer: 'Inhabilidad.',
		incorrect_answers: ['Auditoria.', 'Fiscalización.', 'Incompatibilidad.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 37,
		question: 'Para la puesta en marcha de la acción de fiscalización con el fin de verificar y controlar el cumplimiento de obligaciones fiscales, que se derivan de los regímenes tributario, aduanero, cambiario, internacional, en los impuestos del orden nacional bajo el control de la DIAN, en el primer contacto con el contribuyente, usuarios aduaneros y/o agente de comercio exterior y/o usuario del régimen de cambio internacionales, es necesario que el responsable de la investigación realice:',
		correct_answer: 'La comunicación de los derechos, deberes y las responsabilidades que le asisten al investigado, proporcionando un panorama general del proceso de auditoria.',
		incorrect_answers: ['Los procesos de averiguación necesarios para realizar la aclaración de las informaciones, sobre la cual se realiza la indagación base de la investigación.', 'La recolección de los datos necesarios para la investigación y aclaración de las acusaciones a los contribuyentes en cuestión, para la pronta solución de los temas activos base de la acusación.', 'Los informes de gestión necesarios para dar trazabilidad de las investigaciones que den culminación a la acusación.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 38,
		question: 'El plan de auditoria es el documento que describe las actividades mediante las cuales se establecen las pautas o lineamientos de tipo técnico, para verificación de hechos o circunstancias económicas, de tal forma que se precisan:',
		correct_answer: 'Los aspectos fundamentales sobre los cuales se debe centrar y desarrollar la investigación.',
		incorrect_answers: ['Las razones por las cuales se dieron las investigaciones que deben ser finalizadas dentro de un tiempo especificado por la entidad.', 'Los datos suministrados por los acusados y los informes presentados por los empleados públicos sobre su gestión.', 'Los datos establecidos dentro del proceso de investigación y las ayudas que pueda necesitar de otras entidades gubernamentales.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 39,
		question: 'El plan de auditoria hará parte del expediente y será elaborado por el responsable de la investigación y concertado con el jefe inmediato o con quien se le haya asignado la función; igualmente podrá ser ajustado en:',
		correct_answer: 'El transcurso de la investigación, si es el caso, contando con la aprobación de los funcionarios asignados.',
		incorrect_answers: ['Los procesos de archivo dentro de los cuales se dará la importancia según las bases que llevaron la investigación.', 'Los procesos de manejo de las pruebas entregadas dentro de las averiguaciones.', 'Los procesos de calidad presentados en la aclaración de las pruebas mediante el trabajo de los empleados públicos responsables del caso.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 40,
		question: 'El documento en el que se registra la decisión administrativa adoptada como resultado de una acción de fiscalización para dar a conocer al investigado, atendiendo las formalidades, oportunidad y contenido establecido en las disposiciones aplicables para cada tipo de acto, es llamado:',
		correct_answer: 'Acto administrativo.',
		incorrect_answers: ['Acta de ejecución.', 'Informe de desarrollo.', 'Plan de fiscalización.'],
		description: '¡¡¡Correcto!!!!'
	}
	/* {
	id: 1,
	question: '',
	correct_answer: '',
	incorrect_answers: ['','',''],
	description: '¡¡¡Correcto!!!!'
}, */
]

export const ofimatica_sistemas = [

	{
		id: 1,
		question: 'Un Computador es',
		correct_answer: 'Una máquina programable para el procesamiento de información.',
		incorrect_answers: ['Un monitor.', 'Un monitor CGA.', 'Una red de internet.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 2,
		question: 'La BOARD es',
		correct_answer: 'Una tarjeta madre que reúne circuitos integrados.',
		incorrect_answers: ['Una tarjeta de sonido que reproduce música.', 'Una tarjeta gráfica de la cual depende la imagen.', 'Una unidad de CD-ROM.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 3,
		question: 'La función del PROCESADOR es',
		correct_answer: 'Controlar los procesos de la CPU.',
		incorrect_answers: ['Ser formato periférico.', 'Almacenar las instrucciones del usuario.', 'Reproducir sonido.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 4,
		question: 'Un JOYSTICK es',
		correct_answer: 'Un dispositivo de entrada que se utiliza en los juegos de video y en los simuladores.',
		incorrect_answers: ['Un dispositivo de entrada que convierte señales acústicas en señales eléctricas.', 'Una asistente digital personal (PDA).', 'Un sistema operativo.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 5,
		question: 'WINDOWS es',
		correct_answer: 'Un sistema operativo y tiene como función hacer de intermediario entre los elementos físicos que componen el ordenador.',
		incorrect_answers: ['Un dispositivo de entrada que se utiliza en los juegos de video y en los simuladores.', 'Un asistente digital personal (PDA).', 'Una impresora que imprime caracteres por medio de combinaciones de puntos creados.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 6,
		question: 'Son versiones WINDOWS',
		correct_answer: 'NT Server y XP',
		incorrect_answers: ['Los monitores EGA', 'Los monitores VGA.', 'La unidad de DVD.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 7,
		question: 'El programa POWER POINT es',
		correct_answer: 'Un programa especializado que permite conjugar texto,gráfico, animaciones y sonido.',
		incorrect_answers: ['Uno de los procesadores de texto que permite conjugar texto, imágenes y dibujos para aplicación de formatos,estilos y diseños.', 'Un programa del tipo hoja de cálculo que permite realizar operaciones con número, organizados en una cuadrícula.', 'El resultado de la unión de dos términos Inter (hace referencia a enlace o conexión) y Net (Netword, que significa interconexión de redes).'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 8,
		question: 'En qué consiste el PROGRAMA WORD',
		correct_answer: 'Es uno de los procesadores de texto que permite conjugar texto, imágenes y dibujos para aplicación de formatos, estilos y diseños.',
		incorrect_answers: ['Es una herramienta de Microsoft Office para crear presentaciones.', 'Es un programa del tipo hoja de cálculo que permite realizar operaciones con número, organizados en una cuadrícula.', 'El resultado de la unión de dos términos Inter (hace referencia a enlace o conexión) y Net (Netword, que significa interconexión de redes).'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 9,
		question: 'En qué consiste el PROGRAMA EXCEL',
		correct_answer: 'Un programa del tipo hoja de cálculo que permite realizar operaciones con número, organizados en una cuadrícula.',
		incorrect_answers: ['Un programa especializado que permite conjugar texto, gráfico, animaciones y sonido.', 'Un programa del tipo hoja de cálculo que permite realizar operaciones con número, organizados en una cuadrícula.', 'El resultado de la unión de dos términos Inter (hace referencia a enlace o conexión) y Net (Netword, que significa interconexión de redes).'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 10,
		question: 'El CHAT es',
		correct_answer: 'Un salón virtual conectado a internet.',
		incorrect_answers: ['Un modo de escribir cartas y oficios.', 'Un modelo de e-mail.', 'Un correo electrónico.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 11,
		question: 'Un BUFFER es',
		correct_answer: 'Una especie de memoria que tienen algunos dispositivos como las impresoras y grabadoras de CD.',
		incorrect_answers: ['Un chat o sesión de charlas en internet.', 'Una CPU o unidad central de procesos o procesador (es el cerebro del computador).', 'Un MP3 o formato de archivo de sonido que pesa menos que el formato Wav.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 12,
		question: 'Es una HERRAMIENTA DEL PROCESADOR MICROSOFT WORD',
		correct_answer: 'Comprobación, ortográfica, plantillas y diseños de página web.',
		incorrect_answers: ['Tarjetas de video.', 'Chat.', 'FAQ'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 13,
		question: 'La utilidad de la regla en Microsoft es',
		correct_answer: 'Ajustar imágenes, tabulaciones y sangrías.',
		incorrect_answers: ['Alinear números.', 'Sumar números.', 'Restar números'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 14,
		question: 'Son NOTAS AL PIE O AL FINAL',
		correct_answer: 'Las referencias que se hacen a una de las partes de un documento.',
		incorrect_answers: ['El apéndice.', 'Los títulos y subtítulos.', 'Los resaltados.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 15,
		question: 'En qué consiste el PROGRAMA DE MICROSOFT OUTLOOK E INTERNET',
		correct_answer: 'Es un programa de comunicación y administración de información personal.',
		incorrect_answers: ['En un modo de escribir en computador.', 'En un modo de imprimir en computador.', 'Es un programa para archivar documentos'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 16,
		question: 'Se conoce como SUITE OFIMÁTICA',
		correct_answer: 'Al conjunto de software o Microsoft Office para el uso en oficinas y entornos profesionales.',
		incorrect_answers: ['Al conjunto de Microsoft Outlook para el uso en oficinas y entornos profesionales.', 'Al conjunto de Microsoft Power Point (Mobile) para el uso en oficinas y entornos profesionales.', 'Al conjunto de Microsoft Excel para el uso en oficina y entornos profesionales.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 17,
		question: 'En ingeniería de computadores, un ALGORITMO es',
		correct_answer: 'Una secuencia no ambigua, finita y ordenada de instrucciones que han de seguirse para resolver un problema.',
		incorrect_answers: ['Una secuencia ambigua infinita.', 'Una secuencia ambigua numérica.', 'Una secuencia no ambigua, finita y ordenada a cero.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 18,
		question: 'Cuando se somete el código fuente del programa a un proceso 	de transformación para convertirse en lenguaje máquina,interpretable por el procesador, se dice entonces que se efectuó un proceso de',
		correct_answer: 'Compilación.',
		incorrect_answers: ['Alimentación', 'Desconfiguración.', 'Tabulación.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 19,
		question: 'En OFIMÁTICA un BLOGS es',
		correct_answer: 'Un sitio Web que permite compartir rápidamente ideas e información.',
		incorrect_answers: ['Una biblioteca activa.', 'Un tesaurus activo.', 'Un programa de código.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 20,
		question: 'Un “PROTOCOLO DE RED O DE COMUNICACIÓN” es',
		correct_answer: 'El conjunto de reglas que especifican el intercambio de datos u órdenes durante la comunicación entre las entidades que forman parte de una red.',
		incorrect_answers: ['La idea de añadir metadatos semánticos a la World Wide Web.', 'Una enorme base de datos léxica del idioma inglés.', 'Un listado de palabras, términos o temas.'],
		description: '¡¡¡Correcto!!!!'
	},
	{
		id: 21,
		question: "En la elaboración de un informe gubernamental en Word, ¿cuál es el método más efectivo para asegurar la confidencialidad del documento?",
		correct_answer: "Aplicar una contraseña segura y control de edición.",
		incorrect_answers: [
			"Enviar el documento solo por correo electrónico interno.",
			"Usar contraseñas simples para el documento.",
			"Ninguna"
		],
		description: "Aplicar una contraseña segura y controlar la edición garantiza la confidencialidad del documento."
	},
	{
		id: 22,
		question: "Para realizar un seguimiento de presupuestos en Excel en una entidad gubernamental, ¿cuál es la práctica más recomendable?",
		correct_answer: "Crear un dashboard consolidado con enlaces a datos detallados.",
		incorrect_answers: [
			"Registrar todos los datos en una única hoja para facilitar el acceso.",
			"Usar hojas separadas para cada departamento.",
			"Ninguna"
		],
		description: "Un dashboard consolidado permite una visión general eficiente y enlaces a detalles específicos."
	},
	{
		id: 23,
		question: "Al mejorar la comunicación interna en una entidad estatal con Outlook, ¿qué característica se debe priorizar?",
		correct_answer: "Implementación de reglas y carpetas para organizar correos.",
		incorrect_answers: [
			"Configuración de respuestas automáticas para eficiencia.",
			"Uso de listas de distribución por departamento.",
			"Ninguna"
		],
		description: "Organizar correos con reglas y carpetas mejora la eficiencia en la comunicación interna."
	},
	{
		id: 24,
		question: "Para presentar informes gubernamentales con PowerPoint, ¿qué enfoque se debe adoptar?",
		correct_answer: "Diseño claro y accesible, con información concisa.",
		"incorrect_answers": [
			"Inclusión de detalles técnicos extensos para transparencia.",
			"Uso de animaciones complejas para atraer la atención.",
			"Ninguna"
		],
		description: "Un diseño claro y conciso facilita la comprensión del informe por parte de la audiencia."
	},
	{
		id: 25,
		question: "En la planificación de eventos gubernamentales con el calendario de Outlook, ¿cuál es la mejor práctica?",
		correct_answer: "Utilizar colores y categorías para diferentes tipos de eventos.",
		incorrect_answers: [
			"Compartir calendarios entre todos los miembros del equipo.",
			"Programar recordatorios con una semana de anticipación.",
			"Ninguna"
		],
		description: "El uso de colores y categorías ayuda a identificar y organizar eventos eficientemente."
	},
	{
		id: 26,
		question: "Para asegurar la protección de datos sensibles en un documento de Word, un empleado de una entidad estatal debe:",
		correct_answer: "Implementar control de acceso y encriptación al documento.",
		incorrect_answers: [
			"Compartir el documento únicamente a través de correos internos.",
			"Utilizar una contraseña simple y común para todos los documentos.",
			"Ninguna"
		],
		description: "El control de acceso y la encriptación son esenciales para proteger datos sensibles."
	},
	{
		id: 27,
		question: "En la creación de un boletín informativo en Word para una entidad gubernamental, es esencial:",
		correct_answer: "Mantener un diseño coherente y un lenguaje claro y conciso.",
		incorrect_answers: [
			"Incluir información detallada sobre cada actividad gubernamental.",
			"Usar intensivamente imágenes y gráficos.",
			"Ninguna"
		],
		description: "Un diseño coherente y lenguaje claro aseguran la efectividad del boletín informativo."
	},
	{
		id: 28,
		question: "Para analizar grandes conjuntos de datos en Excel en el sector público, se recomienda:",
		correct_answer: "Emplear tablas dinámicas para un análisis detallado y personalizable.",
		incorrect_answers: [
			"Usar gráficos lineales para representar cambios a lo largo del tiempo.",
			"Implementar fórmulas complejas para cálculos específicos.",
			"Ninguna"
		],
		description: "Las tablas dinámicas permiten un análisis eficiente y adaptable de grandes conjuntos de datos."
	},
	{
		id: 29,
		question: "Para mejorar la eficiencia en la gestión del tiempo en Outlook, se sugiere:",
		correct_answer: "Utilizar la función de tareas y recordatorios para organizar prioridades.",
		incorrect_answers: [
			"Limitar el uso del correo electrónico a comunicaciones externas.",
			"Programar reuniones recurrentes para seguimiento de tareas.",
			"Ninguna"
		],
		description: "La función de tareas y recordatorios ayuda a organizar y priorizar actividades eficientemente."
	},
	{
		id: 30,
		question: "En la configuración de PowerPoint para presentaciones gubernamentales, es vital:",
		correct_answer: "Adaptar el diseño para ser inclusivo y respetar la diversidad cultural.",
		incorrect_answers: [
			"Usar un diseño estándar sin adaptaciones específicas.",
			"Centrarse en detalles técnicos en profundidad para cada diapositiva.",
			"Ninguna"
		],
		description: "Un diseño inclusivo y respetuoso con la diversidad cultural mejora la efectividad de la presentación."
	},
	{
		id: 31,
		question: "Al utilizar Excel para el seguimiento de indicadores socioeconómicos, es recomendable:",
		correct_answer: "Crear dashboards informativos y fáciles de entender.",
		incorrect_answers: [
			"Utilizar exclusivamente gráficos básicos para simplificar la presentación.",
			"Mantener un registro manual de datos para mayor control.",
			"Ninguna"
		],
		description: "Dashboards informativos facilitan la comprensión y seguimiento de indicadores clave."
	},
	{
		id: 32,
		question: "Para garantizar la efectividad de una presentación en PowerPoint en campañas gubernamentales, se debe:",
		correct_answer: "Aplicar técnicas para hacer la información accesible y atractiva.",
		incorrect_answers: [
			"Utilizar un lenguaje técnico especializado para demostrar conocimiento.",
			"Incluir una cantidad extensa de texto para abarcar todos los detalles.",
			"Ninguna"
		],
		description: "Técnicas que hacen la información accesible y atractiva mejoran la recepción del mensaje."
	},
	{
		id: 33,
		question: "¿Cuál es la función principal de la pestaña 'Insertar' en Microsoft Word?",
		correct_answer: "Agregar elementos como tablas, imágenes y gráficos al documento.",
		incorrect_answers: [
			"Cambiar el diseño de página.",
			"Revisar la ortografía y gramática.",
			"Configurar las opciones de impresión."
		],
		description: "La pestaña 'Insertar' permite añadir diversos elementos al documento, como tablas, imágenes, gráficos, encabezados y pies de página."
	},
	{
		id: 34,
		question: "En Excel, ¿qué función se utiliza para contar solo las celdas que contienen números?",
		correct_answer: "CONTAR",
		incorrect_answers: [
			"CONTARA",
			"SUMA",
			"PROMEDIO"
		],
		description: "La función CONTAR cuenta únicamente las celdas que contienen valores numéricos."
	},
	{
		id: 35,
		question: "¿Qué aplicación de Microsoft Office se utiliza principalmente para crear presentaciones?",
		correct_answer: "PowerPoint",
		incorrect_answers: [
			"Word",
			"Excel",
			"Access"
		],
		description: "PowerPoint es la herramienta de Microsoft Office diseñada para crear presentaciones con diapositivas."
	},
	{
		id: 36,
		question: "¿Cuál de los siguientes es un sistema operativo?",
		correct_answer: "Linux",
		"incorrect_answers": [
			"Microsoft Office",
			"Google Chrome",
			"Adobe Photoshop"
		],
		description: "Linux es un sistema operativo de código abierto utilizado en diversos dispositivos y servidores."
	},
	{
		id: 37,
		question: "¿Qué protocolo se utiliza para transferir archivos a través de Internet?",
		correct_answer: "FTP",
		incorrect_answers: [
			"HTTP",
			"SMTP",
			"TCP"
		],
		description: "FTP (File Transfer Protocol) se utiliza para la transferencia de archivos entre computadoras a través de una red."
	},
	{
		id: 38,
		question: "¿En qué programa de Microsoft Office se pueden crear hojas de cálculo?",
		correct_answer: "Excel",
		incorrect_answers: [
			"Word",
			"PowerPoint",
			"Outlook"
		],
		description: "Excel es la aplicación de Microsoft Office destinada a la creación y gestión de hojas de cálculo."
	},
	{
		id: 39,
		question: "¿Qué comando se utiliza en Windows para ver la dirección IP de la computadora?",
		correct_answer: "ipconfig",
		incorrect_answers: [
			"ping",
			"netstat",
			"tracert"
		],
		description: "El comando 'ipconfig' muestra la configuración de red de la computadora, incluida la dirección IP."
	},
	{
		id: 40,
		question: "¿Cuál es la función principal de un procesador de texto?",
		correct_answer: "Crear y editar documentos de texto.",
		incorrect_answers: [
			"Diseñar gráficos vectoriales.",
			"Gestionar bases de datos.",
			"Navegar por Internet."
		],
		description: "Un procesador de texto permite crear, editar y dar formato a documentos de texto."
	},
	{
		id: 41,
		question: "¿Qué tipo de software es Microsoft Access?",
		correct_answer: "Sistema de gestión de bases de datos.",
		incorrect_answers: [
			"Editor de imágenes.",
			"Navegador web.",
			"Antivirus."
		],
		description: "Microsoft Access es una aplicación de Microsoft Office utilizada para gestionar bases de datos."
	},
	{
		id: 42,
		question: "¿Cuál es la función de la tecla 'Ctrl + Z' en la mayoría de los programas?",
		correct_answer: "Deshacer la última acción realizada.",
		incorrect_answers: [
			"Rehacer la última acción.",
			"Guardar el documento.",
			"Cerrar la aplicación."
		],
		description: "La combinación 'Ctrl + Z' se utiliza comúnmente para deshacer la última acción realizada en muchos programas."
	},
	{
		id: 43,
		question: "¿Qué hace la combinación de teclas Ctrl + C?",
		correct_answer: "Copia el contenido seleccionado.",
		incorrect_answers: [
			"Corta el contenido seleccionado.",
			"Pega el contenido copiado.",
			"Cierra el programa."
		],
		description: "Ctrl + C es una combinación común para copiar elementos al portapapeles."
	},
	{
		id: 44,
		question: "¿Qué componente de hardware se encarga de ejecutar las instrucciones de los programas?",
		correct_answer: "El procesador (CPU)",
		incorrect_answers: [
			"La memoria RAM",
			"El disco duro",
			"La tarjeta gráfica"
		],
		description: "La CPU (Unidad Central de Procesamiento) es el 'cerebro' del computador que ejecuta instrucciones."
	},
	{
		id: 45,
		question: "¿Cuál es la extensión predeterminada de un archivo de Word 2016 o superior?",
		correct_answer: ".docx",
		incorrect_answers: [
			".xlsx",
			".pptx",
			".txt"
		],
		description: ".docx es la extensión usada por Microsoft Word desde la versión 2007 en adelante."
	},
	{
		id: 46,
		question: "¿Qué es el sistema operativo?",
		correct_answer: "El software que permite la comunicación entre el usuario y el hardware.",
		incorrect_answers: [
			"Un programa para crear documentos.",
			"Un lenguaje de programación.",
			"Una red de computadoras."
		],
		description: "El sistema operativo es esencial para gestionar los recursos del sistema y permitir la interacción con el usuario."
	},
	{
		id: 47,
		question: "¿Cuál de las siguientes es una función básica de Excel?",
		correct_answer: "Realizar cálculos con fórmulas.",
		incorrect_answers: [
			"Crear presentaciones animadas.",
			"Editar imágenes.",
			"Diseñar páginas web."
		],
		description: "Excel permite realizar operaciones matemáticas, estadísticas y lógicas mediante fórmulas."
	},
	{
		id: 48,
		question: "¿Para qué sirve el programa Microsoft Outlook?",
		correct_answer: "Para gestionar correos electrónicos y calendarios.",
		incorrect_answers: [
			"Para diseñar gráficos.",
			"Para crear hojas de cálculo.",
			"Para navegar en internet."
		],
		description: "Outlook es una herramienta de productividad que gestiona emails, tareas, contactos y calendarios."
	},
	{
		id: 49,
		question: "¿Qué tipo de archivo crea Microsoft Excel por defecto?",
		correct_answer: ".xlsx",
		"incorrect_answers": [
			".docx",
			".pptx",
			".pdf"
		],
		description: ".xlsx es la extensión de archivos de Excel desde la versión 2007."
	},
	{
		id: 50,
		question: "¿Qué significa el término 'software'?",
		correct_answer: "El conjunto de programas que ejecuta un computador.",
		incorrect_answers: [
			"Los componentes físicos de un computador.",
			"Los dispositivos de almacenamiento.",
			"El sistema de refrigeración del equipo."
		],
		description: "El software son los programas y aplicaciones que hacen funcionar al hardware."
	},
	{
		id: 51,
		question: "¿Qué es Internet?",
		correct_answer: "Una red mundial que conecta computadoras para compartir información.",
		incorrect_answers: [
			"Un procesador de textos.",
			"Un sistema operativo.",
			"Un tipo de software antivirus."
		],
		description: "Internet es una red global que permite el intercambio de datos entre dispositivos conectados."
	},
	{
		id: 52,
		question: "¿Qué navegador web es desarrollado por Google?",
		correct_answer: "Google Chrome",
		"incorrect_answers": [
			"Mozilla Firefox",
			"Microsoft Edge",
			"Safari"
		],
		description: "Google Chrome es uno de los navegadores más usados y es desarrollado por Google."
	},
	{
		id: 53,
		question: "¿Cuál es el propósito de un navegador web?",
		correct_answer: "Acceder y visualizar páginas web.",
		incorrect_answers: [
			"Editar documentos de texto.",
			"Proteger el equipo de virus.",
			"Diseñar hojas de cálculo."
		],
		description: "Los navegadores web permiten al usuario visitar sitios web e interactuar con su contenido."
	},
	{
		id: 54,
		question: "¿Qué significa 'WWW'?",
		correct_answer: "World Wide Web",
		incorrect_answers: [
			"Web Word Way",
			"Wireless Web Window",
			"Wide Web Wireless"
		],
		description: "WWW es el acrónimo de World Wide Web, una parte fundamental de Internet."
	},
	{
		id: 55,
		question: "¿Qué es una dirección URL?",
		correct_answer: "La dirección única de una página web.",
		incorrect_answers: [
			"El nombre del navegador.",
			"El código de un programa.",
			"Un protocolo de red."
		],
		description: "URL significa Uniform Resource Locator, y es la dirección usada para acceder a recursos en la web."
	},
	{
		id: 56,
		question: "¿Qué función cumple un motor de búsqueda?",
		correct_answer: "Permite encontrar información en Internet.",
		incorrect_answers: [
			"Crear sitios web.",
			"Traducir documentos.",
			"Revisar la ortografía."
		],
		description: "Los motores de búsqueda como Google o Bing ayudan a localizar información en la web."
	},
	{
		id: 57,
		question: "¿Qué es una red Wi-Fi?",
		correct_answer: "Una red inalámbrica que permite conectar dispositivos a Internet.",
		incorrect_answers: [
			"Un tipo de impresora.",
			"Un navegador web.",
			"Un programa de edición de texto."
		],
		description: "Wi-Fi permite conectarse a Internet sin cables, mediante ondas de radio."
	},
	{
		id: 58,
		question: "¿Cuál es una medida básica de seguridad al navegar por Internet?",
		correct_answer: "No compartir contraseñas personales.",
		incorrect_answers: [
			"Usar solo un navegador.",
			"Navegar sin cerrar pestañas.",
			"Desactivar el antivirus."
		],
		description: "Es importante mantener la seguridad evitando compartir información confidencial como contraseñas."
	},
	{
		id: 59,
		question: "¿Qué es Windows?",
		correct_answer: "Un sistema operativo desarrollado por Microsoft.",
		incorrect_answers: [
			"Un navegador de Internet.",
			"Un procesador de texto.",
			"Una hoja de cálculo."
		],
		description: "Windows es un sistema operativo que permite la gestión de archivos, programas y dispositivos en una computadora."
	},
	{
		id: 60,
		question: "¿Qué función tiene el botón 'Inicio' en Windows?",
		correct_answer: "Acceder al menú con programas y funciones del sistema.",
		incorrect_answers: [
			"Cerrar todas las ventanas abiertas.",
			"Abrir la papelera de reciclaje.",
			"Actualizar el sistema operativo."
		],
		description: "El botón de 'Inicio' permite abrir el menú principal con acceso a aplicaciones, configuración y más."
	},
	{
		id: 61,
		question: "¿Qué es el 'Escritorio' en Windows?",
		correct_answer: "La pantalla principal donde se encuentran accesos directos y ventanas.",
		incorrect_answers: [
			"Una carpeta del sistema.",
			"Un archivo ejecutable.",
			"Un navegador web."
		],
		description: "El Escritorio es el área principal de trabajo en Windows, donde se organizan accesos directos y ventanas abiertas."
	},
	{
		id: 62,
		question: "¿Qué es la 'Papelera de reciclaje' en Windows?",
		correct_answer: "Un lugar donde se almacenan temporalmente los archivos eliminados.",
		incorrect_answers: [
			"Una carpeta para guardar imágenes.",
			"Un programa de antivirus.",
			"Un tipo de disco duro externo."
		],
		description: "Los archivos eliminados van a la Papelera de reciclaje antes de ser borrados definitivamente."
	},
	{
		id: 63,
		question: "¿Qué combinación de teclas permite cerrar una ventana en Windows?",
		correct_answer: "Alt + F4",
		incorrect_answers: [
			"Ctrl + C",
			"Ctrl + Z",
			"Alt + Tab"
		],
		description: "Alt + F4 cierra la ventana activa. Es un atajo muy útil para gestionar aplicaciones rápidamente."
	},
	{
		id: 64,
		question: "¿Qué permite hacer el 'Explorador de archivos' en Windows?",
		correct_answer: "Ver y gestionar archivos y carpetas del sistema.",
		incorrect_answers: [
			"Crear presentaciones multimedia.",
			"Editar hojas de cálculo.",
			"Buscar páginas web."
		],
		description: "El Explorador de archivos permite navegar por el sistema para localizar, copiar, mover o eliminar archivos."
	},
	{
		id: 65,
		question: "¿Qué es el 'Panel de control' en Windows?",
		correct_answer: "Una herramienta para configurar el sistema operativo.",
		incorrect_answers: [
			"Un programa para escribir textos.",
			"Un reproductor de video.",
			"Un antivirus."
		],
		description: "El Panel de control ofrece acceso a las configuraciones del sistema como red, seguridad, y hardware."
	},
	{
		id: 66,
		question: "¿Cuál es la función de la barra de tareas en Windows?",
		correct_answer: "Mostrar las aplicaciones abiertas y accesos rápidos.",
		incorrect_answers: [
			"Mostrar solo la hora.",
			"Reproducir música automáticamente.",
			"Cambiar de sistema operativo."
		],
		description: "La barra de tareas facilita el acceso a programas abiertos y a funciones como el reloj o el volumen."
	},
	{
		id: 67,
		question: "¿Cuál es la extensión predeterminada de un archivo de Microsoft Word?",
		correct_answer: ".docx",
		incorrect_answers: [".xlsx", ".pptx", ".pdf"],
		description: "Los documentos de Word se guardan con la extensión .docx desde la versión 2007."
	},
	{
		id: 68,
		question: "¿Cómo se guarda un archivo en Word?",
		correct_answer: "Con la combinación de teclas Ctrl + S",
		incorrect_answers: ["Ctrl + C", "Ctrl + V", "Ctrl + P"],
		description: "Ctrl + S permite guardar rápidamente el documento en el que trabajas."
	},
	{
		id: 69,
		question: "¿Para qué sirve la función Autosuma en Excel?",
		correct_answer: "Para sumar rápidamente un rango de celdas.",
		incorrect_answers: [
			"Para ordenar datos.",
			"Para cambiar el formato de las celdas.",
			"Para insertar gráficos."
		],
		description: "Autosuma permite realizar sumas rápidas sin escribir la fórmula manualmente."
	},
	{
		id: 70,
		question: "¿Qué combinación de teclas abre el menú de inicio en Windows?",
		correct_answer: "Tecla Windows",
		incorrect_answers: ["Ctrl", "Alt", "Shift"],
		description: "La tecla con el logo de Windows abre el menú Inicio."
	},
	{
		id: 71,
		question: "¿Qué programa de Microsoft Office se usa para hacer presentaciones?",
		correct_answer: "PowerPoint",
		incorrect_answers: ["Word", "Excel", "Outlook"],
		description: "PowerPoint permite crear diapositivas para presentaciones."
	},
	{
		id: 72,
		question: "¿Cómo se inserta una nueva diapositiva en PowerPoint?",
		correct_answer: "Con la pestaña Insertar o Ctrl + M",
		incorrect_answers: [
			"Ctrl + N",
			"Ctrl + P",
			"Alt + F4"
		],
		description: "Ctrl + M agrega rápidamente una nueva diapositiva a la presentación."
	},
	{
		id: 73,
		question: "¿Qué es una celda en Excel?",
		correct_answer: "La intersección entre una fila y una columna.",
		incorrect_answers: [
			"Una fórmula matemática.",
			"Un tipo de gráfico.",
			"Una función de búsqueda."
		],
		description: "Cada celda puede contener datos o fórmulas y se identifica con una letra y número."
	},
	{
		id: 74,
		question: "¿Para qué sirve la barra de herramientas de acceso rápido en Word?",
		correct_answer: "Para tener accesos directos a comandos frecuentes.",
		incorrect_answers: [
			"Para cambiar el tamaño del texto.",
			"Para insertar imágenes.",
			"Para imprimir documentos."
		],
		description: "Esta barra permite personalizar accesos rápidos para facilitar el trabajo."
	},
	{
		id: 75,
		question: "¿Qué es una hoja de cálculo en Excel?",
		correct_answer: "Un documento donde se organizan datos en filas y columnas.",
		incorrect_answers: [
			"Una presentación con diapositivas.",
			"Un programa para escribir textos.",
			"Una herramienta para enviar correos."
		],
		description: "Excel usa hojas de cálculo para trabajar con datos y realizar cálculos."
	},
	{
		id: 76,
		question: "¿Cuál es la función del sistema operativo Windows?",
		correct_answer: "Gestionar los recursos del hardware y permitir la ejecución de programas.",
		incorrect_answers: [
			"Editar documentos de texto.",
			"Crear hojas de cálculo.",
			"Navegar en internet."
		],
		description: "El sistema operativo administra el hardware y software para que el usuario interactúe con el equipo."
	},
	{
		id: 77,
		question: "¿Qué herramienta de Word permite corregir ortografía y gramática?",
		correct_answer: "El corrector ortográfico y gramatical.",
		incorrect_answers: [
			"El diccionario de sinónimos.",
			"La tabla de contenidos.",
			"El zoom."
		],
		description: "Word corrige automáticamente errores ortográficos y gramaticales para mejorar la calidad del texto."
	},
	{
		id: 78,
		question: "¿Qué tecla se usa para deshacer la última acción en la mayoría de los programas?",
		correct_answer: "Ctrl + Z",
		incorrect_answers: [
			"Ctrl + Y",
			"Ctrl + X",
			"Ctrl + C"
		],
		description: "Ctrl + Z permite revertir la última acción realizada."
	},
	{
		id: 79,
		question: "¿Para qué sirve la opción 'Guardar como' en Word o Excel?",
		correct_answer: "Para guardar una copia del archivo con otro nombre o en otra ubicación.",
		incorrect_answers: [
			"Para imprimir el documento.",
			"Para cerrar el archivo sin guardar.",
			"Para enviar el archivo por correo."
		],
		description: "'Guardar como' es útil para crear versiones diferentes de un mismo archivo."
	},
	{
		id: 80,
		question: "¿Qué significa PDF?",
		correct_answer: "Portable Document Format",
		incorrect_answers: [
			"Personal Data File",
			"Program Data Format",
			"Public Document File"
		],
		description: "PDF es un formato universal para documentos que mantiene el diseño original sin importar el dispositivo."
	},
	{
		id: 81,
		question: "¿Qué es una diapositiva en PowerPoint?",
		correct_answer: "Una página individual dentro de una presentación.",
		incorrect_answers: [
			"Un gráfico estadístico.",
			"Un tipo de fuente.",
			"Un archivo de texto."
		],
		description: "Las presentaciones están compuestas por varias diapositivas con texto, imágenes y otros elementos."
	},
	{
		id: 82,
		question: "¿Qué es el portapapeles en Windows?",
		correct_answer: "Un espacio temporal para almacenar datos copiados o cortados.",
		incorrect_answers: [
			"Un programa para hacer presentaciones.",
			"Un disco duro externo.",
			"Una red Wi-Fi."
		],
		description: "El portapapeles permite copiar y pegar información entre aplicaciones."
	},
	{
		id: 83,
		question: "¿Qué combinación de teclas se utiliza para copiar un elemento?",
		correct_answer: "Ctrl + C",
		incorrect_answers: ["Ctrl + V", "Ctrl + X", "Ctrl + Z"],
		description: "Ctrl + C copia el elemento seleccionado al portapapeles."
	},
	{
		id: 84,
		question: "¿Cuál es la función del botón 'Rehacer' en programas como Word o Excel?",
		correct_answer: "Repetir la acción que se deshizo.",
		incorrect_answers: [
			"Deshacer la última acción.",
			"Guardar el documento.",
			"Cerrar el programa."
		],
		description: "El botón 'Rehacer' revierte el efecto de 'Deshacer'."
	},
	{
		id: 85,
		question: "¿Qué tipo de archivo crea PowerPoint por defecto?",
		correct_answer: ".pptx",
		incorrect_answers: [".docx", ".xlsx", ".pdf"],
		description: "PowerPoint guarda presentaciones con la extensión .pptx."
	},
	{
		id: 86,
		question: "¿Qué significa URL?",
		correct_answer: "Uniform Resource Locator",
		incorrect_answers: [
			"Universal Resource Link",
			"Uniform Reference Location",
			"Unique Resource Locator"
		],
		description: "URL es la dirección web que permite localizar recursos en Internet."
	},
	{
		id: 87,
		question: "¿Qué es un virus informático?",
		correct_answer: "Un programa malicioso que puede dañar o alterar el funcionamiento de un equipo.",
		incorrect_answers: [
			"Un tipo de archivo de texto.",
			"Una función de Windows.",
			"Un dispositivo de hardware."
		],
		description: "Los virus informáticos pueden propagarse y afectar la seguridad del sistema."
	},
	{
		id: 88,
		question: "¿Para qué sirve el botón 'Insertar tabla' en Word?",
		correct_answer: "Para añadir una tabla dentro del documento.",
		incorrect_answers: [
			"Para insertar imágenes.",
			"Para cambiar el tipo de letra.",
			"Para guardar el documento."
		],
		description: "Las tablas organizan información en filas y columnas dentro de un documento."
	},
	{
		id: 89,
		question: "¿Qué es una celda en una hoja de Excel?",
		correct_answer: "La intersección de una fila y una columna.",
		incorrect_answers: [
			"Un tipo de gráfico.",
			"Un programa adicional.",
			"Un comando de teclado."
		],
		description: "Las celdas son unidades básicas donde se ingresan datos o fórmulas."
	},
	{
		id: 90,
		question: "¿Qué significa 'Wi-Fi'?",
		correct_answer: "Wireless Fidelity",
		incorrect_answers: [
			"Wide Fidelity",
			"Wireless File",
			"Wide File"
		],
		description: "Wi-Fi es la tecnología que permite conexiones inalámbricas a Internet."
	},
	{
		id: 91,
		question: "¿Qué acción realiza Ctrl + V en la mayoría de los programas?",
		correct_answer: "Pega el contenido del portapapeles.",
		incorrect_answers: ["Corta el texto seleccionado.", "Deshace la última acción.", "Cierra el programa."],
		description: "Ctrl + V se utiliza para pegar contenido previamente copiado o cortado."
	},
	{
		id: 92,
		question: "¿Cuál es la finalidad del Panel de Control en Windows?",
		correct_answer: "Configurar opciones del sistema y del hardware.",
		incorrect_answers: ["Actualizar el antivirus.", "Escribir documentos.", "Crear hojas de cálculo."],
		description: "Desde el Panel de Control puedes cambiar configuraciones del equipo, red, dispositivos, etc."
	},
	{
		id: 93,
		"question": "¿Para qué sirve la pestaña 'Diseño' en Word?",
		"correct_answer": "Modificar el aspecto visual del documento.",
		"incorrect_answers": ["Insertar gráficos.", "Revisar la ortografía.", "Proteger el documento."],
		"description": "La pestaña 'Diseño' permite personalizar márgenes, fondos, bordes, entre otros."
	},
	{
		id: 94,
		question: "¿Qué fórmula de Excel permite obtener el promedio de un rango de celdas?",
		correct_answer: "=PROMEDIO(A1:A5)",
		incorrect_answers: ["=SUMA(A1:A5)", "=MAX(A1:A5)", "=VALOR(A1:A5)"],
		description: "La función PROMEDIO calcula el valor medio de un conjunto de números."
	},
	{
		id: 95,
		question: "¿Qué es un navegador web?",
		correct_answer: "Un programa que permite acceder a páginas de Internet.",
		incorrect_answers: ["Un programa para editar imágenes.", "Un sistema operativo.", "Un antivirus."],
		description: "Navegadores como Chrome, Firefox o Edge permiten explorar la web."
	},
	{
		id: 96,
		question: "¿Cuál es la función de 'Ctrl + P' en muchas aplicaciones?",
		correct_answer: "Imprimir el documento.",
		incorrect_answers: ["Pegar contenido.", "Guardar como.", "Salir del programa."],
		description: "Ctrl + P abre la vista de impresión en la mayoría de los programas."
	},
	{
		id: 97,
		question: "¿Qué tipo de gráfico es ideal para representar porcentajes en Excel?",
		correct_answer: "Gráfico circular.",
		incorrect_answers: ["Gráfico de barras.", "Gráfico de líneas.", "Gráfico de dispersión."],
		description: "El gráfico circular permite visualizar proporciones fácilmente."
	},
	{
		id: 98,
		question: "¿Cuál es la utilidad de PowerPoint en el entorno laboral?",
		correct_answer: "Crear presentaciones visuales para exponer ideas o proyectos.",
		incorrect_answers: ["Enviar correos electrónicos.", "Gestionar bases de datos.", "Editar hojas de cálculo."],
		description: "PowerPoint es ampliamente usado para hacer presentaciones claras y atractivas."
	}
]

export const basicasorganizacionales = [

	{
		id: 1,
		question: 'Usted pertenece a un grupo de trabajo, en donde se cuenta con una sola impresora compartida para ocho funcionarios. Últimamente se están presentando conflictos, teniendo en cuenta que uno de los compañeros esta acaparando el uso de la impresora, teniendo en cuenta que esta liderando un proceso de fiscalización que exige la impresión de una gran cantidad de copias. ¿Cuál seria la salida adecuada a este inconveniente?',
		correct_answer: 'Realizar un plan de trabajo conjunto, con el fin de colaborar con el compañero que mas impresiones tiene en el momento y evacuar efectivamente las impresiones de todos.',
		incorrect_answers: ['Que se establezcan horarios de impresión para cada uno de los ocho funcionarios, con el fin de no generar conflictos internos.', 'Buscar al interior de otros grupos de trabajo, impresoras que se encuentren disponibles para imprimir mientras la impresora del grupo esta ocupada.'],
		description: '¡¡¡Correcto!!! Esta respuesta hace referencia a la competencia trabajo en equipo, la cual hace parte de las competencias básicas organizacionales.'
	},
	{
		id: 2,
		question: 'Ingresa un nuevo compañero a su grupo de trabajo, el cual esta recibiendo consejos y recomendaciones de los demás compañeros. La idea es que estas recomendaciones se enfoquen hacia la atención al usuario y el ciudadano. ¿Cuál seria la mejor recomendación que se le puede dar?',
		correct_answer: 'Que se debe enfocar en brindar soluciones a los clientes aplicando los protocolos de servicio, los estándares de calidad y habiendo uso de la tecnología disponible.',
		incorrect_answers: ['Que cumpla con lo solicitado por los clientes, en los tiempos previstos y con los recursos asignados.', 'Que cumpla cien por ciento con las solicitudes realizadas por los clientes, sin reducir la productividad requerida por la entidad.'],
		description: '¡¡¡Correcto!!! Esta es una de las conductas observables de la competencia orientación al usuario y al ciudadano.'
	},
	{
		id: 3,
		question: 'Se recibe una visita de uno de los directivos de la entidad, donde se deja muy clara la directriz que lo mas importante es la atención al usuario y al ciudadano que se brinde respecto a los servicios de la entidad.Después de recibir la visita, usted vuelve a su grupo de trabajo, donde la directriz de su jefe inmediato es que cada funcionario debe aumentar significativamente la productividad, teniendo en cuenta la cantidad de trabajo y demanda de servicios por parte de los ciudadanos.¿Cual de las dos directrices debe ser ejecutada con mayor empeño?',
		correct_answer: 'Se debe otorgar mayor empeño en la directriz sobre la atención al usuario y al ciudadano.',
		incorrect_answers: ['Se debe otorgar mayor empeño a la directriz sobre productividad.', 'Se debe otorgar igual empeño hacia las dos directrices, teniendo en cuenta que ambas son muy importantes.'],
		description: '¡¡¡Correcto!!! Esta directriz hace referencia a la orientación al usuario y al ciudadano, la cual hace parte de las 6 competencias básicas organizacionales.'
	},
	{
		id: 4,
		question: 'Usted como líder de cierto grupo de trabajo en la entidad, es presionado por las metas de cumplimiento de un proceso que esta a punto de finalizar, pero las metas parciales no se han cumplido. En este proceso están involucrados la mitad del grupo de trabajo, teniendo en cuenta que la otra mitad esta dedicada a otros procesos y servicios. Ante esta situación usted:',
		correct_answer: 'Integra a todos los integrantes del equipo, con el fin de que también sean parte del cumplimiento del proceso que requiere cumplimiento.',
		incorrect_answers: ['Exige mayor competitividad al grupo encargado del proceso que debe cumplir las metas.', 'Solicita a la entidad mayor numero de funcionarios para cumplir con las metas propuestas.'],
		description: '¡¡¡Correcto!!! Esta acción hace referencia a una competencia básica llamada orientación al logro'
	}
	,
	{
		id: 5,
		question: 'Teniendo en cuenta los riesgos asociados al proceso desarrollado por parte del equipo de trabajo al cual usted pertenece, a usted le han asignado un rol especial, con el fin de que solo se puedan hacer ciertas consultas con su rol. Esto refleja la gran confianza que la entidad ha colocado en su trabajo y en su comportamiento; sin embargo, todos sus compañeros deben solicitarle diariamente varias consultas que únicamente se pueden verificar con su rol.Esto ocasiona una recarga significativa en su trabajo. Ante esta situación usted:',
		correct_answer: 'Le informa a su jefe la situación, con el fin de que el tome las medidas necesarias para agilizar el proceso de todo el grupo.',
		incorrect_answers: ['Habla con cada uno de sus compañeros, con el fin de que entiendan que a veces se pueden retrasar las consultas, teniendo en cuenta que usted también tiene metas que cumplir.', 'Se esfuerza en cumplir con todas las funciones asignadas, sin importar que se generen mayores cargas de trabajo entre unos y otros.'],
		description: ' ¡¡¡Correcto!!! Este comportamiento hace referencia a una competencia básica llamada comunicación efectiva, que consiste en comunicar efectivamente un mensaje,para mejorar ciertos procesos.'
	},

	{
		id: 6,
		question: 'Usted esta organizando la reunión de fin de año para los integrantes del grupo de trabajo; sin embargo, una persona no desea ir a la celebración,teniendo en cuenta que no comparte ciertas practicas relacionadas con la celebración porque van en contra de su religión. Ante esta situación usted:',
		correct_answer: 'Acepta la diferencia en su compañero de trabajo, respetando sus creencias.',
		incorrect_answers: ['Trata de convencerlo para que asista a la reunión, aunque sea por poco tiempo.', 'Le manifiesta a todos los compañeros esta situación, con el fin de que se enteren de lo sucedido.'],
		description: '¡¡¡Correcto!!! Este comportamiento hace referencia al comportamiento ético al interior de la organización.'
	},

	{
		id: 7,
		question: 'En su lugar de trabajo al finalizar la jornada laboral, se evidencia en una de las sillas destinadas para la atención a usuarios, un bolso que no pertenece a ninguno de sus compañeros; al parecer es de algún ciudadano que lo olvido. Ante esta situación usted:',
		correct_answer: 'Decide llamar a su jefe inmediato y demás compañeros, con el fin de abrir el bolso en presencia de todos.',
		incorrect_answers: ['Decide abrir el bolso, con el fin de identificar a su dueño.', 'Decide dejarlo allí, teniendo en cuenta que no es suyo.'],
		description: '¡¡¡Correcto!!! Esta acción refleja un comportamiento ético, demostrando transparencia en este tipo de acción.'
	},
	{
		id: 8,
		question: 'Usted como jefe de cierto grupo de trabajo en la entidad, traslada instrucciones precisas a los compañeros de trabajo que tienen que ver con la atención de cierto proceso. Al recibir los informes de todos los compañeros, se puede evidenciar que algunos entregaron erradamente cierta información. En este caso:',
		correct_answer: 'Existió una falla por parte suya, teniendo en cuenta que debió asegurarse que todos recibieran correctamente las instrucciones.',
		incorrect_answers: ['Existió una falla por parte de los compañeros que no entendieron bien los lineamientos.', 'Se debe llamar la atención a los compañeros por el descuido en el informe.'],
		description: '¡¡¡Correcto!!! Este caso hace referencia a la competencia comunicación efectiva, la cual no solamente se enfoca en que los mensajes impartidos deben ser claros, sino que debemos asegurarnos que quien reciba el mensaje, lo haya recibido correctamente.'
	},
	{
		id: 9,
		question: '¿De las siguientes acciones o competencias, cual cobra mayor relevancia para combatir el mobbing en cualquier ambiente laboral?',
		correct_answer: 'Comportamiento ético.',
		incorrect_answers: ['Transparencia.', 'Responsabilidad social.'],
		description: '¡¡¡Correcto!!! El comportamiento ético como competencia básica organizacional, seria la competencia mas acertada, teniendo en cuenta que la única forma de combatir el acoso laboral es respetando las diferencias entre compañeros y tener un comportamiento ejemplar.'
	},
	{
		id: 10,
		question: 'Al interior de cierto grupo de trabajo, se esta evidenciando la presencia del síndrome de burnout que hace referencia a los trastornos emocionales que padecen los trabajadores a causa del estrés. Una acción acertada que puede realizar el jefe del grupo para mitigar esta situación es:',
		correct_answer: 'Reorganización de cargas de trabajo, donde todos los integrantes del equipo aporten por igual.',
		incorrect_answers: ['Solicitar diligencia a todos los integrantes del equipo, con el fin de mitigar este tipo de situaciones.', 'Establecer una relación de respeto por quienes padecen este tipo de situaciones, con el fin de que no sean afectados por los demás compañeros.'],
		description: '¡¡¡Correcto!!! Esta acción es la mas acertada en el contexto de las pruebas básicas organizacionales, teniendo en cuenta que hace referencia a la competencia trabajo en equipo.'
	},
	{
		id: 11,
		question: 'Usted como jefe de grupo recibe comunicación por parte del nivel central, donde le informan que el grupo que usted lidera es el que tiene el desempeño mas bajo de toda la entidad. Esto posiblemente se deba a diversos problemas que han tenido por la falta implementos para desarrollar las labores efectivamente. Ante esta situación usted:',
		correct_answer: 'Decide comunicarle a todo el grupo de trabajo, con el fin de desarrollar estrategias que puedan cambiar estos resultados.',
		incorrect_answers: ['Decide no comunicarle al grupo de trabajo, teniendo en cuenta que esta acción puede desanimar a los integrantes y perjudicar su rendimiento.', 'Decide enviar una comunicación al nivel central, indicando que este resultado se debe a la falta de implementos de trabajo.'],
		description: '¡¡¡Correcto!!! Esta acción obedece a dos competencias básicas organizacionales que son comunicación efectiva y adaptabilidad. La idea es hacer conocer la falta de implementos para desarrollar las labores, pero esto no puede ser excusa permanente para el desempeño de las labores.'
	},
	{
		id: 12,
		question: 'El jefe los ha citado a una reunión a las 4 de la tarde, con el fin de hablar sobre ciertas actualizaciones normativas que se aplicaran en la entidad; sin embargo, ha llegado la hora prevista y usted no ha terminado de atender a un ciudadano que requiere de muchos tramites y orientaciones. Una vez termina de atender al ciudadano y llega a la reunión 20 minutos tarde, su jefe le indica su descontento por no ser puntual con la reunión. Teniendo en cuenta esta situación:',
		correct_answer: 'El haber atendido al ciudadano es lo correcto, aunque esto generara retraso en su llegada a la reunión.',
		incorrect_answers: ['La conducta del jefe es correcta, teniendo en cuenta que la puntualidad es lo mas importante.', 'Se tenia que citar al ciudadano para otro día, teniendo en cuenta que este tipo de reuniones internas son mas importantes.'],
		description: '¡¡¡Correcto!!! Este comportamiento es el correcto en el contexto de esta prueba, teniendo en cuenta que hace referencia a la competencia orientación al usuario y al ciudadano.'
	},
	{
		id: 13,
		question: 'Se esta desarrollando una estrategia para premiar al funcionario del mes, teniendo en cuenta las felicitaciones que entran por medio del buzón de PQSRF de la entidad. Usted descubre que uno de sus compañeros esta manipulando a muchas personas entre amigos y familiares, con el fin de que estos registren en el buzón felicitaciones a su nombre. Ante esta situación usted:',
		correct_answer: 'Sigue desarrollando su trabajo a conciencia, teniendo en cuenta que lo mas importante es desarrollar un comportamiento ético.',
		incorrect_answers: ['Decide buscar ayuda a sus amigos y familiares, con el fin de lograr mayores felicitaciones y así poder ganar los premios.', 'Decide contarle a sus compañeros, con el fin de que se tomen medidas en el asunto, y de esta forma denunciar al compañero.'],
		description: '¡¡¡Correcto!!! Este comportamiento debe ser ejemplar en todo momento, teniendo en cuenta estas competencias básicas organizacionales.'
	},
	{
		id: 14,
		question: 'Se requiere entregar un informe a primera hora del día lunes de la semana entrante; sin embargo, solo queda el día viernes para desarrollarlo. Se han recibido varias ideas para decidir la forma en que se pueda cumplir con este cronograma. ¿Cuál seria la opción mas acertada?',
		correct_answer: 'Que todo el grupo trabaje unido el día viernes hasta terminar el informe, así salgan tarde.',
		incorrect_answers: ['Hacer un sorteo entre todos los compañeros, con el fin de establecer quienes van el día sábado para terminar el informe.', 'Que el jefe decida quienes son las personas que deben ir a trabajar el sábado para terminar el informe.'],
		description: '¡¡¡Correcto!!! Esta acción hace referencia al trabajo en equipo, como medida para alcanzar los objetivos grupales.'
	}
	, {
		id: 15,
		question: 'Le han designado una tarea especial que requiere del aporte de varios de sus compañeros; para esta labor han conformado un grupo de trabajo de cuatro funcionarios donde usted es el líder y encargado de los resultados. Al finalizar el tiempo establecido para la entrega de resultados, se logra evidenciar que no se cumplieron las metas. Ante esta situación usted:',
		correct_answer: 'Asume la responsabilidad por el incumplimiento de las metas.',
		incorrect_answers: ['Culpa a todo el grupo por el incumplimiento de las metas.', 'No asume ninguna responsabilidad, teniendo en cuenta que la responsabilidad es de todos.'],
		description: '¡¡¡Correcto!!! Esta acción obedece a una de las conductas observables de la competencia orientación al logro'
	}
	, {
		id: 16,
		question: 'Desarrollo mi trabajo con mucha dedicación:',
		correct_answer: 'En todo momento.',
		incorrect_answers: ['Cuando mi jefe esta presente.', 'Cuando los ciudadanos están presentes.'],
		description: '¡¡¡Correcto!!! El comportamiento ético nos indica que en todo momento debemos cumplir con nuestras labores al interior de la entidad.'
	}
	, {
		id: 17,
		question: 'Con los cambios inesperados generados por la pandemia, usted prefiere:',
		correct_answer: 'Aceptar los cambios inesperados y trabajar desde casa.',
		incorrect_answers: ['Trabajar desde la oficina, teniendo en cuenta que es mas productivo.', 'Esperar a que todo se normalice.'],
		description: '¡¡¡Correcto!!! Este comportamiento refleja la aceptación a nuevas e inesperadas situaciones y medios. (Adaptabilidad)'
	}
	, {
		id: 18,
		question: 'Respecto del trabajo que realizo al interior de la entidad:',
		correct_answer: 'Soy consciente del impacto de mi actuación en el quehacer institucional.',
		incorrect_answers: ['Debe ser desarrollado con honestidad y calidad.', 'Debe ser desarrollado con pasión y compromiso.'],
		description: '¡¡¡Correcto!!! Esta acción refleja el comportamiento ético de todos y cada uno de los funcionarios de la entidad.'
	}
	, {
		id: 19,
		question: 'Con referencia a la atención de los ciudadanos:',
		correct_answer: 'Entrego respuestas y soluciones oportunas actualizadas y eficientes.',
		incorrect_answers: ['La puntualidad es un factor determinante.', 'Prefiero actuar con total transparencia mostrando un servicio de calidad.'],
		description: '¡¡¡Correcto!!! Esta es una conducta observable de la competencia orientación al usuario y al ciudadano.'
	}
	, {
		id: 20,
		question: 'De manera personal, usted ha tenido conflictos con otro compañero de trabajo por razones externas a la entidad; esta situación:',
		correct_answer: 'No puede afectar su desempeño en el aspecto laboral.',
		incorrect_answers: ['Puede afectar su relación al interior del ambiente laboral.', 'Bajara el rendimiento de ambos.'],
		description: '¡¡¡Correcto!!! La orientación al logro no puede verse afectada por los problemas intrapersonales de los funcionarios.'
	}
	, {
		id: 21,
		question: 'En los puntos de contacto de la entidad se refleja un inconveniente por la caída de los sistemas informáticos electrónicos, lo que esta ocasionando represamiento en la atención al publico. Se ha autorizado el uso de un sistema de contingencia que aunque no es tan eficiente, puede ayudar en la atención al publico mientras se soluciona el inconveniente. Ante esta situación usted como coordinador de uno de los puntos de contacto:',
		correct_answer: 'Se adapta a la contingencia establecida, con el fin de atender a los ciudadanos.',
		incorrect_answers: ['Decide esperar a que el sistema se reestablezca, teniendo en cuenta que no es muy eficiente para la buena atención al ciudadano.', 'Toma la decisión de esperar a que se reestablezcan los sistemas informáticos, con el fin de dar un buen servicio al ciudadano.'],
		description: '¡¡¡Correcto!!! Nótese que esta respuesta refleja una de las competencias básicas u organizacionales que es adaptabilidad.'
	}
	, {
		id: 22,
		question: 'El equipo informático asignado a su nombre ha presentado fallas de hardware, ocasionando que no se pueda trabajar en el desarrollo de sus labores en la entidad. Esta situación ha sido comunicada a su jefe inmediato. Mientras su equipo tiene dificultades usted:',
		correct_answer: 'Decide ayudarle a uno de sus compañeros en sus labores de archivo,	teniendo en cuenta que presenta represamiento en su trabajo.',
		incorrect_answers: ['Gestiona ante la división correspondiente la reparación o cambio de equipo nformático, con el fin de acelerar este procedimiento y poder brindar un buen servicio a los ciudadanos.', 'Trata de hallar la solución al problema de hardware de su equipo, teniendo en cuenta que este puede presentar un daño menor.'],
		description: '¡¡¡Correcto!!! Nótese que esta respuesta refleja una de las competencias básicas u organizacionales que es trabajo en equipo.'
	}
	, {
		id: 23,
		question: 'Se acercan a su puesto de trabajo tres ciudadanos solicitando ayuda en la verificación de información de ciertos expedientes; uno de los ciudadanos es un adulto mayor de 80 años; otro es una persona en situación de discapacidad y otro es un ciudadano de 20 años de edad, que esta actuando de forma grosera para ser atendido. Ante esta situación usted:',
		correct_answer: 'Atiende a los tres ciudadanos, teniendo en cuenta el compromiso con el trabajo y respeto por las personas a quien se sirve.',
		incorrect_answers: ['Prefiere llamar a su jefe inmediato, con el fin de que le asigne a otro compañero para atender al señor que esta actuando de forma grosera.', 'Atiende al ciudadano en situación de discapacidad junto con el adulto mayor, pero le indica al señor que actúa de forma grosera, que si no se calma no será atendido.'],
		description: '¡¡¡Correcto!!! Nótese que esta respuesta refleja una de las competencias básicas u organizacionales que es comportamiento ético.'
	}
	, {
		id: 24,
		question: 'Su jefe inmediato los ha reunido con el fin de dar instrucciones sobre los informes que deben presentar, conforme a las campañas y procesos realizados en el mes. Al finalizar la reunión todos están de acuerdo en haber entendido todas las instrucciones. Antes del plazo para la entrega de los informes, usted olvida varias de las instrucciones impartidas. Ante esta situación usted:',
		correct_answer: 'Realiza las preguntas a su jefe nuevamente, con el fin de entregar eficientemente el informe.',
		incorrect_answers: ['Realiza las preguntas a uno de sus compañeros, teniendo en cuenta que no queda bien que el jefe se entere que no se entendieron los lineamientos.', 'Prefiere realizar el informe utilizando su criterio, con el fin de que el jefe no se entere de usted olvido las instrucciones.'],
		description: '¡¡¡Correcto!!! Nótese que esta respuesta refleja una de las competencias básicas u organizacionales que es comunicación efectiva'
	}
	, {
		id: 25,
		question: 'Para la correcta ejecución de cierto programa de fiscalización, usted evidencia que el trabajo se puede hacer en la mitad del tiempo al utilizar un software que tiene de manera personal. Ante esta situación usted decide llevar a la oficina su equipo portátil y utilizar este software para el desarrollo de las labores mejorando la productividad.	Esta situación:',
		correct_answer: 'No es correcta, teniendo en cuenta que se deben alcanzar los objetivos y metas propuestas, utilizando las herramientas otorgadas por la entidad.',
		incorrect_answers: ['Es correcta, teniendo en cuenta que para el cumplimiento de los objetivos, es valido hacer uso de cualquier tecnología.', 'Coloca en evidencia el retraso de la entidad en cuanto a herramientas tecnológicas.'],
		description: '¡¡¡Correcto!!! Este comportamiento refleja adaptabilidad al uso de las tecnologias otorgadas por la entidad. El hacer uso de nuevas tecnologias hace referencia a la competencia iniciativa, la cual no pertenece a las competencias basicas organizacionales.'
	}
	, {
		id: 26,
		question: 'Un familiar suyo le solicita un favor que tiene que ver con información que cuenta con reserva por parte de la entidad. Ante esta situación usted:',
		correct_answer: 'Le informa que esta información cuenta con reserva por parte de la entidad, razón por la cual no le puede ser suministrada.',
		incorrect_answers: ['Le otorga la información, teniendo en cuenta que se trata de un familiar suyo y esto no tendrá repercusiones a futuro.', 'Le entrega la información, pero le indica que en ningún momento puede publicar la fuente.'],
		description: '¡¡¡Correcto!!! Esta es una conducta asociada a la competencia comportamiento etico, teniendo en cuenta que se debe tener cuidado con la informacion que cuenta con reserva por parte de la entidad.'
	}
	, {
		id: 27,
		question: 'Usted atiende a un ciudadano con referencia al tramite de un proceso con la entidad; sin embargo, queda pendiente hacer un ultimo proceso, razón por la cual el ciudadano vuelve al día siguiente. Ese día usted tiene a varios ciudadanos esperando a ser atendidos y llega el ciudadano que quedo con el proceso pendiente. Ante esta situación usted:',
		correct_answer: 'Prefiere explicarle a todos los ciudadanos que están esperando, sobre la situación con este ciudadano, con el fin de que todos entiendan el porque será atendido.',
		incorrect_answers: ['Lo atiende sin ningún inconveniente, teniendo en cuenta que el ciudadano ya había sido atendido y tenia un proceso pendiente.', 'Le manifiesta que debe venir otro día, teniendo en cuenta que tiene muchos ciudadanos que atender.'],
		description: '¡¡¡Correcto!!! Esta conducta esta asociada a la comunicación efectiva. Es mejor que los usuarios se enteren de la dinamica de atencion, con el fin de evitar malos entendidos.'
	}
	, {
		id: 28,
		question: '¿Qué representa mas importancia para usted?',
		correct_answer: 'Cumplir con las funciones asignadas aplicando el código de ética de la entidad.',
		incorrect_answers: ['Cumplir en tiempo record las funciones asignadas por la entidad.', 'Cumplir las metas de productividad pese a todas las cosas.'],
		description: '¡¡¡Correcto!!! Esta es la competencia mas relevante sobre todas las demás al interior de la entidad, que hace referencia al comportamiento ético. Es quizá lo mas importante que busca la entidad en sus funcionarios.'
	}
	, {
		id: 29,
		question: '¿Qué es mas importante para usted?',
		correct_answer: 'Recibir el reconocimiento de satisfacción de los ciudadanos.',
		incorrect_answers: ['Recibir el reconocimiento de sus compañeros.', 'Recibir el reconocimiento de su jefe.'],
		description: '¡¡¡Correcto!!! Este comportamiento refleja el nivel de compromiso con el usuario y el ciudadano. Adicionalmente este comportamiento lleva como consecuencia, el reconocimiento de la entidad y de los compañeros'
	}
	, {
		id: 30,
		question: 'Usted considera que:',
		correct_answer: 'Los cambios dentro del área laboral son buenos porque brindan nuevas perspectivas y objetivos.',
		incorrect_answers: ['La diligencia es el aspecto mas importante dentro de un ambiente laboral.', 'No hay trabajo completo sin una adecuada responsabilidad social.'],
		description: '¡¡¡Correcto!!! Este comportamiento es una de las conductas observables en la competencia adaptabilidad.'
	}


]

export const pruebaIntegridad = [
	{
		id: 1,
		question: 'Usted debe apoyar para dirimir un conflicto que involucra a dos compañeros de trabajo. El conflicto se presenta por diferencias en cuanto a creencias religiosas. Ante esta situación usted debe:',
		correct_answer: 'Fomentar el respeto a las diferencias, es clave en la gestión de conflictos',
		incorrect_answers: ['Fomentar el diálogo entre las partes, es clave para resolver conflictos', 'Involucrar a los demás compañeros como apoyo para una solución'],
		description: '¡¡¡Correcto!!! Respeto.'
	},
	{
		id: 2,
		question: 'En el ejercicio de sus funciones al interior de la entidad, usted se entera de un proceso de inspección de fiscalización que se adelantará en contra de un familiar de una amiga suya. Ante esta situación usted debe:',
		correct_answer: 'Honrar la promesa de confidencialidad.',
		incorrect_answers: ['Informar a su amiga sobre la situación', 'Buscar más información sobre la situación.'],
		description: '¡¡¡Correcto!!! Honestidad.'
	},
	{
		id: 3,
		question: 'Un compañro le pide el favor de prestarle 10 minutos su computador, teniendo en cuenta que debe terminar un informe urgente que debe ser enviado para revisión. Ante esta situación usted debe:',
		correct_answer: 'Prestar el equipo a su compañero, pero debe cerrar todas las sesiones abiertas.',
		incorrect_answers: ['Negar el préstamos a su compañero, teniendo en cuenta que este tipo de préstamo está prohibido', 'Indicar a su compañero,solicitar la autorización correspondiente al jefe inmediato.'],
		description: '¡¡¡Correcto!!! No soy descuidado con la información a mi cargo (Honestidad).'
	},
	{
		id: 4,
		question: 'La entidad ha realizado una actualización al panel de control de los sistemas informáticos electrónicos, adicionando un nuevo servicio en el menú de usuarios. Ante esta situación usted prefiere:',
		correct_answer: 'Practicar el autoaprendizaje, investigando de qué se trata el nuevo servicio',
		incorrect_answers: ['Pasar por alto este nuevo servicio, teniendo en cuenta que aún no llega información sobre el mismo', 'Estar a la expectativa de información sobre el nuevo servicio'],
		description: '¡¡¡Correcto!!! Me capacito y practico el autoaprendizaje constantemente, porque entiendo que es necesario y clave para realizar correctamente mi función. Compromiso.'
	},
	{
		id: 5,
		question: 'Usted debe imprimir ciertos documentos de carácter personal; sin embargo no lo hace en su casa, porque no cuenta con una impresora láser. En su puesto de trabajo se usa una impresora láser. Ante esto usted:',
		correct_answer: 'No usa la impresora de la oficina para este tipo de trabajos.',
		incorrect_answers: ['Imprime los documentos en la impresora de la oficina', 'Usa la impresora de la oficina pero aporta el papel necesario para las impresiones.'],
		description: '¡¡¡Correcto!!! Uso responsablemente los recursos públicos para cumplir con mis obligaciones. Lo público es de todos y no se desperdicia. Diligencia.'
	},

	{
		id: 6,
		question: 'Se ha solicitado a la oficina de comunicaciones, varios afiches con los requisitos necesarios para la prestación de un buen servicio para los ciudadanos.La oficina de comunicaciones ha manifestado que se demoran aproximadamente un mes para tener listos los afiches, pero estos se requieren con urgencia. Usted tiene el conocimiento para hacer los afiches de manera temporal. Ante esta situación usted debe:',
		correct_answer: 'Hacerlos, teniendo en cuenta que son de manera temporal y pueden ayudar en la guía correcta de los ciudadanos.',
		incorrect_answers: ['Indicarle al jefe inmediato, que la única opción es esperar los afiches institucionales', 'No hacerlos, teniendo en cuenta que la imagen institucional se verá afectada.'],
		description: '¡¡¡Correcto!!! Pongo a disposición de la Entidad mis talentos, habilidades y competencias para que contributan a la creación de formas de cumplimiento eficiente en desarrollo de la misión institucional. Innovación.'
	},

	{
		id: 7,
		question: 'Varios compañeros están realizando el trámite de retiro de cesantías y tienen a una persona que le suministra los contratos de obra para que puedan cumplir con el requisito de remodelación de vivienda y de esta manera tener accesso a esos fondos rápidamente. Usted necesita el dinero de cesantías y le ofrecen esta opción. Ante esto usted:',
		correct_answer: 'Espera a que realmente se necesite una remodelación, para realizar el trámite',
		incorrect_answers: ['Acude al servicio de la persona para poder retirar las cesantías', 'Prefiere acudir a otra persona para que le haga ese trámite.'],
		description: '¡¡¡Correcto!!! No justifico situaciones administrativas o accedo a mejoras laborales con documentos falsos. Honestidad.'
	},
	{
		id: 8,
		question: 'En el trámite realizado a un ciudadano, usted ha cometido un error que representa que el ciudadano deba esperar varias horas para darle una solución. Ante esta situación usted debe:',
		correct_answer: 'Decir la verdad al ciudadano, aunque este pueda molestarse.',
		incorrect_answers: ['Indicar al ciudadano que la culpa es de los servicios informáticos de la entidad', 'Mencionar que hubo complicaciones que no son inherentes a usted.'],
		description: '¡¡¡Correcto!!! Siempre digo la verdad, incluso cuando tengo errores, porque es humano cometerlos, pero no es correcto esconderlos. Honestidad.'
	},
	{
		id: 9,
		question: 'En el proceso de atención a un ciudadano, usted no tiene todo el conocimiento necesario para darle toda la información necesaria; por eso, decide pedir ayuda a sus compañeros, pero encuentra que nadie se dispone a ayudar. Ante esto usted:',
		correct_answer: 'Busca otros medios pertinentes al interior de la ciudad, con el fin de recibir ayuda.',
		incorrect_answers: ['Atiende al ciudadano con el poco conocimiento que tiene', 'Decide discutir con sus compañeros para que le brinden ayuda.'],
		description: '¡¡¡Correcto!!! Cuando tengo dudas respecto a la aplicación de mis deberes, busco orientación en las instancias pertinentes al interior de mi entidad. Es válido no saberlo todo y también es válido pedir ayuda. Honestidad.'
	},
	{
		id: 10,
		question: 'Varios compañeros han manifestado que últimamente el carácter suyo, contribuye a la generación de un mal clima laboral al interior del grupo. Ante esta situación usted decide:',
		correct_answer: 'Abrir la ventana del diálogo y la comprensión, a pesar de que los demás tengan perspectivas y opiniones distintas a la suyas.',
		incorrect_answers: ['Cambiar su forma de ser, con el fin de que esta situación mejore.', 'Mencionar al grupo que ellos también deben analizarse, para que el clima laboral mejore.'],
		description: '¡¡¡Correcto!!! Respeto.'
	},
	{
		"id": 11,
		"question": "Un proveedor te ofrece una comisión si lo ayudas a ganar una licitación. ¿Qué debes hacer?",
		"correct_answer": "Rechazar la oferta y reportarla de inmediato a los entes de control de la entidad.",
		"incorrect_answers": [
			"Aceptar la comisión y ayudarlo discretamente.",
			"Decirle que no puedes ayudarlo, pero no reportarlo.",
			"Ignorarlo y continuar con el proceso sin intervenir."
		],
		"description": "¡¡¡Correcto!!! La integridad requiere actuar con honestidad y denunciar cualquier intento de soborno o corrupción."
	},
	{
		"id": 12,
		"question": "Durante una revisión interna, descubres que cometiste un error en tu reporte. ¿Qué es lo correcto?",
		"correct_answer": "Reconocer el error y corregirlo oportunamente, informando a quien corresponda.",
		"incorrect_answers": [
			"Ocultarlo esperando que nadie lo note.",
			"Modificar el informe sin dejar evidencia.",
			"Responsabilizar a otra persona para evitar consecuencias."
		],
		"description": "¡¡¡Correcto!!! Reconocer los errores propios es una manifestación clara de responsabilidad e integridad."
	},
	{
		"id": 13,
		"question": "Un compañero te pide acceso a tu cuenta institucional para adelantar una tarea urgente. ¿Qué haces?",
		"correct_answer": "Le explico que no puedo compartir mis credenciales y le sugiero acudir al área correspondiente.",
		"incorrect_answers": [
			"Le doy la contraseña solo por esa vez.",
			"Lo dejo usar mi cuenta bajo supervisión.",
			"Le doy acceso si promete no revisar otra información."
		],
		"description": "¡¡¡Correcto!!! Compartir contraseñas va en contra de las normas de seguridad y ética institucional."
	},
	{
		"id": 14,
		"question": "Tienes la posibilidad de beneficiar a un conocido en un proceso selectivo sin que nadie se entere. ¿Qué haces?",
		"correct_answer": "Actúo con imparcialidad y me abstengo de intervenir en el proceso.",
		"incorrect_answers": [
			"Lo ayudo discretamente porque confío en su capacidad.",
			"Le doy información extraoficial para que se prepare mejor.",
			"Delego el proceso en otro para no tener que decidir."
		],
		"description": "¡¡¡Correcto!!! La integridad se refleja en actuar sin favoritismos ni conflictos de interés."
	},
	{
		"id": 15,
		"question": "Te enteras de un fraude en tu dependencia, pero temes represalias. ¿Qué conducta es adecuada?",
		"correct_answer": "Reportarlo a través de los canales institucionales seguros y anónimos, si es posible.",
		"incorrect_answers": [
			"No hacer nada por miedo a perder el empleo.",
			"Contarlo solo a compañeros de confianza.",
			"Esperar a que alguien más lo denuncie primero."
		],
		"description": "¡¡¡Correcto!!! La integridad institucional requiere denunciar irregularidades, incluso de forma anónima si es necesario."
	},
	{
		"id": 16,
		"question": "Un funcionario recibe un regalo costoso por parte de un contratista. ¿Qué acción es la más ética?",
		"correct_answer": "Rechazar el regalo y reportar el hecho a las autoridades competentes.",
		"incorrect_answers": [
			"Aceptar el regalo pero no decir nada.",
			"Aceptar el regalo y agradecer la cortesía.",
			"Devolver el regalo sin reportarlo para evitar problemas."
		],
		"description": "¡¡¡Correcto!!! Aceptar regalos de partes interesadas puede constituir un conflicto de interés y debe reportarse."
	},
	{
		"id": 17,
		"question": "Te enteras de que un compañero está alterando registros para ocultar un incumplimiento. ¿Qué debes hacer?",
		"correct_answer": "Informar el hecho a los órganos de control o a tu superior inmediato.",
		"incorrect_answers": [
			"Hablar con el compañero y pedirle que no lo vuelva a hacer.",
			"Ignorar el hecho para evitar conflictos.",
			"Cubrirlo porque es tu amigo y confías en él."
		],
		"description": "¡¡¡Correcto!!! La omisión frente a hechos irregulares también compromete la integridad."
	},
	{
		"id": 18,
		"question": "Estás en una situación en la que nadie supervisa tu trabajo. ¿Qué actitud demuestra mayor integridad?",
		"correct_answer": "Hacer tu trabajo con la misma calidad y ética, aunque no seas supervisado.",
		"incorrect_answers": [
			"Aprovechar para trabajar menos.",
			"Hacer lo mínimo necesario para cumplir.",
			"Delegar todo el trabajo sin supervisión."
		],
		"description": "¡¡¡Correcto!!! La integridad implica actuar correctamente incluso cuando nadie nos observa."
	},
	{
		"id": 19,
		"question": "Un colega te pide que omitas cierta información en un informe porque podría afectar su evaluación. ¿Qué debes hacer?",
		"correct_answer": "Incluir toda la información relevante, aunque afecte a terceros.",
		"incorrect_answers": [
			"Omitir la información por solidaridad.",
			"Negociar con tu colega para modificar el informe.",
			"Retrasar la entrega del informe para evitar el conflicto."
		],
		"description": "¡¡¡Correcto!!! La veracidad y la transparencia son principios esenciales de la integridad pública."
	},
	{
		"id": 20,
		"question": "Recibes un regalo costoso de un proveedor después de cerrar un contrato. ¿Cuál es la acción correcta?",
		"correct_answer": "Rechazar el regalo y reportarlo a la oficina de control disciplinario.",
		"incorrect_answers": [
			"Aceptar el regalo si ya se firmó el contrato.",
			"Guardar el regalo sin contarle a nadie.",
			"Aceptar el regalo y agradecer discretamente."
		],
		"description": "¡¡¡Correcto!!! Aceptar regalos de contratistas puede constituir una falta disciplinaria y compromete tu imparcialidad."
	},
	{
		"id": 21,
		"question": "Te piden emitir un certificado con datos que no han sido verificados aún. ¿Qué debes hacer?",
		"correct_answer": "Negarte hasta que se verifique toda la información.",
		"incorrect_answers": [
			"Emitir el certificado y verificar después.",
			"Pedir que otro lo firme en tu lugar.",
			"Emitirlo con una nota aclaratoria no oficial."
		],
		"description": "¡¡¡Correcto!!! Firmar documentos sin certeza de su veracidad va en contra de los principios de legalidad y responsabilidad."
	},
	{
		"id": 22,
		"question": "En una reunión, alguien propone alterar cifras para justificar gastos. ¿Cómo actúas?",
		"correct_answer": "Me opongo claramente y reporto la propuesta a los entes de control.",
		"incorrect_answers": [
			"Acepto para evitar problemas con el grupo.",
			"Sugiero hacerlo de una forma que no sea tan evidente.",
			"No participo en la conversación, pero tampoco denuncio."
		],
		"description": "¡¡¡Correcto!!! La integridad exige rechazar y denunciar cualquier conducta que implique falsedad o fraude."
	},
	{
		"id": 23,
		"question": "Eres testigo de una conducta indebida de un superior. ¿Qué actitud refleja integridad?",
		"correct_answer": "Reportar la conducta por los canales institucionales establecidos.",
		"incorrect_answers": [
			"Guardar silencio para no perjudicar tu carrera.",
			"Hablar solo con compañeros para desahogarte.",
			"Esperar a que se presenten más pruebas."
		],
		"description": "¡¡¡Correcto!!! La ética profesional implica actuar con valor, aún frente a figuras de autoridad, para proteger el interés público."
	},
	{
		"id": 24,
		"question": "Si descubres que un compañero está usando recursos públicos para beneficio personal, ¿qué debes hacer?",
		"correct_answer": "Reportar el hecho a las autoridades competentes.",
		"incorrect_answers": [
			"Hablar con él para que no lo haga de nuevo.",
			"Ignorar la situación, ya que no te afecta directamente.",
			"Hacer lo mismo para equilibrar la situación."
		],
		"description": "¡¡¡Correcto!!! El uso indebido de recursos públicos debe ser denunciado para proteger el interés general."
	},
	{
		"id": 25,
		"question": "Te ofrecen dinero para agilizar un trámite que está bajo tu responsabilidad. ¿Qué haces?",
		"correct_answer": "Rechazas la oferta y denuncias el intento de soborno.",
		"incorrect_answers": [
			"Aceptas si nadie más se entera.",
			"Dices que lo harás pero sin aceptar el dinero.",
			"Cobras más para que parezca una tarifa oficial."
		],
		"description": "¡¡¡Correcto!!! Aceptar o no denunciar un soborno atenta contra la integridad y puede tener consecuencias legales."
	},
	{
		"id": 26,
		"question": "Un amigo cercano te pide información confidencial de tu trabajo. ¿Qué deberías hacer?",
		"correct_answer": "Negarte y explicarle que se trata de información reservada.",
		"incorrect_answers": [
			"Compartirla, pero pedirle que no diga nada.",
			"Dársela si no parece algo grave.",
			"Modificar los datos antes de entregárselos."
		],
		"description": "¡¡¡Correcto!!! La confidencialidad en el servicio público es un deber fundamental, incluso frente a personas cercanas."
	},
	{
		"id": 27,
		"question": "Tu jefe te pide alterar una fecha en un documento oficial. ¿Cuál es la conducta íntegra?",
		"correct_answer": "Negarte y advertir que eso constituye una falta disciplinaria.",
		"incorrect_answers": [
			"Hacerlo por tratarse de tu superior jerárquico.",
			"Cambiarla si el jefe asume la responsabilidad.",
			"Hacerlo para evitar conflictos laborales."
		],
		"description": "¡¡¡Correcto!!! La obediencia no justifica actos contrarios a la ley o a la ética."
	},
	{
		"id": 28,
		"question": "¿Qué principio de la función pública exige actuar siempre con honestidad y rectitud?",
		"correct_answer": "Integridad.",
		"incorrect_answers": [
			"Agilidad.",
			"Jerarquía.",
			"Eficiencia."
		],
		"description": "¡¡¡Correcto!!! La integridad garantiza que las decisiones y actuaciones se basen en valores éticos y legales."
	},
	{
		"id": 29,
		"question": "Durante un proceso de contratación, un familiar tuyo participa como oferente. ¿Qué debes hacer?",
		"correct_answer": "Declararte impedido por conflicto de interés.",
		"incorrect_answers": [
			"Apoyarlo discretamente para que gane.",
			"No decir nada si crees que puede ganar legalmente.",
			"Aconsejarle cómo presentar mejor su propuesta."
		],
		"description": "¡¡¡Correcto!!! Declararse impedido protege la transparencia y evita conflictos de interés en la función pública."
	},
	{
		"id": 30,
		"question": "Si notas que se están desviando fondos de un proyecto institucional, ¿cuál sería una conducta íntegra?",
		"correct_answer": "Informar inmediatamente a los entes de control o superiores jerárquicos.",
		"incorrect_answers": [
			"Esperar a tener más pruebas antes de decir algo.",
			"Ignorar el hecho si no estás directamente involucrado.",
			"Usarlo como oportunidad para obtener un beneficio personal."
		],
		"description": "¡¡¡Correcto!!! La omisión ante actos de corrupción también compromete la responsabilidad del servidor público."
	},
	{
		"id": 31,
		"question": "Un contratista te ofrece regalos frecuentes a cambio de agilizar procesos. ¿Cuál es la acción correcta?",
		"correct_answer": "Rechazar los regalos y reportar el hecho.",
		"incorrect_answers": [
			"Aceptar los regalos si no afectan tus decisiones.",
			"Aceptar, pero sin comprometerte con el contratista.",
			"Esperar a que los regalos sean de mayor valor antes de decidir."
		],
		"description": "¡¡¡Correcto!!! Aceptar regalos por tu cargo puede constituir una falta ética y legal, aun si no se condicionan decisiones."
	},
	{
		"id": 32,
		"question": "En una reunión privada se decide no registrar un acta para evitar problemas. ¿Qué deberías hacer?",
		"correct_answer": "Exigir que se deje constancia escrita de lo tratado.",
		"incorrect_answers": [
			"Aceptar para evitar conflictos entre los presentes.",
			"Hacer un acta personal y guardarla por si acaso.",
			"Seguir lo acordado sin dejar registro alguno."
		],
		"description": "¡¡¡Correcto!!! Todo acto oficial debe tener trazabilidad para asegurar la legalidad, transparencia y responsabilidad."
	},
	{
		"id": 33,
		"question": "¿Qué actitud demuestra mayor compromiso con la ética pública?",
		"correct_answer": "Actuar de forma coherente con los valores y principios del servicio público, incluso cuando nadie observa.",
		"incorrect_answers": [
			"Cumplir solo lo estrictamente obligatorio.",
			"Buscar beneficios personales sin afectar a otros.",
			"Obedecer siempre a los superiores sin cuestionar."
		],
		"description": "¡¡¡Correcto!!! La ética pública exige coherencia entre lo que se dice, lo que se piensa y lo que se hace."
	},
	{
		"id": 34,
		"question": "Si te asignan una tarea que implica manejar información confidencial, ¿qué debes hacer?",
		"correct_answer": "Guardar reserva y utilizarla solo para los fines autorizados.",
		"incorrect_answers": [
			"Compartirla con compañeros de confianza.",
			"Publicarla si crees que es de interés general.",
			"Utilizarla para obtener beneficios propios."
		],
		"description": "¡¡¡Correcto!!! La confidencialidad es un principio esencial para la integridad en el servicio público."
	},
	{
		"id": 35,
		"question": "Tu jefe te pide alterar un informe para mejorar la imagen del área. ¿Qué haces?",
		"correct_answer": "Te niegas y reportas la solicitud a las instancias correspondientes.",
		"incorrect_answers": [
			"Lo haces porque es una orden directa.",
			"Alteras solo algunos datos para no perjudicar a nadie.",
			"Ignoras la petición sin reportarla."
		],
		"description": "¡¡¡Correcto!!! La lealtad institucional no justifica actuar en contra de la verdad ni de la legalidad."
	},
	{
		"id": 36,
		"question": "¿Qué significa actuar con imparcialidad en el ejercicio de lo público?",
		"correct_answer": "Tomar decisiones objetivas sin favorecer intereses particulares.",
		"incorrect_answers": [
			"Favorecer a quien te apoyó para obtener el cargo.",
			"Buscar apoyo político para mantener tu puesto.",
			"Aceptar recomendaciones personales para ciertos procesos."
		],
		"description": "¡¡¡Correcto!!! La imparcialidad garantiza el respeto a la legalidad y la igualdad en la administración pública."
	},
	{
		"id": 37,
		"question": "Al ver una irregularidad en tu equipo de trabajo, ¿qué harías si deseas actuar con integridad?",
		"correct_answer": "Reportar el hecho a las autoridades competentes con pruebas claras.",
		"incorrect_answers": [
			"Advertir en privado a quien cometió la falta para que corrija.",
			"Guardar silencio para no generar problemas.",
			"Contarlo a otros compañeros para presionarlo indirectamente."
		],
		"description": "¡¡¡Correcto!!! Actuar con integridad implica enfrentar las irregularidades conforme a la ley y los canales adecuados."
	},
	{
		"id": 38,
		"question": "¿Cuál de estas situaciones refleja una conducta ética en el servicio público?",
		"correct_answer": "Denunciar un acto de corrupción aunque te implique riesgos personales.",
		"incorrect_answers": [
			"Encubrir a un compañero por lealtad.",
			"Callar para proteger tu estabilidad laboral.",
			"Aprovechar los recursos institucionales para fines personales menores."
		],
		"description": "¡¡¡Correcto!!! El compromiso con la legalidad y la transparencia exige valentía y coherencia moral."
	},
	{
		"id": 39,
		"question": "¿Qué significa actuar con transparencia en la gestión pública?",
		"correct_answer": "Permitir el acceso a la información y rendir cuentas de manera clara.",
		"incorrect_answers": [
			"Ocultar información para evitar críticas.",
			"Compartir solo lo que favorece a la entidad.",
			"Informar únicamente a los superiores."
		],
		"description": "¡¡¡Correcto!!! La transparencia fortalece la confianza de la ciudadanía en las instituciones."
	},
	{
		"id": 40,
		"question": "¿Cuál es una práctica correcta para evitar conflictos de interés en el servicio público?",
		"correct_answer": "Declarar oportunamente cualquier relación o situación que pueda afectar la imparcialidad.",
		"incorrect_answers": [
			"Omitir información para no generar problemas.",
			"Delegar decisiones importantes a familiares.",
			"Aceptar regalos de proveedores."
		],
		"description": "¡¡¡Correcto!!! La declaración oportuna previene la corrupción y protege la integridad institucional."
	},
	{
		"id": 41,
		"question": "Cuando recibes un obsequio de un proveedor, ¿qué debes hacer para actuar con integridad?",
		"correct_answer": "Rechazarlo o reportarlo según la normativa institucional.",
		"incorrect_answers": [
			"Aceptar siempre que sea un detalle pequeño.",
			"Guardar el regalo sin informar a nadie.",
			"Compartirlo con otros compañeros para evitar problemas."
		],
		"description": "¡¡¡Correcto!!! La ética en el servicio público prohíbe recibir regalos que puedan influir en decisiones."
	},
	{
		"id": 42,
		"question": "¿Qué actitud refleja una persona con integridad en la gestión pública?",
		"correct_answer": "Cumplir con las normas aunque no haya supervisión directa.",
		"incorrect_answers": [
			"Esperar a que alguien supervise para cumplir.",
			"Realizar solo lo que le ordenan sin cuestionar.",
			"Evitar responsabilidades difíciles."
		],
		"description": "¡¡¡Correcto!!! La integridad implica actuar conforme a los principios éticos en todo momento."
	},
	{
		"id": 43,
		"question": "¿Qué es el uso adecuado de los recursos públicos?",
		"correct_answer": "Utilizarlos exclusivamente para fines institucionales autorizados.",
		"incorrect_answers": [
			"Usarlos para actividades personales si son pequeñas cantidades.",
			"Permitir que amigos usen los recursos sin permiso.",
			"Prestar recursos a terceros sin autorización."
		],
		"description": "¡¡¡Correcto!!! El manejo responsable de recursos protege el patrimonio público y la confianza ciudadana."
	},
	{
		"id": 44,
		"question": "Una conducta que atenta contra la integridad en el servicio público es:",
		"correct_answer": "Ocultar información para beneficiar intereses personales.",
		"incorrect_answers": [
			"Informar de manera clara y oportuna.",
			"Reportar irregularidades detectadas.",
			"Cumplir con los procedimientos establecidos."
		],
		"description": "¡¡¡Correcto!!! La ocultación de información compromete la transparencia y la legalidad."
	},
	{
		"id": 45,
		"question": "¿Qué debes hacer si observas que un compañero está incumpliendo normas éticas?",
		"correct_answer": "Informar a las autoridades o instancias correspondientes de manera responsable.",
		"incorrect_answers": [
			"Ignorar la situación para no crear conflictos.",
			"Hablar mal del compañero con otros colegas.",
			"Resolverlo por tu cuenta sin informar."
		],
		"description": "¡¡¡Correcto!!! La responsabilidad ética incluye denunciar conductas inapropiadas conforme a la ley."
	},
	{
		"id": 46,
		"question": "¿Cuál es el principal objetivo de la probidad en la función pública?",
		"correct_answer": "Ejercer el cargo con honestidad, justicia y respeto por la ley.",
		"incorrect_answers": [
			"Buscar beneficios personales mediante el cargo.",
			"Favorecer a amigos y familiares.",
			"Evitar tomar decisiones difíciles."
		],
		"description": "¡¡¡Correcto!!! La probidad garantiza confianza y legitimidad en la gestión pública."
	},
	{
		"id": 47,
		"question": "Para actuar con responsabilidad en la función pública se debe:",
		"correct_answer": "Responder por las acciones y decisiones tomadas en el cargo.",
		"incorrect_answers": [
			"Evadir responsabilidades ante errores.",
			"Delegar todas las decisiones importantes.",
			"Ignorar las consecuencias de las decisiones."
		],
		"description": "¡¡¡Correcto!!! La responsabilidad implica asumir las consecuencias y aprender de los errores."
	},
	{
		"id": 48,
		"question": "¿Qué significa actuar con respeto en el ámbito laboral público?",
		"correct_answer": "Tratar a todos con dignidad y consideración, sin discriminación.",
		"incorrect_answers": [
			"Favorecer solo a personas cercanas.",
			"Ignorar opiniones contrarias a la propia.",
			"Permitir tratos despectivos si son entre compañeros."
		],
		"description": "¡¡¡Correcto!!! El respeto fortalece un ambiente laboral sano y colaborativo."
	},
	{
		"id": 49,
		"question": "¿Cuál es la consecuencia de no actuar con integridad en la administración pública?",
		"correct_answer": "Pérdida de confianza ciudadana y sanciones legales.",
		"incorrect_answers": [
			"Mayor reconocimiento y apoyo público.",
			"Mejor desempeño laboral sin problemas.",
			"Beneficios personales sin consecuencias."
		],
		"description": "¡¡¡Correcto!!! La falta de integridad afecta la legitimidad y la eficiencia institucional."
	},
	{
		"id": 50,
		"question": "Una práctica que fortalece la integridad en las instituciones públicas es:",
		"correct_answer": "Capacitar continuamente al personal en ética y transparencia.",
		"incorrect_answers": [
			"Permitir discrecionalidad sin controles.",
			"Ignorar denuncias para evitar conflictos.",
			"Delegar la ética solo a los altos directivos."
		],
		"description": "¡¡¡Correcto!!! La formación constante promueve una cultura de integridad y cumplimiento."
	}


]

export const conocimientosTributarios = [

	{
		"id": 1,
		"question": "¿Cuál de estos macro procesos NO pertenecen a la DIAN?",
		"correct_answer": "Recaudación y Control Interno",
		"incorrect_answers": ["Misionales", "Estratégicos", "De apoyo y evaluación"],
		"description": "¡¡Correcto!!! 'Recaudación y Control Interno' no es uno de los macro procesos oficialmente definidos por la DIAN, que agrupa sus procesos en misionales, estratégicos, y de apoyo y evaluación."
	},
	{
		"id": 2,
		"question": "¿Qué impuesto es de carácter territorial en Colombia?",
		"correct_answer": "Impuesto de Industria y Comercio (ICA)",
		"incorrect_answers": ["Impuesto sobre la Renta", "IVA", "Gravamen a los Movimientos Financieros (GMF)"],
		"description": "¡¡Correcto!!! El ICA es un impuesto territorial administrado por los municipios, a diferencia de los demás que son nacionales y administrados por la DIAN."
	},
	{
		"id": 3,
		"question": "¿Cuál es el principal objetivo del Régimen Simple de Tributación (RST)?",
		"correct_answer": "Simplificar el cumplimiento de obligaciones tributarias",
		"incorrect_answers": ["Eliminar el IVA", "Reemplazar el impuesto de renta", "Cobrar más impuestos a grandes empresas"],
		"description": "¡¡Correcto!!! El Régimen Simple busca simplificar la carga formal tributaria para pequeños empresarios, facilitando su cumplimiento."
	},
	{
		"id": 4,
		"question": "¿Qué documento fiscal es obligatorio para soportar una venta ante la DIAN?",
		"correct_answer": "Factura electrónica de venta",
		"incorrect_answers": ["Recibo de caja", "Cotización comercial", "Nota contable"],
		"description": "¡¡Correcto!!! La factura electrónica de venta es el único documento aceptado por la DIAN como soporte válido para transacciones comerciales obligadas a facturar."
	},
	{
		"id": 5,
		"question": "¿Cuál de los siguientes impuestos es administrado por la DIAN?",
		"correct_answer": "Impuesto sobre la Renta y Complementarios",
		"incorrect_answers": ["Impuesto Predial", "Impuesto de Vehículos", "Impuesto de Alumbrado Público"],
		"description": "¡¡Correcto!!! El Impuesto sobre la Renta y Complementarios es un tributo nacional administrado por la DIAN, a diferencia de los otros, que son de competencia territorial."
	},
	{
		"id": 6,
		"question": "¿Qué valor representa una UVT para el año gravable 2024 según la DIAN?",
		"correct_answer": "$47.065",
		"incorrect_answers": ["$38.004", "$45.530", "$50.000"],
		"description": "¡¡Correcto!!! La DIAN fijó el valor de la Unidad de Valor Tributario (UVT) para el año 2024 en $47.065, mediante resolución oficial."
	},
	{
		"id": 7,
		"question": "¿Cuál de los siguientes contribuyentes puede acogerse al Régimen Simple de Tributación (RST)?",
		"correct_answer": "Una persona natural comerciante con ingresos brutos anuales inferiores a 100.000 UVT",
		"incorrect_answers": ["Una multinacional con presencia en varios países", "Una entidad sin ánimo de lucro", "Una empresa pública de servicios"],
		"description": "¡¡Correcto!!! El Régimen Simple está dirigido a pequeños y medianos empresarios, incluyendo personas naturales con ingresos brutos anuales menores a 100.000 UVT."
	},
	{
		"id": 8,
		"question": "¿Qué sanción aplica si un contribuyente no presenta una declaración tributaria estando obligado a ello?",
		"correct_answer": "Sanción por no declarar",
		"incorrect_answers": ["Sanción por mora", "Sanción por extemporaneidad", "Sanción por evasión"],
		"description": "¡¡Correcto!!! La sanción por no declarar se impone cuando un contribuyente no presenta una declaración obligatoria, y es una de las más graves establecidas en el Estatuto Tributario."
	},
	{
		"id": 9,
		"question": "¿Cuál es el porcentaje general del IVA en Colombia?",
		"correct_answer": "19%",
		"incorrect_answers": ["16%", "21%", "12%"],
		"description": "¡¡Correcto!!! El porcentaje general del IVA en Colombia es del 19%, aunque existen tarifas diferenciales para algunos bienes y servicios."
	},
	{
		"id": 10,
		"question": "¿Qué entidad fija el calendario tributario nacional en Colombia?",
		"correct_answer": "Dirección de Impuestos y Aduanas Nacionales (DIAN)",
		"incorrect_answers": ["Ministerio de Hacienda", "Gobernaciones", "Contraloría General de la República"],
		"description": "¡¡Correcto!!! La DIAN es la entidad encargada de establecer mediante resolución el calendario tributario que deben seguir los contribuyentes a nivel nacional."
	},
	{
		"id": 11,
		"question": "¿Cuál es la función principal del Registro Único Tributario (RUT)?",
		"correct_answer": "Identificar, ubicar y clasificar a los contribuyentes",
		"incorrect_answers": ["Emitir facturas electrónicas", "Recaudar impuestos", "Liquidar sanciones tributarias"],
		"description": "¡¡Correcto!!! El RUT permite identificar, ubicar y clasificar a las personas naturales y jurídicas ante la DIAN para efectos tributarios y aduaneros."
	},
	{
		"id": 12,
		"question": "¿Cuál es el plazo general para declarar y pagar el IVA en el régimen común bimestral?",
		"correct_answer": "Dentro de los plazos establecidos por la DIAN, cada dos meses",
		"incorrect_answers": ["Cada seis meses", "Mensualmente", "Anualmente"],
		"description": "¡¡Correcto!!! Los responsables del IVA en el régimen bimestral deben declarar y pagar este impuesto cada dos meses, siguiendo el calendario que fija la DIAN."
	},
	{
		"id": 13,
		"question": "¿Qué tipo de retención se aplica sobre pagos por servicios prestados por personas naturales?",
		"correct_answer": "Retención en la fuente por honorarios o servicios",
		"incorrect_answers": ["IVA", "Régimen Simple", "Gravamen a los Movimientos Financieros"],
		"description": "¡¡Correcto!!! La retención en la fuente por servicios u honorarios aplica cuando se contrata a una persona natural y busca recaudar anticipadamente el impuesto de renta."
	},
	{
		"id": 14,
		"question": "¿Qué obligación tributaria tiene una persona natural que alquila un inmueble y obtiene ingresos por ello?",
		"correct_answer": "Debe declarar renta si supera los topes establecidos",
		"incorrect_answers": ["No tiene ninguna obligación", "Debe pagar ICA obligatoriamente", "Solo debe sacar el RUT"],
		"description": "¡¡Correcto!!! Si los ingresos por arriendo superan los topes anuales definidos en UVT, la persona natural está obligada a declarar renta."
	},
	{
		"id": 15,
		"question": "¿Qué impuesto se causa al realizar transacciones financieras en Colombia?",
		"correct_answer": "Gravamen a los Movimientos Financieros (GMF)",
		"incorrect_answers": ["IVA", "ICA", "Impuesto al Consumo"],
		"description": "¡¡Correcto!!! El GMF, conocido como '4x1000', se aplica sobre los retiros o movimientos de recursos en cuentas financieras."
	},
	{
		"id": 16,
		"question": "¿Qué personas están obligadas a expedir factura electrónica en Colombia?",
		"correct_answer": "Quienes desarrollan actividades económicas gravadas y superan topes establecidos por la DIAN",
		"incorrect_answers": ["Solo grandes contribuyentes", "Solo personas jurídicas", "Cualquier persona natural sin importar sus ingresos"],
		"description": "¡¡Correcto!!! La obligación de facturar electrónicamente aplica a quienes desarrollan actividades económicas y cumplen con los topes de ingresos o condiciones definidos por la DIAN."
	},
	{
		"id": 17,
		"question": "¿Cuál es el documento exigido por la DIAN para acreditar el cumplimiento de obligaciones fiscales ante terceros?",
		"correct_answer": "Certificado de cumplimiento tributario",
		"incorrect_answers": ["RUT", "Declaración de renta", "Factura electrónica"],
		"description": "¡¡Correcto!!! El certificado de cumplimiento tributario es un documento emitido por la DIAN que acredita el cumplimiento de obligaciones fiscales por parte del contribuyente."
	},
	{
		"id": 18,
		"question": "¿Cuál es la tarifa general de retención en la fuente por prestación de servicios por personas naturales en 2024?",
		"correct_answer": "10%",
		"incorrect_answers": ["19%", "2.5%", "15%"],
		"description": "¡¡Correcto!!! La tarifa general para personas naturales por servicios es del 10%, aunque puede variar si se cumplen ciertos requisitos como pertenecer al régimen de costos y gastos del 40%."
	},
	{
		"id": 19,
		"question": "¿Qué es el NIT en el sistema tributario colombiano?",
		"correct_answer": "Número de Identificación Tributaria",
		"incorrect_answers": ["Número de Identidad Técnica", "Norma de Ingreso Tributario", "Nota de Ingreso Transaccional"],
		"description": "¡¡Correcto!!! El NIT es el Número de Identificación Tributaria, asignado por la DIAN para identificar a los contribuyentes en Colombia."
	},
	{
		"id": 20,
		"question": "¿Qué entidad tiene la función de interpretar y aplicar la normatividad tributaria en Colombia?",
		"correct_answer": "Dirección de Impuestos y Aduanas Nacionales (DIAN)",
		"incorrect_answers": ["Ministerio del Interior", "Superintendencia de Sociedades", "Registraduría Nacional del Estado Civil"],
		"description": "¡¡Correcto!!! La DIAN es la autoridad competente para administrar, interpretar y aplicar las normas tributarias y aduaneras a nivel nacional."
	},
	{
		"id": 21,
		"question": "¿Cuál es el plazo para actualizar el RUT después de un cambio en la actividad económica?",
		"correct_answer": "Un mes calendario contado a partir del cambio",
		"incorrect_answers": ["15 días hábiles", "Tres meses", "No es obligatorio actualizarlo"],
		"description": "¡¡Correcto!!! La actualización del RUT debe realizarse dentro del mes calendario siguiente al hecho que genera el cambio, según lo establece la DIAN."
	},
	{
		"id": 22,
		"question": "¿Qué consecuencia puede tener no expedir factura estando obligado a hacerlo?",
		"correct_answer": "Sanción por no facturar",
		"incorrect_answers": ["Cierre del establecimiento sin sanción", "Solo un llamado de atención", "Multa fija de 10 UVT sin excepciones"],
		"description": "¡¡Correcto!!! No expedir factura puede generar sanciones económicas e incluso el cierre del establecimiento, conforme al artículo 652 del Estatuto Tributario."
	},
	{
		"id": 23,
		"question": "¿Qué es la retención en la fuente en Colombia?",
		"correct_answer": "Un mecanismo de recaudo anticipado del impuesto de renta",
		"incorrect_answers": ["Un impuesto adicional al IVA", "Un descuento voluntario sobre el salario", "Un cobro que solo aplica a empresas grandes"],
		"description": "¡¡Correcto!!! La retención en la fuente es un sistema mediante el cual se recauda por anticipado el impuesto de renta en el momento del pago o abono en cuenta."
	},
	{
		"id": 24,
		"question": "¿Cuál es el porcentaje del Gravamen a los Movimientos Financieros (GMF)?",
		"correct_answer": "0.4%",
		"incorrect_answers": ["4%", "1%", "0.2%"],
		"description": "¡¡Correcto!!! El GMF, conocido como '4x1000', equivale al 0.4% del valor de cada retiro o movimiento gravado realizado en cuentas financieras."
	},
	{
		"id": 25,
		"question": "¿Qué documento sustituye a la factura electrónica en operaciones con personas no obligadas a facturar?",
		"correct_answer": "Documento soporte en adquisiciones",
		"incorrect_answers": ["Recibo de caja menor", "Nota débito", "Certificado de ingresos"],
		"description": "¡¡Correcto!!! Cuando se adquieren bienes o servicios de personas no obligadas a facturar, se debe elaborar el documento soporte, que sustituye la factura electrónica en esos casos."
	},
	{
		"id": 26,
		"question": "¿Qué tipo de ingreso se considera gravado en el impuesto sobre la renta para personas naturales?",
		"correct_answer": "Los salarios y honorarios obtenidos en el año gravable",
		"incorrect_answers": ["Las donaciones recibidas de familiares", "Los premios menores de $100.000", "Los intereses generados por cuentas de ahorro exentas"],
		"description": "¡¡Correcto!!! Los ingresos como salarios, honorarios y otros conceptos laborales o profesionales están sujetos al impuesto sobre la renta para personas naturales."
	},
	{
		"id": 27,
		"question": "¿En qué caso se puede aplicar exoneración de aportes a salud y pensión para empleadores?",
		"correct_answer": "Cuando se contratan trabajadores que devengan menos de 10 salarios mínimos",
		"incorrect_answers": ["Solo si es una empresa extranjera", "Cuando los trabajadores son independientes", "Cuando el contrato es por prestación de servicios"],
		"description": "¡¡Correcto!!! Las empresas están exoneradas de aportar salud y pensión para empleados que ganen menos de 10 SMMLV, si están sujetos al régimen ordinario del impuesto de renta."
	},
	{
		"id": 28,
		"question": "¿Cuál es el mecanismo que permite a la DIAN fiscalizar electrónicamente a los contribuyentes?",
		"correct_answer": "Facturación electrónica y sistemas de validación previa",
		"incorrect_answers": ["Controles manuales", "Inspección de domicilios", "Visitas presenciales rutinarias"],
		"description": "¡¡Correcto!!! La facturación electrónica con validación previa permite a la DIAN hacer control en tiempo real sobre las operaciones de los contribuyentes."
	},
	{
		"id": 29,
		"question": "¿Qué impuesto aplica sobre la compra de bienes suntuarios como vehículos de alta gama?",
		"correct_answer": "Impuesto al Consumo",
		"incorrect_answers": ["IVA del 5%", "GMF", "ICA"],
		"description": "¡¡Correcto!!! El impuesto al consumo se aplica a ciertos bienes suntuarios como vehículos de alta gama, cervezas, cigarrillos y licores, en adición al IVA."
	},
	{
		"id": 30,
		"question": "¿Qué declaración debe presentar una persona natural que recibe ingresos de varias fuentes y supera los topes establecidos?",
		"correct_answer": "Declaración de renta",
		"incorrect_answers": ["Declaración de IVA", "Declaración de activos en el exterior", "Declaración de importaciones"],
		"description": "¡¡Correcto!!! Cuando una persona natural supera los topes de ingresos, patrimonio, consumos o consignaciones definidos por la DIAN, debe presentar su declaración de renta."
	},
	{
		"id": 31,
		"question": "¿Qué sucede si un contribuyente presenta su declaración tributaria después del plazo establecido por la DIAN?",
		"correct_answer": "Debe pagar sanción por extemporaneidad y los intereses correspondientes",
		"incorrect_answers": ["Pierde el RUT", "Debe pagar doble impuesto", "Solo recibe un llamado de atención"],
		"description": "¡¡Correcto!!! Si la declaración se presenta fuera del plazo, el contribuyente incurre en sanción por extemporaneidad y debe pagar intereses moratorios según el Estatuto Tributario."
	},
	{
		"id": 32,
		"question": "¿Qué es el régimen sustitutivo del impuesto sobre la renta?",
		"correct_answer": "Es un régimen opcional llamado Régimen Simple de Tributación (RST)",
		"incorrect_answers": ["Es el régimen ordinario tradicional", "Es el régimen para no residentes", "Es el régimen especial para empleados públicos"],
		"description": "¡¡Correcto!!! El Régimen Simple de Tributación (RST) es un régimen sustitutivo y opcional del impuesto de renta, creado para simplificar el cumplimiento tributario."
	},
	{
		"id": 33,
		"question": "¿Qué documento se genera automáticamente al inscribirse por primera vez en el RUT?",
		"correct_answer": "NIT",
		"incorrect_answers": ["Factura electrónica", "Declaración de renta", "Certificado de existencia"],
		"description": "¡¡Correcto!!! Al inscribirse en el RUT, la DIAN asigna automáticamente un Número de Identificación Tributaria (NIT) que permite a la persona ser identificada como contribuyente."
	},
	{
		"id": 34,
		"question": "¿Cuál de los siguientes ingresos está exento del impuesto sobre la renta?",
		"correct_answer": "Indemnización por accidente de trabajo",
		"incorrect_answers": ["Intereses de cuentas bancarias", "Ingresos por alquiler", "Honorarios por servicios profesionales"],
		"description": "¡¡Correcto!!! Las indemnizaciones por accidente de trabajo están exentas del impuesto sobre la renta según el Estatuto Tributario colombiano."
	},
	{
		"id": 35,
		"question": "¿Cuál es la entidad encargada de reglamentar y controlar el cumplimiento del régimen de precios de transferencia?",
		"correct_answer": "DIAN",
		"incorrect_answers": ["Superintendencia de Sociedades", "Banco de la República", "Contraloría General de la República"],
		"description": "¡¡Correcto!!! La DIAN es la autoridad competente para vigilar el cumplimiento del régimen de precios de transferencia por parte de los contribuyentes que realicen operaciones con vinculados del exterior."
	},
	{
		"id": 36,
		"question": "¿Qué instrumento permite a la DIAN conocer los ingresos y compras de los contribuyentes de forma detallada?",
		"correct_answer": "Información exógena",
		"incorrect_answers": ["RUT", "Declaración de IVA", "Factura electrónica"],
		"description": "¡¡Correcto!!! La información exógena es reportada por los contribuyentes y terceros para que la DIAN cruce datos sobre ingresos, compras, pagos, entre otros."
	},
	{
		"id": 37,
		"question": "¿En qué casos se requiere presentar la Declaración de activos en el exterior?",
		"correct_answer": "Cuando el valor de los activos en el exterior supera 2.000 UVT",
		"incorrect_answers": ["Cuando se tiene cualquier activo en el exterior", "Solo si se tiene residencia fiscal en el exterior", "Si se ha hecho inversión extranjera directa"],
		"description": "¡¡Correcto!!! Esta declaración aplica para personas naturales y jurídicas que posean activos en el exterior superiores a 2.000 UVT."
	},
	{
		"id": 38,
		"question": "¿Qué tarifa general del IVA se aplica en Colombia a la mayoría de bienes y servicios gravados?",
		"correct_answer": "19%",
		"incorrect_answers": ["5%", "10%", "16%"],
		"description": "¡¡Correcto!!! La tarifa general del IVA en Colombia es del 19%, aunque existen tarifas diferenciales para ciertos productos y servicios."
	},
	{
		"id": 39,
		"question": "¿Qué tipo de persona natural no está obligada a declarar renta?",
		"correct_answer": "Quien no supera los topes de ingresos, patrimonio, consumos o consignaciones establecidos",
		"incorrect_answers": ["Quien tiene RUT", "Quien trabaja por cuenta propia", "Quien no factura electrónicamente"],
		"description": "¡¡Correcto!!! Solo están obligadas a declarar renta las personas naturales que superan los topes definidos anualmente por la DIAN."
	},
	{
		"id": 40,
		"question": "¿Cuál es el objetivo principal del Régimen Simple de Tributación (RST)?",
		"correct_answer": "Facilitar el cumplimiento tributario y reducir la carga impositiva",
		"incorrect_answers": ["Eliminar la obligación de declarar", "Evitar el pago del IVA", "Controlar el contrabando"],
		"description": "¡¡Correcto!!! El RST busca simplificar el cumplimiento de obligaciones y ofrecer una tarifa integrada más favorable a pequeños empresarios."
	},
	{
		"id": 41,
		"question": "¿Qué entidad es competente para imponer sanciones tributarias en Colombia?",
		"correct_answer": "DIAN",
		"incorrect_answers": ["Procuraduría General", "Ministerio de Hacienda", "Contaduría General de la Nación"],
		"description": "¡¡Correcto!!! La DIAN es la autoridad competente para aplicar sanciones a los contribuyentes que incumplen sus deberes fiscales."
	},
	{
		"id": 42,
		"question": "¿Qué documento sustituye el uso de la firma en la facturación electrónica?",
		"correct_answer": "Firma digital o electrónica autorizada por la DIAN",
		"incorrect_answers": ["Cédula escaneada", "RUT", "Certificado de existencia"],
		"description": "¡¡Correcto!!! La facturación electrónica debe contar con firma digital o electrónica validada por la DIAN para garantizar autenticidad e integridad."
	},
	{
		"id": 43,
		"question": "¿Qué significa la sigla UVT en el sistema tributario colombiano?",
		"correct_answer": "Unidad de Valor Tributario",
		"incorrect_answers": ["Unidad de Verificación Tributaria", "Utilidad Variable Tributaria", "Unidad de Valor Técnico"],
		"description": "¡¡Correcto!!! La UVT es un valor estandarizado que permite unificar y actualizar valores tributarios cada año."
	},
	{
		"id": 44,
		"question": "¿Qué sanción puede imponer la DIAN por no actualizar el RUT cuando es obligatorio?",
		"correct_answer": "Sanción por no informar, según el artículo 658-3 del E.T.",
		"incorrect_answers": ["Suspensión del NIT", "Sanción penal", "Revocatoria de la declaración de renta"],
		"description": "¡¡Correcto!!! La omisión en la actualización del RUT puede dar lugar a la sanción por no informar, conforme a lo dispuesto en el Estatuto Tributario."
	},
	{
		"id": 45,
		"question": "¿Cuál es el principal impuesto territorial que deben pagar los comerciantes y empresas a nivel municipal?",
		"correct_answer": "Impuesto de Industria y Comercio (ICA)",
		"incorrect_answers": ["IVA", "GMF", "Impuesto al Consumo"],
		"description": "¡¡Correcto!!! El ICA es un impuesto municipal que grava las actividades industriales, comerciales y de servicios realizadas dentro del municipio."
	},
	{
		"id": 46,
		"question": "¿Qué documento permite acreditar la residencia fiscal en Colombia?",
		"correct_answer": "Certificado de residencia fiscal emitido por la DIAN",
		"incorrect_answers": ["Cédula de ciudadanía", "Pasaporte colombiano", "RUT"],
		"description": "¡¡Correcto!!! La DIAN emite este certificado para acreditar oficialmente la residencia fiscal de una persona natural o jurídica ante terceros, especialmente en el exterior."
	},
	{
		"id": 47,
		"question": "¿Cuál es el propósito del Estatuto Tributario en Colombia?",
		"correct_answer": "Regular el sistema de impuestos y obligaciones tributarias",
		"incorrect_answers": ["Regular la política monetaria", "Establecer reglas comerciales internacionales", "Controlar las exportaciones"],
		"description": "¡¡Correcto!!! El Estatuto Tributario contiene las normas que regulan la administración, recaudo y fiscalización de los tributos administrados por la DIAN."
	},
	{
		"id": 48,
		"question": "¿Qué tipo de contribuyente está obligado a llevar contabilidad según el Código de Comercio y normas fiscales?",
		"correct_answer": "Las personas jurídicas y algunas personas naturales que superan topes",
		"incorrect_answers": ["Solo los asalariados", "Personas naturales sin ingresos", "Todos los ciudadanos mayores de edad"],
		"description": "¡¡Correcto!!! Están obligados a llevar contabilidad las personas jurídicas y aquellas naturales que, por ingresos o actividad económica, así lo exige la ley."
	},
	{
		"id": 49,
		"question": "¿Qué función cumple el código CIIU en el RUT?",
		"correct_answer": "Identificar la actividad económica del contribuyente",
		"incorrect_answers": ["Definir la zona de residencia", "Asignar el monto de impuestos a pagar", "Registrar el nivel educativo"],
		"description": "¡¡Correcto!!! El CIIU (Clasificación Industrial Internacional Uniforme) indica la actividad económica del contribuyente y es clave para su categorización tributaria."
	},
	{
		"id": 50,
		"question": "¿Qué pasa si un contribuyente omite ingresos en su declaración tributaria?",
		"correct_answer": "Puede ser sancionado por inexactitud",
		"incorrect_answers": ["La DIAN cierra el RUT", "Solo debe corregir sin consecuencias", "Pierde beneficios de IVA"],
		"description": "¡¡Correcto!!! Omitir ingresos constituye una falta que puede ser sancionada por inexactitud, de acuerdo con el artículo 647 del Estatuto Tributario."
	}

]

export const conductualesInterpersonales = [

	{
		id: 1,
		question: 'Cuando termino de explicarle a un cliente un proceso:(CARGO ANALISTA)',
		correct_answer: 'Prefiero preguntarle al cliente y asegurarme que el mensaje fue captado completamente y que no existan dudas.',
		incorrect_answers: ['Me despido con amabilidad.', 'Espero un momento, en caso de las posibles preguntas que puedan existir. Si no las hay me despido amablemente.'],
		description: '¡¡¡Correcto!!! Esta respuesta refleja la COMUNICACIÓN EFECTIVA como competencia de este cargo, teniendo en cuenta que se debe asegurar que el mensaje sea bien entregado, pero también recibido correctamente.'
	},
	{
		id: 2,
		question: 'Ante los inconvenientes presentados en mi área laboral:(CARGO ANALISTA)',
		correct_answer: 'Me apoyo en los demas compañeros para hallar soluciones en conjunto.',
		incorrect_answers: ['Busco la solución a problemas sin esperar que la solución llegue de otra parte', 'Espero pacientemente las posibles soluciones que lleguen por parte de mi jefe inmediato.'],
		description: '¡¡¡Correcto!!! Nótese que la respuesta correcta tiene en cuenta la competencia trabajo en equipo. Muchas personas pueden pensar que la respuesta es la A, pero hay que recordar que se debe enfatizar en las cuatro competencias de este cargo.'
	},
	{
		id: 3,
		question: 'Cuando observo que algo se puede mejorar en la entidad:(CARGO ANALISTA)',
		correct_answer: 'Prefiero esperar a que se impartan lineamientos por parte del nivel central.',
		incorrect_answers: ['Tomo la iniciativa de mejorarlo para aportar con los objetivos de la entidad.', 'Investigo a fondo sobre el tema, con el fin de adquirir nuevos conocimientos que puedan ayudar.'],
		description: '¡¡¡Correcto!!! Nótese que las tres opciones de respuesta son totalmente válidas, pero al verificar las competencias conductuales del cargo(Analista), se evidencia que no tiene iniciativa o aporte técnico profesional, razón por la cual esta respuesta es la que representa la adaptación.'
	},
	{
		id: 4,
		question: 'Cuando observo que algo se puede mejorar en la entidad:(CARGO PROFESIONAL)',
		correct_answer: 'Tomo la iniciativa de mejorarlo para aportar con los objetivos de la entidad.',
		incorrect_answers: ['Prefiero esperar a que se impartan lineamientos por parte del nivel central.', 'Investigo a fondo sobre el tema, con el fin de adquirir nuevos conocimientos que puedan ayudar.'],
		description: '¡¡¡Correcto!!! Nótese que esta pregunta se  desarrolló para el perfil Analista, pero como este perfil tiene competencias distintas(PROFESIONAL), esta respuesta es la que hace referencia a la competencia "iniciativa".'
	},
	{
		id: 5,
		question: 'Ante los inconvenientes presentados en mi área laboral:(CARGO PROFESIONAL)',
		correct_answer: 'Busco la solución a problemas sin esperar que la solución llegue de otra parte',
		incorrect_answers: ['Me apoyo en los demás compañeros para hallar soluciones en conjunto.', 'Espero pacientemente las posibles soluciones que lleguen por parte de mi jefe inmediato.'],
		description: '¡¡¡Correcto!!! Esta respuesta se acomoda a un perfil Profesional'
	},
	{
		id: 6,
		question: 'Ante los inconvenientes presentados en mi área laboral:(CARGO PROFESIONAL)',
		correct_answer: 'No me enfoco en el problema, sino en encontrar posibles soluciones.',
		incorrect_answers: ['Prefiero resolverlos junto con el apoyo de todos los compañeros.', 'Prefiero esperar a que sea solucionado por otro compañero.'],
		description: '¡¡¡Correcto!!! ESta opción se ajusta a un perfil Profesional, y hace referencia a la competencia solución de problemas.'
	},
	{
		id: 7,
		question: '¿De las siguientes acciones o competencias, cual cobra mayor relevancia para combatir el mobbing en cualquier ambiente laboral? (CARGO FACILITADOR)',
		correct_answer: 'Comportamiento ético.',
		incorrect_answers: ['Transparencia.', 'Responsabilidad social.'],
		description: '¡¡¡Correcto!!! Nótese que este comportamiento esta presente en todos los niveles de desarrollo y cargos de la entidad. Este es un comportamiento que estará siempre por encima de los demás.'
	},
	{
		id: 8,
		question: '¿De que forma se siente mas cómodo? (CARGO FACILITADOR)',
		correct_answer: 'Alcanzando las metas laborales de forma grupal.',
		incorrect_answers: ['Alcanzando las metas laborales por su iniciativa.', 'Que otros alcancen metas laborales por usted.'],
		description: '¡¡¡Correcto!!! Este comportamiento esta relacionado con el trabajo en equipo como competencia evaluada en este tipo de cargo.'
	},
	{
		id: 9,
		question: 'Cuando observo que algo se puede mejorar en la entidad:(CARGO FACILITADOR)',
		correct_answer: 'Prefiero esperar a que se impartan lineamientos por parte del nivel central.',
		incorrect_answers: ['Tomo la iniciativa de mejorarlo para aportar con los objetivos de la entidad.', 'Investigo a fondo sobre el tema, con el fin de adquirir nuevos conocimientos que puedan ayudar.'],
		description: '¡¡¡Correcto!!! Nótese que las tres opciones de respuesta son totalmente validas, pero al verificar las competencias conductuales del cargo, se evidencia que no tiene iniciativa o aporte técnico profesional, razón por la cual la respuesta esta respuesta representa la adaptación.'
	},
	{
		"id": 10,
		"question": "¿Qué actitud es más adecuada al trabajar en equipo?",
		"correct_answer": "Escuchar activamente a los demás y aportar ideas con respeto",
		"incorrect_answers": ["Imponer decisiones para que el grupo avance rápido", "Delegar todo y no intervenir", "Criticar sin proponer soluciones"],
		"description": "¡¡Correcto!!! Escuchar y participar activamente demuestra habilidades colaborativas esenciales en entornos laborales efectivos."
	},
	{
		"id": 11,
		"question": "Ante un conflicto con un compañero de trabajo, ¿cuál es la mejor respuesta?",
		"correct_answer": "Buscar el diálogo para resolver el malentendido de forma constructiva",
		"incorrect_answers": ["Ignorar el problema esperando que desaparezca", "Reportarlo directamente sin hablar con él", "Reaccionar emocionalmente y discutir"],
		"description": "¡¡Correcto!!! El diálogo abierto permite resolver conflictos de forma madura, promoviendo el respeto y la convivencia laboral."
	},
	{
		"id": 12,
		"question": "Si notas que un compañero está teniendo dificultades con una tarea, ¿qué deberías hacer?",
		"correct_answer": "Ofrecer ayuda si está dentro de tus posibilidades y sin afectar tus responsabilidades",
		"incorrect_answers": ["Evitar involucrarte porque no es tu función", "Criticar su falta de habilidad", "Reportarlo al jefe sin comentarlo con él"],
		"description": "¡¡Correcto!!! Brindar apoyo demuestra empatía y compromiso con el trabajo en equipo."
	},
	{
		"id": 13,
		"question": "¿Qué comportamiento demuestra inteligencia emocional en el trabajo?",
		"correct_answer": "Reconocer y manejar adecuadamente tus emociones y las de los demás",
		"incorrect_answers": ["Ocultar todas tus emociones", "Expresar enojo sin filtros", "Imponer tu punto de vista en todo momento"],
		"description": "¡¡Correcto!!! La inteligencia emocional permite regular emociones, empatizar y mantener relaciones laborales saludables."
	},
	{
		"id": 14,
		"question": "En una reunión donde todos opinan diferente, ¿qué conducta es más efectiva?",
		"correct_answer": "Escuchar, valorar las ideas y buscar consensos con respeto",
		"incorrect_answers": ["Insistir en tu idea porque estás convencido", "Guardar silencio y no participar", "Desacreditar a quien no está de acuerdo"],
		"description": "¡¡Correcto!!! La escucha activa y el respeto por las diferencias fortalecen la toma de decisiones colectivas y el clima organizacional."
	},
	{
		"id": 15,
		"question": "¿Qué es lo más recomendable cuando se recibe una crítica constructiva en el trabajo?",
		"correct_answer": "Escuchar con atención y reflexionar sobre lo que se puede mejorar",
		"incorrect_answers": ["Responder a la defensiva", "Ignorar la crítica", "Buscar justificar el error sin aceptar responsabilidad"],
		"description": "¡¡Correcto!!! La crítica constructiva es una oportunidad para el crecimiento profesional y debe ser recibida con apertura."
	},
	{
		"id": 16,
		"question": "Cuando se trabaja bajo presión, ¿cuál es una actitud adecuada?",
		"correct_answer": "Organizar prioridades y mantener la calma para cumplir con lo requerido",
		"incorrect_answers": ["Acelerar todo sin planificación", "Culpar a otros por el estrés", "Abandonar responsabilidades temporalmente"],
		"description": "¡¡Correcto!!! Manejar la presión con organización y control emocional es clave para el rendimiento laboral."
	},
	{
		"id": 17,
		"question": "¿Qué muestra una buena habilidad de comunicación interpersonal?",
		"correct_answer": "Transmitir ideas de forma clara, respetuosa y con empatía",
		"incorrect_answers": ["Hablar rápido para terminar pronto", "Usar tecnicismos para impresionar", "Evitar el contacto visual y hablar poco"],
		"description": "¡¡Correcto!!! Comunicar de manera efectiva implica claridad, empatía y adecuación al contexto."
	},
	{
		"id": 18,
		"question": "Cuando un proyecto requiere colaboración entre diferentes áreas, ¿qué conducta favorece el éxito?",
		"correct_answer": "Fomentar la cooperación y el respeto entre los equipos",
		"incorrect_answers": ["Trabajar de forma independiente sin consultar", "Criticar las decisiones de otras áreas", "Restringir el flujo de información"],
		"description": "¡¡Correcto!!! La cooperación interdepartamental fortalece los resultados y mejora el ambiente laboral."
	},
	{
		"id": 19,
		"question": "Si estás en desacuerdo con una instrucción de tu jefe, ¿qué es lo más apropiado?",
		"correct_answer": "Exponer tu punto de vista con respeto y argumentos válidos",
		"incorrect_answers": ["Desobedecer sin avisar", "Discutir frente al equipo", "Guardar silencio pero actuar en contra"],
		"description": "¡¡Correcto!!! Es válido expresar desacuerdos, siempre que se haga de manera respetuosa y profesional."
	},
	{
		"id": 20,
		"question": "¿Cuál de las siguientes acciones refleja mejor un liderazgo positivo?",
		"correct_answer": "Motivar al equipo con el ejemplo y promover un ambiente de confianza",
		"incorrect_answers": ["Delegar todo y ausentarse del proceso", "Imponer decisiones sin consultar", "Ignorar las preocupaciones del equipo"],
		"description": "¡¡Correcto!!! Un líder positivo guía con el ejemplo, escucha y genera confianza, lo cual fortalece el compromiso del equipo."
	},
	{
		"id": 21,
		"question": "En una situación de conflicto entre dos miembros del equipo, ¿qué debería hacer un buen líder?",
		"correct_answer": "Intervenir para facilitar el diálogo y buscar una solución justa para ambas partes",
		"incorrect_answers": ["Tomar partido rápidamente", "Evitar involucrarse para no complicarse", "Ignorar el conflicto esperando que se resuelva solo"],
		"description": "¡¡Correcto!!! Un líder efectivo actúa como mediador y promueve una resolución justa que mantenga la armonía y el respeto en el equipo."
	},
	{
		"id": 22,
		"question": "¿Qué comportamiento demuestra una buena gestión de conflictos?",
		"correct_answer": "Buscar comprender las causas y promover acuerdos mediante el diálogo",
		"incorrect_answers": ["Imponer una solución sin escuchar", "Rechazar cualquier reclamo", "Minimizar el conflicto para evitar actuar"],
		"description": "¡¡Correcto!!! La resolución efectiva de conflictos requiere análisis, empatía y comunicación clara para llegar a soluciones duraderas."
	},
	{
		"id": 23,
		"question": "¿Cuál es una característica esencial de un líder que resuelve problemas de manera efectiva?",
		"correct_answer": "Capacidad de análisis y toma de decisiones basadas en hechos",
		"incorrect_answers": ["Evita decisiones difíciles", "Reacciona emocionalmente ante los problemas", "Depende exclusivamente de su equipo para decidir"],
		"description": "¡¡Correcto!!! Un líder eficaz analiza la situación con objetividad y toma decisiones estratégicas orientadas a resultados."
	},
	{
		"id": 24,
		"question": "¿Qué actitud fortalece la autoridad de un líder ante el equipo?",
		"correct_answer": "Ser coherente entre lo que dice y lo que hace",
		"incorrect_answers": ["Dar órdenes sin explicaciones", "Exigir resultados sin acompañamiento", "Cambiar constantemente de opinión sin justificarlo"],
		"description": "¡¡Correcto!!! La coherencia fortalece la credibilidad y el respeto hacia el liderazgo dentro del equipo de trabajo."
	},
	{
		"id": 25,
		"question": "¿Cuál es la mejor forma de tomar decisiones en un entorno laboral?",
		"correct_answer": "Analizar la situación, considerar alternativas y elegir la más adecuada con base en datos",
		"incorrect_answers": ["Tomar decisiones rápidas sin información", "Delegar siempre en otros", "Evitar decidir por temor a equivocarse"],
		"description": "¡¡Correcto!!! La toma de decisiones efectiva requiere análisis, responsabilidad y objetividad para lograr los mejores resultados."
	},
	{
		"id": 26,
		"question": "¿Qué actitud refleja una buena capacidad de adaptabilidad?",
		"correct_answer": "Aceptar los cambios con disposición y buscar cómo aportar desde tu rol",
		"incorrect_answers": ["Resistirse a los cambios constantemente", "Esperar instrucciones sin involucrarse", "Criticar las nuevas políticas sin proponer nada"],
		"description": "¡¡Correcto!!! Ser adaptable implica responder positivamente al cambio y contribuir al éxito del proceso de transformación."
	},
	{
		"id": 27,
		"question": "Ante una situación que compromete la ética en el trabajo, ¿qué deberías hacer?",
		"correct_answer": "Actuar con integridad y reportar la situación siguiendo los canales adecuados",
		"incorrect_answers": ["Guardar silencio para evitar conflictos", "Ignorarla si no te afecta directamente", "Aprovechar la situación si te beneficia"],
		"description": "¡¡Correcto!!! La ética laboral implica actuar con responsabilidad, denunciar irregularidades y mantener altos estándares morales."
	},
	{
		"id": 28,
		"question": "¿Qué es esencial en la atención al cliente?",
		"correct_answer": "Escuchar con empatía, brindar soluciones claras y mantener una actitud cordial",
		"incorrect_answers": ["Hablar rápido para terminar pronto", "Culpar al cliente por errores", "Responder de forma mecánica sin personalización"],
		"description": "¡¡Correcto!!! Una atención al cliente efectiva se basa en empatía, claridad y cortesía para satisfacer las necesidades del usuario."
	},
	{
		"id": 29,
		"question": "¿Cuál es una característica de la comunicación asertiva?",
		"correct_answer": "Expresar tus ideas de forma clara y respetuosa, cuidando el impacto en los demás",
		"incorrect_answers": ["Evitar decir lo que piensas para no incomodar", "Imponer tu opinión con firmeza", "Responder de forma evasiva ante preguntas incómodas"],
		"description": "¡¡Correcto!!! La comunicación asertiva equilibra la honestidad con el respeto, facilitando relaciones interpersonales saludables."
	},
	{
		"id": 30,
		"question": "Cuando debes cumplir múltiples tareas en poco tiempo, ¿qué es lo más efectivo?",
		"correct_answer": "Organizar las actividades por prioridad y establecer tiempos realistas",
		"incorrect_answers": ["Realizar todo al mismo tiempo sin orden", "Hacer primero lo más fácil", "Dejar para el final lo que no te gusta hacer"],
		"description": "¡¡Correcto!!! La organización y priorización permiten un uso más eficiente del tiempo y mejoran el rendimiento bajo presión."
	},
	{
		"id": 31,
		"question": "¿Qué actitud demuestra empatía en el entorno laboral?",
		"correct_answer": "Ponerse en el lugar del otro y ofrecer apoyo sin juzgar",
		"incorrect_answers": ["Aconsejar sin escuchar", "Minimizar los problemas de los demás", "Evitar involucrarse en asuntos personales del equipo"],
		"description": "¡¡Correcto!!! La empatía fortalece las relaciones laborales y contribuye a un clima organizacional saludable."
	},
	{
		"id": 32,
		"question": "¿Cómo se puede fomentar la innovación en el trabajo?",
		"correct_answer": "Proponiendo ideas nuevas y estando abierto a diferentes formas de hacer las cosas",
		"incorrect_answers": ["Evitando cambios en procesos ya establecidos", "Siguiendo instrucciones al pie de la letra sin preguntar", "Rechazando propuestas que no conoces"],
		"description": "¡¡Correcto!!! La innovación requiere apertura al cambio, creatividad y disposición para mejorar continuamente."
	},
	{
		"id": 33,
		"question": "¿Qué comportamiento demuestra compromiso organizacional?",
		"correct_answer": "Cumplir tus funciones con responsabilidad y contribuir a los objetivos de la organización",
		"incorrect_answers": ["Solo hacer lo mínimo requerido", "Buscar excusas para delegar tu trabajo", "Trabajar bien solo cuando eres supervisado"],
		"description": "¡¡Correcto!!! El compromiso se refleja en la responsabilidad, proactividad y alineación con la misión de la organización."
	},
	{
		"id": 34,
		"question": "Si un compañero recibe el mérito por un logro que fue tuyo, ¿qué es lo más adecuado?",
		"correct_answer": "Hablar con respeto y aclarar la situación con tu superior o con el compañero",
		"incorrect_answers": ["Ignorarlo para evitar conflictos", "Reclamar públicamente", "Contarle a otros compañeros para que se enteren"],
		"description": "¡¡Correcto!!! Aclarar la situación con respeto evita malentendidos y reafirma tu profesionalismo."
	},
	{
		"id": 35,
		"question": "¿Cómo puedes demostrar liderazgo si no tienes un cargo directivo?",
		"correct_answer": "Tomando iniciativa, colaborando y siendo un ejemplo para otros",
		"incorrect_answers": ["Esperando instrucciones", "Evitando responsabilidades adicionales", "Solo enfocándote en tus tareas"],
		"description": "¡¡Correcto!!! El liderazgo no depende del cargo, sino de la actitud y el impacto positivo en el equipo."
	},
	{
		"id": 36,
		"question": "¿Qué actitud favorece la solución de problemas en grupo?",
		"correct_answer": "Escuchar diferentes opiniones y buscar acuerdos en conjunto",
		"incorrect_answers": ["Insistir solo en tu punto de vista", "Dejar que el líder decida todo", "Evitar participar para no generar conflicto"],
		"description": "¡¡Correcto!!! La solución colaborativa promueve decisiones más efectivas y fortalece el trabajo en equipo."
	},
	{
		"id": 37,
		"question": "Cuando un cliente se muestra molesto, ¿qué deberías hacer?",
		"correct_answer": "Escuchar con calma, mostrar comprensión y buscar una solución",
		"incorrect_answers": ["Responder con el mismo tono", "Cortar la conversación lo antes posible", "Culpar a otro compañero del problema"],
		"description": "¡¡Correcto!!! Mantener la calma y buscar soluciones demuestra profesionalismo y mejora la experiencia del cliente."
	},
	{
		"id": 38,
		"question": "¿Qué acción demuestra responsabilidad laboral?",
		"correct_answer": "Cumplir con tus tareas en los plazos establecidos y con calidad",
		"incorrect_answers": ["Pedir constantemente que te recuerden las tareas", "Cumplir solo cuando te supervisan", "Esperar a último momento para comenzar"],
		"description": "¡¡Correcto!!! La responsabilidad se refleja en la autonomía, el cumplimiento oportuno y la calidad del trabajo realizado."
	},
	{
		"id": 39,
		"question": "¿Qué actitud favorece un ambiente de trabajo positivo?",
		"correct_answer": "Mantener una comunicación clara, respetuosa y con disposición a colaborar",
		"incorrect_answers": ["Hablar solo con personas afines", "Evitar contacto con compañeros", "Participar en rumores del entorno laboral"],
		"description": "¡¡Correcto!!! La comunicación positiva y la colaboración construyen relaciones laborales sanas y un clima organizacional productivo."
	},
	{
		"id": 40,
		"question": "¿Qué es importante para un líder al delegar tareas?",
		"correct_answer": "Asignar responsabilidades claras y ofrecer apoyo cuando sea necesario",
		"incorrect_answers": ["Delegar sin explicar ni supervisar", "Asignar tareas solo a personas cercanas", "Hacer todo tú mismo para evitar errores"],
		"description": "¡¡Correcto!!! Delegar correctamente implica comunicación clara y acompañamiento para asegurar el cumplimiento."
	},
	{
		"id": 41,
		"question": "Cuando te equivocas en el trabajo, ¿qué actitud es la más adecuada?",
		"correct_answer": "Reconocer el error y buscar soluciones para corregirlo",
		"incorrect_answers": ["Ocultar el error", "Culpar a otros", "Ignorar la situación y continuar"],
		"description": "¡¡Correcto!!! La honestidad y la proactividad frente a los errores fortalecen la confianza y la mejora continua."
	},
	{
		"id": 42,
		"question": "¿Cómo debe manejar un líder la diversidad en su equipo?",
		"correct_answer": "Valorando las diferencias y fomentando un ambiente inclusivo",
		"incorrect_answers": ["Ignorando las diferencias para evitar conflictos", "Exigiendo que todos sean iguales", "Separando al equipo por características"],
		"description": "¡¡Correcto!!! La diversidad aporta riqueza de ideas y fortalece la creatividad y el desempeño del equipo."
	},
	{
		"id": 43,
		"question": "¿Qué es fundamental para resolver un conflicto de manera efectiva?",
		"correct_answer": "Escuchar a todas las partes y buscar un acuerdo beneficioso para todos",
		"incorrect_answers": ["Imponer una solución rápida", "Evitar la confrontación y dejar que siga", "Tomar partido por una de las partes"],
		"description": "¡¡Correcto!!! La resolución efectiva requiere diálogo, imparcialidad y búsqueda de consensos."
	},
	{
		"id": 44,
		"question": "¿Cuál es la mejor forma de motivar a un equipo de trabajo?",
		"correct_answer": "Reconociendo sus logros y fomentando un ambiente de respeto y colaboración",
		"incorrect_answers": ["Exigiendo más sin reconocimiento", "Ignorando las necesidades del equipo", "Fomentando la competencia desleal entre ellos"],
		"description": "¡¡Correcto!!! La motivación positiva aumenta la productividad y el compromiso laboral."
	},
	{
		"id": 45,
		"question": "Ante un cambio inesperado en el trabajo, ¿qué debe hacer un empleado?",
		"correct_answer": "Adaptarse rápidamente y buscar cómo contribuir positivamente al cambio",
		"incorrect_answers": ["Resistirse y negarse a cambiar", "Quejarse sin proponer soluciones", "Ignorar las nuevas directrices"],
		"description": "¡¡Correcto!!! La adaptabilidad es clave para la resiliencia y el éxito en entornos dinámicos."
	},
	{
		"id": 46,
		"question": "¿Qué comportamiento demuestra ética profesional?",
		"correct_answer": "Cumplir con las normas y actuar con honestidad en todas las circunstancias",
		"incorrect_answers": ["Tomar atajos que perjudican a otros", "Ocultar información relevante", "Apropiarse de resultados ajenos"],
		"description": "¡¡Correcto!!! La ética profesional garantiza confianza, reputación y un ambiente laboral justo."
	},
	{
		"id": 47,
		"question": "En una reunión, ¿qué actitud ayuda a una comunicación efectiva?",
		"correct_answer": "Escuchar activamente y respetar las opiniones de los demás",
		"incorrect_answers": ["Interrumpir para imponer tu punto", "Desconectarte y no participar", "Criticar sin argumentos claros"],
		"description": "¡¡Correcto!!! La comunicación efectiva se basa en la escucha activa y el respeto mutuo."
	},
	{
		"id": 48,
		"question": "¿Cómo puedes demostrar liderazgo en situaciones de crisis?",
		"correct_answer": "Manteniendo la calma, tomando decisiones claras y apoyando al equipo",
		"incorrect_answers": ["Entrando en pánico y delegando todo", "Esconder información importante", "Actuar impulsivamente sin pensar"],
		"description": "¡¡Correcto!!! El liderazgo en crisis requiere control emocional y claridad para guiar efectivamente."
	},
	{
		"id": 49,
		"question": "¿Qué es lo más importante en la atención a un cliente insatisfecho?",
		"correct_answer": "Escuchar sus quejas con empatía y ofrecer soluciones rápidas y claras",
		"incorrect_answers": ["Ignorar sus comentarios", "Culpar a otros departamentos", "Responder de forma defensiva"],
		"description": "¡¡Correcto!!! La atención al cliente efectiva mejora la experiencia y la fidelización."
	},
	{
		"id": 50,
		"question": "¿Qué significa ser proactivo en el trabajo?",
		"correct_answer": "Anticiparse a los problemas y buscar soluciones antes de que ocurran",
		"incorrect_answers": ["Esperar instrucciones para actuar", "Reaccionar solo cuando hay problemas", "Evitar responsabilidades extras"],
		"description": "¡¡Correcto!!! La proactividad implica iniciativa y responsabilidad para mejorar procesos y evitar inconvenientes."
	},
	{
		"id": 51,
		"question": "¿Cuál es una señal de que un líder tiene inteligencia emocional?",
		"correct_answer": "Sabe controlar sus emociones y entender las de los demás",
		"incorrect_answers": ["Ignora sus sentimientos para enfocarse solo en resultados", "Reacciona impulsivamente ante el estrés", "No considera las emociones del equipo"],
		"description": "¡¡Correcto!!! La inteligencia emocional permite un liderazgo efectivo y relaciones laborales saludables."
	},
	{
		"id": 52,
		"question": "¿Qué debe hacer un empleado cuando recibe una crítica constructiva?",
		"correct_answer": "Escuchar atentamente y utilizarla para mejorar su desempeño",
		"incorrect_answers": ["Responder con defensividad", "Ignorar la crítica", "Quejarse con otros compañeros"],
		"description": "¡¡Correcto!!! La capacidad de recibir retroalimentación es clave para el desarrollo profesional."
	},
	{
		"id": 53,
		"question": "En la resolución de conflictos, ¿qué rol es fundamental para un mediador?",
		"correct_answer": "Facilitar la comunicación y ayudar a encontrar acuerdos mutuos",
		"incorrect_answers": ["Imponer una solución sin consenso", "Tomar partido por uno de los involucrados", "Ignorar el problema esperando que desaparezca"],
		"description": "¡¡Correcto!!! El mediador debe ser imparcial y buscar soluciones que satisfagan a todas las partes."
	},
	{
		"id": 54,
		"question": "¿Qué característica es esencial para trabajar efectivamente en equipo?",
		"correct_answer": "Colaborar y respetar las ideas de los demás",
		"incorrect_answers": ["Trabajar individualmente para destacar", "Competir con los compañeros", "Ignorar las opiniones del grupo"],
		"description": "¡¡Correcto!!! La colaboración y el respeto fortalecen el trabajo en equipo y los resultados colectivos."
	},
	{
		"id": 55,
		"question": "¿Cuál es una práctica ética al manejar información confidencial?",
		"correct_answer": "Mantener la confidencialidad y compartir solo con personas autorizadas",
		"incorrect_answers": ["Compartir la información con quien lo solicite", "Usar la información para beneficio personal", "Ignorar los protocolos de seguridad"],
		"description": "¡¡Correcto!!! La ética exige proteger la información y respetar las normas de confidencialidad."
	},
	{
		"id": 56,
		"question": "¿Qué actitud facilita el manejo del estrés laboral?",
		"correct_answer": "Practicar la organización, pedir apoyo y mantener una actitud positiva",
		"incorrect_answers": ["Ignorar las responsabilidades", "Evitar los retos y nuevas tareas", "Reaccionar de forma agresiva"],
		"description": "¡¡Correcto!!! Gestionar el estrés con organización y apoyo contribuye al bienestar y desempeño."
	},
	{
		"id": 57,
		"question": "¿Cuál es un beneficio de la comunicación asertiva en el trabajo?",
		"correct_answer": "Mejora la comprensión y reduce los malentendidos",
		"incorrect_answers": ["Genera conflictos frecuentes", "Produce confusión en los mensajes", "Evita la expresión de ideas propias"],
		"description": "¡¡Correcto!!! La comunicación asertiva facilita relaciones claras y efectivas."
	},
	{
		"id": 58,
		"question": "¿Qué es clave para mantener la motivación en el trabajo diario?",
		"correct_answer": "Establecer metas claras y reconocer los avances",
		"incorrect_answers": ["Trabajar sin pausas ni descansos", "Ignorar el reconocimiento personal", "Dejar las metas indefinidas"],
		"description": "¡¡Correcto!!! Las metas y el reconocimiento mantienen el enfoque y la energía para cumplir objetivos."
	},
	{
		"id": 59,
		"question": "¿Cómo debe actuar un líder para generar confianza en su equipo?",
		"correct_answer": "Siendo transparente, cumpliendo compromisos y escuchando activamente",
		"incorrect_answers": ["Ocultando información para mantener control", "Prometiendo cosas que no puede cumplir", "Ignorando las inquietudes del equipo"],
		"description": "¡¡Correcto!!! La confianza se construye con honestidad, coherencia y comunicación abierta."
	},
	{
		"id": 60,
		"question": "¿Qué actitud es clave para manejar efectivamente la crítica negativa en el trabajo?",
		"correct_answer": "Analizarla objetivamente y usarla para mejorar sin tomarla personalmente",
		"incorrect_answers": [
			"Responder de forma defensiva y argumentar",
			"Ignorarla completamente",
			"Quejarse con los compañeros"
		],
		"description": "¡¡Correcto!!! Manejar la crítica con objetividad y apertura contribuye al crecimiento profesional y evita conflictos."
	}


]

export const tramites_Servicios = [
	{
		"id": 1,
		"question": "¿Cuál es el trámite básico para obtener la cédula de ciudadanía en Colombia?",
		"correct_answer": "Registrar la solicitud ante la Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"Solicitarla en la alcaldía local",
			"Realizar el trámite en la Fiscalía General",
			"Hacer la solicitud en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La Registraduría Nacional es la entidad encargada de expedir la cédula de ciudadanía en Colombia."
	},
	{
		"id": 2,
		"question": "¿Cuál es el documento necesario para solicitar un pasaporte colombiano?",
		"correct_answer": "Cédula de ciudadanía válida y en buen estado",
		"incorrect_answers": [
			"Registro civil de nacimiento",
			"Licencia de conducción",
			"Carnet de afiliación a salud"
		],
		"description": "¡¡Correcto!!! La cédula de ciudadanía es el documento principal requerido para solicitar el pasaporte."
	},
	{
		"id": 3,
		"question": "¿Dónde se realiza el trámite para obtener el RUT (Registro Único Tributario) en Colombia?",
		"correct_answer": "En la DIAN (Dirección de Impuestos y Aduanas Nacionales)",
		"incorrect_answers": [
			"En la Alcaldía Municipal",
			"En la Cámara de Comercio",
			"En la Secretaría de Salud"
		],
		"description": "¡¡Correcto!!! La DIAN es la entidad encargada de registrar el RUT para las personas naturales y jurídicas."
	},
	{
		"id": 4,
		"question": "¿Cuál es el trámite para obtener una licencia de conducción en Colombia?",
		"correct_answer": "Realizar un curso de conducción autorizado y aprobar el examen teórico y práctico",
		"incorrect_answers": [
			"Solicitar directamente en la Secretaría de Movilidad sin curso",
			"Comprar la licencia en un centro autorizado",
			"Enviar una carta a la Policía Nacional"
		],
		"description": "¡¡Correcto!!! Para obtener la licencia de conducción se debe cumplir con el curso y aprobar los exámenes requeridos."
	},
	{
		"id": 5,
		"question": "¿Qué entidad es responsable de registrar los actos civiles como nacimientos, matrimonios y defunciones?",
		"correct_answer": "La Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"La DIAN",
			"La Alcaldía Municipal",
			"La Secretaría de Salud"
		],
		"description": "¡¡Correcto!!! La Registraduría tiene la función de registrar los actos civiles en Colombia."
	},
	{
		"id": 6,
		"question": "¿Cuál es el trámite para registrar una empresa en Colombia?",
		"correct_answer": "Inscribir la empresa en la Cámara de Comercio correspondiente",
		"incorrect_answers": [
			"Registrar la empresa en la DIAN directamente",
			"Solicitar permiso en la Alcaldía sin registro",
			"Hacer la inscripción en la Policía Nacional"
		],
		"description": "¡¡Correcto!!! La Cámara de Comercio es la entidad encargada de registrar y formalizar las empresas."
	},
	{
		"id": 7,
		"question": "¿Qué documento es fundamental para realizar trámites bancarios en Colombia?",
		"correct_answer": "Cédula de ciudadanía o documento de identificación válido",
		"incorrect_answers": [
			"Licencia de conducción",
			"Pasaporte",
			"Registro civil"
		],
		"description": "¡¡Correcto!!! La cédula o documento de identificación es necesario para validar la identidad en entidades bancarias."
	},
	{
		"id": 8,
		"question": "¿Cuál es el organismo encargado de expedir la licencia de construcción en Colombia?",
		"correct_answer": "La Alcaldía Municipal o Distrital",
		"incorrect_answers": [
			"La Cámara de Comercio",
			"La DIAN",
			"El Ministerio de Vivienda"
		],
		"description": "¡¡Correcto!!! Las alcaldías otorgan las licencias de construcción para garantizar el cumplimiento de normas urbanísticas."
	},
	{
		"id": 9,
		"question": "¿Para qué sirve el certificado de antecedentes judiciales en Colombia?",
		"correct_answer": "Para demostrar que una persona no tiene antecedentes penales",
		"incorrect_answers": [
			"Para comprobar el historial crediticio",
			"Para obtener la licencia de conducción",
			"Para registrar una empresa"
		],
		"description": "¡¡Correcto!!! Este certificado es un requisito común en procesos laborales y judiciales para validar la buena conducta."
	},
	{
		"id": 10,
		"question": "¿Qué entidad expide el registro civil de nacimiento en Colombia?",
		"correct_answer": "La Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"La Alcaldía",
			"La Secretaría de Salud",
			"La DIAN"
		],
		"description": "¡¡Correcto!!! La Registraduría es responsable de expedir el registro civil, documento fundamental para la identidad."
	},
	{
		"id": 11,
		"question": "¿Qué trámite se debe realizar para cambiar de nombre legalmente en Colombia?",
		"correct_answer": "Solicitar un proceso judicial ante un juez de familia",
		"incorrect_answers": [
			"Hacer la solicitud en la Alcaldía",
			"Registrar el cambio en la Cámara de Comercio",
			"Solicitarlo en la DIAN"
		],
		"description": "¡¡Correcto!!! El cambio de nombre requiere un proceso judicial que avale la solicitud."
	},
	{
		"id": 12,
		"question": "¿Cuál es el plazo máximo para reclamar la devolución de impuestos en Colombia?",
		"correct_answer": "Cinco años a partir del pago o declaración",
		"incorrect_answers": [
			"Un año después del pago",
			"Diez años después del pago",
			"Seis meses después del pago"
		],
		"description": "¡¡Correcto!!! La DIAN establece un plazo de cinco años para realizar reclamaciones por devoluciones."
	},
	{
		"id": 13,
		"question": "¿Dónde se debe realizar el trámite para obtener la licencia sanitaria de un establecimiento de alimentos?",
		"correct_answer": "En la Secretaría de Salud municipal o departamental",
		"incorrect_answers": [
			"En la Alcaldía únicamente",
			"En la DIAN",
			"En la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La Secretaría de Salud es la encargada de garantizar la higiene y salubridad de establecimientos alimenticios."
	},
	{
		"id": 14,
		"question": "¿Qué documento se requiere para inscribir un vehículo en el registro nacional?",
		"correct_answer": "Factura de compra y certificado de tradición y libertad",
		"incorrect_answers": [
			"Licencia de conducción",
			"Cédula de ciudadanía solamente",
			"Póliza de seguro únicamente"
		],
		"description": "¡¡Correcto!!! La factura y el certificado son esenciales para registrar formalmente un vehículo."
	},
	{
		"id": 15,
		"question": "¿Cuál es el procedimiento para solicitar el pasaporte de un menor de edad en Colombia?",
		"correct_answer": "Presentar la cédula de ciudadanía del menor y autorización de los padres",
		"incorrect_answers": [
			"Solo presentar la cédula del menor",
			"Solicitar autorización judicial exclusivamente",
			"Realizar la solicitud en la DIAN"
		],
		"description": "¡¡Correcto!!! La autorización de los padres y la documentación del menor son indispensables para el trámite."
	},
	{
		"id": 16,
		"question": "¿Cuál es la función principal del RUT (Registro Único Tributario)?",
		"correct_answer": "Identificar a los contribuyentes ante la DIAN",
		"incorrect_answers": [
			"Registrar vehículos ante el Ministerio de Transporte",
			"Registrar empresas ante la Cámara de Comercio",
			"Expedir licencias de construcción"
		],
		"description": "¡¡Correcto!!! El RUT es el documento que identifica a los contribuyentes para efectos fiscales."
	},
	{
		"id": 17,
		"question": "¿Qué documento se requiere para realizar trámites notariales en Colombia?",
		"correct_answer": "Documento de identidad vigente",
		"incorrect_answers": [
			"Registro civil de nacimiento",
			"Copia del pasaporte",
			"Licencia de conducción"
		],
		"description": "¡¡Correcto!!! El documento de identidad es indispensable para validar la identidad en trámites notariales."
	},
	{
		"id": 18,
		"question": "¿Dónde se realiza la inscripción para acceder al régimen de seguridad social en salud?",
		"correct_answer": "En una EPS (Entidad Promotora de Salud)",
		"incorrect_answers": [
			"En la DIAN",
			"En la Alcaldía municipal",
			"En la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La afiliación a una EPS es necesaria para acceder al sistema de salud en Colombia."
	},
	{
		"id": 19,
		"question": "¿Cuál es el trámite para actualizar datos personales en el RUT?",
		"correct_answer": "Presentar la solicitud de actualización ante la DIAN",
		"incorrect_answers": [
			"Hacer la actualización en la Cámara de Comercio",
			"Solicitar la actualización en la Alcaldía",
			"Actualizar directamente en el banco"
		],
		"description": "¡¡Correcto!!! La DIAN es la entidad encargada de actualizar la información del RUT."
	},
	{
		"id": 20,
		"question": "¿Qué documento debe presentar una persona para solicitar la pensión de vejez en Colombia?",
		"correct_answer": "Certificación de semanas cotizadas y documento de identidad",
		"incorrect_answers": [
			"Licencia de conducción y certificado médico",
			"Registro civil y certificado de estudio",
			"Tarjeta profesional y contrato de trabajo"
		],
		"description": "¡¡Correcto!!! Es necesario acreditar el tiempo cotizado y la identidad para acceder a la pensión."
	},
	{
		"id": 21,
		"question": "¿Cuál es la entidad responsable de expedir el pasaporte colombiano?",
		"correct_answer": "Ministerio de Relaciones Exteriores",
		"incorrect_answers": [
			"DIAN",
			"Alcaldía Municipal",
			"Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! El Ministerio de Relaciones Exteriores es la entidad encargada de expedir pasaportes."
	},
	{
		"id": 22,
		"question": "¿Qué trámite se debe realizar para inscribir una propiedad inmueble a nombre propio?",
		"correct_answer": "Realizar la inscripción en la Oficina de Registro de Instrumentos Públicos",
		"incorrect_answers": [
			"Registrar en la Alcaldía",
			"Solicitar en la Cámara de Comercio",
			"Actualizar en la DIAN"
		],
		"description": "¡¡Correcto!!! La inscripción formaliza la propiedad ante el sistema registral."
	},
	{
		"id": 23,
		"question": "¿Cuál es el trámite para obtener un certificado de tradición y libertad de un inmueble?",
		"correct_answer": "Solicitarlo en la Oficina de Registro de Instrumentos Públicos",
		"incorrect_answers": [
			"Solicitarlo en la Alcaldía",
			"Solicitarlo en la DIAN",
			"Solicitarlo en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! Este certificado es importante para conocer la situación jurídica del inmueble."
	},
	{
		"id": 24,
		"question": "¿Qué requisito es obligatorio para tramitar la licencia de funcionamiento de un negocio?",
		"correct_answer": "Contar con el certificado de uso del suelo expedido por la Alcaldía",
		"incorrect_answers": [
			"Tener la cédula de ciudadanía del propietario",
			"Contar con registro en la Cámara de Comercio",
			"Presentar el RUT actualizado"
		],
		"description": "¡¡Correcto!!! El uso del suelo garantiza que el negocio cumple con las normas urbanísticas."
	},
	{
		"id": 25,
		"question": "¿Dónde se debe solicitar la expedición del carnet de extranjería en Colombia?",
		"correct_answer": "Migración Colombia",
		"incorrect_answers": [
			"DIAN",
			"Alcaldía Municipal",
			"Ministerio de Salud"
		],
		"description": "¡¡Correcto!!! Migración Colombia es la entidad encargada de expedir documentos para extranjeros."
	},
	{
		"id": 26,
		"question": "¿Qué entidad se encarga de la expedición de la licencia de pesca en Colombia?",
		"correct_answer": "Autoridad Nacional de Acuicultura y Pesca (AUNAP)",
		"incorrect_answers": [
			"Ministerio de Agricultura",
			"DIAN",
			"Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La AUNAP regula y expide las licencias para actividades pesqueras."
	},
	{
		"id": 27,
		"question": "¿Cuál es el trámite para realizar el registro civil de matrimonio en Colombia?",
		"correct_answer": "Presentar la solicitud en la Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"Hacer la solicitud en la Alcaldía",
			"Solicitar en la DIAN",
			"Realizarlo en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La Registraduría es la entidad encargada de registrar los matrimonios civiles."
	},
	{
		"id": 28,
		"question": "¿Cuál es el documento que acredita la afiliación al sistema de pensiones en Colombia?",
		"correct_answer": "Certificado de afiliación emitido por la entidad administradora de pensiones",
		"incorrect_answers": [
			"Carnet de salud",
			"Registro civil",
			"Licencia de conducción"
		],
		"description": "¡¡Correcto!!! Este certificado es esencial para trámites relacionados con pensiones."
	},
	{
		"id": 29,
		"question": "¿Dónde se debe realizar el trámite para obtener la tarjeta profesional para ejercer una carrera?",
		"correct_answer": "En el organismo regulador de la profesión correspondiente",
		"incorrect_answers": [
			"DIAN",
			"Alcaldía",
			"Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! Cada profesión tiene una entidad reguladora encargada de expedir la tarjeta profesional."
	},
	{
		"id": 30,
		"question": "¿Cuál es el requisito para renovar la licencia de conducción en Colombia?",
		"correct_answer": "Presentar examen médico y de aptitud física y mental",
		"incorrect_answers": [
			"Solo pagar la tasa de renovación",
			"Realizar un curso de conducción",
			"Solicitar autorización en la Alcaldía"
		],
		"description": "¡¡Correcto!!! La renovación requiere la evaluación médica para garantizar la capacidad para conducir."
	},
	{
		"id": 31,
		"question": "¿Qué trámite se debe hacer para registrar una obra literaria en Colombia?",
		"correct_answer": "Registrar la obra en la Dirección Nacional de Derechos de Autor",
		"incorrect_answers": [
			"Solicitar registro en la Cámara de Comercio",
			"Registrar en la DIAN",
			"Inscribir en la Alcaldía"
		],
		"description": "¡¡Correcto!!! La protección de derechos de autor se realiza ante la entidad nacional especializada."
	},
	{
		"id": 32,
		"question": "¿Cuál es el procedimiento para solicitar un subsidio de vivienda en Colombia?",
		"correct_answer": "Presentar la solicitud ante el Ministerio de Vivienda o entidad autorizada, cumpliendo requisitos de ingresos y vivienda",
		"incorrect_answers": [
			"Solicitar en la Alcaldía sin requisitos",
			"Hacer la solicitud en la Cámara de Comercio",
			"Presentar documentos en la DIAN"
		],
		"description": "¡¡Correcto!!! El subsidio de vivienda tiene requisitos específicos que deben cumplirse y se tramita ante las entidades autorizadas."
	},
	{
		"id": 33,
		"question": "¿Qué documento se necesita para realizar el trámite de divorcio de mutuo acuerdo en Colombia?",
		"correct_answer": "Convenio de divorcio firmado por ambos cónyuges y presentado ante un juez de familia",
		"incorrect_answers": [
			"Solicitud unilateral en la Alcaldía",
			"Registro civil de matrimonio solamente",
			"Acta de conciliación ante la DIAN"
		],
		"description": "¡¡Correcto!!! El divorcio de mutuo acuerdo requiere un convenio aprobado por la autoridad judicial."
	},
	{
		"id": 34,
		"question": "¿Cuál es el trámite para solicitar una visa de trabajo en Colombia?",
		"correct_answer": "Presentar la solicitud ante Migración Colombia con contrato laboral y documentos requeridos",
		"incorrect_answers": [
			"Solicitar en la DIAN",
			"Realizar trámite en la Alcaldía",
			"Registrar en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! Migración Colombia es la entidad encargada de la expedición de visas de trabajo."
	},
	{
		"id": 35,
		"question": "¿Cuál es el procedimiento para solicitar el registro de una marca en Colombia?",
		"correct_answer": "Presentar la solicitud ante la Superintendencia de Industria y Comercio",
		"incorrect_answers": [
			"Registrar en la Cámara de Comercio",
			"Solicitar en la DIAN",
			"Inscribir en la Alcaldía"
		],
		"description": "¡¡Correcto!!! La Superintendencia de Industria y Comercio es responsable de la protección de marcas."
	},
	{
		"id": 36,
		"question": "¿Qué documento es necesario para realizar la inscripción en el servicio militar obligatorio en Colombia?",
		"correct_answer": "Tarjeta de identidad o cédula de ciudadanía",
		"incorrect_answers": [
			"Licencia de conducción",
			"Pasaporte",
			"Certificado de nacimiento"
		],
		"description": "¡¡Correcto!!! La identificación personal es fundamental para el trámite de inscripción al servicio militar."
	},
	{
		"id": 37,
		"question": "¿Cuál es el trámite para obtener el certificado de antecedentes disciplinarios en Colombia?",
		"correct_answer": "Solicitarlo en la Procuraduría General de la Nación",
		"incorrect_answers": [
			"Solicitarlo en la DIAN",
			"Solicitarlo en la Fiscalía",
			"Solicitarlo en la Alcaldía"
		],
		"description": "¡¡Correcto!!! La Procuraduría expide certificados relacionados con antecedentes disciplinarios."
	},
	{
		"id": 38,
		"question": "¿Dónde se debe realizar el trámite para obtener la licencia de caza deportiva en Colombia?",
		"correct_answer": "En la Autoridad Nacional de Licencias Ambientales (ANLA)",
		"incorrect_answers": [
			"En la Alcaldía",
			"En la DIAN",
			"En la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La ANLA es la entidad encargada de regular actividades ambientales como la caza deportiva."
	},
	{
		"id": 39,
		"question": "¿Cuál es el procedimiento para solicitar el certificado electoral en Colombia?",
		"correct_answer": "Solicitarlo en la Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"Solicitarlo en la Alcaldía",
			"Solicitarlo en la DIAN",
			"Solicitarlo en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La Registraduría expide certificados electorales para validar la participación en procesos electorales."
	},
	{
		"id": 40,
		"question": "¿Qué trámite se debe realizar para inscribir una asociación sin ánimo de lucro en Colombia?",
		"correct_answer": "Registrar los estatutos en la Cámara de Comercio",
		"incorrect_answers": [
			"Inscribir en la DIAN",
			"Solicitar en la Alcaldía",
			"Registrar en la Procuraduría"
		],
		"description": "¡¡Correcto!!! La inscripción formal se realiza ante la Cámara de Comercio para asociaciones sin ánimo de lucro."
	},
	{
		"id": 41,
		"question": "¿Cuál es el trámite para obtener la licencia ambiental en Colombia?",
		"correct_answer": "Solicitarla ante la Autoridad Nacional de Licencias Ambientales (ANLA) o autoridad ambiental regional",
		"incorrect_answers": [
			"Solicitarla en la Alcaldía",
			"Solicitarla en la DIAN",
			"Solicitarla en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La licencia ambiental regula actividades con impacto ambiental y es expedida por la ANLA o autoridades regionales."
	},
	{
		"id": 42,
		"question": "¿Qué trámite debe hacer una persona para registrar un bien mueble, como un vehículo usado?",
		"correct_answer": "Realizar la transferencia de propiedad en el Registro Nacional Automotor",
		"incorrect_answers": [
			"Registrar en la DIAN",
			"Registrar en la Cámara de Comercio",
			"Inscribir en la Alcaldía"
		],
		"description": "¡¡Correcto!!! La transferencia formaliza el cambio de propietario ante el registro automotor."
	},
	{
		"id": 43,
		"question": "¿Cuál es el documento necesario para inscribir un acto notarial en Colombia?",
		"correct_answer": "Copia del acta notarial y documento de identidad",
		"incorrect_answers": [
			"Factura de compra",
			"Certificado de tradición",
			"Licencia de funcionamiento"
		],
		"description": "¡¡Correcto!!! El acta notarial junto con identificación es requerida para inscribir actos notariales."
	},
	{
		"id": 44,
		"question": "¿Cuál es el plazo para solicitar la devolución de saldos a favor en impuestos en Colombia?",
		"correct_answer": "Cinco años desde la fecha de la declaración o pago",
		"incorrect_answers": [
			"Dos años",
			"Tres años",
			"Un año"
		],
		"description": "¡¡Correcto!!! El plazo legal para reclamar devoluciones tributarias es de cinco años."
	},
	{
		"id": 45,
		"question": "¿Qué trámite se debe realizar para obtener el Registro Único de Víctimas en Colombia?",
		"correct_answer": "Presentar la solicitud en la Unidad para la Atención y Reparación Integral a las Víctimas",
		"incorrect_answers": [
			"Solicitarlo en la DIAN",
			"Solicitarlo en la Alcaldía",
			"Solicitarlo en la Fiscalía"
		],
		"description": "¡¡Correcto!!! La Unidad para la Atención y Reparación Integral a las Víctimas es la entidad encargada del registro."
	},
	{
		"id": 46,
		"question": "¿Qué entidad debe autorizar la exportación de productos agrícolas en Colombia?",
		"correct_answer": "ICA (Instituto Colombiano Agropecuario)",
		"incorrect_answers": [
			"DIAN",
			"Ministerio de Comercio",
			"Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! El ICA es responsable del control fitosanitario y autorización para exportar productos agrícolas."
	},
	{
		"id": 47,
		"question": "¿Qué trámite se debe realizar para obtener la licencia de construcción en Colombia?",
		"correct_answer": "Solicitar la licencia en la Curaduría Urbana o Alcaldía municipal",
		"incorrect_answers": [
			"Solicitar en la DIAN",
			"Registrar en la Cámara de Comercio",
			"Solicitar en el Ministerio de Vivienda"
		],
		"description": "¡¡Correcto!!! La licencia de construcción es otorgada por la Curaduría Urbana o Alcaldía según la jurisdicción."
	},
	{
		"id": 48,
		"question": "¿Dónde se debe presentar la declaración de renta en Colombia?",
		"correct_answer": "Ante la DIAN",
		"incorrect_answers": [
			"En la Alcaldía",
			"En la Cámara de Comercio",
			"En la Superintendencia de Sociedades"
		],
		"description": "¡¡Correcto!!! La DIAN es la entidad encargada de recibir y procesar las declaraciones de renta."
	},
	{
		"id": 49,
		"question": "¿Cuál es el trámite para solicitar la afiliación a una caja de compensación familiar?",
		"correct_answer": "Presentar la solicitud con los documentos requeridos en la caja de compensación seleccionada",
		"incorrect_answers": [
			"Realizar la solicitud en la Alcaldía",
			"Inscribirse en la DIAN",
			"Solicitar en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La afiliación a cajas de compensación se hace directamente ante la entidad respectiva."
	},
	{
		"id": 50,
		"question": "¿Cuál es el procedimiento para inscribir un vehículo nuevo en Colombia?",
		"correct_answer": "Realizar la matrícula en el Registro Nacional Automotor presentando factura y documentos de propiedad",
		"incorrect_answers": [
			"Registrar en la DIAN",
			"Solicitar inscripción en la Alcaldía",
			"Hacer el trámite en la Cámara de Comercio"
		],
		"description": "¡¡Correcto!!! La matrícula formaliza la propiedad y uso legal del vehículo."
	}
]

/* Tomado de https://convocatoriacnsc.com/1er-simulacro-en-competencia-administrativa/ */
export const competencia_administrativa = [

	{
		id: 1,
		question: "Para los empleos de libre nombramiento y remoción, el encargo en caso de vacancia temporal o definitiva podrá ser hasta por el término de:",
		correct_answer: "Tres meses",
		incorrect_answers: ["Dos meses", "Cuatro meses", "Seis meses"],
		description: "¡¡¡Correcto!!! Según la Ley 909 de 2004, artículo 24, el encargo puede ser hasta por 3 meses, prorrogables por otros 3."
	},
	{
		id: 2,
		question: "El régimen de Derecho Público y la jurisdicción Contencioso – Administrativa, resuelven las controversias que se presentan entre la administración y:",
		correct_answer: "Empleados públicos",
		incorrect_answers: ["Trabajadores oficiales", "Trabajadores públicos", "Empleados oficiales"],
		description: "¡¡¡Correcto!!! Las relaciones entre empleados públicos y la administración se rigen por el Derecho Público."
	},
	{
		id: 3,
		question: "Las personas que prestan sus servicios en los Ministerios, Departamentos Administrativos, Superintendencias y Unidades Administrativas especiales, en labores de construcción y sostenimiento de obras públicas, son:",
		correct_answer: "Trabajadores oficiales",
		incorrect_answers: ["Trabajadores públicos", "Empleados públicos", "Servidores públicos"],
		description: "¡¡¡Correcto!!! Se considera trabajadores oficiales a quienes desempeñan labores de construcción o mantenimiento."
	},
	{
		id: 4,
		question: "Las personas que prestan sus servicios en los Establecimientos Públicos, son propiamente:",
		correct_answer: "Empleados públicos",
		incorrect_answers: ["Trabajadores públicos", "Empleados oficiales", "Trabajadores oficiales"],
		description: "¡¡¡Correcto!!! En los establecimientos públicos, los servidores tienen naturaleza de empleados públicos."
	},
	{
		id: 5,
		question: "Se cumple para todos los empleados públicos:",
		correct_answer: "Son servidores públicos",
		incorrect_answers: ["Son miembros de las corporaciones públicas", "Son siempre trabajadores oficiales", "Algunas veces son empleados de carrera"],
		description: "¡¡¡Correcto!!! Todo empleado público es un servidor público, aunque no todos son de carrera."
	}
	,
	{
		id: 6,
		question: "A los miembros de las corporaciones públicas, los empleados y trabajadores del estado y de sus entidades descentralizadas territorialmente y por servicios, se les llama:",
		correct_answer: "Servidores públicos",
		incorrect_answers: ["Trabajadores oficiales", "Empleados públicos", "Empleados oficiales"],
		description: "¡¡¡Correcto!!! Según art. 123 de la Constitución Nacional"
	},
	{
		id: 7,
		question: "Se cumple, solo para el Instituto de los Seguros Sociales, que el Director General, el Secretario General, los Subdirectores y los Gerentes Seccionales son:",
		correct_answer: "Empleados públicos",
		incorrect_answers: ["Funcionarios de seguridad social", "Trabajadores oficiales", "Trabajadores particulares"],
		description: "¡¡¡Correcto!!! Por régimen legal aplicable al ISS"
	},
	{
		id: 8,
		question: "Los decretos extraordinarios 2400 y 3074 de 1968, reglamentados por el decreto 1950 de 1973 y la ley 909 de 2004, conforman:",
		correct_answer: "El estatuto de la Carrera Administrativa",
		incorrect_answers: ["El estatuto del empleado de libre nombramiento y remoción", "El estatuto de los trabajadores", "El estatuto del empleado oficial"],
		description: "¡¡¡Correcto!!! Normativa clave de la Carrera Administrativa"
	},
	{
		id: 9,
		question: "Las leyes 61 de 1987; 27 de 1992 y 443 de 1998 están relacionadas directamente, con:",
		correct_answer: "El estatuto de la Carrera Administrativa",
		incorrect_answers: ["El estatuto de los trabajadores", "El estatuto del empleado oficial", "El estatuto de los educadores"],
		description: "¡¡¡Correcto!!! Referentes históricos de la carrera administrativa"
	},
	{
		id: 10,
		question: "Las personas que prestan sus servicios en las Empresas Industriales y Comerciales del Estado, en actividades de dirección o confianza fijadas en los estatutos, son propiamente:",
		correct_answer: "Empleados públicos",
		incorrect_answers: ["Empleados oficiales", "Trabajadores oficiales", "Trabajadores públicos"],
		description: "¡¡¡Correcto!!! Según los estatutos y régimen legal de estas entidades"
	},

	{
		id: 11,
		question: "La Carrera Administrativa adquiere rango normativo constitucional, enunciando los principios básicos referentes para nombramiento, remoción, ascensos, contemplando la prohibición al funcionario de intervenir en política, en:",
		correct_answer: "El plebiscito de 1957",
		incorrect_answers: ["La constitución de 1886", "La ley 19 de 1958", "La ley 165 de 1938"],
		description: "¡¡¡Correcto!!! Reconocimiento constitucional de la carrera administrativa"
	},
	{
		id: 12,
		question: "____________________________, que reglamentó el decreto de 1732 de 1960, que creó el Departamento Administrativo del servicio civil, La Comisión Nacional del servicio Civil y la escuela Superior de Administración Pública, ESAP como los organismos encargados del manejo de la carrera Administrativa, fue:",
		correct_answer: "La ley 65 de 1967",
		incorrect_answers: ["La ley 165 de 1938", "La ley 19 de 1958", "El plebiscito de 1957"],
		description: "¡¡¡Correcto!!! Ley que consolidó los organismos clave del sistema administrativo"
	},
	{
		id: 13,
		question: "Al sistema técnico de administración de personal que tiene por objeto garantizar la eficiencia de la administración pública en general, se le llama:",
		correct_answer: "Carrera administrativa",
		incorrect_answers: ["Carrera fiscal", "Carrera judicial", "Carrera docente"],
		description: "¡¡¡Correcto!!! Es la esencia del mérito en el servicio público"
	},
	{
		id: 14,
		question: "Al conjunto de regímenes aplicables al personal de la Administración Publica, se le llama generalmente:",
		correct_answer: "Función pública",
		incorrect_answers: ["Derecho público", "Derecho administrativo laboral", "Función administrativa"],
		description: "¡¡¡Correcto!!! Término general para los regímenes del personal estatal"
	},
	{
		id: 15,
		question: "Las personas que prestan sus servicios en las Sociedades de Economía mixta con capital público igual o superior al noventa por ciento, en actividades de dirección o confianza, fijadas en los estatutos, son propiamente:",
		correct_answer: "Empleados oficiales",
		incorrect_answers: ["Empleados públicos", "Trabajadores oficiales", "Trabajadores públicos"],
		description: "¡¡¡Correcto!!! Según régimen legal aplicable por porcentaje de capital"
	},
	{
		id: 16,
		question: "Mientras se surte el proceso de selección para proveer empleos de Carrera Administrativa, se podrá encargar a un empleado que este desempeñando el empleo inmediatamente inferior, hasta por un término no superior a:",
		correct_answer: "Seis meses",
		incorrect_answers: ["Doce meses", "Diez meses", "Siete meses"],
		description: "¡¡¡Correcto!!! Según la normativa para encargos en carrera administrativa"
	},
	{
		id: 17,
		question: "La ley donde se estableció por primera vez la estabilidad en el empleo público, y el merito para ascender en los cargos y creó el consejo de Administración y Disciplina fue:",
		correct_answer: "La ley 165 de 1938",
		incorrect_answers: ["El plebiscito de 1957", "La constitución de 1886", "La ley 19 de 1958"],
		description: "¡¡¡Correcto!!! Primera ley con principios meritocráticos"
	},
	{
		id: 18,
		question: "Las personas que prestan sus servicios en las sociedades de economía mixta con capital público igual o superior al noventa por ciento del capital social, en actividades diferentes de las de dirección y confianza según los estatutos, son:",
		correct_answer: "Trabajadores oficiales",
		incorrect_answers: ["Servidores públicos", "Empleados públicos", "Trabajadores públicos"],
		description: "¡¡¡Correcto!!! Según tipo de funciones y estructura societaria"
	},
	{
		id: 19,
		question: "En la época de la Colonia en la América hispánica (del siglo XVI hasta los primeros años del siglo XIX), todos los cargos en los virreinatos dependían directa o indirectamente de:",
		correct_answer: "El Rey de España",
		incorrect_answers: ["Del respectivo Virrey", "De la Real Audiencia", "De la Real Hacienda"],
		description: "¡¡¡Correcto!!! La máxima autoridad en la colonia era el monarca español"
	},
	{
		id: 20,
		question: "Se cumple para los miembros de las corporaciones públicas que son de elección popular, con periodos fijos y con régimen propio:",
		correct_answer: "Son servidores públicos",
		incorrect_answers: ["Son empleados públicos", "Son empleados de Carrera Administrativa", "Son trabajadores oficiales"],
		description: "¡¡¡Correcto!!! Son servidores públicos por mandato constitucional"
	},

	{
		id: 21,
		question: "Las personas que presentan sus servicios en los Ministerios, Departamentos Administrativos y Superintendencias son propiamente:",
		correct_answer: "Empleados públicos",
		incorrect_answers: [
			"Trabajadores oficiales",
			"Trabajadores en provisionalidad",
			"Funcionarios de seguridad social"
		],
		description: "¡¡¡Correcto!!! Según clasificación legal por tipo de entidad"
	},
	{
		id: 22,
		question: "En aquellas Sociedades de Economía Mixta con capital público inferior al noventa por ciento (90%) del capital social, los servidores son considerados como:",
		correct_answer: "Trabajadores particulares",
		incorrect_answers: [
			"Trabajadores oficiales",
			"Empleados oficiales",
			"Empleados públicos"
		],
		description: "¡¡¡Correcto!!! Por régimen privado cuando el capital público es menor al 90%"
	},
	{
		id: 23,
		question: "Según la Constitución Nacional, la responsabilidad de la administración y vigilancia de las carreras de los servidores públicos, le corresponde:",
		correct_answer: "A la Comisión Nacional del Servicio Civil",
		incorrect_answers: [
			"Al Congreso de Colombia",
			"Al Presidente de la República",
			"A la Comisión Nacional del Servidor Público"
		],
		description: "¡¡¡Correcto!!! Órgano constitucional autónomo con esta función"
	},
	{
		id: 24,
		question: "Se cumple, solo para el Instituto de los Seguros Sociales, que las personas que cumplen funciones de aseo, jardinería, cocina, celaduría o parecidos son:",
		correct_answer: "Trabajadores oficiales",
		incorrect_answers: [
			"Empleados públicos",
			"Funcionarios de seguridad social",
			"Trabajadores particulares"
		],
		description: "¡¡¡Correcto!!! Por naturaleza operativa de sus funciones"
	},
	{
		id: 25,
		question: "Las personas que prestan sus servicios en las empresas industriales y comerciales del estado, Excepto las que desarrollan actividades de dirección o confianza, según los estatutos, son:",
		correct_answer: "Trabajadores oficiales",
		incorrect_answers: [
			"Servidores oficiales",
			"Trabajadores públicos",
			"Empleados públicos"
		],
		description: "¡¡¡Correcto!!! Clasificación especial por tipo de actividad"
	},
	{
		id: 26,
		question: "A los servidores que en el Instituto de los Seguros Sociales se les llamó funcionarios de Seguridad Social, hoy día se les considera como:",
		correct_answer: "Empleados oficiales",
		incorrect_answers: [
			"Empleados públicos",
			"Trabajadores oficiales",
			"Trabajadores particulares"
		],
		description: "¡¡¡Correcto!!! Cambio de denominación y régimen aplicable"
	},
	{
		id: 27,
		question: "Las controversias que se presentan entre los trabajadores oficiales y la Administración son competencia de la:",
		correct_answer: "Jurisdicción laboral común",
		incorrect_answers: [
			"Jurisdicción laboral y penal",
			"Jurisdicción contencioso-administrativa",
			"Jurisdicción de familia"
		],
		description: "¡¡¡Correcto!!! Por tratarse de una relación laboral"
	},
	{
		id: 28,
		question: "La estabilidad e igualdad de oportunidades para el acceso y el ascenso al servicio público se obtiene mediante:",
		correct_answer: "Carrera administrativa",
		incorrect_answers: [
			"Las competencias ciudadanas",
			"La Educación formal",
			"La Educación no formal"
		],
		description: "¡¡¡Correcto!!! Sistema que garantiza meritocracia"
	},
	{
		id: 29,
		question: "Los empleos de Carrera Administrativa cuyos titulares se encuentren en situaciones administrativas que impliquen separación temporal, serán provistos en forma provisional por:",
		correct_answer: "Servidores públicos de carrera",
		incorrect_answers: [
			"Empleados de libre nombramiento y remoción",
			"Empleados públicos",
			"Trabajadores oficiales"
		],
		description: "¡¡¡Correcto!!! Provisión temporal por personal de carrera"
	},
	{
		id: 30,
		question: "Por la forma como la historia, presenta la era Colonial Hispana en nuestra América, es posible afirmar que todos los representantes de la corona Española eran funcionarios:",
		correct_answer: "De libre nombramiento y remoción",
		incorrect_answers: [
			"De periodo fijo",
			"De carácter temporal",
			"De carrera"
		],
		description: "¡¡¡Correcto!!! Eran designados directamente por la Corona"
	},

	{
		id: 31,
		question: "Según el artículo 3º de la ley 909 de 2.004 son todas Carrera Administrativas especiales, Excepto en:",
		correct_answer: "Las Corporaciones Autónomas Regionales",
		incorrect_answers: [
			"La Rama Judicial del Poder Público",
			"La Defensoría del Pueblo.",
			"La Procuraduría General de la Nación"
		],
		description: "¡¡Correcto!! Las Corporaciones Autónomas Regionales no son consideradas dentro de las carreras administrativas especiales."
	},
	{
		id: 32,
		question: "Según el Art. 3º de la ley 909 de 2.004 son todas Carreras Administrativas especiales, Excepto en:",
		correct_answer: "Las contralorías Territoriales",
		incorrect_answers: [
			"La Contraloría General de la República",
			"La Fiscalía General de la Nación",
			"Las personerías"],

		description: "¡¡Correcto!! Las contralorías Territoriales no están dentro de las carreras administrativas especiales."
	},
	{
		id: 33,
		question: "Se cumple para las auxiliares de la Administración pública como los peritos, jurados de votación y obreros temporales son considerados como:",
		correct_answer: "Trabajadores oficiales",
		"incorrect_answers": [
			"No servidores públicos",
			"Servidores públicos",
			"Empleados públicos"
		],
		description: "¡¡Correcto!! Estos empleados son considerados trabajadores oficiales según la normativa."
	},
	{
		id: 34,
		question: "Según el Art. 3º de la ley 909 de 2.004, son todas Carreras Administrativas especiales, Excepto en:",
		correct_answer: "El personal regido por la Carrera Diplomática y Consular",
		incorrect_answers: [
			"El personal Docente",
			"Los entes Universitarios Autónomos",
			"El de la Comisión Nacional de Televisión"
		],
		description: "¡¡Correcto!! El personal regido por la Carrera Diplomática y Consular no está dentro de las carreras administrativas especiales."
	},
	{
		id: 35,
		question: "La Carrera Administrativa que rige para el personal que presta sus servicios en el Departamento Administrativo de la Presidencia de la República, se clasifica como una:",
		correct_answer: "Carrera Administrativa Especial",
		incorrect_answers: [
			"Carrera Administrativa Regular",
			"Carrera Administrativa Ejecutiva",
			"Carrera Administrativa Específica"
		],
		description: "¡¡Correcto!! El personal del Departamento Administrativo de la Presidencia de la República está regido por una carrera administrativa especial."
	},
	{
		id: 36,
		question: "La ley de Carrera Administrativa se aplica en toda su integridad a todos los empleados públicos que prestan sus servicios en empleos de carrera, en las siguientes entidades, Excepto:",
		correct_answer: "En las entidades territoriales, llamadas Departamentos",
		"incorrect_answers": [
			"En la Rama Judicial del Poder Público",
			"En la Auditoría General de la República",
			"En la Contaduría General de la Nación"
		],
		description: "¡¡Correcto!! Las entidades territoriales como los Departamentos no están regidas por la ley de carrera administrativa."
	},
	{
		id: 37,
		question: "La carrera Administrativa que rige para el personal científico y tecnológico de las entidades públicas que conforman el Sistema Nacional de Ciencias y Tecnología, se clasifica como una:",
		correct_answer: "Carrera Administrativa Específica",
		incorrect_answers: [
			"Carrera Administrativa Ejecutiva",
			"Carrera Administrativa Regular",
			"Carrera Administrativa Especial"
		],
		description: "¡¡Correcto!! El personal científico y tecnológico está regido por una carrera administrativa específica."
	},
	{
		id: 38,
		question: "Se cumple para las personas a quienes el gobierno o las corporaciones públicas confieren su representación en las juntas directivas de las Entidades Descentralizadas son consideradas como:",
		correct_answer: "Empleados de libre nombramiento y remoción",
		incorrect_answers: [
			"Trabajadores oficiales",
			"No servidores públicos",
			"Servidores públicos"
		],
		description: "¡¡Correcto!! Estas personas son consideradas empleados de libre nombramiento y remoción."
	},
	{
		id: 39,
		question: "Tienen normas propias todos los empleados públicos de los siguientes sistemas específicos de carreras administrativas, Excepto:",
		correct_answer: "El personal de los Establecimientos Públicos",
		incorrect_answers: [
			"El personal de la DIAN",
			"El personal del INPEC",
			"El personal del DNI"
		],
		description: "¡¡Correcto!! El personal de los Establecimientos Públicos no tiene un sistema de carrera administrativa específico."
	},
	{
		id: 40,
		question: "La carrera Administrativa que rige para el personal que presta sus servicios en la Unidad Administrativa Especial de la Aeronáutica Civil, se clasifica como una:",
		correct_answer: "Carrera Administrativa Regular",
		incorrect_answers: [
			"Carrera Administrativa Especial",
			"Carrera Administrativa Ejecutiva",
			"Carrera Administrativa Específica"
		],
		description: "¡¡Correcto!! El personal de la Aeronáutica Civil está regido por una carrera administrativa regular."
	},
	{
		id: 41,
		question: "La vigilancia para los sistemas de Carreras Administrativas Específicas estará a cargo de:",
		correct_answer: "La Comisión Nacional del Servicio Civil",
		incorrect_answers: [
			"La Contraloría General de la República",
			"La Secretaría General de la Presidencia de La República",
			"La respectiva Gerencia de la entidad"
		],
		description: "¡¡Correcto!! La Comisión Nacional del Servicio Civil es la encargada de la vigilancia en los sistemas de carreras administrativas específicas."
	},
	{
		id: 42,
		question: "Se cumple tanto para el constructor como para sus obreros, quienes realizan obras para la administración, con base en un contrato de obras públicas; son considerados como:",
		correct_answer: "Trabajadores oficiales",
		incorrect_answers: [
			"Servidores públicos",
			"No servidores públicos",
			"Empleados públicos"
		],
		description: "¡¡Correcto!! Tanto los constructores como los obreros en obras públicas son considerados trabajadores oficiales."
	},
	{
		id: 43,
		question: "Aquellas carreras administrativas que por la especialidad de las funciones que cumplen las entidades en los cuales se aplican; contienen regulaciones propias para el desarrollo y aplicación de dicha carrera, se llama:",
		correct_answer: "Carrera Administrativa Específica",
		incorrect_answers: [
			"Carrera Administrativa Ejecutiva",
			"Carrera Administrativa Especial",
			"Carrera Administrativa Canónica"
		],
		description: "¡¡Correcto!! Estas carreras administrativas son específicas debido a la especialidad de las funciones que realizan las entidades."
	},
	{
		id: 44,
		question: "Tienen normas propias todos los empleados públicos de los siguientes sistemas específicos de Carrera Administrativa, Excepto:",
		correct_answer: "El personal del Departamento Administrativo de la Presidencia de la República",
		incorrect_answers: [
			"El personal del Sistema Nacional de Ciencia y Tecnología",
			"El personal administrativo de los entes de Educación Superior que no sean instituciones universitarias autónomas.",
			"El personal de las Superintendencias"
		],
		description: "¡¡Correcto!! El personal del Departamento Administrativo de la Presidencia de la República no tiene un sistema específico de carrera administrativa."
	},
	{
		id: 45,
		question: "Se cumple para quienes desempeñen empleos en las entidades de la Rama Ejecutiva del nivel nacional y de sus entes descentralizados:",
		correct_answer: "Se les aplicarán las normas de la carrera administrativa",
		incorrect_answers: [
			"Se consideran empleados de libre nombramiento y remoción.",
			"Se les aplicarán las normas para trabajadores públicos",
			"Se consideran trabajadores oficiales"
		],
		description: "¡¡Correcto!! Estas personas estarán regidas por las normas de la carrera administrativa."
	},
	{
		id: 46,
		question: "Son funciones de _________________ asegurar la atención y satisfacción de los intereses de la comunidad:",
		correct_answer: "La función pública",
		incorrect_answers: [
			"Las leyes relacionadas con el menor",
			"Las leyes del Derecho Administrativo",
			"La función privada"
		],
		description: "¡¡Correcto!! La función pública tiene como finalidad principal la satisfacción del interés general."
	},
	{
		id: 47,
		question: "La ley 909 de 2.004 en su Art. 28, consagra que el principio de _________________ en la gestión de los procesos de selección y en el escogimiento de los jurados y órganos técnicos encargados de la selección:",
		correct_answer: "La transparencia",
		incorrect_answers: [
			"La economía",
			"La igualdad",
			"La celeridad"
		],
		description: "¡¡Correcto!! El principio de transparencia garantiza procesos limpios, claros y objetivos."
	},
	{
		id: 48,
		question: "Los servidores públicos deben propender para que los procedimientos se adelanten en el menor tiempo posible y con la menor cantidad de gastos de quienes intervienen en ellos, por lo tanto solo se exigirán los documentos y copias estrictamente necesarios, aquí se configura el principio de la función pública, llamado:",
		correct_answer: "Principio de economía",
		incorrect_answers: [
			"Principio de celeridad",
			"Principio de eficacia",
			"Principio de igualdad"
		],
		description: "¡¡Correcto!! El principio de economía busca reducir gastos innecesarios y simplificar los procedimientos."
	},
	{
		id: 49,
		question: "Dice la ley 909 de 2.004 en el Art. 27 literal B: “Todos los ciudadanos que acrediten los requisitos determinados en las convocatorias podrán participar en los concursos sin discriminación de ninguna índole”, aquí se consagra el principio de la función pública, llamado:",
		correct_answer: "Principio de igualdad",
		incorrect_answers: [
			"Principio de mérito",
			"Principio de eficacia",
			"Principio de publicidad"
		],
		description: "¡¡Correcto!! Este principio garantiza igualdad de condiciones en el acceso a cargos públicos."
	},
	{
		id: 50,
		question: "Se cumple para la carrera administrativa, excepto:",
		correct_answer: "No se requiere que el 30% sean mujeres",
		incorrect_answers: [
			"Es para los empleados públicos",
			"Es para los empleados de las personerías",
			"Es para los empleados de las gobernaciones"
		],
		description: "¡¡Correcto!! La carrera administrativa incluye normas de equidad y paridad de género en el acceso a cargos."
	},
	{
		id: 51,
		question: "El principio de _______________ garantiza que todos los órganos encargados de gestionar y llevar a cabo los procedimientos de selección y, en especial, de cada uno de los miembros responsables de ejecutarlos con equidad:",
		correct_answer: "La imparcialidad",
		incorrect_answers: [
			"La economía",
			"La eficacia",
			"La celeridad"
		],
		description: "¡¡Correcto!! El principio de imparcialidad exige neutralidad y equidad en la selección de personal."
	},
	{
		id: 52,
		question: "En los casos de ingreso y ascenso en la carrera administrativa, realizada mediante concursos de méritos y calificación de pruebas, será obligatoria ___________________ como autoridades encargadas de efectuar la calificación.",
		correct_answer: "La participación de hombres y mujeres en igual proporción.",
		incorrect_answers: [
			"La participación de la defensoría del pueblo",
			"La participación del 30% de mujeres",
			"La participación de la personería respectiva"
		],
		description: "¡¡Correcto!! Este principio busca asegurar equidad de género en los procesos de selección."
	},
	{
		id: 53,
		question: "Los servidores públicos tienen la obligación de actuar con rectitud, lealtad, ética y observar los valores sociales de la comunidad, este es el principio de la función pública de:",
		correct_answer: "La moralidad",
		incorrect_answers: [
			"La imparcialidad",
			"La eficacia",
			"La igualdad"
		],
		description: "El principio de moralidad exige integridad ética en el actuar de los servidores públicos."
	},
	{
		id: 54,
		question: "La _____________________ es la responsable de la administración y vigilancia de las carreras en la administración pública:",
		correct_answer: "Comisión Nacional del Servicio Civil",
		incorrect_answers: [
			"Comisión Nacional del Servicio Público",
			"Comisión Nacional de Evaluación y Acreditación",
			"Personería"
		],
		description: "¡¡Correcto!! La CNSC es la entidad encargada de la carrera administrativa."
	},
	{
		id: 55,
		question: "El empleado de carrera administrativa cuyo cargo sea declarado de libre nombramiento y remoción, deberá ser trasladado dentro de la misma planta de personal:",
		correct_answer: "A otro cargo de carrera con funciones afines",
		incorrect_answers: [
			"A un cargo como empleado oficial",
			"A otro cargo pero de mayor salario",
			"A una dependencia con contrato a término fijo"
		],
		description: "¡¡Correcto!! El traslado debe mantener la naturaleza del empleo público de carrera."
	},
	{
		id: 56,
		question: "Los tres miembros de la Comisión Nacional del Servicio Civil, serán de dedicación exclusiva, no reelegibles y por un periodo de:",
		correct_answer: "Cuatro años",
		incorrect_answers: [
			"Tres años",
			"Seis años",
			"Dos años"
		],
		description: "¡¡Correcto!! El período de los comisionados está establecido en la ley como de cuatro años sin reelección."
	},
	{
		id: 57,
		question: "El principio de _________________ se refiere a que los instrumentos utilizados para verificar la capacidad y competencias de los aspirantes a acceder a los empleos públicos de carrera sean óptimos en su confección y aplicación:",
		correct_answer: "Validez y confiabilidad",
		incorrect_answers: [
			"Eficacia",
			"Publicidad",
			"Imparcialidad"
		],
		description: "¡¡Correcto!! La validez y confiabilidad aseguran que las pruebas midan correctamente las competencias requeridas."
	},
	{
		id: 58,
		question: "Cuando un empleo de libre nombramiento y remoción sea clasificado como de carrera administrativa, deberá:",
		correct_answer: "Ser provisto mediante concurso",
		incorrect_answers: [
			"Ser provisto en provisionalidad",
			"Ser provisto por un empleado temporal",
			"Ser provisto por un empleado a término fijo"
		],
		description: "¡¡Correcto!! La carrera administrativa requiere selección por mérito mediante concurso."
	},
	{
		id: 59,
		question: "El número máximo de miembros que conforman la Comisión Nacional del Servicio Civil es de:",
		correct_answer: "Tres",
		incorrect_answers: [
			"Dos",
			"Cinco",
			"Cuatro"
		],
		description: "¡¡Correcto!! La CNSC está conformada por tres miembros de dedicación exclusiva."
	},
	{
		id: 60,
		question: "Los servidores públicos tienen el deber de impulsar oficiosamente los procedimientos y no deben someterlos a retardos injustificados, aquí se enuncia el principio de la función pública denominado:",
		correct_answer: "Celeridad",
		incorrect_answers: [
			"Eficacia",
			"Economía",
			"Igualdad"
		],
		description: "¡¡Correcto!! El principio de celeridad promueve la agilidad en la gestión pública."
	},


	{
		id: 61,
		question: "Dice la ley 909 de 2.004 en su Art. 37 literal A: “La permanencia en los cargos de carrera administrativa exige la calificación satisfactoria en el desempeño del empleo, el logro de resultados y realizaciones el desarrollo y ejercicio de la función pública”, aquí se consagra el principio de:",
		correct_answer: "Mérito",
		incorrect_answers: [
			"La publicidad",
			"La moralidad",
			"La economía"
		],
		description: "¡¡Correcto!! El principio de mérito es la base de la carrera administrativa en Colombia."
	},
	{
		id: 62,
		question: "La _____________________ es un órgano de carácter legal, permanente de nivel nacional, independiente de las ramas y órganos del poder público, dotada de personería jurídica, autonomía administrativa y patrimonio propio y responsable de la administración de las carreras.",
		correct_answer: "Comisión Nacional del Servicio Civil",
		incorrect_answers: [
			"Defensoría del pueblo",
			"Personería",
			"Comisión Nacional de Evaluación y Acreditación"
		],
		description: "¡¡Correcto!! La Comisión Nacional del Servicio Civil administra las carreras del servicio público."
	},
	{
		id: 63,
		question: "Quienes ejercen los cargos de mayor jerarquía en las entidades de las tres ramas u órganos del poder público, en los niveles nacional, departamental, regional, provincial, distrital y municipal, deben:",
		correct_answer: "Ser mínimo el 30% de mujeres",
		incorrect_answers: [
			"Ser mínimo el 25% de mujeres",
			"Ser mínimo el 20% de mujeres",
			"Ser mínimo el 10% de mujeres"
		],
		description: "¡¡Correcto!! La ley busca garantizar la participación equitativa de mujeres en altos cargos públicos."
	},
	{
		id: 64,
		question: "En virtud del principio de _________________ los servidores públicos tendrán en cuenta que los procedimientos deben lograr su finalidad, removiendo de oficio los obstáculos puramente formales, así está consagrado en el código contencioso administrativo, Art.3º:",
		correct_answer: "Eficacia",
		incorrect_answers: [
			"Imparcialidad",
			"Igualdad",
			"Moralidad"
		],
		description: "¡¡Correcto!! La eficacia implica cumplir la finalidad del acto administrativo eliminando formalismos innecesarios."
	},
	{
		id: 65,
		question: "___________________ en los procesos de selección para garantizar la adecuación de los candidatos seleccionados al perfil del empleo, así consagra la ley 909 de 2.004 en su Art. 28, literal H, el principio de la función pública llamado:",
		correct_answer: "La eficacia",
		incorrect_answers: [
			"La confiabilidad",
			"La igualdad",
			"La publicidad"
		],
		description: "¡¡Correcto!! El principio de eficacia busca que los candidatos seleccionados se ajusten al perfil del empleo."
	},


	{
		id: 66,
		question: "Quienes prestan servicios personales remunerados, con vinculación legal y reglamentaria, en los organismos y entidades de la administración pública, se cumple que:",
		correct_answer: "Conforman la función pública",
		incorrect_answers: [
			"Constituyen la función del servicio",
			"Conforman la función oficial",
			"Ejercen la representación estatal"
		],
		description: "¡¡Correcto!! Las personas con vinculación legal y reglamentaria en entidades públicas hacen parte de la función pública."
	},
	{
		id: 67,
		question: "Por mandato constitucional y legal, los empleos públicos, en los órganos y entidades del estado colombiano son de Carrera Administrativa EXCEPTO:",
		correct_answer: "Cargos de elección popular",
		incorrect_answers: [
			"Empleos de período fijo;",
			"Empleos públicos de carrera",
			"Los de libre nombramiento y remoción"
		],
		description: "¡¡Correcto!! Los cargos de elección popular no forman parte de la carrera administrativa."
	},
	{
		id: 68,
		question: "El estado tiene el deber de garantizarle a todos los ciudadanos el mismo derecho, la misma protección, las mismas libertades y oportunidades, sin ninguna discriminación, este es el principio del a función pública llamado:",
		correct_answer: "Principio de igualdad",
		incorrect_answers: [
			"Principio de mérito",
			"Principio de moralidad",
			"Principio de eficacia"
		],
		description: "¡¡Correcto!! El principio de igualdad prohíbe toda forma de discriminación en el acceso y desempeño del empleo público."
	},
	{
		id: 69,
		question: "El empleado de carrera administrativa cuyo cargo sea declarado de libre nombramiento y remoción, deberá en la misma planta del personal:",
		correct_answer: "Pasar a otro cargo de carrera con igual o mayor remuneración.",
		incorrect_answers: [
			"Pasa a otro cargo de carrera con menor remuneración",
			"Pasar a otro cargo, pero de libre nombramiento y remuneración",
			"Pasar de inmediato a disfrutar de su pensión de jubilación"
		],
		description: "¡¡Correcto!! Se protege el derecho del empleado de carrera al reubicarse en un cargo equivalente o superior."
	},
	{
		id: 70,
		question: "Dice la ley 909 de 2.004 en el Art. 49 numeral 2: “Para la designación del empleo público, se tendrá en cuenta la capacidad y experiencia para el desempeño del empleo”, aquí se consagra el principio de la función pública, llamado:",
		correct_answer: "Principio de mérito",
		incorrect_answers: [
			"Principio de eficacia",
			"Principio de publicidad",
			"Principio de igualdad"
		],
		description: "¡¡Correcto!! El mérito es el criterio rector en el acceso a empleos públicos de carrera."
	},

	{
		id: 71,
		question: "La Comisión Nacional del Servicio Civil es la responsable de la administración y vigilancia de la carrera administrativa, excepto de:",
		correct_answer: "Las carreras especiales",
		incorrect_answers: [
			"Las convocatorias a concursos",
			"Las evaluaciones de los concursos",
			"Los concursos"
		],
		description: "¡¡Correcto!! Las carreras especiales como la docente o la judicial tienen sus propios regímenes distintos a los administrados por la CNSC."
	},
	{
		id: 72,
		question: "Si declarado el cargo como de libre nombramiento y remoción, no existiendo vacante dentro de la misma planta de personal, el Empleado de carrera deberá:",
		correct_answer: "Ser liquidado con indemnización",
		incorrect_answers: [
			"Gozar de inmediato de vacaciones adelantadas",
			"Continuar en el mismo cargo",
			"Pedir su pensión de jubilación"
		],
		description: "¡¡Correcto!! En caso de no poder ser reubicado, el empleado debe ser retirado con indemnización según la ley."
	},
	{
		id: 73,
		question: "La regulación del sistema del empleo público y el establecimiento de los principios básicos que deben regular el ejercicio de la Gerencia pública, es el objeto principal de:",
		correct_answer: "La ley 909 de 2.004 de carrera Administrativa",
		"incorrect_answers": [
			"La Constitución Nacional",
			"La ley 100 de 1.993",
			"La ley 80 de 1.993 de contratación administrativa"
		],
		description: "¡¡Correcto!! La Ley 909 de 2004 establece el marco normativo del empleo público y la carrera administrativa en Colombia."
	},
	{
		id: 74,
		question: "Dice la Constitución Política en su Art. 40 numeral 7: “Todo ciudadano tiene derecho a acceder al desempeño de funciones y cargos públicos”, aquí se consagra el principio de la función pública, llamado:",
		correct_answer: "Principio de igualdad",
		incorrect_answers: [
			"Principio de economía",
			"Principio de mérito",
			"Principio de publicidad"
		],
		description: "¡¡Correcto!! El artículo citado garantiza el derecho de todos los ciudadanos a participar en la administración pública sin discriminación."
	},
	{
		id: 75,
		question: "La ley 909 de 2.004, consagra en su Art. 28 el principio de ________________ como la efectiva difusión de las convocatorias en condiciones tales que permitan se conocidas por el total de los candidatos potenciales:",
		correct_answer: "La publicidad",
		incorrect_answers: [
			"La celeridad",
			"La transparencia",
			"La economía"
		],
		description: "¡¡Correcto!! El principio de publicidad busca que los procesos de selección sean visibles y accesibles para todos los interesados."
	},


	{
		id: 76,
		question: "Por mandato constitucional y legal, los empleos públicos, en los órganos y entidades del estado colombiano son de Carrera Administrativa, EXCEPTO:",
		correct_answer: "Los de libre nombramiento y remoción",
		incorrect_answers: [
			"Los de las personerías",
			"Los de las corporaciones autónomas regionales",
			"Los de la Auditoría General de la Nación"
		],
		description: "Los empleos de libre nombramiento y remoción no hacen parte de la carrera administrativa según la Constitución y la Ley 909."
	},
	{
		id: 77,
		question: "El número máximo de miembros que conforman la Comisión Nacional del Servicio Civil es de:",
		correct_answer: "Tres",
		incorrect_answers: [
			"Dos",
			"Cinco",
			"Cuatro"
		],
		description: "¡¡Correcto!! La CNSC está conformada por tres miembros según lo establece la Ley 909 de 2004."
	},
	{
		id: 78,
		question: "Cuando un empleo de libre nombramiento y remoción sea clasificado como de carrera administrativa, deberá:",
		correct_answer: "Ser provisto mediante concurso",
		incorrect_answers: [
			"Ser provisto en provisionalidad",
			"Ser provisto por un empleado temporal",
			"Ser provisto por un empleado a término fijo"
		],
		description: "¡¡Correcto!! Los cargos de carrera deben proveerse por concurso público de méritos según la ley."
	},
	{
		id: 79,
		question: "El principio de _________________ se refiere a que los instrumentos utilizados para verificar la capacidad y competencias de los aspirantes a acceder a los empleos públicos de carrera sean óptimos en su confección y aplicación:",
		correct_answer: "Validez y confiabilidad",
		incorrect_answers: [
			"Eficacia",
			"Publicidad",
			"Imparcialidad"
		],
		description: "¡¡Correcto!! La validez y confiabilidad son esenciales para garantizar que los instrumentos de evaluación reflejan las competencias reales de los aspirantes."
	},
	{
		id: 80,
		question: "Los tres miembros de la Comisión Nacional del Servicio Civil, serán de dedicación exclusiva, no reelegibles y por un periodo de:",
		correct_answer: "Cuatro años",
		incorrect_answers: [
			"Tres años",
			"Seis años",
			"Dos años"
		],
		description: "¡¡Correcto!! El período de cuatro años está establecido en la Ley 909 de 2004 para los miembros de la CNSC."
	},


	{
		id: 81,
		question: "Los servidores públicos tienen el deber de impulsar oficiosamente los procedimientos y no deben someterlos a retardos injustificados, aquí se enuncia el principio de la función pública denominado:",
		correct_answer: "Celeridad",
		incorrect_answers: [
			"Eficacia",
			"Economía",
			"Igualdad"
		],
		description: "¡¡Correcto!! El principio de celeridad establece que los procedimientos administrativos deben realizarse sin retrasos innecesarios."
	},
	{
		id: 82,
		question: "Dice la ley 909 de 2.004 en su Art. 37 literal A: “La permanencia en los cargos de carrera administrativa exige la calificación satisfactoria en el desempeño del empleo, el logro de resultados y realizaciones el desarrollo y ejercicio de la función pública”, aquí se consagra el principio de:",
		correct_answer: "Mérito",
		incorrect_answers: [
			"La publicidad",
			"La moralidad",
			"La economía"
		],
		description: "¡¡Correcto!! El principio de mérito es la base para la permanencia en la carrera administrativa, basado en el rendimiento del empleado."
	},
	{
		id: 83,
		question: "La _____________________ es un órgano de carácter legal, permanente de nivel nacional, independiente de las ramas y órganos del poder público, dotada de personería jurídica, autonomía administrativa y patrimonio propio y responsable de la administración de las carreras.",
		correct_answer: "Comisión Nacional del Servicio Civil",
		incorrect_answers: [
			"Defensoría del pueblo",
			"Personería",
			"Comisión Nacional de Evaluación y Acreditación"
		],
		description: "¡¡Correcto!! La Comisión Nacional del Servicio Civil es el organismo encargado de la administración de las carreras en la función pública."
	},
	{
		id: 84,
		question: "Quienes ejercen los cargos de mayor jerarquía en las entidades de las tres ramas u órganos del poder público, en los niveles nacional, departamental, regional, provincial, distrital y municipal, deben:",
		correct_answer: "Ser mínimo el 30% de mujeres",
		incorrect_answers: [
			"Ser mínimo el 25% de mujeres",
			"Ser mínimo el 20% de mujeres",
			"Ser mínimo el 10% de mujeres"
		],
		description: "¡¡Correcto!! La ley busca promover la igualdad de género en los altos cargos públicos en todas las entidades del estado."
	},
	{
		id: 85,
		question: "En virtud del principio de _________________ los servidores públicos tendrán en cuenta que los procedimientos deben lograr su finalidad, removiendo de oficio los obstáculos puramente formales, así está consagrado en el código contencioso administrativo, Art.3º:",
		correct_answer: "Eficacia",
		incorrect_answers: [
			"Imparcialidad",
			"Igualdad",
			"Moralidad"
		],
		description: "¡¡Correcto!! El principio de eficacia garantiza que los actos administrativos sean efectivos y logren su propósito."
	}

]


export const codigo_general_proceso_en_colombia = [

	{
		id: 1,
		question: "Toda persona o grupo de personas tiene derecho a la tutela jurisdiccional efectiva para el ejercicio de sus derechos y la defensa de sus intereses, con sujeción a:",
		correct_answer: "Un debido proceso de duración razonable.",
		incorrect_answers: [
			"Las normas procesales razonables.",
			"El respectivo acompañamiento del estado.",
			"Los entes de control establecidos.",
			"Los recursos establecidos."
		],
		description: " ¡¡Correcto!! Según el artículo 229 de la Constitución Política de Colombia y el artículo 1 del Código General del Proceso (Ley 1564 de 2012), toda persona tiene derecho a una tutela jurisdiccional efectiva que garantice un debido proceso, el cual debe ser ágil, efectivo y con duración razonable."
	},
	{
		id: 2,
		question: "Los procesos relativos a propiedad intelectual previstos en leyes especiales como de única instancia, son competencia de:",
		correct_answer: "Los jueces civiles del circuito en única instancia.",
		incorrect_answers: [
			"Los jueces civiles municipales en primera instancia.",
			"Los jueces civiles municipales en única instancia.",
			"Los jueces de familia en única instancia.",
			"Los jueces de familia en primera instancia."
		],
		description: " ¡¡Correcto!! Conforme al artículo 11 del Código General del Proceso, los procesos que por ley especial se tramitan en única instancia corresponden a la competencia de los jueces civiles del circuito, quienes conocen directamente sin apelación."
	},
	{
		id: 3,
		question: "Las providencias que profieran las autoridades administrativas en ejercicio de funciones jurisdiccionales:",
		correct_answer: "No son impugnables ante la jurisdicción contencioso administrativa.",
		incorrect_answers: [
			"Son impugnables ante la jurisdicción contencioso administrativa.",
			"Tienen incidencia ante la jurisdicción civil.",
			"No tienen incidencia ante la jurisdicción civil.",
			"Tienen recursos de reconsideración ante lo contencioso."
		],
		description: " ¡¡Correcto!! De acuerdo con el artículo 150 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo, cuando las autoridades administrativas actúan en funciones jurisdiccionales, sus providencias no son impugnables ante la jurisdicción contencioso administrativa sino que deben respetar los procedimientos judiciales respectivos."
	},
	{
		id: 4,
		question: "No es competencia de la sala de casación civil de la Corte Suprema de Justicia:",
		correct_answer: "Del recurso de anulación contra laudos arbítrales que no estén atribuidos a la jurisdicción de lo contencioso administrativo.",
		incorrect_answers: [
			"De los recursos de casación.",
			"De los recursos de revisión que no estén atribuidos a los tribunales superiores.",
			"Del recurso de queja cuando se niegue el de casación.",
			"Del recurso de revisión contra laudos arbitrales que no estén atribuidos a la jurisdicción de lo contencioso administrativo."
		],
		description: " ¡¡Correcto!! Según el artículo 378 del Código General del Proceso, la sala de casación civil conoce de recursos de casación, revisión y queja, pero no tiene competencia para conocer recursos de anulación contra laudos arbitrales que no estén dentro de la jurisdicción contencioso administrativa."
	},
	{
		id: 5,
		question: "Corresponde a los jueces de familia conocer en segunda instancia de los procesos de sucesión de menor cuantía atribuidos en primera al juez municipal, de los demás asuntos de familia que tramite en primera instancia el juez municipal:",
		correct_answer: "Del recurso de queja de todos ellos.",
		incorrect_answers: [
			"De los procesos atribuidos en primera a los jueces municipales.",
			"Del recurso de revisión contra las sentencias judiciales.",
			"De las peticiones de cambio de radicación.",
			"Del recurso de anulación contra laudos."
		],
		description: "¡¡Correcto!! De acuerdo con el artículo 89 del Código General del Proceso, los jueces de familia conocen de los recursos de queja en segunda instancia frente a los procesos que se tramitan en primera instancia ante los jueces municipales."
	},
	{
		id: 6,
		question: "Corresponde a las salas de decisión dictar las sentencias y los autos que decidan la apelación contra el que rechace el incidente de liquidación de perjuicios de condena impuesta en abstracto o el que rechace la oposición a la diligencia de ella o resuelva sobre ella. El magistrado sustanciador dictará los demás autos que no correspondan a la sala de decisión. Los autos que resuelvan apelaciones dictados por la sala o por el magistrado sustanciador:",
		correct_answer: "No admiten recurso.",
		incorrect_answers: [
			"Admiten sustanciación.",
			"Admiten recurso.",
			"Admiten reposición.",
			"No admiten reposición."
		],
		description: "¡¡Correcto!! Conforme al artículo 361 del Código General del Proceso, los autos dictados por la sala o magistrado sustanciador en estas materias son definitivos y no admiten recurso, garantizando la celeridad y seguridad jurídica."
	},
	{
		id: 7,
		question: "Sancionar con arresto inconmutable hasta por 5 días a quienes le falten al debido respeto en el ejercicio de sus funciones o por razón de ellas. Lo anterior hace referencia a:",
		correct_answer: "Poder correccional del juez.",
		incorrect_answers: [
			"Poder de ordenamiento del juez.",
			"Poder de instrucción del juez.",
			"Deberes del juez.",
			"Poder dictatorial del juez."
		],
		"description": "¡¡Correcto!! El artículo 212 del Código General del Proceso establece que el juez tiene poder correccional para imponer arrestos de hasta 5 días a quien falte el respeto debido en el ejercicio de sus funciones, garantizando el orden y la autoridad en el proceso."
	},
	{
		id: 8,
		question: "No representa una de las facultades con las cuales el ministerio público intervendrá como sujeto procesal especial.",
		correct_answer: "Emitir fallos.",
		incorrect_answers: [
			"Interponer recursos.",
			"Emitir conceptos.",
			"Solicitar nulidades.",
			"Controvertir pruebas."
		],
		description: "¡¡Correcto!! El Ministerio Público en Colombia interviene en los procesos para proteger intereses públicos y derechos fundamentales, con facultades de interponer recursos, emitir conceptos, solicitar nulidades y controvertir pruebas, pero no tiene facultad para emitir fallos judiciales."
	},
	{
		id: 9,
		question: "Cuando un incapaz haya de comparecer a un proceso en que no deba intervenir el defensor de familia y carezca de representante legal por cualquier causa o tenga conflicto de intereses con este, el juez le designará curador ad litem, a petición del ministerio público, de uno de los parientes o de oficio. En los casos en que intervenga el defensor de familia:",
		correct_answer: "Este actuará en representación del incapaz.",
		incorrect_answers: [
			"El incapaz no deberá comparecer.",
			"El incapaz deberá comparecer por sí mismo.",
			"El defensor de familia le designará curador ad litem.",
			"Tendrá que intervenir un tercero."
		],
		description: "¡¡Correcto!! De acuerdo con el artículo 33 de la Ley 1098 de 2006 (Código de Infancia y Adolescencia) y el artículo 91 del Código General del Proceso, el defensor de familia representa legalmente al incapaz en los procesos en que interviene para garantizar sus derechos."
	},
	{
		id: 10,
		question: "Se podrá demandar o contestar la demanda a nombre de una persona de quien no se tenga poder, siempre que ella se encuentre ausente o impedida para hacerlo; para esto:",
		correct_answer: "Bastará afirmar dicha circunstancia bajo juramento que se entenderá prestado por la presentación de la demanda o la contestación.",
		incorrect_answers: [
			"Debe existir poder escriturado con su respectivo sello de vigencia.",
			"Debe existir poder general con su respectivo sello de vigencia.",
			"Debe existir poder especial con su respectivo sello de vigencia.",
			"Debe existir previa autorización del juez concomitante."
		],
		description: "¡¡Correcto!! El artículo 76 del Código General del Proceso establece que cuando una persona está ausente o impedida, bastará la afirmación bajo juramento en la demanda o contestación para actuar en su nombre, siempre que se cumplan los requisitos legales para la representación judicial."
	},

	{
		"id": 11,
		"question": "Salvo disposición en contrario, los litisconsortes facultativos serán considerados en sus relaciones con la contraparte:",
		"correct_answer": "Como litigantes separados.",
		"incorrect_answers": [
			"Como litigantes unificados.",
			"Única defensa.",
			"Defensa de respaldo.",
			"Litigantes providentes."
		],
		"description": "¡¡Correcto!! Los litisconsortes facultativos actúan como litigantes separados salvo disposición contraria."
	},
	{
		"id": 12,
		"question": "Quien tenga con una de las partes determinada relación sustancial a la cual no se extiendan los efectos jurídicos de la sentencia, pero que pueda afectarse si dicha parte es vencida, podrá intervenir en el proceso como coadyuvante de ella, mientras:",
		"correct_answer": "No se haya dictado sentencia de única o de segunda instancia.",
		"incorrect_answers": [
			"Se haya dictado sentencia de única o de segunda instancia.",
			"Se demuestre lo contrario.",
			"Se cuente con autorización previa del ministerio público.",
			"Se presenten todos los requisitos de representación."
		],
		"description": "¡¡Correcto!! El coadyuvante puede intervenir antes de que se dicte sentencia de única o de segunda instancia."
	},
	{
		"id": 13,
		"question": "Los poderes generales para toda clase de procesos solo podrán conferirse por:",
		"correct_answer": "Escritura publica.",
		"incorrect_answers": [
			"Mandato verbal.",
			"Poder especial.",
			"Apostille.",
			"Declaratoria o sentencia."
		],
		"description": "¡¡Correcto!! Los poderes generales deben ser conferidos mediante escritura pública para ser válidos."
	},
	{
		"id": 14,
		"question": "Los poderes podrán ser aceptados expresamente o:",
		"correct_answer": "Por su ejercicio.",
		"incorrect_answers": [
			"A petición de parte.",
			"Por mandato publico.",
			"Por decisión judicial.",
			"Por intuición."
		],
		"description": "¡¡Correcto!! El poder puede aceptarse tácitamente por el ejercicio del mismo."
	},
	{
		"id": 15,
		"question": "Se puede determinar que el poder especial para un proceso:",
		"correct_answer": "Prevalece sobre el general conferido por la misma parte.",
		"incorrect_answers": [
			"Solo puede ser otorgado por el ministerio público.",
			"No tiene incidencia en representaciones masivas.",
			"Solo tiene incidencia para procesos de menor cuantía.",
			"No tiene aplicación para defensa ante lo contencioso."
		],
		"description": "¡¡Correcto!! El poder especial tiene prevalencia sobre el poder general otorgado por la misma parte."
	},
	{
		"id": 16,
		"question": "El poder conferido por escritura publica puede sustituirse para un negocio determinado, por medio de:",
		"correct_answer": "Poder especial.",
		"incorrect_answers": [
			"Acta.",
			"Poder general.",
			"Mandato.",
			"Memorial."
		],
		"description": "¡¡Correcto!! Un poder especial puede sustituir el poder conferido por escritura pública para un negocio determinado."
	},
	{
		"id": 17,
		"question": "La muerte del mandante o la extinción de las personas jurídicas no ponen fin al mandato judicial si ya se ha presentado la demanda, pero el poder podrá ser revocado por:",
		"correct_answer": "Los herederos o sucesores.",
		"incorrect_answers": [
			"El ministerio Publio.",
			"El juez de turno.",
			"Mandato especial.",
			"Anuncio."
		],
		"description": "¡¡Correcto!! Los herederos o sucesores pueden revocar el poder aún después de la muerte del mandante si ya hay demanda presentada."
	},
	{
		"id": 18,
		"question": "Cuando en un proceso se aduzcan calidades inexistentes se presume que:",
		"correct_answer": "Ha existido temeridad o mala fe.",
		"incorrect_answers": [
			"Existe proceso de nulidad.",
			"Hay nulidad en las pruebas presentadas.",
			"Existen falta de garantías.",
			"Hay revocación del fallo."
		],
		"description": "¡¡Correcto!! Aducir calidades inexistentes se presume como temeridad o mala fe en el proceso."
	},
	{
		"id": 19,
		"question": "Agotada cada etapa del proceso el juez deberá realizar control de legalidad para corregir o sanear los vicios que configuren nulidades u otras irregularidades del proceso, las cuales, salvo que trate de hechos nuevos, no se podrán alegar en las etapas siguientes, sin perjuicio de lo previsto para los recursos de:",
		"correct_answer": "Revisión y casación.",
		"incorrect_answers": [
			"Presunción y consideración.",
			"Reposición y consideración.",
			"Revisión y consideración.",
			"Consideración y casación."
		],
		"description": "¡¡Correcto!! Las nulidades no alegadas oportunamente no podrán alegarse en etapas posteriores, salvo en recursos de revisión y casación."
	},
	{
		"id": 20,
		"question": "No podrá anular la nulidad procesal quien haya dado lugar al hecho que la origina, ni quien omitió alegarla como excepción previa si tuvo oportunidad para hacerlo, ni:",
		"correct_answer": "Quien después de ocurrida la causal haya actuado en el proceso sin proponerla.",
		"incorrect_answers": [
			"Quien aduce conocer los pormenores del proceso.",
			"Quien quiera actuar por cuenta propia en la recopilación de pruebas.",
			"Quien antes de ocurrida la causal actúe en el proceso proponiéndola.",
			"El que por mandato judicial ostente hacerlo."
		],
		"description": "¡¡Correcto!! No puede anular la nulidad procesal quien actuó en el proceso sin alegarla oportunamente."
	}
	,

	{
		"id": 21,
		"question": "Las nulidades por proceder contra providencia ejecutoriada del superior, revivir un proceso legalmente concluido o pretermitir íntegramente la respectiva instancia son:",
		"correct_answer": "Insaneables.",
		"incorrect_answers": [
			"Sustituibles.",
			"Recíprocos.",
			"Anulables.",
			"Irrefutables."
		],
		"description": "¡¡Correcto!! Estas nulidades no pueden ser subsanadas o saneadas y son consideradas insaneables."
	},
	{
		"id": 22,
		"question": "Siempre que el juez declare su incompetencia para conocer de un proceso, ordenara remitirlo al que estime competente. Cuando el juez que reciba el expediente se declare a su vez incompetente solicitara que el conflicto se decida por el funcionario judicial que sea superior funcional común a ambos al que enviara la actuación. Estas decisiones:",
		"correct_answer": "No admiten recurso.",
		"incorrect_answers": [
			"Admiten recurso.",
			"Admiten reposición.",
			"No admiten reposición.",
			"Son irrevocables."
		],
		"description": "¡¡Correcto!! Estas decisiones son definitivas y no pueden ser impugnadas mediante recurso."
	},
	{
		"id": 23,
		"question": "El juez no podrá declarar su incompetencia cuando la competencia haya sido prorrogada por el silencio de las partes, salvo:",
		"correct_answer": "Por acciones complementarias al proceso que puedan afectar la sentencia definitiva.",
		"incorrect_answers": [
			"Por mandato del ministerio público.",
			"Por contrariedades adversas al proceso.",
			"Por situaciones del entorno técnico laboral.",
			"Por los factores subjetivo y funcional."
		],
		"description": "¡¡Correcto!! Existen excepciones donde el juez sí podrá declarar incompetencia, como en acciones complementarias que puedan afectar la sentencia definitiva."
	},
	{
		"id": 24,
		"question": "Se concederá el amparo de pobreza a la persona que no se halle en capacidad de atender los gastos del proceso, sin menoscabo de lo necesario para su propia subsistencia y la de las personas a quienes por ley debe alimentos, salvo cuando:",
		"correct_answer": "Pretenda hacer valer un derecho litigioso a titulo oneroso.",
		"incorrect_answers": [
			"No tenga conocimiento del proceso.",
			"Se abstenga de hacer declaraciones que puedan afectar el proceso.",
			"Solicite la anulación del proceso.",
			"Pida refrendación de las garantías otorgadas."
		],
		"description": "¡¡Correcto!! El amparo de pobreza no procede si la persona pretende hacer valer un derecho litigioso oneroso."
	},
	{
		"id": 25,
		"question": "Toda decisión judicial debe fundarse en las pruebas regular y oportunamente allegadas al proceso. Las pruebas obtenidas con violación del debido proceso:",
		"correct_answer": "Son nulas de pleno derecho.",
		"incorrect_answers": [
			"Son válidas dentro del proceso de oportunidad.",
			"Deberán contar con aprobación del ministerio público.",
			"Contarán con el principio de primicia.",
			"Gozarán de los mismos derechos procesales."
		],
		"description": "¡¡Correcto!! Las pruebas obtenidas violando el debido proceso carecen de validez jurídica."
	},
	{
		"id": 26,
		"question": "La declaración de parte, la confesión, el juramento, el testimonio de terceros, el dictamen pericial; podemos afirmar que son:",
		"correct_answer": "Medios de prueba.",
		"incorrect_answers": [
			"Testimonios probatorios.",
			"Material probatorio.",
			"Acuses.",
			"Declaraciones de parte."
		],
		"description": "¡¡Correcto!! Estos elementos constituyen medios de prueba en el proceso judicial."
	},
	{
		"id": 27,
		"question": "En los procesos las providencias que decreten pruebas de oficio:",
		"correct_answer": "No admiten recurso.",
		"incorrect_answers": [
			"Debes hacerse de parte.",
			"No serán admitidas.",
			"Admiten recurso.",
			"Serán admitidas únicamente de oficio."
		],
		"description": "¡¡Correcto!! Las providencias de pruebas decretadas de oficio no pueden ser impugnadas mediante recurso."
	},
	{
		"id": 28,
		"question": "El juez deberá decretar pruebas de oficio, en las oportunidades probatorias del proceso y de los incidentes y antes de fallar, cuando sean necesarias para establecer los hechos objeto de la controversia. Las pruebas decretadas de oficio estarán sujetas a:",
		"correct_answer": "La contradicción de las partes.",
		"incorrect_answers": [
			"Interdicción.",
			"Recurso de apelación.",
			"Recurso de reposición.",
			"No contradicción de las partes."
		],
		"description": "¡¡Correcto!! Las pruebas decretadas de oficio deben someterse a la contradicción o impugnación por las partes."
	},
	{
		"id": 29,
		"question": "El auto que decrete el interrogatorio de parte extraprocesal se notificara a esta personalmente; el de interrogatorio en el curso del proceso se notificara:",
		"correct_answer": "En estrados o por estado según el caso.",
		"incorrect_answers": [
			"Personalmente.",
			"Por edicto.",
			"Por presentación personal.",
			"Por mandato judicial."
		],
		"description": "¡¡Correcto!! La notificación en el proceso puede realizarse en estrados o mediante el estado, conforme a la regulación."
	},
	{
		"id": 30,
		"question": "La prueba pericial es procedente para verificar hechos que interesen al proceso y requieran especiales conocimientos científicos, técnicos o artísticos. Sobre un mismo hecho o materia, cada sujeto procesal:",
		"correct_answer": "Podrá presentar varios dictámenes periciales.",
		"incorrect_answers": [
			"Aplicará las pruebas o hallazgos pertinentes para aclarar el proceso.",
			"Aplicará prueba por medio de interdicto.",
			"Solo podrá presentar un dictamen pericial.",
			"Aplicará diversas pruebas sustanciales e interdictas."
		],
		"description": "¡¡Correcto!! Cada parte puede aportar múltiples dictámenes periciales para sustentar su posición."
	}
	,

	{
		"id": 31,
		"question": "Cuando la parte no comparece al proceso, y se la tiene por no haber sido emplazada, el juez:",
		"correct_answer": "Declarará su ausencia y continuará el proceso.",
		"incorrect_answers": [
			"Suspenderá el proceso.",
			"Archivará el expediente.",
			"Ordenará nueva notificación.",
			"Declarará nulidad."
		],
		"description": "¡¡Correcto!! El juez puede continuar el proceso declarando la ausencia de la parte."
	},
	{
		"id": 32,
		"question": "El recurso de apelación procede contra:",
		"correct_answer": "Las sentencias y autos que decidan sobre el fondo del asunto.",
		"incorrect_answers": [
			"Los autos que no deciden sobre el fondo.",
			"Las providencias de mero trámite.",
			"Las decisiones interlocutorias sin efecto directo.",
			"Las actuaciones administrativas."
		],
		"description": "¡¡Correcto!! La apelación se interpone contra decisiones que resuelven el fondo del asunto."
	},
	{
		"id": 33,
		"question": "El escrito con que se inicia el proceso debe contener:",
		"correct_answer": "Los hechos y fundamentos jurídicos que la parte invoque.",
		"incorrect_answers": [
			"Sólo los hechos.",
			"Sólo las pruebas.",
			"La sentencia solicitada.",
			"El nombre del juez."
		],
		"description": "¡¡Correcto!! El escrito inicial debe contener hechos y fundamentos jurídicos."
	},
	{
		"id": 34,
		"question": "La notificación personal se entiende cumplida:",
		"correct_answer": "Cuando el destinatario recibe personalmente el acto procesal.",
		"incorrect_answers": [
			"Cuando se entrega al secretario judicial.",
			"Cuando se publica en estrados.",
			"Cuando se deja en la dirección del destinatario.",
			"Cuando se hace por edicto."
		],
		"description": "¡¡Correcto!! La notificación personal implica entrega directa al destinatario."
	},
	{
		"id": 35,
		"question": "El juez puede declarar la nulidad del proceso cuando:",
		"correct_answer": "Se violen las normas esenciales del procedimiento que afecten el derecho de defensa.",
		"incorrect_answers": [
			"Existan errores materiales en el expediente.",
			"La demanda sea improcedente.",
			"Se presenten retrasos en el trámite.",
			"No se adjunten documentos."
		],
		"description": "¡¡Correcto!! La nulidad procede cuando se vulneran garantías procesales esenciales."
	},
	{
		"id": 36,
		"question": "El auto que decide sobre la admisión de una demanda puede ser objeto de:",
		"correct_answer": "Recurso de apelación.",
		"incorrect_answers": [
			"Recurso de reposición.",
			"Recurso de queja.",
			"Recurso de revisión.",
			"No cabe recurso."
		],
		"description": "¡¡Correcto!! La admisión de la demanda puede ser apelada."
	},
	{
		"id": 37,
		"question": "Los autos que resuelven incidentes dentro del proceso:",
		"correct_answer": "No admiten recurso.",
		"incorrect_answers": [
			"Admiten recurso de apelación.",
			"Admiten recurso de reposición.",
			"Admiten recurso de queja.",
			"Admiten recurso extraordinario."
		],
		"description": "¡¡Correcto!! Generalmente los autos sobre incidentes son definitivos y no apelables."
	},
	{
		"id": 38,
		"question": "El recurso de casación se interpone para:",
		"correct_answer": "Revisar la correcta aplicación del derecho en sentencias definitivas.",
		"incorrect_answers": [
			"Revisar hechos probados.",
			"Impugnar pruebas admitidas.",
			"Solicitar nuevas pruebas.",
			"Suspender el proceso."
		],
		"description": "¡¡Correcto!! La casación revisa exclusivamente la interpretación y aplicación del derecho."
	},
	{
		"id": 39,
		"question": "El juez podrá ordenar pruebas de oficio:",
		"correct_answer": "Cuando sean necesarias para esclarecer los hechos de la controversia.",
		"incorrect_answers": [
			"Sólo si lo solicita una parte.",
			"Cuando haya indicios de falsedad.",
			"Cuando la prueba sea de parte contraria.",
			"Cuando lo autorice el tribunal."
		],
		"description": "¡¡Correcto!! El juez tiene la facultad de ordenar pruebas para esclarecer los hechos."
	},
	{
		"id": 40,
		"question": "La prueba pericial debe ser practicada por:",
		"correct_answer": "Un experto en la materia objeto de la pericia.",
		"incorrect_answers": [
			"Cualquier testigo capacitado.",
			"Un abogado del proceso.",
			"Un funcionario judicial.",
			"Una persona designada por la parte demandada."
		],
		"description": "¡¡Correcto!! La prueba pericial requiere conocimiento especializado para ser válida."
	}

]

export const estructura_del_estado = [

	{
		"id": 1,
		"question": "Un nuevo empleado en una entidad gubernamental necesita entender la estructura básica del Estado colombiano. ¿Cuáles son las ramas del poder público en Colombia?",
		"correct_answer": "Ejecutiva, Legislativa y Judicial",
		"incorrect_answers": [
			"Ejecutiva, Legislativa y Consultiva",
			"Administrativa, Ejecutiva y Legislativa"
		],
		"description": "¡¡Correcto!! Es correcta porque la Constitución de Colombia establece tres ramas del poder público: Ejecutiva, Legislativa y Judicial."
	},
	{
		"id": 2,
		"question": "Un empleado de una entidad pública debe colaborar con organismos de control. ¿Cuál de los siguientes es un organismo de control en Colombia?",
		"correct_answer": "Contraloría General de la República",
		"incorrect_answers": [
			"Ministerio de Educación",
			"Congreso de la República"
		],
		"description": "¡¡Correcto!! Es correcta porque la Contraloría General de la República es uno de los principales organismos de control en Colombia."
	}
	,
	{
		"id": 3,
		"question": "Un funcionario público necesita entender las funciones del Congreso para colaborar en la elaboración de una ley. ¿Cuál es una de las funciones principales del Congreso de la República?",
		"correct_answer": "Legislar",
		"incorrect_answers": [
			"Interpretar las leyes",
			"Ejecutar las leyes"
		],
		"description": "¡¡Correcto!! Una de las funciones principales del Congreso de la República es legislar, es decir, crear o modificar leyes."
	},
	{
		"id": 4,
		"question": "Un empleado del gobierno local necesita entender el ordenamiento territorial en Colombia para un nuevo proyecto. ¿Cuál es la división territorial básica de Colombia?",
		"correct_answer": "Departamentos y municipios",
		"incorrect_answers": [
			"Estados y ciudades",
			"Provincias y comunas"
		],
		"description": "¡¡Correcto!! Colombia se divide territorialmente en departamentos y municipios."
	},
	{
		"id": 5,
		"question": "Un funcionario público está asignado para colaborar en un proceso electoral. ¿Qué entidad es responsable de organizar las elecciones en Colombia?",
		"correct_answer": "Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"Consejo Nacional Electoral",
			"Ministerio del Interior"
		],
		"description": "¡¡Correcto!! La Registraduría Nacional del Estado Civil es la entidad encargada de organizar las elecciones en Colombia."
	},
	{
		"id": 6,
		"question": "¿Qué limitaciones enfrentan los departamentos en Colombia respecto a su autonomía territorial?",
		"correct_answer": "Los departamentos tienen autonomía pero están sujetos a la Constitución y las leyes nacionales.",
		"incorrect_answers": [
			"Los departamentos pueden crear sus propias leyes sin restricciones.",
			"Los departamentos no tienen ninguna forma de autonomía y son completamente dependientes del Gobierno Nacional."
		],
		"description": "¡¡Correcto!! Aunque los departamentos tienen autonomía para gestionar sus asuntos, están sujetos a la Constitución y leyes nacionales."
	},
	{
		"id": 7,
		"question": "¿Cuál es una de las funciones principales del Consejo de Estado?",
		"correct_answer": "Actuar como tribunal de última instancia en asuntos administrativos.",
		"incorrect_answers": [
			"Supervisar la conducta de los miembros del Congreso.",
			"Ejecutar las políticas públicas del Gobierno Nacional."
		],
		"description": "¡¡Correcto!! El Consejo de Estado actúa como el tribunal de última instancia en asuntos administrativos."
	},
	{
		"id": 8,
		"question": "¿Qué instituciones conforman la Fuerza Pública en Colombia?",
		"correct_answer": "Policía Nacional y Fuerzas Militares",
		"incorrect_answers": [
			"Policía Nacional y Fiscalía General",
			"Fuerzas Militares y Fiscalía General"
		],
		"description": "¡¡Correcto!! La Fuerza Pública en Colombia está compuesta por las Fuerzas Militares y la Policía Nacional."
	},
	{
		"id": 9,
		"question": "¿Cuál es una de las funciones del Procurador General de la Nación?",
		"correct_answer": "Investigar y sancionar faltas disciplinarias de los servidores públicos.",
		"incorrect_answers": [
			"Ejercer control fiscal sobre las entidades y organismos del Estado.",
			"Representar judicialmente al Estado."
		],
		"description": "¡¡Correcto!! El Procurador General investiga y sanciona las faltas disciplinarias cometidas por los servidores públicos."
	},
	{
		"id": 10,
		"question": "¿Qué reconocimiento constitucional tienen las entidades territoriales indígenas en Colombia?",
		"correct_answer": "Son reconocidas como entidades territoriales con autonomía administrativa y financiera.",
		"incorrect_answers": [
			"No tienen ningún reconocimiento constitucional.",
			"Son consideradas como parte de los departamentos en los que se encuentran."
		],
		"description": "¡¡Correcto!! La Constitución reconoce a las entidades territoriales indígenas con autonomía administrativa y financiera."
	},
	{
		"id": 11,
		"question": "¿Cuál de las siguientes afirmaciones mejor describe el principio de subsidiariedad en el contexto del Estado colombiano?",
		"correct_answer": "El Estado debe intervenir solo cuando las entidades menores o individuos no puedan gestionar eficazmente un asunto, y siempre en una manera que les permita asumir dichas funciones en el futuro.",
		"incorrect_answers": [
			"El Estado debe intervenir en todos los asuntos sociales y económicos para garantizar la equidad.",
			"El Estado debe abstenerse de intervenir en asuntos que puedan ser gestionados de manera efectiva por entidades más pequeñas o individuos."
		],
		"description": "¡¡Correcto!! El principio de subsidiariedad implica intervención estatal solo cuando las entidades menores no puedan gestionar el asunto, promoviendo su autonomía futura."
	},
	{
		"id": 12,
		"question": "¿Cuál de las siguientes afirmaciones refleja mejor el principio de concurrencia en el marco del Estado colombiano?",
		"correct_answer": "Diversas entidades gubernamentales pueden compartir responsabilidades y recursos para llevar a cabo funciones o proyectos específicos.",
		"incorrect_answers": [
			"Una única entidad gubernamental debe asumir la responsabilidad total de un proyecto para garantizar su éxito.",
			"Las entidades gubernamentales deben operar de forma completamente independiente para mantener su autonomía."
		],
		"description": "¡¡Correcto!! El principio de concurrencia promueve la colaboración entre entidades gubernamentales para funciones o proyectos comunes."
	},
	{
		"id": 13,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor el principio de complementariedad en el contexto del Estado colombiano?",
		"correct_answer": "Las entidades gubernamentales y las organizaciones de la sociedad civil pueden trabajar juntas para alcanzar objetivos comunes, complementando sus respectivas capacidades y recursos.",
		"incorrect_answers": [
			"Las organizaciones de la sociedad civil deben operar de forma independiente sin interferencia o apoyo del gobierno.",
			"Las entidades gubernamentales deben asumir todas las responsabilidades y funciones, excluyendo la participación de la sociedad civil."
		],
		"description": "¡¡Correcto!! El principio de complementariedad permite que el Estado y la sociedad civil colaboren, uniendo fortalezas para alcanzar objetivos comunes."
	}
	,

	{
		"id": 14,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor las características de una Unidad Administrativa Especial en Colombia?",
		"correct_answer": "Son entidades con autonomía administrativa y financiera, pero sin personería jurídica, creadas para desarrollar funciones administrativas especializadas.",
		"incorrect_answers": [
			"Son entidades que dependen directamente del Presidente de la República y no tienen autonomía administrativa ni financiera.",
			"Son entidades con personería jurídica, autonomía administrativa y financiera, y patrimonio independiente, creadas para gestionar servicios públicos específicos."
		],
		"description": "¡¡Correcto!! Las Unidades Administrativas Especiales son organismos creados por la ley, con autonomía administrativa y financiera, pero sin personería jurídica, destinadas a desarrollar funciones administrativas especializadas."
	},
	{
		"id": 15,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor las características de una Sociedad de Economía Mixta en Colombia?",
		"correct_answer": "Son entidades donde tanto el sector público como el sector privado tienen participación en el capital, y están sujetas a las normas del derecho privado.",
		"incorrect_answers": [
			"Son entidades completamente controladas por el Estado y operan exclusivamente bajo las normas del derecho público.",
			"Son entidades donde el Estado tiene una participación minoritaria y no tiene control sobre la gestión de la empresa."
		],
		"description": "¡¡Correcto!! Las Sociedades de Economía Mixta son sociedades comerciales constituidas con aportes estatales y de capital privado, sujetas a las reglas del derecho privado, salvo disposición legal en contrario."
	},
	{
		"id": 16,
		"question": "Tras un fuerte terremoto en una región del país, ¿cuál de las siguientes acciones correspondería principalmente a la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD)?",
		"correct_answer": "La UNGRD coordinará las acciones de las entidades del Sistema Nacional de Gestión del Riesgo de Desastres para la respuesta y recuperación.",
		"incorrect_answers": [
			"La UNGRD se encargará exclusivamente de la reconstrucción de infraestructuras críticas como hospitales y escuelas.",
			"La UNGRD delegará todas las responsabilidades de respuesta y recuperación a las entidades territoriales afectadas."
		],
		"description": "¡¡Correcto!! La principal función de la UNGRD es coordinar las acciones de las diferentes entidades que conforman el Sistema Nacional de Gestión del Riesgo de Desastres para la respuesta y recuperación en casos de desastres naturales."
	},
	{
		"id": 17,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor la posición del Banco de la República dentro de la estructura del Estado colombiano?",
		"correct_answer": "El Banco de la República es una entidad independiente que forma parte del Estado, con autonomía administrativa, patrimonial y técnica, encargada de la política monetaria.",
		"incorrect_answers": [
			"El Banco de la República es una entidad adscrita al Ministerio de Hacienda y es responsable de ejecutar la política fiscal del país.",
			"El Banco de la República es una entidad del orden territorial que depende directamente de la Presidencia de la República para sus decisiones de política monetaria."
		],
		"description": "¡¡Correcto!! El Banco de la República es una entidad que, aunque forma parte del Estado, goza de autonomía administrativa, patrimonial y técnica. Su principal función es la de ser el banco central de Colombia, encargado de la política monetaria del país."
	},

	{
		"id": 18,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor las funciones de la Registraduría Nacional del Estado Civil en Colombia?",
		"correct_answer": "Organizar y dirigir los procesos electorales, así como administrar el registro civil y la identificación de los ciudadanos.",
		"incorrect_answers": [
			"Supervisar las actividades del Congreso de la República.",
			"Ejecutar políticas fiscales y monetarias del país."
		],
		"description": "¡¡Correcto!! La Registraduría Nacional del Estado Civil es responsable de organizar y dirigir los procesos electorales, así como de administrar el registro civil y la identificación de los ciudadanos en Colombia."
	},
	{
		"id": 19,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor las funciones del Consejo Nacional Electoral (CNE) en Colombia?",
		"correct_answer": "Regular, inspeccionar, vigilar y controlar toda la actividad electoral de las organizaciones políticas y sus miembros.",
		"incorrect_answers": [
			"Administrar el registro civil y la identificación de los ciudadanos.",
			"Formular políticas públicas en materia de derechos humanos."
		],
		"description": "¡¡Correcto!! El Consejo Nacional Electoral (CNE) es responsable de regular, inspeccionar, vigilar y controlar toda la actividad electoral de las organizaciones políticas y sus miembros en Colombia."
	},
	{
		"id": 20,
		"question": "¿Cuál de las siguientes afirmaciones describe mejor las funciones del Ministerio del Interior en Colombia?",
		"correct_answer": "Formular, coordinar y ejecutar políticas públicas en materia de derechos humanos, orden público y participación ciudadana.",
		"incorrect_answers": [
			"Administrar el sistema judicial del país.",
			"Regular las actividades económicas y financieras del Estado."
		],
		"description": "¡¡Correcto!! El Ministerio del Interior de Colombia tiene la función de formular, coordinar y ejecutar políticas públicas en áreas como derechos humanos, orden público y participación ciudadana."
	}
	,

	{
		"id": 21,
		"question": "¿Cuál es una función principal del Ministerio de Hacienda y Crédito Público en Colombia?",
		"correct_answer": "Formular y coordinar la política fiscal, tributaria y presupuestal del país.",
		"incorrect_answers": [
			"Supervisar las elecciones nacionales.",
			"Gestionar la política exterior y las relaciones diplomáticas."
		],
		"description": "¡¡Correcto!! El Ministerio de Hacienda y Crédito Público es responsable de formular y coordinar la política fiscal, tributaria y presupuestal del país."
	},
	{
		"id": 22,
		"question": "¿Qué función cumple el Departamento Nacional de Planeación (DNP)?",
		"correct_answer": "Diseñar, orientar y evaluar las políticas públicas para el desarrollo económico y social del país.",
		"incorrect_answers": [
			"Organizar las elecciones presidenciales.",
			"Administrar justicia en materia penal."
		],
		"description": "¡¡Correcto!! El Departamento Nacional de Planeación diseña, orienta y evalúa las políticas públicas para el desarrollo económico y social del país."
	},
	{
		"id": 23,
		"question": "¿Cuál es el papel principal de la Corte Constitucional en Colombia?",
		"correct_answer": "Velar por la integridad y supremacía de la Constitución.",
		"incorrect_answers": [
			"Aprobar el presupuesto general de la nación.",
			"Ejecutar las políticas públicas del Gobierno Nacional."
		],
		"description": "¡¡Correcto!! La Corte Constitucional se encarga de velar por la integridad y supremacía de la Constitución en Colombia."
	}
	,

	{
		"id": 24,
		"question": "¿Qué entidad se encarga de dirigir y coordinar la política internacional de Colombia?",
		"correct_answer": "El Ministerio de Relaciones Exteriores.",
		"incorrect_answers": [
			"El Congreso de la República.",
			"La Corte Suprema de Justicia."
		],
		"description": "¡¡Correcto!! El Ministerio de Relaciones Exteriores dirige y coordina la política internacional de Colombia, incluyendo relaciones diplomáticas y tratados internacionales."
	},
	{
		"id": 25,
		"question": "¿Cuál es la función de la Defensoría del Pueblo en Colombia?",
		"correct_answer": "Velar por la promoción, ejercicio y divulgación de los derechos humanos.",
		"incorrect_answers": [
			"Ejercer control fiscal sobre los recursos públicos.",
			"Impartir justicia en casos penales."
		],
		"description": "¡¡Correcto!! La Defensoría del Pueblo protege y promueve los derechos humanos en Colombia, siendo una entidad clave del Ministerio Público."
	},
	{
		"id": 26,
		"question": "¿Cuál es una de las funciones principales del Consejo Nacional Electoral?",
		"correct_answer": "Regular, inspeccionar y vigilar toda la actividad electoral.",
		"incorrect_answers": [
			"Formular la política económica del país.",
			"Representar judicialmente al Estado."
		],
		"description": "¡¡Correcto!! El Consejo Nacional Electoral es responsable de la regulación, inspección y vigilancia del proceso electoral en Colombia."
	}
	,

	{
		"id": 27,
		"question": "¿Qué función cumple la Superintendencia de Industria y Comercio en Colombia?",
		"correct_answer": "Vigilar la protección del consumidor y la libre competencia.",
		"incorrect_answers": [
			"Supervisar el sistema financiero del país.",
			"Administrar justicia en casos laborales."
		],
		"description": "¡¡Correcto!! La Superintendencia de Industria y Comercio protege los derechos de los consumidores y garantiza la libre competencia en el mercado colombiano."
	},
	{
		"id": 28,
		"question": "¿Qué entidad en Colombia es responsable de ejercer el control fiscal sobre los recursos del Estado?",
		"correct_answer": "La Contraloría General de la República.",
		"incorrect_answers": [
			"La Procuraduría General de la Nación.",
			"El Ministerio de Hacienda."
		],
		"description": "¡¡Correcto!! La Contraloría General de la República es la entidad encargada de ejercer el control fiscal en Colombia, vigilando el uso adecuado de los recursos públicos."
	},
	{
		"id": 29,
		"question": "¿Qué función tiene la Rama Judicial en Colombia?",
		"correct_answer": "Administrar justicia en nombre de la República.",
		"incorrect_answers": [
			"Dictar políticas públicas nacionales.",
			"Supervisar el gasto público."
		],
		"description": "¡¡Correcto!! La Rama Judicial es una de las tres ramas del poder público y su función principal es administrar justicia, resolviendo los conflictos entre ciudadanos y entre estos y el Estado."
	},
	{
		"id": 30,
		"question": "¿Cuál es el principal órgano de control disciplinario en Colombia?",
		"correct_answer": "La Procuraduría General de la Nación.",
		"incorrect_answers": [
			"La Contraloría General de la República.",
			"El Consejo de Estado."
		],
		"description": "¡¡Correcto!! La Procuraduría General de la Nación se encarga de ejercer el control disciplinario sobre los funcionarios públicos y velar por el cumplimiento de sus deberes."
	}
	,

	{
		"id": 31,
		"question": "¿Cuál es la máxima autoridad administrativa en Colombia?",
		"correct_answer": "El Presidente de la República.",
		"incorrect_answers": [
			"El Congreso de la República.",
			"La Corte Constitucional."
		],
		"description": "¡¡Correcto!! El Presidente de la República es la máxima autoridad administrativa del país y jefe de Estado, jefe de Gobierno y suprema autoridad administrativa."
	},
	{
		"id": 32,
		"question": "¿Cuál es el órgano encargado de reformar la Constitución en Colombia?",
		"correct_answer": "El Congreso de la República mediante acto legislativo.",
		"incorrect_answers": [
			"El Consejo de Estado.",
			"La Corte Suprema de Justicia."
		],
		"description": "¡¡Correcto!! La Constitución colombiana puede ser reformada por el Congreso a través de actos legislativos, conforme a los procedimientos establecidos en la propia Carta Magna."
	},
	{
		"id": 33,
		"question": "¿Cuál es una de las funciones principales del Consejo Nacional Electoral?",
		"correct_answer": "Vigilar el cumplimiento de las normas electorales.",
		"incorrect_answers": [
			"Organizar los comicios.",
			"Emitir sentencias judiciales."
		],
		"description": "¡¡Correcto!! El Consejo Nacional Electoral tiene como una de sus principales funciones la vigilancia y control del cumplimiento de las normas sobre partidos, movimientos y procesos electorales."
	},
	{
		"id": 34,
		"question": "¿Cuál es la función del Ministerio del Interior en Colombia?",
		"correct_answer": "Coordinar las relaciones entre el Gobierno y las entidades territoriales.",
		"incorrect_answers": [
			"Ejecutar la política monetaria.",
			"Dictar sentencias judiciales."
		],
		"description": "¡¡Correcto!! El Ministerio del Interior tiene, entre sus funciones, coordinar las relaciones políticas y administrativas entre el Gobierno Nacional y las entidades territoriales."
	}
	,

	{
		"id": 35,
		"question": "¿Qué entidad en Colombia es responsable de ejercer el control fiscal?",
		"correct_answer": "La Contraloría General de la República.",
		"incorrect_answers": [
			"La Procuraduría General de la Nación.",
			"El Consejo de Estado."
		],
		"description": "¡¡Correcto!! La Contraloría General de la República es la entidad encargada de ejercer el control fiscal del Estado colombiano."
	},
	{
		"id": 36,
		"question": "¿Cuál es una función de la Corte Constitucional de Colombia?",
		"correct_answer": "Velar por la integridad y supremacía de la Constitución.",
		"incorrect_answers": [
			"Investigar delitos comunes.",
			"Emitir políticas públicas."
		],
		"description": "¡¡Correcto!! La Corte Constitucional protege la Constitución y decide sobre la constitucionalidad de las leyes, decretos y actos del Gobierno."
	},
	{
		"id": 37,
		"question": "¿Qué función cumple la Defensoría del Pueblo?",
		"correct_answer": "Promover y defender los derechos humanos.",
		"incorrect_answers": [
			"Ejecutar políticas fiscales.",
			"Reglamentar el comercio exterior."
		],
		"description": "¡¡Correcto!! La Defensoría del Pueblo se encarga de velar por la promoción, ejercicio y divulgación de los derechos humanos en Colombia."
	},
	{
		"id": 38,
		"question": "¿Cuál es una característica de las entidades descentralizadas en Colombia?",
		"correct_answer": "Tienen personería jurídica, autonomía administrativa y patrimonio propio.",
		"incorrect_answers": [
			"No tienen autonomía administrativa.",
			"Dependen exclusivamente del Congreso."
		],
		"description": "¡¡Correcto!! Las entidades descentralizadas, como los establecimientos públicos o empresas industriales y comerciales del Estado, cuentan con autonomía administrativa, personería jurídica y patrimonio independiente."
	},

	{
		"id": 39,
		"question": "¿Cuál es la función principal de la Fiscalía General de la Nación en Colombia?",
		"correct_answer": "Investigar y acusar a los presuntos infractores de la ley penal.",
		"incorrect_answers": [
			"Ejecutar sentencias judiciales.",
			"Emitir leyes para la nación."
		],
		"description": "¡¡Correcto!! La Fiscalía General de la Nación es la entidad encargada de investigar los delitos y llevar a juicio a los responsables, de acuerdo con la ley penal."
	},
	{
		"id": 40,
		"question": "¿Cuál es la principal función de la Procuraduría General de la Nación?",
		"correct_answer": "Vigilar la conducta de los servidores públicos.",
		"incorrect_answers": [
			"Diseñar políticas económicas.",
			"Ejercer control fiscal sobre el presupuesto."
		],
		"description": "¡¡Correcto!! La Procuraduría General de la Nación tiene como función principal vigilar la conducta de los servidores públicos y garantizar el cumplimiento de sus deberes."
	},
	{
		"id": 41,
		"question": "¿Qué rama del poder público en Colombia administra justicia?",
		"correct_answer": "Rama Judicial.",
		"incorrect_answers": [
			"Rama Ejecutiva.",
			"Rama Legislativa."
		],
		"description": "¡¡Correcto!! La Rama Judicial es la encargada de administrar justicia en Colombia, resolviendo los conflictos conforme a la ley."
	},
	{
		"id": 42,
		"question": "¿Qué institución representa al pueblo y elabora las leyes en Colombia?",
		"correct_answer": "El Congreso de la República.",
		"incorrect_answers": [
			"La Corte Suprema de Justicia.",
			"El Consejo de Estado."
		],
		"description": "¡¡Correcto!! El Congreso de la República, compuesto por el Senado y la Cámara de Representantes, representa al pueblo y tiene como una de sus funciones principales elaborar leyes."
	},

	{
		"id": 43,
		"question": "¿Qué entidad en Colombia se encarga de controlar el uso adecuado de los recursos públicos?",
		"correct_answer": "La Contraloría General de la República.",
		"incorrect_answers": [
			"La Procuraduría General de la Nación.",
			"La Registraduría Nacional del Estado Civil."
		],
		"description": "¡¡Correcto!! La Contraloría General de la República es la entidad que ejerce control fiscal, verificando que los recursos públicos sean utilizados correctamente."
	},
	{
		"id": 44,
		"question": "¿Cuál de las siguientes instituciones pertenece a la Rama Ejecutiva del poder público en Colombia?",
		"correct_answer": "La Presidencia de la República.",
		"incorrect_answers": [
			"La Corte Constitucional.",
			"El Congreso de la República."
		],
		"description": "¡¡Correcto!! La Presidencia de la República es la cabeza de la Rama Ejecutiva, encargada de ejecutar las leyes y administrar el Estado."
	},
	{
		"id": 45,
		"question": "¿Qué entidad colombiana organiza los procesos electorales?",
		"correct_answer": "La Registraduría Nacional del Estado Civil.",
		"incorrect_answers": [
			"El Consejo de Estado.",
			"La Procuraduría General de la Nación."
		],
		"description": "¡¡Correcto!! La Registraduría Nacional del Estado Civil es responsable de organizar y garantizar la transparencia de los procesos electorales en Colombia."
	},

	{
		"id": 46,
		"question": "¿Cuál es la función principal del Congreso de la República de Colombia?",
		"correct_answer": "Legislar",
		"incorrect_answers": [
			"Interpretar las leyes",
			"Ejecutar las leyes"
		],
		"description": "¡¡Correcto!! Una de las funciones principales del Congreso de la República es legislar, es decir, crear o modificar leyes."
	},
	{
		"id": 47,
		"question": "¿Cuál es la división territorial básica de Colombia?",
		"correct_answer": "Departamentos y municipios",
		"incorrect_answers": [
			"Estados y ciudades",
			"Provincias y comunas"
		],
		"description": "¡¡Correcto!! Colombia se divide territorialmente en departamentos y municipios."
	},
	{
		"id": 48,
		"question": "¿Qué entidad es responsable de organizar las elecciones en Colombia?",
		"correct_answer": "Registraduría Nacional del Estado Civil",
		"incorrect_answers": [
			"Consejo Nacional Electoral",
			"Ministerio del Interior"
		],
		"description": "¡¡Correcto!! La Registraduría Nacional del Estado Civil es la entidad encargada de organizar las elecciones en Colombia."
	},

	{
		"id": 49,
		"question": "¿Qué limitaciones enfrentan los departamentos en Colombia respecto a su autonomía territorial?",
		"correct_answer": "Los departamentos tienen autonomía pero están sujetos a la Constitución y las leyes nacionales.",
		"incorrect_answers": [
			"Los departamentos pueden crear sus propias leyes sin restricciones.",
			"Los departamentos no tienen ninguna forma de autonomía y son completamente dependientes del Gobierno Nacional."
		],
		"description": "¡¡Correcto!! Aunque los departamentos tienen cierto grado de autonomía para la gestión de sus asuntos, esta está sujeta a la Constitución y a las leyes nacionales."
	},
	{
		"id": 50,
		"question": "¿Cuál es una de las funciones principales del Consejo de Estado en Colombia?",
		"correct_answer": "Actuar como tribunal de última instancia en asuntos administrativos.",
		"incorrect_answers": [
			"Supervisar la conducta de los miembros del Congreso.",
			"Ejecutar las políticas públicas del Gobierno Nacional."
		],
		"description": "¡¡Correcto!! El Consejo de Estado actúa como el tribunal de última instancia en asuntos administrativos."
	},
	{
		"id": 51,
		"question": "¿Qué instituciones conforman la Fuerza Pública en Colombia?",
		"correct_answer": "Policía Nacional y Fuerzas Militares",
		"incorrect_answers": [
			"Policía Nacional y Fiscalía General",
			"Fuerzas Militares y Fiscalía General"
		],
		"description": "¡¡Correcto!! La Fuerza Pública en Colombia está compuesta por las Fuerzas Militares y la Policía Nacional."
	}

]

export const modelo_integrado_de_gestión = [

	{
		"id": 1,
		"question": "¿Qué significa la sigla MIPG?",
		"correct_answer": "Modelo Integrado de Planeación y Gestión",
		"incorrect_answers": [
			"Modelo Institucional de Planeación y Gestión",
			"Modelo Integral de Procesos Gubernamentales"
		],
		"description": "¡¡Correcto!! MIPG significa Modelo Integrado de Planeación y Gestión, y es el marco de referencia para la gestión institucional en entidades públicas de Colombia."
	},
	{
		"id": 2,
		"question": "¿Cuántas dimensiones conforman el MIPG?",
		"correct_answer": "7",
		"incorrect_answers": [
			"5",
			"6"
		],
		"description": "¡¡Correcto!! El MIPG se estructura en 7 dimensiones que agrupan las políticas de gestión y desempeño institucional."
	},
	{
		"id": 3,
		"question": "¿Cuál de los siguientes no es un principio del MIPG?",
		"correct_answer": "Competencia técnica",
		"incorrect_answers": [
			"Integridad",
			"Toma de decisiones basada en evidencia"
		],
		"description": "¡¡Correcto!! Competencia técnica no es uno de los principios del MIPG. Entre los principios están integridad, excelencia, y toma de decisiones basada en evidencia."
	},
	{
		"id": 4,
		"question": "¿Cuál es uno de los objetivos principales del MIPG?",
		"correct_answer": "Fortalecer el liderazgo y el talento humano bajo los principios de integridad y legalidad",
		"incorrect_answers": [
			"Incrementar la burocracia institucional",
			"Centralizar la toma de decisiones en el nivel nacional"
		],
		"description": "¡¡Correcto!! Uno de los objetivos del MIPG es fortalecer el liderazgo y el talento humano con base en la integridad y legalidad."
	},
	{
		"id": 5,
		"question": "¿Qué documento legal estableció el MIPG en Colombia?",
		"correct_answer": "Decreto 1499 de 2017",
		"incorrect_answers": [
			"Ley 87 de 1993",
			"Decreto 1083 de 2015"
		],
		"description": "¡¡Correcto!! El MIPG fue formalizado mediante el Decreto 1499 de 2017."
	},

	{
		"id": 6,
		"question": "¿Qué entidad lidera la implementación del MIPG en las entidades públicas colombianas?",
		"correct_answer": "Departamento Administrativo de la Función Pública (DAFP)",
		"incorrect_answers": [
			"Contraloría General de la República",
			"Ministerio de Hacienda y Crédito Público"
		],
		"description": "¡¡Correcto!! El DAFP es la entidad responsable de liderar, orientar y acompañar la implementación del MIPG en Colombia."
	},
	{
		"id": 7,
		"question": "¿Cuál es el rol del Comité Institucional de Gestión y Desempeño en el MIPG?",
		"correct_answer": "Orientar y coordinar la implementación del MIPG en la entidad",
		"incorrect_answers": [
			"Supervisar exclusivamente la ejecución presupuestal",
			"Diseñar políticas públicas nacionales"
		],
		"description": "¡¡Correcto!! Este comité orienta y coordina las acciones necesarias para implementar adecuadamente el MIPG dentro de la entidad."
	},
	{
		"id": 8,
		"question": "¿Cuál de las siguientes dimensiones hace parte del MIPG?",
		"correct_answer": "Gestión con valores para el resultado",
		"incorrect_answers": [
			"Planeación táctica institucional",
			"Gestión financiera internacional"
		],
		"description": "¡¡Correcto!! 'Gestión con valores para el resultado' es una de las 7 dimensiones del MIPG, enfocada en la integridad y el logro de resultados."
	},
	{
		"id": 9,
		"question": "¿Qué herramienta facilita el seguimiento y evaluación del MIPG en las entidades?",
		"correct_answer": "Formulario Único de Reporte de Avance a la Gestión (FURAG)",
		"incorrect_answers": [
			"Sistema de Control Interno Contable",
			"Informe de Rendición de Cuentas"
		],
		"description": "¡¡Correcto!! El FURAG permite a las entidades reportar sus avances en la implementación del MIPG."
	},
	{
		"id": 10,
		"question": "¿Qué dimensión del MIPG promueve la participación ciudadana?",
		"correct_answer": "Evaluación de resultados",
		"incorrect_answers": [
			"Gestión del conocimiento",
			"Talento humano"
		],
		"description": "¡¡Correcto!! La dimensión de 'Evaluación de resultados' promueve la participación ciudadana mediante ejercicios como la rendición de cuentas y control social."
	},

	{
		"id": 11,
		"question": "¿Qué dimensión del MIPG se encarga de fortalecer el desarrollo de competencias del personal?",
		"correct_answer": "Gestión del talento humano",
		"incorrect_answers": [
			"Dirección y planeación",
			"Gestión documental"
		],
		"description": "¡¡Correcto!! La dimensión de 'Gestión del talento humano' busca fortalecer las capacidades del personal para cumplir los objetivos institucionales."
	},
	{
		"id": 12,
		"question": "¿Cuál es uno de los propósitos principales del MIPG?",
		"correct_answer": "Mejorar el desempeño institucional y la satisfacción ciudadana",
		"incorrect_answers": [
			"Incrementar el gasto público",
			"Reducir la cantidad de entidades públicas"
		],
		"description": "¡¡Correcto!! El MIPG busca mejorar el desempeño de las entidades públicas y responder a las necesidades de los ciudadanos."
	},
	{
		"id": 13,
		"question": "¿Qué norma establece el Modelo Integrado de Planeación y Gestión (MIPG)?",
		"correct_answer": "Decreto 1499 de 2017",
		"incorrect_answers": [
			"Ley 87 de 1993",
			"Decreto 1083 de 2015"
		],
		"description": "¡¡Correcto!! El Decreto 1499 de 2017 establece oficialmente el MIPG como marco de referencia para la gestión pública en Colombia."
	},
	{
		"id": 14,
		"question": "¿Cuál es el enfoque central del MIPG?",
		"correct_answer": "Gestión orientada a resultados para los ciudadanos",
		"incorrect_answers": [
			"Privatización de servicios públicos",
			"Reducción de planta de personal"
		],
		"description": "¡¡Correcto!! El MIPG pone al ciudadano en el centro, enfocándose en resultados efectivos y de valor público."
	},
	{
		"id": 15,
		"question": "¿Qué dimensión del MIPG está relacionada con la transparencia y el acceso a la información pública?",
		"correct_answer": "Información y comunicación",
		"incorrect_answers": [
			"Control interno",
			"Planeación institucional"
		],
		"description": "¡¡Correcto!! La dimensión de 'Información y comunicación' promueve el acceso a la información y la rendición de cuentas."
	},

	{
		"id": 16,
		"question": "¿Cuál es una de las funciones principales del Comité de Coordinación de Control Interno en el marco del MIPG?",
		"correct_answer": "Coordinar y supervisar la implementación del sistema de control interno",
		"incorrect_answers": [
			"Administrar los recursos financieros",
			"Realizar auditorías externas"
		],
		"description": "¡¡Correcto!! El Comité de Coordinación de Control Interno se encarga de coordinar y supervisar el control interno dentro de la entidad."
	},
	{
		"id": 17,
		"question": "En el MIPG, ¿qué dimensión se relaciona con la identificación y gestión de riesgos institucionales?",
		"correct_answer": "Gestión del riesgo",
		"incorrect_answers": [
			"Planeación estratégica",
			"Evaluación del desempeño"
		],
		"description": "¡¡Correcto!! La dimensión de 'Gestión del riesgo' busca identificar y mitigar los riesgos que puedan afectar los objetivos institucionales."
	},
	{
		"id": 18,
		"question": "¿Qué documento es fundamental para la implementación del MIPG en una entidad pública?",
		"correct_answer": "El Plan Integrado de Gestión",
		"incorrect_answers": [
			"El Plan Financiero Anual",
			"El Manual de funciones"
		],
		"description": "¡¡Correcto!! El Plan Integrado de Gestión reúne los planes y estrategias necesarias para cumplir con los objetivos del MIPG."
	},
	{
		"id": 19,
		"question": "Según el MIPG, ¿qué aspecto debe garantizar la gestión documental?",
		"correct_answer": "La organización, conservación y acceso a la información",
		"incorrect_answers": [
			"La reducción del personal administrativo",
			"El aumento del presupuesto institucional"
		],
		"description": "¡¡Correcto!! La gestión documental asegura que la información esté bien organizada, conservada y disponible cuando se requiera."
	},
	{
		"id": 20,
		"question": "¿Qué elemento es clave para lograr la transparencia en la gestión pública según el MIPG?",
		"correct_answer": "La rendición de cuentas y el acceso a la información",
		"incorrect_answers": [
			"La contratación directa sin licitación",
			"La eliminación de controles internos"
		],
		"description": "¡¡Correcto!! La transparencia se fortalece mediante la rendición de cuentas y garantizando el acceso a la información pública."
	},

	{
		"id": 21,
		"question": "¿Cuál es el propósito principal del Modelo Integrado de Planeación y Gestión (MIPG)?",
		"correct_answer": "Mejorar la eficiencia y transparencia en la gestión pública",
		"incorrect_answers": [
			"Aumentar el presupuesto de las entidades",
			"Reducir el número de empleados públicos"
		],
		"description": "¡¡Correcto!! El MIPG busca fortalecer la gestión pública para ser más eficiente y transparente."
	},
	{
		"id": 22,
		"question": "Según el MIPG, ¿qué debe garantizar la evaluación del desempeño institucional?",
		"correct_answer": "El cumplimiento de los objetivos y metas institucionales",
		"incorrect_answers": [
			"El aumento de recursos financieros",
			"La contratación masiva de personal"
		],
		"description": "¡¡Correcto!! La evaluación mide si la entidad cumple con sus objetivos y metas."
	},
	{
		"id": 23,
		"question": "¿Qué instrumento utiliza el MIPG para articular los planes y procesos de gestión de una entidad?",
		"correct_answer": "El Plan Estratégico Institucional",
		"incorrect_answers": [
			"El informe financiero anual",
			"El reglamento interno"
		],
		"description": "¡¡Correcto!! El Plan Estratégico Institucional orienta y articula la gestión de la entidad."
	},
	{
		"id": 24,
		"question": "¿Cuál es una de las dimensiones del MIPG relacionadas con la gestión del talento humano?",
		"correct_answer": "Gestión del talento humano y clima organizacional",
		"incorrect_answers": [
			"Gestión financiera",
			"Gestión documental"
		],
		"description": "¡¡Correcto!! Esta dimensión busca optimizar el recurso humano y fomentar un buen ambiente laboral."
	},
	{
		"id": 25,
		"question": "¿Qué norma regula la implementación del MIPG en Colombia?",
		"correct_answer": "Decreto 1499 de 2017",
		"incorrect_answers": [
			"Ley 1712 de 2014",
			"Ley 1437 de 2011"
		],
		"description": "¡¡Correcto!! El Decreto 1499 de 2017 es la norma que establece el MIPG."
	},

	{
		"id": 26,
		"question": "¿Cuál es una de las fases del ciclo de gestión según el MIPG?",
		"correct_answer": "Planificación, ejecución, seguimiento y control",
		"incorrect_answers": [
			"Contratación, evaluación, liquidación",
			"Presupuesto, auditoría, sanción"
		],
		"description": "¡¡Correcto!! El ciclo de gestión incluye estas fases para garantizar el logro de resultados."
	},
	{
		"id": 27,
		"question": "En el MIPG, ¿qué se entiende por transparencia en la gestión pública?",
		"correct_answer": "Acceso abierto a la información y rendición de cuentas",
		"incorrect_answers": [
			"Ocultar información sensible",
			"Evitar reportes a los ciudadanos"
		],
		"description": "¡¡Correcto!! La transparencia implica que la gestión sea visible y clara para la ciudadanía."
	},
	{
		"id": 28,
		"question": "¿Qué herramienta promueve el MIPG para facilitar la gestión documental?",
		"correct_answer": "Sistema de Gestión Documental Electrónico",
		"incorrect_answers": [
			"Sistema de Nómina",
			"Base de Datos de Usuarios"
		],
		"description": "¡¡Correcto!! Este sistema ayuda a organizar y preservar los documentos institucionales."
	},
	{
		"id": 29,
		"question": "¿Cuál es el rol de la auditoría interna en el marco del MIPG?",
		"correct_answer": "Evaluar y fortalecer los procesos de control y gestión de riesgos",
		"incorrect_answers": [
			"Incrementar los trámites administrativos",
			"Reducir el presupuesto institucional"
		],
		"description": "¡¡Correcto!! La auditoría interna verifica la efectividad de los controles y gestiona riesgos."
	},
	{
		"id": 30,
		"question": "¿Qué importancia tiene la gestión del riesgo dentro del MIPG?",
		"correct_answer": "Permite identificar y mitigar amenazas que afecten los objetivos institucionales",
		"incorrect_answers": [
			"Impide la contratación de personal nuevo",
			"Limita la ejecución de proyectos"
		],
		"description": "¡¡Correcto!! La gestión del riesgo protege a la entidad para cumplir sus metas."
	},

	{
		"id": 31,
		"question": "¿Qué busca promover el MIPG en las entidades públicas?",
		"correct_answer": "La mejora continua de la gestión pública",
		"incorrect_answers": [
			"El aumento de la burocracia",
			"La reducción de funciones institucionales"
		],
		"description": "¡¡Correcto!! El MIPG promueve una gestión pública eficiente y efectiva."
	},
	{
		"id": 32,
		"question": "¿Cuál es el componente del MIPG que se refiere a la cultura organizacional?",
		"correct_answer": "Gestión del Talento Humano",
		"incorrect_answers": [
			"Gestión Financiera",
			"Gestión Documental"
		],
		"description": "¡¡Correcto!! La gestión del talento humano se enfoca en el desarrollo de capacidades y cultura."
	},
	{
		"id": 33,
		"question": "¿Qué principio del MIPG promueve la equidad en el acceso a los servicios públicos?",
		"correct_answer": "Inclusión",
		"incorrect_answers": [
			"Eficiencia",
			"Confidencialidad"
		],
		"description": "¡¡Correcto!! La inclusión asegura que todos los ciudadanos tengan acceso a los servicios."
	},
	{
		"id": 34,
		"question": "¿Qué herramienta del MIPG permite medir el desempeño de las entidades públicas?",
		"correct_answer": "Indicadores de gestión",
		"incorrect_answers": [
			"Balances financieros",
			"Sistemas operativos"
		],
		"description": "¡¡Correcto!! Los indicadores de gestión facilitan la evaluación del cumplimiento de objetivos."
	},
	{
		"id": 35,
		"question": "¿Qué norma reglamenta el Modelo Integrado de Planeación y Gestión en Colombia?",
		"correct_answer": "Decreto 1499 de 2017",
		"incorrect_answers": [
			"Ley 1712 de 2014",
			"Decreto 1082 de 2015"
		],
		"description": "¡¡Correcto!! El Decreto 1499 de 2017 reglamenta el MIPG."
	},
	{
		"id": 36,
		"question": "¿Cuál es el propósito del componente de Gestión Documental en el MIPG?",
		"correct_answer": "Garantizar la adecuada administración de los documentos institucionales",
		"incorrect_answers": [
			"Reducir la cantidad de documentos",
			"Eliminar documentos antiguos"
		],
		"description": "¡¡Correcto!! La gestión documental asegura la organización y conservación de documentos."
	},
	{
		"id": 37,
		"question": "¿Qué busca la gestión financiera dentro del MIPG?",
		"correct_answer": "Optimizar el uso de los recursos públicos",
		"incorrect_answers": [
			"Aumentar los gastos innecesarios",
			"Reducir los ingresos"
		],
		"description": "¡¡Correcto!! La gestión financiera eficiente es clave para la sostenibilidad institucional."
	},
	{
		"id": 38,
		"question": "¿Qué significa el principio de legalidad en el MIPG?",
		"correct_answer": "Que todas las acciones se deben ajustar a la ley y normas vigentes",
		"incorrect_answers": [
			"Actuar según la conveniencia personal",
			"Ignorar las normas internas"
		],
		"description": "¡¡Correcto!! La legalidad es fundamental para una gestión pública transparente y responsable."
	},
	{
		"id": 39,
		"question": "¿Qué aspecto prioriza la Gestión del Riesgo en el MIPG?",
		"correct_answer": "La identificación, evaluación y mitigación de riesgos",
		"incorrect_answers": [
			"El incremento de procesos administrativos",
			"El retraso en la ejecución de proyectos",
		],
		"description": "¡¡Correcto!! La gestión del riesgo ayuda a prevenir problemas y asegurar el cumplimiento de metas."
	},
	{
		"id": 40,
		"question": "¿Cuál es la función de la Gestión del Talento Humano según el MIPG?",
		"correct_answer": "Desarrollar competencias y mejorar el ambiente laboral",
		"incorrect_answers": [
			"Disminuir el número de empleados",
			"Eliminar capacitaciones"
		],
		"description": "¡¡Correcto!! El talento humano es clave para la efectividad de la entidad."
	},
	{
		"id": 41,
		"question": "¿Qué promueve el MIPG en cuanto a la rendición de cuentas?",
		"correct_answer": "La transparencia y la comunicación clara con la ciudadanía",
		"incorrect_answers": [
			"Ocultar información financiera",
			"Evitar informes públicos"
		],
		"description": "¡¡Correcto!! La rendición de cuentas fortalece la confianza en la gestión pública."
	},
	{
		"id": 42,
		"question": "¿Cuál es el papel del sistema de control interno en el MIPG?",
		"correct_answer": "Garantizar el cumplimiento de las políticas y procedimientos",
		"incorrect_answers": [
			"Ignorar los controles internos",
			"Aumentar la corrupción"
		],
		"description": "¡¡Correcto!! El control interno ayuda a prevenir errores y fraudes."
	},
	{
		"id": 43,
		"question": "¿Qué componente del MIPG se encarga de la planificación estratégica?",
		"correct_answer": "Planeación Institucional",
		"incorrect_answers": [
			"Gestión Documental",
			"Gestión Financiera"
		],
		"description": "¡¡Correcto!! La planeación institucional define objetivos y estrategias para la entidad."
	},
	{
		"id": 44,
		"question": "¿Qué se entiende por eficiencia en el contexto del MIPG?",
		"correct_answer": "Lograr los resultados con el menor uso de recursos posibles",
		"incorrect_answers": [
			"Incrementar los recursos sin resultados",
			"Disminuir los resultados para ahorrar dinero"
		],
		"description": "¡¡Correcto!! La eficiencia es un principio para optimizar recursos y resultados."
	},
	{
		"id": 45,
		"question": "¿Qué establece el MIPG sobre la innovación en la gestión pública?",
		"correct_answer": "Fomentar procesos creativos y mejora continua",
		"incorrect_answers": [
			"Mantener siempre los mismos procesos",
			"Evitar cambios y actualizaciones"
		],
		"description": "¡¡Correcto!! La innovación ayuda a modernizar y hacer más eficiente la gestión pública."
	},
	{
		"id": 46,
		"question": "¿Qué entidad es responsable de implementar el MIPG en Colombia?",
		"correct_answer": "La Presidencia de la República y las entidades públicas",
		"incorrect_answers": [
			"Solo las empresas privadas",
			"Los organismos internacionales"
		],
		"description": "¡¡Correcto!! La implementación del MIPG es responsabilidad de las entidades públicas bajo la Presidencia."
	},
	{
		"id": 47,
		"question": "¿Cuál es el objetivo de la Gestión de la Información en el MIPG?",
		"correct_answer": "Facilitar el acceso, uso y protección de la información pública",
		"incorrect_answers": [
			"Restringir el acceso a la información",
			"Eliminar la información histórica"
		],
		"description": "¡¡Correcto!! La gestión de la información es clave para una administración transparente."
	},
	{
		"id": 48,
		"question": "¿Qué debe garantizar el MIPG en la prestación de servicios al ciudadano?",
		"correct_answer": "Calidad, oportunidad y accesibilidad",
		"incorrect_answers": [
			"Solo calidad sin oportunidad",
			"Accesibilidad limitada"
		],
		"description": "¡¡Correcto!! El MIPG busca que los servicios públicos sean efectivos y accesibles para todos."
	},
	{
		"id": 49,
		"question": "¿Qué principio promueve el MIPG para que las decisiones públicas sean objetivas?",
		"correct_answer": "Imparcialidad",
		"incorrect_answers": [
			"Parcialidad",
			"Subjetividad"
		],
		"description": "¡¡Correcto!! La imparcialidad asegura que las decisiones se basen en criterios justos y objetivos."
	},
	{
		"id": 50,
		"question": "¿Qué papel juega la Gestión de la Seguridad de la Información en el MIPG?",
		"correct_answer": "Proteger la confidencialidad, integridad y disponibilidad de la información",
		"incorrect_answers": [
			"Compartir libremente toda la información",
			"Ignorar los riesgos informáticos"
		],
		"description": "¡¡Correcto!! La seguridad de la información es fundamental para proteger datos institucionales."
	}

]


export const competencias_comportamentales_para_profesionales = [

	{
		"id": 1,
		"question": "Cuando se requiere diseñar un nuevo proceso para la dependencia en la que labora usted:",
		"correct_answer": "Aprovecha la oportunidad para dar soluciones novedosas.",
		"incorrect_answers": [
			"Acepta y se adapta fácilmente a los nuevos procesos aplicados.",
			"Propone y encuentra formas eficaces de hacer las cosas.",
			"Se enfoca en las tareas que venía desarrollando."
		],
		"description": "Esta pregunta evalúa la capacidad de innovación y proactividad en el diseño de nuevos procesos."
	},
	{
		"id": 2,
		"question": "Es necesario presentar un informe de rendición de cuentas y esto requiere trabajo extra para todos los funcionarios, usted:",
		"correct_answer": "Coopera con la creación del informe, entregando información clara y precisa de los indicadores cumplidos y su seguimiento.",
		"incorrect_answers": [
			"Apoya las tareas que se deben realizar, buscando facilitar la elaboración del informe.",
			"Recopila la información que ha desarrollado durante sus funciones de trabajo.",
			"Coopera con todos los servidores asignados a la creación del informe para conseguir el cumplimiento de la fecha límite."
		],
		"description": "Esta pregunta mide la disposición al trabajo en equipo y la responsabilidad en la rendición de cuentas."
	},
	{
		"id": 3,
		"question": "Al momento de cumplir los objetivos de la entidad con el equipo de trabajo usted:",
		"correct_answer": "Busca trabajar con otros de forma conjunta y de manera participativa para la consecución de metas.",
		"incorrect_answers": [
			"Busca cooperar con los demás con el fin de alcanzar los objetivos institucionales.",
			"Se enfoca en desarrollar sus funciones y cumplirlas a cabalidad.",
			"Busca trabajar con otros para conseguir metas comunes."
		],
		"description": "Esta pregunta evalúa la orientación al trabajo colaborativo y la consecución de objetivos comunes."
	},
	{
		"id": 4,
		"question": "Al momento de realizar sus funciones, usted las realiza:",
		"correct_answer": "Ayudando al logro de los objetivos articulando sus actuaciones con los demás.",
		"incorrect_answers": [
			"Cumpliendo mis funciones día a día.",
			"Comprendiendo los aspectos técnicos y los aplica al desarrollo de procesos y procedimientos en los que está involucrado.",
			"Analizando de un modo sistemático y racional los aspectos del trabajo, basándose en la información relevante."
		],
		"description": "Esta pregunta mide la capacidad de integración y alineación con los objetivos organizacionales."
	},
	{
		"id": 5,
		"question": "Con la llegada de un nuevo jefe, las tareas que usted realizaba fueron asignadas a otra persona y a usted se le asignan nuevas:",
		"correct_answer": "Comprendo los aspectos técnicos de las nuevas funciones y los aplico al desarrollo de los nuevos procesos y procedimientos.",
		"incorrect_answers": [
			"Acepto y me adapto fácilmente a los cambios.",
			"Realizo una petición ante Gestión Humana por el cambio en mis funciones.",
			"Aplico los conocimientos adquiridos a los desafíos que se presentan en el desarrollo del trabajo."
		],
		"description": "Esta pregunta evalúa la capacidad de adaptación y aplicación de conocimientos en nuevas funciones."
	},

	{
		"id": 6,
		"question": "Se posesiona un nuevo compañero de trabajo por concurso, usted procede a:",
		"correct_answer": "Comparte su información para que la nueva persona conozca sus funciones y las pueda desarrollar.",
		"incorrect_answers": [
			"Lo remite al área de gestión humana para que realicen el proceso de acompañamiento.",
			"Se pone a su disposición para ayudarle con las funciones desempeñadas.",
			"Le explica el funcionamiento de los procesos para el cumplimiento de objetivos."
		],
		"description": "¡¡Correcto!! Compartir información y apoyar a nuevos compañeros facilita su integración y desempeño."
	},
	{
		"id": 7,
		"question": "Se realizará una reestructuración de la planta de personal de la dependencia, usted:",
		"correct_answer": "Participa en las reuniones de manera proactiva, busca el conocimiento de todos los miembros del equipo y que la información clave sea compartida.",
		"incorrect_answers": [
			"Espera a que esté lista la reestructuración.",
			"Acepta los cambios que se vienen y se dispone a aceptarlos.",
			"Apoya al equipo que realizará la reestructuración brindando información pertinente para cumplir el objetivo."
		],
		"description": "¡¡Correcto!! La participación proactiva y el intercambio de información son esenciales durante procesos de cambio organizacional."
	},
	{
		"id": 8,
		"question": "Fue trasladado a una nueva dependencia, donde debe encargarse de un proceso, usted:",
		"correct_answer": "Se enfrenta con flexibilidad y versatilidad a situaciones nuevas para aceptar los cambios positiva y constructivamente.",
		"incorrect_answers": [
			"Acepta el traslado sin inconveniente.",
			"Busca entender y aplicar los conocimientos técnicos del área de desempeño y mantenerlos actualizados.",
			"Le gusta adquirir y desarrollar permanentemente conocimientos, destrezas y habilidades."
		],
		"description": "¡¡Correcto!! La adaptabilidad y actitud positiva son clave al asumir nuevas responsabilidades."
	},
	{
		"id": 9,
		"question": "Al momento de aplicar su conocimiento a las funciones laborales desempeñadas, usted:",
		"correct_answer": "Aplica el conocimiento profesional en la resolución de problemas y lo transfiere a su entorno laboral.",
		"incorrect_answers": [
			"Entiende y aplica los conocimientos técnicos del área de desempeño y procura mantenerlos actualizados.",
			"Hace exactamente lo que le mandan.",
			"Organiza y guarda de forma adecuada la información a su cuidado, teniendo en cuenta las normas legales y de la organización."
		],
		"description": "¡¡Correcto!! Aplicar y transferir conocimientos profesionales mejora la eficiencia y solución de problemas en el entorno laboral."
	},
	{
		"id": 10,
		"question": "Se requiere mejorar un proceso realizado en la entidad, usted como parte del equipo donde se realizará la mejora procede a:",
		"correct_answer": "Consultar con los encargados del proceso para conocer su punto de vista y experiencia en el tema.",
		"incorrect_answers": [
			"Apoya el desarrollo de las actividades necesarias para el mejoramiento.",
			"Construye manuales técnicos que detallan el proceso realizado.",
			"Consultar con su jefe cómo quiere que quede el procedimiento deseado."
		],
		"description": "¡¡Correcto!! Involucrar a los encargados del proceso aporta valiosa experiencia y perspectiva para su mejora."
	},

	{
		"id": 11,
		"question": "Al momento de implementar nuevas ideas en la organización, usted:",
		"correct_answer": "Analiza su viabilidad y propone un plan de acción para ejecutarlas.",
		"incorrect_answers": [
			"Espera a que otros lo hagan primero para seguir su ejemplo.",
			"Considera que cambiar las cosas puede generar confusión y prefiere mantener lo establecido."
		],
		"description": "¡¡Correcto!! Un profesional con competencias comportamentales adecuadas evalúa y planifica antes de ejecutar una nueva idea."
	},
	{
		"id": 12,
		"question": "Cuando un compañero tiene dificultades para alcanzar una meta, usted:",
		"correct_answer": "Se ofrece para colaborar en lo que sea necesario, fomentando el trabajo en equipo.",
		"incorrect_answers": [
			"Piensa que cada quien debe resolver sus propios problemas.",
			"Evita involucrarse para no cargar con responsabilidades ajenas."
		],
		"description": "¡¡Correcto!! La colaboración y el apoyo entre compañeros son esenciales para lograr objetivos comunes."
	},
	{
		"id": 13,
		"question": "Frente a un cambio inesperado en los procesos de su área, usted:",
		"correct_answer": "Se adapta rápidamente y busca comprender los motivos del cambio.",
		"incorrect_answers": [
			"Manifiesta su inconformidad sin tratar de entender el cambio.",
			"Ignora el cambio y continúa trabajando como siempre."
		],
		"description": "¡¡Correcto!! Adaptarse a los cambios con una actitud proactiva es clave para el entorno laboral."
	},
	{
		"id": 14,
		"question": "Si se le asigna una tarea que no está dentro de sus funciones habituales, usted:",
		"correct_answer": "La asume con responsabilidad y busca cómo ejecutarla de forma eficiente.",
		"incorrect_answers": [
			"Se niega a realizarla porque no le corresponde.",
			"Pide que se le reasigne a alguien con más experiencia en el tema."
		],
		"description": "¡¡Correcto!! La disposición para asumir nuevos retos refleja compromiso organizacional."
	},
	{
		"id": 15,
		"question": "Cuando recibe una crítica sobre su desempeño, usted:",
		"correct_answer": "La escucha con atención y la utiliza para mejorar.",
		"incorrect_answers": [
			"Se siente atacado y responde de manera defensiva.",
			"Ignora la crítica porque cree que no tiene fundamento."
		],
		"description": "¡¡Correcto!! La receptividad a la retroalimentación es una competencia clave para el desarrollo profesional."
	},

	{
		"id": 16,
		"question": "En un equipo de trabajo, ¿cómo suele actuar usted?",
		"correct_answer": "Escucha activamente, aporta ideas y respeta las opiniones de los demás.",
		"incorrect_answers": [
			"Solo interviene cuando cree que tiene la razón.",
			"Prefiere trabajar de forma individual para evitar discusiones."
		],
		"description": "¡¡Correcto!! Escuchar y participar activamente en el trabajo en equipo fortalece los resultados colectivos."
	},
	{
		"id": 17,
		"question": "¿Qué actitud toma frente a la presión por resultados?",
		"correct_answer": "Organiza su tiempo y prioridades para cumplir con los objetivos sin perder la calma.",
		"incorrect_answers": [
			"Se estresa fácilmente y pierde el enfoque.",
			"Busca excusas externas para justificar posibles retrasos."
		],
		"description": "¡¡Correcto!! Una actitud organizada y resiliente es esencial ante la presión laboral."
	},
	{
		"id": 18,
		"question": "Cuando un proceso en su área no está dando resultados, usted:",
		"correct_answer": "Identifica las fallas y propone mejoras para optimizarlo.",
		"incorrect_answers": [
			"Se limita a seguir las instrucciones sin cuestionarlas.",
			"Informa a su jefe y espera instrucciones."
		],
		"description": "¡¡Correcto!! Proponer soluciones demuestra iniciativa y compromiso con la mejora continua."
	},
	{
		"id": 19,
		"question": "Si nota que un compañero está actuando de forma poco ética, usted:",
		"correct_answer": "Informa la situación a la instancia correspondiente con responsabilidad.",
		"incorrect_answers": [
			"Prefiere no involucrarse en ese tipo de asuntos.",
			"Lo comenta con otros compañeros sin tomar acción formal."
		],
		"description": "¡¡Correcto!! La integridad exige actuar frente a situaciones éticamente cuestionables."
	},
	{
		"id": 20,
		"question": "Ante un cliente o usuario insatisfecho, su reacción es:",
		"correct_answer": "Escuchar con respeto, ofrecer una solución y canalizar el caso si es necesario.",
		"incorrect_answers": [
			"Justificarse sin darle importancia a la queja.",
			"Evitar el conflicto remitiendo al usuario a otra persona."
		],
		"description": "¡¡Correcto!! Atender con respeto y resolver problemas demuestra orientación al servicio."
	},

	{
		"id": 21,
		"question": "¿Cómo actúa usted ante un cambio repentino en las políticas internas de su entidad?",
		"correct_answer": "Se adapta con disposición y busca entender cómo aplicarlas correctamente.",
		"incorrect_answers": [
			"Manifiesta rechazo y se resiste a aplicar los cambios.",
			"Ignora las nuevas políticas esperando que no se implementen."
		],
		"description": "¡¡Correcto!! La adaptabilidad es clave en entornos organizacionales dinámicos."
	},
	{
		"id": 22,
		"question": "Cuando tiene una carga laboral alta, ¿qué hace?",
		"correct_answer": "Organiza sus actividades y solicita apoyo si es necesario para cumplir los objetivos.",
		"incorrect_answers": [
			"Se estresa y deja tareas sin terminar.",
			"Se queja constantemente sin buscar soluciones."
		],
		"description": "¡¡Correcto!! Una gestión adecuada del tiempo y los recursos demuestra responsabilidad y proactividad."
	},
	{
		"id": 23,
		"question": "Frente a una crítica constructiva, usted:",
		"correct_answer": "La escucha con apertura y reflexiona sobre cómo mejorar.",
		"incorrect_answers": [
			"Se molesta y la toma como un ataque personal.",
			"Ignora la crítica y continúa actuando igual."
		],
		"description": "¡¡Correcto!! Aceptar la crítica es una habilidad fundamental para el crecimiento profesional."
	},
	{
		"id": 24,
		"question": "¿Qué hace cuando debe trabajar con alguien que piensa diferente a usted?",
		"correct_answer": "Busca puntos en común y colabora respetando la diversidad de pensamiento.",
		"incorrect_answers": [
			"Evita tratar temas delicados para no discutir.",
			"Impone su punto de vista sin considerar el otro."
		],
		"description": "¡¡Correcto!! La colaboración y el respeto por las diferencias enriquecen el trabajo en equipo."
	},
	{
		"id": 25,
		"question": "Si comete un error en su trabajo, ¿cómo actúa?",
		"correct_answer": "Reconoce el error, informa y toma acciones para corregirlo.",
		"incorrect_answers": [
			"Oculta el error para evitar consecuencias.",
			"Culpa a otros por lo sucedido."
		],
		"description": "¡¡Correcto!! Reconocer los errores y asumir la responsabilidad es señal de ética profesional."
	},

	{
		"id": 26,
		"question": "¿Cómo reacciona cuando un compañero de trabajo no cumple con sus responsabilidades?",
		"correct_answer": "Dialoga con él de manera respetuosa y, si es necesario, informa a su superior.",
		"incorrect_answers": [
			"Ignora la situación para evitar conflictos.",
			"Lo critica delante de los demás."
		],
		"description": "¡¡Correcto!! Resolver los conflictos con respeto y canales adecuados fortalece el clima laboral."
	},
	{
		"id": 27,
		"question": "¿Qué actitud toma frente a nuevas herramientas tecnológicas en su lugar de trabajo?",
		"correct_answer": "Muestra interés por aprender y aplicarlas eficientemente.",
		"incorrect_answers": [
			"Se rehúsa a utilizarlas por desconocimiento.",
			"Prefiere seguir con los métodos tradicionales."
		],
		"description": "¡¡Correcto!! Estar abierto a la innovación demuestra disposición al aprendizaje."
	},
	{
		"id": 28,
		"question": "Cuando debe entregar un informe en poco tiempo, ¿cómo actúa?",
		"correct_answer": "Prioriza tareas, se enfoca y organiza para cumplir a tiempo.",
		"incorrect_answers": [
			"Entrega cualquier cosa sin importar la calidad.",
			"Espera a último momento y justifica el retraso."
		],
		"description": "¡¡Correcto!! Saber priorizar tareas es esencial para cumplir los compromisos laborales."
	},
	{
		"id": 29,
		"question": "¿Qué hace si un usuario o ciudadano se encuentra inconforme con la atención recibida?",
		"correct_answer": "Escucha con empatía y busca solucionar la situación de manera oportuna.",
		"incorrect_answers": [
			"Le explica que no es su responsabilidad.",
			"Evita tratar con el usuario molesto."
		],
		"description": "¡¡Correcto!! La orientación al usuario es una competencia clave en el servicio público."
	},
	{
		"id": 30,
		"question": "En su trabajo, ¿cómo contribuye a los resultados del equipo?",
		"correct_answer": "Cumple con sus funciones, apoya a sus compañeros y propone mejoras.",
		"incorrect_answers": [
			"Se enfoca solo en sus tareas sin colaborar.",
			"Espera que otros hagan el trabajo difícil."
		],
		"description": "¡¡Correcto!! El trabajo en equipo requiere compromiso y colaboración mutua."
	},

	{
		"id": 31,
		"question": "¿Qué haría si en una reunión sus ideas son ignoradas constantemente?",
		"correct_answer": "Busca el momento adecuado para expresar su punto de vista con claridad y respeto.",
		"incorrect_answers": [
			"Se queda callado para evitar molestias.",
			"Interrumpe a los demás hasta ser escuchado."
		],
		"description": "¡¡Correcto!! Saber expresarse con respeto mejora la comunicación y la participación."
	},
	{
		"id": 32,
		"question": "¿Cómo se enfrenta a un cambio en las políticas internas de la entidad?",
		"correct_answer": "Analiza el cambio, se adapta y colabora con su implementación.",
		"incorrect_answers": [
			"Se resiste porque afecta su rutina.",
			"Ignora las nuevas políticas y sigue como siempre."
		],
		"description": "¡¡Correcto!! La adaptabilidad es esencial para enfrentar los cambios organizacionales."
	},
	{
		"id": 33,
		"question": "¿Qué actitud demuestra ante un nuevo proyecto en el que no tiene experiencia?",
		"correct_answer": "Se informa, solicita apoyo si es necesario y asume el reto con responsabilidad.",
		"incorrect_answers": [
			"Se excusa para no participar.",
			"Espera a que otros lideren el proyecto."
		],
		"description": "¡¡Correcto!! Asumir nuevos retos demuestra iniciativa y compromiso."
	},
	{
		"id": 34,
		"question": "¿Cómo responde cuando recibe una crítica constructiva de su jefe?",
		"correct_answer": "La escucha, la analiza y busca mejorar su desempeño.",
		"incorrect_answers": [
			"Se siente ofendido y no cambia nada.",
			"Evita hablar con el jefe por un tiempo."
		],
		"description": "¡¡Correcto!! Aceptar la retroalimentación es clave para el desarrollo profesional."
	},
	{
		"id": 35,
		"question": "¿Qué haría si observa una irregularidad en el manejo de recursos públicos?",
		"correct_answer": "La reporta por los canales establecidos de manera ética y responsable.",
		"incorrect_answers": [
			"Guarda silencio para no meterse en problemas.",
			"Lo comenta con compañeros sin tomar acción formal."
		],
		"description": "¡¡Correcto!! Actuar con integridad protege los recursos públicos y la legalidad."
	},

	{
		"id": 36,
		"question": "¿Cómo actúa cuando su equipo de trabajo no logra los resultados esperados?",
		"correct_answer": "Analiza las causas, propone mejoras y motiva al equipo para seguir adelante.",
		"incorrect_answers": [
			"Culpa a los demás por el fracaso.",
			"Se desentiende de la situación."
		],
		"description": "¡¡Correcto!! La orientación a resultados y el liderazgo se evidencian en momentos difíciles."
	},
	{
		"id": 37,
		"question": "¿Qué hace si tiene una carga laboral muy alta?",
		"correct_answer": "Prioriza tareas, gestiona el tiempo y solicita apoyo si es necesario.",
		"incorrect_answers": [
			"Se estresa y baja su rendimiento.",
			"Hace todo solo sin pedir ayuda."
		],
		"description": "¡¡Correcto!! Una buena gestión del tiempo y comunicación efectiva son claves en entornos laborales exigentes."
	},
	{
		"id": 38,
		"question": "¿Cómo maneja una situación en la que un compañero no cumple con sus responsabilidades?",
		"correct_answer": "Dialoga con él y, si no hay mejora, informa al superior respetando los canales adecuados.",
		"incorrect_answers": [
			"Lo ignora para evitar conflictos.",
			"Lo confronta de forma agresiva."
		],
		"description": "¡¡Correcto!! Resolver conflictos de manera asertiva fortalece el trabajo en equipo."
	},
	{
		"id": 39,
		"question": "¿Qué actitud toma frente a los procesos de formación y capacitación institucionales?",
		"correct_answer": "Participa activamente y aplica lo aprendido en su trabajo.",
		"incorrect_answers": [
			"Asiste solo por obligación.",
			"Busca excusas para no asistir."
		],
		"description": "¡¡Correcto!! La disposición al aprendizaje continuo es una competencia fundamental."
	},
	{
		"id": 40,
		"question": "¿Cómo reacciona cuando debe trabajar con alguien con quien tiene diferencias personales?",
		"correct_answer": "Actúa con profesionalismo, enfocándose en los objetivos comunes.",
		"incorrect_answers": [
			"Evita colaborar con esa persona.",
			"Deja que sus diferencias afecten el trabajo."
		],
		"description": "¡¡Correcto!! El profesionalismo y la inteligencia emocional son esenciales para el trabajo colaborativo."
	},


	{
		"id": 41,
		"question": "¿Cómo responde ante un cambio repentino en las políticas internas de la organización?",
		"correct_answer": "Se adapta al cambio, busca entenderlo y ajusta su trabajo de manera proactiva.",
		"incorrect_answers": [
			"Se resiste y se queja del cambio.",
			"Ignora las nuevas políticas y sigue como antes."
		],
		"description": "¡¡Correcto!! La adaptabilidad al cambio es clave en entornos organizacionales dinámicos."
	},
	{
		"id": 42,
		"question": "¿Qué haría si descubre un error propio en un informe ya enviado?",
		"correct_answer": "Lo reporta de inmediato, asume la responsabilidad y propone una solución.",
		"incorrect_answers": [
			"Esconde el error esperando que nadie lo note.",
			"Culpa a otros por el error."
		],
		"description": "¡¡Correcto!! La responsabilidad y la ética profesional son fundamentales en el entorno laboral."
	},
	{
		"id": 43,
		"question": "¿Cómo contribuye al buen clima laboral en su equipo?",
		"correct_answer": "Fomenta el respeto, la colaboración y la comunicación abierta.",
		"incorrect_answers": [
			"Solo se preocupa por su trabajo individual.",
			"Evita interactuar con sus compañeros."
		],
		"description": "¡¡Correcto!! Promover un buen ambiente fortalece el trabajo en equipo y mejora los resultados."
	},
	{
		"id": 44,
		"question": "¿Qué actitud adopta frente a la retroalimentación negativa?",
		"correct_answer": "La recibe con apertura, reflexiona y toma acciones para mejorar.",
		"incorrect_answers": [
			"Se molesta y la toma como un ataque personal.",
			"La ignora y no cambia su comportamiento."
		],
		"description": "¡¡Correcto!! La receptividad a la retroalimentación demuestra madurez y disposición al desarrollo."
	},
	{
		"id": 45,
		"question": "¿Cómo actúa cuando debe asumir una tarea fuera de sus funciones habituales?",
		"correct_answer": "La asume con disposición, buscando aprender y aportar al equipo.",
		"incorrect_answers": [
			"Se niega porque no le corresponde.",
			"Lo hace de mala gana y sin compromiso."
		],
		"description": "¡¡Correcto!! La flexibilidad y el compromiso son comportamientos valorados en cualquier organización."
	},

	{
		"id": 46,
		"question": "¿Cómo gestiona su tiempo cuando tiene múltiples tareas con plazos similares?",
		"correct_answer": "Prioriza según urgencia e importancia, y organiza un plan de acción.",
		"incorrect_answers": [
			"Empieza con la tarea que le parece más fácil.",
			"Trabaja sin orden y espera terminar a tiempo."
		],
		"description": "¡¡Correcto!! La organización y la gestión del tiempo son esenciales para una alta productividad."
	},
	{
		"id": 47,
		"question": "¿Qué haría si un compañero de trabajo está teniendo dificultades constantes en sus funciones?",
		"correct_answer": "Le ofrece apoyo o lo remite al líder para buscar una solución conjunta.",
		"incorrect_answers": [
			"Evita involucrarse y deja que el compañero resuelva solo.",
			"Critica su desempeño frente al equipo."
		],
		"description": "¡¡Correcto!! La empatía y el trabajo colaborativo fortalecen la cohesión del equipo."
	},
	{
		"id": 48,
		"question": "¿Cómo maneja los desacuerdos con sus superiores jerárquicos?",
		"correct_answer": "Expresa su punto de vista con respeto y busca una solución consensuada.",
		"incorrect_answers": [
			"Evita expresar su desacuerdo para no tener problemas.",
			"Confronta de manera directa y poco diplomática."
		],
		"description": "¡¡Correcto!! La comunicación asertiva es clave para mantener relaciones laborales constructivas."
	},
	{
		"id": 49,
		"question": "¿Qué lo motiva a dar lo mejor en su trabajo diario?",
		"correct_answer": "El compromiso con los objetivos y la satisfacción de aportar valor.",
		"incorrect_answers": [
			"La presión de los superiores.",
			"Evitar sanciones o llamados de atención."
		],
		"description": "¡¡Correcto!! La motivación intrínseca promueve un mejor desempeño y compromiso."
	},
	{
		"id": 50,
		"question": "¿Cómo actúa si detecta una irregularidad en el cumplimiento de una norma interna?",
		"correct_answer": "La reporta a los canales adecuados, manteniendo la confidencialidad.",
		"incorrect_answers": [
			"No dice nada para no involucrarse.",
			"Comenta la situación con otros compañeros pero no actúa."
		],
		"description": "¡¡Correcto!! Actuar con ética y responsabilidad fortalece la integridad institucional."
	}
]

export const codigoUnicoDisciplinario = [

	{
		"id": 1,
		"question": "Teniendo en cuenta la Ley 734 de 2002 sobre los principios rectores de la Ley disciplinaria. A quien se atribuya una falta disciplinaria:",
		"correct_answer": "Se presume inocente mientras no se declare su responsabilidad en fallo ejecutoriado.",
		"incorrect_answers": [
			"Se presume culpable mientras no se compruebe lo contrario en fallo ejecutoriado.",
			"Se presume inocente porque la acción disciplinaria no aplica a funcionarios de planta en entidades públicas.",
			"Se presume culpable porque las faltas disciplinarias no requieren fallo ejecutoriado."
		],
		"description": "¡¡Correcto!! La Ley 734 establece la presunción de inocencia hasta que se demuestre lo contrario en fallo ejecutoriado."
	},
	{
		"id": 2,
		"question": "Durante la actuación disciplinaria, cuando no haya modo de eliminar toda duda razonable:",
		"correct_answer": "Se resolverá a favor del investigado.",
		"incorrect_answers": [
			"Se resolverá en contra del investigado.",
			"Se resolverá a favor del estado.",
			"Lo resolverá el contencioso administrativo."
		],
		"description": "¡¡Correcto!! En caso de duda razonable, la decisión se toma a favor del investigado."
	},
	{
		"id": 3,
		"question": "Teniendo en cuenta el Articulo 16 de la Ley 734 de 2002, la sanción disciplinaria tiene función:",
		"correct_answer": "Preventiva y correctiva.",
		"incorrect_answers": [
			"Asertiva y nominativa.",
			"De justicia y condenatoria.",
			"Ninguna de las anteriores."
		],
		"description": "¡¡Correcto!! La sanción disciplinaria busca prevenir conductas y corregirlas."
	},
	{
		"id": 4,
		"question": "El Articulo 28 de la Ley 734 de 2002, trata de las causales de exclusión de la responsabilidad disciplinaria, estableciendo un grupo de conductas que darían lugar a que una persona este exenta de la responsabilidad disciplinaria. ¿De las siguientes, que conducta no hace parte de este grupo?",
		"correct_answer": "Por provocación de terceros.",
		"incorrect_answers": [
			"Por fuerza mayor o caso fortuito.",
			"Por insuperable coacción ajena o miedo insuperable.",
			"Con la convicción errada e invencible de que su conducta no constituye falta disciplinaria."
		],
		"description": "¡¡Correcto!! La provocación de terceros no es causal de exclusión de responsabilidad disciplinaria."
	},
	{
		"id": 5,
		"question": "Teniendo en cuenta el Articulo 29 de la Ley 734 de 2002, ¿De las siguientes, cual no representa una causal de extinción de la acción disciplinaria?",
		"correct_answer": "La renuncia del cargo desempeñado por parte del investigado.",
		"incorrect_answers": [
			"La muerte del investigado.",
			"La prescripción de la acción disciplinaria.",
			"Todas las anteriores."
		],
		"description": "¡¡Correcto!! La renuncia al cargo no extingue la acción disciplinaria."
	},
	{
		"id": 6,
		"question": "¿El desistimiento del quejoso, puede extinguir la acción disciplinaria?",
		"correct_answer": "No podrá extinguir la acción disciplinaria.",
		"incorrect_answers": [
			"Si podrá extinguir la acción disciplinaria.",
			"La acción disciplinaria se congela hasta que el quejoso retome su denuncia.",
			"Solo podrá extinguirse si el quejoso lo solicita por escrito."
		],
		"description": "¡¡Correcto!! El desistimiento del quejoso no extingue la acción disciplinaria."
	},
	{
		"id": 7,
		"question": "Teniendo en cuenta el Articulo 132 de la Ley 1474 de 2011, ¿Cuál es el tiempo de caducidad de la acción disciplinaria?",
		"correct_answer": "Cinco (5) años desde la ocurrencia de la falta si no se ha proferido auto de apertura de investigación disciplinaria.",
		"incorrect_answers": [
			"Tres (3) años desde la ocurrencia de la falta si no se ha proferido auto de apertura de investigación disciplinaria.",
			"Dos (2) años desde la ocurrencia de la falta si no se ha proferido auto de apertura de investigación disciplinaria.",
			"Un (1) año desde la ocurrencia de la falta si no se ha proferido auto de apertura de investigación disciplinaria."
		],
		"description": "¡¡Correcto!! El término para caducidad es de cinco años según la Ley 1474 de 2011."
	},
	{
		"id": 8,
		"question": "¿A partir de qué momento comienza a correr el término para que una acción disciplinaria caduque en el caso de las faltas instantáneas?",
		"correct_answer": "Desde el día de su consumación.",
		"incorrect_answers": [
			"Desde el día en que se inicie la investigación.",
			"El plazo comienza a transcurrir desde el día en que el juez dicte la apertura del proceso.",
			"Desde el día en que se practiquen las pruebas."
		],
		"description": "¡¡Correcto!! En faltas instantáneas, el término corre desde la consumación de la falta."
	},
	{
		"id": 9,
		"question": "¿A partir de qué momento comienza a correr el término para que una acción disciplinaria caduque en el caso de las faltas omisivas?",
		"correct_answer": "Desde el momento que haya cesado el deber de actuar.",
		"incorrect_answers": [
			"Desde el día de su consumación.",
			"Desde el día en que se practiquen las pruebas.",
			"El plazo comienza a transcurrir desde el día en que el juez dicte la apertura del proceso."
		],
		"description": "¡¡Correcto!! Para faltas omisivas, el término comienza cuando cesa el deber de actuar."
	},
	{
		"id": 10,
		"question": "Teniendo en cuenta el Articulo 32 de la Ley 734 de 2002 ¿Cuál es el término de prescripción de la sanción disciplinaria?",
		"correct_answer": "El término de prescripción es de tres (3) años contados a partir de la ejecutoria del fallo.",
		"incorrect_answers": [
			"El término de prescripción es de cinco (5) años contados a partir de la ejecutoria del fallo.",
			"El término de prescripción es de un (1) años contados a partir de la ejecutoria del fallo.",
			"No existe término de prescripción después de la ejecutoria del fallo."
		],
		"description": "¡¡Correcto!! La sanción prescribe a los tres años desde la ejecutoria del fallo."
	},

	{
		"id": 11,
		"question": "Teniendo en cuenta el Articulo 42 de la Ley 734 de 2002 ¿De las siguientes cual no representa una clasificación de las faltas disciplinarias?",
		"correct_answer": "Grado uno.",
		"incorrect_answers": [
			"Gravísimas.",
			"Graves.",
			"Leves."
		],
		"description": "¡¡Correcto!! El artículo 42 no contempla 'Grado uno' como clasificación de faltas disciplinarias."
	},
	{
		"id": 12,
		"question": "El Articulo 44 de la Ley 734 de 2002 establece las clases de sanciones a las cuales el servidor público está sometido ¿De las siguientes cual no representa una de estas clases de sanciones?",
		"correct_answer": "Cárcel para las faltas gravísimas culposas.",
		"incorrect_answers": [
			"Suspensión en el ejercicio del cargo e inhabilidad especial para las faltas graves dolosas o gravísimas culposas.",
			"Suspensión para las faltas graves culposas.",
			"Multa para las faltas leves dolosas."
		],
		"description": "¡¡Correcto!! La Ley 734 no contempla cárcel como sanción disciplinaria."
	},
	{
		"id": 13,
		"question": "El Articulo 46 de la Ley 734 de 2002 que trata sobre el límite de las sanciones establece que la inhabilidad general será de diez a veinte años, la inhabilidad especial no será inferior a treinta días ni superior a doce meses, la suspensión:",
		"correct_answer": "No será inferior a un mes ni superior a doce meses.",
		"incorrect_answers": [
			"No será inferior a doce meses ni superior a veinticuatro meses.",
			"No será inferior a veinticuatro meses ni superior a treinta y seis meses.",
			"Sera de carácter permanente."
		],
		"description": "¡¡Correcto!! La suspensión tiene un límite mínimo de un mes y máximo de doce meses."
	},
	{
		"id": 14,
		"question": "Teniendo en cuenta lo establecido en el Articulo 46 de la Ley 734 de 2002 ¿Cuál es el límite en el caso de imponerse una multa como sanción disciplinaria?",
		"correct_answer": "La multa no podrá ser inferior al valor de diez ni superior al de ciento ochenta días del salario básico mensual devengado al momento de la comisión de la falta.",
		"incorrect_answers": [
			"La multa no podrá ser inferior al valor de diez salarios mínimos mensuales legales vigentes.",
			"La multa es de sesenta salarios mínimos legales mensuales vigentes a la fecha en que se cometió la falta.",
			"La multa es de treinta salarios mínimos legales mensuales vigentes a la fecha en que se cometió la falta."
		],
		"description": "¡¡Correcto!! El artículo establece ese rango para las multas disciplinarias."
	},
	{
		"id": 15,
		"question": "En el caso de los particulares, las faltas catalogadas como gravísimas son solo sancionables a titulo de:",
		"correct_answer": "Dolo o culpa.",
		"incorrect_answers": [
			"Delito sancionable.",
			"Delito en primer grado.",
			"Delito menor."
		],
		"description": "¡¡Correcto!! Las faltas gravísimas requieren dolo o culpa para ser sancionables."
	},
	{
		"id": 16,
		"question": "¿Cuál es el órgano competente para ejercer el régimen disciplinario especial para los notarios?",
		"correct_answer": "La Superintendencia de Notariado y Registro como órgano de control especial con todos sus requisitos y consecuencias sin perjuicio del control preferente que podrá ejercer la Procuraduría General de la Nación.",
		"incorrect_answers": [
			"La Contraloría General de la Republica como órgano de control especial con todos sus requisitos y consecuencias sin perjuicio del control preferente que podrá ejercer la Procuraduría General de la Nación.",
			"El Ministerio del Interior.",
			"La Contaduría General de la Nación como órgano de control especial con todos sus requisitos y consecuencias sin perjuicio del control preferente que podrá ejercer la Contraloría General de la Republica."
		],
		"description": "¡¡Correcto!! La Superintendencia de Notariado y Registro es la competente en estos casos."
	},
	{
		"id": 17,
		"question": "Teniendo en cuenta la oficiosidad y preferencia en la acción disciplinaria, las denuncias y quejas falsas o temerarias una vez ejecutoriada la decisión que así lo reconoce:",
		"correct_answer": "Originaran responsabilidad patrimonial en contra del denunciante o quejoso exigible ante las autoridades judiciales competentes.",
		"incorrect_answers": [
			"Originaran una nueva investigación contra el denunciado con el fin de establecer claridad en cuanto al fallo otorgado.",
			"No originara recurso de reposición alguno.",
			"Originaran responsabilidad fiscal en contra del denunciante o quejoso exigible ante las autoridades de exigencia fiscal."
		],
		"description": "¡¡Correcto!! Las denuncias falsas pueden generar responsabilidad patrimonial."
	},
	{
		"id": 18,
		"question": "El Articulo 70 de la Ley 734 de 2002, establece que el servidor público que tenga conocimiento de un hecho constitutivo de posible falta disciplinaria, si fuere competente, iniciara inmediatamente la acción correspondiente. ¿Qué debe hacer si no fuere competente?",
		"correct_answer": "Debe poner el hecho en conocimiento de la autoridad competente adjuntando las pruebas que tuviere.",
		"incorrect_answers": [
			"Se debe declarar impedido para actuar.",
			"No debe proceder en el caso y por ende, este queda cerrado.",
			"Realizar traslado inmediato a la Contraloría General de la Republica con el fin de que este organismo termine el proceso por ser competente."
		],
		"description": "¡¡Correcto!! Debe informar a la autoridad competente con las pruebas disponibles."
	},
	{
		"id": 19,
		"question": "¿Es procedente la acción disciplinaria contra funcionarios públicos retirados del servicio?",
		"correct_answer": "Ninguna de las anteriores.",
		"incorrect_answers": [
			"No es procedente.",
			"Si es procedente.",
			"Es optativa."
		],
		"description": "¡¡Correcto!! La acción disciplinaria generalmente no procede contra retirados salvo excepciones."
	},
	{
		"id": 20,
		"question": "El Articulo 73 de la Ley 734 de 2002, establece las causales por las cuales se puede dar por terminado y ordenar el archivo definitivo del proceso disciplinario. ¿De las siguientes, cual no es una de estas causales?",
		"correct_answer": "Que el Juez encargado se considere impedido para actuar por grado de consanguinidad.",
		"incorrect_answers": [
			"Que la actuación no podía iniciarse o proseguirse",
			"Que el investigado no haya cometido la falta.",
			"Que la conducta no esté prevista en la Ley como falta disciplinaria."
		],
		"description": "¡¡Correcto!! El impedimento del juez por consanguinidad no es causal de terminación del proceso disciplinario."
	},

	{
		"id": 21,
		"question": "El Articulo 74 de la Ley 734 de 2002, establece que la competencia en un proceso disciplinario se establece teniendo en cuenta la calidad del sujeto disciplinable, la naturaleza del hecho, el territorio donde se cometió la falta, el factor funcional y el de conexidad. ¿En los casos en que resulte incompatible la aplicación de los factores territorial y funcional, que factor se tendrá en cuenta para determinar la competencia?",
		"correct_answer": "Prevalecerá el factor funcional.",
		"incorrect_answers": [
			"Prevalece la calidad del sujeto disciplinable.",
			"Prevalece la naturaleza del hecho.",
			"Prevalece la gravedad de la acción que derivo la acción disciplinaria."
		],
		"description": "El factor funcional prevalece cuando hay incompatibilidad entre el factor territorial y funcional para definir competencia disciplinaria."
	},
	{
		"id": 22,
		"question": "Toda entidad u organismo del estado con excepción de las competencias de los Consejos Superior y Seccionales de la Judicatura, deberá organizar una unidad u oficina del más alto nivel, cuya estructura jerárquica permita preservar la garantía de la doble instancia, encargada de conocer y fallar en primera instancia los procesos disciplinarios que se adelanten contra sus servidores. Si no fuere posible garantizar la segunda instancia por razones de estructura organizacional conocerá del asunto la Procuraduría General de la Nación de acuerdo a sus competencias. En aquellas entidades u organismos donde existan regionales o seccionales, se podrán crear oficinas de control interno del más alto nivel con las competencias y para los fines anotados. Donde no se hayan implementado oficinas de control interno disciplinario, el competente será el superior inmediato del investigado, teniendo en cuenta esto. ¿A quién corresponderá la segunda instancia?",
		"correct_answer": "Al superior jerárquico de aquel.",
		"incorrect_answers": [
			"A la Procuraduría General de la Nación de acuerdo a sus competencias.",
			"A la Contraloría General de la Republica.",
			"Ninguna de las anteriores."
		],
		"description": "La segunda instancia corresponde al superior jerárquico del investigado cuando no existe oficina disciplinaria que garantice doble instancia."
	},
	{
		"id": 23,
		"question": "El Articulo 80 de la Ley 734 de 2002, establece que es competente en materia disciplinaria el funcionario del territorio donde se realizo la conducta. Cuando no puedan ser adelantados por las diferentes oficinas de control interno disciplinario, las faltas cometidas por los servidores públicos en el exterior y en el ejercicio de sus funciones, corresponderá a los funcionarios que de acuerdo con el factor subjetivo y objetivo, fueren competentes en el distrito capital. ¿Cuándo la falta o faltas fueren cometidas en diversos lugares del territorio nacional, cual será el funcionario competente en materia disciplinaria?",
		"correct_answer": "El funcionario que primero hubiese iniciado la investigación.",
		"incorrect_answers": [
			"A funcionarios competentes del distrito capital.",
			"El jefe inmediato de quien haya cometido la falta.",
			"Al delegado de la Contraloría General de la Republica."
		],
		"description": "En faltas cometidas en diversos lugares, el funcionario que inició primero la investigación será competente."
	},
	{
		"id": 24,
		"question": "¿En el caso de que un servidor público cometa varias faltas disciplinarias conexas, de qué forma de se investigaran y decidirán estas faltas?",
		"correct_answer": "Las faltas se investigaran y decidirán en un solo proceso.",
		"incorrect_answers": [
			"Las faltas se investigaran y decidirán individualmente por cada proceso.",
			"Las faltas se investigaran y decidirán teniendo en cuenta la mayor falta, esto quiere decir que las otras faltas quedan anuladas.",
			"Al cometer más de una falta, no se iniciara proceso disciplinario puesto que esto obedece a destitución inmediata del funcionario."
		],
		"description": "Las faltas conexas se investigan y deciden en un solo proceso para evitar duplicidad."
	},
	{
		"id": 25,
		"question": "Cuando varios servidores públicos de la misma entidad participen en la comisión de una falta o de varias que sean conexas. ¿De qué forma se investigaran y decidirán estas faltas?",
		"correct_answer": "Se investigaran y decidirán en el mismo proceso por quien tenga la competencia para juzgar al de mayor jerarquía.",
		"incorrect_answers": [
			"Se investigaran y decidirán en varios procesos individuales por cada uno de los competentes para juzgar a cada uno individualmente.",
			"Se investigaran y decidirán en un solo proceso por cada uno de los competentes para juzgar a cada uno individualmente.",
			"Ninguna de las anteriores."
		],
		"description": "Cuando hay varios servidores implicados, se tramita un solo proceso dirigido por el competente para juzgar al de mayor jerarquía."
	},
	{
		"id": 26,
		"question": "El Articulo 82 de la Ley 734 de 2002, establece que el funcionario que se considere incompetente para conocer de una actuación disciplinaria, deberá expresarla remitiendo el expediente en el estado en que se encuentre, en el menor tiempo posible, a quien por disposición legal tenga atribuida la competencia. Si el funcionario a quien se remite la actuación acepta la competencia, avocara el conocimiento del asunto; en caso contrario:",
		"correct_answer": "Remitirá el caso al superior común inmediato, con el objetivo de que este dirima el conflicto.",
		"incorrect_answers": [
			"El caso pasa a manos del funcionario que inicialmente se considero incompetente.",
			"El caso se considera cerrado por no haber competencia para juzgar.",
			"El caso pasa a manos de la Contraloría General de la Republica."
		],
		"description": "Si el funcionario a quien se remite la actuación no acepta la competencia, se remite al superior común para dirimir el conflicto."
	},
	{
		"id": 27,
		"question": "Teniendo en cuenta los sujetos procesales en la actuación disciplinaria, el Articulo 92 de la Ley 734 de 2002, establece los derechos del investigado como sujeto procesal. ¿De los siguientes cual no hace parte de uno de estos derechos?",
		"correct_answer": "Rehusarse a rendir descargos.",
		"incorrect_answers": [
			"Designar defensor.",
			"Obtener copias de la actuación.",
			"Impugnar y sustentar las decisiones cuando hubiere lugar a ello."
		],
		"description": "El investigado tiene derecho a defenderse, por lo que no puede rehusarse a rendir descargos."
	},
	{
		"id": 28,
		"question": "¿Se podrán utilizar medios técnicos para practicar pruebas o para el desarrollo de la actuación disciplinaria?",
		"correct_answer": "Si se podrán utilizar, siempre y cuando su uso no atente contra los derechos y garantías constitucionales.",
		"incorrect_answers": [
			"No se podrán utilizar puesto que su uso atenta contra los derechos y garantías constitucionales.",
			"Solo se pueden utilizar medios técnicos aprobados por la CCA, entidad internacional certificadora de calidad en pruebas de investigación.",
			"Solo se podrán utilizar cuando el demandante lo autorice."
		],
		"description": "El uso de medios técnicos está permitido siempre que no vulneren derechos constitucionales."
	},
	{
		"id": 29,
		"question": "El Articulo 99 de la Ley 734 de 2002, establece que cuando se perdiere o destruyere un expediente correspondiente a una actuación en curso, el funcionario competente deberá practicar todas las diligencias necesarias para lograr su reconstrucción. Para tal efecto se allegaran las copias recogidas previamente por escrito o en medio magnético y se solicitara la colaboración de los sujetos procesales, a fin de obtener copia de las diligencias o decisiones que se hubieren proferido; de igual forma se procederá respecto de las remitidas a las entidades oficiales. ¿Qué sucede cuando los procesos no pudieren ser reconstruidos?",
		"correct_answer": "Se debe reiniciar la actuación oficiosamente.",
		"incorrect_answers": [
			"El proceso se cierra por carecer de pruebas.",
			"Se continúa el proceso solo con las pruebas que quedan.",
			"Se tomaran pruebas de procesos anteriores que haya surtido el mismo investigado."
		],
		"description": "Si no es posible reconstruir el proceso, debe reiniciarse de oficio para garantizar el debido proceso."
	},
	{
		"id": 30,
		"question": "Las notificaciones de las decisiones disciplinarias pueden ser de forma personal, por estado, en estrados, por edicto o por conducta concluyente. Se notificaran personalmente los autos de apertura de indagación preliminar y de investigación disciplinaria, el pliego de cargos y el fallo. ¿En qué casos se puede realizar la notificación por medios de comunicación electrónicos como fax o correo electrónico?",
		"correct_answer": "Se pueden realizar si previamente y por escrito el investigado o su defensor, hubieren aceptado ser notificados de esta manera.",
		"incorrect_answers": [
			"En ningún caso de puede realizar la notificación utilizando estos medios.",
			"En los casos en que no fuere posible ubicar al investigado o su defensor.",
			"Ninguna de las anteriores."
		],
		"description": "Las notificaciones electrónicas son válidas si el investigado o defensor aceptan por escrito este medio."
	},

	{
		"id": 31,
		"question": "En lo que se refiere a las decisiones disciplinarias proceden cierta clase de recursos y formalidades que se interpondrán por escrito salvo disposición expresa en contrario. ¿De los siguientes, cual no hace parte de estos recursos?",
		"correct_answer": "Recursos de contravención.",
		"incorrect_answers": [
			"Queja.",
			"Recursos de reposición.",
			"Recursos de apelación."
		],
		"description": "Los recursos de contravención no hacen parte de los recursos que proceden contra decisiones disciplinarias."
	},
	{
		"id": 32,
		"question": "¿Existe recurso alguno contra las decisiones disciplinarias de simple trámite?",
		"correct_answer": "Contra las decisiones de simple trámite, no procede recurso alguno.",
		"incorrect_answers": [
			"Contra las decisiones de simple trámite, al igual que en todas proceden los recursos.",
			"Solo proceden los recursos de contravención.",
			"Solo proceden los recursos si el funcionario competente encargado del caso lo determina."
		],
		"description": "Contra las decisiones disciplinarias de simple trámite no procede recurso alguno."
	},
	{
		"id": 33,
		"question": "¿Una vez expedida la decisión disciplinaria, cual es el plazo para interponer los recursos de reposición y apelación?",
		"correct_answer": "Desde la fecha de expedición de la respectiva decisión, hasta el vencimiento de los tres (3) días siguientes a la última notificación.",
		"incorrect_answers": [
			"Desde la fecha de expedición de la respectiva decisión, hasta el vencimiento de los cinco (5) días siguientes a la última notificación.",
			"Desde la fecha de expedición de la respectiva decisión, hasta el vencimiento de los diez (10) días siguientes a la última notificación.",
			"Los recursos de reposición y apelación, pueden interponerse en cualquier tiempo."
		],
		"description": "El plazo para interponer recursos de reposición y apelación es de tres días después de la última notificación."
	},
	{
		"id": 34,
		"question": "Quien interponga recursos contra una decisión disciplinaria, deberá expresar por escrito las razones que lo sustentan ante el funcionario que profirió la correspondiente decisión; en caso contrario, se declararan desiertos. ¿Cuál es el término para efectuar la sustentación de estos recursos?",
		"correct_answer": "La sustentación de estos recursos deberá efectuarse dentro del mismo término que se tiene para impugnar.",
		"incorrect_answers": [
			"La sustentación de estos recursos puede efectuarse en cualquier tiempo.",
			"La sustentación de estos recursos deberá efectuarse dentro de los quince (15) días siguientes a la impugnación de los mismos.",
			"Ninguna de las anteriores."
		],
		"description": "La sustentación debe hacerse dentro del mismo plazo para interponer el recurso, o se declarará desierto."
	},
	{
		"id": 35,
		"question": "El recurso de apelación procede únicamente sobre ciertas decisiones disciplinarias. ¿De las siguientes, cual no hace parte de este grupo de decisiones?",
		"correct_answer": "Decisiones de contravención por vencimiento de plazos para fallar.",
		"incorrect_answers": [
			"Decisiones que niegan la práctica de pruebas solicitadas en los descargos.",
			"Decisiones de archivo.",
			"Fallo de primera instancia."
		],
		"description": "El recurso de apelación no procede contra decisiones de contravención por vencimiento de plazos."
	},
	{
		"id": 36,
		"question": "En cuanto a las decisiones disciplinarias ¿Cuál es el recurso que procede cuando el recurso de apelación es rechazado?",
		"correct_answer": "El recurso de queja.",
		"incorrect_answers": [
			"El recurso de contravención.",
			"El recurso de Reposición",
			"No procede recurso alguno."
		],
		"description": "Cuando el recurso de apelación es rechazado, procede el recurso de queja."
	},
	{
		"id": 37,
		"question": "¿En qué momento quedaran en firme las decisiones que resuelvan los recursos de apelación y queja, así como aquellas contra las cuales no procede recurso alguno?",
		"correct_answer": "Quedaran en firme el día que sean suscritas por el funcionario competente.",
		"incorrect_answers": [
			"Quedaran en firme cuando se interponga y se falle el recurso de contravención.",
			"Quedaran en firme cuando sean notificadas al interesado.",
			"Quedaran en firme 15 días después del fallo proferido por el funcionario competente."
		],
		"description": "Las decisiones quedan en firme el día que sean firmadas por el funcionario competente."
	},
	{
		"id": 38,
		"question": "¿Quién hubiere interpuesto un recurso en una decisión disciplinaria, podrá desistir del mismo?",
		"correct_answer": "Si podrá desistir del recurso, antes de que el funcionario competente lo decida.",
		"incorrect_answers": [
			"No podrá desistir del recurso porque este activa los términos una vez lo haya interpuesto.",
			"Esta decisión únicamente puede ser tomada por el funcionario competente encargado de fallar el caso.",
			"Si podrá desistir del recurso, únicamente interponiendo recurso de contravención."
		],
		"description": "El recurrente puede desistir del recurso antes de que se tome decisión sobre este."
	},
	{
		"id": 39,
		"question": "Los fallos sancionatorios y autos de archivo podrán ser revocados de oficio o a petición del sancionado, por el Procurador General de la Nación o por quien los profirió. El quejoso podrá solicitar la revocatoria del auto de archivo. Cuando se trate de faltas disciplinarias que constituyen violaciones al derecho internacional de los derechos humanos y del derecho internacional humanitario, procede la revocatoria del fallo absolutorio y del archivo de la actuación por parte del procurador general de la nación, de oficio o a petición del quejoso que tenga la calidad de víctima o perjudicado. ¿Cuál es el plazo para proceder a la revocatoria?",
		"correct_answer": "El plazo para proceder a la revocatoria, será de tres (3) meses calendario.",
		"incorrect_answers": [
			"El plazo para proceder a la revocatoria, será de dos (2) meses calendario.",
			"El plazo para proceder a la revocatoria, será de un (1) meses calendario.",
			"El plazo para proceder a la revocatoria, será de quince (15) días hábiles después de solicitada."
		],
		"description": "El plazo para solicitar la revocatoria es de tres meses calendario."
	},
	{
		"id": 40,
		"question": "Toda decisión interlocutoria y el fallo disciplinario deben fundarse en pruebas legalmente producidas y aportadas al proceso por petición de cualquier sujeto procesal o en forma oficiosa. ¿En este contexto, a quien corresponde la carga de la prueba?",
		"correct_answer": "La carga de la prueba corresponde al Estado.",
		"incorrect_answers": [
			"La carga de la prueba corresponde al acusado.",
			"La carga de la prueba corresponde al quejoso.",
			"La carga de la prueba únicamente corresponde al Procurador General de la Nación."
		],
		"description": "En procedimientos disciplinarios, la carga de la prueba recae en el Estado."
	},

	{
		"id": 41,
		"question": "Cuando en el proceso disciplinario existan testigos particulares y se muestren renuentes a comparecer ante una citación, podrá imponérsele una multa a favor del tesoro nacional, a menos que justifique satisfactoriamente su no comparecencia, dentro de los tres (3) días siguientes a la fecha señalada para la declaración. ¿Cuál es el tope al cual obedece dicha multa?",
		"correct_answer": "Podrá imponérsele multa hasta el equivalente a cincuenta salarios mínimos diarios vigentes en la época de ocurrencia del hecho.",
		"incorrect_answers": [
			"Podrá imponérsele multa hasta el equivalente a cien salarios mínimos diarios vigentes en la época de ocurrencia del hecho.",
			"Podrá imponérsele multa hasta el equivalente a ochenta salarios mínimos diarios vigentes en la época de ocurrencia del hecho.",
			"Podrá imponérsele multa hasta el equivalente a doscientos salarios mínimos diarios vigentes en la época de ocurrencia del hecho."
		],
		"description": "¡¡Correcto!! El tope de la multa es hasta 50 salarios mínimos diarios vigentes, según el artículo 135 de la Ley 734 de 2002."
	},
	{
		"id": 42,
		"question": "Después de impuesta la multa al testigo particular que se ha mostrado renuente a comparecer ante la citación. ¿El testigo sigue obligado a rendir la declaración?",
		"correct_answer": "El testigo seguirá obligado a rendir la declaración, para lo cual se fijara nueva fecha.",
		"incorrect_answers": [
			"El testigo no seguirá obligado a rendir la declaración siempre y cuando haya cancelado la multa impuesta.",
			"Se retira la declaración del testigo como prueba del proceso, puesto que ya se cancelo la multa impuesta.",
			"El testigo seguirá obligado a rendir la declaración en la fecha que el mismo elija."
		],
		"description": "¡¡Correcto!! La imposición de la multa no exime al testigo de declarar. Se fijará nueva fecha."
	},
	{
		"id": 43,
		"question": "¿La declaratoria de nulidad de la actuación disciplinaria puede invalidar las pruebas allegadas y practicadas legalmente?",
		"correct_answer": "No invalida las pruebas allegadas y practicadas legalmente.",
		"incorrect_answers": [
			"Si invalida las pruebas allegadas y practicadas legalmente.",
			"Se deben volver a recopilar las pruebas con el fin de buscar la coincidencia entre las pruebas anteriores.",
			"Estas pruebas solamente pueden ser invalidadas por el Procurador General de la Nación."
		],
		"description": "¡¡Correcto!! Según el artículo 145 de la Ley 734 de 2002, las pruebas legalmente practicadas no se invalidan por la nulidad."
	},
	{
		"id": 44,
		"question": "¿Cuál es el término que tiene el funcionario competente para resolver la solicitud de nulidad en la actuación disciplinaria?",
		"correct_answer": "La solicitud de nulidad se resolverá a más tardar dentro de los cinco (5) días siguientes a la fecha de su recibo.",
		"incorrect_answers": [
			"La solicitud de nulidad se resolverá a más tardar dentro de los diez (10) días siguientes a la fecha de su recibo.",
			"La solicitud de nulidad se resolverá a más tardar dentro de los quince (15) días siguientes a la fecha de su recibo.",
			"La solicitud de nulidad se resolverá a más tardar dentro del mes siguiente a la fecha de su recibo."
		],
		"description": "¡¡Correcto!! El artículo 146 establece un término de cinco días para resolver la solicitud de nulidad."
	},
	{
		"id": 45,
		"question": "¿Se podrá tener en cuenta el lapso de tiempo que el investigado permaneció suspendido provisionalmente si se le impone sanción de suspensión e inhabilidad o únicamente de suspensión?",
		"correct_answer": "Se podrá tener en cuenta el lapso de tiempo que el investigado permaneció suspendido provisionalmente.",
		"incorrect_answers": [
			"No se tendrá en cuenta este tiempo puesto que la sanción inicia en el momento que se impute por el funcionario competente.",
			"Se podrá tener en cuenta en una tercera parte del lapso de tiempo que el investigado permaneció suspendido provisionalmente.",
			"Se podrá tener en cuenta el lapso de tiempo que el investigado permaneció suspendido provisionalmente siempre y cuando el mismo cancele en dinero al estado este derecho."
		],
		"description": "¡¡Correcto!! Así lo establece el artículo 157 de la Ley 734 de 2002."
	},
	{
		"id": 46,
		"question": "¿Qué sucede con el investigado que previamente ha sido suspendido provisionalmente de su cargo cuando la investigación disciplinaria termine con fallo absolutorio o decisión de archivo o de terminación del proceso o cuando expire el término de suspensión sin que se hubiere proferido fallo de primera o única instancia?",
		"correct_answer": "El suspendido provisionalmente será reintegrado a su cargo o función y tendrá derecho al reconocimiento y pago de la remuneración dejada de percibir durante el periodo de suspensión.",
		"incorrect_answers": [
			"El suspendido provisionalmente será reintegrado a su cargo o función pero no tendrá derecho al reconocimiento y pago de la remuneración dejada de percibir durante el periodo de suspensión.",
			"El suspendido tendrá derecho al reconocimiento y pago de la remuneración dejada de percibir durante el periodo de suspensión pero no será reintegrado al cargo por sus antecedentes.",
			"El suspendido provisionalmente no será reintegrado a su cargo o función y no tendrá derecho al reconocimiento y pago de la remuneración dejada de percibir durante el periodo de suspensión"
		],
		"description": "¡¡Correcto!! Según el artículo 158 de la Ley 734 de 2002."
	},
	{
		"id": 47,
		"question": "¿Hasta qué punto, el recurso de apelación otorga competencia al funcionario de segunda instancia?",
		"correct_answer": "Otorga competencia para revisar únicamente los aspectos impugnados y aquellos otros que resulten inescindiblemente vinculados al objeto de impugnación.",
		"incorrect_answers": [
			"Otorga competencia para revisar todo el proceso desde la fecha de apertura.",
			"Otorga únicamente competencia para revisar la sanción impuesta.",
			"Ninguna de las anteriores."
		],
		"description": "¡¡Correcto!! Así lo establece el artículo 171 de la Ley 734 de 2002."
	},
	{
		"id": 48,
		"question": "¿De los siguientes funcionarios, cuáles no son competentes para ejecutar la sanción impuesta a un funcionario público?",
		"correct_answer": "Los veedores públicos, respecto de los funcionarios adscritos a las asambleas departamentales.",
		"incorrect_answers": [
			"El presidente de la República respecto de los Gobernadores y los alcaldes de distrito.",
			"La procuraduría General de la Nación, respecto del particular que ejerza funciones públicas.",
			"El nominador respecto de los servidores públicos de libre nombramiento y remoción o de carrera."
		],
		"description": "¡¡Correcto!! Los veedores públicos no tienen competencia para sancionar a funcionarios de las asambleas departamentales."
	},
	{
		"id": 49,
		"question": "¿Una vez ejecutoriado el fallo sancionatorio, qué plazo tiene el funcionario ejecutor para hacerlo efectivo?",
		"correct_answer": "El plazo es de diez días contados a partir de la fecha de recibo de la respectiva comunicación.",
		"incorrect_answers": [
			"El plazo es de quince días contados a partir de la fecha de recibo de la respectiva comunicación.",
			"El plazo es de veinte días contados a partir de la fecha de recibo de la respectiva comunicación.",
			"El plazo es de un mes contado a partir de la fecha de recibo de la respectiva comunicación."
		],
		"description": "¡¡Correcto!! Según el artículo 172 de la Ley 734 de 2002."
	},
	{
		"id": 50,
		"question": "¿Qué sucede y en qué forma se hará efectivo el cobro de la multa, si el funcionario se encuentra vinculado a otra entidad oficial?",
		"correct_answer": "Se oficiará directamente a la nueva entidad donde esté vinculado el funcionario, para que el cobro se efectúe por descuento.",
		"incorrect_answers": [
			"No podrá realizarse el cobro y responderá la entidad donde se cometió la falta disciplinaria.",
			"El cobro se efectuará por jurisdicción coactiva.",
			"Se oficiará directamente a la Dirección de Impuestos y Aduanas Nacionales para que realice el cobro."
		],
		"description": "¡¡Correcto!! Así lo indica el artículo 173 de la Ley 734 de 2002."
	},
	{
		id: 51,
		question: '¿Para los casos en que la suspensión en el cargo del funcionario haya sido convertida en multa, de qué forma se efectuará el cobro?',
		correct_answer: 'El cobro se efectuará por jurisdicción coactiva.',
		incorrect_answers: [
			'Se oficiará directamente a la Dirección de Impuestos y Aduanas Nacionales para que realice el cobro.',
			'No podrá efectuarse el cobro porque las suspensiones no pueden ser convertidas en multa.',
			'El cobro lo realizará directamente la Contraloría General de la República.'
		],
		description: '¡¡¡Correcto!!!! El artículo 46 de la Ley 734 de 2002 establece que el cobro de la multa, cuando sustituye una sanción de suspensión, se efectúa por jurisdicción coactiva.'
	},
	{
		id: 52,
		question: '¿Para los casos en que el sancionado fuere un particular que deba cancelar la multa a favor del tesoro nacional, qué plazo tiene para realizarlo?',
		correct_answer: 'Debe cancelar la multa dentro de los treinta días siguientes a la ejecutoria de la decisión que la impuso y presentar la constancia de dicho pago a la Procuraduría General.',
		incorrect_answers: [
			'Debe cancelar la multa dentro de los quince días siguientes a la ejecutoria de la decisión que la impuso y presentar la constancia de dicho pago a la Procuraduría General.',
			'Debe cancelar la multa dentro de los diez días siguientes a la ejecutoria de la decisión que la impuso y presentar la constancia de dicho pago a la Procuraduría General.',
			'Debe cancelar la multa dentro de los dos meses siguientes a la ejecutoria de la decisión que la impuso y presentar la constancia de dicho pago a la Procuraduría General.'
		],
		description: '¡¡¡Correcto!!!! Según el artículo 47 de la Ley 734 de 2002, el particular tiene treinta días para pagar la multa e informar a la Procuraduría.'
	},
	{
		id: 53,
		question: '¿Cuándo el particular sancionado disciplinariamente no hubiere cancelado la multa dentro del plazo señalado, a quién corresponde realizar el cobro respectivo?',
		correct_answer: 'Corresponde a la jurisdicción coactiva del Ministerio de Hacienda adelantar el trámite procesal para hacerla efectiva.',
		incorrect_answers: [
			'Corresponde directamente a la Procuraduría General de la Nación.',
			'Corresponde a la jurisdicción coactiva de la Contaduría General de la República adelantar el trámite procesal para hacerla efectiva.',
			'Ninguna de las anteriores.'
		],
		description: '¡¡¡Correcto!!!! El artículo 47 establece que si el particular no paga, el cobro lo realiza el Ministerio de Hacienda por jurisdicción coactiva.'
	},
	{
		id: 54,
		question: '¿Cuál es la Entidad encargada de llevar el Registro de las sanciones penales y disciplinarias, las inhabilidades que se deriven de las relaciones contractuales con el Estado, de los fallos con responsabilidad fiscal y de las decisiones de pérdida de investidura para efectos de la expedición del certificado de antecedentes?',
		correct_answer: 'Estas sanciones deberán ser registradas en la División de Registro y Control y Correspondencia de la Procuraduría General de la Nación.',
		incorrect_answers: [
			'Estas sanciones deberán ser registradas ante la Contaduría General a fin de establecer un récord de los sancionados.',
			'Estas sanciones deberán ser registradas ante el Archivo General de la República pero no se reportarán en el certificado de antecedentes del sancionado por haberse pagado o cumplido la sanción.',
			'No se registrará ante ningún ente con el fin de salvaguardar el buen nombre del funcionario al pagar o cumplir la sanción imputada.'
		],
		description: '¡¡¡Correcto!!!! Es la Procuraduría General de la Nación quien lleva este registro para la expedición del certificado de antecedentes.'
	},
	{
		id: 55,
		question: '¿Con qué fecha de antigüedad, se deben reportar las anotaciones de providencias ejecutoriadas dentro de la certificación de antecedentes?',
		correct_answer: 'Estas certificaciones, deberán contener las anotaciones de providencias ejecutoriadas dentro de los cinco (5) años anteriores a su expedición.',
		incorrect_answers: [
			'Estas certificaciones, deberán contener las anotaciones de providencias ejecutoriadas dentro de los dos (2) años anteriores a su expedición.',
			'Estas certificaciones, deberán contener las anotaciones de providencias ejecutoriadas dentro de los tres (3) años anteriores a su expedición.',
			'Estas certificaciones, deberán contener las anotaciones de providencias ejecutoriadas dentro de un (1) año anterior a su expedición.'
		],
		description: '¡¡¡Correcto!!!! La certificación de antecedentes reporta sanciones ejecutoriadas en los últimos cinco años, según el artículo 174 de la Ley 734 de 2002.'
	},
	{
		id: 56,
		question: '¿Las sanciones o inhabilidades que se encuentren vigentes en el presente, deberán estar consignadas en la certificación de antecedentes?',
		correct_answer: 'En todos los casos, debe estar consignadas en la certificación de antecedentes.',
		incorrect_answers: [
			'No deben estar consignados en la certificación de antecedentes con el fin de evitar perjudicar al funcionario en un proceso de selección en el que este participando.',
			'Solo deben estar consignados si el funcionario que emitió la sanción así lo exija de oficio.',
			'La certificación de antecedentes puede ser manipulada por el interesado y de esta forma puede eliminar estos reportes.'
		],
		description: '¡¡¡Correcto!!!! Las sanciones o inhabilidades vigentes deben aparecer en la certificación, conforme al artículo 174 de la Ley 734 de 2002.'
	},
	{
		id: 57,
		question: '¿Después de aplicar el procedimiento verbal en casos de flagrancia o confesión, a qué ente deberá informar de manera inmediata la Oficina de Control Interno Disciplinario?',
		correct_answer: 'Debe informar de manera inmediata por el medio más eficaz, al funcionario competente de la Procuraduría General de la Nación o Personerías Distritales o Municipales según la competencia.',
		incorrect_answers: [
			'Debe informar de manera inmediata por el medio más eficaz, al funcionario competente de la Contraloría General de la República.',
			'Debe informar de manera inmediata por el medio más eficaz, al funcionario competente de jerarquía superior dentro de la entidad donde se cometió la falta.',
			'Debe informar de manera inmediata por el medio más eficaz, al funcionario competente de la Presidencia de la República encargado de las oficinas de Control Interno a nivel nacional.'
		],
		description: '¡¡¡Correcto!!!! Según la Ley 734 de 2002, la información debe dirigirse al ente disciplinario competente, que puede ser la Procuraduría o las Personerías.'
	},
	{
		id: 58,
		question: 'La acción disciplinaria contra los funcionarios judiciales corresponde al Estado y es ejercida por:',
		correct_answer: 'Por la sala Jurisdiccional disciplinaria del Consejo Superior de la Judicatura y por las salas disciplinarias de los Consejos Seccionales.',
		incorrect_answers: [
			'Normalmente por la Oficina de Control Interno de la Entidad afectada.',
			'Directamente por el Procurador General de la Nación.',
			'Directamente por el Contralor General de la República.'
		],
		description: '¡¡¡Correcto!!!! La Ley 734 de 2002 establece que la Sala Jurisdiccional Disciplinaria del Consejo Superior de la Judicatura y sus seccionales ejercen esta función.'
	},
	{
		id: 59,
		question: 'En el contexto del Código Único Disciplinario, ¿cuál de los siguientes NO es un sujeto procesal?',
		correct_answer: 'Asistentes al juicio.',
		incorrect_answers: [
			'El defensor del disciplinado.',
			'El sujeto disciplinado.',
			'El Ministerio Público.'
		],
		description: '¡¡¡Correcto!!!! Los asistentes al juicio no son considerados sujetos procesales en el marco del proceso disciplinario.'
	},
	{
		id: 60,
		question: 'En las salas disciplinarias duales de los Consejos Seccionales, ¿por quién serán resueltos los impedimentos y recusaciones?',
		correct_answer: 'Serán resueltos por otro magistrado, junto con el conjuez o conjueces a que hubiere lugar.',
		incorrect_answers: [
			'Serán resueltos normalmente por la Oficina de Control Interno de la Entidad afectada.',
			'Serán resueltos directamente por el Procurador General de la Nación.',
			'Serán resueltos directamente por el Contralor General de la República.'
		],
		description: '¡¡¡Correcto!!!! El artículo 198 de la Ley 734 de 2002 regula la forma como deben resolverse impedimentos y recusaciones en estas salas.'
	},
	{
		id: 61,
		question: '¿Cuál es el término de la investigación disciplinaria contra funcionarios de la Rama Judicial?',
		correct_answer: 'El término es de seis (6) meses prorrogable a tres (3) meses más cuando en la misma actuación se investiguen varias faltas o se trate de dos o más inculpados.',
		incorrect_answers: [
			'El término es de dos (2) meses prorrogable a un (1) mes más cuando en la misma actuación se investiguen varias faltas o se trate de dos o más inculpados.',
			'No hay término determinado, todo el que sea necesario con el fin de terminar la etapa de investigación.',
			'El término es de un (1) mes prorrogable a un (1) mes más cuando en la misma actuación se investiguen varias faltas o se trate de dos o más inculpados.'
		],
		description: '¡¡¡Correcto!!!! Según el artículo 187 de la Ley 734 de 2002, este es el plazo para la etapa investigativa.'
	},
	{
		id: 62,
		question: '¿A quién corresponde juzgar en primera instancia a los Jueces de Paz?',
		correct_answer: 'Corresponde exclusivamente a la sala Jurisdiccional disciplinaria de los Consejos Seccionales de la Judicatura.',
		incorrect_answers: [
			'Corresponde directamente a la Oficina de Control Interno de la Entidad afectada.',
			'Corresponde directamente al Procurador General de la Nación.',
			'Corresponde directamente al Contralor General de la República.'
		],
		description: '¡¡¡Correcto!!!! La competencia para juzgar disciplinariamente a los Jueces de Paz en primera instancia la tiene la Sala Jurisdiccional de los Consejos Seccionales.'
	}
]

export const razonamiento_logico_nivel_basico = [

	{
		"id": 1,
		"question": "Si todos los gatos son mamíferos y algunos mamíferos son felinos, ¿cuál de las siguientes afirmaciones es necesariamente verdadera?",
		"correct_answer": "Algunos gatos pueden ser felinos.",
		"incorrect_answers": [
			"Todos los felinos son gatos.",
			"Ningún gato es felino.",
			"Ningún felino es mamífero."
		],
		"description": "¡¡¡Correcto!!!! Algunos gatos pueden ser felinos, ya que los gatos son una subcategoría dentro de los felinos."
	},
	{
		"id": 2,
		"question": "Pedro es más alto que Juan. Juan es más alto que Luis. ¿Quién es el más bajo?",
		"correct_answer": "Luis",
		"incorrect_answers": [
			"Pedro",
			"Juan",
			"No se puede determinar"
		],
		"description": "¡¡¡Correcto!!!! Luis es el más bajo según el orden de altura."
	},
	{
		"id": 3,
		"question": "Si hoy es martes, ¿qué día será tres días después de mañana?",
		"correct_answer": "Sábado",
		"incorrect_answers": [
			"Viernes",
			"Domingo",
			"Lunes"
		],
		"description": "¡¡¡Correcto!!!! Mañana es miércoles, tres días después es sábado."
	},
	{
		"id": 4,
		"question": "Completa la serie: 2, 4, 8, 16, ...",
		"correct_answer": "32",
		"incorrect_answers": [
			"24",
			"30",
			"36"
		],
		"description": "¡¡¡Correcto!!!! Cada número se duplica: 2×2=4, 4×2=8, etc."
	},
	{
		"id": 5,
		"question": "¿Qué número completa la serie? 1, 1, 2, 3, 5, 8, ...",
		"correct_answer": "13",
		"incorrect_answers": [
			"11",
			"10",
			"12"
		],
		"description": "¡¡¡Correcto!!!! Es la sucesión de Fibonacci: 5+8=13."
	},
	{
		"id": 6,
		"question": "Si un tren va de norte a sur, ¿en qué dirección va el humo?",
		"correct_answer": "No hay humo, es un tren eléctrico.",
		"incorrect_answers": [
			"Hacia el norte",
			"Hacia el sur",
			"Hacia el este"
		],
		"description": "¡¡¡Correcto!!!! Un tren eléctrico no produce humo."
	},
	{
		"id": 7,
		"question": "Ana es la hermana del hijo único de mi madre. ¿Qué relación tiene Ana conmigo?",
		"correct_answer": "Es mi hija",
		"incorrect_answers": [
			"Es mi hermana",
			"Es mi tía",
			"Es mi prima"
		],
		"description": "¡¡¡Correcto!!!! El hijo único de mi madre soy yo, entonces Ana es mi hija."
	},
	{
		"id": 8,
		"question": "Si algunos A son B, y todos los B son C, entonces:",
		"correct_answer": "Algunos A pueden ser C.",
		"incorrect_answers": [
			"Ningún A es C.",
			"Todos los A son C.",
			"Todos los C son A."
		],
		"description": "¡¡¡Correcto!!!! Si algunos A son B, y todos los B son C, entonces esos A también pueden ser C."
	},
	{
		"id": 9,
		"question": "Un agricultor tiene 17 ovejas. Todas menos 9 se escapan. ¿Cuántas ovejas quedan?",
		"correct_answer": "9",
		"incorrect_answers": [
			"8",
			"17",
			"0"
		],
		"description": "¡¡¡Correcto!!!! Todas menos 9 se escapan, por lo tanto quedan 9."
	},
	{
		"id": 10,
		"question": "Si en una carrera adelantas al segundo, ¿en qué posición quedas?",
		"correct_answer": "Segundo",
		"incorrect_answers": [
			"Primero",
			"Tercero",
			"Cuarto"
		],
		"description": "¡¡¡Correcto!!!! Si adelantas al segundo, tú ocupas su lugar, o sea el segundo."
	},

	{
		"id": 11,
		"question": "En una familia hay una madre, un padre y tres hijos. Cada hijo tiene una hermana. ¿Cuántas personas hay en total?",
		"correct_answer": "6",
		"incorrect_answers": [
			"5",
			"7",
			"8"
		],
		"description": "¡¡¡Correcto!!!! Los tres hijos comparten una misma hermana. En total: madre, padre, 3 hijos y 1 hija = 6 personas."
	},
	{
		"id": 12,
		"question": "Completa la serie: 5, 10, 20, 40, ...",
		"correct_answer": "80",
		"incorrect_answers": [
			"90",
			"100",
			"85"
		],
		"description": "¡¡¡Correcto!!!! La secuencia multiplica por 2: 5×2=10, 10×2=20, etc."
	},
	{
		"id": 13,
		"question": "Laura tiene 3 hijos. Cada hijo tiene 2 hermanas. ¿Cuántos hijos tiene Laura?",
		"correct_answer": "5",
		"incorrect_answers": [
			"6",
			"3",
			"4"
		],
		"description": "¡¡¡Correcto!!!! Los 3 hijos tienen las mismas 2 hermanas, en total: 3 hijos + 2 hijas = 5 hijos."
	},
	{
		"id": 14,
		"question": "Si un lápiz cuesta $100 y una goma cuesta $200 más que el lápiz, ¿cuánto cuesta la goma?",
		"correct_answer": "$300",
		"incorrect_answers": [
			"$200",
			"$100",
			"$400"
		],
		"description": "¡¡¡Correcto!!!! El lápiz cuesta $100. La goma cuesta $100 + $200 = $300."
	},
	{
		"id": 15,
		"question": "El doble de un número es 14. ¿Cuál es el número?",
		"correct_answer": "7",
		"incorrect_answers": [
			"14",
			"28",
			"6"
		],
		"description": "¡¡¡Correcto!!!! 7×2=14."
	},
	{
		"id": 16,
		"question": "Si 4 personas construyen una pared en 6 horas, ¿cuántas horas tomaría a 2 personas hacer lo mismo?",
		"correct_answer": "12",
		"incorrect_answers": [
			"6",
			"10",
			"8"
		],
		"description": "¡¡¡Correcto!!!! A menor cantidad de personas, más tiempo. Se duplica el tiempo: 6×2 = 12 horas."
	},
	{
		"id": 17,
		"question": "Si 3 gatos cazan 3 ratones en 3 minutos, ¿cuántos gatos se necesitan para cazar 100 ratones en 100 minutos?",
		"correct_answer": "3",
		"incorrect_answers": [
			"100",
			"33",
			"9"
		],
		"description": "¡¡¡Correcto!!!! Cada gato caza un ratón cada 3 minutos. En 100 minutos caza aproximadamente 33 ratones. 3 gatos cazan 99, suficiente para 100."
	},
	{
		"id": 18,
		"question": "Un hombre vende un reloj por $60. Lo compró por $40. ¿Cuál fue su ganancia?",
		"correct_answer": "$20",
		"incorrect_answers": [
			"$60",
			"$40",
			"$10"
		],
		"description": "¡¡¡Correcto!!!! Vendió por $60 y lo compró por $40. Ganancia: $60 - $40 = $20."
	},
	{
		"id": 19,
		"question": "Si en un cuarto hay 3 interruptores y solo uno enciende una bombilla en otro cuarto, ¿cómo puedes saber cuál es sin ver la bombilla más de una vez?",
		"correct_answer": "Enciende uno, espera, apágalo, enciende otro y ve la bombilla.",
		"incorrect_answers": [
			"Prueba uno por uno dejando todos encendidos.",
			"Pide ayuda a alguien afuera.",
			"No se puede saber."
		],
		"description": "¡¡¡Correcto!!!! Así sabrás cuál fue el encendido (luz), cuál el apagado (calor), y cuál no se usó (frío y apagada)."
	},
	{
		"id": 20,
		"question": "En un mes hay 30 días. ¿Cuántos tienen 28 días?",
		"correct_answer": "Todos",
		"incorrect_answers": [
			"Uno",
			"Dos",
			"Febrero solamente"
		],
		"description": "¡¡¡Correcto!!!! Todos los meses tienen al menos 28 días."
	},

	{
		"id": 21,
		"question": "Si hoy es lunes, ¿qué día será dentro de 10 días?",
		"correct_answer": "Jueves",
		"incorrect_answers": ["Viernes", "Miércoles", "Martes"],
		"description": "¡¡¡Correcto!!!! Diez días después de lunes es jueves: lunes + 10 = jueves."
	},
	{
		"id": 22,
		"question": "Un tren eléctrico va de norte a sur. ¿Hacia dónde va el humo?",
		"correct_answer": "No hay humo, es eléctrico",
		"incorrect_answers": ["Al norte", "Al sur", "Al este"],
		"description": "¡¡¡Correcto!!!! Un tren eléctrico no produce humo."
	},
	{
		"id": 23,
		"question": "Si dos relojes marcan horas diferentes y uno se adelanta 5 minutos por hora, ¿cuál marcará primero el mediodía si ambos estaban bien a las 8:00 a. m.?",
		"correct_answer": "El que se adelanta 5 minutos por hora",
		"incorrect_answers": ["El que se atrasa", "Ambos al mismo tiempo", "Ninguno"],
		"description": "¡¡¡Correcto!!!! El reloj que se adelanta llegará antes a las 12:00."
	},
	{
		"id": 24,
		"question": "¿Cuál número completa la serie? 3, 6, 9, 12, ...",
		"correct_answer": "15",
		"incorrect_answers": ["18", "21", "13"],
		"description": "¡¡¡Correcto!!!! La secuencia aumenta de 3 en 3."
	},
	{
		"id": 25,
		"question": "¿Cuál palabra no encaja en el grupo: manzana, pera, plátano, zanahoria?",
		"correct_answer": "Zanahoria",
		"incorrect_answers": ["Pera", "Plátano", "Manzana"],
		"description": "¡¡¡Correcto!!!! La zanahoria es una verdura, las otras son frutas."
	},
	{
		"id": 26,
		"question": "Tengo cuatro patas por la mañana, dos al mediodía y tres por la noche. ¿Qué soy?",
		"correct_answer": "El ser humano",
		"incorrect_answers": ["Un robot", "Un animal", "Una mesa"],
		"description": "¡¡¡Correcto!!!! Es un acertijo clásico: gatea de niño, camina de adulto y usa bastón de anciano."
	},
	{
		"id": 27,
		"question": "Si un año tiene 12 meses, ¿cuántos segundos tiene un año?",
		"correct_answer": "12 (enero 2°, febrero 2°, etc.)",
		"incorrect_answers": ["31,536,000", "365", "60"],
		"description": "¡¡¡Correcto!!!! Es un juego de palabras: hay un segundo en cada mes (2° día)."
	},
	{
		"id": 28,
		"question": "Si 1=5, 2=25, 3=325, 4=4325, entonces 5=?",
		"correct_answer": "1",
		"incorrect_answers": ["54325", "5325", "0"],
		"description": "¡¡¡Correcto!!!! Es un acertijo lógico. Según el patrón, 1=5, y 5=1."
	},
	{
		"id": 29,
		"question": "Una camisa cuesta $20. Si la compras con un billete de $50, ¿cuánto te devuelven?",
		"correct_answer": "$30",
		"incorrect_answers": ["$20", "$10", "$40"],
		"description": "¡¡¡Correcto!!!! $50 - $20 = $30 de cambio."
	},
	{
		"id": 30,
		"question": "En un campo hay 10 pájaros y disparas a uno. ¿Cuántos quedan?",
		"correct_answer": "Ninguno",
		"incorrect_answers": ["9", "1", "10"],
		"description": "¡¡¡Correcto!!!! Al disparar, los demás pájaros vuelan. No queda ninguno."
	},

	{
		"id": 31,
		"question": "Si todos los gatos son animales y algunos animales son perros, ¿pueden algunos gatos ser perros?",
		"correct_answer": "No",
		"incorrect_answers": ["Sí", "A veces", "No se sabe"],
		"description": "¡¡¡Correcto!!!! Los gatos y los perros son categorías distintas dentro de los animales."
	},
	{
		"id": 32,
		"question": "Completa la serie: 2, 4, 8, 16, ...",
		"correct_answer": "32",
		"incorrect_answers": ["24", "30", "64"],
		"description": "¡¡¡Correcto!!!! Cada número se multiplica por 2."
	},
	{
		"id": 33,
		"question": "Si tres personas construyen una casa en tres días, ¿cuánto tardarán seis personas en construir la misma casa?",
		"correct_answer": "3 días",
		"incorrect_answers": ["1.5 días", "6 días", "9 días"],
		"description": "¡¡¡Correcto!!!! La cantidad de personas no afecta el tiempo si ya está definido para ese trabajo."
	},
	{
		"id": 34,
		"question": "Un hombre tiene 4 hijas y cada hija tiene un hermano. ¿Cuántos hijos tiene en total?",
		"correct_answer": "5",
		"incorrect_answers": ["4", "8", "9"],
		"description": "¡¡¡Correcto!!!! Todas las hijas comparten un mismo hermano."
	},
	{
		"id": 35,
		"question": "Si hoy es miércoles, ¿qué día será dentro de 15 días?",
		"correct_answer": "Miércoles",
		"incorrect_answers": ["Martes", "Jueves", "Viernes"],
		"description": "¡¡¡Correcto!!!! 15 días equivalen a 2 semanas y 1 día, por lo que es miércoles."
	},
	{
		"id": 36,
		"question": "Encuentra el número que falta en la secuencia: 5, 10, 20, 40, ...",
		"correct_answer": "80",
		"incorrect_answers": ["60", "50", "100"],
		"description": "¡¡¡Correcto!!!! Cada número es el doble del anterior."
	},
	{
		"id": 37,
		"question": "¿Cuál de las siguientes palabras no es sinónimo de 'feliz'?",
		"correct_answer": "Triste",
		"incorrect_answers": ["Contento", "Alegre", "Satisfecho"],
		"description": "¡¡¡Correcto!!!! 'Triste' es antónimo, no sinónimo de 'feliz'."
	},
	{
		"id": 38,
		"question": "Si una docena de huevos cuesta $24, ¿cuánto cuesta media docena?",
		"correct_answer": "$12",
		"incorrect_answers": ["$6", "$24", "$18"],
		"description": "¡¡¡Correcto!!!! Media docena es la mitad de una docena, por eso cuesta la mitad."
	},
	{
		"id": 39,
		"question": "Si un triángulo tiene dos lados iguales y el tercer lado mide 10, ¿cuál podría ser la medida de los lados iguales?",
		"correct_answer": "Menor que 10",
		"incorrect_answers": ["Igual a 10", "Mayor que 10", "Cualquiera"],
		"description": "¡¡¡Correcto!!!! En un triángulo, la suma de dos lados debe ser mayor que el tercero."
	},
	{
		"id": 40,
		"question": "Si a un número le sumas 7 y el resultado es 15, ¿cuál es el número?",
		"correct_answer": "8",
		"incorrect_answers": ["7", "15", "22"],
		"description": "¡¡¡Correcto!!!! x + 7 = 15, entonces x = 8."
	},

	{
		"id": 41,
		"question": "Si Pedro es mayor que Juan y Juan es mayor que Luis, ¿quién es el menor?",
		"correct_answer": "Luis",
		"incorrect_answers": ["Pedro", "Juan", "No se sabe"],
		"description": "¡¡¡Correcto!!!! Luis es el menor porque es menor que Juan y Pedro."
	},
	{
		"id": 42,
		"question": "¿Qué número continúa en la serie? 1, 3, 6, 10, 15, ...",
		"correct_answer": "21",
		"incorrect_answers": ["20", "18", "25"],
		"description": "¡¡¡Correcto!!!! La serie suma números consecutivos: 1, 2, 3, 4, 5..."
	},
	{
		"id": 43,
		"question": "Si 5 máquinas producen 5 productos en 5 minutos, ¿cuánto tardarán 100 máquinas en producir 100 productos?",
		"correct_answer": "5 minutos",
		"incorrect_answers": ["20 minutos", "100 minutos", "50 minutos"],
		"description": "¡¡¡Correcto!!!! La tasa de producción es constante, por eso 100 máquinas tardan lo mismo."
	},
	{
		"id": 44,
		"question": "En una carrera, adelantas al segundo lugar. ¿En qué posición quedas?",
		"correct_answer": "Segundo lugar",
		"incorrect_answers": ["Primero", "Tercer lugar", "Cuarto lugar"],
		"description": "¡¡¡Correcto!!!! Adelantar al segundo te pone en segundo lugar."
	},
	{
		"id": 45,
		"question": "¿Cuál palabra es el antónimo de 'ausente'?",
		"correct_answer": "Presente",
		"incorrect_answers": ["Lejos", "Olvidado", "Ausente"],
		"description": "¡¡¡Correcto!!!! 'Presente' es lo opuesto a 'ausente'."
	},
	{
		"id": 46,
		"question": "Si hoy es jueves, ¿qué día será dentro de 9 días?",
		"correct_answer": "Sábado",
		"incorrect_answers": ["Viernes", "Domingo", "Lunes"],
		"description": "¡¡¡Correcto!!!! 9 días después de jueves es sábado."
	},
	{
		"id": 47,
		"question": "¿Qué figura no pertenece al grupo: círculo, triángulo, cuadrado, bola?",
		"correct_answer": "Bola",
		"incorrect_answers": ["Círculo", "Triángulo", "Cuadrado"],
		"description": "¡¡¡Correcto!!!! La bola es tridimensional, las demás son figuras planas."
	},
	{
		"id": 48,
		"question": "Completa la serie: 2, 6, 12, 20, 30, ...",
		"correct_answer": "42",
		"incorrect_answers": ["40", "50", "36"],
		"description": "¡¡¡Correcto!!!! Los números son la suma de números consecutivos: 1+1, 2+4, 3+9..."
	},
	{
		"id": 49,
		"question": "Si un coche recorre 60 km en 1 hora, ¿cuánto recorrerá en 4 horas a la misma velocidad?",
		"correct_answer": "240 km",
		"incorrect_answers": ["60 km", "120 km", "300 km"],
		"description": "¡¡¡Correcto!!!! 60 km/h × 4 h = 240 km."
	},
	{
		"id": 50,
		"question": "Si A es mayor que B y B es mayor que C, ¿qué relación es correcta?",
		"correct_answer": "A es mayor que C",
		"incorrect_answers": ["C es mayor que A", "B es mayor que A", "C es mayor que B"],
		"description": "¡¡¡Correcto!!!! Si A > B y B > C, entonces A > C."
	}

]

export const comprension_lectora = [

	{
		"id": 1,
		"question": "Juan leyó un libro de 200 páginas en 4 días. Si leyó la misma cantidad cada día, ¿cuántas páginas leyó por día?",
		"correct_answer": "50 páginas",
		"incorrect_answers": ["40 páginas", "60 páginas", "25 páginas"],
		"description": "¡Correcto! Juan dividió equitativamente las 200 páginas entre los 4 días: 200 / 4 = 50."
	},
	{
		"id": 2,
		"question": "Ana va al supermercado y compra pan, leche y huevos. ¿Qué tipo de texto podría ser este?",
		"correct_answer": "Narración",
		"incorrect_answers": ["Descripción", "Instructivo", "Argumentativo"],
		"description": "¡Correcto! Es un texto narrativo porque cuenta una acción cotidiana."
	},
	{
		"id": 3,
		"question": "¿Cuál es la idea principal del siguiente enunciado? 'Los árboles no solo embellecen el paisaje, también producen oxígeno y ofrecen sombra.'",
		"correct_answer": "Los árboles son importantes por varias razones.",
		"incorrect_answers": ["Los árboles solo sirven para hacer sombra.", "El oxígeno es lo más importante.", "Los árboles no son útiles."],
		"description": "¡Muy bien! El texto menciona varias razones que hacen valiosos a los árboles."
	},
	{
		"id": 4,
		"question": "Si Pedro tiene frío, ¿qué es lo más probable que haga?",
		"correct_answer": "Se pondrá un abrigo.",
		"incorrect_answers": ["Tomará helado.", "Encenderá el ventilador.", "Saldrá descalzo."],
		"description": "¡Correcto! Al tener frío, lo más lógico es que se abrigue."
	},
	{
		"id": 5,
		"question": "En el texto: 'El gato dormía plácidamente sobre el sofá', ¿qué palabra indica cómo dormía el gato?",
		"correct_answer": "Plácidamente",
		"incorrect_answers": ["Gato", "Sofá", "Dormía"],
		"description": "¡Exacto! 'Plácidamente' describe la manera en que dormía el gato."
	},
	{
		"id": 6,
		"question": "Luis olvidó su sombrilla y empezó a llover. ¿Qué sucederá probablemente?",
		"correct_answer": "Luis se mojará.",
		"incorrect_answers": ["Luis estará seco.", "Luis encenderá la chimenea.", "Luis irá a la playa."],
		"description": "¡Correcto! Si no tiene sombrilla y llueve, lo más lógico es que se moje."
	},
	{
		"id": 7,
		"question": "¿Qué significa la palabra 'enorme' en la frase: 'El perro de Marta es enorme'?",
		"correct_answer": "Muy grande",
		"incorrect_answers": ["Muy pequeño", "Muy fuerte", "Muy simpático"],
		"description": "¡Muy bien! 'Enorme' significa algo de gran tamaño."
	},
	{
		"id": 8,
		"question": "Si un texto comienza con: 'Érase una vez...', ¿qué tipo de texto es?",
		"correct_answer": "Un cuento",
		"incorrect_answers": ["Una carta", "Un poema", "Una noticia"],
		"description": "¡Correcto! Esa frase es típica del inicio de los cuentos."
	},
	{
		"id": 9,
		"question": "En el texto: 'María preparó una torta para el cumpleaños de su hermano', ¿qué relación hay entre María y el hermano?",
		"correct_answer": "María es su hermana",
		"incorrect_answers": ["María es su profesora", "María es su vecina", "María es su amiga"],
		"description": "¡Exacto! El texto indica que María es la hermana del cumpleañero."
	},
	{
		"id": 10,
		"question": "¿Cuál es el propósito de un instructivo?",
		"correct_answer": "Explicar cómo hacer algo paso a paso.",
		"incorrect_answers": ["Contar una historia", "Describir un paisaje", "Dar una opinión"],
		"description": "¡Correcto! Un instructivo sirve para enseñar cómo se hace algo."
	},

	{
		"id": 11,
		"question": "Si el texto dice: 'Laura tomó su mochila, se despidió y salió al colegio', ¿qué estaba haciendo Laura?",
		"correct_answer": "Yendo al colegio",
		"incorrect_answers": ["Saliendo de vacaciones", "Visitando a su abuela", "Yendo al supermercado"],
		"description": "¡Correcto! El texto claramente indica que se dirige al colegio."
	},
	{
		"id": 12,
		"question": "¿Qué tipo de texto es una receta de cocina?",
		"correct_answer": "Instructivo",
		"incorrect_answers": ["Narrativo", "Argumentativo", "Descriptivo"],
		"description": "¡Muy bien! Las recetas indican pasos a seguir, por eso son instructivas."
	},
	{
		"id": 13,
		"question": "En el texto: 'Carlos gritó de emoción al ver la sorpresa', ¿cómo se sentía Carlos?",
		"correct_answer": "Feliz",
		"incorrect_answers": ["Enojado", "Triste", "Cansado"],
		"description": "¡Correcto! Gritar de emoción indica alegría."
	},
	{
		"id": 14,
		"question": "Si un texto dice: 'El león es un animal salvaje que vive en África', ¿qué tipo de texto es?",
		"correct_answer": "Informativo",
		"incorrect_answers": ["Narrativo", "Poético", "Publicitario"],
		"description": "¡Exacto! El texto ofrece información sobre el león, por lo tanto es informativo."
	},
	{
		"id": 15,
		"question": "¿Qué palabra del siguiente enunciado es un verbo? 'María corre en el parque cada tarde.'",
		"correct_answer": "Corre",
		"incorrect_answers": ["Parque", "Tarde", "Cada"],
		"description": "¡Bien hecho! 'Corre' indica una acción, por eso es un verbo."
	},
	{
		"id": 16,
		"question": "Pedro escribió una carta para su amigo. ¿Cuál es el propósito del texto?",
		"correct_answer": "Comunicar algo a su amigo",
		"incorrect_answers": ["Explicar una receta", "Dar una noticia", "Describir un lugar"],
		"description": "¡Correcto! El propósito de una carta es comunicarse con alguien."
	},
	{
		"id": 17,
		"question": "¿Qué significa la palabra 'rápidamente' en el texto: 'El niño corrió rápidamente al ver el autobús'?",
		"correct_answer": "Con mucha velocidad",
		"incorrect_answers": ["Con tristeza", "Con hambre", "Con miedo"],
		"description": "¡Muy bien! 'Rápidamente' indica que lo hizo con velocidad."
	},
	{
		"id": 18,
		"question": "¿Qué se puede inferir si un niño está mojado y lleva un paraguas roto?",
		"correct_answer": "Llovía y el paraguas no lo protegió",
		"incorrect_answers": ["El niño se bañó", "El niño está jugando con agua", "Está lloviendo dentro de casa"],
		"description": "¡Exacto! El texto sugiere que llovía y el paraguas no fue útil."
	},
	{
		"id": 19,
		"question": "¿Cuál es la idea principal del siguiente texto? 'Las tortugas son reptiles que caminan despacio y viven muchos años.'",
		"correct_answer": "Las tortugas son reptiles especiales.",
		"incorrect_answers": ["Las tortugas son lentas y aburridas.", "Las tortugas nadan mucho.", "Las tortugas no comen."],
		"description": "¡Correcto! El texto destaca características de las tortugas como reptiles."
	},
	{
		"id": 20,
		"question": "En el texto: 'Marta estaba tan cansada que se quedó dormida con la luz encendida', ¿qué causó que Marta se durmiera con la luz encendida?",
		"correct_answer": "Estaba muy cansada",
		"incorrect_answers": ["No tenía sueño", "Tenía miedo", "Estaba viendo televisión"],
		"description": "¡Muy bien! El cansancio fue la causa de que se durmiera sin apagar la luz."
	},
	{
		"id": 21,
		"question": "Si un texto dice: 'Ana olvidó su sombrilla y se mojó al salir del colegio', ¿qué se puede inferir?",
		"correct_answer": "Llovía cuando Ana salió",
		"incorrect_answers": ["Era de noche", "Estaba haciendo sol", "Hacía mucho viento"],
		"description": "¡Correcto! El hecho de mojarse al salir indica que llovía."
	},
	{
		"id": 22,
		"question": "¿Qué tipo de texto es un cuento infantil?",
		"correct_answer": "Narrativo",
		"incorrect_answers": ["Instructivo", "Argumentativo", "Expositivo"],
		"description": "¡Muy bien! Un cuento relata hechos o historias, por eso es narrativo."
	},
	{
		"id": 23,
		"question": "En el texto: 'Luis se tapó los oídos por el fuerte ruido', ¿qué causó la acción de Luis?",
		"correct_answer": "El ruido era muy fuerte",
		"incorrect_answers": ["Tenía sueño", "Le dolía la cabeza", "Estaba resfriado"],
		"description": "¡Correcto! El texto menciona claramente que el ruido fue la causa."
	},
	{
		"id": 24,
		"question": "¿Cuál es el propósito de una noticia en el periódico?",
		"correct_answer": "Informar sobre un hecho",
		"incorrect_answers": ["Contar una historia ficticia", "Dar consejos de cocina", "Hacer reír al lector"],
		"description": "¡Exacto! El objetivo de una noticia es informar al lector."
	},
	{
		"id": 25,
		"question": "¿Qué personaje principal suele tener un cuento?",
		"correct_answer": "Un protagonista",
		"incorrect_answers": ["Un narrador", "Un espectador", "Un autor"],
		"description": "¡Bien! El personaje central del cuento se llama protagonista."
	},
	{
		"id": 26,
		"question": "¿Cuál es el sinónimo de la palabra 'contento' en el texto: 'Juan estaba muy contento con su regalo'?",
		"correct_answer": "Feliz",
		"incorrect_answers": ["Triste", "Enojado", "Cansado"],
		"description": "¡Correcto! 'Contento' es sinónimo de 'feliz'."
	},
	{
		"id": 27,
		"question": "¿Qué emoción expresa el texto: 'Lucía lloró al ver su juguete roto'?",
		"correct_answer": "Tristeza",
		"incorrect_answers": ["Felicidad", "Enojo", "Sorpresa"],
		"description": "¡Muy bien! Llorar por un juguete roto indica tristeza."
	},
	{
		"id": 28,
		"question": "¿Qué se puede deducir si alguien lee cada noche antes de dormir?",
		"correct_answer": "Tiene el hábito de leer",
		"incorrect_answers": ["No le gusta leer", "Solo lee los fines de semana", "Solo lee por obligación"],
		"description": "¡Correcto! Leer todas las noches indica un hábito."
	},
	{
		"id": 29,
		"question": "Si el texto dice: 'El gato trepó por el árbol para escapar del perro', ¿qué motivó al gato?",
		"correct_answer": "Escapar del perro",
		"incorrect_answers": ["Dormir en el árbol", "Cazar un pájaro", "Buscar sombra"],
		"description": "¡Exacto! El gato trepó porque huía del perro."
	},
	{
		"id": 30,
		"question": "¿Qué palabra es un adjetivo en el enunciado: 'La flor roja está en la mesa'?",
		"correct_answer": "Roja",
		"incorrect_answers": ["Flor", "Mesa", "Está"],
		"description": "¡Correcto! 'Roja' describe a la flor, por lo tanto es un adjetivo."
	},
	{
		"id": 31,
		"question": "Si un texto dice: 'Pedro corrió al autobús pero no lo alcanzó', ¿qué ocurrió?",
		"correct_answer": "Pedro perdió el autobús",
		"incorrect_answers": ["Pedro se subió al autobús", "Pedro iba conduciendo", "El autobús estaba dañado"],
		"description": "¡Correcto! El hecho de que no lo alcanzó indica que lo perdió."
	},
	{
		"id": 32,
		"question": "¿Qué se puede inferir del texto: 'María usó paraguas todo el día'?",
		"correct_answer": "Estuvo lloviendo",
		"incorrect_answers": ["Hacía mucho calor", "Era de noche", "Se le perdió el paraguas"],
		"description": "¡Correcto! El uso del paraguas indica que llovía."
	},
	{
		"id": 33,
		"question": "En el texto: 'El niño cerró la puerta con fuerza', ¿qué palabra indica cómo cerró la puerta?",
		"correct_answer": "Con fuerza",
		"incorrect_answers": ["Cerró", "Puerta", "Niño"],
		"description": "¡Bien! 'Con fuerza' es el complemento que indica cómo se realizó la acción."
	},
	{
		"id": 34,
		"question": "¿Qué parte del texto contiene la idea principal?",
		"correct_answer": "El primer o último párrafo, generalmente",
		"incorrect_answers": ["Los títulos de los libros", "Las notas al pie", "El nombre del autor"],
		"description": "¡Correcto! La idea principal suele encontrarse al inicio o al final del texto."
	},
	{
		"id": 35,
		"question": "Si un artículo de opinión habla de los beneficios del deporte, ¿qué tipo de texto es?",
		"correct_answer": "Argumentativo",
		"incorrect_answers": ["Narrativo", "Descriptivo", "Instructivo"],
		"description": "¡Exacto! Los textos que defienden ideas con razones son argumentativos."
	},
	{
		"id": 36,
		"question": "¿Cuál es el antónimo de 'feliz' en el texto: 'No estaba feliz con los resultados'?",
		"correct_answer": "Triste",
		"incorrect_answers": ["Rápido", "Grande", "Claro"],
		"description": "¡Correcto! 'Triste' es lo opuesto a 'feliz'."
	},
	{
		"id": 37,
		"question": "Si un texto dice: 'Claudia estudió mucho y aprobó el examen', ¿cuál fue la causa del resultado?",
		"correct_answer": "Estudió mucho",
		"incorrect_answers": ["Tenía suerte", "El examen fue fácil", "La profesora la ayudó"],
		"description": "¡Muy bien! El texto indica que aprobar fue resultado de estudiar mucho."
	},
	{
		"id": 38,
		"question": "¿Qué intención tiene un instructivo?",
		"correct_answer": "Explicar cómo hacer algo",
		"incorrect_answers": ["Contar una historia", "Convencer al lector", "Expresar sentimientos"],
		"description": "¡Correcto! Un instructivo tiene una finalidad práctica."
	},
	{
		"id": 39,
		"question": "¿Cuál es la idea principal del texto: 'La bicicleta es un medio de transporte económico y ecológico'?",
		"correct_answer": "La bicicleta tiene beneficios",
		"incorrect_answers": ["La bicicleta es peligrosa", "La bicicleta es costosa", "La bicicleta es antigua"],
		"description": "¡Bien! El texto resalta las ventajas de usar bicicleta."
	},
	{
		"id": 40,
		"question": "En el texto: 'Al escuchar el timbre, los estudiantes salieron al recreo', ¿qué indica la palabra 'al escuchar'?",
		"correct_answer": "El momento en que ocurrió la acción",
		"incorrect_answers": ["La causa del recreo", "La identidad de los estudiantes", "El lugar del recreo"],
		"description": "¡Correcto! 'Al escuchar' indica cuándo sucedió la acción de salir."
	},
	{
		"id": 41,
		"question": "Si un texto dice: 'Lucía se puso el abrigo y salió apresurada', ¿qué se puede deducir?",
		"correct_answer": "Hacía frío o tenía prisa",
		"incorrect_answers": ["Estaba en vacaciones", "Iba a una fiesta", "Se iba a dormir"],
		"description": "¡Correcto! El uso del abrigo y la prisa sugieren frío o urgencia."
	},
	{
		"id": 42,
		"question": "¿Qué tipo de texto es una receta de cocina?",
		"correct_answer": "Instructivo",
		"incorrect_answers": ["Narrativo", "Descriptivo", "Argumentativo"],
		"description": "¡Exacto! Las recetas dan instrucciones paso a paso."
	},
	{
		"id": 43,
		"question": "En el texto: 'Después del almuerzo, Juan leyó un libro en la sala', ¿cuál fue la acción principal?",
		"correct_answer": "Juan leyó un libro",
		"incorrect_answers": ["Juan cocinó", "Juan durmió", "Juan salió de casa"],
		"description": "¡Correcto! Esa fue la acción realizada después del almuerzo."
	},
	{
		"id": 44,
		"question": "¿Qué indica el conector 'aunque' en una oración?",
		"correct_answer": "Contraste u oposición",
		"incorrect_answers": ["Suma de ideas", "Causa y efecto", "Secuencia temporal"],
		"description": "¡Bien! 'Aunque' introduce una idea opuesta o contraria."
	},
	{
		"id": 45,
		"question": "Si un texto dice: 'No quedó ni una silla vacía en el teatro', ¿qué se puede inferir?",
		"correct_answer": "El teatro estaba lleno",
		"incorrect_answers": ["No hubo función", "Se vendieron pocas entradas", "Nadie asistió"],
		"description": "¡Correcto! Significa que todas las sillas estaban ocupadas."
	},
	{
		"id": 46,
		"question": "¿Cuál es la idea principal de un texto que habla sobre los efectos del tabaquismo en la salud?",
		"correct_answer": "El tabaquismo es perjudicial para la salud",
		"incorrect_answers": ["El tabaco es legal", "Fumar es una decisión personal", "El cigarrillo es costoso"],
		"description": "¡Muy bien! El texto se centra en los efectos negativos."
	},
	{
		"id": 47,
		"question": "¿Qué función cumple un título en un texto?",
		"correct_answer": "Presentar el tema principal",
		"incorrect_answers": ["Repetir el contenido", "Confundir al lector", "Mostrar opiniones"],
		"description": "¡Correcto! El título resume o anticipa el contenido."
	},
	{
		"id": 48,
		"question": "¿Qué indica el uso del tiempo verbal pasado en un texto?",
		"correct_answer": "Que la acción ya ocurrió",
		"incorrect_answers": ["Que ocurrirá en el futuro", "Que ocurre ahora", "Que nunca sucederá"],
		"description": "¡Exacto! El pasado narra hechos ya sucedidos."
	},
	{
		"id": 49,
		"question": "En el texto: 'Camila disfrutó del concierto desde la primera fila', ¿qué emoción expresa?",
		"correct_answer": "Alegría o satisfacción",
		"incorrect_answers": ["Tristeza", "Miedo", "Confusión"],
		"description": "¡Correcto! 'Disfrutó' indica una emoción positiva."
	},
	{
		"id": 50,
		"question": "Si el texto dice: 'Los estudiantes rindieron el examen final el viernes', ¿qué indica la palabra 'final'?",
		"correct_answer": "Que fue el último examen del periodo",
		"incorrect_answers": ["Que el examen estaba incompleto", "Que era fácil", "Que era opcional"],
		"description": "¡Bien! 'Final' indica el cierre de un ciclo académico."
	}


]

export const razonamiento_numerico = [
	{
		"id": 1,
		"question": "¿Cuál es el siguiente número en la serie: 2, 4, 6, 8, ___?",
		"correct_answer": "10",
		"incorrect_answers": ["11", "12", "9"],
		"description": "Serie de números pares consecutivos. El siguiente número es 10."
	},
	{
		"id": 2,
		"question": "Si tienes 3 manzanas y compras 2 más, ¿cuántas manzanas tienes en total?",
		"correct_answer": "5",
		"incorrect_answers": ["6", "4", "3"],
		"description": "3 + 2 = 5 manzanas en total."
	},
	{
		"id": 3,
		"question": "Un tren sale a las 3:00 p.m. y tarda 2 horas en llegar. ¿A qué hora llega?",
		"correct_answer": "5:00 p.m.",
		"incorrect_answers": ["4:00 p.m.", "6:00 p.m.", "3:30 p.m."],
		"description": "3:00 p.m. + 2 horas = 5:00 p.m."
	},
	{
		"id": 4,
		"question": "¿Cuál es el resultado de 9 x 3?",
		"correct_answer": "27",
		"incorrect_answers": ["26", "30", "24"],
		"description": "9 multiplicado por 3 es 27."
	},
	{
		"id": 5,
		"question": "¿Cuánto es la mitad de 20?",
		"correct_answer": "10",
		"incorrect_answers": ["5", "15", "12"],
		"description": "La mitad de 20 es 10."
	},
	{
		"id": 6,
		"question": "Pedro tiene $100 y gasta $45. ¿Cuánto dinero le queda?",
		"correct_answer": "55",
		"incorrect_answers": ["65", "50", "45"],
		"description": "100 - 45 = 55."
	},
	{
		"id": 7,
		"question": "Si un kilo de arroz cuesta $3.000, ¿cuánto cuestan 3 kilos?",
		"correct_answer": "9.000",
		"incorrect_answers": ["6.000", "3.300", "10.000"],
		"description": "3.000 x 3 = 9.000."
	},
	{
		"id": 8,
		"question": "¿Qué número falta en la secuencia: 1, 3, 5, 7, ___?",
		"correct_answer": "9",
		"incorrect_answers": ["8", "10", "11"],
		"description": "Secuencia de números impares. El siguiente es 9."
	},
	{
		"id": 9,
		"question": "Si 5 cuadernos cuestan $25.000, ¿cuánto cuesta cada cuaderno?",
		"correct_answer": "5.000",
		"incorrect_answers": ["4.000", "6.000", "5.500"],
		"description": "25.000 dividido entre 5 es igual a 5.000."
	},
	{
		"id": 10,
		"question": "¿Qué número es el doble de 12?",
		"correct_answer": "24",
		"incorrect_answers": ["22", "20", "26"],
		"description": "El doble de 12 es 24."
	},
	{
		"id": 11,
		"question": "Si una caja contiene 24 chocolates y se reparten equitativamente entre 6 personas, ¿cuántos chocolates recibe cada una?",
		"correct_answer": "4",
		"incorrect_answers": ["3", "5", "6"],
		"description": "24 dividido entre 6 es igual a 4."
	},
	{
		"id": 12,
		"question": "¿Cuál es el valor de X en la ecuación: 3X + 5 = 20?",
		"correct_answer": "5",
		"incorrect_answers": ["3", "4", "6"],
		"description": "Restamos 5: 20 - 5 = 15. Luego dividimos: 15 ÷ 3 = 5."
	},
	{
		"id": 13,
		"question": "Si un auto recorre 90 kilómetros en 1 hora y media, ¿cuál es su velocidad promedio en km/h?",
		"correct_answer": "60",
		"incorrect_answers": ["45", "75", "90"],
		"description": "Velocidad = distancia ÷ tiempo. 90 ÷ 1.5 = 60 km/h."
	},
	{
		"id": 14,
		"question": "¿Cuál es el número que completa la serie? 1, 4, 9, 16, 25, ___",
		"correct_answer": "36",
		"incorrect_answers": ["30", "32", "34"],
		"description": "Es una secuencia de cuadrados: 1², 2², 3², ..., por tanto, 6² = 36."
	},
	{
		"id": 15,
		"question": "Si una pizza se divide en 8 porciones iguales y se comen 3, ¿qué fracción representa lo que se ha comido?",
		"correct_answer": "3/8",
		"incorrect_answers": ["5/8", "3/5", "1/4"],
		"description": "Se han comido 3 porciones de 8 totales, es decir, 3/8."
	},
	{
		"id": 16,
		"question": "Un tren sale de la estación A a las 3:00 p.m. y llega a la estación B a las 5:30 p.m. ¿Cuánto duró el viaje?",
		"correct_answer": "2 horas y 30 minutos",
		"incorrect_answers": ["2 horas", "3 horas", "1 hora y 30 minutos"],
		"description": "De 3:00 p.m. a 5:30 p.m. hay 2 horas y 30 minutos."
	},
	{
		"id": 17,
		"question": "Si el 20% de un número es 50, ¿cuál es el número?",
		"correct_answer": "250",
		"incorrect_answers": ["100", "200", "150"],
		"description": "Si 20% es 50, entonces el 100% es 50 ÷ 0.20 = 250."
	},
	{
		"id": 18,
		"question": "¿Cuál es el resultado de multiplicar 0.5 por 0.2?",
		"correct_answer": "0.1",
		"incorrect_answers": ["0.7", "0.02", "1.0"],
		"description": "0.5 × 0.2 = 0.1."
	},
	{
		"id": 19,
		"question": "Si un rectángulo tiene un perímetro de 24 cm y su largo mide 7 cm, ¿cuánto mide su ancho?",
		"correct_answer": "5 cm",
		"incorrect_answers": ["6 cm", "4 cm", "3 cm"],
		"description": "Perímetro = 2(largo + ancho) → 24 = 2(7 + ancho) → 12 = 7 + ancho → ancho = 5 cm."
	},
	{
		"id": 20,
		"question": "Si compro 3 manzanas a $2 cada una y pago con un billete de $10, ¿cuánto dinero me deben devolver?",
		"correct_answer": "$4",
		"incorrect_answers": ["$5", "$6", "$3"],
		"description": "3 manzanas × $2 = $6. $10 - $6 = $4 de cambio."
	},
	{
		"id": 21,
		"question": "Si una camisa cuesta $80 y está en descuento del 25%, ¿cuál es el precio final?",
		"correct_answer": "$60",
		"incorrect_answers": ["$20", "$65", "$55"],
		"description": "25% de $80 es $20, entonces $80 - $20 = $60."
	},
	{
		"id": 22,
		"question": "¿Cuál es el siguiente número en la secuencia: 2, 4, 8, 16, ...?",
		"correct_answer": "32",
		"incorrect_answers": ["24", "30", "36"],
		"description": "Cada número se multiplica por 2 para obtener el siguiente."
	},
	{
		"id": 23,
		"question": "Si un automóvil recorre 150 kilómetros en 3 horas, ¿cuál es su velocidad promedio?",
		"correct_answer": "50 km/h",
		"incorrect_answers": ["45 km/h", "55 km/h", "60 km/h"],
		"description": "Velocidad = distancia / tiempo = 150 km / 3 h = 50 km/h."
	},
	{
		"id": 24,
		"question": "En un aula hay 20 estudiantes, y 12 son mujeres. ¿Qué porcentaje son mujeres?",
		"correct_answer": "60%",
		"incorrect_answers": ["50%", "55%", "65%"],
		"description": "Porcentaje = (12 / 20) × 100 = 60%."
	},
	{
		"id": 25,
		"question": "Si sumas los ángulos interiores de un triángulo, ¿cuánto obtienes?",
		"correct_answer": "180 grados",
		"incorrect_answers": ["90 grados", "360 grados", "270 grados"],
	},
	{
		"id": 26,
		"question": "¿Cuánto es 15% de 200?",
		"correct_answer": "30",
		"incorrect_answers": ["25", "35", "40"],
		"description": "15% de 200 = (15/100) × 200 = 30."
	},
	{
		"id": 27,
		"question": "Si multiplicas un número por 0, ¿cuál es el resultado?",
		"correct_answer": "0",
		"incorrect_answers": ["El mismo número", "1", "No definido"],
		"description": "Cualquier número multiplicado por 0 es 0."
	},
	{
		"id": 28,
		"question": "¿Cuál es la mitad de 90?",
		"correct_answer": "45",
		"incorrect_answers": ["40", "35", "55"],
		"description": "La mitad de 90 es 90 ÷ 2 = 45."
	},
	{
		"id": 29,
		"question": "Si tienes 3 manzanas y compras 4 más, ¿cuántas manzanas tienes?",
		"correct_answer": "7",
		"incorrect_answers": ["6", "5", "8"],
		"description": "3 + 4 = 7 manzanas."
	},
	{
		"id": 30,
		"question": "¿Cuál es el resultado de 9 x 6?",
		"correct_answer": "54",
		"incorrect_answers": ["45", "56", "64"],
		"description": "9 multiplicado por 6 es 54."
	},
	{
		"id": 31,
		"question": "Si un rectángulo tiene lados de 5 cm y 8 cm, ¿cuál es su perímetro?",
		"correct_answer": "26 cm",
		"incorrect_answers": ["40 cm", "20 cm", "13 cm"],
		"description": "Perímetro = 2 × (5 + 8) = 2 × 13 = 26 cm."
	},
	{
		"id": 32,
		"question": "Si un número es incrementado en 25%, ¿a cuánto equivale este aumento en forma decimal?",
		"correct_answer": "0.25",
		"incorrect_answers": ["0.50", "0.75", "1.25"],
		"description": "25% como decimal es 25 ÷ 100 = 0.25."
	},
	{
		"id": 33,
		"question": "¿Cuál es el resultado de dividir 81 entre 9?",
		"correct_answer": "9",
		"incorrect_answers": ["8", "7", "10"],
		"description": "81 ÷ 9 = 9."
	},
	{
		"id": 34,
		"question": "Si restas 15 de 100, ¿cuál es el resultado?",
		"correct_answer": "85",
		"incorrect_answers": ["95", "75", "65"],
		"description": "100 - 15 = 85."
	},
	{
		"id": 35,
		"question": "Un triángulo tiene lados de 3 cm, 4 cm y 5 cm. ¿Cuál es su perímetro?",
		"correct_answer": "12 cm",
		"incorrect_answers": ["10 cm", "14 cm", "15 cm"],
		"description": "Perímetro = 3 + 4 + 5 = 12 cm."
	},
	{
		"id": 36,
		"question": "¿Cuál es el resultado de 7 x 7?",
		"correct_answer": "49",
		"incorrect_answers": ["42", "56", "64"],
		"description": "7 multiplicado por 7 es 49."
	},
	{
		"id": 37,
		"question": "Si una tienda ofrece un 10% de descuento en un producto que cuesta $50, ¿cuánto pagarás?",
		"correct_answer": "$45",
		"incorrect_answers": ["$40", "$42", "$48"],
		"description": "10% de $50 es $5, entonces $50 - $5 = $45."
	},
	{
		"id": 38,
		"question": "¿Cuál es el número siguiente en la serie: 5, 10, 15, 20, ...?",
		"correct_answer": "25",
		"incorrect_answers": ["30", "20", "35"],
		"description": "La serie suma 5 en cada paso."
	},
	{
		"id": 39,
		"question": "Si un cubo tiene aristas de 3 cm, ¿cuál es su volumen?",
		"correct_answer": "27 cm³",
		"incorrect_answers": ["18 cm³", "9 cm³", "36 cm³"],
		"description": "Volumen = lado³ = 3³ = 27 cm³."
	},
	{
		"id": 40,
		"question": "¿Cuál es el resultado de 100 dividido entre 25?",
		"correct_answer": "4",
		"incorrect_answers": ["5", "2", "6"],
		"description": "100 ÷ 25 = 4."
	},
	{
		"id": 41,
		"question": "Si una persona tiene $200 y gasta $75, ¿cuánto dinero le queda?",
		"correct_answer": "$125",
		"incorrect_answers": ["$100", "$150", "$175"],
		"description": "$200 - $75 = $125."
	},
	{
		"id": 42,
		"question": "¿Cuál es el resultado de sumar los números pares del 2 al 10?",
		"correct_answer": "30",
		"incorrect_answers": ["20", "28", "32"],
		"description": "2 + 4 + 6 + 8 + 10 = 30."
	},
	{
		"id": 43,
		"question": "¿Cuánto es 1/4 de 80?",
		"correct_answer": "20",
		"incorrect_answers": ["15", "25", "30"],
		"description": "1/4 de 80 = 80 ÷ 4 = 20."
	},
	{
		"id": 44,
		"question": "¿Cuál es el área de un cuadrado con lado de 6 cm?",
		"correct_answer": "36 cm²",
		"incorrect_answers": ["12 cm²", "18 cm²", "24 cm²"],
		"description": "Área = lado x lado = 6 × 6 = 36 cm²."
	},
	{
		"id": 45,
		"question": "Si un auto recorre 120 km en 2 horas, ¿cuál es su velocidad promedio?",
		"correct_answer": "60 km/h",
		"incorrect_answers": ["50 km/h", "55 km/h", "65 km/h"],
		"description": "Velocidad = distancia / tiempo = 120 / 2 = 60 km/h."
	},
	{
		"id": 46,
		"question": "Si multiplicas 0.5 por 8, ¿cuál es el resultado?",
		"correct_answer": "4",
		"incorrect_answers": ["2", "6", "8"],
		"description": "0.5 × 8 = 4."
	},
	{
		"id": 47,
		"question": "¿Cuál es el siguiente número en la serie: 1, 4, 9, 16, 25, ...?",
		"correct_answer": "36",
		"incorrect_answers": ["30", "35", "40"],
		"description": "La serie son los cuadrados de los números naturales (1², 2², 3²...)."
	},
	{
		"id": 48,
		"question": "¿Cuál es el resultado de 15 + 28?",
		"correct_answer": "43",
		"incorrect_answers": ["42", "44", "45"],
		"description": "15 + 28 = 43."
	},
	{
		"id": 49,
		"question": "Si divides 72 entre 8, ¿cuál es el resultado?",
		"correct_answer": "9",
		"incorrect_answers": ["8", "10", "12"],
		"description": "72 ÷ 8 = 9."
	},
	{
		"id": 50,
		"question": "¿Cuánto es el 50% de 90?",
		"correct_answer": "45",
		"incorrect_answers": ["40", "50", "55"],
		"description": "50% de 90 = (50/100) × 90 = 45."
	}
]

export const aptitud_verbal = [
	{
		"id": 1,
		"question": "¿Cuál es el sinónimo de la palabra 'benevolente'?",
		"correct_answer": "Bondadoso",
		"incorrect_answers": ["Cruel", "Egoísta", "Indiferente"],
		"description": "'Benevolente' significa ser bondadoso o mostrar buena voluntad."
	},
	{
		"id": 2,
		"question": "¿Cuál es el antónimo de la palabra 'preciso'?",
		"correct_answer": "Impreciso",
		"incorrect_answers": ["Exacto", "Claro", "Definido"],
		"description": "El antónimo de 'preciso' es 'impreciso', que significa no exacto."
	},
	{
		"id": 3,
		"question": "Selecciona la palabra que completa correctamente la frase: 'El niño __________ rápido para llegar a tiempo.'",
		"correct_answer": "corre",
		"incorrect_answers": ["corren", "corría", "corrió"],
		"description": "El sujeto es singular ('El niño'), por eso el verbo debe ir en tercera persona singular: 'corre'."
	},
	{
		"id": 4,
		"question": "¿Cuál de las siguientes palabras es un sustantivo?",
		"correct_answer": "Montaña",
		"incorrect_answers": ["Correr", "Azul", "Rápido"],
		"description": "'Montaña' es un sustantivo, es decir, el nombre de un lugar o cosa."
	},
	{
		"id": 5,
		"question": "¿Cuál es el significado de la palabra 'efímero'?",
		"correct_answer": "Que dura poco tiempo",
		"incorrect_answers": ["Que dura mucho tiempo", "Que es eterno", "Que es muy grande"],
		"description": "'Efímero' se refiere a algo de corta duración."
	},
	{
		"id": 6,
		"question": "¿Cuál es la forma correcta de escribir la palabra para referirse a una persona que enseña?",
		"correct_answer": "Profesor",
		"incorrect_answers": ["Profecor", "Profezor", "Proffesor"],
		"description": "'Profesor' es la forma correcta para referirse a quien enseña."
	},
	{
		"id": 7,
		"question": "¿Cuál es la palabra que mejor completa esta frase? 'Ella es una persona muy __________, siempre ayuda a los demás.'",
		"correct_answer": "solidaria",
		"incorrect_answers": ["egoísta", "perezosa", "indiferente"],
		"description": "'Solidaria' describe a quien muestra apoyo y ayuda a otros."
	},
	{
		"id": 8,
		"question": "¿Cuál es el plural correcto de la palabra 'luz'?",
		"correct_answer": "luces",
		"incorrect_answers": ["luzes", "luzes", "luceses"],
		"description": "El plural de 'luz' es 'luces'."
	},
	{
		"id": 9,
		"question": "¿Cuál es el tiempo verbal de la frase: 'Ella caminaba por el parque'?",
		"correct_answer": "Pretérito imperfecto",
		"incorrect_answers": ["Pretérito perfecto", "Presente", "Futuro"],
		"description": "'Caminaba' es verbo en pretérito imperfecto, indica una acción pasada en desarrollo."
	},
	{
		"id": 10,
		"question": "¿Cuál es el significado de la palabra 'inminente'?",
		"correct_answer": "Que va a ocurrir pronto",
		"incorrect_answers": ["Que nunca ocurrirá", "Que ocurrió en el pasado", "Que es imposible"],
		"description": "'Inminente' significa que algo está próximo a suceder."
	},
	{
		"id": 11,
		"question": "¿Qué palabra completa correctamente la siguiente frase? 'No me gusta la comida tan __________.'",
		"correct_answer": "picante",
		"incorrect_answers": ["picado", "picazón", "picantez"],
		"description": "La palabra adecuada para referirse al sabor fuerte de una comida es 'picante'."
	},
	{
		"id": 12,
		"question": "¿Cuál es el antónimo de la palabra 'abundante'?",
		"correct_answer": "escaso",
		"incorrect_answers": ["rico", "numeroso", "frecuente"],
		"description": "'Escaso' es lo opuesto a 'abundante', que significa que hay poco de algo."
	},
	{
		"id": 13,
		"question": "¿Cuál de las siguientes palabras es un adjetivo?",
		"correct_answer": "amable",
		"incorrect_answers": ["amabilidad", "amablemente", "amando"],
		"description": "'Amable' describe una cualidad, por lo tanto es un adjetivo."
	},
	{
		"id": 14,
		"question": "¿Cuál es la palabra correctamente escrita?",
		"correct_answer": "absurdo",
		"incorrect_answers": ["azurdo", "abzurdo", "absurdoh"],
		"description": "La forma correcta es 'absurdo', que significa sin sentido o ilógico."
	},
	{
		"id": 15,
		"question": "¿Cuál es el sinónimo de 'valeroso'?",
		"correct_answer": "valiente",
		"incorrect_answers": ["temeroso", "débil", "inseguro"],
		"description": "'Valiente' es sinónimo de 'valeroso', ambos significan tener coraje."
	},
	{
		"id": 16,
		"question": "¿Qué palabra forma una familia léxica con 'pan'?",
		"correct_answer": "panadero",
		"incorrect_answers": ["pandilla", "pantalla", "pantalón"],
		"description": "'Panadero' es parte de la familia léxica de 'pan', ya que comparten raíz y significado relacionado."
	},
	{
		"id": 17,
		"question": "¿Qué significa la expresión 'estar en las nubes'?",
		"correct_answer": "Estar distraído",
		"incorrect_answers": ["Estar volando", "Estar en el cielo", "Estar soñando"],
		"description": "La expresión 'estar en las nubes' se usa para referirse a alguien distraído o despistado."
	},
	{
		"id": 18,
		"question": "¿Cuál es el plural correcto de 'reloj'?",
		"correct_answer": "relojes",
		"incorrect_answers": ["relojs", "relojeses", "relojis"],
		"description": "El plural correcto de 'reloj' es 'relojes', agregando 'es' y cambiando la 'j' suavemente."
	},
	{
		"id": 19,
		"question": "¿Qué tipo de palabra es 'rápidamente'?",
		"correct_answer": "Adverbio de modo",
		"incorrect_answers": ["Adjetivo", "Sustantivo", "Verbo"],
		"description": "'Rápidamente' indica cómo se hace algo, por eso es un adverbio de modo."
	},
	{
		"id": 20,
		"question": "¿Cuál es el antónimo de la palabra 'sabio'?",
		"correct_answer": "ignorante",
		"incorrect_answers": ["inteligente", "docto", "culto"],
		"description": "'Ignorante' es lo contrario de 'sabio', ya que carece de conocimiento o sabiduría."
	},
	{
		"id": 21,
		"question": "¿Cuál es el significado del refrán 'El que mucho abarca, poco aprieta'?",
		"correct_answer": "Quien quiere hacer muchas cosas a la vez, no logra hacer ninguna bien",
		"incorrect_answers": ["Quien come mucho, se enferma", "Quien estudia mucho, se cansa", "Quien duerme poco, rinde más"],
		"description": "Este refrán enseña que tratar de hacer muchas cosas al mismo tiempo puede afectar la calidad de los resultados."
	},
	{
		"id": 22,
		"question": "¿Cuál de las siguientes palabras está escrita correctamente?",
		"correct_answer": "examen",
		"incorrect_answers": ["exámen", "examenes", "examén"],
		"description": "'Examen' es la forma correcta y no lleva tilde porque es una palabra grave terminada en 'n'."
	},
	{
		"id": 23,
		"question": "¿Qué palabra completa correctamente la frase? 'La maestra explicó la lección de forma muy __________.'",
		"correct_answer": "clara",
		"incorrect_answers": ["claridad", "claramente", "claro"],
		"description": "'Clara' es el adjetivo correcto que concuerda con el sustantivo 'forma'."
	},
	{
		"id": 24,
		"question": "¿Cuál es el sinónimo de la palabra 'alegría'?",
		"correct_answer": "felicidad",
		"incorrect_answers": ["pena", "tristeza", "dolor"],
		"description": "'Felicidad' es un sinónimo directo de 'alegría', ambas indican un estado emocional positivo."
	},
	{
		"id": 25,
		"question": "¿Cuál de las siguientes palabras es un sustantivo?",
		"correct_answer": "ventana",
		"incorrect_answers": ["abrir", "rápido", "mirar"],
		"description": "'Ventana' es un sustantivo, ya que nombra un objeto."
	},
	{
		"id": 26,
		"question": "¿Qué palabra forma una familia léxica con 'cantar'?",
		"correct_answer": "canción",
		"incorrect_answers": ["canasta", "caminar", "cantina"],
		"description": "'Canción' proviene del verbo 'cantar' y forma parte de su familia léxica."
	},
	{
		"id": 27,
		"question": "¿Qué figura literaria se encuentra en la frase 'Las estrellas nos miraban desde lo alto'?",
		"correct_answer": "Personificación",
		"incorrect_answers": ["Metáfora", "Hipérbole", "Comparación"],
		"description": "La frase atribuye una acción humana a las estrellas, lo cual es una personificación."
	},
	{
		"id": 28,
		"question": "¿Qué palabra tiene un significado opuesto a 'generoso'?",
		"correct_answer": "egoísta",
		"incorrect_answers": ["amable", "solidario", "bondadoso"],
		"description": "'Egoísta' es el antónimo de 'generoso', ya que describe a alguien que no comparte ni piensa en los demás."
	},
	{
		"id": 29,
		"question": "¿Cuál es la forma correcta del diminutivo de 'flor'?",
		"correct_answer": "florecita",
		"incorrect_answers": ["florcita", "florcilla", "florecilla"],
		"description": "'Florecita' es el diminutivo más común y aceptado de 'flor' en español."
	},
	{
		"id": 30,
		"question": "¿Cuál es el sinónimo de 'rápido'?",
		"correct_answer": "veloz",
		"incorrect_answers": ["lento", "tranquilo", "tardío"],
		"description": "'Veloz' es un sinónimo de 'rápido', ya que ambos significan moverse con prontitud o velocidad."
	},
	{
		"id": 31,
		"question": "¿Cuál de las siguientes oraciones está escrita correctamente?",
		"correct_answer": "Mañana iremos al parque si no llueve.",
		"incorrect_answers": ["Mañana iremos al parque sino llueve.", "Mañana iremos, al parque sino llueve.", "Mañana iremos al parque, si no llueve."],
		"description": "'Si no' se usa en sentido condicional, mientras que 'sino' es una conjunción adversativa."
	},
	{
		"id": 32,
		"question": "¿Cuál es el antónimo de la palabra 'valiente'?",
		"correct_answer": "cobarde",
		"incorrect_answers": ["intrépido", "audaz", "atrevido"],
		"description": "'Cobarde' es el antónimo de 'valiente', ya que se refiere a quien evita el peligro por miedo."
	},
	{
		"id": 33,
		"question": "¿Qué palabra completa la frase? 'El niño se cayó porque no miró por __________ iba.'",
		"correct_answer": "donde",
		"incorrect_answers": ["dónde", "don de", "donde que"],
		"description": "En este caso, 'donde' funciona como conjunción que indica lugar, sin tilde."
	},
	{
		"id": 34,
		"question": "¿Qué figura literaria se encuentra en la frase 'Sus ojos eran dos luceros'?",
		"correct_answer": "Metáfora",
		"incorrect_answers": ["Símil", "Hipérbole", "Onomatopeya"],
		"description": "La metáfora compara directamente dos elementos sin usar nexos como 'como'."
	},
	{
		"id": 35,
		"question": "¿Cuál de las siguientes palabras es un adjetivo?",
		"correct_answer": "hermoso",
		"incorrect_answers": ["cantar", "hermosura", "hermosamente"],
		"description": "'Hermoso' es un adjetivo porque califica a un sustantivo."
	},
	{
		"id": 36,
		"question": "¿Qué significa la palabra 'efímero'?",
		"correct_answer": "De corta duración",
		"incorrect_answers": ["Grande", "Eterno", "Doloroso"],
		"description": "'Efímero' se refiere a algo que dura poco tiempo o que es pasajero."
	},
	{
		"id": 37,
		"question": "¿Qué palabra tiene un significado similar a 'amplio'?",
		"correct_answer": "espacioso",
		"incorrect_answers": ["estrecho", "pequeño", "ajustado"],
		"description": "'Espacioso' es un sinónimo de 'amplio', ya que indica gran capacidad o extensión."
	},
	{
		"id": 38,
		"question": "¿Cuál de las siguientes palabras no pertenece al mismo campo semántico que las demás?",
		"correct_answer": "silla",
		"incorrect_answers": ["camisa", "pantalón", "zapatos"],
		"description": "'Silla' pertenece al mobiliario, mientras las otras son prendas de vestir."
	},
	{
		"id": 39,
		"question": "¿Qué palabra se forma al agregar el prefijo 'in-' a 'correcto'?",
		"correct_answer": "incorrecto",
		"incorrect_answers": ["descorrecto", "preciso", "incorregible"],
		"description": "El prefijo 'in-' indica negación; 'incorrecto' es el antónimo de 'correcto'."
	},
	{
		"id": 40,
		"question": "¿Cuál es el significado del refrán 'Más vale pájaro en mano que cien volando'?",
		"correct_answer": "Es mejor asegurarse de lo que se tiene que arriesgarse por algo incierto",
		"incorrect_answers": ["Es mejor no tener nada que poco", "Es preferible volar alto", "Es bueno tener compañía"],
		"description": "Este refrán enseña a valorar lo seguro en lugar de arriesgarlo por algo incierto."
	},
	{
		"id": 41,
		"question": "¿Cuál es el significado de la palabra 'ambiguo'?",
		"correct_answer": "Que puede entenderse de varias maneras",
		"incorrect_answers": ["Claro y preciso", "Rápido y directo", "Relacionado con el amor"],
		"description": "Ambiguo se refiere a algo que puede tener más de un significado o interpretación."
	},
	{
		"id": 42,
		"question": "¿Qué palabra es sinónimo de 'felicidad'?",
		"correct_answer": "alegría",
		"incorrect_answers": ["tristeza", "aburrimiento", "rabia"],
		"description": "'Alegría' es un sinónimo de 'felicidad' porque ambas expresan un estado de ánimo positivo."
	},
	{
		"id": 43,
		"question": "¿Qué palabra completa correctamente la frase? 'Me avisó que llegarían tarde, __________ no me preocupé.'",
		"correct_answer": "por eso",
		"incorrect_answers": ["aunque", "sin embargo", "porque"],
		"description": "'Por eso' indica una consecuencia lógica con la primera parte de la oración."
	},
	{
		"id": 44,
		"question": "¿Cuál es el antónimo de la palabra 'sabio'?",
		"correct_answer": "ignorante",
		"incorrect_answers": ["inteligente", "lúcido", "culto"],
		"description": "'Ignorante' es el antónimo de 'sabio' porque se refiere a la falta de conocimiento."
	},
	{
		"id": 45,
		"question": "¿Cuál de las siguientes oraciones es un enunciado exclamativo?",
		"correct_answer": "¡Qué tarde tan hermosa!",
		"incorrect_answers": ["La tarde está hermosa.", "¿Está hermosa la tarde?", "La tarde es hermosa."],
		"description": "Las oraciones exclamativas expresan emoción y se escriben entre signos de admiración."
	},
	{
		"id": 46,
		"question": "¿Qué figura literaria está presente en la frase 'Llueve a cántaros'?",
		"correct_answer": "Hipérbole",
		"incorrect_answers": ["Metáfora", "Símil", "Personificación"],
		"description": "'Llueve a cántaros' es una exageración y, por tanto, una hipérbole."
	},
	{
		"id": 47,
		"question": "¿Cuál es el significado del dicho 'A buen hambre no hay pan duro'?",
		"correct_answer": "Cuando se tiene necesidad, cualquier cosa es buena",
		"incorrect_answers": ["Comer pan duro causa problemas", "Es mejor el pan fresco", "Siempre hay pan disponible"],
		"description": "Este dicho enseña que cuando se tiene mucha necesidad, se aceptan soluciones que normalmente se rechazarían."
	},
	{
		"id": 48,
		"question": "¿Cuál de las siguientes palabras es un sustantivo?",
		"correct_answer": "libro",
		"incorrect_answers": ["leer", "leído", "leeré"],
		"description": "'Libro' es un sustantivo porque es un objeto; los otros son formas del verbo 'leer'."
	},
	{
		"id": 49,
		"question": "¿Cuál es el sinónimo de 'rápido'?",
		"correct_answer": "veloz",
		"incorrect_answers": ["lento", "pesado", "cansado"],
		"description": "'Veloz' y 'rápido' significan lo mismo: que se mueve con mucha rapidez."
	},
	{
		"id": 50,
		"question": "¿Cuál de las siguientes opciones representa una oración interrogativa?",
		"correct_answer": "¿A qué hora empieza la reunión?",
		"incorrect_answers": ["La reunión empieza a las ocho.", "Es una reunión importante.", "La reunión fue cancelada."],
		"description": "Las oraciones interrogativas se caracterizan por estar formuladas como preguntas."
	}
]

export const principios_deberes_constitucionales = [
	{
		"id": 1,
		"question": "¿Cuál de los siguientes enunciados corresponde a un principio fundamental de la Constitución Política de Colombia de 1991?",
		"correct_answer": "La soberanía reside exclusivamente en el pueblo",
		"incorrect_answers": [
			"El poder reside en el Congreso de la República",
			"El Estado impone derechos y libertades",
			"La justicia está por encima de la ley"
		],
		"description": "La soberanía popular es un principio fundamental consagrado en el artículo 3 de la Constitución de 1991."
	},
	{
		"id": 2,
		"question": "Según la Constitución de 1991, ¿cuál es uno de los deberes de toda persona en Colombia?",
		"correct_answer": "Respetar los derechos ajenos y no abusar de los propios",
		"incorrect_answers": [
			"Servir obligatoriamente al Estado en cargos públicos",
			"Adoptar una religión reconocida por el Estado",
			"Participar activamente en política"
		],
		"description": "El artículo 95 establece como deber respetar los derechos ajenos, entre otros deberes ciudadanos."
	},
	{
		"id": 3,
		"question": "¿Qué principio constitucional consagra que todas las autoridades deben proteger a todas las personas en su vida, honra y bienes?",
		"correct_answer": "El principio de dignidad humana",
		"incorrect_answers": [
			"El principio de legalidad",
			"El principio de territorialidad",
			"El principio de economía"
		],
		"description": "La dignidad humana es el eje del ordenamiento jurídico colombiano y guía el actuar de las autoridades."
	},
	{
		"id": 4,
		"question": "¿Cuál de los siguientes deberes constitucionales está relacionado con la participación ciudadana?",
		"correct_answer": "Participar en la vida política, cívica y comunitaria del país",
		"incorrect_answers": [
			"Pagar impuestos únicamente si se está de acuerdo",
			"Trabajar en una entidad pública mínimo un año",
			"Votar cada cinco años"
		],
		"description": "El deber de participación activa en la sociedad está contenido en el artículo 95 de la Constitución."
	},
	{
		"id": 5,
		"question": "El respeto por el medio ambiente es considerado en la Constitución como:",
		"correct_answer": "Un deber de la persona y del ciudadano",
		"incorrect_answers": [
			"Una recomendación opcional del Estado",
			"Una función exclusiva del Ministerio de Ambiente",
			"Un principio ético sin valor jurídico"
		],
		"description": "Cuidar los recursos naturales es un deber ciudadano consagrado constitucionalmente."
	},
	{
		"id": 6,
		"question": "¿Qué significa el principio de igualdad ante la ley, según la Constitución colombiana?",
		"correct_answer": "Todas las personas tienen los mismos derechos, deberes y oportunidades",
		"incorrect_answers": [
			"Algunas personas tienen más deberes por su rol social",
			"La ley solo protege a los ciudadanos colombianos",
			"La igualdad aplica únicamente en temas judiciales"
		],
		"description": "El principio de igualdad está establecido en el artículo 13 de la Constitución."
	},
	{
		"id": 7,
		"question": "¿Cuál es el deber constitucional relacionado con el respeto y defensa de los bienes públicos?",
		"correct_answer": "Proteger los recursos culturales y naturales de la Nación",
		"incorrect_answers": [
			"Colaborar con el uso privado de los bienes públicos",
			"Recibir subsidios del Estado periódicamente",
			"Priorizar el beneficio individual sobre el colectivo"
		],
		"description": "El artículo 95 señala como deber proteger el patrimonio común de los colombianos."
	},
	{
		"id": 8,
		"question": "Uno de los principios constitucionales del Estado colombiano es:",
		"correct_answer": "Colombia es un Estado social de derecho",
		"incorrect_answers": [
			"Colombia es una república autoritaria de derechos",
			"Colombia es un Estado centralizado y unitario",
			"Colombia es una monarquía parlamentaria"
		],
		"description": "La Constitución de 1991 define a Colombia como un Estado social de derecho en su artículo 1."
	},
	{
		"id": 9,
		"question": "¿Cuál de las siguientes opciones corresponde a un principio de la función pública según la Constitución?",
		"correct_answer": "Moralidad",
		"incorrect_answers": [
			"Impunidad",
			"Neutralidad política",
			"Secreto institucional"
		],
		"description": "El artículo 209 de la Constitución establece principios como moralidad, eficacia, economía, celeridad, imparcialidad y publicidad."
	},
	{
		"id": 10,
		"question": "¿Qué valor constitucional se refleja cuando los ciudadanos exigen a las autoridades transparencia en la gestión pública?",
		"correct_answer": "Participación democrática",
		"incorrect_answers": [
			"Autoridad centralizada",
			"Privacidad institucional",
			"Jerarquía normativa"
		],
		"description": "La participación democrática permite a los ciudadanos exigir transparencia, rendición de cuentas y buen gobierno."
	},
	{
		"id": 11,
		"question": "Según la Constitución Política de 1991, ¿cuál es el fundamento de la soberanía nacional?",
		"correct_answer": "Reside exclusivamente en el pueblo",
		"incorrect_answers": [
			"Radica únicamente en el Presidente de la República",
			"Es compartida entre los poderes públicos",
			"La detentan las Fuerzas Militares en tiempos de guerra"
		],
		"description": "¡¡¡Correcto!!! El artículo 3 de la Constitución establece que la soberanía reside exclusivamente en el pueblo, del cual emanan los poderes públicos."
	},
	{
		"id": 12,
		"question": "¿Cuál de los siguientes es un principio que rige el ejercicio del poder público en Colombia?",
		"correct_answer": "Prevalencia del interés general",
		"incorrect_answers": [
			"Primacía del poder ejecutivo",
			"Independencia absoluta del ciudadano",
			"Privilegio de intereses privados"
		],
		"description": "¡¡¡Correcto!!! El artículo 1 de la Constitución menciona la prevalencia del interés general como uno de los principios fundamentales del Estado colombiano."
	},
	{
		"id": 13,
		"question": "¿Qué principio constitucional establece la responsabilidad de los servidores públicos por infringir la Constitución y la ley?",
		"correct_answer": "Principio de responsabilidad",
		"incorrect_answers": [
			"Principio de conveniencia",
			"Principio de lealtad",
			"Principio de jerarquía"
		],
		"description": "¡¡¡Correcto!!! El artículo 6 de la Constitución señala que los servidores públicos son responsables por infringir la Constitución y la ley, lo que corresponde al principio de responsabilidad."
	},
	{
		"id": 14,
		"question": "¿Cuál es un deber constitucional en relación con el medio ambiente?",
		"correct_answer": "Proteger los recursos naturales y velar por su conservación",
		"incorrect_answers": [
			"Permitir su explotación libre",
			"Garantizar que solo el Estado los utilice",
			"Cederlos al capital extranjero sin restricción"
		],
		"description": "¡¡¡Correcto!!! Según el artículo 95, uno de los deberes de toda persona es proteger los recursos naturales y velar por la conservación de un ambiente sano."
	},
	{
		"id": 15,
		"question": "De acuerdo con la Constitución, ¿qué debe hacer el ciudadano frente a las autoridades legítimamente constituidas?",
		"correct_answer": "Acatar la Constitución y las leyes",
		"incorrect_answers": [
			"Desobedecer si no está de acuerdo",
			"Ejercer vigilancia armada sobre ellas",
			"Apoyarlas solo si pertenecen a su partido político"
		],
		"description": "¡¡¡Correcto!!! El artículo 95 establece como deber de toda persona acatar la Constitución y las leyes, y respetar y obedecer a las autoridades."
	},
	{
		"id": 16,
		"question": "¿Cuál es uno de los fines esenciales del Estado colombiano según la Constitución?",
		"correct_answer": "Servir a la comunidad",
		"incorrect_answers": [
			"Favorecer a los sectores empresariales",
			"Imponer un único modelo cultural",
			"Ejercer control absoluto sobre los ciudadanos"
		],
		"description": "¡¡¡Correcto!!! El artículo 2 de la Constitución establece que uno de los fines esenciales del Estado es servir a la comunidad, además de garantizar los derechos y libertades."
	},
	{
		"id": 17,
		"question": "¿Qué principio constitucional garantiza que todos los ciudadanos son iguales ante la ley?",
		"correct_answer": "Principio de igualdad",
		"incorrect_answers": [
			"Principio de imparcialidad",
			"Principio de neutralidad",
			"Principio de subsidiariedad"
		],
		"description": "¡¡¡Correcto!!! El artículo 13 de la Constitución consagra el principio de igualdad, asegurando que todas las personas tienen los mismos derechos, libertades y oportunidades."
	},
	{
		"id": 18,
		"question": "¿Qué deber constitucional promueve el ejercicio del sufragio?",
		"correct_answer": "Participar en la vida política, cívica y comunitaria del país",
		"incorrect_answers": [
			"Renunciar a la ciudadanía",
			"Apoyar únicamente al partido de gobierno",
			"Evitar cualquier participación política"
		],
		"description": "¡¡¡Correcto!!! El artículo 95 indica que uno de los deberes de los ciudadanos es participar en la vida política, incluyendo el voto como una expresión fundamental."
	},
	{
		"id": 19,
		"question": "¿Cuál de los siguientes NO es un deber constitucional según el artículo 95?",
		"correct_answer": "Velar por el enriquecimiento personal sobre el bien común",
		"incorrect_answers": [
			"Respetar los derechos ajenos",
			"Participar en la vida política",
			"Contribuir al financiamiento del Estado"
		],
		"description": "¡¡¡Correcto!!! El enriquecimiento personal por encima del bien común contradice los principios constitucionales; no es un deber, sino un comportamiento reprobable."
	},
	{
		"id": 20,
		"question": "¿Qué deber constitucional contribuye directamente al sostenimiento del Estado?",
		"correct_answer": "Contribuir al financiamiento de los gastos e inversiones del Estado",
		"incorrect_answers": [
			"Negarse a pagar impuestos",
			"Exigir servicios sin contribuir",
			"Promover la evasión fiscal"
		],
		"description": "¡¡¡Correcto!!! Según el artículo 95, todos los ciudadanos deben contribuir al financiamiento del Estado de acuerdo con su capacidad económica."
	},
	{
		"id": 21,
		"question": "¿Cuál de los siguientes enunciados corresponde a un principio constitucional de la función pública?",
		"correct_answer": "La moralidad",
		"incorrect_answers": [
			"La conveniencia personal",
			"La influencia política",
			"La acumulación de poder"
		],
		"description": "¡¡¡Correcto!!! Según el artículo 209 de la Constitución, la función administrativa se rige por principios como la moralidad, eficiencia, celeridad, imparcialidad y publicidad."
	},
	{
		"id": 22,
		"question": "¿Qué principio constitucional se refiere a que las autoridades deben actuar con prontitud y sin demoras injustificadas?",
		"correct_answer": "Celeridad",
		"incorrect_answers": [
			"Subsidiariedad",
			"Estabilidad",
			"Jerarquía"
		],
		"description": "¡¡¡Correcto!!! El principio de celeridad exige que los funcionarios actúen con prontitud para garantizar una administración eficiente."
	},
	{
		"id": 23,
		"question": "¿Qué establece el artículo 1º de la Constitución Política de Colombia sobre la forma de Estado?",
		"correct_answer": "Colombia es un Estado social de derecho",
		"incorrect_answers": [
			"Colombia es una monarquía constitucional",
			"Colombia es un Estado confesional",
			"Colombia es una federación descentralizada"
		],
		"description": "¡¡¡Correcto!!! El artículo 1º de la Constitución declara que Colombia es un Estado social de derecho, organizado en forma de república unitaria, democrática, participativa y pluralista."
	},
	{
		"id": 24,
		"question": "Según la Constitución, ¿quiénes deben cumplir la Constitución y las leyes?",
		"correct_answer": "Todas las personas en Colombia",
		"incorrect_answers": [
			"Solo los funcionarios públicos",
			"Solo los ciudadanos colombianos",
			"Solo las entidades estatales"
		],
		"description": "¡¡¡Correcto!!! El artículo 6 de la Constitución establece que todas las personas deben respetar la Constitución y las leyes."
	},
	{
		"id": 25,
		"question": "¿Cuál de los siguientes es un principio constitucional relacionado con la transparencia en la gestión pública?",
		"correct_answer": "Publicidad",
		"incorrect_answers": [
			"Confidencialidad absoluta",
			"Secreto institucional",
			"Privatización del control"
		],
		"description": "¡¡¡Correcto!!! El principio de publicidad implica que las actuaciones de la administración deben ser públicas, salvo excepciones legales."
	},
	{
		"id": 26,
		"question": "¿Qué deber constitucional tiene todo ciudadano respecto al sufragio?",
		"correct_answer": "Participar en la vida política del país votando en elecciones",
		"incorrect_answers": [
			"Solo afiliarse a un partido político",
			"Presentarse como candidato",
			"Votar únicamente en elecciones presidenciales"
		],
		"description": "¡¡¡Correcto!!! El artículo 95 de la Constitución establece como deber participar en la vida política del país, especialmente votando en elecciones y consultas populares."
	},
	{
		"id": 27,
		"question": "¿Cuál es el deber fundamental relacionado con el respeto a los derechos ajenos?",
		"correct_answer": "Respetar los derechos ajenos y no abusar de los propios",
		"incorrect_answers": [
			"Defender solo los derechos propios",
			"Desconocer derechos ajenos en caso de conflicto",
			"Respetar únicamente los derechos del Estado"
		],
		"description": "¡¡¡Correcto!!! El artículo 95 de la Constitución menciona que respetar los derechos ajenos es un deber de toda persona en Colombia."
	},
	{
		"id": 28,
		"question": "¿Qué principio constitucional establece que todas las personas son iguales ante la ley?",
		"correct_answer": "Igualdad",
		"incorrect_answers": [
			"Autoridad",
			"Jerarquía",
			"Autonomía"
		],
		"description": "¡¡¡Correcto!!! El artículo 13 de la Constitución Política establece el derecho a la igualdad ante la ley, sin discriminación alguna."
	},
	{
		"id": 29,
		"question": "¿Qué establece la Constitución frente al uso de los recursos naturales por parte del Estado?",
		"correct_answer": "El Estado es responsable de su planificación y manejo, garantizando el desarrollo sostenible",
		"incorrect_answers": [
			"Son de uso exclusivo de la empresa privada",
			"No están regulados por la Constitución",
			"Su explotación depende únicamente de tratados internacionales"
		],
		"description": "¡¡¡Correcto!!! La Constitución establece que los recursos naturales son patrimonio de la Nación y deben ser manejados de forma sostenible."
	},
	{
		"id": 30,
		"question": "¿Qué principio guía la actuación de los servidores públicos conforme a la Constitución?",
		"correct_answer": "Legalidad",
		"incorrect_answers": [
			"Arbitrariedad",
			"Discrecionalidad ilimitada",
			"Interés personal"
		],
		"description": "¡¡¡Correcto!!! El principio de legalidad implica que los servidores públicos solo pueden hacer lo que la ley les permite expresamente."
	},
	{
		"id": 31,
		"question": "¿Cuál es el principio constitucional que establece que las autoridades están instituidas para proteger a todas las personas en su vida, honra y bienes?",
		"correct_answer": "Finalidad social del Estado",
		"incorrect_answers": [
			"Separación de poderes",
			"Control fiscal",
			"Descentralización administrativa"
		],
		"description": "¡¡¡Correcto!!! Según el artículo 2 de la Constitución, las autoridades están instituidas para proteger a todas las personas en su vida, honra, bienes, creencias y demás derechos."
	},
	{
		"id": 32,
		"question": "¿Qué deber impone la Constitución a todos los ciudadanos para garantizar la convivencia pacífica?",
		"correct_answer": "Obrar conforme al principio de solidaridad social",
		"incorrect_answers": [
			"Ejercer autoridad sobre los demás",
			"Denunciar a toda persona sospechosa",
			"Practicar una religión obligatoria"
		],
		"description": "¡¡¡Correcto!!! La Constitución en el artículo 95 establece como deber obrar conforme al principio de solidaridad social, respondiendo con acciones humanitarias ante situaciones de emergencia."
	},
	{
		"id": 33,
		"question": "¿Cuál es el principio según el cual el poder público debe distribuirse entre distintas ramas y órganos del Estado?",
		"correct_answer": "Separación de poderes",
		"incorrect_answers": [
			"Unidad de mando",
			"Legalidad administrativa",
			"Economía procesal"
		],
		"description": "¡¡¡Correcto!!! La separación de poderes garantiza el equilibrio entre las funciones legislativa, ejecutiva y judicial del Estado."
	},
	{
		"id": 34,
		"question": "¿Qué principio constitucional garantiza que los ciudadanos puedan ejercer control sobre la administración pública?",
		"correct_answer": "Participación",
		"incorrect_answers": [
			"Exclusividad del poder",
			"Neutralidad del Estado",
			"Confidencialidad administrativa"
		],
		"description": "¡¡¡Correcto!!! La participación es un principio que garantiza que los ciudadanos incidan en las decisiones públicas y ejerzan control político."
	},
	{
		"id": 35,
		"question": "¿Qué principio constitucional establece que el Estado debe garantizar el acceso efectivo a la administración de justicia?",
		"correct_answer": "Acceso a la justicia",
		"incorrect_answers": [
			"Control ciudadano",
			"Economía judicial",
			"Autonomía regional"
		],
		"description": "¡¡¡Correcto!!! El artículo 229 de la Constitución asegura que toda persona tiene derecho a acceder a la administración de justicia para la protección de sus derechos."
	},
	{
		"id": 36,
		"question": "¿Cuál es el deber constitucional que tienen los ciudadanos respecto a los derechos ajenos?",
		"correct_answer": "Respetar los derechos ajenos y no abusar de los propios",
		"incorrect_answers": [
			"Velar por el cumplimiento de la ley",
			"Informar a las autoridades sobre violaciones",
			"Cumplir con las funciones públicas"
		],
		"description": "¡¡¡Correcto!!! El artículo 95 de la Constitución establece como deber respetar los derechos ajenos y no abusar de los propios, promoviendo así la convivencia armónica."
	},
	{
		"id": 37,
		"question": "¿Qué principio establece que ninguna persona o grupo está por encima de la Constitución?",
		"correct_answer": "Supremacía de la Constitución",
		"incorrect_answers": [
			"Legalidad sustancial",
			"Preeminencia de la ley",
			"Autonomía normativa"
		],
		"description": "¡¡¡Correcto!!! La supremacía de la Constitución implica que toda actuación del Estado y los particulares debe ajustarse a sus disposiciones (Art. 4)."
	},
	{
		"id": 38,
		"question": "¿Cuál de los siguientes es un deber del ciudadano según el artículo 95 de la Constitución?",
		"correct_answer": "Participar en la vida política, cívica y comunitaria del país",
		"incorrect_answers": [
			"Proteger la soberanía del poder judicial exclusivamente",
			"Elegir representantes cada cuatro años",
			"Cumplir funciones en el poder legislativo"
		],
		"description": "¡¡¡Correcto!!! La participación ciudadana es un deber constitucional que fortalece la democracia y el control social."
	},
	{
		"id": 39,
		"question": "¿Qué deber tienen los ciudadanos en relación con el medio ambiente, según la Constitución?",
		"correct_answer": "Proteger los recursos naturales y velar por la conservación del ambiente",
		"incorrect_answers": [
			"Exigir compensaciones al Estado",
			"Denunciar delitos ambientales",
			"Solicitar licencias ambientales"
		],
		"description": "¡¡¡Correcto!!! La Constitución impone el deber de proteger el ambiente, como parte del principio de solidaridad y del desarrollo sostenible (Art. 95 y 79)."
	},
	{
		"id": 40,
		"question": "¿Cuál es el principio que implica que los ciudadanos pueden exigir a las autoridades responsabilidad por sus actos?",
		"correct_answer": "Responsabilidad",
		"incorrect_answers": [
			"Descentralización",
			"Colaboración armónica",
			"Publicidad"
		],
		"description": "¡¡¡Correcto!!! La responsabilidad es un principio esencial para garantizar la transparencia y el cumplimiento de los fines del Estado."
	},
	{
		"id": 41,
		"question": "Según la Constitución, ¿qué principio protege la igualdad de todos los ciudadanos ante la ley?",
		"correct_answer": "Igualdad",
		"incorrect_answers": [
			"Libertad",
			"Participación",
			"Solidaridad"
		],
		"description": "¡¡¡Correcto!!! La igualdad es un principio fundamental que garantiza que todas las personas tengan los mismos derechos y deberes ante la ley (Art. 13)."
	},
	{
		"id": 42,
		"question": "¿Cuál es uno de los deberes constitucionales en materia de defensa de la soberanía y la independencia nacional?",
		"correct_answer": "Colaborar en la defensa de la soberanía y la independencia nacional",
		"incorrect_answers": [
			"Solo participar en elecciones presidenciales",
			"Informar a la prensa sobre asuntos militares",
			"Promover tratados internacionales sin control"
		],
		"description": "¡¡¡Correcto!!! Los ciudadanos deben colaborar activamente en la defensa del territorio y soberanía nacional (Art. 95)."
	},
	{
		"id": 43,
		"question": "¿Qué principio constitucional establece la distribución del poder público entre diferentes ramas del Estado?",
		"correct_answer": "Separación de poderes",
		"incorrect_answers": [
			"Participación ciudadana",
			"Unidad nacional",
			"Pluralismo"
		],
		"description": "¡¡¡Correcto!!! La separación de poderes evita la concentración de autoridad y garantiza un equilibrio en el ejercicio del poder público."
	},
	{
		"id": 44,
		"question": "¿Qué deber tienen los ciudadanos en cuanto a la educación, según la Constitución?",
		"correct_answer": "Exigir y promover una educación de calidad para todos",
		"incorrect_answers": [
			"Solo asistir a la escuela primaria",
			"Financiar la educación privada",
			"Evitar la educación formal"
		],
		"description": "¡¡¡Correcto!!! La Constitución reconoce la educación como un derecho y un deber que fortalece la formación integral de los ciudadanos (Art. 67)."
	},
	{
		"id": 45,
		"question": "¿Cuál es el deber constitucional que contribuye a la convivencia pacífica y el respeto mutuo?",
		"correct_answer": "Respetar la diversidad étnica y cultural de la nación",
		"incorrect_answers": [
			"Imponer una cultura única",
			"Evitar el diálogo con minorías",
			"Rechazar tradiciones ancestrales"
		],
		"description": "¡¡¡Correcto!!! El respeto a la diversidad cultural es un deber para fortalecer la unidad y la convivencia social (Art. 7)."
	},
	{
		"id": 46,
		"question": "¿Cuál es uno de los principios fundamentales que rige la función pública según la Constitución?",
		"correct_answer": "Transparencia y eficiencia",
		"incorrect_answers": [
			"Secreto y discrecionalidad",
			"Arbitrariedad y parcialidad",
			"Exclusividad y reserva"
		],
		"description": "¡¡¡Correcto!!! La función pública debe regirse por la transparencia y eficiencia para garantizar el buen uso de los recursos públicos."
	},
	{
		"id": 47,
		"question": "De acuerdo con la Constitución, ¿qué derecho tiene todo ciudadano en materia de participación política?",
		"correct_answer": "Elegir y ser elegido en cargos públicos",
		"incorrect_answers": [
			"Solo elegir representantes",
			"Solo votar en elecciones presidenciales",
			"No participar en campañas políticas"
		],
		"description": "¡¡¡Correcto!!! La Constitución reconoce el derecho a elegir y ser elegido como parte esencial de la democracia (Art. 40)."
	},
	{
		"id": 48,
		"question": "¿Cuál es un deber de los ciudadanos en relación con la ley y el orden público?",
		"correct_answer": "Acatar las leyes y respetar las autoridades legítimas",
		"incorrect_answers": [
			"Desobedecer normas injustas sin consecuencia",
			"Ignorar las órdenes oficiales",
			"Promover la anarquía para el cambio social"
		],
		"description": "¡¡¡Correcto!!! Los ciudadanos deben respetar el orden jurídico para mantener la convivencia pacífica (Art. 95)."
	},
	{
		"id": 49,
		"question": "Según la Constitución, ¿qué principio protege el derecho a la propiedad privada?",
		"correct_answer": "Función social de la propiedad",
		"incorrect_answers": [
			"Propiedad absoluta e ilimitada",
			"Derecho exclusivo sin límites",
			"No existe protección a la propiedad"
		],
		"description": "¡¡¡Correcto!!! La propiedad privada está protegida pero debe cumplir una función social (Art. 58)."
	},
	{
		"id": 50,
		"question": "¿Qué principio constitucional garantiza la libertad de expresión y el derecho a la información?",
		"correct_answer": "Libertad de prensa y expresión",
		"incorrect_answers": [
			"Censura previa obligatoria",
			"Restricción absoluta a la crítica",
			"Privacidad total sin acceso público"
		],
		"description": "¡¡¡Correcto!!! La Constitución protege la libertad de expresión y prensa como pilares de la democracia (Art. 20)."
	}
]


export const gobierno_digital = [
	{
		"id": 1,
		"question": "¿Qué es el Gobierno Digital?",
		"correct_answer": "El uso de tecnologías digitales para mejorar la gestión pública y la interacción con los ciudadanos.",
		"incorrect_answers": [
			"Un sistema de control interno de las entidades públicas.",
			"Una estrategia exclusiva para el sector privado.",
			"La digitalización de documentos sin cambios en los procesos."
		],
		"description": "¡¡¡Correcto!!! El Gobierno Digital consiste en utilizar tecnologías para hacer más eficientes y transparentes los servicios públicos."
	},
	{
		"id": 2,
		"question": "¿Cuál es uno de los principales objetivos del Gobierno Digital?",
		"correct_answer": "Mejorar la eficiencia y transparencia en la gestión pública.",
		"incorrect_answers": [
			"Reducir la participación ciudadana en los procesos gubernamentales.",
			"Incrementar el gasto público en tecnología sin resultados.",
			"Mantener los procesos administrativos tradicionales sin cambios."
		],
		"description": "¡¡¡Correcto!!! El objetivo clave es optimizar procesos y aumentar la transparencia para beneficio de los ciudadanos."
	},
	{
		"id": 3,
		"question": "¿Qué instrumento normativo en Colombia regula la estrategia de Gobierno Digital?",
		"correct_answer": "La Ley 1712 de 2014 (Ley de Transparencia y del Derecho de Acceso a la Información Pública).",
		"incorrect_answers": [
			"El Decreto 1082 de 2015.",
			"La Ley 734 de 2002.",
			"El Código General del Proceso."
		],
		"description": "¡¡¡Correcto!!! La Ley 1712 de 2014 establece las bases para la transparencia y acceso a la información pública, pilares del Gobierno Digital."
	},
	{
		"id": 4,
		"question": "¿Cuál es una herramienta clave para la implementación del Gobierno Digital?",
		"correct_answer": "Plataformas electrónicas que facilitan la interacción entre ciudadanos y entidades públicas.",
		"incorrect_answers": [
			"El uso exclusivo de papel en los trámites.",
			"El aumento del personal sin formación tecnológica.",
			"La eliminación de canales digitales."
		],
		"description": "¡¡¡Correcto!!! Las plataformas digitales permiten agilizar trámites y mejorar la comunicación entre el Estado y la ciudadanía."
	},
	{
		"id": 5,
		"question": "¿Qué papel juega la transparencia en el Gobierno Digital?",
		"correct_answer": "Promueve el acceso a la información pública y la rendición de cuentas.",
		"incorrect_answers": [
			"Limita el acceso a la información para proteger a las entidades.",
			"Sólo es relevante en el sector privado.",
			"Es un aspecto secundario sin impacto real."
		],
		"description": "¡¡¡Correcto!!! La transparencia fortalece la confianza ciudadana al garantizar acceso a información relevante del Estado."
	},
	{
		"id": 6,
		"question": "¿Qué significa interoperabilidad en el contexto del Gobierno Digital?",
		"correct_answer": "La capacidad de los sistemas y organizaciones para trabajar juntos y compartir información.",
		"incorrect_answers": [
			"El aislamiento de sistemas sin conexión entre ellos.",
			"El uso exclusivo de software propietario.",
			"La duplicación de información en diferentes entidades."
		],
		"description": "¡¡¡Correcto!!! La interoperabilidad facilita el intercambio eficiente de datos entre entidades públicas para mejorar los servicios."
	},
	{
		"id": 7,
		"question": "¿Cuál es un beneficio directo del Gobierno Digital para los ciudadanos?",
		"correct_answer": "Acceso más rápido y sencillo a los servicios públicos.",
		"incorrect_answers": [
			"Incremento en los costos para realizar trámites.",
			"Reducción de opciones para hacer consultas.",
			"Mayor burocracia en la atención."
		],
		"description": "¡¡¡Correcto!!! Los ciudadanos pueden acceder fácilmente a servicios y realizar trámites sin desplazamientos innecesarios."
	},
	{
		"id": 8,
		"question": "¿Qué es la firma digital en el contexto del Gobierno Digital?",
		"correct_answer": "Un mecanismo electrónico para validar la autenticidad de documentos y personas.",
		"incorrect_answers": [
			"Una firma manuscrita escaneada.",
			"Un sistema para imprimir documentos oficiales.",
			"Una contraseña para ingresar a páginas web."
		],
		"description": "¡¡¡Correcto!!! La firma digital garantiza seguridad y validez legal a los documentos electrónicos."
	},
	{
		"id": 9,
		"question": "¿Qué entidad en Colombia coordina la estrategia de Gobierno Digital?",
		"correct_answer": "El Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).",
		"incorrect_answers": [
			"La Contraloría General de la República.",
			"La Fiscalía General de la Nación.",
			"El Departamento Administrativo de la Función Pública."
		],
		"description": "¡¡¡Correcto!!! El MinTIC lidera la implementación de políticas y estrategias para el Gobierno Digital en Colombia."
	},
	{
		"id": 10,
		"question": "¿Cuál de las siguientes no es una característica del Gobierno Digital?",
		"correct_answer": "Incrementar el papeleo y burocracia en los procesos.",
		"incorrect_answers": [
			"Facilitar el acceso a servicios públicos.",
			"Promover la participación ciudadana en línea.",
			"Optimizar recursos mediante el uso de tecnología."
		],
		"description": "¡¡¡Correcto!!! El Gobierno Digital busca reducir trámites y burocracia, no aumentarlos."
	},
	{
		"id": 11,
		"question": "¿Qué es la transformación digital en el sector público?",
		"correct_answer": "El proceso de integrar tecnología para cambiar la forma en que se ofrecen servicios y se gestionan procesos.",
		"incorrect_answers": [
			"Simplemente comprar más computadoras para las oficinas.",
			"Mantener los procesos tradicionales sin cambios tecnológicos.",
			"Crear páginas web sin funcionalidades interactivas."
		],
		"description": "¡¡¡Correcto!!! La transformación digital implica modificar procesos para mejorar la eficiencia y experiencia del usuario."
	},
	{
		"id": 12,
		"question": "¿Cuál es la función principal del Portal Único de Servicios de Gobierno Digital?",
		"correct_answer": "Facilitar a los ciudadanos el acceso a trámites y servicios en línea desde un solo lugar.",
		"incorrect_answers": [
			"Centralizar todos los documentos impresos del gobierno.",
			"Controlar las redes sociales de las entidades públicas.",
			"Administrar las bases de datos internas sin acceso público."
		],
		"description": "¡¡¡Correcto!!! El portal unifica servicios digitales para hacer más fácil la interacción del ciudadano con el Estado."
	},
	{
		"id": 13,
		"question": "¿Qué es un dato abierto o 'open data' en Gobierno Digital?",
		"correct_answer": "Información pública accesible, reutilizable y redistribuible por cualquier persona.",
		"incorrect_answers": [
			"Datos privados de los funcionarios públicos.",
			"Información confidencial restringida a entidades gubernamentales.",
			"Datos que solo pueden consultarse pagando una tarifa."
		],
		"description": "¡¡¡Correcto!!! Los datos abiertos promueven transparencia y permiten crear soluciones innovadoras para la sociedad."
	},
	{
		"id": 14,
		"question": "¿Cuál es un riesgo que puede enfrentar el Gobierno Digital si no se gestionan bien las tecnologías?",
		"correct_answer": "La vulneración de la privacidad y la seguridad de la información pública.",
		"incorrect_answers": [
			"Mayor interacción ciudadana.",
			"Mejor acceso a servicios en línea.",
			"Incremento en la eficiencia administrativa."
		],
		"description": "¡¡¡Correcto!!! La seguridad informática es fundamental para proteger los datos y mantener la confianza ciudadana."
	},
	{
		"id": 15,
		"question": "¿Qué papel tiene la ciudadanía en el Gobierno Digital?",
		"correct_answer": "Participar activamente usando las plataformas digitales para hacer trámites y aportar sugerencias.",
		"incorrect_answers": [
			"No tiene ninguna función directa.",
			"Solo debe esperar a que el gobierno tome decisiones.",
			"Debe evitar usar las herramientas digitales por seguridad."
		],
		"description": "¡¡¡Correcto!!! La participación ciudadana fortalece la gobernanza y mejora los servicios públicos."
	},
	{
		"id": 16,
		"question": "¿Qué es un trámite electrónico?",
		"correct_answer": "Un procedimiento administrativo realizado completamente a través de medios digitales.",
		"incorrect_answers": [
			"Un trámite que requiere ir presencialmente a la entidad.",
			"Un documento en papel enviado por correo postal.",
			"Un proceso que solo se inicia por teléfono."
		],
		"description": "¡¡¡Correcto!!! Los trámites electrónicos agilizan y facilitan la gestión administrativa para usuarios y entidades."
	},
	{
		"id": 17,
		"question": "¿Qué es la ciberseguridad en el contexto del Gobierno Digital?",
		"correct_answer": "Conjunto de medidas para proteger los sistemas informáticos y la información pública de ataques y accesos no autorizados.",
		"incorrect_answers": [
			"Una nueva plataforma para ofrecer servicios digitales.",
			"El software usado para crear páginas web.",
			"Una estrategia para aumentar el gasto en tecnología."
		],
		"description": "¡¡¡Correcto!!! La ciberseguridad protege los datos y la infraestructura tecnológica del Estado."
	},
	{
		"id": 18,
		"question": "¿Qué es el acceso inclusivo en Gobierno Digital?",
		"correct_answer": "Garantizar que todas las personas, incluyendo las vulnerables, puedan acceder a los servicios digitales sin barreras.",
		"incorrect_answers": [
			"Ofrecer servicios solo a quienes tienen internet de alta velocidad.",
			"Restringir el acceso a ciertas plataformas por edad.",
			"Evitar la participación de personas con discapacidades."
		],
		"description": "¡¡¡Correcto!!! La inclusión digital busca que nadie quede excluido de los beneficios del Gobierno Digital."
	},
	{
		"id": 19,
		"question": "¿Qué significa que un servicio público sea interoperable?",
		"correct_answer": "Que puede funcionar y compartir información con otros servicios o sistemas sin problemas.",
		"incorrect_answers": [
			"Que solo se ofrece en una sola entidad sin conexión con otras.",
			"Que requiere documentación en papel para su realización.",
			"Que debe realizarse presencialmente."
		],
		"description": "¡¡¡Correcto!!! La interoperabilidad permite que diferentes sistemas trabajen juntos para facilitar trámites."
	},
	{
		"id": 20,
		"question": "¿Cuál es el beneficio de digitalizar la información pública?",
		"correct_answer": "Facilitar el acceso, almacenamiento y consulta rápida de la información para usuarios y entidades.",
		"incorrect_answers": [
			"Aumentar el uso de papel y espacio físico.",
			"Restringir la información solo a funcionarios.",
			"Hacer más lentos los procesos administrativos."
		],
		"description": "¡¡¡Correcto!!! La digitalización optimiza la gestión documental y mejora la transparencia."
	},
	{
		"id": 21,
		"question": "¿Cuál es uno de los objetivos clave del Gobierno Digital?",
		"correct_answer": "Mejorar la eficiencia y transparencia en la gestión pública.",
		"incorrect_answers": [
			"Eliminar completamente el contacto con la ciudadanía.",
			"Reducir el número de funcionarios públicos.",
			"Privatizar todos los servicios públicos."
		],
		"description": "¡¡¡Correcto!!! El Gobierno Digital busca hacer más eficientes los procesos y transparentar la información pública."
	},
	{
		"id": 22,
		"question": "¿Qué papel juega la inteligencia artificial en el Gobierno Digital?",
		"correct_answer": "Automatizar procesos y mejorar la toma de decisiones con base en datos.",
		"incorrect_answers": [
			"Reemplazar completamente a los funcionarios públicos.",
			"Eliminar el contacto con el ciudadano.",
			"Borrar toda la información institucional."
		],
		"description": "¡¡¡Correcto!!! La IA puede mejorar la eficiencia y apoyar la toma de decisiones basada en grandes volúmenes de datos."
	},
	{
		"id": 23,
		"question": "¿Cuál es una característica importante de una política de datos abiertos?",
		"correct_answer": "Los datos deben estar disponibles de forma gratuita y reutilizable.",
		"incorrect_answers": [
			"Los datos deben estar encriptados y protegidos contra el público.",
			"Los datos deben solicitarse por derecho de petición.",
			"Los datos solo deben estar disponibles en físico."
		],
		"description": "¡¡¡Correcto!!! Los datos abiertos deben estar disponibles sin restricciones para fomentar transparencia e innovación."
	},
	{
		"id": 24,
		"question": "¿Qué busca garantizar la Ley de Transparencia y Acceso a la Información Pública en Colombia?",
		"correct_answer": "El derecho de toda persona a acceder a la información pública.",
		"incorrect_answers": [
			"El control total del gobierno sobre los medios de comunicación.",
			"La confidencialidad absoluta de todos los datos públicos.",
			"El cobro por el acceso a los servicios de información."
		],
		"description": "¡¡¡Correcto!!! La ley garantiza el acceso libre y gratuito a la información pública como derecho fundamental."
	},
	{
		"id": 25,
		"question": "¿Qué es la estrategia de Gobierno en Línea en Colombia?",
		"correct_answer": "Un plan para mejorar la interacción digital entre el Estado y los ciudadanos.",
		"incorrect_answers": [
			"Una estrategia para restringir el acceso a la tecnología.",
			"Un programa de vigilancia digital masiva.",
			"Una iniciativa privada para conectar empresas."
		],
		"description": "¡¡¡Correcto!!! La estrategia busca acercar los servicios del Estado a los ciudadanos a través de medios digitales."
	},
	{
		"id": 26,
		"question": "¿Qué permite la firma digital en el contexto del Gobierno Digital?",
		"correct_answer": "Autenticar documentos electrónicos con validez legal.",
		"incorrect_answers": [
			"Hacer grafitis digitales.",
			"Ocultar la identidad del firmante.",
			"Firmar en papel y escanearlo."
		],
		"description": "¡¡¡Correcto!!! La firma digital permite validar la identidad y proteger la integridad de los documentos electrónicos."
	},
	{
		"id": 27,
		"question": "¿Cuál es uno de los pilares del ecosistema de Gobierno Digital en Colombia?",
		"correct_answer": "La arquitectura TI empresarial del Estado.",
		"incorrect_answers": [
			"La instalación de redes sociales en todas las entidades.",
			"La eliminación del papel en todas las oficinas.",
			"La privatización del correo institucional."
		],
		"description": "¡¡¡Correcto!!! La arquitectura TI permite alinear la tecnología con la estrategia del gobierno para una mejor gestión."
	},
	{
		"id": 28,
		"question": "¿Qué es interoperabilidad técnica?",
		"correct_answer": "Capacidad de los sistemas para intercambiar datos de forma eficiente y segura.",
		"incorrect_answers": [
			"Reutilización de computadoras antiguas.",
			"Uso de software gratuito en las entidades públicas.",
			"Reducción del ancho de banda digital."
		],
		"description": "¡¡¡Correcto!!! La interoperabilidad técnica permite el flujo de información entre diferentes plataformas tecnológicas."
	},
	{
		"id": 29,
		"question": "¿Qué deben considerar las entidades al diseñar servicios digitales?",
		"correct_answer": "Las necesidades y capacidades de los ciudadanos.",
		"incorrect_answers": [
			"Solo los intereses de la entidad.",
			"La complejidad para evitar accesos no deseados.",
			"Reducir el uso de tecnologías."
		],
		"description": "¡¡¡Correcto!!! El diseño centrado en el ciudadano es fundamental para un Gobierno Digital eficiente e inclusivo."
	},
	{
		"id": 30,
		"question": "¿Cuál es una barrera común para la implementación del Gobierno Digital?",
		"correct_answer": "La falta de conectividad en zonas rurales.",
		"incorrect_answers": [
			"El exceso de recursos tecnológicos.",
			"La abundancia de datos disponibles.",
			"La participación ciudadana activa."
		],
		"description": "¡¡¡Correcto!!! Las brechas de conectividad dificultan el acceso equitativo a los servicios digitales del Estado."
	},
	{
		"id": 31,
		"question": "¿Qué busca promover la estrategia de servicios ciudadanos digitales?",
		"correct_answer": "Acceso simple, rápido y seguro a servicios del Estado.",
		"incorrect_answers": [
			"Eliminación total de trámites presenciales.",
			"Sustitución de funcionarios por robots.",
			"Cobro por el uso de plataformas digitales."
		],
		"description": "¡¡¡Correcto!!! Esta estrategia facilita la interacción con el Estado a través de medios digitales amigables y eficientes."
	},
	{
		"id": 32,
		"question": "¿Qué función tiene el portal Gov.co en Colombia?",
		"correct_answer": "Centralizar el acceso a servicios e información del Estado.",
		"incorrect_answers": [
			"Promover redes sociales institucionales.",
			"Realizar campañas políticas.",
			"Brindar formación en tecnología a funcionarios."
		],
		"description": "¡¡¡Correcto!!! Gov.co es el portal único del Estado colombiano para que los ciudadanos accedan a información y servicios públicos."
	},
	{
		"id": 33,
		"question": "¿Qué es la gestión documental electrónica?",
		"correct_answer": "Manejo y conservación de documentos digitales con validez legal.",
		"incorrect_answers": [
			"Impresión masiva de archivos en físico.",
			"Almacenamiento en discos compactos.",
			"Eliminación de todos los registros históricos."
		],
		"description": "¡¡¡Correcto!!! La gestión documental electrónica garantiza el manejo adecuado, seguro y normativo de la información."
	},
	{
		"id": 34,
		"question": "¿Qué implica la transformación digital del Estado?",
		"correct_answer": "Uso de tecnologías para mejorar la gestión pública y el servicio al ciudadano.",
		"incorrect_answers": [
			"Privatizar servicios estatales.",
			"Reducir el personal estatal al mínimo.",
			"Desconectar al ciudadano de la administración pública."
		],
		"description": "¡¡¡Correcto!!! La transformación digital busca modernizar al Estado y facilitar el acceso de los ciudadanos a sus servicios."
	},
	{
		"id": 35,
		"question": "¿Qué entidad lidera la política de Gobierno Digital en Colombia?",
		"correct_answer": "El Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).",
		"incorrect_answers": [
			"El Ministerio de Educación.",
			"La Contraloría General.",
			"La Registraduría Nacional."
		],
		"description": "¡¡¡Correcto!!! MinTIC lidera e impulsa la política de Gobierno Digital en el país."
	},
	{
		"id": 36,
		"question": "¿Qué es la ciberseguridad en el contexto del Gobierno Digital?",
		"correct_answer": "Conjunto de acciones para proteger la información y los sistemas del Estado.",
		"incorrect_answers": [
			"Controlar redes sociales de ciudadanos.",
			"Bloquear el acceso a Internet público.",
			"Eliminar la información antigua del sistema."
		],
		"description": "¡¡¡Correcto!!! La ciberseguridad protege la infraestructura digital del Estado y los datos ciudadanos."
	},
	{
		"id": 37,
		"question": "¿Cuál es un beneficio del uso de la nube en el sector público?",
		"correct_answer": "Almacenar y gestionar datos con mayor flexibilidad y eficiencia.",
		"incorrect_answers": [
			"Reducir la cantidad de personal TI.",
			"Limitar el acceso ciudadano a servicios.",
			"Evitar el uso de Internet."
		],
		"description": "¡¡¡Correcto!!! La nube permite escalar, almacenar y acceder a servicios de forma eficiente y segura."
	},
	{
		"id": 38,
		"question": "¿Qué es el expediente digital único?",
		"correct_answer": "Un sistema para centralizar los documentos del ciudadano ante el Estado.",
		"incorrect_answers": [
			"Un software para emitir facturas electrónicas.",
			"Una aplicación para funcionarios.",
			"Un archivo de cada entidad estatal."
		],
		"description": "¡¡¡Correcto!!! El expediente digital único busca simplificar trámites y evitar que el ciudadano entregue repetidamente la misma información."
	},
	{
		"id": 39,
		"question": "¿Qué busca el principio de neutralidad tecnológica?",
		"correct_answer": "Permitir que cualquier tecnología que cumpla los estándares pueda ser usada.",
		"incorrect_answers": [
			"Obligar a usar un único proveedor.",
			"Utilizar exclusivamente software privado.",
			"Impedir el uso de tecnología extranjera."
		],
		"description": "¡¡¡Correcto!!! La neutralidad tecnológica garantiza competencia e innovación en la implementación del Gobierno Digital."
	},
	{
		"id": 40,
		"question": "¿Cuál es un reto clave para la implementación del Gobierno Digital en territorios rurales?",
		"correct_answer": "Acceso limitado a infraestructura tecnológica y conectividad.",
		"incorrect_answers": [
			"Sobrecarga de plataformas digitales.",
			"Demasiadas aplicaciones disponibles.",
			"Exceso de formación técnica en las comunidades."
		],
		"description": "¡¡¡Correcto!!! La brecha digital en zonas rurales es uno de los principales desafíos para garantizar el acceso equitativo."
	},
	{
		"id": 41,
		"question": "¿Qué rol cumple la interoperabilidad en el Gobierno Digital?",
		"correct_answer": "Permitir el intercambio eficiente de información entre entidades del Estado.",
		"incorrect_answers": [
			"Eliminar los registros en papel.",
			"Impedir que los ciudadanos usen diferentes plataformas.",
			"Privatizar los sistemas de información pública."
		],
		"description": "¡¡¡Correcto!!! La interoperabilidad permite que las instituciones compartan datos sin duplicidad ni errores, facilitando trámites para el ciudadano."
	},
	{
		"id": 42,
		"question": "¿Qué objetivo tiene la política de Gobierno Digital frente a la participación ciudadana?",
		"correct_answer": "Fortalecer los canales digitales de interacción entre ciudadanos y el Estado.",
		"incorrect_answers": [
			"Limitar las solicitudes ciudadanas a correos electrónicos.",
			"Suspender las audiencias públicas.",
			"Eliminar la atención presencial en las entidades."
		],
		"description": "¡¡¡Correcto!!! La política de Gobierno Digital promueve la participación activa del ciudadano mediante medios tecnológicos."
	},
	{
		"id": 43,
		"question": "¿Qué es un trámite digital?",
		"correct_answer": "Un proceso que se puede realizar completamente a través de medios electrónicos.",
		"incorrect_answers": [
			"Una solicitud escrita que debe entregarse en físico.",
			"Un formulario manual escaneado.",
			"Un trámite que requiere firma notarial presencial."
		],
		"description": "¡¡¡Correcto!!! Los trámites digitales eliminan la necesidad de desplazamientos, haciendo más eficiente la interacción con el Estado."
	},
	{
		"id": 44,
		"question": "¿Cuál es una herramienta clave para garantizar transparencia en Gobierno Digital?",
		"correct_answer": "Datos abiertos.",
		"incorrect_answers": [
			"Privacidad institucional.",
			"Bloqueo de información oficial.",
			"Contraseñas compartidas entre entidades."
		],
		"description": "¡¡¡Correcto!!! Los datos abiertos permiten el acceso público a la información estatal para fomentar el control social y la innovación."
	},
	{
		"id": 45,
		"question": "¿Qué representa la estrategia de 'Gobierno Digital' en Colombia?",
		"correct_answer": "Una política pública para transformar digitalmente las entidades del Estado.",
		"incorrect_answers": [
			"Una campaña comercial sobre software libre.",
			"Una red social de servidores públicos.",
			"Un sistema de vigilancia electrónica."
		],
		"description": "¡¡¡Correcto!!! Es una política que busca modernizar la gestión pública con uso de tecnología centrada en el ciudadano."
	},
	{
		"id": 46,
		"question": "¿Qué busca el modelo de madurez digital en las entidades públicas?",
		"correct_answer": "Medir el nivel de avance en la implementación de la transformación digital.",
		"incorrect_answers": [
			"Clasificar las entidades según su presupuesto.",
			"Determinar la cantidad de funcionarios tecnológicos.",
			"Evaluar únicamente el hardware de la entidad."
		],
		"description": "¡¡¡Correcto!!! Este modelo permite identificar fortalezas y debilidades en el camino hacia un gobierno digital efectivo."
	},
	{
		"id": 47,
		"question": "¿Qué permite el uso de firma digital en los procesos administrativos?",
		"correct_answer": "Validar legalmente documentos electrónicos.",
		"incorrect_answers": [
			"Acelerar procesos manuales.",
			"Evitar la revisión de documentos.",
			"Reemplazar correos electrónicos."
		],
		"description": "¡¡¡Correcto!!! La firma digital tiene la misma validez jurídica que la manuscrita y permite mayor seguridad en procesos digitales."
	},
	{
		"id": 48,
		"question": "¿Cuál es un objetivo de los servicios ciudadanos digitales?",
		"correct_answer": "Proporcionar un acceso único, seguro y eficiente a los servicios públicos.",
		"incorrect_answers": [
			"Permitir el ingreso múltiple por cada entidad.",
			"Duplicar trámites entre entidades.",
			"Restringir el acceso desde dispositivos móviles."
		],
		"description": "¡¡¡Correcto!!! Se busca que los ciudadanos interactúen fácilmente con el Estado, sin repetir procesos en cada entidad."
	},
	{
		"id": 49,
		"question": "¿Qué caracteriza a una política de Gobierno Abierto en el entorno digital?",
		"correct_answer": "Transparencia, participación y colaboración en la gestión pública.",
		"incorrect_answers": [
			"Control exclusivo de la información.",
			"Centralización de decisiones sin consulta.",
			"Reducción de canales de interacción."
		],
		"description": "¡¡¡Correcto!!! El Gobierno Abierto impulsa la confianza ciudadana y el control social a través del uso de tecnologías digitales."
	},
	{
		"id": 50,
		"question": "¿Cuál de los siguientes NO es un componente de la estrategia de Gobierno Digital?",
		"correct_answer": "El fortalecimiento del sistema penitenciario.",
		"incorrect_answers": [
			"Seguridad digital.",
			"Servicios ciudadanos digitales.",
			"Gestión de TI en el sector público."
		],
		"description": "¡¡¡Correcto!!! El sistema penitenciario no hace parte de los ejes de Gobierno Digital como política tecnológica del Estado."
	}
]

export const gestion_talento_humano = [
	{
		"id": 1,
		"question": "¿Cuál es el objetivo principal de la gestión del talento humano en las organizaciones?",
		"correct_answer": "Maximizar el potencial y desempeño de los colaboradores",
		"incorrect_answers": [
			"Reducir costos operativos",
			"Aumentar la producción sin importar la calidad",
			"Cumplir con la legislación laboral únicamente"
		],
		"description": "¡¡Correcto!!! La gestión del talento humano busca desarrollar las capacidades de los empleados para alcanzar los objetivos organizacionales."
	},
	{
		"id": 2,
		"question": "¿Qué ley regula principalmente las relaciones laborales en Colombia?",
		"correct_answer": "Código Sustantivo del Trabajo",
		"incorrect_answers": [
			"Ley 100 de 1993",
			"Ley 734 de 2002",
			"Ley 1618 de 2013"
		],
		"description": "¡¡Correcto!!! El Código Sustantivo del Trabajo establece las normas para las relaciones laborales en Colombia."
	},
	{
		"id": 3,
		"question": "¿Qué función cumple la evaluación del desempeño en la gestión del talento humano?",
		"correct_answer": "Medir y mejorar el rendimiento laboral de los empleados",
		"incorrect_answers": [
			"Registrar la asistencia diaria",
			"Determinar el salario base",
			"Cumplir requisitos legales sin impacto en el trabajo"
		],
		"description": "¡¡Correcto!!! La evaluación del desempeño ayuda a identificar fortalezas y áreas de mejora para el desarrollo profesional."
	},
	{
		"id": 4,
		"question": "¿Qué es la capacitación en el contexto del talento humano?",
		"correct_answer": "Proceso de formación para mejorar competencias y habilidades laborales",
		"incorrect_answers": [
			"Entrenamiento para tareas administrativas exclusivamente",
			"Proceso de selección de personal",
			"Evaluación de desempeño anual"
		],
		"description": "¡¡Correcto!!! La capacitación busca preparar a los colaboradores para cumplir mejor sus funciones."
	},
	{
		"id": 5,
		"question": "¿Qué papel juega el clima organizacional en la gestión del talento humano?",
		"correct_answer": "Influye en la motivación y productividad de los empleados",
		"incorrect_answers": [
			"Solo afecta la imagen externa de la empresa",
			"No tiene impacto en el trabajo diario",
			"Se limita a las relaciones entre gerentes"
		],
		"description": "¡¡Correcto!!! Un buen clima organizacional es clave para el bienestar y compromiso de los empleados."
	},
	{
		"id": 6,
		"question": "¿Qué es la selección de personal?",
		"correct_answer": "Proceso para elegir al candidato más idóneo para un puesto",
		"incorrect_answers": [
			"Contratar al primero que se postula",
			"Realizar capacitaciones internas",
			"Evaluar solo aspectos físicos del candidato"
		],
		"description": "¡¡Correcto!!! La selección busca asegurar que la persona contratada cumpla con el perfil requerido."
	},
	{
		"id": 7,
		"question": "¿Cuál es la importancia de la comunicación interna en la gestión del talento humano?",
		"correct_answer": "Facilitar la información y fortalecer las relaciones laborales",
		"incorrect_answers": [
			"Reducir la cantidad de reuniones",
			"Incrementar la burocracia administrativa",
			"Evitar conflictos sin diálogo"
		],
		"description": "¡¡Correcto!!! La comunicación efectiva es vital para la coordinación y motivación del equipo."
	},
	{
		"id": 8,
		"question": "¿Qué es la remuneración justa en el contexto laboral?",
		"correct_answer": "Pago adecuado que reconoce el valor y esfuerzo del trabajador",
		"incorrect_answers": [
			"El salario mínimo legal sin beneficios",
			"Pagar solo comisiones",
			"Retribución en especie sin dinero"
		],
		"description": "¡¡Correcto!!! Una remuneración justa contribuye a la satisfacción y retención del talento."
	},
	{
		"id": 9,
		"question": "¿Cuál es el objetivo del plan de desarrollo individual en una organización?",
		"correct_answer": "Potenciar habilidades y preparar para futuros retos laborales",
		"incorrect_answers": [
			"Aplicar sanciones disciplinarias",
			"Reducir el número de empleados",
			"Organizar actividades recreativas"
		],
		"description": "¡¡Correcto!!! Los planes de desarrollo personal buscan fortalecer las capacidades individuales para el crecimiento profesional."
	},
	{
		"id": 10,
		"question": "¿Qué es la retención del talento humano?",
		"correct_answer": "Conjunto de estrategias para mantener a los empleados valiosos en la empresa",
		"incorrect_answers": [
			"Obligar a los empleados a no renunciar",
			"Reducir salarios para ahorrar costos",
			"Evitar promociones internas"
		],
		"description": "¡¡Correcto!!! La retención busca evitar la rotación de personal clave y mantener el conocimiento en la organización."
	},
	{
		"id": 11,
		"question": "¿Qué es el proceso de inducción en la gestión del talento humano?",
		"correct_answer": "Integrar al nuevo empleado a la cultura y procesos de la organización",
		"incorrect_answers": [
			"Capacitarlo en temas técnicos exclusivamente",
			"Evaluar su desempeño desde el primer día",
			"Realizar la contratación formal"
		],
		"description": "¡¡Correcto!!! La inducción facilita la adaptación y alineación del nuevo colaborador con la empresa."
	},
	{
		"id": 12,
		"question": "¿Cuál es la finalidad de la política de igualdad y no discriminación en el trabajo?",
		"correct_answer": "Garantizar oportunidades iguales sin importar género, raza o religión",
		"incorrect_answers": [
			"Promover solo a hombres en cargos directivos",
			"Limitar la contratación a ciertos grupos",
			"Evitar la capacitación de ciertos empleados"
		],
		"description": "¡¡Correcto!!! La igualdad laboral es un derecho fundamental y fomenta ambientes inclusivos."
	},
	{
		"id": 13,
		"question": "¿Qué rol tiene el liderazgo en la gestión del talento humano?",
		"correct_answer": "Motivar y guiar al equipo hacia el logro de objetivos organizacionales",
		"incorrect_answers": [
			"Supervisar sin delegar responsabilidades",
			"Tomar todas las decisiones sin consultar",
			"Evitar el contacto con los colaboradores"
		],
		"description": "¡¡Correcto!!! Un buen líder inspira, apoya y facilita el desarrollo del equipo."
	},
	{
		"id": 14,
		"question": "¿Qué es la rotación de personal y por qué es importante gestionarla?",
		"correct_answer": "Cambio de empleados que puede afectar la productividad y cultura organizacional",
		"incorrect_answers": [
			"Incremento de empleados en una empresa",
			"Contratación temporal para eventos especiales",
			"Ausencia justificada por vacaciones"
		],
		"description": "¡¡Correcto!!! Gestionar la rotación ayuda a mantener la estabilidad y retener talento valioso."
	},
	{
		"id": 15,
		"question": "¿Cuál es la función del Comité Paritario de Seguridad y Salud en el Trabajo (COPASST)?",
		"correct_answer": "Promover condiciones seguras y saludables en el ambiente laboral",
		"incorrect_answers": [
			"Administrar los salarios de los empleados",
			"Realizar evaluaciones de desempeño",
			"Gestionar la contratación de personal"
		],
		"description": "¡¡Correcto!!! El COPASST vela por la prevención de riesgos laborales y el bienestar de los trabajadores."
	},
	{
		"id": 16,
		"question": "¿Qué es la gestión por competencias en el talento humano?",
		"correct_answer": "Identificar y desarrollar habilidades específicas para cada puesto de trabajo",
		"incorrect_answers": [
			"Evaluar solo el rendimiento económico",
			"Contratar personal sin perfil definido",
			"Realizar capacitaciones genéricas"
		],
		"description": "¡¡Correcto!!! Gestionar por competencias asegura que el personal tenga las capacidades necesarias para su rol."
	},
	{
		"id": 17,
		"question": "¿Qué significa la flexibilidad laboral en la gestión del talento humano?",
		"correct_answer": "Adaptar horarios y modalidades de trabajo para mejorar el bienestar del empleado",
		"incorrect_answers": [
			"Reducir salarios para ahorrar costos",
			"Eliminar beneficios laborales",
			"Obligar a trabajar horas extras sin compensación"
		],
		"description": "¡¡Correcto!!! La flexibilidad contribuye a la conciliación entre vida personal y laboral."
	},
	{
		"id": 18,
		"question": "¿Qué es el teletrabajo según la normativa colombiana?",
		"correct_answer": "Modalidad de trabajo que se realiza fuera de las instalaciones físicas de la empresa",
		"incorrect_answers": [
			"Trabajo sin supervisión ni reglas",
			"Trabajo presencial obligatorio",
			"Vacaciones prolongadas"
		],
		"description": "¡¡Correcto!!! El teletrabajo es regulado para garantizar derechos y obligaciones tanto del empleador como del empleado."
	},
	{
		"id": 19,
		"question": "¿Cuál es la importancia de la retroalimentación en el desarrollo profesional?",
		"correct_answer": "Permite identificar fortalezas y áreas de mejora para el crecimiento laboral",
		"incorrect_answers": [
			"Criticar sin ofrecer soluciones",
			"Evaluar solo la asistencia",
			"Ignorar el desempeño del empleado"
		],
		"description": "¡¡Correcto!!! La retroalimentación constructiva fomenta el aprendizaje y la mejora continua."
	},
	{
		"id": 20,
		"question": "¿Qué función cumple la gestión de la salud ocupacional en las empresas?",
		"correct_answer": "Prevenir enfermedades y accidentes laborales para proteger a los empleados",
		"incorrect_answers": [
			"Aumentar la carga laboral",
			"Reducir beneficios de salud",
			"Evitar controles médicos periódicos"
		],
		"description": "¡¡Correcto!!! La salud ocupacional es fundamental para mantener ambientes de trabajo seguros y saludables."
	},
	{
		"id": 21,
		"question": "¿Qué es el proceso de outplacement en una empresa?",
		"correct_answer": "Apoyo y asesoría para la reinserción laboral de empleados desvinculados",
		"incorrect_answers": [
			"Contratación externa de personal",
			"Capacitación interna para ascensos",
			"Evaluación de desempeño anual"
		],
		"description": "¡¡Correcto!!! El outplacement ayuda a los empleados a encontrar nuevas oportunidades fuera de la empresa."
	},
	{
		"id": 22,
		"question": "¿Cuál es el papel de la retroalimentación 360 grados en la gestión del talento humano?",
		"correct_answer": "Recibir evaluaciones de desempeño desde diferentes perspectivas: superiores, pares y subordinados",
		"incorrect_answers": [
			"Evaluación solo por el jefe inmediato",
			"Evaluación solo por recursos humanos",
			"Evaluación informal sin estructura"
		],
		"description": "¡¡Correcto!!! La retroalimentación 360 grados aporta una visión integral del desempeño del empleado."
	},
	{
		"id": 23,
		"question": "¿Qué es el employer branding y por qué es importante?",
		"correct_answer": "La imagen y reputación que tiene una empresa como empleadora para atraer talento",
		"incorrect_answers": [
			"El diseño del logo corporativo",
			"La publicidad de productos y servicios",
			"La estrategia de ventas"
		],
		"description": "¡¡Correcto!!! Un buen employer branding facilita la atracción y retención de talento."
	},
	{
		"id": 24,
		"question": "¿Qué implica la gestión del cambio en el talento humano?",
		"correct_answer": "Acompañar y facilitar la adaptación de los empleados a nuevas políticas o estructuras",
		"incorrect_answers": [
			"Implementar castigos por errores",
			"Evitar modificaciones en la empresa",
			"Cambiar la organización sin comunicación"
		],
		"description": "¡¡Correcto!!! La gestión del cambio busca minimizar resistencia y maximizar la aceptación."
	},
	{
		"id": 25,
		"question": "¿Qué es el plan de sucesión en una organización?",
		"correct_answer": "Identificar y preparar empleados para ocupar cargos claves en el futuro",
		"incorrect_answers": [
			"Reducir personal en áreas no productivas",
			"Contratar nuevos empleados constantemente",
			"Capacitar solo al personal operativo"
		],
		"description": "¡¡Correcto!!! El plan de sucesión garantiza la continuidad y estabilidad organizacional."
	},
	{
		"id": 26,
		"question": "¿Cuál es la función principal de los procesos de onboarding?",
		"correct_answer": "Integrar y acomodar al nuevo empleado en su rol y cultura organizacional",
		"incorrect_answers": [
			"Evaluar el desempeño al finalizar el contrato",
			"Planear la salida del empleado",
			"Reducir la carga laboral"
		],
		"description": "¡¡Correcto!!! El onboarding mejora la experiencia y retención del nuevo talento."
	},
	{
		"id": 27,
		"question": "¿Qué es la diversidad e inclusión en el talento humano?",
		"correct_answer": "Promover un ambiente laboral respetuoso y valorando diferencias individuales",
		"incorrect_answers": [
			"Contratar solo un tipo de perfil",
			"Excluir a minorías",
			"Evitar cambios en el equipo"
		],
		"description": "¡¡Correcto!!! La diversidad e inclusión enriquecen el ambiente y la creatividad organizacional."
	},
	{
		"id": 28,
		"question": "¿Qué importancia tiene el bienestar laboral para la gestión del talento humano?",
		"correct_answer": "Mejora la satisfacción, salud y productividad de los empleados",
		"incorrect_answers": [
			"Incrementa los costos sin beneficios",
			"Solo se enfoca en beneficios sociales",
			"No tiene impacto en la empresa"
		],
		"description": "¡¡Correcto!!! El bienestar laboral es clave para la motivación y retención del personal."
	},
	{
		"id": 29,
		"question": "¿Qué es un programa de incentivos en la gestión del talento humano?",
		"correct_answer": "Mecanismos para motivar y recompensar el buen desempeño de los empleados",
		"incorrect_answers": [
			"Multas por incumplimiento",
			"Aumentos salariales obligatorios",
			"Jornadas laborales extendidas"
		],
		"description": "¡¡Correcto!!! Los incentivos fomentan la productividad y compromiso con la empresa."
	},
	{
		"id": 30,
		"question": "¿Cuál es la función del área de recursos humanos en la gestión del talento humano?",
		"correct_answer": "Diseñar y ejecutar estrategias para atraer, desarrollar y retener talento",
		"incorrect_answers": [
			"Solo contratar personal",
			"Administrar únicamente la nómina",
			"Supervisar solo la disciplina"
		],
		"description": "¡¡Correcto!!! Recursos humanos gestiona integralmente el ciclo de vida del empleado en la organización."
	},
	{
		"id": 31,
		"question": "¿Qué es la capacitación laboral y cuál es su objetivo principal?",
		"correct_answer": "Proceso para mejorar habilidades y conocimientos de los empleados",
		"incorrect_answers": [
			"Reuniones informales entre empleados",
			"Evaluación anual sin seguimiento",
			"Contratar nuevos empleados"
		],
		"description": "¡¡Correcto!!! La capacitación potencia el desempeño y desarrollo profesional del talento humano."
	},
	{
		"id": 32,
		"question": "¿Qué papel juega la comunicación interna en la gestión del talento humano?",
		"correct_answer": "Facilitar el flujo de información y fortalecer el compromiso organizacional",
		"incorrect_answers": [
			"Generar rumores entre empleados",
			"Ocultar información importante",
			"Solo enviar correos formales"
		],
		"description": "¡¡Correcto!!! Una comunicación efectiva es clave para la coordinación y motivación del equipo."
	},
	{
		"id": 33,
		"question": "¿Qué es el análisis de clima laboral?",
		"correct_answer": "Evaluación del ambiente y condiciones de trabajo que afectan a los empleados",
		"incorrect_answers": [
			"Examen médico periódico",
			"Estudio de mercado externo",
			"Informe financiero anual"
		],
		"description": "¡¡Correcto!!! El análisis del clima laboral permite identificar áreas de mejora para aumentar la satisfacción."
	},
	{
		"id": 34,
		"question": "¿Qué son las competencias blandas y por qué son importantes?",
		"correct_answer": "Habilidades sociales y emocionales que facilitan la interacción y el trabajo en equipo",
		"incorrect_answers": [
			"Conocimientos técnicos específicos",
			"Certificaciones académicas",
			"Experiencia laboral previa"
		],
		"description": "¡¡Correcto!!! Las competencias blandas complementan las técnicas y mejoran la eficacia laboral."
	},
	{
		"id": 35,
		"question": "¿Qué es un plan de desarrollo profesional?",
		"correct_answer": "Estrategia para potenciar el crecimiento y aprendizaje continuo del empleado",
		"incorrect_answers": [
			"Plan para reducir costos en capacitación",
			"Documento para despidos masivos",
			"Horario laboral semanal"
		],
		"description": "¡¡Correcto!!! Este plan ayuda a alinear objetivos personales con los de la organización."
	},
	{
		"id": 36,
		"question": "¿Cuál es la importancia del trabajo en equipo dentro de una organización?",
		"correct_answer": "Potencia la colaboración y el logro de objetivos comunes",
		"incorrect_answers": [
			"Genera conflictos constantes",
			"Reduce la productividad",
			"Impide la comunicación"
		],
		"description": "¡¡Correcto!!! El trabajo en equipo fortalece el ambiente laboral y los resultados."
	},
	{
		"id": 37,
		"question": "¿Qué es la evaluación del desempeño y para qué sirve?",
		"correct_answer": "Proceso para medir y mejorar el rendimiento laboral de los empleados",
		"incorrect_answers": [
			"Castigo por errores cometidos",
			"Proceso para despedir empleados",
			"Revisión de horarios únicamente"
		],
		"description": "¡¡Correcto!!! Permite detectar fortalezas y áreas de mejora para el desarrollo profesional."
	},
	{
		"id": 38,
		"question": "¿Qué significa el concepto de talento crítico en la gestión del talento humano?",
		"correct_answer": "Empleados con habilidades y conocimientos clave para el éxito organizacional",
		"incorrect_answers": [
			"Personal de apoyo administrativo",
			"Empleados temporales",
			"Contratistas externos"
		],
		"description": "¡¡Correcto!!! Identificar talento crítico ayuda a enfocarse en su retención y desarrollo."
	},
	{
		"id": 39,
		"question": "¿Cuál es el objetivo principal de la gestión del desempeño?",
		"correct_answer": "Mejorar la productividad y el desarrollo continuo de los empleados",
		"incorrect_answers": [
			"Reducir el número de empleados",
			"Incrementar las horas de trabajo",
			"Evitar evaluaciones periódicas"
		],
		"description": "¡¡Correcto!!! Gestionar el desempeño impulsa la mejora constante y el logro de metas."
	},
	{
		"id": 40,
		"question": "¿Qué son los planes de bienestar laboral?",
		"correct_answer": "Programas diseñados para mejorar la calidad de vida de los empleados en la empresa",
		"incorrect_answers": [
			"Planes para aumentar la carga laboral",
			"Programas para recortar beneficios",
			"Estrategias para reducir salarios"
		],
		"description": "¡¡Correcto!!! Los planes de bienestar contribuyen a la motivación y salud integral del personal."
	},
	{
		"id": 41,
		"question": "¿Qué es la movilidad laboral dentro de una empresa?",
		"correct_answer": "El traslado o cambio de un empleado a diferentes puestos o áreas dentro de la organización",
		"incorrect_answers": [
			"Despido de empleados",
			"Contratación externa",
			"Reducción de jornada laboral"
		],
		"description": "¡¡Correcto!!! La movilidad laboral permite desarrollar habilidades y retener talento al ofrecer nuevas oportunidades."
	},
	{
		"id": 42,
		"question": "¿Cuál es la importancia del liderazgo en la gestión del talento humano?",
		"correct_answer": "Motivar, guiar y apoyar al equipo para alcanzar objetivos organizacionales",
		"incorrect_answers": [
			"Imponer reglas estrictas sin diálogo",
			"Delegar sin supervisión",
			"Evitar la comunicación con el equipo"
		],
		"description": "¡¡Correcto!!! Un buen liderazgo impulsa el compromiso y desempeño del personal."
	},
	{
		"id": 43,
		"question": "¿Qué es la gestión por competencias?",
		"correct_answer": "Modelo que identifica y desarrolla habilidades necesarias para el éxito en el trabajo",
		"incorrect_answers": [
			"Proceso de selección aleatoria",
			"Evaluación económica de la empresa",
			"Contratación basada en antigüedad"
		],
		"description": "¡¡Correcto!!! La gestión por competencias permite alinear talento con necesidades organizacionales."
	},
	{
		"id": 44,
		"question": "¿Qué es la retención de talento?",
		"correct_answer": "Estrategias para mantener a los empleados valiosos y evitar su salida",
		"incorrect_answers": [
			"Contratar nuevo personal frecuentemente",
			"Reducir beneficios laborales",
			"No ofrecer oportunidades de crecimiento"
		],
		"description": "¡¡Correcto!!! La retención asegura la estabilidad y continuidad en la empresa."
	},
	{
		"id": 45,
		"question": "¿Cuál es el propósito de un programa de mentoría en la gestión del talento humano?",
		"correct_answer": "Guiar y apoyar el desarrollo profesional de empleados menos experimentados",
		"incorrect_answers": [
			"Evaluar el desempeño anual",
			"Capacitar en temas técnicos únicamente",
			"Reducir la comunicación interna"
		],
		"description": "¡¡Correcto!!! La mentoría fomenta el aprendizaje y crecimiento dentro de la organización."
	},
	{
		"id": 46,
		"question": "¿Qué papel juega la evaluación  de clima organizacional en la gestión del talento humano?",
		"correct_answer": "Identificar aspectos que afectan el ambiente laboral y tomar acciones para mejorarlo",
		"incorrect_answers": [
			"Medir la productividad individual",
			"Contabilizar ausencias laborales",
			"Gestionar solo la nómina"
		],
		"description": "¡¡Correcto!!! El clima organizacional influye directamente en la satisfacción y desempeño de los empleados."
	},
	{
		"id": 47,
		"question": "¿Qué es un plan de formación continua?",
		"correct_answer": "Programa constante de capacitación para mantener actualizados a los empleados",
		"incorrect_answers": [
			"Evaluación para despedir empleados",
			"Reducción de horarios laborales",
			"Plan para reducir costos en personal"
		],
		"description": "¡¡Correcto!!! La formación continua es vital para la competitividad y crecimiento profesional."
	},
	{
		"id": 48,
		"question": "¿Cuál es la función del proceso de selección en la gestión del talento humano?",
		"correct_answer": "Identificar y elegir candidatos adecuados para un puesto de trabajo",
		"incorrect_answers": [
			"Asignar tareas a empleados actuales",
			"Evaluar salarios del personal",
			"Capacitar a los empleados"
		],
		"description": "¡¡Correcto!!! La selección asegura la incorporación del talento que mejor se ajusta a la organización."
	},
	{
		"id": 49,
		"question": "¿Qué es la planificación estratégica de recursos humanos?",
		"correct_answer": "Definir políticas y acciones para satisfacer las necesidades futuras de talento",
		"incorrect_answers": [
			"Reducir el personal sin planificación",
			"Aumentar la carga laboral sin análisis",
			"Evaluar solo desempeño pasado"
		],
		"description": "¡¡Correcto!!! La planificación estratégica permite anticipar cambios y preparar al talento necesario."
	},
	{
		"id": 50,
		"question": "¿Qué importancia tiene la ética profesional en la gestión del talento humano?",
		"correct_answer": "Garantiza un comportamiento responsable, justo y transparente dentro de la organización",
		"incorrect_answers": [
			"Permite justificar malas prácticas",
			"No afecta el ambiente laboral",
			"Es irrelevante en la gestión"
		],
		"description": "¡¡Correcto!!! La ética profesional fortalece la confianza y el buen clima organizacional."
	}
]

export const seguridad_salud_trabajo = [
	{
		"id": 1,
		"question": "¿Cuál es el objetivo principal del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST)?",
		"correct_answer": "Prevenir accidentes y enfermedades laborales",
		"incorrect_answers": ["Reducir los costos de producción", "Incrementar las ventas", "Capacitar al personal en finanzas"],
		"description": "¡¡Correcto!!! El SG-SST busca anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud de los trabajadores."
	},
	{
		"id": 2,
		"question": "¿Cuál es la norma que regula el SG-SST en Colombia?",
		"correct_answer": "Decreto 1072 de 2015",
		"incorrect_answers": ["Ley 100 de 1993", "Decreto 1295 de 1994", "Ley 1562 de 2012"],
		"description": "¡¡Correcto!!! El Decreto 1072 de 2015 compila las normas del sector trabajo, incluyendo las relacionadas con el SG-SST."
	},
	{
		"id": 3,
		"question": "¿Qué entidad vigila el cumplimiento del SG-SST en Colombia?",
		"correct_answer": "Ministerio del Trabajo",
		"incorrect_answers": ["ARL", "Ministerio de Salud", "Superintendencia de Industria"],
		"description": "¡¡Correcto!!! El Ministerio del Trabajo es la autoridad competente para verificar que las empresas implementen el SG-SST."
	},
	{
		"id": 4,
		"question": "¿Con qué frecuencia mínima debe actualizarse la matriz de peligros?",
		"correct_answer": "Cada año o cuando ocurran cambios significativos",
		"incorrect_answers": ["Cada 5 años", "Sólo al iniciar el SG-SST", "Nunca"],
		"description": "¡¡Correcto!!! La actualización anual o por cambios relevantes garantiza que la matriz esté alineada con los riesgos reales del entorno laboral."
	},
	{
		"id": 5,
		"question": "¿Cuál es el documento que establece los riesgos, medidas preventivas y controles en un área de trabajo?",
		"correct_answer": "Matriz de peligros",
		"incorrect_answers": ["Manual de funciones", "Código de conducta", "Inventario de activos"],
		"description": "¡¡Correcto!!! La matriz de peligros es una herramienta clave para identificar y gestionar riesgos laborales."
	},
	{
		"id": 6,
		"question": "¿Quiénes están obligados a implementar el SG-SST en Colombia?",
		"correct_answer": "Todas las empresas, independientemente de su tamaño o actividad",
		"incorrect_answers": ["Solo empresas con más de 10 empleados", "Solo del sector industrial", "Solo empresas del Estado"],
		"description": "¡¡Correcto!!! Toda organización con al menos un trabajador debe implementar el SG-SST según la normatividad colombiana."
	},
	{
		"id": 7,
		"question": "¿Qué es una condición insegura?",
		"correct_answer": "Una situación que puede causar un accidente de trabajo",
		"incorrect_answers": ["Un trabajador que se queja mucho", "Un error en el pago de nómina", "Una enfermedad común"],
		"description": "¡¡Correcto!!! Las condiciones inseguras son factores del entorno que aumentan la probabilidad de un incidente laboral."
	},
	{
		"id": 8,
		"question": "¿Cuál es el propósito de las pausas activas en el trabajo?",
		"correct_answer": "Prevenir trastornos músculo-esqueléticos",
		"incorrect_answers": ["Reducir el tiempo de trabajo", "Aumentar la productividad", "Verificar el desempeño laboral"],
		"description": "¡¡Correcto!!! Las pausas activas mejoran la salud física y mental del trabajador, reduciendo el riesgo de lesiones por movimientos repetitivos."
	},
	{
		"id": 9,
		"question": "¿Qué es un accidente de trabajo según la legislación colombiana?",
		"correct_answer": "Todo suceso repentino que sobrevenga por causa o con ocasión del trabajo",
		"incorrect_answers": ["Solo los accidentes en la calle", "Enfermedad común", "Una sanción disciplinaria"],
		"description": "¡¡Correcto!!! Así lo establece el Decreto 1295 de 1994 en Colombia."
	},
	{
		"id": 10,
		"question": "¿Qué debe hacer un trabajador al identificar un riesgo en su lugar de trabajo?",
		"correct_answer": "Reportarlo de inmediato al responsable de seguridad y salud en el trabajo",
		"incorrect_answers": ["Ignorarlo si no es grave", "Intentar corregirlo solo", "Esperar a que lo detecte un supervisor"],
		"description": "¡¡Correcto!!! Reportar riesgos es un deber del trabajador y una acción clave para prevenir accidentes."
	},
	{
		"id": 11,
		"question": "¿Qué es la ergonomía?",
		"correct_answer": "La disciplina que adapta el trabajo al trabajador",
		"incorrect_answers": ["La ciencia que estudia las enfermedades ocupacionales", "Una técnica de gestión del tiempo", "Un programa de salud mental"],
		"description": "¡¡Correcto!!! La ergonomía busca adaptar las condiciones de trabajo a las capacidades físicas y cognitivas del trabajador para mejorar la salud y el desempeño."
	},
	{
		"id": 12,
		"question": "¿Cuál de los siguientes es un objetivo de la ergonomía?",
		"correct_answer": "Reducir lesiones músculo-esqueléticas",
		"incorrect_answers": ["Mejorar la apariencia de la oficina", "Capacitar en seguridad informática", "Diseñar turnos rotativos"],
		"description": "¡¡Correcto!!! La ergonomía busca prevenir trastornos físicos derivados de posturas forzadas, movimientos repetitivos o cargas excesivas."
	},
	{
		"id": 13,
		"question": "¿Qué postura se recomienda al trabajar frente a un computador?",
		"correct_answer": "Espalda recta, pies apoyados y monitor a la altura de los ojos",
		"incorrect_answers": ["Espalda encorvada y pantalla al nivel del pecho", "Sentado con las piernas cruzadas", "De pie con el teclado en alto"],
		"description": "¡¡Correcto!!! Una postura ergonómica adecuada previene dolores musculares, fatiga visual y lesiones."
	},
	{
		"id": 14,
		"question": "¿Cuál es un riesgo ergonómico común en oficinas?",
		"correct_answer": "Movimientos repetitivos en el teclado",
		"incorrect_answers": ["Exposición a ruidos intensos", "Contacto con sustancias tóxicas", "Caídas desde alturas"],
		"description": "¡¡Correcto!!! Los movimientos repetitivos como escribir en el teclado pueden generar lesiones por esfuerzo repetitivo como el síndrome del túnel carpiano."
	},
	{
		"id": 15,
		"question": "¿Qué equipo ayuda a mejorar la ergonomía en un puesto de trabajo?",
		"correct_answer": "Silla ergonómica ajustable",
		"incorrect_answers": ["Ventilador portátil", "Extintor manual", "Botiquín de primeros auxilios"],
		"description": "¡¡Correcto!!! Una silla ergonómica ayuda a mantener la postura adecuada y reduce la tensión en la espalda y el cuello."
	},
	{
		"id": 16,
		"question": "¿Cuál es la recomendación para trabajos que requieren estar de pie por mucho tiempo?",
		"correct_answer": "Usar descansapies o alfombras antifatiga",
		"incorrect_answers": ["Usar zapatos de tacón", "Permanecer inmóvil", "Llevar casco en todo momento"],
		"description": "¡¡Correcto!!! Las alfombras antifatiga y los descansapies reducen la presión en las piernas y la fatiga muscular."
	},
	{
		"id": 17,
		"question": "¿Qué medida puede prevenir lesiones ergonómicas al cargar objetos?",
		"correct_answer": "Doblar las rodillas y mantener la espalda recta",
		"incorrect_answers": ["Girar el torso al levantar", "Doblar la espalda completamente", "Cargar solo con los brazos"],
		"description": "¡¡Correcto!!! Levantar objetos con la técnica correcta protege la columna vertebral y evita lesiones."
	},
	{
		"id": 18,
		"question": "¿Qué se entiende por trastorno músculo-esquelético relacionado con el trabajo?",
		"correct_answer": "Lesiones en músculos, tendones o articulaciones causadas por el trabajo",
		"incorrect_answers": ["Resfriados comunes", "Enfermedades de transmisión sexual", "Problemas de visión congénitos"],
		"description": "¡¡Correcto!!! Estos trastornos son comunes en actividades que implican esfuerzo físico, mala postura o movimientos repetitivos."
	},
	{
		"id": 19,
		"question": "¿Qué componente del SG-SST incluye la evaluación ergonómica?",
		"correct_answer": "Identificación de peligros y evaluación de riesgos",
		"incorrect_answers": ["Análisis financiero", "Informe de sostenibilidad", "Presupuesto de mercadeo"],
		"description": "¡¡Correcto!!! La evaluación ergonómica forma parte del análisis de riesgos laborales que deben incluirse en el SG-SST."
	},
	{
		"id": 20,
		"question": "¿Cuál es una consecuencia común de una mala postura prolongada en el trabajo?",
		"correct_answer": "Dolor lumbar y cervical",
		"incorrect_answers": ["Fractura ósea", "Gripe recurrente", "Cansancio visual inmediato"],
		"description": "¡¡Correcto!!! Una postura incorrecta mantenida por tiempo prolongado puede causar lesiones en la columna y otros problemas musculares."
	},
	{
		"id": 21,
		"question": "¿Cuál es la norma que establece el Sistema de Gestión de la Seguridad y Salud en el Trabajo en Colombia?",
		"correct_answer": "Decreto 1072 de 2015",
		"incorrect_answers": ["Ley 100 de 1993", "Ley 1010 de 2006", "Decreto 1295 de 1994"],
		"description": "¡¡Correcto!!! El Decreto 1072 de 2015 compila y reglamenta las normas del sector trabajo, incluyendo el SG-SST."
	},
	{
		"id": 22,
		"question": "¿Qué entidad es la encargada de vigilar el cumplimiento del SG-SST en Colombia?",
		"correct_answer": "Ministerio del Trabajo",
		"incorrect_answers": ["ARL", "EPS", "SENA"],
		"description": "¡¡Correcto!!! El Ministerio del Trabajo es la autoridad encargada de inspeccionar, vigilar y controlar el cumplimiento de las normas en SST."
	},
	{
		"id": 23,
		"question": "¿Cada cuánto tiempo debe revisarse el Plan de Trabajo Anual del SG-SST según la normativa vigente?",
		"correct_answer": "Cada año",
		"incorrect_answers": ["Cada dos años", "Cada seis meses", "Cada cinco años"],
		"description": "¡¡Correcto!!! El plan de trabajo debe revisarse y actualizarse anualmente para mantener la mejora continua del SG-SST."
	},
	{
		"id": 24,
		"question": "¿Cuál de los siguientes documentos es obligatorio para evidenciar la implementación del SG-SST?",
		"correct_answer": "Matriz de peligros",
		"incorrect_answers": ["Manual de funciones", "Código de ética", "Certificado de afiliación EPS"],
		"description": "¡¡Correcto!!! La matriz de peligros es un documento clave en la identificación de riesgos dentro del SG-SST."
	},
	{
		"id": 25,
		"question": "¿Cuál es la ley que establece el derecho de los trabajadores a un ambiente laboral sano y seguro?",
		"correct_answer": "Ley 1562 de 2012",
		"incorrect_answers": ["Ley 100 de 1993", "Ley 1090 de 2006", "Ley 80 de 1993"],
		"description": "¡¡Correcto!!! La Ley 1562 de 2012 fortalece el sistema de riesgos laborales y promueve condiciones laborales seguras."
	},
	{
		"id": 26,
		"question": "¿Qué busca la promoción de la salud en el entorno laboral?",
		"correct_answer": "Fomentar hábitos saludables y prevenir enfermedades",
		"incorrect_answers": ["Imponer normas estrictas de comportamiento", "Reducir la carga laboral", "Aumentar la jornada laboral"],
		"description": "¡¡Correcto!!! La promoción de la salud busca crear entornos de trabajo que favorezcan el bienestar físico, mental y social del trabajador."
	},
	{
		"id": 27,
		"question": "Una estrategia común para la promoción de la salud en las empresas es:",
		"correct_answer": "Jornadas de actividad física y pausas activas",
		"incorrect_answers": ["Aumento de turnos nocturnos", "Revisión de contratos", "Reducción de vacaciones"],
		"description": "¡¡Correcto!!! Las pausas activas y la actividad física ayudan a prevenir enfermedades músculo-esqueléticas y mejorar la salud general."
	},
	{
		"id": 28,
		"question": "¿Qué instrumento guía la promoción de la salud en el ambiente laboral en Colombia?",
		"correct_answer": "Resolución 0312 de 2019",
		"incorrect_answers": ["Decreto 1010 de 2006", "Ley 50 de 1990", "Decreto 2150 de 1995"],
		"description": "¡¡Correcto!!! La Resolución 0312 de 2019 establece los estándares mínimos del SG-SST, incluyendo acciones de promoción y prevención."
	},
	{
		"id": 29,
		"question": "¿Qué tipo de enfoque promueve la promoción de la salud en el trabajo?",
		"correct_answer": "Preventivo y proactivo",
		"incorrect_answers": ["Correctivo", "Punitivo", "Competitivo"],
		"description": "¡¡Correcto!!! Se trata de un enfoque preventivo, que busca anticiparse a los riesgos y fomentar la salud de manera proactiva."
	},
	{
		"id": 30,
		"question": "¿Cuál es un beneficio organizacional de promover la salud en el lugar de trabajo?",
		"correct_answer": "Disminución del ausentismo laboral",
		"incorrect_answers": ["Incremento del estrés", "Aumento en sanciones disciplinarias", "Reducción en el número de empleados"],
		"description": "¡¡Correcto!!! Las estrategias de promoción de la salud reducen las enfermedades y el ausentismo, mejorando la productividad."
	},
	{
		"id": 31,
		"question": "¿Qué es la gestión del riesgo en Seguridad y Salud en el Trabajo?",
		"correct_answer": "El proceso para identificar, evaluar y controlar los riesgos laborales",
		"incorrect_answers": [
			"Un sistema para aumentar la producción",
			"La imposición de multas a los trabajadores",
			"Un plan para reducir el salario"
		],
		"description": "¡¡Correcto!!! La gestión del riesgo implica identificar peligros, evaluar riesgos y establecer controles para prevenir accidentes y enfermedades laborales."
	},
	{
		"id": 32,
		"question": "¿Cuál es el primer paso para una adecuada gestión del riesgo en el trabajo?",
		"correct_answer": "Identificación de peligros",
		"incorrect_answers": [
			"Control de riesgos",
			"Capacitación a empleados",
			"Inspección final"
		],
		"description": "¡¡Correcto!!! Antes de controlar un riesgo, debe ser identificado claramente para tomar medidas efectivas."
	},
	{
		"id": 33,
		"question": "¿Qué herramienta se utiliza para evaluar los riesgos laborales?",
		"correct_answer": "Matriz de riesgos",
		"incorrect_answers": [
			"Mapa mental",
			"Encuesta de satisfacción",
			"Manual de funciones"
		],
		"description": "¡¡Correcto!!! La matriz de riesgos permite clasificar y priorizar los riesgos según su probabilidad y severidad."
	},
	{
		"id": 34,
		"question": "¿Qué tipo de medidas corresponden a la gestión del riesgo?",
		"correct_answer": "Medidas de prevención y control",
		"incorrect_answers": [
			"Medidas punitivas",
			"Medidas administrativas para despidos",
			"Medidas de marketing"
		],
		"description": "¡¡Correcto!!! La gestión del riesgo busca implementar controles para minimizar o eliminar riesgos."
	},
	{
		"id": 35,
		"question": "¿Quién debe participar en la gestión del riesgo en una empresa?",
		"correct_answer": "Todos los trabajadores y empleadores",
		"incorrect_answers": [
			"Solo el jefe inmediato",
			"Solo el área de recursos humanos",
			"Solo los supervisores"
		],
		"description": "¡¡Correcto!!! La gestión del riesgo es una responsabilidad compartida para asegurar un ambiente laboral seguro."
	},
	{
		"id": 36,
		"question": "¿Cuál es el objetivo principal de la prevención de accidentes laborales?",
		"correct_answer": "Evitar la ocurrencia de accidentes y enfermedades laborales",
		"incorrect_answers": [
			"Incrementar la producción",
			"Reducir costos sin importar la seguridad",
			"Sancionar a los empleados"
		],
		"description": "¡¡Correcto!!! La prevención busca proteger la integridad física y mental de los trabajadores, evitando accidentes y enfermedades."
	},
	{
		"id": 37,
		"question": "¿Qué es una investigación de accidentes laborales?",
		"correct_answer": "El análisis detallado de las causas que provocaron un accidente",
		"incorrect_answers": [
			"Una sanción al trabajador involucrado",
			"Un reporte para la gerencia sin seguimiento",
			"Un trámite burocrático sin relevancia"
		],
		"description": "¡¡Correcto!!! Investigar accidentes permite identificar fallas y evitar que se repitan."
	},
	{
		"id": 38,
		"question": "¿Qué elemento es clave para la prevención de accidentes en la empresa?",
		"correct_answer": "Capacitación continua en seguridad y uso de EPP",
		"incorrect_answers": [
			"Incrementar la jornada laboral",
			"Reducir la comunicación interna",
			"Ignorar los reportes de incidentes"
		],
		"description": "¡¡Correcto!!! La formación constante y el uso adecuado de equipos de protección personal son esenciales para prevenir accidentes."
	},
	{
		"id": 39,
		"question": "¿Qué significa EPP en Seguridad y Salud en el Trabajo?",
		"correct_answer": "Equipo de Protección Personal",
		"incorrect_answers": [
			"Evaluación de Procedimientos de Producción",
			"Entidad Promotora de Prestaciones",
			"Elemento de Planeación Productiva"
		],
		"description": "¡¡Correcto!!! El EPP es el conjunto de elementos destinados a proteger al trabajador de riesgos específicos."
	},
	{
		"id": 40,
		"question": "¿Qué rol juega la señalización en la prevención de accidentes?",
		"correct_answer": "Indicar riesgos y medidas de seguridad para evitar accidentes",
		"incorrect_answers": [
			"Decorar las áreas de trabajo",
			"Reducir la visibilidad en zonas peligrosas",
			"Controlar la entrada de visitantes"
		],
		"description": "¡¡Correcto!!! La señalización advierte sobre peligros y guía comportamientos seguros en el lugar de trabajo."
	},
	{
		"id": 41,
		"question": "¿Qué debe contener un plan de emergencia en una empresa?",
		"correct_answer": "Procedimientos claros para evacuar y atender emergencias",
		"incorrect_answers": [
			"Solo una lista de empleados",
			"Un informe de ventas",
			"Un manual de calidad sin relación"
		],
		"description": "¡¡Correcto!!! Un plan de emergencia debe incluir rutas de evacuación, roles y acciones a seguir en caso de accidentes o desastres."
	},
	{
		"id": 42,
		"question": "¿Qué es un accidente de trabajo según la legislación colombiana?",
		"correct_answer": "Un suceso que causa lesión o enfermedad debido a la actividad laboral",
		"incorrect_answers": [
			"Una falla administrativa",
			"Un retraso en la entrega de productos",
			"Un problema de transporte"
		],
		"description": "¡¡Correcto!!! El accidente laboral es un evento inesperado que afecta la salud del trabajador en relación con su trabajo."
	},
	{
		"id": 43,
		"question": "¿Quién debe reportar un accidente laboral en la empresa?",
		"correct_answer": "El trabajador afectado o un testigo inmediato",
		"incorrect_answers": [
			"Solo el jefe inmediato",
			"Solo el área de recursos humanos",
			"Nadie está obligado a reportar"
		],
		"description": "¡¡Correcto!!! La ley obliga a reportar accidentes para tomar acciones oportunas y evitar futuros incidentes."
	},
	{
		"id": 44,
		"question": "¿Qué entidad en Colombia supervisa el cumplimiento de normas de Seguridad y Salud en el Trabajo?",
		"correct_answer": "Ministerio del Trabajo",
		"incorrect_answers": [
			"Ministerio de Hacienda",
			"DIAN",
			"Superintendencia de Industria y Comercio"
		],
		"description": "¡¡Correcto!!! El Ministerio del Trabajo vigila que las empresas cumplan con las normas SST para proteger a los trabajadores."
	},
	{
		"id": 45,
		"question": "¿Qué se entiende por riesgo laboral?",
		"correct_answer": "La probabilidad de que un trabajador sufra un daño por un peligro en el trabajo",
		"incorrect_answers": [
			"El salario que recibe un trabajador",
			"La calidad del producto fabricado",
			"El tiempo de descanso"
		],
		"description": "¡¡Correcto!!! El riesgo laboral evalúa la posibilidad de sufrir accidentes o enfermedades por condiciones del entorno laboral."
	},
	{
		"id": 46,
		"question": "¿Cuál es la función principal del Comité Paritario de Seguridad y Salud en el Trabajo (COPASST)?",
		"correct_answer": "Promover y vigilar el cumplimiento de las normas de SST en la empresa",
		"incorrect_answers": [
			"Controlar la producción",
			"Evaluar el desempeño laboral",
			"Administrar las finanzas"
		],
		"description": "¡¡Correcto!!! El COPASST es un espacio de participación de trabajadores y empleadores para garantizar condiciones seguras."
	},
	{
		"id": 47,
		"question": "¿Qué es un peligro en el contexto de SST?",
		"correct_answer": "Cualquier fuente o situación que puede causar daño o lesión",
		"incorrect_answers": [
			"Un trabajador nuevo",
			"Un horario laboral largo",
			"Un proceso administrativo"
		],
		"description": "¡¡Correcto!!! Identificar peligros es esencial para prevenir riesgos y accidentes en el trabajo."
	},
	{
		"id": 48,
		"question": "¿Qué debe hacerse tras la identificación de un peligro en el lugar de trabajo?",
		"correct_answer": "Evaluar el riesgo asociado y tomar medidas de control",
		"incorrect_answers": [
			"Ignorar el peligro",
			"Aumentar la producción",
			"Cambiar el horario de trabajo"
		],
		"description": "¡¡Correcto!!! Identificar un peligro debe seguirse con su evaluación y acciones para evitar daños."
	},
	{
		"id": 49,
		"question": "¿Qué es la vigilancia epidemiológica en SST?",
		"correct_answer": "Monitorear la salud de los trabajadores y detectar enfermedades ocupacionales",
		"incorrect_answers": [
			"Registrar las ventas de la empresa",
			"Controlar el inventario",
			"Supervisar horarios"
		],
		"description": "¡¡Correcto!!! La vigilancia epidemiológica ayuda a prevenir y controlar enfermedades relacionadas con el trabajo."
	},
	{
		"id": 50,
		"question": "¿Qué ley en Colombia regula la Seguridad y Salud en el Trabajo?",
		"correct_answer": "Ley 1562 de 2012",
		"incorrect_answers": [
			"Ley 100 de 1993",
			"Ley 734 de 2002",
			"Ley 142 de 1994"
		],
		"description": "¡¡Correcto!!! La Ley 1562 establece el marco legal para la prevención, protección y promoción en SST."
	}
]