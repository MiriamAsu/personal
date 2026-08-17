import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Miriam Eyo. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-white"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-[#D6A84F]"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-500 transition hover:border-[#D6A84F] hover:text-[#D6A84F]"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}