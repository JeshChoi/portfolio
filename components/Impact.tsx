"use client";

import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";

export default function Impact() {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-24 2xl:px-32 3xl:px-48 border-t border-zinc-800/50">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-zinc-500 tracking-widest uppercase font-medium mb-8"
        >
          Impact at scale
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/30 rounded-2xl overflow-hidden border border-zinc-800/30">
          {portfolio.metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-zinc-950 px-6 py-6 flex flex-col gap-1"
            >
              {/* Big metric */}
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl md:text-4xl font-black text-zinc-50 tracking-tight leading-none">
                  {item.value}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm font-medium text-zinc-300">{item.label}</p>

              {/* Context — very muted */}
              <p className="text-xs text-zinc-500">{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
