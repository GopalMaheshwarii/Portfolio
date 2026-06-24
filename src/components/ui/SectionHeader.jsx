import { motion } from 'framer-motion';
import SectionBadge from './SectionBadge';

export default function SectionHeader({
  badge,
  badgeColor = 'cyan',
  title,
  highlight,
  description,
  align = 'center',
}) {
  const alignment = align === 'left'
    ? 'text-left items-start'
    : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
      className={`flex flex-col gap-4 mb-16 ${alignment}`}
    >
      {badge && (
        <SectionBadge color={badgeColor}>{badge}</SectionBadge>
      )}

      <h2 className="text-white font-black text-4xl md:text-5xl leading-tight
                     tracking-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}