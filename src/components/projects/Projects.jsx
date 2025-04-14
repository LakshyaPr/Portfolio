import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import urls from "../../assets/urls.png";
import echoes from "../../assets/echoes.png";
import wander from "../../assets/wander1.png";
import quizb from "../../assets/quizb1.png";
export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: echoes,
      title: "Echoes",
      description: "Full Stack SNS application",
      github: "https://github.com/LakshyaPr/Echoes",
      live: "https://echoes-32t1.onrender.com/",
    },
    {
      id: 2,
      image: wander,
      title: "Rently",
      description: "Full Stack Property listing application",
      github: "https://github.com/LakshyaPr/RENTLY",
      live: "https://wanderlust-pret.onrender.com/",
    },
    {
      id: 3,
      image: urls,
      title: "Linkly",
      description: "Easy and efficient URL shortener with Admin Dashboard",
      github: "https://github.com/LakshyaPr/Linkly-Url-Shortner",
      live: "",
    },
    {
      id:4,
      image: quizb,
      title: "Quizzbot",
      description:"AI based quiz generator",
      github : "https://github.com/LakshyaPr/QuizzBot", 
      live :"",

    }
    
  ];
  const settings = {
    dots: true,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-x-hidden flex flex-col text-white body-font"
    ><br /><br /><br /><br /><br />
      <div className="container px-10 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Latest Projects</h2>
        <Slider {...settings} className="flex flex-wrap justify-center ">
          {listProjects.map((project) => {
            return (
              <div key={project.id} className="p-4">
  <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
        {project.title}
      </h2>
      <p className="leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex gap-4">
        {(project.id <3 ) && <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:cursor-pointer"
        >
          Live Link
        </a>}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow hover:cursor-pointer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</div>

            );
          })}
        </Slider>
      </div>
    </section>
  );
}
