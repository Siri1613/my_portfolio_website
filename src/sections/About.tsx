import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe2, Briefcase, GraduationCap, Zap } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { personalInfo, softSkills } from '../data/portfolioData';

const stats = [
  { label: 'Years Experience', value: '1+', icon: Briefcase },
  { label: 'Projects Built', value: '4+', icon: Zap },
  { label: 'CGPA', value: '9.07', icon: GraduationCap },
  { label: 'Languages', value: '3', icon: Globe2 },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-950">
      <SectionHeading
        label="About Me"
        title="Passionate About Crafting Great UX"
        subtitle="A frontend developer who loves turning complex requirements into elegant, performant user experiences."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Avatar card */}
          <div className="relative">
            <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 p-0.5 shadow-2xl shadow-teal-500/20">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional workspace"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Open to Work</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 pt-6">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              I am a <span className="text-teal-600 dark:text-teal-400 font-semibold">Frontend Developer</span> currently working at{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Kshema General Insurance</span>, a product-based
              crop insurance company, where I contribute to scalable web and mobile applications. I hold a B.Tech in ECE from{' '}
              <span className="font-semibold text-gray-900 dark:text-white">KL University</span> with a CGPA of 9.07.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Previously interned at <span className="font-semibold text-gray-900 dark:text-white">Microsoft India</span>,
              where I built a custom Edge browser plugin for enterprise-level URL tracking and Office 365 integration —
              an experience that sharpened my skills in performance optimization and secure data handling.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              I am passionate about building applications that are fast, accessible, and delightful to use. My goal is to join
              a forward-thinking team where I can grow as an engineer while making meaningful product contributions.
            </p>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: MapPin, value: personalInfo.location },
              { icon: Mail, value: personalInfo.email },
              { icon: Phone, value: personalInfo.phone },
              { icon: Globe2, value: personalInfo.languages.join(', ') },
            ].map(({ icon: Icon, value }) => (
              <div key={value} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Icon className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span className="truncate">{value}</span>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-widest mb-3">
              Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
