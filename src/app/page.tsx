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
    </div>
  );
}
