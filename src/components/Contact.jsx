import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-20 sm:py-28 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70"
        >
          I’m open to freelance, full-time roles, and collaborations. Tell me about your idea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
