import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: Props) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 rounded-full mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
