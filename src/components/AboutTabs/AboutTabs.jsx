import { useState } from "react";
// 🚨 Asegúrate de importar motion y AnimatePresence
import { motion, AnimatePresence } from "framer-motion"; 

// ... (datos y arrays se mantienen iguales) ...

const tabs = [
  { id: "experience", label: "Experiencia" },
  { id: "education", label: "Educación" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "Sobre mí" },
];

// 1. Variantes para la animación del contenido (FADE/SLIDE)
const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

// 2. Variantes para la animación en cascada (STAGGER) de la lista de elementos
const listContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05, // Retraso entre la aparición de cada elemento
    },
  },
};

const listItemVariants = {
  initial: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};


const experiencias = [
  {
    empresa: "Agencia consigue Ventas",
    cargo: "Desarrollador Web WordPress",
    año: "Abril - Agosto 2025",
    descripcion:
      "Desarrollo de páginas web corporativas bajo Elementor. Implementación de buscadores personalizados, integración de SEO y optimización de carga.",
  },
  {
    empresa: "Instituto IPDECTI",
    cargo: "Practicante de Desarrollo Web",
    año: "Abril - Agosto 2024",
    descripcion:
      "Desarrollo de un aula virtual en Moodle y un sistema automatizado de emisión de certificados digitales con códigos QR.",
  },
  {
    empresa: "Animal Pets",
    cargo: "Colaborador de Aplicación Móvil",
    año: "Julio - Noviembre 2024",
    descripcion:
      "Apoyo en el desarrollo de una aplicación móvil para gestión veterinaria, registro de pacientes y programación de citas.",
  },
  {
    empresa: "Proyectos Freelance",
    cargo: "Desarrollador Frontend",
    año: "2024 - Presente",
    descripcion:
      "Creación de landing pages y sitios web adaptables, usando HTML, CSS, JavaScript, React y WordPress.",
  },
];


const educacion = [
  {
    institucion: "Universidad Nacional José Faustino Sánchez Carrión",
    grado: "Ingeniería de Sistemas",
    año: "2021 - Culminado",
    detalle: "Formación en desarrollo de software, análisis de sistemas y bases de datos.",
  },
  {
    institucion: "Google Activate",
    grado: "Marketing Digital",
    año: "2023",
    detalle: "Certificación en posicionamiento SEO, analítica web y presencia digital.",
  },
  {
    institucion: "Udemy",
    grado: "Curso de React y Desarrollo Frontend",
    año: "2024",
    detalle: "Aprendizaje práctico en componentes, hooks y diseño responsivo con Tailwind CSS.",
  },
  {
    institucion: "OpenBootcamp",
    grado: "Formación Fullstack",
    año: "2024",
    detalle: "Fundamentos de frontend y backend aplicados al desarrollo de proyectos reales.",
  },
];


const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind",
  "PHP",
  "Next.js",
  "Bootstrap",
  "WordPress",
  "Moodle",
  "Figma",
];


const aboutData = [
  { label: "Nombre", value: "Lino Retuerto" },
  { label: "Edad", value: "24 años" },
  { label: "País", value: "Perú" },
  { label: "Estado", value: "Disponible" },
  { label: "Correo", value: "retuertolazarolino@gmail.com" },
  { label: "Idiomas", value: "Español, Inglés" },
];


