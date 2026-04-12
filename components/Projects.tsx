"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio";

const projectLogos: Record<string, { logo: string; preview: string }> = {
  Poppy:     { logo: "/poppy_logo.png",   preview: "/poppy_ui.png" },
  Overshoot: { logo: "/overshoot.jpeg",   preview: "/overshoot_project.png" },
};

function ProjectIcon({ name }: { name: string }) {
  const meta = projectLogos[name];
  if (meta) {
    return (
      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-zinc-700">
        <Image src={meta.logo} alt={name} width={48} height={48} className="w-full h-full object-contain p-1" />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold bg-zinc-800 text-zinc-300">
      {name[0]}
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolio;

  return (
    <section id="projects" className="py-20 2xl:py-28 px-8 md:px-16 lg:px-24 2xl:px-32 3xl:px-48 border-t border-zinc-800/50">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-zinc-100 tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="divide-y divide-zinc-800/60">
          {projects.map((project, i) => {
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="py-8 flex gap-8 items-start rounded-2xl px-4 -mx-4 transition-all duration-300 hover:bg-zinc-900/60 btn-orange-hover hover:border-[#FF8C3A]/20"
              >
                {/* Left: project info */}
                <Link href={`/projects/${project.slug}`} className="group flex gap-5 flex-1 min-w-0">
                  <ProjectIcon name={project.name} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                        {project.name}
                        <span className="font-normal text-zinc-400">: {project.tagline}</span>
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap mb-3">
                      <span className="text-xs text-zinc-500">{project.category}</span>
                      {project.dates && (
                        <>
                          <span className="text-zinc-700">·</span>
                          <span className="text-xs text-zinc-600">{project.dates}</span>
                        </>
                      )}
                    </div>

                    <p className="text-sm 2xl:text-base 3xl:text-lg text-zinc-400 leading-relaxed max-w-xl 2xl:max-w-2xl">
                      {project.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {(project.tech ?? project.technical_details?.focus ?? []).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-0.5 bg-zinc-800/80 text-zinc-500 rounded font-mono border border-zinc-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Right: project UI screenshot */}
                {projectLogos[project.name] && (
                  <div className="hidden lg:block w-72 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group-hover:border-zinc-700 transition-colors duration-300">
                    <Image
                      src={projectLogos[project.name].preview}
                      alt={`${project.name} UI`}
                      width={288}
                      height={180}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
