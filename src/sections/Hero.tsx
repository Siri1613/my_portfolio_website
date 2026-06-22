import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TYPING_ROLES = personalInfo.roles;

function TypingEffect() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPING_ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % TYPING_ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-teal-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.15),rgba(0,0,0,0))]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4"
        >
          {personalInfo.name.split(' ')[0]}{' '}
          <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10"
        >
          <TypingEffect />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-sm hover:border-teal-500/50 hover:text-teal-400 hover:bg-teal-500/5 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            View Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-gray-800 text-gray-400 flex items-center justify-center hover:border-teal-500/50 hover:text-teal-400 hover:bg-teal-500/5 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollDown}
          className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-teal-400 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
