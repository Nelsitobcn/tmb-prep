export const tests: Test[] = [
  {
    id: 1,
    title: "Historia y Evolución de TMB",
    description: "Preguntas sobre la historia, evolución e hitos de TMB.",
    questions: [
      {
        id: 1,
        text: "¿En qué año se fundó el Ferrocarril Metropolità de Barcelona?",
        options: [
          "1920",
          "1924",
          "1930",
          "1945"
        ],
        correctAnswer: 1,
        explanation: "El Ferrocarril Metropolità de Barcelona se fundó en 1924, marcando el inicio del sistema de metro en la ciudad."
      },
      {
        id: 2,
        text: "¿Qué hito en la historia de TMB permitió a los usuarios utilizar un único billete para moverse en diferentes medios de transporte?",
        options: [
          "La creación del Sistema Tarifario Integrado (STI)",
          "La creación de la Línea 9",
          "La fundación del Ferrocarril Metropolità de Barcelona",
          "La integración de los autobuses eléctricos"
        ],
        correctAnswer: 0,
        explanation: "La implementación del Sistema Tarifario Integrado (STI) permitió la unificación del billete para varios medios de transporte."
      },
      {
        id: 3,
        text: "¿Cuál fue uno de los avances tecnológicos implementados por TMB para gestionar de manera más eficiente su flota de autobuses?",
        options: [
          "SViV (Sistema de Visión Integral del Vehículo)",
          "ORACLE",
          "Implementación de billetes de papel",
          "Uso de autobuses diésel"
        ],
        correctAnswer: 0,
        explanation: "El SViV es una herramienta clave para el control y gestión de la flota."
      },
      {
        id: 4,
        text: "¿En qué año fue creada la Fundación TMB?",
        options: [
          "2010",
          "2012",
          "2015",
          "2020"
        ],
        correctAnswer: 1,
        explanation: "La Fundación TMB fue creada en 2012 para promover la cultura, la sostenibilidad y la accesibilidad."
      },
      {
        id: 5,
        text: "¿Cuál de estos hitos forma parte de la modernización del transporte público en Barcelona?",
        options: [
          "Creación de la Nova Xarxa de Bus",
          "Introducción de los tranvías en la década de 1960",
          "Eliminación del servicio de metro nocturno",
          "Eliminación de los carriles bus"
        ],
        correctAnswer: 0,
        explanation: "La creación de la Nova Xarxa de Bus fue un paso importante en la modernización del sistema."
      },
      {
        id: 6,
        text: "¿Qué impacto tuvo la implementación del Sistema Tarifario Integrado (STI) en el transporte público de Barcelona?",
        options: [
          "Reducción de líneas de autobús para optimizar costos",
          "Eliminación de las tarifas diferenciadas por operador",
          "Aumento del número de vehículos diésel en circulación",
          "Restricción del uso de billetes de papel"
        ],
        correctAnswer: 1,
        explanation: "La implementación del STI eliminó las tarifas diferenciadas, unificando el sistema tarifario."
      },
      {
        id: 7,
        text: "¿Qué proyecto lanzado en 2014 busca modernizar el acceso y la gestión de los billetes en el transporte público de Barcelona?",
        options: [
          "Nova Xarxa de Bus",
          "T-mobilitat",
          "Tarjeta Verde Metropolitana",
          "Integración del tranvía con el metro"
        ],
        correctAnswer: 1,
        explanation: "El proyecto T-mobilitat es la iniciativa para digitalizar y modernizar el acceso a los billetes."
      },
      {
        id: 8,
        text: "¿Qué organismo regula el transporte público en el Área Metropolitana de Barcelona y supervisa la operativa de TMB?",
        options: [
          "Ministerio de Transportes",
          "Ayuntamiento de Barcelona",
          "Autoritat del Transport Metropolità (ATM)",
          "Renfe"
        ],
        correctAnswer: 2,
        explanation: "La ATM es la entidad encargada de coordinar y regular el transporte público en la zona metropolitana."
      },
      {
        id: 9,
        text: "¿Cuál es uno de los principales objetivos de TMB en el marco de su compromiso con la sostenibilidad?",
        options: [
          "Aumentar el uso de vehículos diésel",
          "Reducir la contaminación mediante la incorporación de autobuses eléctricos e híbridos",
          "Eliminar progresivamente las líneas de metro más antiguas",
          "Incrementar el precio de los billetes para financiar mejoras"
        ],
        correctAnswer: 1,
        explanation: "El compromiso con la sostenibilidad se refleja en la incorporación de autobuses eléctricos e híbridos."
      },
      {
        id: 10,
        text: "¿Qué sistema permite el control detallado del funcionamiento de los autobuses y del metro en TMB?",
        options: [
          "SAE (Sistema de Ayuda a la Explotación)",
          "Ticket Express",
          "SIUR (Sistema Integral de Urbanismo y Rutas)",
          "RED-TMB"
        ],
        correctAnswer: 0,
        explanation: "El SAE permite un control minucioso del funcionamiento de la red de transporte."
      }
    ]
  },
  {
    id: 2,
    title: "Estructura Organizativa de TMB",
    description: "Preguntas sobre la organización, administración y estructura jerárquica de TMB.",
    questions: [
      {
        id: 1,
        text: "¿Qué dos entidades forman el núcleo de TMB?",
        options: [
          "Ferrocarril Metropolità de Barcelona (FMB) y Transports Metropolitans de Barcelona SL",
          "Transports de Barcelona (TB) y Ferrocarril Metropolità de Barcelona (FMB)",
          "Transports de Barcelona (TB) y Telefèric de Montjuïc",
          "Ferrocarril Metropolità de Barcelona (FMB) y Projectes i Serveis de Mobilitat (PSM)"
        ],
        correctAnswer: 1,
        explanation: "Estas dos entidades son las principales responsables de la gestión de la red de autobuses y metro de Barcelona."
      },
      {
        id: 2,
        text: "¿Quién es el actual presidente del Consejo de Administración de TMB?",
        options: [
          "Xavier Flores Garcia",
          "Antonio Balmón Arévalo",
          "Laia Bonet Rull",
          "Jacobo Kalitovics Nobrega"
        ],
        correctAnswer: 2,
        explanation: "Laia Bonet Rull ocupa la presidencia del Consejo de Administración de TMB, liderando las decisiones estratégicas de la organización."
      },
      {
        id: 3,
        text: "¿Qué función desempeña el Comité de Dirección de TMB?",
        options: [
          "Supervisar la venta de billetes",
          "Gestionar la operación diaria del metro y autobuses",
          "Regular las tarifas del transporte",
          "Coordinar la asignación de líneas de autobús"
        ],
        correctAnswer: 1,
        explanation: "El Comité de Dirección es responsable de la gestión operativa diaria de los servicios de transporte que ofrece TMB."
      },
      {
        id: 4,
        text: "¿Qué empresa gestiona el Telefèric de Montjuïc bajo la supervisión de TMB?",
        options: [
          "Transports de Barcelona (TB)",
          "Ferrocarril Metropolità de Barcelona (FMB)",
          "Projectes i Serveis de Mobilitat (PSM)",
          "Transports Metropolitans de Barcelona SL"
        ],
        correctAnswer: 2,
        explanation: "PSM es la entidad encargada de gestionar el Telefèric de Montjuïc, bajo la supervisión de TMB."
      },
      {
        id: 5,
        text: "¿Qué organismo es el titular del 100% de las acciones de TMB?",
        options: [
          "Ayuntamiento de Barcelona",
          "Ministerio de Transportes",
          "Área Metropolitana de Barcelona (AMB)",
          "Generalitat de Catalunya"
        ],
        correctAnswer: 2,
        explanation: "La AMB es la propietaria total de las acciones de TMB, supervisando su funcionamiento y estrategias."
      }
    ]
  },
  {
    id: 3,
    title: "Valores y Código Ético de TMB",
    description: "Preguntas sobre los valores corporativos y el código ético de TMB.",
    questions: [
      {
        id: 1,
        text: "¿Cuál de los siguientes NO es un valor fundamental de TMB?",
        options: [
          "Transparencia",
          "Sostenibilidad",
          "Competitividad interna",
          "Compromiso con el usuario"
        ],
        correctAnswer: 2,
        explanation: "El Código Ético de TMB se basa en los valores de transparencia, sostenibilidad y compromiso con el usuario, sin enfocarse en la competencia interna entre empleados."
      },
      {
        id: 2,
        text: "¿Qué principio del Código Ético de TMB está alineado con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas?",
        options: [
          "La reducción del uso de energía en estaciones",
          "La transparencia en la comunicación pública",
          "La contribución al ODS 11 de ciudades y comunidades sostenibles",
          "La implementación de nuevos sistemas tarifarios"
        ],
        correctAnswer: 2,
        explanation: "El ODS 11 busca garantizar un transporte seguro, accesible y sostenible, alineándose con los valores de TMB."
      },
      {
        id: 3,
        text: "¿Qué tipo de conducta promueve el Código Ético de TMB en relación con el medio ambiente?",
        options: [
          "Uso eficiente de los recursos y promoción de prácticas sostenibles",
          "Recorte de gastos en la infraestructura de transporte",
          "Expansión de las redes de transporte privado",
          "Minimizar el contacto con usuarios para evitar conflictos"
        ],
        correctAnswer: 0,
        explanation: "TMB fomenta la sostenibilidad ambiental mediante la eficiencia energética y la reducción de emisiones."
      },
      {
        id: 4,
        text: "¿Qué área NO forma parte de la Responsabilidad Social Corporativa (RSC) de TMB?",
        options: [
          "Inclusión social",
          "Mejora comunitaria",
          "Reducción de tarifas",
          "Educación sobre movilidad sostenible"
        ],
        correctAnswer: 2,
        explanation: "La reducción de tarifas es una decisión regulada por la ATM, no una iniciativa de RSC de TMB."
      },
      {
        id: 5,
        text: "¿Cuál es el objetivo principal del Código Ético de TMB?",
        options: [
          "Asegurar que los empleados cumplan los requisitos técnicos de sus puestos",
          "Regular la conducta de los empleados y garantizar que actúen según los valores de la empresa",
          "Proteger legalmente a TMB en caso de litigios laborales",
          "Limitar la participación de los empleados en sindicatos"
        ],
        correctAnswer: 1,
        explanation: "El Código Ético define principios y normas de conducta para todos los empleados de TMB."
      }
    ]
  },
  {
    id: 4,
    title: "Plan Estratégico 2025",
    description: "Evaluación sobre los objetivos y líneas estratégicas del Plan 2025 de TMB.",
    questions: [
      {
        id: 1,
        text: "¿Cuál es uno de los principales objetivos del Plan Estratégico 2025 de TMB en cuanto a la flota de autobuses?",
        options: [
          "Aumentar el uso de autobuses diésel",
          "Reducir el número de autobuses",
          "Incorporar autobuses de cero emisiones",
          "Introducir autobuses turísticos eléctricos"
        ],
        correctAnswer: 2,
        explanation: "TMB busca que el 50% de su flota sea de cero emisiones para 2025, con la incorporación de autobuses eléctricos e híbridos."
      },
      {
        id: 2,
        text: "¿Qué herramienta digital implementará TMB para mejorar la gestión tarifaria y facilitar el uso del transporte?",
        options: [
          "Billetes en papel",
          "T-mobilitat",
          "Sistema de emisión de billetes en el autobús",
          "Tarjeta bancaria contactless"
        ],
        correctAnswer: 1,
        explanation: "T-mobilitat es una plataforma tecnológica que digitaliza el sistema tarifario, eliminando los billetes físicos y permitiendo pagos con tarjetas inteligentes o móviles."
      },
      {
        id: 3,
        text: "¿Cuál es uno de los ODS (Objetivos de Desarrollo Sostenible) más relevantes para TMB según su Plan Estratégico 2025?",
        options: [
          "ODS 4: Educación de calidad",
          "ODS 7: Energía asequible y no contaminante",
          "ODS 11: Ciudades y comunidades sostenibles",
          "ODS 15: Vida de ecosistemas terrestres"
        ],
        correctAnswer: 2,
        explanation: "TMB contribuye al ODS 11, garantizando que el transporte público sea accesible, sostenible y eficiente."
      },
      {
        id: 4,
        text: "¿Qué aspecto NO es parte de los compromisos de Responsabilidad Social Corporativa (RSC) de TMB?",
        options: [
          "Inclusión social",
          "Conservación del patrimonio cultural",
          "Subsidios para viajes internacionales",
          "Programas de accesibilidad para personas con movilidad reducida"
        ],
        correctAnswer: 2,
        explanation: "TMB no subvenciona viajes internacionales; su enfoque está en accesibilidad, educación y conservación del patrimonio."
      },
      {
        id: 5,
        text: "¿Qué medidas ha tomado TMB para mejorar la eficiencia energética en la red de metro?",
        options: [
          "Incorporación de motores diésel en los trenes",
          "Implementación de sistemas de recuperación de energía y tecnología LED",
          "Reducción del número de estaciones activas",
          "Restricción del uso de aire acondicionado en los trenes"
        ],
        correctAnswer: 1,
        explanation: "TMB ha instalado sistemas de recuperación de energía y luces LED para mejorar la eficiencia energética."
      },
      {
        id: 6,
        text: "¿Qué tecnología utiliza TMB para mejorar la planificación del servicio y la gestión de incidencias?",
        options: [
          "Blockchain",
          "SViV (Sistema de Visión Integral del Vehículo)",
          "Vehículos de hidrógeno para el metro",
          "Sistema de recarga inalámbrica para autobuses"
        ],
        correctAnswer: 1,
        explanation: "El SViV optimiza rutas y mejora la planificación del servicio mediante inteligencia artificial y análisis de datos."
      },
      {
        id: 7,
        text: "¿Cómo contribuye TMB al ODS 13 (Acción por el Clima)?",
        options: [
          "Ampliando la red de autopistas urbanas",
          "Reduciendo las emisiones de CO₂ con energías limpias y transporte sostenible",
          "Eliminando la accesibilidad de los autobuses para reducir peso y consumo",
          "Implementando más publicidad en estaciones para recaudar fondos"
        ],
        correctAnswer: 1,
        explanation: "TMB invierte en transporte de cero emisiones y optimización energética para contribuir al ODS 13: Acción por el Clima."
      },
      {
        id: 8,
        text: "¿Cuál es uno de los objetivos principales de la digitalización en el Plan Estratégico 2025?",
        options: [
          "Reemplazar completamente el servicio de metro por buses autónomos",
          "Hacer que el transporte público sea más accesible y eficiente",
          "Crear una aplicación para reservar asientos en los autobuses",
          "Sustituir todas las paradas de autobús por pantallas interactivas"
        ],
        correctAnswer: 1,
        explanation: "La digitalización busca mejorar la experiencia del usuario, facilitar pagos y optimizar el servicio."
      },
      {
        id: 9,
        text: "¿Cómo utiliza TMB el Big Data en su Plan Estratégico 2025?",
        options: [
          "Para vender información de los pasajeros a terceros",
          "Para anticipar picos de demanda y ajustar frecuencias",
          "Para rastrear la ubicación exacta de los usuarios sin su consentimiento",
          "Para reemplazar el personal de atención al cliente por inteligencia artificial"
        ],
        correctAnswer: 1,
        explanation: "El Big Data ayuda a mejorar la planificación del transporte mediante análisis predictivo de demanda."
      },
      {
        id: 10,
        text: "¿Qué estrategia fomenta TMB para la movilidad activa dentro del Plan Estratégico 2025?",
        options: [
          "El cierre de calles al tráfico privado para peatones y bicicletas",
          "La integración del transporte público con redes de bicicletas y movilidad compartida",
          "El cobro de tarifas extra a peatones en zonas de alto tráfico",
          "La eliminación de pasos peatonales en estaciones de metro"
        ],
        correctAnswer: 1,
        explanation: "TMB promueve la movilidad activa, combinando el transporte público con opciones como bicicletas compartidas."
      },
      {
        id: 11,
        text: "¿Cómo mejorará TMB la atención al usuario dentro del Plan Estratégico 2025?",
        options: [
          "Eliminando la atención presencial en las estaciones",
          "Mejorando los canales digitales y ofreciendo información en tiempo real",
          "Reduciendo la cantidad de personal de atención al cliente",
          "Cobrando tarifas premium por atención prioritaria"
        ],
        correctAnswer: 1,
        explanation: "TMB busca modernizar la atención con apps, chatbots y sistemas de información en tiempo real."
      },
      {
        id: 12,
        text: "¿Qué rol juega la Fundación TMB dentro del Plan Estratégico 2025?",
        options: [
          "Controlar la ejecución presupuestaria del Plan Estratégico",
          "Promover la conservación del patrimonio cultural del transporte público",
          "Supervisar la renovación de las flotas de autobuses",
          "Regular el precio de los billetes de metro y autobús"
        ],
        correctAnswer: 1,
        explanation: "La Fundación TMB trabaja en la preservación histórica y cultural del transporte en Barcelona."
      }
    ]
  },
  {
    id: 5,
    title: "Memoria de Sostenibilidad 2022",
    description: "Preguntas sobre las acciones de TMB en sostenibilidad y eficiencia energética durante 2022.",
    questions: [
      {
        id: 1,
        text: "¿Cuál fue una de las principales acciones de TMB en 2022 para reducir las emisiones de CO₂?",
        options: [
          "Introducción de más autobuses diésel",
          "Introducción de autobuses eléctricos e híbridos",
          "Reducción de la flota de autobuses",
          "Eliminación del metro"
        ],
        correctAnswer: 1,
        explanation: "TMB ha modernizado su flota incorporando autobuses eléctricos e híbridos, reduciendo así las emisiones de CO₂."
      },
      {
        id: 2,
        text: "¿Qué medida ha implementado TMB para mejorar la eficiencia energética en la red de metro?",
        options: [
          "Introducción de trenes diésel",
          "Uso de sistemas de recuperación de energía durante el frenado",
          "Reducción del número de trenes en circulación",
          "Aumento de las tarifas del metro"
        ],
        correctAnswer: 1,
        explanation: "Los sistemas de recuperación de energía permiten reutilizar la electricidad generada en el frenado de los trenes."
      },
      {
        id: 3,
        text: "¿Qué ODS está más directamente relacionado con la mejora de la accesibilidad y sostenibilidad del transporte público en Barcelona?",
        options: [
          "ODS 3: Salud y bienestar",
          "ODS 9: Industria, innovación e infraestructura",
          "ODS 11: Ciudades y comunidades sostenibles",
          "ODS 17: Alianzas para lograr los objetivos"
        ],
        correctAnswer: 2,
        explanation: "El ODS 11 se centra en garantizar un transporte público accesible, seguro y sostenible para mejorar la vida en las ciudades."
      },
      {
        id: 4,
        text: "¿Qué porcentaje de reducción de emisiones de CO₂ logró TMB en 2022?",
        options: [
          "10%",
          "20%",
          "30%",
          "50%"
        ],
        correctAnswer: 2,
        explanation: "TMB redujo un 30% sus emisiones de CO₂ en 2022 gracias a la modernización de su flota y la mejora en eficiencia energética."
      },
      {
        id: 5,
        text: "¿Cuál es el objetivo de TMB en relación con la movilidad sostenible para 2030?",
        options: [
          "Reducir la flota de autobuses y aumentar la red de metro",
          "Lograr una flota de autobuses completamente libre de emisiones",
          "Implementar tarifas más altas para fomentar menos viajes",
          "Sustituir los trenes actuales por modelos diésel más eficientes"
        ],
        correctAnswer: 1,
        explanation: "Para 2030, TMB planea operar exclusivamente con buses eléctricos e impulsados por hidrógeno."
      },
      {
        id: 6,
        text: "¿Cuál de las siguientes afirmaciones es correcta sobre los autobuses de hidrógeno de TMB?",
        options: [
          "Emiten CO₂, pero en menor cantidad que los diésel",
          "Utilizan pilas de combustible y solo generan vapor de agua como residuo",
          "Son más contaminantes que los autobuses híbridos",
          "Funcionan con una mezcla de diésel y gas natural"
        ],
        correctAnswer: 1,
        explanation: "Los autobuses de hidrógeno de TMB usan pilas de combustible que combinan hidrógeno y oxígeno, generando electricidad y solo emitiendo vapor de agua."
      },
      {
        id: 7,
        text: "¿Qué iniciativa forma parte de la promoción de la movilidad activa por parte de TMB?",
        options: [
          "Construcción de más carriles para automóviles privados",
          "Integración de sistemas de bicicletas compartidas con la red de transporte",
          "Eliminación de zonas peatonales para favorecer el tráfico",
          "Incremento en la frecuencia de los trenes nocturnos"
        ],
        correctAnswer: 1,
        explanation: "TMB promueve la movilidad activa fomentando el uso de la bicicleta y el transporte a pie."
      },
      {
        id: 8,
        text: "¿Cómo contribuye TMB al ODS 13 (Acción por el Clima)?",
        options: [
          "Reduciendo el número de líneas de autobuses para disminuir la demanda",
          "Incorporando autobuses de hidrógeno y optimizando la eficiencia energética",
          "Aumentando las tarifas para reducir el uso del transporte público",
          "Implementando más publicidad en las estaciones para financiar programas ambientales"
        ],
        correctAnswer: 1,
        explanation: "TMB apuesta por energías limpias y transporte sostenible para combatir el cambio climático."
      },
      {
        id: 9,
        text: "¿Qué acción ha tomado TMB para mejorar la gestión de residuos en sus instalaciones?",
        options: [
          "Prohibir el uso de materiales reciclables",
          "Eliminar los puntos de reciclaje en estaciones y talleres",
          "Implementar un programa de reciclaje y gestión de residuos peligrosos",
          "No tomar medidas, ya que los residuos no afectan al medio ambiente"
        ],
        correctAnswer: 2,
        explanation: "TMB ha instalado puntos de reciclaje y mejorado la gestión de residuos peligrosos en sus talleres."
      },
      {
        id: 10,
        text: "¿Qué organismo financia el proyecto JIVE, en el cual participa TMB con sus autobuses de hidrógeno?",
        options: [
          "El Ayuntamiento de Barcelona",
          "La Unión Europea",
          "La Autoritat del Transport Metropolità (ATM)",
          "Empresas privadas de combustibles fósiles"
        ],
        correctAnswer: 1,
        explanation: "El proyecto JIVE es una iniciativa europea para promover el uso del hidrógeno en el transporte público."
      },
      {
        id: 11,
        text: "¿Qué tecnología ha implementado TMB en las estaciones de metro para reducir el consumo de energía?",
        options: [
          "Sustitución de las luces LED por lámparas incandescentes",
          "Uso de trenes de alta velocidad en líneas urbanas",
          "Instalación de iluminación LED y aislamiento térmico en túneles",
          "Eliminación del aire acondicionado en los trenes"
        ],
        correctAnswer: 2,
        explanation: "La instalación de LED y el aislamiento térmico han reducido significativamente el consumo energético del metro."
      },
      {
        id: 12,
        text: "¿Cómo ha contribuido TMB a la concienciación sobre sostenibilidad en 2022?",
        options: [
          "Lanzando campañas educativas y colaborando con escuelas y universidades",
          "Eliminando las rutas de transporte menos utilizadas",
          "Promoviendo el uso exclusivo del coche privado en la ciudad",
          "Prohibiendo el acceso a usuarios sin vehículos eléctricos"
        ],
        correctAnswer: 0,
        explanation: "TMB ha impulsado la educación sobre movilidad sostenible a través de campañas y programas con instituciones educativas."
      }
    ]
  },
  {
    id: 6,
    title: "Certificaciones",
    description: "Preguntas sobre las certificaciones de calidad, sostenibilidad y seguridad en TMB.",
    questions: [
      {
        id: 1,
        text: "¿Cuál de las siguientes certificaciones asegura la gestión ambiental responsable en TMB?",
        options: [
          "ISO 9001",
          "ISO 45001",
          "ISO 14001",
          "UNE-EN 13816"
        ],
        correctAnswer: 2,
        explanation: "La ISO 14001 certifica la gestión ambiental responsable, asegurando que TMB minimiza su impacto ecológico y optimiza el uso de recursos."
      },
      {
        id: 2,
        text: "¿Qué certificación está relacionada con la calidad en el transporte público en TMB?",
        options: [
          "EMAS",
          "UNE-EN 13816",
          "ISO 45001",
          "CEROCO2"
        ],
        correctAnswer: 1,
        explanation: "La norma UNE-EN 13816 certifica que TMB cumple con estándares de calidad en el transporte público, evaluando accesibilidad, seguridad y confort."
      },
      {
        id: 3,
        text: "¿Qué norma certifica la seguridad y salud en el trabajo en TMB?",
        options: [
          "ISO 45001",
          "ISO 9001",
          "CEROCO2",
          "ISO 50001"
        ],
        correctAnswer: 0,
        explanation: "La ISO 45001 garantiza un entorno laboral seguro y saludable, asegurando la prevención de riesgos laborales en TMB."
      },
      {
        id: 4,
        text: "¿Qué sistema más exigente que la ISO 14001 garantiza auditorías ambientales voluntarias en TMB?",
        options: [
          "CEROCO2",
          "EMAS",
          "UNE-EN 13816",
          "ISO 9001"
        ],
        correctAnswer: 1,
        explanation: "El sistema EMAS es un estándar más riguroso que la ISO 14001, asegurando auditorías voluntarias y transparencia ambiental."
      },
      {
        id: 5,
        text: "¿Qué certificación refleja el compromiso de TMB con la reducción de emisiones de carbono?",
        options: [
          "ISO 9001",
          "ISO 45001",
          "CEROCO2",
          "ISO 14001"
        ],
        correctAnswer: 2,
        explanation: "La certificación CEROCO2 acredita que TMB reduce y compensa sus emisiones de carbono, contribuyendo a la sostenibilidad."
      },
      {
        id: 6,
        text: "¿Cuál de las siguientes certificaciones está enfocada en la eficiencia energética en TMB?",
        options: [
          "ISO 45001",
          "ISO 9001",
          "ISO 50001",
          "EMAS"
        ],
        correctAnswer: 2,
        explanation: "La ISO 50001 certifica la gestión eficiente de la energía, optimizando el consumo energético en las operaciones de TMB."
      },
      {
        id: 7,
        text: "¿Cuál es el objetivo principal de la certificación ISO 9001 en TMB?",
        options: [
          "Mejorar la gestión de calidad y la satisfacción del usuario",
          "Garantizar la eficiencia energética en los servicios de transporte",
          "Supervisar la reducción de residuos en estaciones de metro",
          "Asegurar el cumplimiento de normativas laborales en la empresa"
        ],
        correctAnswer: 0,
        explanation: "La ISO 9001 certifica que TMB trabaja bajo estándares de calidad para optimizar sus procesos y mejorar la experiencia del usuario."
      },
      {
        id: 8,
        text: "¿Qué certificación garantiza que TMB gestiona su energía de forma eficiente y sostenible?",
        options: [
          "UNE-EN 13816",
          "ISO 45001",
          "ISO 50001",
          "EMAS"
        ],
        correctAnswer: 2,
        explanation: "La ISO 50001 establece un sistema de gestión energética eficiente, optimizando el consumo de recursos en TMB."
      },
      {
        id: 9,
        text: "¿Cuál de las siguientes certificaciones está más enfocada en la seguridad del trabajador?",
        options: [
          "ISO 9001",
          "ISO 45001",
          "EMAS",
          "CEROCO2"
        ],
        correctAnswer: 1,
        explanation: "La ISO 45001 es un estándar de seguridad laboral que garantiza la protección y el bienestar de los empleados de TMB."
      },
      {
        id: 10,
        text: "¿Qué norma garantiza que TMB cumple con estándares internacionales de transporte público de calidad?",
        options: [
          "UNE-EN 13816",
          "ISO 50001",
          "CEROCO2",
          "EMAS"
        ],
        correctAnswer: 0,
        explanation: "La UNE-EN 13816 certifica que TMB cumple con los requisitos europeos de calidad en el transporte público."
      },
      {
        id: 11,
        text: "¿Cómo contribuye la certificación EMAS a la sostenibilidad en TMB?",
        options: [
          "Verificando el impacto ambiental de las operaciones mediante auditorías periódicas",
          "Reduciendo el uso de combustibles fósiles en la red de transporte",
          "Implementando tarifas diferenciadas según el nivel de contaminación de los vehículos",
          "Eliminando el uso de papel en la gestión administrativa de la empresa"
        ],
        correctAnswer: 0,
        explanation: "El sistema EMAS es un estándar de auditoría ambiental que garantiza transparencia en la gestión ecológica de TMB."
      },
      {
        id: 12,
        text: "¿Qué certificación respalda el esfuerzo de TMB en la lucha contra el cambio climático?",
        options: [
          "ISO 45001",
          "EMAS",
          "CEROCO2",
          "ISO 9001"
        ],
        correctAnswer: 2,
        explanation: "La certificación CEROCO2 reconoce que TMB compensa sus emisiones de carbono a través de proyectos sostenibles."
      },
      {
        id: 13,
        text: "¿Qué certificación de TMB está enfocada en garantizar procesos internos de calidad en la empresa?",
        options: [
          "ISO 14001",
          "ISO 45001",
          "ISO 9001",
          "EMAS"
        ],
        correctAnswer: 2,
        explanation: "La ISO 9001 certifica que TMB sigue un sistema de gestión de calidad para mejorar sus procesos y la satisfacción del usuario."
      },
      {
        id: 14,
        text: "¿Qué certificación de TMB ayuda a optimizar el consumo energético en sus operaciones?",
        options: [
          "ISO 9001",
          "ISO 50001",
          "EMAS",
          "CEROCO2"
        ],
        correctAnswer: 1,
        explanation: "La ISO 50001 establece directrices para la eficiencia energética en las operaciones de TMB, reduciendo costos y emisiones."
      },
      {
        id: 15,
        text: "¿Cómo beneficia la certificación UNE-EN 13816 a los usuarios de TMB?",
        options: [
          "Garantiza la accesibilidad, puntualidad y seguridad en el transporte público",
          "Reduce el número de autobuses para evitar emisiones contaminantes",
          "Permite a TMB operar sin restricciones ambientales",
          "Evalúa la rentabilidad económica del sistema de transporte"
        ],
        correctAnswer: 0,
        explanation: "La UNE-EN 13816 evalúa criterios de calidad en el transporte público, asegurando que TMB brinde un servicio óptimo."
      }
    ]
  },
  {
    id: 7,
    title: "Estructura de la Plantilla según Dades Bàsiques 2024",
    description: "Preguntas sobre la composición y distribución de la plantilla de TMB en 2024.",
    questions: [
      {
        id: 1,
        text: "¿Cuál es la edad media de los conductores de autobuses de TMB según el informe Dades Bàsiques 2024?",
        options: [
          "45,76 años",
          "50,26 años",
          "52,30 años",
          "48,10 años"
        ],
        correctAnswer: 1,
        explanation: "La edad media de los conductores en 2024 es de 50,26 años, lo que indica una plantilla con amplia experiencia."
      },
      {
        id: 2,
        text: "¿Qué porcentaje de conductores de autobús en TMB tiene más de 50 años?",
        options: [
          "34,38%",
          "48,10%",
          "36,47%",
          "13,63%"
        ],
        correctAnswer: 1,
        explanation: "Casi la mitad de los conductores de autobuses de TMB tienen más de 50 años, lo que resalta la necesidad de renovación generacional."
      },
      {
        id: 3,
        text: "¿Qué porcentaje de la plantilla de conductores de autobús tiene entre 41 y 50 años?",
        options: [
          "19,91%",
          "36,47%",
          "48,10%",
          "8,32%"
        ],
        correctAnswer: 1,
        explanation: "Más de un tercio de los conductores se encuentran en la franja de 41 a 50 años, lo que indica que la mayoría está en una etapa avanzada de su carrera."
      },
      {
        id: 4,
        text: "¿Qué porcentaje de conductores de autobús en TMB tiene menos de 31 años?",
        options: [
          "1,80%",
          "8,32%",
          "19,91%",
          "13,63%"
        ],
        correctAnswer: 0,
        explanation: "Solo el 1,80% de los conductores son menores de 31 años, lo que sugiere un bajo nivel de renovación en los últimos años."
      },
      {
        id: 5,
        text: "¿Cuál es la edad media de los trabajadores del metro de TMB en 2024?",
        options: [
          "48,10 años",
          "50,26 años",
          "46,27 años",
          "42,15 años"
        ],
        correctAnswer: 2,
        explanation: "La edad media del personal del metro es de 46,27 años, algo inferior a la del personal de autobuses."
      },
      {
        id: 6,
        text: "¿Qué porcentaje de trabajadores del metro tiene entre 31 y 40 años?",
        options: [
          "8,32%",
          "19,91%",
          "36,47%",
          "48,10%"
        ],
        correctAnswer: 1,
        explanation: "Un 19,91% de los empleados del metro tienen entre 31 y 40 años, mostrando una mayor presencia de trabajadores jóvenes en comparación con los conductores de autobuses."
      },
      {
        id: 7,
        text: "¿Cuántos trabajadores tiene la plantilla total de TMB en 2024?",
        options: [
          "7.542",
          "8.924",
          "6.380",
          "10.215"
        ],
        correctAnswer: 1,
        explanation: "TMB cuenta con un total de 8.924 empleados, sumando el personal de metro y autobuses."
      },
      {
        id: 8,
        text: "¿Cuántos trabajadores hay en la red de autobuses de TMB en 2024?",
        options: [
          "4.049",
          "4.876",
          "3.522",
          "5.215"
        ],
        correctAnswer: 1,
        explanation: "El personal operativo de autobuses asciende a 4.876 empleados, incluyendo conductores y operarios de mantenimiento."
      },
      {
        id: 9,
        text: "¿Cuántos trabajadores hay en la red de metro de TMB en 2024?",
        options: [
          "3.200",
          "4.876",
          "4.049",
          "5.050"
        ],
        correctAnswer: 2,
        explanation: "El metro de TMB tiene una plantilla de 4.049 trabajadores, incluyendo maquinistas, técnicos y personal de estaciones."
      },
      {
        id: 10,
        text: "¿Cuál es la importancia de los datos sobre la estructura de la plantilla para el Comandament d'Explotació?",
        options: [
          "Permiten mejorar la rentabilidad de la empresa",
          "Ayudan a planificar la renovación generacional y la formación del personal",
          "Facilitan el control de las tarifas del transporte",
          "No tienen impacto en la gestión operativa"
        ],
        correctAnswer: 1,
        explanation: "Estos datos son esenciales para gestionar la plantilla, asegurar formación y adaptar a los conductores a nuevas tecnologías como los autobuses eléctricos e hidrógeno."
      },
      {
        id: 11,
        text: "¿Qué diferencia clave hay entre la estructura de edades del personal de metro y de autobuses?",
        options: [
          "En el metro hay más trabajadores mayores de 50 años",
          "Hay un mayor porcentaje de jóvenes en el metro que en autobuses",
          "Los conductores de autobuses son más jóvenes en promedio que el personal del metro",
          "No hay diferencias significativas en la edad promedio"
        ],
        correctAnswer: 1,
        explanation: "El 8,32% del personal de metro tiene menos de 31 años, en comparación con solo el 1,80% de los conductores de autobuses."
      },
      {
        id: 12,
        text: "¿Qué desafío principal enfrenta TMB con la estructura actual de su plantilla de conductores de autobuses?",
        options: [
          "La falta de personal administrativo",
          "La necesidad de renovar la plantilla debido al envejecimiento",
          "La sobrecarga de personal en los talleres",
          "El exceso de trabajadores jóvenes sin experiencia"
        ],
        correctAnswer: 1,
        explanation: "Con un 48,10% de conductores mayores de 50 años, TMB debe preparar un plan de renovación generacional."
      },
      {
        id: 13,
        text: "¿Cómo se distribuye la plantilla de TMB entre personal operativo y administrativo?",
        options: [
          "Principalmente personal administrativo",
          "Mayoría de personal operativo, incluyendo conductores y técnicos",
          "Dividido a partes iguales entre administrativos y operativos",
          "Mayoría de directivos y gerentes"
        ],
        correctAnswer: 1,
        explanation: "La mayor parte de la plantilla está compuesta por personal operativo, como conductores y operarios de mantenimiento."
      }
    ]
  },
  {
    id: 8,
    title: "Sistema Tarifario Integrado (STI)",
    description: "Preguntas sobre los títulos de transporte y tarifas en el Sistema Tarifario Integrado de Barcelona.",
    questions: [
      {
        id: 1,
        text: "¿Cuál es el precio de un billete T-casual para una zona en 2024?",
        options: [
          "10,00 €",
          "12,15 €",
          "15,00 €",
          "21,35 €"
        ],
        correctAnswer: 1,
        explanation: "La T-casual cuesta 12,15 € en 2024 para una zona y permite realizar 10 viajes unipersonales."
      },
      {
        id: 2,
        text: "¿Qué título de transporte permite realizar viajes ilimitados durante 30 días consecutivos?",
        options: [
          "T-casual",
          "T-dia",
          "T-usual",
          "T-familiar"
        ],
        correctAnswer: 2,
        explanation: "La T-usual permite viajes ilimitados durante 30 días consecutivos y es ideal para usuarios frecuentes."
      },
      {
        id: 3,
        text: "¿Qué tipo de billete está dirigido a grupos de hasta 70 personas?",
        options: [
          "T-familiar",
          "T-16",
          "T-grup",
          "T-casual"
        ],
        correctAnswer: 2,
        explanation: "La T-grup permite hasta 70 viajes dentro de una zona y está diseñada para excursiones y grupos escolares."
      },
      {
        id: 4,
        text: "¿Cuál es el billete que permite a los jóvenes menores de 30 años realizar viajes ilimitados durante 90 días?",
        options: [
          "T-jove",
          "T-usual",
          "T-dia",
          "T-casual"
        ],
        correctAnswer: 0,
        explanation: "La T-jove es un abono trimestral dirigido a menores de 30 años, con viajes ilimitados durante 90 días."
      },
      {
        id: 5,
        text: "¿Qué tipo de billete es gratuito para niños de hasta 16 años que vivan en Barcelona?",
        options: [
          "T-dia",
          "T-familiar",
          "T-16",
          "Billete sencillo"
        ],
        correctAnswer: 2,
        explanation: "La T-16 es un título gratuito para jóvenes de hasta 16 años residentes en el área metropolitana de Barcelona."
      },
      {
        id: 6,
        text: "¿Cuál es el billete más adecuado para un turista que necesite realizar varios desplazamientos en un solo día?",
        options: [
          "T-casual",
          "T-dia",
          "T-usual",
          "T-familiar"
        ],
        correctAnswer: 1,
        explanation: "La T-dia permite viajes ilimitados durante 24 horas y es ideal para turistas."
      },
      {
        id: 7,
        text: "¿Cuál es el precio del billete sencillo en 2024 para una zona?",
        options: [
          "2,55 €",
          "5,50 €",
          "3,75 €",
          "1,90 €"
        ],
        correctAnswer: 0,
        explanation: "El billete sencillo cuesta 2,55 € y solo es válido para un trayecto dentro de una zona."
      },
      {
        id: 8,
        text: "¿Qué billete se requiere para viajar en la línea de metro que conecta con el Aeropuerto de Barcelona?",
        options: [
          "T-casual",
          "Billete aeropuerto",
          "T-familiar",
          "T-16"
        ],
        correctAnswer: 1,
        explanation: "El billete aeropuerto cuesta 5,50 € y es obligatorio para usar la L9 Sud hasta el aeropuerto."
      },
      {
        id: 9,
        text: "¿Cuántas zonas tarifarias tiene el Sistema Tarifario Integrado (STI)?",
        options: [
          "4",
          "5",
          "6",
          "7"
        ],
        correctAnswer: 2,
        explanation: "El STI está dividido en seis zonas tarifarias, que determinan el precio del billete según la distancia recorrida."
      },
      {
        id: 10,
        text: "¿Cuál es el precio del abono mensual T-usual en 2024 para una zona?",
        options: [
          "12,15 €",
          "21,35 €",
          "42,70 €",
          "60,70 €"
        ],
        correctAnswer: 1,
        explanation: "La T-usual cuesta 21,35 € para una zona en 2024, permitiendo viajes ilimitados durante un mes."
      },
      {
        id: 11,
        text: "¿Qué título de transporte ofrece un descuento especial para familias numerosas y monoparentales?",
        options: [
          "T-usual FM/FN",
          "T-casual",
          "Billete sencillo",
          "T-grup"
        ],
        correctAnswer: 0,
        explanation: "El T-usual FM/FN ofrece tarifas reducidas para familias numerosas y monoparentales."
      },
      {
        id: 12,
        text: "¿Cuánto cuesta el T-usual FM/FN en su versión general para una zona?",
        options: [
          "10,65 €",
          "17,05 €",
          "21,35 €",
          "42,70 €"
        ],
        correctAnswer: 1,
        explanation: "El T-usual FM/FN (general) cuesta 17,05 € en 2024 para una zona."
      },
      {
        id: 13,
        text: "¿Cuál es el propósito principal del Sistema Tarifario Integrado (STI)?",
        options: [
          "Reducir los costos de operación de TMB",
          "Permitir a los usuarios viajar con un solo billete en diferentes medios de transporte",
          "Limitar el acceso al transporte público solo a residentes de Barcelona",
          "Eliminar el uso de billetes en papel"
        ],
        correctAnswer: 1,
        explanation: "El STI facilita la movilidad combinando diferentes medios de transporte con un único título de viaje."
      },
      {
        id: 14,
        text: "¿Cuánto tiempo tiene un usuario para realizar transbordos ilimitados en una zona dentro del STI?",
        options: [
          "45 minutos",
          "60 minutos",
          "75 minutos",
          "90 minutos"
        ],
        correctAnswer: 2,
        explanation: "Para un viaje en una zona, el usuario tiene hasta 75 minutos para hacer transbordos sin pagar nuevamente."
      },
      {
        id: 15,
        text: "¿Qué sistema digital busca reemplazar los billetes de papel en el futuro del STI?",
        options: [
          "T-mobilitat",
          "T-grup",
          "T-casual digital",
          "Reducción de tarifas"
        ],
        correctAnswer: 0,
        explanation: "T-mobilitat es el sistema de digitalización del STI, eliminando los billetes físicos y permitiendo pagos con tarjetas y móviles."
      }
    ]
  },
  {
    id: 9,
    title: "Funcionamiento de la T-mobilitat",
    description: "Preguntas sobre el sistema digital de billetes y tarifas en el transporte público de Barcelona.",
    questions: [
      {
        id: 1,
        text: "¿Cuál es el objetivo principal de la T-mobilitat?",
        options: [
          "Reducir el coste de los billetes",
          "Digitalizar el sistema tarifario y eliminar los billetes de papel",
          "Implementar un sistema de transporte privado",
          "Introducir nuevos modos de transporte"
        ],
        correctAnswer: 1,
        explanation: "La T-mobilitat busca modernizar el sistema tarifario, reemplazando los billetes físicos por tarjetas inteligentes y dispositivos móviles."
      },
      {
        id: 2,
        text: "¿Qué tecnología utiliza la T-mobilitat en los dispositivos móviles para acceder al transporte público?",
        options: [
          "Bluetooth",
          "GPS",
          "NFC (Near Field Communication)",
          "Wi-Fi"
        ],
        correctAnswer: 2,
        explanation: "La T-mobilitat permite el acceso mediante NFC, que permite validar el billete con un móvil compatible sin contacto."
      },
      {
        id: 3,
        text: "¿Qué ventaja ofrece la T-mobilitat en términos de tarifas?",
        options: [
          "Tarifa fija sin importar el número de viajes",
          "Descuentos personalizados según el uso del transporte",
          "Precios más altos para trayectos largos",
          "Un coste adicional por cada transbordo"
        ],
        correctAnswer: 1,
        explanation: "La T-mobilitat ajusta el precio en función de la frecuencia y distancia de uso, ofreciendo descuentos a viajeros frecuentes."
      },
      {
        id: 4,
        text: "¿Cómo se recarga la tarjeta T-mobilitat?",
        options: [
          "Solo en las oficinas de atención al cliente de TMB",
          "A través de la web, app o máquinas expendedoras automáticas",
          "En tiendas de conveniencia",
          "No se puede recargar"
        ],
        correctAnswer: 1,
        explanation: "Los usuarios pueden recargar la T-mobilitat en línea o en estaciones, facilitando la gestión de los billetes de transporte."
      },
      {
        id: 5,
        text: "¿Cómo se validan los viajes con la T-mobilitat?",
        options: [
          "Introduciendo un código PIN en las estaciones",
          "Escaneando un código QR en los tornos de acceso",
          "Acercando la tarjeta o el móvil con NFC al lector de billetes",
          "Introduciendo la tarjeta en una ranura de las máquinas de validación"
        ],
        correctAnswer: 2,
        explanation: "El sistema permite validar los viajes acercando la tarjeta o el móvil con NFC a los validadores en estaciones y autobuses."
      },
      {
        id: 6,
        text: "¿Qué organismo gestiona la T-mobilitat?",
        options: [
          "Renfe",
          "Ferrocarrils de la Generalitat de Catalunya (FGC)",
          "Autoritat del Transport Metropolità (ATM)",
          "Ajuntament de Barcelona"
        ],
        correctAnswer: 2,
        explanation: "La ATM es la entidad encargada de gestionar la T-mobilitat y la integración tarifaria en Barcelona y su área metropolitana."
      },
      {
        id: 7,
        text: "¿Qué método de pago permite la T-mobilitat para la compra de billetes?",
        options: [
          "Solo en efectivo en taquillas",
          "Tarjeta de crédito/débito y pagos móviles",
          "Solo transferencia bancaria",
          "Mediante vales de transporte"
        ],
        correctAnswer: 1,
        explanation: "Los usuarios pueden pagar y recargar la T-mobilitat mediante tarjeta bancaria o aplicaciones de pago móvil."
      },
      {
        id: 8,
        text: "¿Cómo pueden los usuarios recuperar su saldo si pierden su tarjeta T-mobilitat?",
        options: [
          "No pueden recuperarlo",
          "Acudiendo a una oficina de atención al cliente con su DNI",
          "Bloqueando la tarjeta y solicitando una nueva con la transferencia del saldo",
          "Llamando al servicio de atención al cliente y solicitando un reembolso"
        ],
        correctAnswer: 2,
        explanation: "Si se pierde la tarjeta T-mobilitat, los usuarios pueden bloquearla y recuperar su saldo en una nueva tarjeta."
      },
      {
        id: 9,
        text: "¿Qué función tiene la app de T-mobilitat?",
        options: [
          "Solo permite ver horarios del transporte",
          "Gestiona recargas, compra de billetes y validación de viajes",
          "Permite chatear con otros usuarios del transporte",
          "Sirve para reservar asientos en los autobuses"
        ],
        correctAnswer: 1,
        explanation: "La app de T-mobilitat facilita la gestión de viajes, permitiendo comprar y recargar billetes, consultar saldo y validar viajes con el móvil."
      },
      {
        id: 10,
        text: "¿Qué característica de seguridad ofrece la T-mobilitat?",
        options: [
          "Doble autenticación al pagar en máquinas expendedoras",
          "Vinculación del billete al perfil del usuario, con opción de bloqueo en caso de pérdida",
          "Restricción de su uso a solo un medio de transporte",
          "Eliminación de la posibilidad de hacer transbordos"
        ],
        correctAnswer: 1,
        explanation: "Los billetes y abonos están vinculados al usuario, permitiendo bloquear la tarjeta o el móvil en caso de pérdida o robo."
      },
      {
        id: 11,
        text: "¿Cuál es una de las principales ventajas medioambientales de la T-mobilitat?",
        options: [
          "Reduce el consumo de billetes de papel y plástico",
          "Aumenta la velocidad de los autobuses",
          "Disminuye el consumo de energía del metro",
          "Facilita la instalación de paneles solares en las estaciones"
        ],
        correctAnswer: 0,
        explanation: "Al digitalizar los billetes, la T-mobilitat reduce la necesidad de papel y plástico, promoviendo la sostenibilidad."
      },
      {
        id: 12,
        text: "¿Cómo ayuda la T-mobilitat a mejorar la accesibilidad del transporte público?",
        options: [
          "Permite el pago digital y la recarga remota sin necesidad de acudir a taquillas",
          "Instala rampas en todas las estaciones de metro",
          "Ofrece un servicio de transporte gratuito para personas con movilidad reducida",
          "Reduce el número de paradas de autobús para agilizar el trayecto"
        ],
        correctAnswer: 0,
        explanation: "Los usuarios pueden gestionar su T-mobilitat de forma digital, sin necesidad de acudir presencialmente a puntos de venta."
      },
      {
        id: 13,
        text: "¿Qué futuro se plantea para la T-mobilitat?",
        options: [
          "Integrar todos los medios de transporte y sistemas de movilidad en una sola plataforma",
          "Sustituir completamente los trenes por autobuses",
          "Eliminar las tarifas reducidas",
          "Limitar su uso solo a residentes de Barcelona"
        ],
        correctAnswer: 0,
        explanation: "El objetivo futuro de la T-mobilitat es consolidarse como una plataforma central que abarque todo el sistema de movilidad urbana."
      }
    ]
  },
  {
    id: 10,
    title: "Normativa de Uso del STI",
    description: "Preguntas sobre las reglas y normativas para el uso del Sistema Tarifario Integrado en Barcelona.",
    questions: [
      {
        id: 1,
        text: "¿Qué debe hacer el usuario al acceder a una estación de metro bajo el STI?",
        options: [
          "Comprar un billete y continuar su viaje",
          "Validar el billete en el lector correspondiente",
          "Solicitar el billete al conductor",
          "Acceder directamente si tiene abono mensual"
        ],
        correctAnswer: 1,
        explanation: "Todos los usuarios deben validar su billete en el lector correspondiente antes de acceder al transporte."
      },
      {
        id: 2,
        text: "¿Cuál es la sanción por viajar sin billete válido en el STI?",
        options: [
          "50 euros",
          "100 euros",
          "200 euros",
          "75 euros"
        ],
        correctAnswer: 1,
        explanation: "La multa establecida por viajar sin un billete válido en el STI es de 100 euros."
      },
      {
        id: 3,
        text: "¿Qué tipo de billetes deben utilizarse de manera unipersonal y no pueden ser compartidos?",
        options: [
          "T-grup",
          "Billete sencillo",
          "T-usual",
          "T-familiar"
        ],
        correctAnswer: 2,
        explanation: "El T-usual es un billete personal e intransferible, válido solo para el titular."
      },
      {
        id: 4,
        text: "¿Qué tiempo máximo de transbordo se permite en el STI para un billete de una zona?",
        options: [
          "90 minutos",
          "60 minutos",
          "75 minutos",
          "135 minutos"
        ],
        correctAnswer: 2,
        explanation: "Para un viaje dentro de una zona, el usuario tiene hasta 75 minutos para realizar transbordos sin pagar nuevamente."
      },
      {
        id: 5,
        text: "¿Qué debe hacer un usuario si pierde su tarjeta T-mobilitat?",
        options: [
          "Comprar una nueva tarjeta",
          "Bloquearla y solicitar una nueva tarjeta en el sistema",
          "Continuar utilizando el transporte sin tarjeta",
          "No se puede reemplazar"
        ],
        correctAnswer: 1,
        explanation: "Si un usuario pierde su tarjeta T-mobilitat, debe bloquearla y solicitar un reemplazo en el sistema para recuperar su saldo y abonos."
      }
    ]
  },
{
    id: 11,
    title: "Convenio Colectivo y Protocolos de Actuación",
    description: "Preguntas sobre el Convenio Colectivo de TMB y los protocolos de seguridad y prevención de riesgos laborales.",
    questions: [
      {
        id: 1,
        text: "¿Qué regula el Convenio Colectivo de TMB?",
        options: [
          "Solo los salarios de los empleados",
          "Las relaciones laborales, condiciones de trabajo y derechos de los empleados",
          "La relación entre los pasajeros y TMB",
          "Los precios de los billetes"
        ],
        correctAnswer: 1,
        explanation: "El Convenio Colectivo establece las condiciones laborales de los empleados de TMB, garantizando derechos y deberes."
      },
      {
        id: 2,
        text: "¿Cuál es uno de los derechos garantizados en el Convenio Colectivo de TMB?",
        options: [
          "Uso ilimitado del transporte",
          "Seguridad y salud en el entorno laboral",
          "Participación en las reuniones del Consejo de Administración",
          "Gestión de las líneas de autobuses"
        ],
        correctAnswer: 1,
        explanation: "El Convenio Colectivo garantiza condiciones de seguridad y salud laboral para los empleados."
      },
      {
        id: 3,
        text: "¿Qué se debe hacer en caso de una emergencia dentro de la red de TMB?",
        options: [
          "Continuar el servicio sin informar a los usuarios",
          "Evacuar de acuerdo con los protocolos de seguridad",
          "Esperar hasta que los usuarios abandonen el lugar",
          "Llamar solo a la policía"
        ],
        correctAnswer: 1,
        explanation: "En caso de emergencia, los empleados deben seguir los protocolos de evacuación y seguridad."
      },
      {
        id: 4,
        text: "¿Qué contempla el Convenio Colectivo respecto a la jornada laboral en TMB?",
        options: [
          "40 horas semanales distribuidas en 5 días laborables",
          "30 horas semanales con turnos nocturnos obligatorios",
          "50 horas semanales sin descansos regulados",
          "Turnos rotativos sin límite de horas"
        ],
        correctAnswer: 0,
        explanation: "El convenio regula una jornada laboral de 40 horas semanales con descansos y horarios flexibles según el puesto."
      },
      {
        id: 5,
        text: "¿Qué deben hacer los empleados en caso de una avería en un autobús de TMB?",
        options: [
          "Continuar el servicio sin notificar la incidencia",
          "Informar a los usuarios y seguir el protocolo de gestión de incidencias",
          "Detener el autobús y abandonar la ruta sin previo aviso",
          "Intentar reparar el autobús sin contactar a los servicios técnicos"
        ],
        correctAnswer: 1,
        explanation: "Los empleados deben comunicar la avería y seguir los protocolos establecidos para minimizar la afectación al servicio."
      },
      {
        id: 6,
        text: "¿Qué significa PRL en el contexto de TMB?",
        options: [
          "Protección de Recursos Laborales",
          "Prevención de Riesgos Laborales",
          "Preparación de Riesgos Locales",
          "Plan de Responsabilidad Laboral"
        ],
        correctAnswer: 1,
        explanation: "La PRL en TMB busca garantizar la seguridad y salud de los empleados mediante medidas preventivas."
      },
      {
        id: 7,
        text: "¿Qué equipo de protección es obligatorio para los trabajadores en áreas peligrosas?",
        options: [
          "Uniforme de diario",
          "Chaleco reflectante",
          "Corbata de seguridad",
          "Sombrero protector"
        ],
        correctAnswer: 1,
        explanation: "El chaleco reflectante mejora la visibilidad y seguridad del personal en zonas de alto riesgo."
      },
      {
        id: 8,
        text: "¿Qué deben hacer los empleados de TMB en caso de un accidente laboral?",
        options: [
          "Informar inmediatamente a sus superiores",
          "No hacer nada",
          "Continuar trabajando",
          "Informar solo si es un accidente grave"
        ],
        correctAnswer: 0,
        explanation: "Es obligatorio reportar cualquier accidente laboral para activar los protocolos de seguridad y asistencia."
      },
      {
        id: 9,
        text: "¿Cuál es el objetivo del Plan de Prevención de Riesgos Laborales en TMB?",
        options: [
          "Reducir costes operativos",
          "Evitar accidentes laborales y proteger la salud de los empleados",
          "Eliminar descansos y pausas laborales",
          "Aumentar la productividad sin importar la seguridad"
        ],
        correctAnswer: 1,
        explanation: "El plan establece medidas para prevenir accidentes y garantizar un entorno seguro."
      },
      {
        id: 10,
        text: "¿Qué medidas de seguridad implementa TMB para proteger a los trabajadores?",
        options: [
          "Uso de Equipos de Protección Individual (EPI) y formación en seguridad",
          "Reducción de personal para minimizar riesgos",
          "Eliminación de protocolos de emergencia",
          "Permiso para que los trabajadores elijan sus propias medidas de seguridad"
        ],
        correctAnswer: 0,
        explanation: "TMB proporciona formación y equipos adecuados para la seguridad de los empleados."
      },
      {
        id: 11,
        text: "¿Cómo garantiza TMB la seguridad de sus empleados en términos de salud laboral?",
        options: [
          "Eliminando descansos para reducir riesgos",
          "Realizando revisiones médicas periódicas y ofreciendo programas de salud mental",
          "Exigiendo jornadas laborales de más de 10 horas",
          "Eliminando el uso de Equipos de Protección Individual"
        ],
        correctAnswer: 1,
        explanation: "TMB vela por la salud de sus trabajadores con revisiones médicas y apoyo psicológico."
      },
      {
        id: 12,
        text: "¿Qué formación en seguridad reciben los empleados de TMB?",
        options: [
          "Solo reciben formación en atención al cliente",
          "Formación sobre uso de Equipos de Protección Individual (EPI) y procedimientos de seguridad",
          "No reciben ninguna formación específica",
          "Solo formación administrativa"
        ],
        correctAnswer: 1,
        explanation: "Los empleados reciben capacitación en seguridad laboral y uso de equipos de protección."
      },
      {
        id: 13,
        text: "¿Qué objetivo tienen los Protocolos de Actuación en TMB?",
        options: [
          "Asegurar la seguridad y eficiencia en la operación del transporte",
          "Limitar el acceso al transporte público",
          "Reducir el personal operativo en estaciones y autobuses",
          "Permitir a los empleados tomar decisiones sin normas establecidas"
        ],
        correctAnswer: 0,
        explanation: "Los protocolos buscan garantizar la seguridad y continuidad del servicio en diversas situaciones."
      }
    ]
  },
  {
    id: 12,
    title: "Carta de Servicios y Atención al Cliente",
    description: "Preguntas sobre los compromisos de calidad de TMB, gestión de quejas y satisfacción del cliente.",
    questions: [
      {
        id: 1,
        text: "¿Qué documento establece los compromisos de TMB en cuanto a la calidad del servicio?",
        options: [
          "Convenio Colectivo",
          "Protocolo de Seguridad",
          "Carta de Servicios",
          "Reglamento Interno de Conductores"
        ],
        correctAnswer: 2,
        explanation: "La Carta de Servicios recoge los estándares de calidad y compromisos de TMB con los usuarios."
      },
      {
        id: 2,
        text: "¿Cuál de los siguientes es un compromiso clave de la Carta de Servicios de TMB?",
        options: [
          "Permitir el uso de bicicletas en todos los vehículos",
          "Garantizar la limpieza y mantenimiento de los vehículos y estaciones",
          "Proporcionar transporte gratuito los fines de semana",
          "Implementar nuevos autobuses cada año"
        ],
        correctAnswer: 1,
        explanation: "TMB se compromete a mantener un servicio seguro, limpio y eficiente para los usuarios."
      },
      {
        id: 3,
        text: "¿Cuál es el objetivo principal de la Carta de Servicios de TMB?",
        options: [
          "Garantizar transparencia y mejora continua en el servicio",
          "Establecer sanciones para los usuarios que no cumplan las normas",
          "Fijar los precios de los billetes",
          "Determinar las rutas y horarios de los autobuses"
        ],
        correctAnswer: 0,
        explanation: "La Carta de Servicios busca ofrecer un transporte eficiente y mejorar continuamente la experiencia del usuario."
      },
      {
        id: 4,
        text: "¿Qué aspecto NO está incluido en la Carta de Servicios de TMB?",
        options: [
          "Puntualidad y frecuencia del servicio",
          "Accesibilidad para personas con movilidad reducida",
          "Diseño y colores de los autobuses",
          "Seguridad dentro de los vehículos y estaciones"
        ],
        correctAnswer: 2,
        explanation: "La Carta de Servicios se centra en la calidad del servicio, no en la estética de los vehículos."
      },
      {
        id: 5,
        text: "¿Cómo informa TMB a los usuarios en caso de retrasos o incidencias?",
        options: [
          "A través de la web, redes sociales y paneles informativos en estaciones",
          "Únicamente en periódicos impresos",
          "Mediante anuncios en radio y televisión",
          "Solo en oficinas de atención al cliente"
        ],
        correctAnswer: 0,
        explanation: "TMB utiliza múltiples canales digitales y físicos para informar a los pasajeros en tiempo real."
      },
      {
        id: 6,
        text: "¿Qué canal NO es utilizado por TMB para gestionar quejas y sugerencias?",
        options: [
          "Oficinas de atención al cliente",
          "App oficial de TMB",
          "Redes sociales",
          "Billetes de papel"
        ],
        correctAnswer: 3,
        explanation: "Las quejas deben presentarse en oficinas, por teléfono, en la web, redes sociales o la app de TMB."
      },
      {
        id: 7,
        text: "¿Cuál es el tiempo máximo que tiene TMB para responder a una queja presentada por un usuario?",
        options: [
          "5 días",
          "15 días hábiles",
          "30 días",
          "7 días"
        ],
        correctAnswer: 1,
        explanation: "TMB se compromete a responder todas las quejas en un plazo de 15 días hábiles."
      },
      {
        id: 8,
        text: "¿Qué sucede si una incidencia grave afecta a los usuarios del transporte de TMB?",
        options: [
          "Se ofrece una compensación o reembolso en algunos casos",
          "Se ignora la queja",
          "Se permite viajar gratis durante un mes",
          "Se aumenta la tarifa para evitar más incidentes"
        ],
        correctAnswer: 0,
        explanation: "Si una incidencia afecta significativamente a los usuarios, TMB puede ofrecer compensaciones."
      },
      {
        id: 9,
        text: "¿Qué pasos sigue TMB en la gestión de una queja?",
        options: [
          "Registro, análisis y respuesta en un máximo de 15 días hábiles",
          "Se ignora la queja a menos que sea grave",
          "Se espera a que el usuario la presente varias veces antes de responder",
          "Se responde solo si hay muchas quejas sobre el mismo tema"
        ],
        correctAnswer: 0,
        explanation: "Todas las quejas son registradas y analizadas antes de dar una respuesta."
      },
      {
        id: 10,
        text: "¿Qué indicador de satisfacción mide la regularidad con la que pasan los autobuses y trenes según el horario establecido?",
        options: [
          "Puntualidad y frecuencia del servicio",
          "Seguridad y confort",
          "Accesibilidad",
          "Atención al cliente"
        ],
        correctAnswer: 0,
        explanation: "Este indicador mide si los autobuses y trenes cumplen con los horarios establecidos."
      },
      {
        id: 11,
        text: "¿Qué indicador evalúa la percepción de seguridad en los vehículos y estaciones de TMB?",
        options: [
          "Puntualidad",
          "Limpieza y mantenimiento",
          "Seguridad y confort",
          "Frecuencia del servicio"
        ],
        correctAnswer: 2,
        explanation: "Se evalúa cómo los usuarios perciben la seguridad y comodidad en el transporte."
      },
      {
        id: 12,
        text: "¿Cómo obtiene TMB información sobre la satisfacción del usuario?",
        options: [
          "Solo mediante las quejas recibidas",
          "Encuestas y estudios periódicos de satisfacción",
          "Consultando informes de otros operadores de transporte",
          "Observando a los usuarios sin preguntarles"
        ],
        correctAnswer: 1,
        explanation: "TMB realiza encuestas y estudios periódicos para mejorar su servicio."
      },
      {
        id: 13,
        text: "¿Qué hace TMB cuando los indicadores de satisfacción muestran problemas recurrentes en el servicio?",
        options: [
          "Refuerza las áreas problemáticas con mejoras y ajustes",
          "Ignora los resultados",
          "Reduce la frecuencia de paso de los transportes",
          "Cambia las tarifas sin previo aviso"
        ],
        correctAnswer: 0,
        explanation: "Los indicadores permiten detectar problemas y tomar medidas correctivas."
      }
    ]
  },
  {
    id: 13,
    title: "Líneas de Metro y Autobús",
    description: "Preguntas sobre las líneas de metro, autobuses y gestión de incidencias en TMB.",
    questions: [
      {
        id: 1,
        text: "¿Cuál de las siguientes líneas conecta con el Aeropuerto de Barcelona?",
        options: [
          "L1",
          "L9 Sud",
          "L2",
          "L4"
        ],
        correctAnswer: 1,
        explanation: "La línea L9 Sud conecta Zona Universitària con el Aeropuerto de Barcelona-El Prat."
      },
      {
        id: 2,
        text: "¿Qué línea de autobús conecta el centro de Barcelona con el Tibidabo?",
        options: [
          "Línea 22",
          "Línea H12",
          "Línea 24",
          "Línea 20"
        ],
        correctAnswer: 2,
        explanation: "La línea 24 comunica el centro de Barcelona con la montaña del Tibidabo, siendo muy utilizada por turistas y locales."
      },
      {
        id: 3,
        text: "¿Qué líneas del metro son extensiones de la L9?",
        options: [
          "L4 y L5",
          "L6 y L7",
          "L10 Sud y L10 Nord",
          "L2 y L3"
        ],
        correctAnswer: 2,
        explanation: "Las líneas L10 Sud y L10 Nord son extensiones de la L9, dando servicio a áreas periféricas."
      },
      {
        id: 4,
        text: "¿Cuál de las siguientes líneas de autobús pertenece a la Nova Xarxa de Bus (NXB)?",
        options: [
          "V21",
          "55",
          "7",
          "92"
        ],
        correctAnswer: 0,
        explanation: "La V21 es una de las líneas de la Nova Xarxa de Bus (NXB), optimizando la movilidad en la ciudad."
      },
      {
        id: 5,
        text: "¿Cuál de estas líneas de metro cruza el centro de Barcelona pasando por Las Ramblas?",
        options: [
          "L2",
          "L3",
          "L5",
          "L9"
        ],
        correctAnswer: 1,
        explanation: "La línea L3 (verde) atraviesa el centro de Barcelona y pasa por estaciones como Liceu y Catalunya."
      },
      {
        id: 6,
        text: "¿Cuál es el sistema utilizado por TMB para gestionar el tráfico de autobuses en tiempo real?",
        options: [
          "GPS",
          "SViV (Sistema de Visión Integral del Vehículo)",
          "T-mobilitat",
          "ORACLE"
        ],
        correctAnswer: 1,
        explanation: "El sistema SViV ayuda a optimizar las rutas y tiempos de los autobuses en función del tráfico en tiempo real."
      },
      {
        id: 7,
        text: "¿Qué días opera ininterrumpidamente el metro de Barcelona?",
        options: [
          "De lunes a jueves",
          "De domingo a miércoles",
          "Los viernes",
          "Los sábados"
        ],
        correctAnswer: 3,
        explanation: "El metro de Barcelona funciona las 24 horas los sábados y en algunas festividades especiales."
      },
      {
        id: 8,
        text: "¿Qué beneficio proporciona el Sistema Tarifario Integrado (STI) a los usuarios?",
        options: [
          "Billetes gratuitos para todos los usuarios",
          "Permite transbordos gratuitos dentro del tiempo permitido según la zona",
          "Exclusividad para residentes de Barcelona",
          "Descuentos solo para turistas"
        ],
        correctAnswer: 1,
        explanation: "El STI permite a los usuarios cambiar de medio de transporte sin pagar un nuevo billete dentro de un tiempo determinado."
      },
      {
        id: 9,
        text: "¿Cómo se informa a los usuarios sobre tiempos de llegada de los autobuses en tiempo real?",
        options: [
          "Solo a través de megafonía en las estaciones",
          "Mediante la app de TMB y pantallas en paradas",
          "Solo preguntando a los conductores",
          "A través de folletos informativos"
        ],
        correctAnswer: 1,
        explanation: "Los usuarios pueden consultar los tiempos de llegada en la app de TMB y en las pantallas de las paradas."
      },
      {
        id: 10,
        text: "¿Qué sistema permite a los conductores de autobuses conocer en tiempo real el estado del tráfico?",
        options: [
          "T-mobilitat",
          "SViV (Sistema de Visión Integral del Vehículo)",
          "Tarjeta T-usual",
          "Tarjeta de transporte para conductores"
        ],
        correctAnswer: 1,
        explanation: "El SViV proporciona información en tiempo real sobre el tráfico, ayudando a optimizar rutas y frecuencias."
      },
      {
        id: 11,
        text: "¿Qué centro se encarga de gestionar las incidencias en la red de transporte de TMB?",
        options: [
          "Oficina de Atención al Cliente",
          "Centro de Control Operativo (CCO)",
          "Ayuntamiento de Barcelona",
          "Servicio de Atención Telefónica"
        ],
        correctAnswer: 1,
        explanation: "El CCO supervisa el funcionamiento del servicio y coordina la respuesta ante incidencias y emergencias."
      },
      {
        id: 12,
        text: "¿Qué debe hacer TMB en caso de averías técnicas en la red de metro o autobuses?",
        options: [
          "Cancelar el servicio sin previo aviso",
          "Activar planes de contingencia y ofrecer rutas alternativas",
          "No informar a los usuarios",
          "Detener todas las líneas hasta solucionar el problema"
        ],
        correctAnswer: 1,
        explanation: "En caso de incidencias, TMB implementa soluciones para minimizar el impacto en los usuarios."
      },
      {
        id: 13,
        text: "¿Qué protocolo sigue TMB en caso de una emergencia en la red de transporte?",
        options: [
          "Evacuación y coordinación con servicios de emergencia",
          "Suspensión indefinida del servicio",
          "Permitir que los usuarios gestionen la situación por sí mismos",
          "Esperar a que la emergencia termine sin intervenir"
        ],
        correctAnswer: 0,
        explanation: "TMB cuenta con protocolos de evacuación y colabora con los cuerpos de emergencia en situaciones críticas."
      },
      {
        id: 14,
        text: "¿Qué sistema permite a los usuarios conocer la hora de llegada de autobuses en tiempo real?",
        options: [
          "Pantallas en estaciones",
          "GPS de los autobuses",
          "App oficial de TMB",
          "Servicios de megafonía"
        ],
        correctAnswer: 2,
        explanation: "Los usuarios pueden consultar la llegada de los autobuses en la app de TMB y en las pantallas de las paradas."
      }
    ]
  },
  {
    id: 14,
    title: "Funciones del Comandament d'Explotació",
    description: "Preguntas sobre las responsabilidades y funciones del Comandament d'Explotació en TMB.",
    questions: [
      {
        id: 1,
        text: "¿Qué responsabilidad tiene el Comandament d'Explotació en la gestión de la red de autobuses?",
        options: [
          "Solo gestionar la recaudación de tarifas",
          "Supervisar la operación diaria y el cumplimiento del servicio programado",
          "Conducir autobuses en casos de emergencia",
          "Supervisar las instalaciones de mantenimiento"
        ],
        correctAnswer: 1,
        explanation: "El Comandament d'Explotació es el responsable de asegurar que el servicio funcione según lo programado, supervisando la operación y garantizando su eficiencia."
      },
      {
        id: 2,
        text: "¿Qué acción debe realizar el Comandament d'Explotació ante una incidencia en el tráfico?",
        options: [
          "Cancelar la ruta afectada",
          "Reprogramar la salida del autobús afectado",
          "Informar solo a los conductores",
          "Desviar la ruta afectada y coordinar alternativas con el CCO"
        ],
        correctAnswer: 3,
        explanation: "En caso de incidencias en el tráfico, el Comandament d'Explotació debe coordinar con el CCO para buscar soluciones como desvíos o refuerzos en el servicio."
      },
      {
        id: 3,
        text: "¿Qué función tiene el Comandament d'Explotació respecto al personal de conducción?",
        options: [
          "Evaluar y supervisar su desempeño en la operación diaria",
          "Asignar vacaciones y días libres",
          "Contratar nuevo personal de conducción",
          "Definir los horarios del personal administrativo"
        ],
        correctAnswer: 0,
        explanation: "El Comandament d'Explotació debe asegurarse de que los conductores cumplan con sus funciones correctamente y respeten las normativas establecidas."
      },
      {
        id: 4,
        text: "¿Cuál es una función clave del Comandament d'Explotació en relación al fraude?",
        options: [
          "Recaudar los ingresos de las tarifas de los pasajeros",
          "Detectar y prevenir el uso fraudulento de títulos de transporte",
          "Asignar el personal de control de fraudes",
          "Implementar tarifas reducidas"
        ],
        correctAnswer: 1,
        explanation: "El Comandament d'Explotació colabora con los equipos de inspección para evitar fraudes en el transporte público."
      },
      {
        id: 5,
        text: "¿Qué aspectos debe supervisar el Comandament d'Explotació en la gestión del servicio programado?",
        options: [
          "Asignación de recursos, frecuencia de paso y cumplimiento de horarios",
          "Exclusivamente la limpieza de los autobuses",
          "La venta de billetes en estaciones",
          "La contratación de nuevos empleados administrativos"
        ],
        correctAnswer: 0,
        explanation: "El Comandament d'Explotació debe garantizar que los autobuses operen con la frecuencia y horarios adecuados."
      },
      {
        id: 6,
        text: "¿Qué debe hacer el Comandament d'Explotació si un conductor reporta una avería en su autobús?",
        options: [
          "Ordenar al conductor que continúe en la ruta sin reparaciones",
          "Coordinar con el CCO para enviar un vehículo de sustitución",
          "Pedir al conductor que intente arreglar la avería sin asistencia",
          "Cancelar la línea afectada"
        ],
        correctAnswer: 1,
        explanation: "El Comandament d'Explotació debe gestionar incidencias en tiempo real para minimizar el impacto en el servicio."
      },
      {
        id: 7,
        text: "¿Cómo debe actuar el Comandament d'Explotació ante una queja sobre un conductor?",
        options: [
          "Analizar el caso, evaluar la situación y tomar medidas si es necesario",
          "Ignorar la queja a menos que se repita varias veces",
          "Suspender inmediatamente al conductor sin investigar",
          "Permitir que el conductor continúe sin seguimiento"
        ],
        correctAnswer: 0,
        explanation: "El Comandament d'Explotació debe gestionar las quejas con objetividad y tomar acciones si corresponde."
      },
      {
        id: 8,
        text: "¿Cómo puede el Comandament d'Explotació mejorar la eficiencia de los conductores?",
        options: [
          "Proporcionando formación y supervisión constante",
          "Eliminando descansos y pausas",
          "Obligando a los conductores a aumentar la velocidad",
          "Dejando que cada conductor elija sus rutas"
        ],
        correctAnswer: 0,
        explanation: "La capacitación y la supervisión garantizan un mejor desempeño del personal de conducción."
      },
      {
        id: 9,
        text: "¿Qué sistema debe usar el Comandament d'Explotació para recibir información en tiempo real sobre el estado del tráfico?",
        options: [
          "Sistema de Visión Integral del Vehículo (SViV)",
          "Planificación diaria sin ajustes",
          "Informes manuales de los conductores",
          "Inspecciones semanales sin comunicación en tiempo real"
        ],
        correctAnswer: 0,
        explanation: "El SViV permite gestionar el tráfico y ajustar rutas en función de las condiciones en tiempo real."
      },
      {
        id: 10,
        text: "¿Cómo debe actuar el Comandament d'Explotació si hay un accidente en una línea de autobús?",
        options: [
          "Coordinar con el CCO y proporcionar alternativas a los usuarios",
          "Ignorar la situación y esperar a que se resuelva sola",
          "Cancelar toda la operación sin notificar a los pasajeros",
          "Pedir a los usuarios que esperen sin información adicional"
        ],
        correctAnswer: 0,
        explanation: "Es clave actuar rápidamente y comunicar alternativas a los pasajeros en caso de incidencias."
      },
      {
        id: 11,
        text: "¿Cómo debe informar el Comandament d'Explotació a los usuarios sobre cambios en las rutas?",
        options: [
          "A través de la app de TMB, pantallas informativas y megafonía",
          "Solo mediante notas escritas en las paradas",
          "No es necesario informar a los usuarios",
          "Únicamente a través de anuncios en periódicos"
        ],
        correctAnswer: 0,
        explanation: "La comunicación en tiempo real con los pasajeros es fundamental para minimizar molestias."
      }
    ]
  },
  {
    id: 15,
    title: "Nova Xarxa de Bus y Rutas de Autobuses",
    description: "Preguntas sobre la Nova Xarxa de Bus y la planificación de rutas de autobuses en TMB.",
    questions: [
      {
        id: 1,
        text: "¿Qué línea de autobús forma parte de la Nova Xarxa de Bus (NXB) y es una línea horizontal?",
        options: ["V21", "H12", "D20", "24"],
        correctAnswer: 1,
        explanation: "Las líneas horizontales (H) cruzan Barcelona de este a oeste. La H12 conecta Gornal con Besòs Verneda."
      },
      {
        id: 2,
        text: "¿Qué tipo de eventos puede provocar un desvío temporal en una ruta de autobuses?",
        options: [
          "Cambios en la tarifa del transporte",
          "Eventos especiales como maratones o desfiles",
          "Aumento del precio del combustible",
          "Obras en las estaciones de metro"
        ],
        correctAnswer: 1,
        explanation: "Los eventos masivos pueden cerrar calles temporalmente, obligando a modificar las rutas de autobuses."
      },
      {
        id: 3,
        text: "¿Cuál es la primera acción que debe tomar el Comandament d'Explotació ante un desvío imprevisto?",
        options: [
          "Cancelar la ruta afectada",
          "Evaluar el alcance y duración del desvío",
          "Aumentar las tarifas",
          "Avisar a los usuarios después de que finalice el desvío"
        ],
        correctAnswer: 1,
        explanation: "Antes de implementar cambios, es crucial analizar la duración y afectación del desvío."
      },
      {
        id: 4,
        text: "¿Qué línea de autobús conecta el centro de Barcelona con el barrio de El Carmel?",
        options: ["H12", "V15", "24", "D20"],
        correctAnswer: 2,
        explanation: "La línea 24 conecta el centro de Barcelona (Plaza Cataluña) con el barrio de El Carmel."
      },
      {
        id: 5,
        text: "¿Cuál es una de las opciones de transporte público para llegar al Tibidabo desde el centro de Barcelona?",
        options: [
          "Autobús 24 directamente",
          "Metro L4 hasta Vallcarca y luego autobús 196",
          "Autobús H12 hasta el Tibidabo",
          "Tranvía Blau y Funicular del Tibidabo"
        ],
        correctAnswer: 3,
        explanation: "La forma tradicional de llegar al Tibidabo es tomando el Tranvía Blau o el Bus T2C hasta el Funicular del Tibidabo."
      },
      {
        id: 6,
        text: "¿Qué tipo de línea de autobús cruza Barcelona de norte a sur dentro de la Nova Xarxa de Bus?",
        options: [
          "Líneas diagonales (D)",
          "Líneas verticales (V)",
          "Líneas circulares",
          "Líneas interurbanas"
        ],
        correctAnswer: 1,
        explanation: "Las líneas verticales (V) conectan los extremos norte y sur de la ciudad."
      },
      {
        id: 7,
        text: "¿Qué herramienta utiliza el Comandament d'Explotació para ajustar las rutas en tiempo real?",
        options: ["T-mobilitat", "SViV (Sistema de Visión Integral del Vehículo)", "ORACLE", "L9 Sud"],
        correctAnswer: 1,
        explanation: "El SViV permite monitorear y ajustar las rutas en tiempo real según el tráfico y otras incidencias."
      },
      {
        id: 8,
        text: "¿Cuál de los siguientes es un punto clave en la planificación de rutas de autobuses?",
        options: [
          "Las conexiones con el metro y trenes de cercanías",
          "La cantidad de anuncios publicitarios en los autobuses",
          "La distancia que recorren los usuarios antes de bajar",
          "El número de vehículos diésel en la flota"
        ],
        correctAnswer: 0,
        explanation: "La integración con otros medios de transporte mejora la eficiencia y accesibilidad del sistema."
      },
      {
        id: 9,
        text: "¿Qué aspecto debe supervisar el Comandament d'Explotació en las líneas que pasan por hospitales y centros médicos?",
        options: [
          "Controlar el uso de la tarjeta T-mobilitat",
          "Ajustar la frecuencia en horas punta para facilitar el acceso",
          "Asegurar que los conductores conozcan los horarios de consulta médica",
          "Implementar tarifas especiales solo para pacientes"
        ],
        correctAnswer: 1,
        explanation: "Las rutas que pasan por hospitales pueden requerir ajustes en horarios de mayor afluencia."
      },
      {
        id: 10,
        text: "¿Qué acción debe realizar el Comandament d'Explotació en caso de una incidencia grave en una línea de autobús?",
        options: [
          "Ignorar la situación y esperar que se resuelva sola",
          "Implementar una ruta alternativa y comunicar la información a conductores y usuarios",
          "Cancelar todas las líneas de la misma zona",
          "Aumentar la velocidad de los autobuses en otras rutas"
        ],
        correctAnswer: 1,
        explanation: "El Comandament d'Explotació debe minimizar el impacto en los usuarios con soluciones rápidas y efectivas."
      },
      {
        id: 11,
        text: "¿Cómo debe informar el Comandament d'Explotació a los usuarios sobre cambios en las rutas de autobuses?",
        options: [
          "Solo mediante anuncios en la prensa",
          "Mediante pantallas informativas, la app de TMB y megafonía",
          "Únicamente a través de los conductores",
          "Publicando un informe al final del mes"
        ],
        correctAnswer: 1,
        explanation: "La información en tiempo real permite que los usuarios tomen decisiones rápidas y eficientes."
      },
      {
        id: 12,
        text: "¿Qué otros medios de transporte deben coordinarse con la red de autobuses de TMB?",
        options: [
          "Tranvías, metro y trenes de cercanías",
          "Aerolíneas internacionales",
          "Transporte marítimo y taxis",
          "Bicicletas privadas"
        ],
        correctAnswer: 0,
        explanation: "La integración con otros modos de transporte público mejora la movilidad urbana."
      },
      {
        id: 13,
        text: "¿Por qué es importante coordinar los horarios de los autobuses con los del metro?",
        options: [
          "Para que los conductores tengan más tiempo libre",
          "Para facilitar los transbordos y mejorar la eficiencia del sistema",
          "Para evitar que los usuarios usen el transporte público",
          "Para hacer que los autobuses sean más rápidos que el metro"
        ],
        correctAnswer: 1,
        explanation: "Una buena coordinación evita tiempos de espera largos y mejora la experiencia del usuario."
      },
      {
        id: 14,
        text: "¿Cuál es el principal beneficio de una buena integración entre autobuses y otros transportes?",
        options: [
          "Reducir la necesidad de comprar más vehículos",
          "Minimizar el uso de automóviles privados y mejorar la sostenibilidad",
          "Aumentar el tiempo de espera en las estaciones",
          "Obligar a los usuarios a cambiar de transporte constantemente"
        ],
        correctAnswer: 1,
        explanation: "Un transporte público eficiente reduce la congestión vehicular y las emisiones contaminantes."
      }
    ]
  },
  {
    id: 16,
    title: "Aplicaciones Informáticas para la Gestión de la Operación",
    description: "Preguntas sobre las herramientas informáticas utilizadas en TMB para la gestión del transporte.",
    questions: [
      {
        id: 1,
        text: "¿Qué herramienta utiliza el Comandament d'Explotació para geolocalizar los autobuses en tiempo real?",
        options: ["HASTUS", "SViV", "ORACLE", "ROTB"],
        correctAnswer: 1,
        explanation: "El SViV (Sistema de Visión Integral del Vehículo) permite monitorizar la ubicación en tiempo real de cada autobús y gestionar incidencias en la red de transporte."
      },
      {
        id: 2,
        text: "¿Cuál de las siguientes aplicaciones es responsable de la planificación de horarios y la asignación de conductores?",
        options: ["ORACLE", "ROTB", "SViV", "HASTUS"],
        correctAnswer: 3,
        explanation: "HASTUS es el sistema que gestiona la planificación de horarios y la asignación de conductores y autobuses, optimizando los recursos de TMB."
      },
      {
        id: 3,
        text: "¿Qué sistema registra todas las operaciones de transporte realizadas por TMB?",
        options: ["SViV", "HASTUS", "ORACLE", "ROTB"],
        correctAnswer: 3,
        explanation: "El ROTB (Registre d'Operacions de Transport de Barcelona) almacena datos clave sobre los viajes realizados, kilómetros recorridos y desempeño operativo."
      },
      {
        id: 4,
        text: "¿Qué sistema permite la gestión del inventario y los recursos humanos en TMB?",
        options: ["ORACLE", "SViV", "HASTUS", "ROTB"],
        correctAnswer: 0,
        explanation: "ORACLE es una plataforma de gestión integrada utilizada en TMB para administrar recursos humanos, inventario y finanzas."
      },
      {
        id: 5,
        text: "¿Cuál es la principal ventaja del sistema SViV para la operación de autobuses?",
        options: [
          "Mejora la puntualidad de los conductores",
          "Permite monitorear el tráfico de la red de autobuses en tiempo real",
          "Gestiona el inventario de autobuses",
          "Registra todas las operaciones financieras"
        ],
        correctAnswer: 1,
        explanation: "SViV es un sistema de geolocalización en tiempo real que ayuda a optimizar la frecuencia de paso y mejorar la respuesta ante incidencias."
      },
      {
        id: 6,
        text: "¿Qué beneficio aporta HASTUS a la planificación del servicio de autobuses?",
        options: [
          "Permite gestionar la recaudación de tarifas",
          "Facilita la creación de horarios eficientes y la asignación de recursos",
          "Optimiza el consumo de combustible en los autobuses",
          "Supervisa el cumplimiento de los protocolos de seguridad"
        ],
        correctAnswer: 1,
        explanation: "HASTUS se utiliza en TMB para crear horarios optimizados y asignar conductores y vehículos de manera eficiente."
      },
      {
        id: 7,
        text: "¿Cómo contribuye el ROTB a la mejora del servicio en TMB?",
        options: [
          "Monitorea la ubicación de los autobuses en tiempo real",
          "Registra y analiza datos operativos para optimizar la planificación",
          "Gestiona la formación de los empleados",
          "Supervisa la recaudación de billetes"
        ],
        correctAnswer: 1,
        explanation: "ROTB recopila información sobre la operación diaria, permitiendo a TMB tomar decisiones para mejorar la eficiencia del servicio."
      }
    ]
  },
  {
    id: 17,
    title: "Premios y Sanciones",
    description: "Preguntas sobre el sistema de premios y sanciones en TMB.",
    questions: [
      {
        id: 1,
        text: "¿Qué tipo de reconocimiento puede recibir un empleado por su contribución a evitar un accidente en TMB?",
        options: [
          "Sanción leve",
          "Reprimenda verbal",
          "Premio en metálico o carta laudatoria",
          "Suspensión temporal de empleo y sueldo"
        ],
        correctAnswer: 2,
        explanation: "TMB premia a los empleados que contribuyen a la prevención de accidentes con reconocimientos económicos o formales, como cartas laudatorias."
      },
      {
        id: 2,
        text: "¿Cuál de los siguientes ejemplos corresponde a una falta leve?",
        options: [
          "Negligencia grave que ponga en peligro a los pasajeros",
          "Impuntualidad reiterada",
          "Abuso de autoridad",
          "Fraude en el uso de títulos de transporte"
        ],
        correctAnswer: 1,
        explanation: "La impuntualidad reiterada es una falta leve, ya que afecta la operación, pero no pone en riesgo la seguridad ni tiene un impacto grave en la empresa."
      },
      {
        id: 3,
        text: "¿Qué sanción se aplicaría en caso de una falta muy grave como fraude?",
        options: [
          "Amonestación escrita",
          "Suspensión de empleo y sueldo por 10 días",
          "Despido",
          "Aumento de vacaciones"
        ],
        correctAnswer: 2,
        explanation: "El fraude en TMB es una falta muy grave que puede implicar el despido inmediato del trabajador."
      },
      {
        id: 4,
        text: "¿Cuál es el plazo de prescripción para una falta grave en TMB?",
        options: ["10 días", "30 días", "60 días", "20 días"],
        correctAnswer: 2,
        explanation: "Según la normativa de TMB, las faltas graves y muy graves prescriben en 60 días."
      },
      {
        id: 5,
        text: "¿Qué ocurre con una falta leve si el empleado no vuelve a cometerla en un período de 6 meses?",
        options: [
          "Se agrava a falta menos grave",
          "Se cancela y elimina del expediente",
          "Se convierte en falta grave",
          "Se suspende la cancelación"
        ],
        correctAnswer: 1,
        explanation: "Si el empleado no reincide en una falta leve, esta se cancela y se elimina de su historial después de 6 meses."
      },
      {
        id: 6,
        text: "¿Qué tipo de sanción puede aplicarse a un empleado que comete una falta menos grave, como una ausencia injustificada?",
        options: [
          "Amonestación verbal",
          "Suspensión de empleo y sueldo de 1 a 10 días",
          "Suspensión prolongada de empleo y sueldo de 11 a 30 días",
          "Despido inmediato"
        ],
        correctAnswer: 1,
        explanation: "Las faltas menos graves pueden sancionarse con una suspensión de empleo y sueldo de hasta 10 días."
      },
      {
        id: 7,
        text: "¿Cuál de los siguientes NO es un motivo para recibir un premio en TMB?",
        options: [
          "Espíritu de compañerismo",
          "Mejora del servicio",
          "Desobediencia reiterada",
          "Prevención de accidentes"
        ],
        correctAnswer: 2,
        explanation: "La desobediencia reiterada no es un comportamiento premiado, sino que puede ser sancionado dependiendo de su gravedad."
      },
      {
        id: 8,
        text: "¿Cómo se otorgan los premios en TMB?",
        options: [
          "Se asignan automáticamente cada año a todos los empleados",
          "Se evalúan propuestas y la Dirección decide",
          "Se entregan sin ningún criterio específico",
          "Solo los conductores pueden recibir premios"
        ],
        correctAnswer: 1,
        explanation: "Los premios en TMB se otorgan tras una evaluación de méritos realizada por la Dirección de la empresa."
      },
      {
        id: 9,
        text: "¿Qué ocurre con un empleado que acumula repetidas faltas leves sin corregir su conducta?",
        options: [
          "Se le otorga un reconocimiento",
          "Sus faltas leves pueden ser consideradas como una falta grave",
          "No ocurre nada si son faltas leves",
          "Se le reduce el salario automáticamente"
        ],
        correctAnswer: 1,
        explanation: "La reincidencia en faltas leves puede llevar a que estas sean consideradas faltas graves."
      }
    ]
  }
];
  export const infoGeneral = [
    {
      id: "Info_1",
      title: "Nomenclatura de Líneas y Otros Términos Relevantes",
      description: "Información sobre la nomenclatura de líneas, abreviaturas, sistemas y aplicaciones utilizados en TMB.",
      content: `## Nomenclatura de Líneas:

* **H:** Líneas horizontales de la Nova Xarxa de Bus (NXB)
* **V:** Líneas verticales de la NXB
* **D:** Líneas diagonales de la NXB
* **L:** Líneas de metro (L1, L2, L3, etc.)

## Iniciales y Abreviaturas Importantes:

* **TMB:** Transports Metropolitans de Barcelona
* **ATM:** Autoritat del Transport Metropolità
* **AMB:** Àrea Metropolitana de Barcelona
* **FMB:** Ferrocarril Metropolità de Barcelona
* **TB:** Transports de Barcelona
* **STI:** Sistema Tarifario Integrado
* **NXB:** Nova Xarxa de Bus
* **CCO:** Centro de Control Operativo
* **SViV:** Sistema de Visión Integral del Vehículo
* **ROTB:** Registre d'Operacions de Transport de Barcelona
* **PRL:** Prevención de Riesgos Laborales
* **ISC:** Índice de Satisfacción del Cliente
* **CON:** Centro Operativo de Negocio
* **SPV:** Sistema de Peaje y Venta
* **CRT:** Centre de Regulació del Trànsit (Centro de Regulación del Tráfico)
* **CCB:** Centro control de bus
* **REMT:** Registre d'Explotació i Manteniment de Transports
* **UT:** Unitat de Tracció (Unidad de Tracción en el metro)

## Sistemas y Aplicaciones:

* **SAE:** Sistema de Ayuda a la Explotación
* **SViV:** Sistema de Visión Integral del Vehículo
* **BKB:** Sistema para gestionar la línea y destino en el cartel exterior del autobús
* **Hanover:** Sistema alternativo a BKB para la gestión de carteles de destino
* **HASTUS:** Sistema de planificación y gestión de horarios
* **ORACLE:** Sistema de gestión administrativa y logística
* **SAP-R3:** Sistema de planificación de recursos empresariales
* **TRANSCAD:** Sistema de análisis y planificación de transporte
* **SCADA:** Supervisory Control and Data Acquisition (Sistema de supervisión de operaciones)

## Cargos y Departamentos:

* **CE:** Comandament d'Explotació (Mando de Explotación)
* **CGOL:** Jefe superior al Mando Intermedio Funcional
* **RCON:** Responsable del Centro Operativo de Negocio
* **MIF:** Mando Intermedio Funcional
* **GOL:** Gestor Operativo Local
* **DPO:** Dirección por Objetivos

## Títulos de Transporte:

* **T-casual:** Billete multipersonal de 10 viajes
* **T-usual:** Abono mensual personal
* **T-jove:** Abono trimestral para jóvenes
* **T-dia:** Billete de un día
* **T-grup:** Billete para grupos
* **T-familiar:** Billete multipersonal de 8 viajes
* **T-16:** Título gratuito para menores hasta 16 años

## Otros Términos Relevantes:

* **ISC:** Índice de Satisfacción del Cliente
* **EPI:** Equipo de Protección Individual
* **PRL:** Prevención de Riesgos Laborales
* **PPA:** Pla de Prevenció d'Accidents (Plan de Prevención de Accidentes)
* **GAT:** Grupos Autónomos de Gestión
* **DpO:** Dirección por Objetivos
* **ODS:** Objetivos de Desarrollo Sostenible
* **RSC:** Responsabilidad Social Corporativa
* **PIZARRA:** Herramienta de comunicación interna para gestión de incidencias
* **SOE:** Permiso retribuido por consulta médica
* **AIC:** Agente de Intervención y Control`
  }
  ];
  