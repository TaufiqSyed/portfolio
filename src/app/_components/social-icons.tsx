import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiMailFill, RiMailOpenFill } from "react-icons/ri";

const socialIconSize = 32;
const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-row space-x-6 mt-4">
      {/* SVG Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="mail-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#f09433" offset="0%" />
            <stop stopColor="#bc1888" offset="100%" />
          </linearGradient>
          <linearGradient
            id="github-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#4c2cdb" offset="0%" />
            <stop stopColor="#a259ff" offset="100%" />
          </linearGradient>
          <linearGradient
            id="linkedin-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#0fa6d4" offset="0%" />
            <stop stopColor="#005582" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icons */}
      <a
        href="mailto:taufiq.m.a.syed@gmail.com"
        className="z-1 group cursor-pointer"
      >
        <IoMail
          size={socialIconSize}
          className="fill-white transition-all duration-300 ease-in-out group-hover:fill-[url(#mail-gradient)] group-hover:scale-110"
          style={{ transformOrigin: "center" }}
        />
      </a>

      <a
        href="https://github.com/TaufiqSyed"
        target="_blank"
        rel="noopener noreferrer"
        className="z-1 group cursor-pointer"
      >
        <FaGithub
          size={socialIconSize}
          className="fill-white transition-all duration-300 ease-in-out group-hover:fill-[url(#github-gradient)] group-hover:scale-110"
          style={{ transformOrigin: "center" }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/taufiq-syed/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-1 group cursor-pointer"
      >
        <FaLinkedin
          size={socialIconSize}
          className="fill-white transition-all duration-300 ease-in-out group-hover:fill-[url(#linkedin-gradient)] group-hover:scale-110"
          style={{ transformOrigin: "center" }}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
