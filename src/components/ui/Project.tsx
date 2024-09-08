"use client";

import { Dialog, DialogContent } from "@/components/ui/Dialog";
import FadeInSection from "../FadeInSection";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import IconGitHubSmall from "@/components/icons/icon-github-small";

type ProjectProps = {
  id: number;
  project: {
    title: string;
    company: string;
    description: string;
    skills: Array<string>;
    images?: Array<string>;
    video?: string;
    sound?: boolean;
    alts: Array<string>;
    link?: string;
    github?: string;
    priority: boolean;
  };
};

export default function Project({ project, id }: ProjectProps) {
  const [open, setOpen] = useState(false);

  return (
    <FadeInSection id={id} key={id}>
      <div
        tabIndex={0}
        className="group rounded-md transition -inset-x-6 block hocus:bg-slate-800/50 hocus:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg p-5 md:max-w-xs border-slate-800/50 border-2 h-full cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-between">
          <h3 className="text-secondary group-hover:text-primary transition text-lg font-bold">
            {project.title}
          </h3>
          <div className="flex gap-1 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="transition hocus:-translate-y-[2px] hocus:text-primary focus-visible:outline-none mt-[2px]"
                onClick={(e) => e.stopPropagation()}
              >
                <IconGitHubSmall />
              </a>
            )}
            {project.link && (
              <a
                className="text-tertiary hover:text-primary"
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform hover:-translate-y-[2px] hover:translate-x-[2px] ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            )}
          </div>
        </div>
        <h4 className="text-tertiary text-md font-bold">{project.company}</h4>
        <p className="text-tertiary text-sm">{project.description}</p>
        <div className="flex flex-row flex-wrap items-center">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-primary/15 text-primary rounded-lg px-2 py-1 mt-2 mr-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {project.images && project.images.length > 1 && (
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent>
                {project.images.map((image, i) => (
                  <CarouselItem key={i}>
                    <div className="relative max-w-[100%] h-[250px] sm:h-[500px] mt-5">
                      <Image
                        src={image}
                        alt={project.alts[i]}
                        fill
                        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                      />
                    </div>
                    <p className="text-tertiary text-sm text-center mt-10">
                      {project.alts[i]}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {project.images && project.images.length === 1 && (
            <>
              <div className="relative max-w-[100%] h-[250px] sm:h-[500px] mt-5">
                <Image
                  src={project.images[0]}
                  alt={project.alts[0]}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                />
              </div>
              <p className="text-tertiary text-sm text-center mt-10">
                {project.alts[0]}
              </p>
            </>
          )}
          {project.video && (
            <>
              <div className="relative w-full mt-5">
                {project.sound && (
                  <video controls loop>
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
                {!project.sound && (
                  <video autoPlay muted loop>
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
              </div>
              <p className="text-tertiary text-sm text-center mt-5">
                {project.alts[0]}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </FadeInSection>
  );
}
