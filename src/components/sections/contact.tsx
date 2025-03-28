import FadeInSection from "../FadeInSection";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container mx-auto px-4 py-20 sm:pt-15 sm:pb-40">
        <div className="text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4 text-secondary">
              Get In Touch
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-tertiary">
              Thank you for visiting! If you have any questions, comments, or
              just want to say hello, feel free to reach out. I am always happy to
              connect with new people!
            </p>
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
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
