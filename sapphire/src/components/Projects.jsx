import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Holy Land School",
    description:
      "A modern school website designed to help parents discover programs, admissions information, events, and school activities.",
    tags: ["React", "Tailwind CSS", "UI Design"],
    live: "#",
    github: "#",
  },
  {
    number: "02",
    title: "Delivery App",
    description:
      "A responsive delivery platform interface featuring product discovery, order management, and a smooth checkout experience.",
    tags: ["React", "JavaScript", "API"],
    live: "#",
    github: "#",
  },
  {
    number: "03",
    title: "Business Dashboard",
    description:
      "A clean analytics dashboard with responsive data cards, navigation, charts, and reusable interface components.",
    tags: ["React", "Tailwind", "Dashboard"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
              Selected Work
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Featured projects
            </h2>
          </div>

          <p className="max-w-md text-gray-500">
            A few examples of projects that demonstrate my approach to design
            and frontend development.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid gap-8 rounded-3xl border border-white/10 bg-[#0d0d0d] p-7 transition hover:border-[#D6A84F]/30 md:grid-cols-[100px_1fr_auto] md:items-center md:p-9"
            >
              <span className="text-sm font-medium text-[#D6A84F]">
                / {project.number}
              </span>

              <div>
                <h3 className="text-2xl font-semibold transition group-hover:text-[#D6A84F]">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D6A84F] hover:text-[#D6A84F]"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={project.github}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D6A84F] hover:text-[#D6A84F]"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}