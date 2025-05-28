import React from "react";
import { FaTrophy, FaUserGraduate, FaUsers } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const cardData = [
  {
    icon: <FaUserGraduate className="text-white" />,
    title: "Education",
    description:
      "Bachelor of Science in Computer Science from the American University of Sharjah,<br />graduated in June 2025 with a GPA of 3.41.<br />Courses: Neural Networks, AI, Data Mining, etc.",
  },
  {
    icon: <FaTrophy className="text-white" />,
    title: "Achievements",
    description:
      "2nd place in SoftwareAG GITEX Future Disruptors (2023)<br />1st in AUS Programming Contest (2022)<br />2nd in ADU STEM Programming Contest (2022)",
  },
  {
    icon: <FaUsers className="text-white" />,
    title: "Extracurricular Activities",
    description:
      "President - Open Source Club (2023-2024)<br />Activities Coordinator - Technopreneurship Club<br />Organized 15+ events and led a 5-part Flutter workshop series.",
  },
];

export const About = () => {
  return (
    <section
      id="about-me"
      className="learnSection gradient-bottom-right text-start justify-start relative items-start flex flex-col w-full min-h-screen pt-20 pb-10 md:pt-40"
    >
      <div className="absolute h-full w-full bg-stars bg-cover -z-0"></div>
      <p className="font-extrabold gradient-text uppercase text-3xl tracking-wide pb-4 pt-6 text-center w-full">
        About Me
      </p>
      <div className="w-full h-full flex flex-col items-center px-4">
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <img
              src="taufiqsyed.svg"
              alt="Taufiq Syed"
              className="w-2/3 md:w-1/3 mb-6 md:mb-0 md:mr-6 p-10 pb-20"
            />
            <div className="shadow-md rounded-lg p-6 max-w-2xl border border-gray-700 glass-gray mb-6 z-[10]">
              <p className="text-lg mb-4 text-center mt-4">
                I’m a recent Computer Science graduate from the American
                University of Sharjah, with a strong foundation in AI, data
                science, and software development.
              </p>
              <p className="text-lg mb-8 text-center">
                Alongside my studies, I’ve been actively involved in student
                leadership and tech communities, creating spaces that inspire
                innovation and collaboration.
              </p>
              <div className="flex justify-center">
                <a
                  href="/Taufiq Syed CV - 2025.pdf"
                  download
                  className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                >
                  <HiDownload className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="glass-gray shadow-lg rounded-lg p-6 max-w-sm z-[10]"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
                {card.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {card.title}
              </h2>
              <p
                className="text-gray-400 text-sm"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
