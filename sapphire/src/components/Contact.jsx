import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6A84F]">
              Contact
            </p>

            <h2 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
              Let's build something great.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
              Have a project, idea, or opportunity? Send me a message and
              let's talk about how we can work together.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-4 text-gray-400 transition hover:text-[#D6A84F]"
              >
                <Mail size={20} />
                mimidazzle14@gmail.com
              </a>

              <a
                href="tel:+2340000000000"
                className="flex items-center gap-4 text-gray-400 transition hover:text-[#D6A84F]"
              >
                <Phone size={20} />
                +234 8147347658
              </a>

              <div className="flex items-center gap-4 text-gray-400">
                <MapPin size={20} />
                Nigeria
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-[#D6A84F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-[#D6A84F]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm text-gray-400">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project inquiry"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-[#D6A84F]"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm text-gray-400">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-[#D6A84F]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D6A84F] px-6 py-3 font-semibold text-black transition hover:scale-[1.01]"
            >
              Send Message
              <ArrowUpRight size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}