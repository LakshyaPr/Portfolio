import React, { useState, useEffect } from "react";
import CV from "../../components/hero/Resume.pdf";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listNavbar = [
    { name: "Home", link: "#home" },
    {name :"Profiles", link: "#profiles"},
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change 50 to the scroll position where you want the color to change
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-aos="fade-up"
      className={`fixed top-0 w-full z-50 text-gray-600 body-font transition-all duration-300 ${
        isScrolled ? "bg-[#0d182e]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold text-white">
            Lakshya Prabhakar
          </span>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <nav className="md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mr-5 hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900">
        <a href={CV} download>Download resume</a>
        </button>
        &nbsp;
        <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900">
          <a href="#contact">Contact me</a>
        </button>

      </div>
    </header>
  );
}
