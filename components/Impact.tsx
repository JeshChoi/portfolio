"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    metric: "2 weeks → 10 min",
    label: "IAM provisioning time",
    context: "Shipped to 100+ teams · Salesforce internship",
  },
  {
    metric: "20%",
    label: "Sprint capacity saved",
    context: "Per engineer via workflow automation · Salesforce",
  },
  {
    metric: "50K+",
    label: "Internal users served",
    context: "On production IAM platform · Salesforce",
  },
  {
    metric: "10K pages/day",
    label: "Web crawler throughput",
    context: "Running 24/7 on Docker + Azure · OC Vibe",
  },
  {
    metric: "1 hr → 3 min",
    label: "Analyst time per report",
    context: "95% reduction via AI automation · OC Vibe",
  },
  {
    metric: "31K+ executions",
    label: "ML workflows processed",
    context: "Across 330+ researchers · UC Irvine Texera",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/40 rounded-2xl overflow-hidden border border-zinc-800/40">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-zinc-950 px-6 py-5"
            >
              <p className="text-xl md:text-2xl font-bold text-zinc-100 tracking-tight mb-1">
                {item.metric}
              </p>
              <p className="text-sm font-medium text-zinc-300 mb-1">{item.label}</p>
              <p className="text-xs text-zinc-600 leading-relaxed">{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
