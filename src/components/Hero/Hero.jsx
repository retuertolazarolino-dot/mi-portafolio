"use client"; // 🔹 Solo si estás usando Next.js, si estás en Vite o React normal puedes quitar esta línea

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import Photo from "../../assets/photo.png";
import Photo2 from "../../assets/perfil.png";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section
  id="inicio"
  className="relative bg-[#1c1b22] text-white pt-30 pb-15 md:py-40 overflow-hidden scroll-mt-[100px]">
      <div className="max-w-6xl mx-auto px-6 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Fondo con partículas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00fd9c]/30 rounded-full"
              style={{ left: p.x, top: p.y, scale: p.scale }}
              animate={{
                y: [p.y, Math.random() * 600],
                x: [p.x, Math.random() * 800],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Luz central difusa */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00fd9c]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Columna izquierda */}
        <div className="flex-1 text-center md:text-left space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start gap-2 text-[#00fd9c] uppercase tracking-widest text-sm md:text-base font-semibold"
          >
            <motion.span
              className="w-2 h-2 bg-[#00fd9c] rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Software Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hola, soy{" "}
            <span className="relative inline-block text-[#00fd9c]">
              Lino Retuerto
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#00fd9c]/40 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed"
          >
            Desarrollador de software enfocado en crear soluciones digitales eficientes y atractivas.
            Me apasiona transformar ideas en productos reales usando tecnologías modernas.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
          >
            <motion.a
              href="/CV/cv-lino-retuerto.pdf"
              download
              className="relative flex items-center gap-2 px-6 py-3 bg-[#00fd9c] text-[#0f172a] font-semibold rounded-md overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload className="relative z-10" />
              <span className="relative z-10">Descargar CV</span>
            </motion.a>

            <motion.a
              href="#contacto"
              className="relative flex items-center gap-2 px-6 py-3 border-2 border-[#00fd9c] text-[#00fd9c] font-semibold rounded-md overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#00fd9c]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              <FaEnvelope className="relative z-10 group-hover:text-[#06a367] transition-colors duration-300" />
              <span className="relative z-10 group-hover:text-[#06a367] transition-colors duration-300">
                Contactar
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Columna derecha - Imagen y anillos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-1 flex justify-center md:justify-end z-10 md:pr-[50px]"
        >
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 overflow-visible">
            {/* 🔹 Anillos adaptables */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-[#00fd9c]/25"
                style={{
                  width: isMobile
                    ? `${70 + ring * 15}%`
                    : `${80 + ring * 25}%`,
                  height: isMobile
                    ? `${70 + ring * 15}%`
                    : `${80 + ring * 25}%`,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3 + ring * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Pulso suave central */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,253,156,0.15), transparent 70%)",
              }}
            />

            {/* Imagen principal */}
            <motion.div
              className="relative rounded-full overflow-hidden w-full h-full flex items-center justify-center bg-linear-to-br from-[#232229] via-[#1c1b22] to-[#232229] border-2 border-[#00fd9c]/40 shadow-2xl shadow-[#00fd9c]/30"
              whileHover={{ scale: 1.05, borderColor: "rgba(0,253,156,0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-tr from-[#00fd9c]/10 to-transparent rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <img
                src={Photo2}
                alt="Lino Retuerto"
                className="w-full h-full object-contain rounded-full relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
