import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leetcode from "../../assets/leetcodeo.png";
import codeforces from "../../assets/codeforce.png";
import github from "../../assets/github.png";

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: leetcode,
      title: "Leetcode",
      link: "https://leetcode.com/prablaksh007/" ,
      
      
    },
    {
        id: 2,
        image: codeforces,
        title: "Codeforces",
        link: "https://codeforces.com/profile/prabhakar.lakshya" ,
        
    },
    {
        id: 3,
        image: github,
        title: "GitHub",
        link: "https://github.com/LakshyaPr" ,
      
    },
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
      id="profiles"
      className="relative overflow-x-hidden flex flex-col text-white body-font"
    >
      <br /><br /><br /><br />
      <div className="container px-10 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Profiles</h2>
        <Slider {...settings} className="flex flex-wrap justify-center">
          {listProjects.map((project) => (
            <div key={project.id} className="p-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xl title-font font-medium text-white-400 mb-1 text-center">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed mb-3">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
