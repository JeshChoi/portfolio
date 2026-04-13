"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    metric: "2 weeks",
    after: "10 min",
    label: "IAM provisioning time",
    context: "Salesforce · 100+ teams",
  },
  {
    metric: "20%",
    label: "Sprint capacity saved",
    context: "Salesforce · per engineer",
  },
  {
    metric: "50K+",
    label: "Internal users served",
    context: "Salesforce · production IAM",
  },
  {
    metric: "10K",
    unit: "pages/day",
    label: "Web crawler throughput",
    context: "OC Vibe · 24/7 uptime",
  },
  {
    metric: "1 hr",
    after: "3 min",
    label: "Analyst time per report",
    context: "OC Vibe · 95% reduction",
  },
  {
    metric: "31K+",
    unit: "executions",
    label: "ML workflows processed",
    context: "UC Irvine · 330+ researchers",
  },
];

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
          {impacts.map((item, i) => (
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
                  {item.metric}
                </span>
                {item.unit && (
                  <span className="text-base font-semibold text-zinc-500">
                    {item.unit}
                  </span>
                )}
                {item.after && (
                  <>
                    <span className="text-lg font-bold" style={{ color: "#60A5FA" }}>→</span>
                    <span className="text-3xl md:text-4xl font-black tracking-tight leading-none" style={{ color: "#60A5FA" }}>
                      {item.after}
                    </span>
                  </>
                )}
              </div>

              {/* Label */}
              <p className="text-sm font-medium text-zinc-300">{item.label}</p>

              {/* Context — very muted */}
              <p className="text-xs text-zinc-700">{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
