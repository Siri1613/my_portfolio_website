import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { skillCategories } from '../data/portfolioData';

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 relative"
        >
          <div className="absolute inset-0 bg-white/20 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

const categoryColors: Record<string, string> = {
  Frontend: 'from-teal-500 to-cyan-500',
  Mobile: 'from-blue-500 to-cyan-400',
  Programming: 'from-violet-500 to-blue-500',
  'Tools & Platforms': 'from-orange-400 to-amber-400',
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900">
      <SectionHeading
        label="Skills"
        title="Technologies & Tools"
        subtitle="A curated set of technologies I use to build fast, scalable, and user-friendly products."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: catIdx * 0.1 }}
            className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 transition-colors"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${categoryColors[category.name] ?? 'from-teal-500 to-cyan-500'}`} />
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{category.name}</h3>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIdx * 0.1 + skillIdx * 0.07}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech pill cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-2.5"
      >
        {skillCategories.flatMap((c) => c.skills).map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-500/5 transition-all cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
