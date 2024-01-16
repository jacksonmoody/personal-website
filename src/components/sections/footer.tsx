import FadeInSection from "../FadeInSection";

export default function Footer() {
  return (
    <FadeInSection>
      <footer className="flex flex-col items-center justify-center gap-2 py-8">
        <p className="text-sm">Designed & Created by Jackson Moody</p>
        <div>
          <p className="text-xs inline">Built with </p>
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="link text-xs inline"
          >
            Next.js
          </a>
          <p className="text-xs inline"> and </p>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="link text-xs inline"
          >
            Tailwind CSS
          </a>
        </div>
      </footer>
    </FadeInSection>
  );
}
