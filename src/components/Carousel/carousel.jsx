import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WorkSliderBtns from "./WorkSliderBtns";
import { FaGlobeAmericas } from "react-icons/fa";

// Importa tus imágenes reales (coloca tus capturas en /assets)
import img1 from "../../assets/work/work1.png";
import img2 from "../../assets/work/ipdecti.png";
import img3 from "../../assets/work/thumb2.png";
import img4 from "../../assets/work/thumb3.png";
import img5 from "../../assets/work/consigueventas.png";



const proyectos = [
  {
    id: 1,
    titulo: "Sitio Web – Consigue Ventas",
    descripcion:
      "Desarrollo de sitios web empresariales bajo metodología Scrum. Implementación de secciones internas, diseño responsivo y funcionalidades como banners de cookies y e-commerce con WooCommerce.",
    tecnologias: ["WordPress", "Elementor", "JavaScript", "CSS"],
    imagen: img1,
    enlace: "https://consigueventas.com/", // cambia a la URL real si el sitio está online
  },
  {
    id: 2,
    titulo: "Aula Virtual – IPDECTI",
    descripcion:
      "Integración y personalización de plataforma Moodle para la gestión académica y emisión de certificados. Diseño de interfaz y configuración de cursos para mejorar la experiencia educativa.",
    tecnologias: ["Moodle", "PHP", "CSS", "Canva", "Angular"],
    imagen: img2,
    enlace: "https://ipdecti.edu.pe/",
  },
  {
    id: 3,
    titulo: "Aplicación Móvil – Animal Pets (No disponible)",
    descripcion:
      "Aplicación móvil para el registro y seguimiento de pacientes veterinarios, con módulos de historial clínico y gestión de citas.",
    tecnologias: ["JavaScript", "Firebase", "Figma"],
    imagen: img3,
    enlace: "#",
  },
  {
    id: 4,
    titulo: "Landing Page – Montevero Consultora (No disponible)",
    descripcion:
      "Diseño y desarrollo de landing page corporativa para una consultora de ingeniería y topografía, destacando sus servicios y canales de contacto.",
    tecnologias: ["WordPress", "Elementor", "HTML", "CSS"],
    imagen: img4,
    enlace: "#",
  },
  ];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const activeProject = proyectos[activeIndex];

  return (
    <section id="proyectos" className="bg-[#1c1b22] text-white py-15 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 Encabezado general */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00fd9c] mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Algunos de los proyectos en los que he participado, aplicando diseño, desarrollo y optimización web. 
            Cada trabajo refleja mi enfoque en la funcionalidad, la experiencia del usuario y la mejora continua.
          </p>
        </div>

        {/* 🔹 Contenido principal */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Imagen con Swiper */}
          <div className="relative md:w-1/2 w-full">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              onSlideChange={handleSlideChange}
              className="rounded-xl overflow-hidden"
            >
              {proyectos.map((proyecto) => (
                <SwiperSlide key={proyecto.id}>
                  <motion.img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-[350px] md:h-[420px] object-contain rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="absolute bottom-4 right-4 flex gap-3 z-10"
                btnStyles="bg-[#16232B]/80 hover:bg-[#00fd9c] text-[#00fd9c] hover:text-[#0f172a] p-3 rounded-full transition"
                iconsStyles="text-lg"
              />
            </Swiper>
          </div>

          {/* Contenido textual */}
          <div className="md:w-1/2 w-full space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {String(activeIndex + 1).padStart(2, "0")}
                </h2>
                <h3 className="text-3xl font-semibold">
                  {activeProject.titulo}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {activeProject.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#00fd9c]/10 border border-[#00fd9c]/30 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#00fd9c]/30 flex items-center gap-3">
                  <a
                    href={activeProject.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00fd9c] hover:text-[#00ffae] transition"
                  >
                    <FaGlobeAmericas size={20} />
                    <span>Ver sitio web</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
