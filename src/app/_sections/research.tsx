import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdLink } from "react-icons/md";

interface ResearchItem {
  title: string;
  authors: string;
  institution: string;
  conference: string;
  conferenceDate: string;
  publicationDate: string;
  publicationLink: string;
  doi: string;
  abstract: string;
  imageSrc: string;
}

const researchProjects: ResearchItem[] = [
  {
    title:
      "Once Upon a GPT-4: Enhancing Diversity in Automated Reading Comprehension Story Generation with Classic Tales",
    authors:
      "Aadhith Shankarnarayanan, Taufiq Syed, Salsabeel Shapsough, Imran Zualkarnan",
    institution: "American University of Sharjah",
    conference:
      "IEEE International Conference on Advanced Learning Technologies (ICALT)",
    conferenceDate: "July 1–4, 2024",
    publicationDate: "August 29, 2024",
    publicationLink: "https://ieeexplore.ieee.org/document/10645935",
    doi: "10.1109/ICALT61570.2024.00063",
    abstract: `This paper addresses the challenge of generating reading comprehension content for early grade assessments—an expensive and time-consuming task. It proposes leveraging GPT-4 mediated by a classic tales database to generate diverse stories that align with EGRA criteria. This approach ensures fairness through narrative variation and reduced cost, while maintaining educational standards. We present a systematic framework for selecting, adapting, and evaluating stories using both text metrics and human review. Findings underscore GPT-4’s potential for scalable, diverse content creation in literacy assessments.`,
    imageSrc: "/images/paper1.jpg", // Replace with actual paths
  },
  {
    title:
      "Can GPT-4 Aid in Detecting Ambiguities, Inconsistencies, and Incompleteness in Requirements Analysis? A Comprehensive Case Study",
    authors:
      "Taslim Mahbub, Dana Dghaym, Aadhith Shankarnarayanan, Taufiq Syed, Salsabeel Shapsough, Imran Zualkarnan",
    institution: "American University of Sharjah",
    conference: "IEEE Access (Volume 12)",
    conferenceDate: "Published: September 19, 2024",
    publicationDate: "September 19, 2024",
    publicationLink: "https://ieeexplore.ieee.org/document/10684184",
    doi: "10.1109/ACCESS.2024.3464242",
    abstract: `This paper explores GPT-4's performance in identifying defects in a real-world software requirements specification for a mechanical lung ventilator. Using a zero-shot setting, GPT-4 was evaluated for its ability to detect ambiguity, inconsistency, and incompleteness. The study found GPT-4 was strongest in identifying incompleteness (precision 0.61), though it struggled with inconsistency and ambiguity. Results highlight both the potential and current limitations of LLMs in industrial-scale requirements analysis. The paper also outlines a multi-version evaluation pipeline and offers recommendations for prompt engineering and few-shot strategies to improve accuracy.`,
    imageSrc: "/images/paper2.jpg",
  },
];

export const Research: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="research"
      className="py-20 px-6 md:px-20 text-gray-900 dark:text-white gradient-top-left min-h-screen relative"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Research</h2>
      <div className="space-y-12">
        {researchProjects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 rounded-xl border border-gray-300 dark:border-gray-700 py-6 px-6 shadow-md glass-gray-box"
          >
            {/* <div className="w-full md:w-1/3 h-64 overflow-hidden rounded-lg">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div> */}
            <div className="flex-1 flex flex-col justify-between max-w-[850px]">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{item.authors}</span>
                </div>
                <div className="text-sm flex flex-wrap gap-3 text-gray-600 dark:text-gray-400 mb-3">
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {item.institution}
                  </span>
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {item.conference}
                  </span>
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {item.conferenceDate}
                  </span>
                </div>

                <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4">
                  {expandedIndex === index
                    ? item.abstract
                    : item.abstract.slice(0, 300) + "... "}
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm ml-1"
                  >
                    {expandedIndex === index ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <a
                  href={item.publicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View Publication <MdLink size={16} className="ml-1" />
                </a>
                <span className="text-xs text-gray-400">DOI: {item.doi}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full mt-4 mb-16 flex flex-col items-center">
        <FaChevronDown size={16} />
      </div>
    </section>
  );
};
