import { motion } from "framer-motion";

const experience = [
  {
    year: "2025 — Present",
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Building responsive websites and frontend applications for businesses and personal projects.",
  },
  {
    year: "2024 — 2025",
    role: "UI Designer & Developer",
    company: "Creative Projects",
    description:
      "Designed user interfaces and converted concepts into responsive frontend experiences.",
  },
  {
    year: "2023 — 2024",
    role: "Frontend Developer",
    company: "Independent Projects",
    description:
      "Focused on strengthening React, JavaScript, responsive design, and modern frontend development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/5 bg-[#0d0d0d] px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My journey so far
          </h2>
        </div>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid gap-5 border-t border-white/10 py-9 md:grid-cols-[180px_1fr]"
            >
              <p className="text-sm text-[#D6A84F]">{item.year}</p>

              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>

                <p className="mt-1 text-sm text-gray-500">{item.company}</p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}