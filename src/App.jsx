import React, { useEffect } from "react";
import Hero from "./components/hero/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Profiles from "./components/Profiles/Profiles.jsx";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-[#0d182e]">
      <Hero />
      <Profiles/>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
