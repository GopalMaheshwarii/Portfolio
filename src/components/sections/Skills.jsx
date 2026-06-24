import { motion }         from 'framer-motion';
import {
  Cpu, Monitor, Server,
  Database, Wrench, BookOpen,
}                         from 'lucide-react';
import { skillCategories } from '../../data/skills';
import SectionHeader       from '../ui/SectionHeader';

// ─── CARD VARIANTS ────────────────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:    i * 0.08,
      duration: 0.5,
      ease:     [0.16, 1, 0.3, 1],
    },
  }),
};

// ─── ICON MAP ─────────────────────────────────────────────────────────────────
const ICON = {
  cpu:      <Cpu      size={18} />,
  monitor:  <Monitor  size={18} />,
  server:   <Server   size={18} />,
  database: <Database size={18} />,
  wrench:   <Wrench   size={18} />,
  book:     <BookOpen size={18} />,
};

// ─── COLOR MAP ────────────────────────────────────────────────────────────────
const COLOR = {
  cyan:    {
    icon:   'text-cyan-400',
    border: 'border-cyan-500/20',
    bg:     'bg-cyan-500/8',
    tag:    'bg-cyan-500/8 border-cyan-500/15 text-cyan-300',
    hover:  'hover:border-cyan-500/30',
  },
  purple:  {
    icon:   'text-purple-400',
    border: 'border-purple-500/20',
    bg:     'bg-purple-500/8',
    tag:    'bg-purple-500/8 border-purple-500/15 text-purple-300',
    hover:  'hover:border-purple-500/30',
  },
  emerald: {
    icon:   'text-emerald-400',
    border: 'border-emerald-500/20',
    bg:     'bg-emerald-500/8',
    tag:    'bg-emerald-500/8 border-emerald-500/15 text-emerald-300',
    hover:  'hover:border-emerald-500/30',
  },
  amber:   {
    icon:   'text-amber-400',
    border: 'border-amber-500/20',
    bg:     'bg-amber-500/8',
    tag:    'bg-amber-500/8 border-amber-500/15 text-amber-300',
    hover:  'hover:border-amber-500/30',
  },
  rose:    {
    icon:   'text-rose-400',
    border: 'border-rose-500/20',
    bg:     'bg-rose-500/8',
    tag:    'bg-rose-500/8 border-rose-500/15 text-rose-300',
    hover:  'hover:border-rose-500/30',
  },
  blue:    {
    icon:   'text-blue-400',
    border: 'border-blue-500/20',
    bg:     'bg-blue-500/8',
    tag:    'bg-blue-500/8 border-blue-500/15 text-blue-300',
    hover:  'hover:border-blue-500/30',
  },
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative z-10 py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <SectionHeader
          badge="Tech Stack"
          badgeColor="cyan"
          title="Skills &"
          highlight="Expertise"
          description="Technologies I use to build full-stack systems —
                       applied in real projects, not just listed."
        />

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-10 font-mono"
        >
          * CS Fundamentals applied in competitive programming
          and system design coursework
        </motion.p>

      </div>
    </section>
  );
}

// ─── SKILL CARD ───────────────────────────────────────────────────────────────
function SkillCard({ category }) {
  const c = COLOR[category.color] ?? COLOR.cyan;

  return (
    <article
      className={`
        group h-full
        rounded-2xl border border-white/8
        bg-white/[0.02] hover:bg-white/[0.04]
        ${c.hover}
        transition-all duration-300
        overflow-hidden
        p-6
        flex flex-col gap-5
      `}
      aria-label={`${category.title} skills`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">

        {/* Icon */}
        <div
          className={`
            w-10 h-10 rounded-xl
            border ${c.border} ${c.bg}
            flex items-center justify-center
            flex-shrink-0 ${c.icon}
          `}
          aria-hidden="true"
        >
          {ICON[category.icon] ?? <Cpu size={18} />}
        </div>

        {/* Title + count */}
        <div>
          <h3 className="text-white font-bold text-base leading-tight">
            {category.title}
          </h3>
          <p className="text-gray-500 text-xs mt-0.5">
            {category.skills.length} technologies
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" aria-hidden="true" />

      {/* Skill tags */}
      <div
        className="flex flex-wrap gap-2 flex-1"
        role="list"
        aria-label={`${category.title} technologies`}
      >
        {category.skills.map((skill) => (
          <span
            key={skill}
            role="listitem"
            className={`
              px-3 py-1.5 rounded-lg
              border text-xs font-medium
              transition-colors duration-150
              ${c.tag}
            `}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Used in */}
      <div className="pt-1 border-t border-white/5">
        <p className="text-gray-600 text-[11px] font-mono">
          Used in:{' '}
          <span className="text-gray-500">
            {category.usedIn.join(' · ')}
          </span>
        </p>
      </div>

    </article>
  );
}