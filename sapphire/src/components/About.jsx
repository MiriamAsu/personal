import { motion } from "framer-motion";
import { Code2, Layers3, Palette } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "I write maintainable and scalable frontend code.",
  },
  {
    icon: Palette,
    title: "UI Design",
    text: "I turn ideas into intuitive and attractive interfaces.",
  },
  {
    icon: Layers3,
    title: "Modern Stack",
    text: "I work with modern technologies and development practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Designing interfaces that feel as good as they look.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <p className="text-lg leading-8 text-gray-400">
            I'm a frontend web developer and UI designer who enjoys creating
            clean, responsive, and user-focused digital products. My goal is
            to combine thoughtful design with solid frontend engineering to
            create websites and web applications that are both beautiful and functional.
          </p>

          <p className="text-lg leading-8 text-gray-400">
            From landing pages and business websites to interactive web
            applications, I enjoy taking an idea from concept to a polished
            final product.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-[#D6A84F]/30"
              >
                <Icon className="text-[#D6A84F]" size={28} />

                <h3 className="mt-6 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}