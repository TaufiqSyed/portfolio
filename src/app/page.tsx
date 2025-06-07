"use client";

import { About } from "./_sections/about";
import { Projects } from "./_sections/projects";
import { Experience } from "./_sections/experience";
import { Landing } from "./_sections/landing";
import { Research } from "./_sections/research";

export default function Home() {
  return (
    <div className="bg">
      <Landing />
      <Experience />
      <Projects />
      <Research />
      <About />
      {/* <footer className="footer bg-black">
        <div className="container mx-auto py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Taufiq Syed. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}
