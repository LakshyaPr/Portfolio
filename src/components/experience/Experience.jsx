import React from "react";

import aiShala from "../../assets/aishala.png";
import plus4c from "../../assets/4cplus.png";
import nokia from "../../assets/nokia.png";
import cecilia from "../../assets/cecilia.png";
import msit from "../../assets/msit.png";

export default function Experience() {

  const experiences = [
    {
      id: 1,
      year: "2026",
      company: "Nokia Solutions and Networks (Jan'26 - May'26)",
      role: "Software Developer Intern",
      image: nokia,
      description:
        "• Proposed and implemented a guided image capture interface to standardize input quality, reducing false positives and negatives caused by inconsistent field data.\n\n• Built a custom dataset for tower installation detection, including data collection, labeling, and augmentation under limited data constraints.\n\n• Fine-tuned a MobileNetV2 model using transfer learning, achieving 88% validation accuracy while addressing overfitting through augmentation and regularization techniques.\n\n• Building backend APIs to store images and metadata generated from client-side model inference."
    },

    {
      id: 2,
      year: "2025",
      company: "4CPlus (Jul'26 - Sep'25)",
      role: "Software Developer Intern",
      image: plus4c,
      description:
        "• Fine-tuned various Large Language Models (LLMs) using the LoRA method.\n\n• Built AI applications using MongoDB and the Hugging Face ecosystem.\n\n• Used Git for version control and followed PR-based workflows, code reviews, and clean commit practices."
    },

    {
      id: 3,
      year: "2024",
      company: "AI Shala (Jul'24 - Sep'24)",
      role: "ML & GenAI Intern",
      image: aiShala,
      description:
        "• Gained hands-on experience with LLMs and Transformers using Python and Hugging Face.\n\n• Fine-tuned large language models using techniques like LoRA, improving task-specific performance by 25%.\n\n• Ranked 2nd among 70 trainees based on assignments and project evaluation."
    },

    {
      id: 4,
      year: "2022",
      company: "Maharaja Surajmal Institute of Technology",
      role: "B.Tech in Information Technology (2022-26)",
      image: msit,
      description: "CGPA : 8.3/10"
    },

    {
      id: 5,
      year: "2021",
      company: "St. Cecilia's Public School",
      role: "12th (PCMCs)",
      image: cecilia,
      description: "Percentage : 96.6%"
    }
  ];

  return (

    <section
      id="experience"
      className="
  relative
  text-white
  py-24 md:py-32
  px-4 md:px-6
"
    >

      

      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* TITLE */}
        <div className="text-center mb-20 md:mb-28">

          <p className="uppercase tracking-[0.4em] text-orange-400 text-xs md:text-sm mb-4">
            Career Journey
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">

            Experience
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              {" "} & Education
            </span>

          </h1>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* DESKTOP LINE */}
          <div
            className="
              hidden md:block
              absolute left-[200px] top-0
              h-full w-[2px]
              bg-gradient-to-b
              from-orange-500 via-orange-300 to-transparent
              opacity-60
            "
          />

          {/* MOBILE LINE */}
          <div
            className="
              md:hidden
              absolute left-4 top-0
              h-full w-[2px]
              bg-gradient-to-b
              from-orange-500 via-orange-300 to-transparent
              opacity-60
            "
          />

          <div className="flex flex-col gap-10 md:gap-16">

            {experiences.map((exp) => (

              <div
                key={exp.id}
                className="
                  relative
                  flex flex-col md:flex-row
                  gap-5 md:gap-10
                  group
                "
              >

                {/* LEFT SIDE */}
                <div
                  className="
                    relative
                    flex items-center md:items-start
                    min-w-fit md:min-w-[220px]
                    pl-12 md:pl-0
                  "
                >

                  {/* YEAR */}
                  <h2
                    className="
                      text-4xl md:text-6xl
                      font-black
                      leading-none

                      text-orange-400
                      md:text-white/10

                      md:group-hover:text-orange-400

                      transition-all duration-500
                    "
                  >
                    {exp.year}
                  </h2>

                  {/* NODE */}
                  <div
                    className="
                      absolute

                      left-[7px]
                      md:left-[200px]

                      top-3 md:top-10

                      w-5 h-5
                      md:w-7 md:h-7

                      rounded-full
                      bg-black

                      border-4 border-orange-400

                      z-20

                      md:-translate-x-1/2

                      md:group-hover:scale-125

                      transition-all duration-300
                    "
                  >

                    <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-30"></div>

                  </div>

                </div>

                {/* CARD */}
                <div
                  className="
                    relative overflow-hidden

                    flex flex-col md:flex-row
                    gap-5 md:gap-7

                    w-full

                    rounded-2xl md:rounded-3xl

                    border border-white/10

                    bg-white/[0.03]

                    backdrop-blur-xl

                    p-5 md:p-8

                    transition-all duration-500

                    md:hover:border-orange-400/30
                    md:hover:-translate-y-2
                    md:hover:shadow-[0_0_60px_rgba(255,140,0,0.15)]
                  "
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent" />

                  {/* LOGO */}
                  <div
                    className="
                      relative z-10

                      w-20 h-20
                      md:w-28 md:h-28

                      min-w-[80px]
                      md:min-w-[112px]

                      rounded-xl md:rounded-2xl

                      bg-white/5
                      border border-white/10

                      flex items-center justify-center

                      p-3 md:p-4
                    "
                  >

                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="
                        w-full h-full
                        object-contain

                        transition duration-500

                        md:group-hover:scale-110
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col justify-center">

                    {/* ROLE */}
                    <h2
                      className="
                        text-xl md:text-3xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {exp.role}
                    </h2>

                    {/* COMPANY */}
                    <p
                      className="
                        uppercase

                        tracking-[0.3em]
                        md:tracking-[0.45em]

                        text-orange-300

                        text-xs md:text-sm

                        mt-2 md:mt-3
                      "
                    >
                      {exp.company}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-gray-300/90

                        mt-4 md:mt-6

                        leading-relaxed md:leading-loose

                        text-sm md:text-[17px]

                        whitespace-pre-line
                      "
                    >
                      {exp.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}