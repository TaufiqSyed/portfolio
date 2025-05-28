"use client";

import { useState } from "react";
import { NavbarLink } from "./navbar-link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row justify-center m-0 absolute w-screen px-8 z-[11]">
      <div className="bg-[#020103] max-w-[700px] flex flex-row items-center py-4 px-5 mt-4 border-gray-800 border rounded-xl w-full">
        <a href="#landing" className="mr-16">
          <img src="tfqsy.svg" className="w-10 h-10" />
        </a>
        <div className="hidden md:flex flex-row items-center">
          {["Experience", "Projects", "Research", "About Me"].map((e) => (
            <NavbarLink sectionText={e} key={e} />
          ))}
        </div>
        <a
          href="mailto:taufiq.m.a.syed@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-0 text-[14px] text-gray-200 rounded-[8px] bg-purple-950 leading-7 ml-16 shadow-[inset_0_0_5px_rgba(255,255,255,0.6)] hidden md:block"
        >
          Get in Touch
        </a>
        <button
          className="md:hidden ml-auto text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#020103] flex flex-col items-center py-4 px-5 mt-4 border-gray-800 border rounded-xl w-full">
          {["Learn", "Events", "Members", "About Us"].map((e) => (
            <NavbarLink sectionText={e} key={e} />
          ))}
          <a
            href="mailto:taufiq.m.a.syed@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-0 text-[14px] text-gray-200 rounded-[8px] bg-purple-950 leading-7 ml-16 shadow-[inset_0_0_5px_rgba(255,255,255,0.6)] hidden md:block"
          >
            Get in Touch
          </a>
        </div>
      )}
    </div>
  );
};
