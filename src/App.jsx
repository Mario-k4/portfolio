import React, { useRef } from 'react';
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { useEffect } from 'react';


const App = () => {

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero portfolioRef={portfolioRef} contactRef={contactRef} />
    </section>
    {/* <section id="Services"><Parallax type="services" /></section> */}
    <section><Services /></section>
    {/* <section id="Portfolio" ref={portfolioRef}><Parallax type="portfolio" /></section> */}
    <Portfolio />
    <section id="Contact" ref={contactRef}>
      <Contact />
    </section>
  </div>
}

export default App
