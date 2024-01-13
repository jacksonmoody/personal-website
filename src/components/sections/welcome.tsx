import Image from "next/image";
import Headshot from "@/assets/Headshot.jpeg";
import Scroll from "@/assets/scroll.gif";
import { scrollTo } from "@/utils/helpers";

export default function Welcome() {
  return (
    <div className="animate-in" style={{minHeight: "calc(100vh - 180px)"}}>
      <div className="sm:ml-10 lg:flex lg:flex-row-reverse gap-5">
        <div className="lg:mx-auto mb-10 lg:mb-0 shrink-0 relative object-cover size-60 lg:size-96">
          <Image
            src={Headshot}
            alt="Headshot"
            fill
            priority
            className="hero-image"
          />
        </div>
        <div className="lg:mt-12 mx-auto">
          <h1 className="text-3xl sm:text-7xl font-bold text-[#dee4f8] mt-2">
            Jackson Moody
          </h1>
          <h2 className="text-2xl sm:text-5xl font-bold text-tertiary my-4">
            Software Engineer @ Harvard
          </h2>
          <div className="text-tertiary mt-5 mb-10 max-w-xl">
            <p className="inline">Hi! I am a sophomore at </p>
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
              I am currently looking for new internship opportunities, so please
              feel free to reach out!
            </p>
          </div>
          <a className="button" href="mailto:jacksonmoody@college.harvard.edu">
            Contact Me
          </a>
        </div>
      </div>
      <Image
        src={Scroll}
        alt="Scrolling mouse animation"
        height={60}
        onClick={scrollTo("#experience")}
        className="hidden lg:block hover:cursor-pointer mx-auto mt-20"
      />
    </div>
  );
}
