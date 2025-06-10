import React, { useState, useEffect } from "react";
import CV from "../../components/hero/Lakshya's Resume EY.pdf";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const listNavbar = [
    { name: "Home", link: "#home" },
    { name: "Profiles", link: "#profiles" },
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
      className={`fixed top-0 w-full z-50 text-gray-600 body-font transition-all duration-300  ${
        isScrolled
          ? "bg-[#000000] w-screen outline outline-2 outline-white"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold text-white">
            Lakshya Prabhakar
          </span>
        </a>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle menu
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <nav
          className={`md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center ${
            isMobileMenuOpen ? "block" : "hidden" // Show mobile menu if open
          } md:block`} // Always show on desktop
        >
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

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900">
            <a href={CV} download>
              Download resume
            </a>
          </button>
          <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900">
            <a href="#contact">Contact me</a>
          </button>
        </div>
      </div>
    </header>
  );
}
