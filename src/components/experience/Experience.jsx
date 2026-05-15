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
      company: "Nokia Solutions and Networks",
      role: "Software Developer Intern",
      image: nokia,
      description:
        
        "• Proposed and implemented a guided image capture interface to standardize input quality, reducing false positives and negatives caused by inconsistent field data.\n\n• Built a custom dataset for tower installation detection, including data collection, labeling, and augmentation under limited data constraints.\n\n• Fine-tuned a MobileNetV2 model using transfer learning, achieving 88% validation accuracy while addressing overfitting through augmentation and regularization techniques.\n\n• Building backend APIs to store images and metadata generated from client-side model inference."
    },
    {
      id: 2,
      year: "2025",
      company: "4CPlus",
      role: "Software Developer Intern",
      image: plus4c,
      description:
        
  "• Fine-tuned various Large Language Models (LLMs) using the LoRA method.\n\n• Built AI applications using MongoDB and the Hugging Face ecosystem.\n\n• Used Git for version control and followed PR-based workflows, code reviews, and clean commit practices.",
    },
    {
      id: 3,
      year: "2024",
      company: "AI Shala",
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
      description:" CGPA : 8.3/10",
    },    
  {
      id: 3,
      year: "2021",
      company: "St. Cecilia's Public School",
      role: "12th (PCMCs)",
      image: cecilia,
      description: "Percentage : 96.6 %"
  },
   

  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden text-white body-font py-24 px-6"
    >
      <div className="container mx-auto max-w-6xl">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-20 text-center">
          Experience & Education
        </h1>

        {/* TIMELINE CONTAINER */}
        <div className="relative">

          {/* MAIN TIMELINE */}
          <div className="absolute left-[180px] top-12 w-[3px] h-full bg-gradient-to-b from-orange-500 via-orange-400 to-transparent opacity-70"></div>

          <div className="flex flex-col gap-12">

            {experiences.map((exp) => (

              <div
                key={exp.id}
                className="relative flex items-start gap-8"
              >

                {/* LEFT SIDE */}
                <div className="relative flex items-start min-w-[220px]">

                  {/* YEAR */}
                  <h2 className="text-5xl font-bold text-orange-400 leading-none w-[160px] text-right pr-8 mt-8">
                    {exp.year}
                  </h2>

                  {/* NODE */}
                  <div className="absolute right-[31px] top-12 w-5 h-5 rounded-full bg-orange-400 border-4 border-black shadow-[0_0_15px_rgba(255,165,0,0.9)] z-10"></div>

                </div>

                {/* CARD */}
                <div
                  className="
                  group flex gap-6 w-full max-w-4xl
                  bg-[#0a0a0a]/90
                  border border-orange-500/10
                  rounded-2xl p-6
                  hover:-translate-y-1
                  hover:border-orange-400/30
                  hover:shadow-[0_0_25px_rgba(255,165,0,0.12)]
                  transition-all duration-300
                  "
                >

                  {/* LOGO */}
                  <div className="w-24 h-24 min-w-[96px] bg-white rounded-xl p-3 flex items-center justify-center overflow-hidden">

                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />

                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col justify-center">

                    {/* ROLE */}
                    <h2 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h2>

                    {/* COMPANY */}
                    <p className="text-1xl uppercase tracking-[0.3em] text-orange-400 mt-2">
                      {exp.company}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-gray-400 mt-5 leading-relaxed text-lg max-w-2xl whitespace-pre-line">
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