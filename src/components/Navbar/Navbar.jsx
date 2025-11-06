import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import "bootstrap-icons/font/bootstrap-icons.css"

const navbarlinks = [
  
  { id: 2, title: "Servicios", link: "#servicios" },
  { id: 3, title: "Mi Trayectoria", link: "#trayectoria" },
  { id: 4, title: "Proyectos", link: "#proyectos" },
  { id: 5, title: "Contacto", link: "#contacto" },
];


const navbarRedes = [
  { id: 1, title: "Instagram", link: "https://consigueventas.com", icon: "bi bi-instagram" },
  { id: 2, title: "Facebook", link: "https://consigueventas.com", icon: "bi bi-facebook" },
  { id: 3, title: "WhatsApp", link: "https://consigueventas.com", icon: "bi bi-whatsapp" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isOpen
      ? "bg-[#1c1b22]" // 🔹 Fondo sólido cuando el menú móvil está abierto
      : isScrolled
      ? "bg-[#1c1b22]/90 backdrop-blur-md shadow-md" // 🔹 Al hacer scroll
      : "bg-transparent" // 🔹 Estado normal (al inicio)
  }`}
>

        <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-5">

          {/* Logo */}
          <div>
            {/* Logo con enlace al inicio */}
            <a href="#inicio" className="flex items-center">
              <img
                src={logo}
                alt="Logo del sitio"
                className="w-16 sm:w-20 md:w-[100px] transition-all duration-300 cursor-pointer"
              />
            </a>
          </div>

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden"
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6 text-[#00fd9c]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14M5 12h14M5 17h14" />
              )}
            </svg>
          </button>

          {/* Enlaces desktop */}
          <div className="hidden md:block">
            <ul className="flex sm:space-x-8 space-x-4">
              {navbarlinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="text-amber-50 sm:text-lg text-sm hover:text-[#00bd74] transition-transform hover:scale-110 transform inline-block duration-200"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes desktop */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navbarRedes.map((link) => (
                <li key={link.id}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-200 hover:scale-125"
                    href={link.link}
                  >
                    <i
                      className={`${link.icon} sm:text-2xl text-lg text-white hover:text-[#00bd74] transition-all duration-200`}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden absolute top-full right-0 h-screen w-3/4 bg-[#1c1b22] bg-opacity-95 shadow-lg transition-transform duration-500 ease-in-out transform z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-8 pb-8">
            <ul className="flex flex-col space-y-6 text-center">
              {navbarlinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="text-white text-lg font-medium hover:text-[#00fd9c] transition-all duration-300"
                    href={link.link}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex justify-center space-x-6 border-t border-emerald-900 pt-6 mt-12">
              {navbarRedes.map((link) => (
                <li key={link.id}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform transform hover:scale-125"
                    href={link.link}
                    onClick={() => setIsOpen(false)}
                  >
                    <i
                      className={`${link.icon} text-2xl text-white hover:text-[#00fd9c] transition-all duration-200`}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Fondo oscuro cuando el menú móvil está abierto */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[#0a0a0a]/60 backdrop-blur-[2px] z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  )
}

export default Navbar
