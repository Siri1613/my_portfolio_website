import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { education } from '../data/portfolioData';

const degreeColors = [
  'from-teal-500 to-cyan-500',
  'from-blue-500 to-teal-500',
  'from-cyan-500 to-blue-500',
];

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-white dark:bg-gray-950">
      <SectionHeading
        label="Education"
        title="Academic Background"
        subtitle="A strong academic foundation complemented by practical engineering projects."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/60 via-teal-500/20 to-transparent hidden sm:block" />

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="relative flex gap-6 sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-6 top-5 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-teal-500 ring-4 ring-white dark:ring-gray-950 shadow-lg shadow-teal-500/30" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 transition-colors group">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${degreeColors[idx]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-0.5">
                      {edu.degree}
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold mb-2">{edu.institution}</p>
                    {edu.field && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{edu.field}</p>
                    )}

                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-teal-500" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                        <Award className="w-3.5 h-3.5" />
                        GPA: {edu.gpa}
                      </span>
                    </div>
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
