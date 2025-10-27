import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful landing experience blending WebGL, motion, and tactile UI. Built with React, Spline, and Framer Motion.',
    tech: ['React', 'Spline', 'Framer Motion', 'Tailwind'],
    live: '#',
    repo: '#',
    gradient: 'from-cyan-500/40 via-blue-500/30 to-purple-500/30',
  },
  {
    title: 'Realtime Collab Board',
    description:
      'Multiplayer whiteboard with presence, drawing tools, and delightful microinteractions.',
    tech: ['React', 'WebSockets', 'Zustand', 'Canvas'],
    live: '#',
    repo: '#',
    gradient: 'from-emerald-500/40 via-teal-500/30 to-sky-500/30',
  },
  {
    title: 'AI Content Studio',
    description:
      'Prompt-led content workflows with versioning, review, and export. Clean, keyboard-first UX.',
    tech: ['FastAPI', 'MongoDB', 'React', 'OpenAI'],
    live: '#',
    repo: '#',
    gradient: 'from-pink-500/40 via-fuchsia-500/30 to-indigo-500/30',
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 sm:py-28 bg-black">
      <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-black/60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Selected Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          A snapshot of work that blends engineering, design, and thoughtful interactions.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-5">
                <div className="flex items-center gap-2 text-white/80">
                  <Code2 size={18} />
                  <span className="text-xs uppercase tracking-wider">Case Study</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/40 border border-white/10 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1 text-sm text-white hover:underline"
                  >
                    Live <ExternalLink size={16} />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
