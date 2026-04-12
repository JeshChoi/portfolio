"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Awards() {
  const { awards } = portfolio;

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 border-t border-zinc-800/50">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Awards
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#FF8C3A]/40 transition-all duration-200 btn-orange-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4.5 h-4.5 orange-glow-icon" style={{ color: "#FF8C3A" }} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-sm font-semibold text-zinc-100 leading-snug">
                      {award.title}
                    </h3>
                    <span className="text-sm font-bold text-zinc-100 whitespace-nowrap tabular-nums">
                      {award.amount}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-3 font-medium">
                    {award.organization}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
