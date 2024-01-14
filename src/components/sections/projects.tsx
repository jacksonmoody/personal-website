"use client";

import FadeInSection from "../FadeInSection";
import Project from "@/components/ui/Project";
import { projects } from "@/assets/projects";
import { useState } from "react";

export default function Projects() {
  const priorityProjects = projects.filter((project) => project.priority);
  const otherProjects = projects.filter((project) => !project.priority);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center mt-12" id="projects">
        <FadeInSection>
          <div className="flex mt-10 lg:mt-0 items-center gap-5 w-[62rem]">
            <h2 className="text-secondary text-3xl font-bold hidden lg:block">
              Projects
            </h2>
            <hr className="border-tertiary border-opacity-30 grow" />
          </div>
        </FadeInSection>
      </div>
      <div className="flex flex-row flex-wrap mt-10 gap-5 justify-center items-stretch lg:px-20">
        {priorityProjects.map((project, id) => (
          <Project project={project} key={id} />
        ))}
        {open &&
          otherProjects.map((project, id) => (
            <Project project={project} key={id} />
          ))}
      </div>
      <div className="text-center">
        {!open && (
          <button className="button mt-10 mb-20" onClick={() => setOpen(true)}>
            Show More
          </button>
        )}
        {open && (
          <button className="button mt-10 mb-20" onClick={() => setOpen(false)}>
            Show Less
          </button>
        )}
      </div>
    </>
  );
}
