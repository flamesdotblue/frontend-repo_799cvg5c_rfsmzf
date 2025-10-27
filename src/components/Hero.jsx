import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Download, Github, Linkedin } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[90vh] sm:h-[92vh] lg:h-[96vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            <Rocket size={14} className="text-white/70" />
            Building delightful, interactive experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Hi, I’m <span className="text-white">Your Name</span>
            <br />
            <span className="text-white/80">Developer & Designer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-white/70 max-w-xl"
          >
            I craft modern web apps with 3D, motion, and thoughtful UX. Explore my latest projects and let’s create something exceptional together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 transition"
            >
              <Download size={16} /> Download Resume
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
