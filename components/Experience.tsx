"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";

const companyLogos: Record<string, { src: string; bg: string }> = {
  Salesforce:  { src: "/Salesforce.com_logo.svg.png", bg: "#0070D2" },
  "UC Irvine": { src: "/white_uci.png",               bg: "#003366" },
  "OC Vibe":   { src: "/ocvibe.png",                  bg: "#065F46" },
};

function CompanyLogo({ company }: { company: string }) {
  const meta = companyLogos[company];

  if (meta) {
    return (
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-white"
      >
        <Image
          src={meta.src}
          alt={company}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold bg-zinc-800 text-zinc-300">
      {company[0]}
    </div>
  );
}

export default function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="py-20 2xl:py-28 px-8 md:px-16 lg:px-24 2xl:px-32 3xl:px-48">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-zinc-100 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="divide-y divide-zinc-800/60">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-5 py-8"
            >
              {/* Company logo */}
              <CompanyLogo company={job.company} />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base 2xl:text-lg 3xl:text-xl font-bold text-zinc-100 leading-snug">
                        {job.role}
                      </h3>
                      {i === 0 && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: "rgba(255,140,58,0.15)", color: "#FF8C3A" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      {job.company}
                      {job.location && (
                        <span className="text-zinc-600"> · {job.location}</span>
                      )}
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 font-mono whitespace-nowrap sm:text-right mt-0.5">
                    {job.dates}
                  </p>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {job.impact.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm 2xl:text-base 3xl:text-lg text-zinc-300">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 bg-zinc-800/80 text-zinc-500 rounded font-mono border border-zinc-700/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