const renderContent = (activeTab) => {
  switch (activeTab) {
    case "experience":
      return (
        <motion.div
          key="experience" // Key única es ESENCIAL para AnimatePresence
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-[500px] md:h-[400px] flex flex-col"
        >
          <h3 className="text-2xl font-semibold text-[#00fd9c] mb-4">Experiencia Profesional</h3>
          <p className="text-gray-300 mb-6">
            He trabajado en distintos proyectos centrados en el desarrollo web moderno.
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar"
            variants={listContainerVariants}
            initial="initial"
            animate="visible"
          >
            {experiencias.map((exp, i) => (
              <motion.div
                key={i}
                variants={listItemVariants}
                whileHover={{ y: -3 }} // Animación sutil al hacer hover
                className="bg-[#232229]/60 p-4 rounded-lg border border-[#00fd9c]/20 hover:border-[#00fd9c]/60 transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,253,156,0.3)]"
              >
                <h4 className="text-lg font-semibold text-white mb-1">
                  {exp.cargo} — <span className="text-[#00fd9c]">{exp.empresa}</span>
                </h4>
                <p className="text-sm text-gray-400 italic mb-1">{exp.año}</p>
                <p className="text-sm text-gray-300">{exp.descripcion}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );

    case "education":
      return (
        <motion.div
          key="education" // Key única es ESENCIAL para AnimatePresence
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-[500px] md:h-[400px] flex flex-col"
        >
          <h3 className="text-2xl font-semibold text-[#00fd9c] mb-4">Educación</h3>
          <p className="text-gray-300 mb-6">
            Formación académica y cursos complementarios en tecnología y desarrollo web.
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar"
            variants={listContainerVariants}
            initial="initial"
            animate="visible"
          >
            {educacion.map((edu, i) => (
              <motion.div
                key={i}
                variants={listItemVariants}
                whileHover={{ y: -3 }} // Animación sutil al hacer hover
                className="bg-[#232229]/60 p-4 rounded-lg border border-[#00fd9c]/20 hover:border-[#00fd9c]/60 transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,253,156,0.3)]"
              >
                <h4 className="text-lg font-semibold text-white mb-1">{edu.grado}</h4>
                <p className="text-sm text-[#00fd9c]">{edu.institucion}</p>
                <p className="text-sm text-gray-400 italic mb-1">{edu.año}</p>
                <p className="text-sm text-gray-300">{edu.detalle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );

    case "skills":
      return (
        <motion.div
          key="skills" // Key única es ESENCIAL para AnimatePresence
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-[400px] flex flex-col"
        >
          <h3 className="text-2xl font-semibold text-[#00fd9c] mb-4">Skills</h3>
          <p className="text-gray-300 mb-6">Tecnologías y herramientas que utilizo en mi flujo de trabajo.</p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={listContainerVariants}
            initial="initial"
            animate="visible"
          >
            {skillsData.map((skill, i) => (
              <motion.div
                key={i}
                variants={listItemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-[#232229]/60 text-center p-4 rounded-lg border border-[#00fd9c]/20 hover:border-[#00fd9c]/60 transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,253,156,0.3)]"
              >
                <p className="text-white font-semibold">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );

    case "about":
      return (
        <motion.div
          key="about" // Key única es ESENCIAL para AnimatePresence
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-[400px] flex flex-col"
        >
          <h3 className="text-2xl font-semibold text-[#00fd9c] mb-4">Sobre Mí</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Soy un desarrollador apasionado por crear interfaces limpias, rápidas y funcionales. Me gusta transformar ideas en experiencias digitales efectivas, siendo autodidacta y orientado a resultados.
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full"
            variants={listContainerVariants}
            initial="initial"
            animate="visible"
          >
            {aboutData.map((item, i) => (
              <motion.div
                key={i}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row sm:items-center items-start bg-[#232229]/50 p-3 rounded-md border border-[#00fd9c]/10 hover:border-[#00fd9c]/40 transition-all duration-300"
              >
                <span className="font-semibold text-[#00fd9c] sm:w-32 w-full text-sm sm:text-base mb-1 sm:mb-0">
                  {item.label}:
                </span>
                <span className="text-gray-200 text-sm sm:text-base break-word">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );

    default:
      return null;
  }
};


const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="bg-[#1c1b22] text-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 Encabezado general con animación de entrada */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#00fd9c] mb-4"
          >
            Mi Trayectoria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Una mirada a mi recorrido profesional, formación, habilidades y motivación como desarrollador.
            Cada paso refleja mi compromiso con la mejora continua y el aprendizaje constante.
          </motion.p>
        </div>

        {/* 🔹 Contenido principal con pestañas */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Pestañas laterales */}
          <div className="flex flex-col md:w-1/4 border-b md:border-b-0 md:border-r border-[#00fd9c]/20 md:pr-4 pb-4 md:pb-0 gap-3 md:gap-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-selected={activeTab === tab.id}
                // Efecto 'tap' para respuesta instantánea al click
                whileTap={{ scale: 0.98 }} 
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative z-10
                  ${
                    activeTab === tab.id
                      ? "bg-[#00fd9c] text-[#1c1b22] shadow-[0_0_10px_rgba(0,253,156,0.45)] scale-100 md:scale-[1.05]"
                      : "bg-[#232229]/70 text-gray-200 hover:bg-[#00fd9c]/90 hover:text-[#1c1b22] hover:shadow-[0_0_12px_rgba(0,253,156,0.35)]"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Contenido derecho con AnimatePresence */}
          <div className="md:w-3/4 w-full bg-[#1c1b22]/60 p-6 rounded-lg border border-[#00fd9c]/20 shadow-[0_0_20px_rgba(0,253,156,0.05)]">
            <AnimatePresence mode="wait">
              {/* Usa 'mode="wait"' para que el contenido anterior desaparezca completamente antes de que el nuevo entre. */}
              {renderContent(activeTab)}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;