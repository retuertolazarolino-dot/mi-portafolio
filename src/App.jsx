import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import React from "react"
import AboutTabs from "./components/AboutTabs/AboutTabs";
import Carousel from "./components/Carousel/carousel";
import ContactSection from "./components/Contacto/ContactSection";
import Services from "./components/Servicios/Services";

function App() {
 

  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <AboutTabs />
    <Carousel />
    <ContactSection />
    
    </div>
  )
}

export default App
