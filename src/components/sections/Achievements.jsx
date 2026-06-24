import { motion }              from 'framer-motion';
import {
  Trophy, Code2, Target,
  Award, Star, TrendingUp,
  ExternalLink,
}                              from 'lucide-react';
import { SiLeetcode,
         SiCodeforces }        from 'react-icons/si';
import { achievements }        from '../../data/achievements';
import SectionHeader           from '../ui/SectionHeader';

// ─── CARD VARIANTS ────────────────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:    i * 0.1,
      duration: 0.5,
      ease:     [0.16, 1, 0.3, 1],
    },
  }),
};

// ─── COLOR MAP ────────────────────────────────────────────────────────────────
// Maps color strings from data file to Tailwind classes
const COLOR = {
  amber: {
    badge:   'border-amber-500/30  bg-amber-500/10  text-amber-400',
    icon:    'text-amber-400',
    ring:    'ring-amber-500/20',
    glow:    'bg-amber-500/5',
    border:  'hover:border-amber-500/25',
    tag:     'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  cyan: {
    badge:   'border-cyan-500/30   bg-cyan-500/10   text-cyan-400',
    icon:    'text-cyan-400',
    ring:    'ring-cyan-500/20',
    glow:    'bg-cyan-500/5',
    border:  'hover:border-cyan-500/25',
    tag:     'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  purple: {
    badge:   'border-purple-500/30 bg-purple-500/10 text-purple-400',
    icon:    'text-purple-400',
    ring:    'ring-purple-500/20',
    glow:    'bg-purple-500/5',
    border:  'hover:border-purple-500/25',
    tag:     'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  emerald: {
    badge:   'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    icon:    'text-emerald-400',
    ring:    'ring-emerald-500/20',
    glow:    'bg-emerald-500/5',
    border:  'hover:border-emerald-500/25',
    tag:     'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  rose: {
    badge:   'border-rose-500/30   bg-rose-500/10   text-rose-400',
    icon:    'text-rose-400',
    ring:    'ring-rose-500/20',
    glow:    'bg-rose-500/5',
    border:  'hover:border-rose-500/25',
    tag:     'bg-rose-500/10 text-rose-400 border-rose-500/20',
  },
};

// ─── ICON MAP ─────────────────────────────────────────────────────────────────
const ICON = {
  'goldman-sachs':  <Trophy    size={22} />,
  'leetcode-rating': <SiLeetcode size={20} />,
  'leetcode-rank':  <Target    size={22} />,
  'problems-solved': <SiCodeforces size={20} />,
  'jee':            <Award     size={22} />,
};

// ─── QUICK STATS BAR DATA ─────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value:    '663',
    label:    'GS Hackathon',
    sublabel: 'out of 16,000',
    color:    'text-amber-400',
  },
  {
    value:    '2061',
    label:    'LeetCode Rating',
    sublabel: 'Top 3% globally',
    color:    'text-cyan-400',
  },
  {
    value:    '1346',
    label:    'Codeforces',
    sublabel: 'Specialist rating',
    color:    'text-purple-400',
  },
  {
    value:    '2000+',
    label:    'Problems Solved',
    sublabel: 'Across platforms',
    color:    'text-emerald-400',
  },
];

