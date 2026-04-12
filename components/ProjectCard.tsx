import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className={`group relative h-full rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
          featured
            ? "border-zinc-700 bg-zinc-900 hover:border-zinc-500"
            : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900"
        }`}
      >
        {/* Featured glow */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        )}

        <div className={`relative p-6 md:p-8 flex flex-col h-full`}>
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-zinc-500 tracking-widest uppercase font-medium">
                  {project.category}
                </span>
                {featured && (
                  <span className="text-xs px-2 py-0.5 bg-white/10 text-zinc-300 rounded-full border border-white/10">
                    Featured
                  </span>
                )}
              </div>
              <h3
                className={`font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors ${
                  featured ? "text-2xl md:text-3xl" : "text-xl"
                }`}
              >
                {project.name}
              </h3>
            </div>
            <ArrowUpRight
              className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1"
              strokeWidth={1.5}
            />
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
            {project.tagline}
          </p>

          {project.impact && project.impact.length > 0 && (
            <div className="space-y-2 mb-6">
              {project.impact.slice(0, featured ? 4 : 2).map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          )}

          {(project.tech || project.technical_details?.focus) && (
            <div className="flex flex-wrap gap-2">
              {(project.tech ?? project.technical_details?.focus ?? []).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 bg-zinc-800/60 text-zinc-500 rounded-md border border-zinc-700/50 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
