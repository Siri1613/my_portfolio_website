import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white dark:bg-gray-950">
      <SectionHeading
        label="Experience"
        title="Work History"
        subtitle="Professional experience that shaped my engineering mindset and technical expertise."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/60 via-teal-500/20 to-transparent -translate-x-px hidden sm:block" />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-teal-500 ring-4 ring-white dark:ring-gray-950 shadow-lg shadow-teal-500/30" />
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="md:w-1/2 sm:pl-8 md:pl-0 group">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold">{exp.company}</p>
                    </div>
                    <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'full-time'
                        ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400'
                        : 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400'
                    }`}>
                      {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-500" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
