import { useEffect, useRef, useState } from 'react';
import { motion }                       from 'framer-motion';
import { FileText, ArrowDown }          from 'lucide-react';
import { FaGithub, FaLinkedin }         from 'react-icons/fa';
import { SiLeetcode, SiCodeforces }     from 'react-icons/si';
import { siteConfig }                   from '../../data/siteConfig';
import { useCounter }                   from '../../hooks/useCounter';
import profilePic                       from '../../assets/gopal3.png';
// ─── ANIMATION CONFIG ─────────────────────────────────────────────────────────
// All timings in one place — easy to tune
const ANIM = {
  ease:   [0.16, 1, 0.3, 1],
  badge:  { delay: 0,    duration: 0.5 },
  name:   { delay: 0.1,  duration: 0.7 },
  role:   { delay: 0.22, duration: 0.5 },
  desc:   { delay: 0.32, duration: 0.5 },
  stats:  { delay: 0.44, duration: 0.4 },
  ctas:   { delay: 0.54, duration: 0.4 },
  social: { delay: 0.64, duration: 0.4 },
  image:  { delay: 0.15, duration: 0.9 },
};


// ─── STAT DATA ────────────────────────────────────────────────────────────────
const STATS = [
  {
    target:   2000,
    suffix:   '+',
    label:    'Problems Solved',
    sublabel: 'LeetCode + CF',
    color:    'text-cyan-400',
    border:   'border-cyan-500/20',
    bg:       'bg-cyan-500/5',
    delay:    0,
  },
  {
    target:   2061,
    suffix:   '',
    label:    'LeetCode Rating',
    sublabel: 'Top 3% globally',
    color:    'text-violet-400',
    border:   'border-violet-500/20',
    bg:       'bg-violet-500/5',
    delay:    120,
  },
  {
    target:   1346,
    suffix:   '',
    label:    'Codeforces',
    sublabel: 'Specialist',
    color:    'text-amber-400',
    border:   'border-amber-500/20',
    bg:       'bg-amber-500/5',
    delay:    240,
  },
  {
    target:   663,
    suffix:   '',
    label:    'GS Hackathon Rank',
    sublabel: 'out of 16,000',
    color:    'text-emerald-400',
    border:   'border-emerald-500/20',
    bg:       'bg-emerald-500/5',
    delay:    360,
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Trigger counters when stats row enters viewport
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="
        relative z-10 min-h-screen
        flex items-center
        px-5 md:px-10 lg:px-16
        pt-20 pb-16
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT — TEXT CONTENT ────────────────────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIM.badge.delay, duration: ANIM.badge.duration, ease: ANIM.ease }}
            >
              <Badge />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIM.name.delay, duration: ANIM.name.duration, ease: ANIM.ease }}
              className="
                mt-7
                font-black leading-[0.9] tracking-tight
                text-[clamp(3rem,8vw,5.5rem)]
              "
            >
              <span className="text-white">Gopal</span>
              <br />
              <span className="gradient-text">Maheshwari</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIM.role.delay, duration: ANIM.role.duration, ease: ANIM.ease }}
              className="
                mt-5
                text-gray-300 font-medium
                text-lg md:text-xl
                flex items-center gap-3 flex-wrap
              "
            >
              <span>Software Engineer</span>
              <span className="w-1 h-1 rounded-full bg-white/25" aria-hidden="true" />
              <span>Full Stack Developer</span>
              <span className="w-1 h-1 rounded-full bg-white/25" aria-hidden="true" />
              <span className="text-cyan-400 font-mono text-base">MERN</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: ANIM.desc.delay, duration: ANIM.desc.duration, ease: ANIM.ease }}
              className="
                mt-6
                text-gray-400 leading-relaxed
                text-base md:text-[17px]
                max-w-lg
              "
            >
              CS undergrad at{' '}
              <span className="text-white font-medium">MNNIT Allahabad</span>{' '}
              building production-grade full-stack systems with React,
              Node.js, and MongoDB. Strong DSA foundation — 2000+ problems
              solved across platforms.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIM.stats.delay, duration: ANIM.stats.duration, ease: ANIM.ease }}
              className="
                mt-10
                grid grid-cols-2 sm:grid-cols-4
                gap-3
              "
              aria-label="Key statistics"
            >
              {STATS.map((stat) => (
                <StatCard
                  key={stat.label}
                  {...stat}
                  shouldStart={statsVisible}
                />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIM.ctas.delay, duration: ANIM.ctas.duration, ease: ANIM.ease }}
              className="mt-10 flex flex-wrap gap-3 pointer-events-auto"
            >
              {/* PRIMARY — Resume download */}
              <motion.a
                href={siteConfig.resume}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex items-center gap-2.5
                  px-6 py-3 rounded-full
                  bg-white text-black
                  font-semibold text-sm
                  hover:bg-gray-100
                  transition-colors duration-150
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#020010]
                "
                aria-label="Download resume as PDF"
              >
                <FileText size={15} aria-hidden="true" />
                Download Resume
              </motion.a>

              {/* SECONDARY — View Projects */}
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center gap-2.5
                  px-6 py-3 rounded-full
                  border border-white/15
                  text-white font-semibold text-sm
                  hover:border-cyan-400/50 hover:bg-cyan-500/5
                  transition-all duration-150
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-cyan-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#020010]
                "
                aria-label="View my projects"
              >
                View Projects
                <ArrowDown size={14} aria-hidden="true" />
              </motion.a>

              {/* GHOST — GitHub */}
              <motion.a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center gap-2.5
                  px-6 py-3 rounded-full
                  border border-white/10
                  text-gray-300 font-semibold text-sm
                  hover:text-white hover:border-white/25
                  transition-all duration-150
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white/50
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#020010]
                "
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <FaGithub size={15} aria-hidden="true" />
                GitHub
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: ANIM.social.delay, duration: ANIM.social.duration }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                Also on
              </span>

              <div className="flex items-center gap-2" role="list" aria-label="Social profiles">
                <SocialIcon
                  href={siteConfig.social.linkedin}
                  label="LinkedIn profile"
                  icon={<FaLinkedin size={15} />}
                />
                <SocialIcon
                  href={siteConfig.social.leetcode}
                  label="LeetCode profile"
                  icon={<SiLeetcode size={15} />}
                />
                <SocialIcon
                  href={siteConfig.social.codeforces}
                  label="Codeforces profile"
                  icon={<SiCodeforces size={15} />}
                />
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT — PROFILE IMAGE ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: ANIM.image.delay, duration: ANIM.image.duration, ease: ANIM.ease }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end items-center"
            aria-hidden="true"
          >
            <ImageFrame />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — subtle, fades out on scroll */}
      <ScrollHint />
    </section>
  );
}

