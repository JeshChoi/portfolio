"use client";

import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Recognition() {
  const { features } = portfolio;

  return (
    <section id="hackathons" className="py-20 2xl:py-28 px-8 md:px-16 lg:px-24 2xl:px-32 3xl:px-48 border-t border-zinc-800/50">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-zinc-100 tracking-tight">
            Hackathons
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#60A5FA]/40 transition-all duration-300 btn-blue-hover flex flex-col"
            >
              {/* Preview image */}
              <div className="relative w-full h-80 overflow-hidden bg-zinc-900 flex-shrink-0">
                {item.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                )}
                {/* Award badge overlaid on image */}
                {item.award && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-sm border border-[#60A5FA]/40">
                    <Trophy className="w-3 h-3 flex-shrink-0" style={{ color: "#60A5FA" }} strokeWidth={2} />
                    <span className="text-xs font-semibold text-zinc-100 truncate">
                      {item.award.title}
                    </span>
                    <span className="text-xs font-bold tabular-nums ml-auto flex-shrink-0" style={{ color: "#60A5FA" }}>
                      {item.award.amount}
                    </span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs text-zinc-500 font-medium tracking-wide">
                    {item.source}
                  </span>
                  <ExternalLink
                    className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#60A5FA] group-hover:blue-glow-icon transition-colors flex-shrink-0"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 leading-snug group-hover:text-white transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
