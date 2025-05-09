import React from "react";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import react from "../../assets/react.png";
import mongo from "../../assets/mongo.png";
// import mysql from "../../assets/mysql.png";
import mysql from "../../assets/m.png";
import docker from "../../assets/docker.png";
import git from "../../assets/git.png";
import cpp from "../../assets/c++.png";
import nodejs from "../../assets/jsIconGreen.svg";
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col text-white body-font"
    ><br /><br />
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 
            border-b border-orange-400"
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white "
          >
            Skills
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="600"
            className="leading-relaxed text-base sm:text-2xl"
          >
            I’m proficient in C++, Python, Java, and JavaScript, with hands-on experience
             in building full-stack applications using ReactJS, NodeJS, Express, and MongoDB.
              I’m well-versed in MySQL, Git, Docker, and RESTful API development.
               My strong foundation in DSA, OOP, system design, and operating systems
                supports my problem-solving and software development skills.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex flex-col md:w-1/2 md:pl-12"
        >
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={html}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-6">HTML</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={javascript}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-3">Javascript</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={react}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-6">ReactJs</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={nodejs}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-4">NodeJs</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={mongo}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-4">MongoDB</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={mysql}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-4">MySQL</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={git}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-9">Git</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={docker}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-4">Docker</p>
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={cpp}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="leading-relaxed text-base sm:text-xl pl-7">C++</p>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}
