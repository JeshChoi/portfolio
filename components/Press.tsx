"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Press() {
  const { features } = portfolio;

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
            Featured in
          </h2>
        </motion.div>

        <div className="space-y-4">
          {features.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-5 p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-[#60A5FA]/40 hover:bg-zinc-900/60 transition-all duration-200 btn-blue-hover"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs text-zinc-500 font-medium tracking-wide">
                    {item.source}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <ExternalLink
                className="w-4 h-4 text-zinc-600 group-hover:text-[#60A5FA] group-hover:blue-glow-icon transition-colors flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
