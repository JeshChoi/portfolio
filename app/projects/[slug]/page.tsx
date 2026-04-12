import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Trophy, Users } from "lucide-react";
import type { Metadata } from "next";
import portfolio from "@/data/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolio.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Joshua Choi`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const tech = project.tech ?? project.technical_details?.focus ?? [];

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back
          </Link>
          <span className="text-sm text-zinc-500 font-mono">{project.category}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-zinc-500 tracking-widest uppercase font-medium">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs px-2 py-0.5 bg-white/10 text-zinc-300 rounded-full border border-white/10">
                Featured
              </span>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-4">
            {project.name}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>

          {project.links && Object.keys(project.links).length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {Object.entries(project.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full hover:bg-white transition-colors duration-200"
                >
                  {key === "article" ? "Read Article" : key}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                Overview
              </h2>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{project.overview}</p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                Problem
              </h2>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{project.problem}</p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                Solution
              </h2>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{project.solution}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[15px] text-zinc-300"
                  >
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture */}
            {project.technical_details?.architecture && (
              <section>
                <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                  Architecture
                </h2>
                <ul className="space-y-3">
                  {project.technical_details.architecture.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-zinc-300"
                    >
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                Impact
              </h3>
              <ul className="space-y-2.5">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                  Awards
                </h3>
                <div className="space-y-4">
                  {project.awards.map((award) => (
                    <div key={award.title} className="flex items-start gap-3">
                      <Trophy
                        className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">
                          {award.title}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">{award.organization}</p>
                        <p className="text-sm font-bold text-zinc-100 mt-1">{award.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech */}
            {tech.length > 0 && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                  Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            {project.team && project.team.length > 0 && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Team
                </h3>
                <ul className="space-y-1.5">
                  {project.team.map((member) => (
                    <li key={member} className="text-sm text-zinc-300">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Press */}
            {project.press && project.press.length > 0 && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">
                  Press
                </h3>
                <div className="space-y-3">
                  {project.press.map((item) => (
                    <div key={item.source}>
                      <p className="text-xs font-medium text-zinc-400 mb-1">{item.source}</p>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
