import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-8"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D6A84F]/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-[#D6A84F]">
            <span className="h-px w-10 bg-[#D6A84F]" />
            Frontend Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            I build digital
            <span className="block text-[#D6A84F]">experiences.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            I'm a frontend developer and UI designer focused on building
            modern, responsive, accessible, and engaging web experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[#D6A84F] px-6 py-3 font-medium text-black transition hover:scale-105"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-[#D6A84F] hover:text-[#D6A84F]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition hover:text-white"
            >
              <Github size={21} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition hover:text-[#D6A84F]"
            >
              <Linkedin size={21} />
            </a>
          </div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-[#D6A84F]/20 blur-2xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#171717] to-[#0d0d0d]">
            <div className="absolute inset-5 rounded-[1.5rem] border border-[#D6A84F]/20" />

            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#D6A84F]/40 bg-[#D6A84F]/10 text-5xl font-bold text-[#D6A84F]">
                  <img src="/image/newsunny.JPG" alt="newsunny" className="h-full w-full rounded-full object-cover" />
                </div>

                <p className="text-xl font-semibold">Frontend Developer</p>
                <p className="mt-2 text-sm text-gray-500">
                  React • UI Design • Web
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Currently
              </p>
              <p className="mt-1 text-sm text-gray-200">
                Building beautiful web experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-[#D6A84F]"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}