// ─── BADGE ────────────────────────────────────────────────────────────────────
function Badge() {
  return (
    <div
      className="
        inline-flex items-center gap-2.5
        px-4 py-2 rounded-full
        border border-amber-500/25 bg-amber-500/8
      "
      role="note"
      aria-label="Institution and achievement"
    >
      {/* Live dot */}
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span
          className="
            animate-ping absolute inline-flex h-full w-full
            rounded-full bg-amber-400 opacity-60
          "
        />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
      </span>

      <span className="text-amber-300 text-sm font-medium">
        MNNIT Allahabad
      </span>
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ target, suffix, label, sublabel, color, border, bg, shouldStart }) {
  const count = useCounter(target, 1800, shouldStart);

  return (
    <div
      className={`
        rounded-2xl border ${border} ${bg}
        p-4 flex flex-col gap-1
        backdrop-blur-sm
      `}
      role="text"
      aria-label={`${label}: ${target}${suffix}`}
    >
      <p className={`font-black text-2xl md:text-3xl font-mono ${color} leading-none`}>
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-white/80 text-xs font-semibold leading-tight">
        {label}
      </p>
      <p className="text-gray-500 text-[11px] leading-tight">
        {sublabel}
      </p>
    </div>
  );
}

// ─── IMAGE FRAME ─────────────────────────────────────────────────────────────
function ImageFrame() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer glow — scaled up */}
      <div
        className="
          absolute rounded-full
          w-[300px] h-[300px]         // was 260
          sm:w-[400px] sm:h-[400px]   // was 320
          lg:w-[500px] lg:h-[500px]   // was 400
          bg-cyan-500/15
          blur-[100px]                // was 80
        "
        aria-hidden="true"
      />

      {/* Rotating ring — scaled up */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="
          absolute rounded-full
          border border-dashed border-cyan-500/15
          w-[320px] h-[320px]        // was 290
          sm:w-[440px] sm:h-[440px]  // was 360
          lg:w-[540px] lg:h-[540px]  // was 440
        "
        aria-hidden="true"
      />

      {/* Static ring — scaled up */}
      <div
        className="
          absolute rounded-full
          border border-white/5
          w-[300px] h-[300px]        // was 270
          sm:w-[420px] sm:h-[420px]  // was 340
          lg:w-[520px] lg:h-[520px]  // was 420
        "
        aria-hidden="true"
      />

      {/* Profile image — BIGGER */}
      <img
        src={profilePic}
        alt="Gopal Maheshwari — Software Engineer"
        width={500}
        height={500}
        loading="eager"
        decoding="async"
        className="
          relative z-10 object-cover object-top
          rounded-full
          border-2 border-white/10
          w-[250px] h-[250px]        // was 220
          sm:w-[340px] sm:h-[340px]  // was 280
          lg:w-[440px] lg:h-[440px]  // was 360
          drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        "
      />

      {/* Floating badges – reposition slightly to accommodate larger image */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="
          absolute top-4 -right-2 sm:right-4 lg:right-0
          flex items-center gap-2
          px-3 py-2 rounded-xl
          bg-[#020010]/90 border border-violet-500/30
          backdrop-blur-xl
          shadow-[0_4px_24px_rgba(0,0,0,0.5)]
        "
        aria-hidden="true"
      >
        <SiLeetcode size={14} className="text-violet-400" />
        <div>
          <p className="text-white text-xs font-bold leading-none">2061</p>
          <p className="text-gray-500 text-[10px] mt-0.5">LeetCode</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="
          absolute bottom-6 -left-2 sm:left-4 lg:left-0
          flex items-center gap-2
          px-3 py-2 rounded-xl
          bg-[#020010]/90 border border-amber-500/30
          backdrop-blur-xl
          shadow-[0_4px_24px_rgba(0,0,0,0.5)]
          z-10
        "
        aria-hidden="true"
      >
        <span className="text-amber-400 text-xs">🏆</span>
        <div>
          <p className="text-white text-xs font-bold leading-none">#663</p>
          <p className="text-gray-500 text-[10px] mt-0.5">GS Hackathon</p>
        </div>
      </motion.div>

    </div>
  );
}

// ─── SOCIAL ICON ─────────────────────────────────────────────────────────────
function SocialIcon({ href, label, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="listitem"
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="
        w-9 h-9 rounded-full
        border border-white/10 bg-white/5
        flex items-center justify-center
        text-gray-400 hover:text-white
        hover:border-white/25 hover:bg-white/10
        transition-colors duration-150
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-cyan-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#020010]
      "
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

// ─── SCROLL HINT ─────────────────────────────────────────────────────────────
function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="
        absolute bottom-8 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2
        pointer-events-none
      "
      aria-hidden="true"
    >
      <span className="text-gray-600 text-xs font-mono tracking-widest uppercase">
        scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
      />
    </motion.div>
  );
}