// ─── CATEGORY LABELS ──────────────────────────────────────────────────────────
const CATEGORY_LABEL = {
  hackathon:  'Hackathon',
  cp:         'Competitive Programming',
  academic:   'Academic',
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Achievements() {
  // Goldman Sachs card is primary — render it separately at top
  const primary   = achievements.find((a) => a.primary);
  const secondary = achievements.filter((a) => !a.primary);

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative z-10 py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <SectionHeader
          badge="Milestones"
          badgeColor="amber"
          title="Achievements &"
          highlight="Rankings"
          description="Competitive programming milestones and academic
                       achievements that validate engineering fundamentals."
        />

        {/* ── QUICK STATS BAR ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-px
            rounded-2xl overflow-hidden
            border border-white/8
            bg-white/8
            mb-10
          "
          role="list"
          aria-label="Key statistics summary"
        >
          {QUICK_STATS.map((stat, i) => (
            <QuickStat key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>

        {/* ── PRIMARY CARD — Goldman Sachs ───────────────────────────── */}
        {primary && (
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-6"
          >
            <PrimaryCard achievement={primary} />
          </motion.div>
        )}

        {/* ── SECONDARY CARDS ────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondary.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              custom={i + 1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <SecondaryCard achievement={achievement} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── QUICK STAT ───────────────────────────────────────────────────────────────
function QuickStat({ stat, index }) {
  return (
    <div
      role="listitem"
      className="
        bg-white/[0.02] hover:bg-white/[0.04]
        transition-colors duration-200
        px-6 py-5
        flex flex-col gap-1
      "
      aria-label={`${stat.label}: ${stat.value}, ${stat.sublabel}`}
    >
      <p className={`font-black text-2xl md:text-3xl font-mono ${stat.color}`}>
        {stat.value}
      </p>
      <p className="text-white text-xs font-semibold">{stat.label}</p>
      <p className="text-gray-500 text-[11px]">{stat.sublabel}</p>
    </div>
  );
}

// ─── PRIMARY CARD — Goldman Sachs Hackathon ───────────────────────────────────
function PrimaryCard({ achievement }) {
  const c = COLOR[achievement.color] ?? COLOR.amber;

  return (
    <article
      className={`
        relative overflow-hidden
        rounded-2xl border border-white/8
        bg-white/[0.02] ${c.border}
        hover:bg-white/[0.04]
        transition-all duration-300
        p-8 md:p-10
      `}
      aria-label={`${achievement.title} — ${achievement.subtitle}`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent
                   via-amber-400/60 to-transparent"
        aria-hidden="true"
      />

      {/* Background glow — very subtle */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(245,158,11,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col lg:flex-row
                      lg:items-center gap-8">

        {/* Icon */}
        <div
          className={`
            flex-shrink-0
            w-16 h-16 rounded-2xl
            border border-amber-500/25 bg-amber-500/10
            flex items-center justify-center
            ${c.icon}
          `}
          aria-hidden="true"
        >
          <Trophy size={28} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          {/* Category + highlight row */}
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <span
              className={`
                text-xs font-mono uppercase tracking-widest
                px-3 py-1 rounded-full border
                ${c.tag}
              `}
            >
              {CATEGORY_LABEL[achievement.category]}
            </span>

            <span
              className={`
                text-xs font-bold px-3 py-1 rounded-full border
                ${c.tag}
              `}
            >
              {achievement.highlight}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-black text-2xl md:text-3xl
                         leading-tight tracking-tight mb-1.5">
            {achievement.title}
          </h3>

          {/* Subtitle */}
          <p className={`font-mono text-sm mb-3 ${c.icon}`}>
            {achievement.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-[15px] max-w-2xl">
            {achievement.description}
          </p>

        </div>

        {/* Right — large rank display */}
        <div
          className="flex-shrink-0 text-right hidden md:block"
          aria-hidden="true"
        >
          <p className="font-black text-6xl lg:text-7xl font-mono
                        text-amber-400/20 leading-none select-none">
            #663
          </p>
          <p className="text-gray-600 text-xs mt-1 font-mono">
            out of 16,000
          </p>
        </div>

      </div>
    </article>
  );
}

// ─── SECONDARY CARD ───────────────────────────────────────────────────────────
function SecondaryCard({ achievement }) {
  const c = COLOR[achievement.color] ?? COLOR.cyan;

  return (
    <article
      className={`
        group relative h-full
        rounded-2xl border border-white/8
        bg-white/[0.02] ${c.border}
        hover:bg-white/[0.04]
        transition-all duration-300
        overflow-hidden
        p-6
        flex flex-col gap-4
      `}
      aria-label={`${achievement.title} — ${achievement.subtitle}`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent
                   via-white/15 to-transparent
                   group-hover:via-white/25
                   transition-all duration-300"
        aria-hidden="true"
      />

      {/* Icon + category row */}
      <div className="flex items-start justify-between gap-3">

        <div
          className={`
            w-11 h-11 rounded-xl
            border border-white/10
            flex items-center justify-center
            flex-shrink-0
            ${c.icon}
            ${c.glow}
          `}
          aria-hidden="true"
        >
          {ICON[achievement.id] ?? <Star size={18} />}
        </div>

        <span
          className={`
            text-[10px] font-mono uppercase tracking-widest
            px-2.5 py-1 rounded-full border flex-shrink-0
            ${c.tag}
          `}
        >
          {CATEGORY_LABEL[achievement.category]}
        </span>

      </div>

      {/* Title */}
      <div>
        <h3 className="text-white font-bold text-lg leading-tight mb-1">
          {achievement.title}
        </h3>
        <p className={`text-xs font-mono ${c.icon}`}>
          {achievement.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {achievement.description}
      </p>

      {/* Highlight badge */}
      <div>
        <span
          className={`
            inline-flex items-center gap-1.5
            text-xs font-bold
            px-3 py-1.5 rounded-full border
            ${c.tag}
          `}
          aria-label={`Highlight: ${achievement.highlight}`}
        >
          <TrendingUp size={11} aria-hidden="true" />
          {achievement.highlight}
        </span>
      </div>

    </article>
  );
}