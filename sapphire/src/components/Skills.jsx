import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Vite",
  "Git",
  "GitHub",
  "Responsive Design",
  "UI/UX Design",
  "APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-[#0d0d0d] px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
              My Toolkit
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Skills & technologies
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-gray-500">
              A collection of technologies and tools I use to design and build
              modern digital experiences.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap content-start gap-3"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition hover:border-[#D6A84F]/40 hover:text-[#D6A84F]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}