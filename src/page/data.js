import ag1 from '../assets/ag1.png';
import cgDIAN from '../assets/cgDIAN.png'
import ofimatica from '../assets/ofimatica.png'
import basicas_organizacionales from '../assets/basicas_organizacionales.png'
import integridad from '../assets/integridad.png'
import tributarios1 from '../assets/tributarios1.png'
import conductuales from '../assets/conductuales.png'
import tramitesServicios from '../assets/tramitesServicios.png'
import competencia_admin from '../assets/competencia_administrativa.jpg'



export const imgs = [
	ag1,
	cgDIAN,  //conceptos generales DIAN
	ofimatica,
	basicas_organizacionales,
	integridad,
	tributarios1,
	conductuales,
	tramitesServicios,
	competencia_admin
];

export const categories = {
	aspectos_generales: 'Aspectos generales',
	conceptos_generales_DIAN: 'Conceptos generales DIAN',
	ofimatica_sistemas: 'Ofimática y Sistemas',
	basicas_organizacionales: 'Basicas Organizacionales',
	prueba_integridad: 'Prueba de Integridad',
	conocimientosTributariosI: 'Conocimientos Tributarios I',
	conductuales: "Conductuales e interpersonales",
	tramitesServicios: "Trámites y servicios",
	competencia_administrativa: "Competencia administrativa",
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
	/* {
		id:,
		question:'',
		correct_answer:,
		incorrect_answers:['',''],
		description:''
	} */

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
	}


]

export const conocimientosTributariosI = [
	{
		id: 1,
		question: 'En el desarrollo de sus funciones al interior de la DIAN, usted debe realizar un análisis sobre la corporación XYZ, la cual percibe rentas susceptibles de distribuirse total o parcialmente a cualquier título a personas naturales, directamente o a través de otras personas jurídicas, durante su existencia o al momento de su liquidación. Con esta información usted puede:',
		correct_answer: 'Identificar que la corporación XYZ es una organización con fines de lucro.',
		incorrect_answers: ['Determinar que la corporación XYZ es una organización sin fines de lucro', 'Inferir que se trata de una comunidad organizada sin fines de lucro.'],
		description: '¡¡¡Correcto!!! Se entiende que las corporaciones o asociaciones tienen fines de lucro cuando perciban rentas susceptibles de distribuirse total o parcialmente a cualquier título a personas naturales, directamente o a través de otras personas jurídicas, durante su existencia o al momento de su liquidación. Decreto 1625 de 2016, Artículo 1.2.1.1.2'
	}
	/* {
		id:,
		question:'',
		correct_answer:'',
		incorrect_answers:['','',''],
		description:
	} */
	/* {
		id:,
		question:'',
		correct_answer:'',
		incorrect_answers:['','',''],
		description:
	} */
	/* {
		id:,
		question:'',
		correct_answer:'',
		incorrect_answers:['','',''],
		description:
	} */
	/* {
		id:,
		question:'',
		correct_answer:'',
		incorrect_answers:['','',''],
		description:
	} */
	/* {
		id:,
		question:'',
		correct_answer:'',
		incorrect_answers:['','',''],
		description:
	} */
	/* {
		id:,
		question:'',
		correct_answer:'',
		incorrect_answers:['','',''],
		description:
	} */
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
	}


]

