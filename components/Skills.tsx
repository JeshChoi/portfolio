"use client";

import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "AI & Frontend",
  backend: "Backend",
  cloud: "Cloud",
  infra: "Infra & Tools",
  databases: "Databases",
};

export default function Skills() {
  const { skills } = portfolio;
  const categories = Object.entries(skills) as [keyof typeof skills, string[]][];

  return (
    <section id="skills" className="py-20 2xl:py-28 px-8 md:px-16 lg:px-24 2xl:px-32 3xl:px-48 border-t border-zinc-800/50">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase font-medium">
            Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mt-3 tracking-tight">
            Skills
          </h2>
        </motion.div>

        <div className="space-y-6">
          {categories.map(([key, items], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="w-28 flex-shrink-0">
                <span className="text-xs text-zinc-500 font-medium tracking-wide">
                  {categoryLabels[key]}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg font-mono hover:border-zinc-700 hover:text-zinc-200 transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
