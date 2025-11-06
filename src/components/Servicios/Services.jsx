import { motion } from "framer-motion";
import { FaCode, FaPalette, FaMobileAlt, FaServer, FaChalkboardTeacher } from "react-icons/fa";

// Definición de variantes para la animación en cascada (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Retraso entre la aparición de cada hijo
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring", // Usa un tipo de resorte para una sensación más orgánica
      stiffness: 100,
      damping: 20,
    },
  },
};

const services = [
  {
    id: "01",
    title: "Desarrollo Web WordPress",
    desc: "Diseño y desarrollo de sitios web administrables con WordPress y Elementor. Implementación de buscadores personalizados, filtros dinámicos y optimización SEO.",
    icon: <FaCode size={28} />,
  },
  {
    id: "02",
    title: "Diseño UI/UX",
    desc: "Diseño de interfaces modernas y usables, creando prototipos en Figma enfocados en mejorar la experiencia del usuario.",
    icon: <FaPalette size={28} />,
  },
  {
    id: "03",
    title: "Integración de Aulas Virtuales",
    desc: "Configuración e implementación de plataformas Moodle para instituciones educativas, incluyendo personalización de cursos y emisión de certificados digitales.",
    icon: <FaChalkboardTeacher size={28} />,
  },
  {
    id: "04",
    title: "Desarrollo Frontend",
    desc: "Construcción de sitios web responsivos con HTML, CSS, JavaScript y React, asegurando compatibilidad y rendimiento en todos los dispositivos.",
    icon: <FaMobileAlt size={28} />,
  },
];

export default function Servicios() {
  return (
    <section
  id="servicios"
  className="py-6 pb-16 sm:pb-4 bg-[#1c1b22] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          {/* Usamos 'viewport' y 'whileInView' para animar cuando el elemento entra en la vista */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00fd9c]"
          >
            Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Ofrezco soluciones completas en desarrollo y diseño digital, enfocadas en resultados reales y experiencia de usuario.
          </motion.p>
        </div>

        {/* Grid de servicios con animación en cascada (stagger) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animación al entrar a la vista
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Variante para la animación de entrada
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              // CLASES MEJORADAS:
              // - Añadido 'rounded-xl' para un borde más estético.
              // - Añadido un fondo sutil en hover (bg-gradient-to-br)
              // ... dentro de la tarjeta de servicio
            className="relative group animate-borderGlow-hover p-8 bg-[#232229] rounded-xl shadow-lg 
                        hover:shadow-[0_0_30px_#00fd9c50] transition-all duration-500 cursor-pointer 
                        hover:bg-linear-to-br from-[#2a2a2f] to-[#232229]" // <--- CAMBIO AQUÍ
            // ...
            >
              <div className="relative z-10">
                {/* Número e ícono */}
                <div className="flex justify-between items-start mb-6">
                  {/* Número que se desvanece sutilmente en hover */}
                  <span className="text-5xl font-extrabold text-gray-200 opacity-50 
                                     group-hover:text-[#00fd9c] group-hover:opacity-100 transition duration-500">
                    {service.id}
                  </span>

                  {/* Ícono animado */}
                  <motion.span
                    className="text-[#00fd9c] text-3xl" // Ícono ligeramente más grande (text-3xl)
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {service.icon}
                  </motion.span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#00fd9c] transition">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 group-hover:text-gray-300 transition leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}