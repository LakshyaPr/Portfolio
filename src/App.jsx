import React, { useEffect } from "react";

import Hero from "./components/hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Profiles from "./components/Profiles/Profiles.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (

    <main
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >

      {/* GLOBAL GRID */}
      <div
        className="
          fixed inset-0
          opacity-[0.05]
          pointer-events-none
          z-0

          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* TOP LEFT ORANGE GLOW */}
      <div
        className="
          fixed
          top-[-150px]
          left-[-150px]

          w-[500px]
          h-[500px]

          bg-orange-500/20

          rounded-full

          blur-[160px]

          pointer-events-none

          z-0
        "
      />

      {/* BOTTOM RIGHT YELLOW GLOW */}
      <div
        className="
          fixed
          bottom-[-200px]
          right-[-200px]

          w-[500px]
          h-[500px]

          bg-yellow-500/10

          rounded-full

          blur-[160px]

          pointer-events-none

          z-0
        "
      />

      {/* EXTRA CENTER GLOW */}
      <div
        className="
          fixed
          top-[35%]
          left-[40%]

          w-[300px]
          h-[300px]

          bg-orange-500/10

          rounded-full

          blur-[140px]

          pointer-events-none

          z-0
        "
      />

      {/* WEBSITE CONTENT */}
      <div className="relative z-10">

        <Hero />

        <Profiles />

        <Skills />

        <Experience />

        <Projects />

        <Contact />

        <Footer />

      </div>

    </main>

  );
}