"use client";

import { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Welcome from "@/components/sections/welcome";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  function handleMouseMove(ev: React.MouseEvent<HTMLElement, MouseEvent>) {
    setMousePosition({ left: ev.screenX, top: ev.screenY });
  }

  const mouseStyle = `radial-gradient(600px at ${mousePosition.left}px ${mousePosition.top}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

  return (
    <main
      className="leading-relaxed text-slate-400 antialiased px-4 h-full"
      onMouseMove={(ev) => handleMouseMove(ev)}
    >
      <Navbar />
      <Welcome />
      <Experience />
      <Projects />
      <Contact />
      <div
        className="pointer-events-none z-1 transition duration-300 fixed h-full w-full left-0 top-0"
        style={{
          background: mouseStyle,
        }}
      />
    </main>
  );
}
