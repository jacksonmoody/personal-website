import IconGitHub from "../icons/icon-github";
import IconLinkedIn from "../icons/icon-linkedin";
import IconInstagram from "../icons/icon-instagram";
import IconEmail from "../icons/icon-email";
import { scrollTo } from "@/utils/helpers";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-20 px-1 sm:px-24">
      <div className="hidden sm:flex flex-row items-center gap-5">
        <a
          href="#experience"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
          onClick={scrollTo("#experience")}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
          onClick={scrollTo("#projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
          onClick={scrollTo("#contact")}
        >
          Contact
        </a>
      </div>
      <div className="flex flex-row gap-5">
        <a
          href="https://github.com/jacksonmoody/"
          target="_blank"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
        >
          <IconGitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/jacksonmoody/"
          target="_blank"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
        >
          <IconLinkedIn />
        </a>
        <a
          href="https://www.instagram.com/moody.jackson/"
          target="_blank"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
        >
          <IconInstagram />
        </a>
        <a
          href="mailto:jacksonmoody@college.harvard.edu"
          className="hocus:-translate-y-[2px] transition hocus:text-primary focus-visible:outline-none"
        >
          <IconEmail />
        </a>
      </div>
    </div>
  );
}
