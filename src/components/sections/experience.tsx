import { experience } from "@/assets/experience";
import FadeInSection from "@/components/FadeInSection";

export default function Experience() {
  return (
    <div
      className="flex flex-col items-center overflow-x-hidden"
      id="experience"
    >
      <FadeInSection>
        <div className="flex mt-10 lg:mt-0 items-center gap-5 w-[54rem]">
          <h2 className="text-secondary text-3xl font-bold hidden lg:block">Experience</h2>
          <hr className="border-tertiary border-opacity-30 grow" />
        </div>
      </FadeInSection>
      <div className="my-5">
        {experience.map((job) => (
          <FadeInSection id={job.id} key={job.id}>
            <a
              href={job.link}
              target="_blank"
              className="group rounded-md transition -inset-x-6 block hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg p-5 max-w-4xl"
            >
              <div className="flex justify-between">
                <h3 className="text-tertiary group-hover:text-primary transition text-lg font-bold">
                  {job.title}
                </h3>
                <div className="text-tertiary group-hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-tertiary text-md font-bold">{job.company}</h4>
              <ul className="list-disc list-inside text-tertiary mt-2 marker:text-primary">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {job.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block text-xs bg-primary/15 text-primary rounded-lg px-2 py-1 mt-2 mr-2"
                >
                  {skill}
                </span>
              ))}
            </a>
          </FadeInSection>
        ))}
      </div>
      <a className="button my-10" href="/resume.pdf" target="_blank">
        View Full Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 inline-block ml-2"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