export const tramites_Servicios = [
	{
		id: 1,
		question: '',
		correct_answer: '',
		incorrect_answers: ['', '', ''],
		description: ''
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
		description: "Las Corporaciones Autónomas Regionales no son consideradas dentro de las carreras administrativas especiales."
	},
	{
		id: 32,
		question: "Según el Art. 3º de la ley 909 de 2.004 son todas Carreras Administrativas especiales, Excepto en:",
		correct_answer: "Las contralorías Territoriales",
		incorrect_answers: [
			"La Contraloría General de la República",
			"La Fiscalía General de la Nación",
			"Las personerías"],

		description: "Las contralorías Territoriales no están dentro de las carreras administrativas especiales."
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
		description: "Estos empleados son considerados trabajadores oficiales según la normativa."
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
		description: "El personal regido por la Carrera Diplomática y Consular no está dentro de las carreras administrativas especiales."
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
		description: "El personal del Departamento Administrativo de la Presidencia de la República está regido por una carrera administrativa especial."
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
		description: "Las entidades territoriales como los Departamentos no están regidas por la ley de carrera administrativa."
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
		description: "El personal científico y tecnológico está regido por una carrera administrativa específica."
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
		description: "Estas personas son consideradas empleados de libre nombramiento y remoción."
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
		description: "El personal de los Establecimientos Públicos no tiene un sistema de carrera administrativa específico."
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
		description: "El personal de la Aeronáutica Civil está regido por una carrera administrativa regular."
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
		description: "La Comisión Nacional del Servicio Civil es la encargada de la vigilancia en los sistemas de carreras administrativas específicas."
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
		description: "Tanto los constructores como los obreros en obras públicas son considerados trabajadores oficiales."
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
		description: "Estas carreras administrativas son específicas debido a la especialidad de las funciones que realizan las entidades."
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
		description: "El personal del Departamento Administrativo de la Presidencia de la República no tiene un sistema específico de carrera administrativa."
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
		description: "Estas personas estarán regidas por las normas de la carrera administrativa."
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
		description: "La función pública tiene como finalidad principal la satisfacción del interés general."
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
		description: "El principio de transparencia garantiza procesos limpios, claros y objetivos."
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
		description: "El principio de economía busca reducir gastos innecesarios y simplificar los procedimientos."
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
		description: "Este principio garantiza igualdad de condiciones en el acceso a cargos públicos."
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
		description: "La carrera administrativa incluye normas de equidad y paridad de género en el acceso a cargos."
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
		description: "El principio de imparcialidad exige neutralidad y equidad en la selección de personal."
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
		description: "Este principio busca asegurar equidad de género en los procesos de selección."
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
		description: "La CNSC es la entidad encargada de la carrera administrativa."
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
		description: "El traslado debe mantener la naturaleza del empleo público de carrera."
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
		description: "El período de los comisionados está establecido en la ley como de cuatro años sin reelección."
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
		description: "La validez y confiabilidad aseguran que las pruebas midan correctamente las competencias requeridas."
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
		description: "La carrera administrativa requiere selección por mérito mediante concurso."
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
		description: "La CNSC está conformada por tres miembros de dedicación exclusiva."
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
		description: "El principio de celeridad promueve la agilidad en la gestión pública."
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
		description: "El principio de mérito es la base de la carrera administrativa en Colombia."
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
		description: "La Comisión Nacional del Servicio Civil administra las carreras del servicio público."
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
		description: "La ley busca garantizar la participación equitativa de mujeres en altos cargos públicos."
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
		description: "La eficacia implica cumplir la finalidad del acto administrativo eliminando formalismos innecesarios."
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
		description: "El principio de eficacia busca que los candidatos seleccionados se ajusten al perfil del empleo."
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
		description: "Las personas con vinculación legal y reglamentaria en entidades públicas hacen parte de la función pública."
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
		description: "Los cargos de elección popular no forman parte de la carrera administrativa."
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
		description: "El principio de igualdad prohíbe toda forma de discriminación en el acceso y desempeño del empleo público."
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
		description: "Se protege el derecho del empleado de carrera al reubicarse en un cargo equivalente o superior."
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
		description: "El mérito es el criterio rector en el acceso a empleos públicos de carrera."
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
		description: "Las carreras especiales como la docente o la judicial tienen sus propios regímenes distintos a los administrados por la CNSC."
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
		description: "En caso de no poder ser reubicado, el empleado debe ser retirado con indemnización según la ley."
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
		description: "La Ley 909 de 2004 establece el marco normativo del empleo público y la carrera administrativa en Colombia."
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
		description: "El artículo citado garantiza el derecho de todos los ciudadanos a participar en la administración pública sin discriminación."
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
		description: "El principio de publicidad busca que los procesos de selección sean visibles y accesibles para todos los interesados."
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
		description: "La CNSC está conformada por tres miembros según lo establece la Ley 909 de 2004."
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
		description: "Los cargos de carrera deben proveerse por concurso público de méritos según la ley."
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
		description: "La validez y confiabilidad son esenciales para garantizar que los instrumentos de evaluación reflejan las competencias reales de los aspirantes."
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
		description: "El período de cuatro años está establecido en la Ley 909 de 2004 para los miembros de la CNSC."
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
		description: "El principio de celeridad establece que los procedimientos administrativos deben realizarse sin retrasos innecesarios."
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
		description: "El principio de mérito es la base para la permanencia en la carrera administrativa, basado en el rendimiento del empleado."
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
		description: "La Comisión Nacional del Servicio Civil es el organismo encargado de la administración de las carreras en la función pública."
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
		description: "La ley busca promover la igualdad de género en los altos cargos públicos en todas las entidades del estado."
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
		description: "El principio de eficacia garantiza que los actos administrativos sean efectivos y logren su propósito."
	}

]


