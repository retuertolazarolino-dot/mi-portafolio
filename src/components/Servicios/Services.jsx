import { useState } from "react";
import img1 from "../../assets/work/service1.png";
import img2 from "../../assets/work/service2.png";
import img3 from "../../assets/work/service3.png";
import img4 from "../../assets/work/service4.png";


// === Iconos personalizados ===
const CodeIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const PaletteIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
      clipRule="evenodd"
    />
  </svg>
);
const MobileIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
);
const TeacherIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>
);

const services = [
  {
    id: "01",
    title: "Desarrollo Web WordPress",
    desc: "Diseño y desarrollo de sitios web y tiendas administrables con WordPress, Woocomerce y Elementor. Implementación de filtros dinámicos y optimización SEO.",
    icon: <CodeIcon />,
    image: img1,
  },
  {
    id: "02",
    title: "Diseño UI/UX",
    desc: "Diseño de interfaces modernas y usables, creando prototipos en Figma enfocados en mejorar la experiencia del usuario.",
    icon: <PaletteIcon />,
    image: img2,
  },
  {
    id: "03",
    title: "Aulas Virtuales",
    desc: "Configuración e implementación de plataformas Moodle para instituciones educativas, incluyendo personalización de cursos y emisión de certificados digitales.",
    icon: <TeacherIcon />,
    image: img4,
  },
  {
    id: "04",
    title: "Desarrollo Frontend",
    desc: "Construcción de sitios web responsivos con HTML, CSS, JavaScript y React, asegurando compatibilidad y rendimiento en todos los dispositivos.",
    icon: <MobileIcon />,
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
  },
];

export default function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const isActive = (index) => hoveredIndex === index || selectedCard === index;

  return (
    <section id="servicios" className="py-16 bg-[#1c1b22] text-white min-h-screen scroll-mt-[60px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00fd9c]">Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ofrezco soluciones completas en desarrollo y diseño digital, enfocadas en resultados reales y experiencia de usuario.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const isCardActive = isActive(index);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
                className={`relative rounded-xl cursor-pointer transition-all duration-500 ${
                  isCardActive ? "shadow-2xl -translate-y-2" : ""
                }`}
              >
                {/* Borde animado */}
                <div
                  className={`absolute -inset-px rounded-xl bg-linear-to-r from-[#00fd9c] to-[#00fdc8] blur-sm transition-all duration-500 ${
                    isCardActive ? "opacity-70 animate-pulseGlow" : "opacity-0"
                  }`}
                ></div>

                {/* Contenedor principal */}
                <div className="relative bg-[#232229] rounded-xl shadow-lg transition-all duration-500 md:overflow-hidden border border-[#036b559d]">

                  
                  {/* Imagen con título superpuesto */}
                  <div className="relative w-full h-48 md:h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-all duration-500
                        ${isCardActive ? "brightness-50 scale-110 rounded-t-[15px]" : "brightness-75 rounded-[15px]"}
                      `}
                    />

                    {/* 🔹 Título sobre la imagen (oculto en hover/touch activo) */}
                    <div
                      className={`absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 
                                  rounded-md px-4 py-2 shadow-lg transition-opacity duration-500 z-20
                                  ${isCardActive ? "opacity-0" : "opacity-100"}`}
                    >
                      <h3 className="text-lg font-semibold text-[#e4fcf3] tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido móvil (expandible) */}
                  <div
                    className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${
                      isCardActive ? "max-h-[500px] opacity-100 p-6 mt-2" : "max-h-0 opacity-0 p-0"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-4xl font-extrabold text-[#00fd9c]">{service.id}</span>
                        <span className="text-[#00fd9c] text-3xl">{service.icon}</span>
                      </div>

                      {/* ✅ Título visible solo en contenido expandido */}
                      <h3 className="text-2xl font-semibold mb-3 text-[#00fd9c]">{service.title}</h3>

                      <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>

                  {/* Contenido hover escritorio */}
                  <div
                    className={`hidden md:flex md:absolute md:inset-0 bg-[#232229]/95 p-8 flex-col justify-between rounded-b-[15px] 
                                transition-opacity duration-700 ${
                                  hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-5xl font-extrabold text-[#00fd9c]">{service.id}</span>
                        <span className="text-[#00fd9c] text-3xl">{service.icon}</span>
                      </div>

                      <h3 className="text-2xl font-semibold mb-3 text-[#00fd9c]">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
