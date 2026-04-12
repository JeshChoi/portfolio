"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Education() {
  const { education } = portfolio;

  return (
    <section className="py-24 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase font-medium">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mt-3 tracking-tight">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                <h3 className="text-base font-semibold text-zinc-100">
                  {education.school}
                </h3>
                <span className="text-sm font-bold text-zinc-100 tabular-nums">
                  {education.gpa} GPA
                </span>
              </div>
              <p className="text-sm text-zinc-400 font-medium mb-6">
                {education.degree}
              </p>

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-3">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2.5 py-1 bg-zinc-800/60 text-zinc-400 rounded-lg border border-zinc-700/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
