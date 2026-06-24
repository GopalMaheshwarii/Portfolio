import { motion }     from 'framer-motion';
import {
  GraduationCap,
  Calendar, Award,
  CheckCircle2, Clock,
}                     from 'lucide-react';
import SectionHeader  from '../ui/SectionHeader';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    id:          'mnnit',
    institution: 'MNNIT Allahabad',
    full:        'Motilal Nehru National Institute of Technology Allahabad',
    degree:      'B.Tech — Computer Science & Engineering',
    period:      '2023 – 2027',
    score:       'CPI: 8.02 / 10',
    status:      'ongoing',
    highlight:   'Tier-1 NIT',
    color:       'cyan',
  },
  {
    id:          'stmary',
    institution: "St Mary's School",
    full:        'Intermediate · Class XII · CBSE',
    degree:      'Senior Secondary Education',
    period:      '2022 – 2023',
    score:       '84.6%',
    status:      'completed',
    highlight:   'CBSE Board',
    color:       'purple',
  },
  {
    id:          'dav',
    institution: 'DAV Public School',
    full:        'High School · Class X · CBSE',
    degree:      'Secondary Education',
    period:      '2020 – 2021',
    score:       '88.33%',
    status:      'completed',
    highlight:   'CBSE Board',
    color:       'emerald',
  },
];

// ─── COLOR MAP ────────────────────────────────────────────────────────────────
const COLOR = {
  cyan: {
    icon:   'text-cyan-400',
    border: 'border-cyan-500/25',
    bg:     'bg-cyan-500/8',
    badge:  'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    line:   'via-cyan-400/50',
    score:  'text-cyan-400',
  },
  purple: {
    icon:   'text-purple-400',
    border: 'border-purple-500/25',
    bg:     'bg-purple-500/8',
    badge:  'bg-purple-500/10 text-purple-400 border-purple-500/25',
    line:   'via-purple-400/50',
    score:  'text-purple-400',
  },
  emerald: {
    icon:   'text-emerald-400',
    border: 'border-emerald-500/25',
    bg:     'bg-emerald-500/8',
    badge:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    line:   'via-emerald-400/50',
    score:  'text-emerald-400',
  },
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative z-10 py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          badge="Academic Record"
          badgeColor="amber"
          title="Education &"
          highlight="Qualifications"
          description="Academic background that built the foundation
                       for systems thinking and problem solving."
        />

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line — desktop only */}
          <div
            className="hidden md:block absolute left-[19px] top-3
                       bottom-3 w-px bg-white/8"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  delay:    i * 0.12,
                  duration: 0.5,
                  ease:     [0.16, 1, 0.3, 1],
                }}
              >
                <EducationCard edu={edu} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── EDUCATION CARD ───────────────────────────────────────────────────────────
function EducationCard({ edu }) {
  const c       = COLOR[edu.color] ?? COLOR.cyan;
  const ongoing = edu.status === 'ongoing';

  return (
    <article
      className="flex gap-5 md:gap-7 items-start"
      aria-label={`${edu.institution} — ${edu.degree}`}
    >

      {/* Timeline dot */}
      <div className="flex-shrink-0 flex flex-col items-center mt-1 hidden md:flex">
        <div
          className={`
            w-10 h-10 rounded-full
            border-2 ${c.border} ${c.bg}
            flex items-center justify-center
            ${c.icon}
            relative z-10
          `}
          aria-hidden="true"
        >
          {ongoing
            ? <Clock size={16} />
            : <CheckCircle2 size={16} />
          }
        </div>
      </div>

      {/* Card */}
      <div
        className={`
          flex-1
          rounded-2xl border border-white/8
          bg-white/[0.02] hover:bg-white/[0.04]
          hover:border-white/15
          transition-all duration-300
          overflow-hidden
          relative
        `}
      >
        {/* Top accent line */}
        <div
          className={`
            absolute top-0 left-0 right-0 h-px
            bg-gradient-to-r from-transparent
            ${c.line} to-transparent
          `}
          aria-hidden="true"
        />

        <div className="p-6 md:p-7">
          <div className="flex flex-col sm:flex-row sm:items-start
                          sm:justify-between gap-4">

            {/* Left — main info */}
            <div className="flex-1 min-w-0">

              {/* Status + period */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                {ongoing && (
                  <span
                    className="inline-flex items-center gap-1.5
                               text-[10px] font-mono uppercase tracking-widest
                               px-2.5 py-1 rounded-full
                               border border-cyan-500/30 bg-cyan-500/10
                               text-cyan-400"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400
                                 animate-pulse"
                      aria-hidden="true"
                    />
                    In Progress
                  </span>
                )}

                <span
                  className="inline-flex items-center gap-1.5
                             text-xs text-gray-500 font-mono"
                >
                  <Calendar size={11} aria-hidden="true" />
                  {edu.period}
                </span>
              </div>

              {/* Institution */}
              <h3 className="text-white font-bold text-xl leading-tight mb-1">
                {edu.institution}
              </h3>

              {/* Full name */}
              <p className="text-gray-500 text-sm mb-2">
                {edu.full}
              </p>

              {/* Degree */}
              <p className="text-gray-300 text-sm font-medium flex
                            items-center gap-2">
                <GraduationCap
                  size={14}
                  className={c.icon}
                  aria-hidden="true"
                />
                {edu.degree}
              </p>

            </div>

            {/* Right — score */}
            <div className="flex-shrink-0 flex flex-col items-start
                            sm:items-end gap-2">

              <div
                className={`
                  px-4 py-3 rounded-xl
                  border ${c.border} ${c.bg}
                  text-center sm:text-right
                `}
              >
                <p className="text-gray-500 text-[10px] font-mono
                              uppercase tracking-widest mb-1">
                  Score
                </p>
                <p className={`font-black text-xl font-mono ${c.score}`}>
                  {edu.score}
                </p>
              </div>

              <span
                className={`
                  text-xs px-3 py-1 rounded-full border
                  font-medium ${c.badge}
                `}
              >
                <Award size={10} className="inline mr-1" aria-hidden="true" />
                {edu.highlight}
              </span>

            </div>
          </div>
        </div>
      </div>

    </article>
  );
}