"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import portfolio from "@/data/portfolio";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function CTA() {
  const { personal } = portfolio;

  return (
    <section
      id="contact"
      className="py-28 px-8 md:px-16 lg:px-24 border-t border-zinc-800/50 orange-pulse scroll-mt-16"
    >
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-zinc-500 tracking-widest uppercase font-medium mb-4">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-tight mb-6 max-w-3xl">
            Let&apos;s build something{" "}
            <em className="not-italic orange-glow" style={{ color: "#FF8C3A" }}>
              great.
            </em>
          </h2>
          <p className="text-base text-zinc-400 max-w-xl leading-relaxed mb-10">
            I&apos;m open to new opportunities, collaborations, and interesting conversations.
            Whether it&apos;s a role, a project, or just a chat — reach out.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-zinc-900 transition-all duration-200 btn-orange-hover"
              style={{ backgroundColor: "#FF8C3A" }}
            >
              <Mail className="w-4 h-4" />
              Send an email
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 transition-colors duration-200"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </a>
          </div>

          <p className="text-sm text-zinc-600 mt-6 font-mono">
            {personal.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
