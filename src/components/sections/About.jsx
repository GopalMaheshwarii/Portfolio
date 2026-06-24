import { motion }       from 'framer-motion';
import {
  Code2, Layers,
  Brain, ArrowRight,
}                       from 'lucide-react';
import { SiLeetcode,
         SiCodeforces } from 'react-icons/si';
import { siteConfig }   from '../../data/siteConfig';
import SectionHeader    from '../ui/SectionHeader';

// ─── CARD VARIANTS ────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

// ─── WHAT I BRING cards ───────────────────────────────────────────────────────
const PILLARS = [
  {
    icon:  <Brain size={18} />,
    title: 'DSA-First Thinking',
    desc:  'Every engineering decision is backed by algorithmic reasoning — complexity, edge cases, optimal data structures.',
    color: 'text-cyan-400',
    bg:    'bg-cyan-500/8 border-cyan-500/20',
  },
  {
    icon:  <Layers size={18} />,
    title: 'Full Stack Ownership',
    desc:  'I own projects end-to-end — database schema, API design, authentication, frontend, and deployment.',
    color: 'text-purple-400',
    bg:    'bg-purple-500/8 border-purple-500/20',
  },
  {
    icon:  <Code2 size={18} />,
    title: 'Production Engineering',
    desc:  'Projects integrate real-world concerns — Redis session management, Cloudinary pipelines, sandboxed code execution.',
    color: 'text-emerald-400',
    bg:    'bg-emerald-500/8 border-emerald-500/20',
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          badge="About Me"
          badgeColor="emerald"
          title="The Engineer"
          highlight="Behind the Code"
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT — TEXT ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">

            <motion.p
              {...fadeUp(0)}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I am a Computer Science undergrad at{' '}
              <span className="text-white font-semibold">
                MNNIT Allahabad
              </span>{' '}
              who builds full-stack systems end-to-end — from database
              schema and REST API design to React interfaces and deployment.
            </motion.p>

            <motion.p
              {...fadeUp(0.08)}
              className="text-gray-400 leading-relaxed"
            >
              My projects are not tutorials.{' '}
              <span className="text-white font-medium">AlgoArena</span>{' '}
              integrates Judge0, Redis, and Gemini AI into a real coding
              platform.{' '}
              <span className="text-white font-medium">WanderLust</span>{' '}
              handles auth pipelines, image processing, and admin
              workflows at a production level.
            </motion.p>

            <motion.p
              {...fadeUp(0.16)}
              className="text-gray-400 leading-relaxed"
            >
              What separates my engineering approach is a foundation in
              competitive programming —{' '}
              <span className="text-white font-medium">
                2000+ problems solved
              </span>
              , LeetCode 2061, Codeforces 1346. I do not just make
              features work. I think about why they should work a
              certain way, what breaks them at scale, and how to write
              them so the next engineer can understand them immediately.
            </motion.p>

            {/* Currently section */}
            <motion.div
              {...fadeUp(0.24)}
              className="
                rounded-2xl border border-white/8
                bg-white/[0.02] p-5
                flex flex-col gap-3
              "
            >
              <p className="text-gray-500 text-xs font-mono uppercase
                            tracking-widest">
                Currently
              </p>

              <div className="flex flex-col gap-2.5">
                <InfoRow
                  label="Studying"
                  value="B.Tech CSE — MNNIT Allahabad (2023–2027)"
                />
                <InfoRow
                  label="CGPA"
                  value={`${siteConfig.cgpa} / 10.0`}
                />
                <InfoRow
                  label="Looking for"
                  value={siteConfig.availableFor}
                  highlight
                />
                <InfoRow
                  label="Building"
                  value="AlgoArena — competitive coding platform"
                />
              </div>
            </motion.div>

            {/* CP profiles */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap gap-3"
            >
              <ProfileLink
                href={siteConfig.social.leetcode}
                icon={<SiLeetcode size={14} />}
                label="LeetCode"
                value="Rating 2061"
                color="text-yellow-400 border-yellow-500/20 bg-yellow-500/5
                       hover:border-yellow-500/40"
              />
              <ProfileLink
                href={siteConfig.social.codeforces}
                icon={<SiCodeforces size={14} />}
                label="Codeforces"
                value="Rating 1346"
                color="text-blue-400 border-blue-500/20 bg-blue-500/5
                       hover:border-blue-500/40"
              />
            </motion.div>

          </div>

          {/* ── RIGHT — PILLARS ──────────────────────────────────────── */}
          <div className="flex flex-col gap-4">

            <motion.p
              {...fadeUp(0)}
              className="text-gray-500 text-xs font-mono uppercase
                         tracking-widest mb-2"
            >
              What I bring to a team
            </motion.p>

            {PILLARS.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                {...fadeUp(i * 0.1)}
                className={`
                  rounded-2xl border p-5
                  flex gap-4 items-start
                  ${pillar.bg}
                  transition-colors duration-200
                `}
                aria-label={pillar.title}
              >
                <div
                  className={`
                    flex-shrink-0 w-9 h-9 rounded-xl
                    bg-black/30 border border-white/10
                    flex items-center justify-center
                    ${pillar.color}
                  `}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.article>
            ))}

            {/* OrionAI experience */}
            <motion.div
              {...fadeUp(0.35)}
              className="
                mt-2 rounded-2xl border border-white/8
                bg-white/[0.02] p-5
              "
            >
              <p className="text-gray-500 text-xs font-mono uppercase
                            tracking-widest mb-3">
                Experience
              </p>
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl bg-purple-500/10
                              border border-purple-500/20
                              flex items-center justify-center
                              flex-shrink-0"
                  aria-hidden="true"
                >
                  <Code2 size={16} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Lead — Social Department
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    OrionAI · College Startup
                  </p>
                  <p className="text-gray-600 text-xs mt-0.5 font-mono">
                    Jan 2024 – Mar 2024
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── INFO ROW ─────────────────────────────────────────────────────────────────
function InfoRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="text-gray-600 w-24 flex-shrink-0 font-mono text-xs
                       mt-0.5">
        {label}
      </span>
      <span className={highlight
        ? 'text-cyan-400 font-semibold'
        : 'text-gray-300'
      }>
        {value}
      </span>
    </div>
  );
}

// ─── PROFILE LINK ─────────────────────────────────────────────────────────────
function ProfileLink({ href, icon, label, value, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2.5
        px-4 py-2.5 rounded-xl
        border text-sm font-medium
        transition-all duration-150
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-cyan-400
        ${color}
      `}
      aria-label={`${label} profile — ${value}`}
    >
      {icon}
      <span>{label}</span>
      <span className="opacity-60 text-xs">·</span>
      <span className="font-bold">{value}</span>
      <ArrowRight size={12} aria-hidden="true" />
    </a>
  );
}