"use client";

import {
  FaLinkedin,
  FaChevronDown,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SectionLink } from "../_components/about/section-link";
import SocialIcons from "../_components/social-icons";
import { ScrollButton } from "../_components/scroll-button";

export const Landing = () => {
  const scrollToView = (id: string) => (e: any) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    window.history.pushState(null, "", `#${id}`);
  };
  return (
    <section
      id="landing"
      className="abstract gradient-bottom-right flex min-h-[110vh] flex-col items-center justify-between w-full relative"
    >
      <div className="flex flex-row w-full mt-[180px] justify-center sm:justify-normal">
        <div className="hidden sm:flex flex-1" />
        <div className="flex-[8] flex flex-col justify-center items-center max-w-[640px] mt-16">
          <img
            src="taufiqsyed.svg"
            className="w-full pb-6 pt-16 max-w-[400px] md:max-w-[600px] lg:max-w-[640px]"
          />
          <SocialIcons />
        </div>
        <div className="hidden sm:flex flex-[4]"></div>
      </div>
      <div className="mb-0 grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 text-left mt-8 lg:px-32">
        <SectionLink
          onClick={scrollToView("experience")}
          title={"Experience"}
          description={
            "Explore my software engineering experience through internships and applied technical work."
          }
        />

        <SectionLink
          onClick={scrollToView("projects")}
          title={"Projects"}
          description={
            "Discover projects that demonstrate my skills in AI, web development, and software engineering."
          }
        />

        <SectionLink
          onClick={scrollToView("research")}
          title={"Research"}
          description={
            "View my academic research in AI and educational technology, including published work."
          }
        />

        <SectionLink
          onClick={scrollToView("about-me")}
          title={"About Me"}
          description={
            "Learn more about my background, education, leadership roles, and extracurricular involvement."
          }
        />
      </div>
      <div className="absolute bg-contain bg-no-repeat w-[640px] h-full right-28 bg-purple-composition -z-30 mt-[40px]"></div>
      <div className="absolute h-full w-full bg-gradient-radial -z-50"></div>
      <div className="absolute h-full w-full bg-gradient-black bg-cover -z-10"></div>
      <div className="absolute h-full w-full bg-stars bg-cover -z-0"></div>
      <div className="absolute h-full w-full bg-pattern bg-cover -z-40"></div>
      {/* <div className='h-screen w-screen absolute landing-bg -z-10'>
        <div className='h-full w-full bg-gradient-to-r from-black'></div> */}
      {/* </div> */}

      <ScrollButton scrollViewName="experience" />
    </section>
  );
};
