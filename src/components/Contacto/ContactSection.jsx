import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Listbox } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import { FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const services = [
    { id: 1, name: "Diseño Web" },
    { id: 2, name: "Optimización SEO" },
    { id: 3, name: "Marketing Digital" },
    { id: 4, name: "Soporte Técnico" },
  ];

  const gradient = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(250px circle at ${latestX}px ${latestY}px, rgba(0,253,156,0.8), transparent 80%)`
  );

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);

    emailjs
      .sendForm(
        "service_03eu1fv",
        "template_v7gctft",
        formRef.current,
        "1kuCkYg2JFE25ZICB"
      )
      .then(() => {
        setSent(true);
        setSending(false);
        e.target.reset();
        setSelectedService(null);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        setSending(false);
      });
  };

  return (
    <section className="bg-[#1c1b22] text-white py-16 flex flex-col items-center">
      {/* 🔹 Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-[#00fd9c] mb-10"
      >
        Contacto
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        {/* 🔹 Izquierda: Formulario */}
        <motion.div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative p-0.5 rounded-xl w-full md:w-3/5 transition-all duration-300 ${
            !isHovered ? "animate-borderGlow" : ""
          }`}
          style={{
            background: isHovered ? gradient : "",
            transition: "background 0.3s ease",
          }}
        >
          <div className="bg-[#232229] p-8 rounded-xl h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00fd9c] mb-3">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-gray-300 mb-6">
              Cuéntame un poco sobre tu proyecto y te contactaré lo antes posible.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full md:w-1/2 p-3 rounded-md bg-[#232229]/60 border border-[#00fd9c]/20 focus:border-[#00fd9c] outline-none transition-all duration-300"
                />
                <input
                  name="apellido"
                  type="text"
                  placeholder="Apellido"
                  required
                  className="w-full md:w-1/2 p-3 rounded-md bg-[#232229]/60 border border-[#00fd9c]/20 focus:border-[#00fd9c] outline-none transition-all duration-300"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="w-full md:w-1/2 p-3 rounded-md bg-[#232229]/60 border border-[#00fd9c]/20 focus:border-[#00fd9c] outline-none transition-all duration-300"
                />
                <input
                  name="numero"
                  type="tel"
                  placeholder="Número de teléfono"
                  required
                  className="w-full md:w-1/2 p-3 rounded-md bg-[#232229]/60 border border-[#00fd9c]/20 focus:border-[#00fd9c] outline-none transition-all duration-300"
                />
              </div>

              <Listbox value={selectedService} onChange={setSelectedService}>
                {({ open }) => (
                  <div className="relative w-full">
                    <Listbox.Button
                      name="servicio"
                      className="w-full flex justify-between items-center p-3 rounded-md 
                                 bg-[#232229]/60 border border-[#00fd9c]/20 text-gray-300 
                                 hover:border-[#00fd9c] transition-all duration-300"
                    >
                      {selectedService
                        ? selectedService.name
                        : "Selecciona el servicio que deseas"}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          open ? "rotate-180 text-[#00fd9c]" : "text-gray-400"
                        }`}
                      />
                    </Listbox.Button>

                    <AnimatePresence>
                      {open && (
                        <motion.ul
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 w-full mt-2 bg-[#1c1b22] border border-[#00fd9c]/10 
                                     rounded-md shadow-lg overflow-hidden"
                        >
                          {services.map((service) => (
                            <Listbox.Option key={service.id} value={service}>
                              {({ selected }) => (
                                <li
                                  className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                                    selected
                                      ? "bg-[#00fd9c]/10 text-[#00fd9c]"
                                      : "hover:bg-[#00fd9c]/5 text-gray-300"
                                  }`}
                                >
                                  {service.name}
                                </li>
                              )}
                            </Listbox.Option>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Listbox>

              <input
                type="hidden"
                name="servicio"
                value={selectedService ? selectedService.name : ""}
              />

              <textarea
                name="mensaje"
                placeholder="Cuéntame sobre tu proyecto..."
                rows="5"
                required
                className="w-full p-3 rounded-md bg-[#232229]/60 border border-[#00fd9c]/20 focus:border-[#00fd9c] outline-none resize-none transition-all duration-300"
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className={`w-full md:w-auto font-semibold px-8 py-3 rounded-md transition-transform duration-300 ${
                  sending
                    ? "bg-gray-500 cursor-not-allowed text-gray-300"
                    : "bg-[#00fd9c] text-[#0f172a] hover:bg-[#00e88d] hover:scale-105"
                }`}
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>

              {sent && (
                <p className="text-[#00fd9c] text-sm mt-2">
                  ¡Mensaje enviado con éxito!
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* 🔹 Derecha: Información de contacto */}
        <div className="md:w-2/5 w-full flex flex-col gap-6 justify-center bg-[#1c1b22] rounded-xl p-6 border border-[#00fd9c]/10">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#00fd9c] text-3xl" />
            <div>
              <h4 className="text-sm uppercase text-gray-400">Teléfono</h4>
              <p className="text-lg font-semibold">+51 999 888 777</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#00fd9c] text-3xl" />
            <div>
              <h4 className="text-sm uppercase text-gray-400">Correo</h4>
              <p className="text-lg font-semibold">contacto@miweb.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
