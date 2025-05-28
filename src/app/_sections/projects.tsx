// components/Projects.tsx

import React from "react";
import { FaChevronDown, FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  institution: string;
  description: string[];
  metrics?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Generation of High-Level Music Structures",
    institution: "American University of Sharjah - COE 476",
    description: [
      "Processed music dataset into music-prompt pairs with extracted structural information.",
      "Finetuned the MusicGen transformer using a LoRA adaptor.",
    ],
    metrics: "CLAP LAION FAD: 0.9959; Overall Quality: 70.48/100",
  },
  {
    title: "Waste Classification with Feature Extraction",
    institution: "American University of Sharjah - CMP 466",
    description: [
      "Processed a 12-class garbage classification dataset using CNN feature extraction with TensorFlow and scikit-learn.",
    ],
    metrics: "MobileNetV2 Accuracy: 0.93; Weighted F1: 0.93",
  },
  {
    title: "Bank Account Fraud Detection",
    institution: "American University of Sharjah - STA 401",
    description: [
      "Used balanced data mining approaches including LDA, SMOTE, and Balanced Random Forest.",
      "Achieved competitive results on a highly imbalanced dataset.",
    ],
    metrics: "Recall: 0.79; AUC: 0.88",
  },
  {
    title: "Attendance & Event App",
    institution: "AUS College of Engineering",
    description: [
      "Utilized Flutter for cross-platform mobile application development.",
      "Integrated Node.js backend, configured notifications and offline caching.",
    ],
  },
  {
    title: "Full-Stack Reddit Clone",
    institution: "Personal Project",
    description: [
      "Used React and Next.js to build a front-end clone of Reddit.",
      "Created a Node.js + Express backend with PostgreSQL and JWT authentication.",
    ],
    githubUrl: "https://github.com/TaufiqSyed/reddit-clone/",
  },
  {
    title: "Restaurant Management Software",
    institution: "American University of Sharjah - CMP320",
    description: [
      "Built a restaurant management system using React, Next.js, and Django.",
      "Implemented user authentication and management features.",
    ],
    githubUrl: "https://github.com/TaufiqSyed/restaurant-app",
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="learnSection gradient-bottom-left text-start justify-start relative items-start flex flex-col w-full min-h-full pt-20 px-4 md:pt-40 min-h-screen"
    >
      <p className="font-extrabold gradient-text uppercase text-3xl tracking-wide pb-4 pt-6 text-center w-full">
        Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-gray-box shadow-md rounded-2xl p-6">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white ml-2"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-400 mb-3">{project.institution}</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 mb-2">
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {project.metrics && (
              <p className="text-xs text-gray-300 italic">{project.metrics}</p>
            )}
          </div>
        ))}
      </div>
      <div className="relative w-full mt-4 mb-16 flex flex-col items-center">
        <FaChevronDown size={16} />
      </div>
    </section>
  );
};
