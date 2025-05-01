import React from "react";
import Navbar from "../navbar/Navbar";
import hi from "../../assets/hi.png";
import CV from "../../components/hero/Resume.pdf";
import img from "../../assets/meo.png";
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col ">
      <div
        className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600
       via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)] "
      ></div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
        id="home"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
          mb-16 md:mb-0 items-center text-center relative"
          >
           <img
  data-aos="fade-up"
  data-aos-delay="400"
  src={hi}
  className="absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 hidden md:block"
/>

            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
              Hi! I am Lakshya Prabhakar
            </h1>
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-orange-800 via-yellow-700 to-red-600 
              sm:bg-gradient-to-r sm:from-orange-600 sm:via-yellow-500 sm:to-red-400">
  FullStack Developer
</h1>

            <br />
            <p className="mb-8 leading-relaxed pr-20 text-2xl">
            I’m a full-stack developer from New Delhi, India, currently in the pre-final year of my B.Tech in Information Technology at MSIT, Delhi. I also enjoy solving Data Structures and Algorithms problems.
            </p>
            <div className="flex justify-center">
            <a href={CV} target="_blank" rel="noopener noreferrer">
                <button
                  className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none
                hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg hover:cursor-pointer "
                >
                  View Resume
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a href="https://www.linkedin.com/in/lakshya-prabhakar/" target="_blank">
                <button
                  className=" inline-flex text-white bg-[#0077B5] border-0 py-2 px-6 focus:outline-none
                hover:bg-[#0077B5] hover:shadow-[0_0_40px_rgba(0,119,181,0.7)]
 rounded-full text-lg hover:cursor-pointer "
                >
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-10">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full w-90 h-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
