import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold tracking-tight text-white"
          >
            <span className="text-lg">dev.</span>
            <span className="text-primary-500">portfolio</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-white/80 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
            <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-white/10">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-white/10 transition" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2 bg-black/70 backdrop-blur">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-white/10 transition" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
