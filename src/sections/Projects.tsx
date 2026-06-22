import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, Tag } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-900">
      <SectionHeading
        label="Projects"
        title="Things I've Built"
        subtitle="A selection of projects spanning IoT, computer vision, machine learning, and web — each solving real-world problems."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="group bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />
              {/* Category badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-teal-500/90 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-2">
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
