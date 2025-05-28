import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { ScrollButton } from "../_components/scroll-button";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  location: string;
  details: string[];
  linkedinUrl: string; // added LinkedIn URL field
  logoUrl: string; // added logo image URL field
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "Belsons Technologies",
    date: "Jul 2024 - Aug 2024",
    location: "Dubai, UAE",
    details: [
      "Built automated market reports using aggregate statistics and GPT-4 to generate narrative summaries.",
      "Implemented a property image classifier to categorize room types for listings.",
      "Developed Django admin dashboards to manage data inputs and review AI-generated insights.",
      "Computed area-based aggregates (e.g., average rent, price per sqft) to support AI-generated outputs.",
    ],
    linkedinUrl: "https://www.linkedin.com/company/belsonstech",
    logoUrl: "belsonslogo.jpg",
  },
  {
    role: "Software Engineering Intern",
    company: "ILMUX Ltd.",
    date: "Jun 2022 - Sep 2022",
    location: "Mumbai, India",
    details: [
      "Wrote unit tests for frontend and backend components using Jest, improving baseline reliability.",
      "Built a real-time internal chat application using Socket.IO and a Node.js backend with React/Next.js.",
      "Integrated AWS S3 to support image and file uploads in the chat with signed URL handling.",
      "Implemented basic read receipts and message delivery statuses using WebSocket events.",
    ],
    linkedinUrl: "https://www.linkedin.com/company/ilm-ux-pvt.-ltd-",
    logoUrl: "ilmuxlogo.jpg",
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="experience experienceSection gradient-top-right text-start justify-start relative items-start flex flex-col w-full min-h-full pt-20 px-4 md:pt-40 min-h-screen"
    >
      <p className="font-extrabold gradient-text uppercase text-3xl tracking-wide pb-4 pt-6 text-center w-full">
        Professional Experience
      </p>

      <div className="w-full flex flex-col items-center gap-8 mt-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full max-w-3xl rounded-xl glass-gray shadow-md border border-gray-700 p-8 transition-all hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-4">
              <a
                href={exp.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  className="h-10 w-10 object-contain rounded"
                />
              </a>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400 mt-1 sm:mt-0 sm:ml-4">
                  {exp.date}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              {exp.company} &middot; {exp.location}
            </div>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ScrollButton scrollViewName="projects" />

      <div className="absolute h-full w-full bg-stars bg-cover -z-0"></div>
    </section>
  );
};
