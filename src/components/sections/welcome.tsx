import Image from "next/image";
import Headshot from "@/assets/headshot.jpeg";
import Scroll from "@/assets/scroll.gif";
import { scrollTo } from "@/utils/helpers";

export default function Welcome() {
  return (
    <div className="animate-in" style={{ minHeight: "calc(100vh - 180px)" }}>
      <div className="flex flex-col items-center lg:flex-row-reverse gap-5 justify-evenly">
        <div className="inline-block relative before:hidden lg:before:inline-block before:absolute before:h-full before:w-full before:top-[5%] before:left-[5%] before:border-4 before:border-primary before:content-[''] before:rounded-full hero-image-container">
          <div className="lg:mx-auto mb-10 lg:mb-0 shrink-0 relative object-cover size-60 lg:size-96">
            <Image
              src={Headshot}
              alt="Headshot"
              fill
              placeholder="blur"
              className="hero-image"
            />
          </div>
        </div>
        <div className="lg:mt-12">
          <h1 className="text-3xl sm:text-7xl text-center lg:text-left font-bold text-[#dee4f8] mt-2">
            Jackson Moody
          </h1>
          <h2 className="text-2xl sm:text-5xl text-center lg:text-left font-bold text-tertiary my-4">
            Software Engineer @ Harvard
          </h2>
          <div className="text-tertiary text-center lg:text-left mt-5 mb-10 max-w-xl">
            <p className="inline">Hi! I am a junior at </p>
            <a
              href="https://www.college.harvard.edu/"
              target="_blank"
              className="link"
            >
              Harvard College
            </a>
            <p className="inline"> studying computer science on the </p>
            <a href="https://mbb.harvard.edu/" target="_blank" className="link">
              Mind, Brain, and Behavior track.
            </a>
            <p className="inline">
              {" "}
              I currently serve as the Executive Director of{" "}
              <a
                href="https://socialgood.hcs.harvard.edu/"
                target="_blank"
                className="link"
              >
                Harvard Tech for Social Good
              </a>
              , and I will be working as a{" "}
              <span className="font-bold">
                Software Engineering Intern @ Apple{" "}
              </span>
              this summer. Would love to connect!
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-normal">
            <a
              className="button"
              href="mailto:jacksonmoody@college.harvard.edu"
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 inline-block ml-3"
                aria-hidden="true"
                height="1em"
                width="1em"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M7.03 4.95L3.49 8.49c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0l6.01-6.01a2.517 2.517 0 00-.39-3.86l.39-.39c.97-.97.97-2.56 0-3.54-.16-.16-.35-.3-.54-.41a2.497 2.497 0 00-3.72-3.05 2.517 2.517 0 00-3.88-.42l-2.51 2.51a2.493 2.493 0 00-3.84-.39zm1.41 1.42c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-3.18 3.18a3 3 0 010 4.24l1.41 1.41a5.004 5.004 0 001.12-5.36l6.3-6.3c.2-.2.51-.2.71 0s.2.51 0 .71l-4.6 4.6 1.41 1.41 6.01-6.01c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6.01 6.01 1.41 1.41 4.95-4.95c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-5.66 5.66 1.41 1.41 3.54-3.54c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19l3.53-3.54zM23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Image
        src={Scroll}
        alt="Scrolling mouse animation"
        height={60}
        tabIndex={0}
        onClick={scrollTo("#experience")}
        onFocus={scrollTo("#experience")}
        className="hidden lg:block hover:cursor-pointer mx-auto mt-20"
      />
    </div>
  );
}
