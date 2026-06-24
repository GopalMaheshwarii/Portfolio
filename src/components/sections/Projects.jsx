import { motion }                    from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Star,
}                    from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects }                  from '../../data/projects';
import SectionHeader                 from '../ui/SectionHeader';
import { siteConfig }                from '../../data/siteConfig';

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:    i * 0.12,
      duration: 0.55,
      ease:     [0.16, 1, 0.3, 1],
    },
  }),
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Projects() {
  const featured  = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <SectionHeader
          badge="What I've Built"
          badgeColor="purple"
          title="Featured"
          highlight="Projects"
          description="Production-grade applications demonstrating full-stack
                       engineering — from database design to deployed UI."
        />

        {/* ── FEATURED PROJECT — AlgoArena ───────────────────────────── */}
        {featured[0] && (
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8"
          >
            <FeaturedCard project={featured[0]} />
          </motion.div>
        )}

        {/* ── SECOND FEATURED — WanderLust ───────────────────────────── */}
        {featured[1] && (
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8"
          >
            <FeaturedCard project={featured[1]} flip />
          </motion.div>
        )}

        {/* ── SECONDARY PROJECTS ─────────────────────────────────────── */}
        {secondary.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {secondary.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i + 2}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <SecondaryCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* ── BOTTOM CTA ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center
                     justify-between gap-6
                     px-6 py-5 rounded-2xl
                     border border-white/8 bg-white/[0.02]"
        >
          <div>
            <p className="text-white font-semibold text-sm">
              All projects are open source
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              Full source code, commit history, and documentation on GitHub
            </p>
          </div>

          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-full
              border border-white/15
              text-white text-sm font-semibold
              hover:border-cyan-400/50 hover:bg-cyan-500/5
              transition-all duration-150
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-cyan-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#020010]
            "
            aria-label="View all projects on GitHub (opens in new tab)"
          >
            <FaGithub size={15} aria-hidden="true" />
            View All on GitHub
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

// ─── FEATURED CARD ────────────────────────────────────────────────────────────
// Large card — used for AlgoArena and WanderLust
// `flip` reverses the layout direction for visual variety
function FeaturedCard({ project, flip = false }) {
  return (
    <article
      className="
        group relative
        rounded-2xl border border-white/8
        bg-white/[0.02] hover:bg-white/[0.04]
        hover:border-white/15
        transition-all duration-300
        overflow-hidden
      "
      aria-label={`${project.title} — ${project.tagline}`}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        aria-hidden="true"
      />

      <div
        className={`
          flex flex-col gap-8 p-7 md:p-10
          lg:flex-row lg:items-start lg:gap-12
          ${flip ? 'lg:flex-row-reverse' : ''}
        `}
      >
        {/* ── LEFT / TOP — Main info ─────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Featured badge + title row */}
          <div className="flex items-start gap-4 mb-5 flex-wrap">
            <div className="flex items-center gap-2">
              <Star
                size={13}
                className="text-amber-400 fill-amber-400 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-amber-400 text-xs font-mono
                               tracking-widest uppercase">
                Featured Project
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white font-black text-3xl md:text-4xl
                         leading-tight tracking-tight mb-2">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-cyan-400 font-mono text-sm mb-6">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-[15px] mb-8 max-w-xl">
            {project.description}
          </p>

          {/* Tech stack */}
          <TechStack tech={project.tech} />

          {/* Action links */}
          <div className="flex flex-wrap gap-3 mt-8">
            <ProjectLink
              href={project.github}
              icon={<FaGithub size={14} />}
              label={`View ${project.title} source code on GitHub`}
              variant="ghost"
            >
              Source Code
            </ProjectLink>

            {project.live !== '#' && (
              <ProjectLink
                href={project.live}
                icon={<ExternalLink size={14} />}
                label={`Open ${project.title} live demo`}
                variant="primary"
              >
                Live Demo
              </ProjectLink>
            )}
          </div>

        </div>

        {/* ── RIGHT / BOTTOM — Highlights ────────────────────────────── */}
        {project.highlights?.length > 0 && (
          <div
            className="
              lg:w-72 xl:w-80 flex-shrink-0
              rounded-xl border border-white/8
              bg-white/[0.03] p-6
            "
          >
            <p className="text-gray-500 text-xs font-mono uppercase
                          tracking-widest mb-5">
              Engineering Highlights
            </p>

            <ul className="flex flex-col gap-3.5" role="list">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm"
                >
                  <CheckCircle2
                    size={14}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-300 leading-snug">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </article>
  );
}

// ─── SECONDARY CARD ───────────────────────────────────────────────────────────
// Smaller card — used for Swiggy Clone and any future projects
function SecondaryCard({ project }) {
  return (
    <article
      className="
        group relative h-full
        rounded-2xl border border-white/8
        bg-white/[0.02] hover:bg-white/[0.04]
        hover:border-white/15
        transition-all duration-300
        overflow-hidden
        flex flex-col
        p-6
      "
      aria-label={`${project.title} — ${project.tagline}`}
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-white font-bold text-xl leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-purple-400 font-mono text-xs">
            {project.tagline}
          </p>
        </div>

        {/* Icon links — top right */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 rounded-lg
                border border-white/10 bg-white/5
                flex items-center justify-center
                text-gray-400 hover:text-white
                hover:border-white/20
                transition-all duration-150
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-400
              "
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub size={14} aria-hidden="true" />
            </a>
          )}

          {project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 rounded-lg
                border border-white/10 bg-white/5
                flex items-center justify-center
                text-gray-400 hover:text-white
                hover:border-white/20
                transition-all duration-150
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-400
              "
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Highlights — compact */}
      {project.highlights?.length > 0 && (
        <ul className="flex flex-col gap-2 mb-5" role="list">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs">
              <CheckCircle2
                size={11}
                className="text-purple-400 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-gray-400">{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <TechStack tech={project.tech} small />
    </article>
  );
}

// ─── TECH STACK ───────────────────────────────────────────────────────────────
function TechStack({ tech, small = false }) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="list"
      aria-label="Technologies used"
    >
      {tech.map((t) => (
        <span
          key={t}
          role="listitem"
          className={`
            font-mono font-medium
            rounded-lg border border-white/8
            bg-white/[0.04]
            text-gray-300
            ${small
              ? 'px-2.5 py-1 text-[11px]'
              : 'px-3 py-1.5 text-xs'
            }
          `}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

// ─── PROJECT LINK ─────────────────────────────────────────────────────────────
function ProjectLink({ href, icon, label, variant = 'ghost', children }) {
  const base = `
    inline-flex items-center gap-2
    px-5 py-2.5 rounded-full
    text-sm font-semibold
    transition-all duration-150
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-cyan-400
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#020010]
  `;

  const variants = {
    primary: `
      bg-white text-black
      hover:bg-gray-100
    `,
    ghost: `
      border border-white/15 text-white
      hover:border-cyan-400/50
      hover:bg-cyan-500/5
    `,
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]}`}
      aria-label={label}
    >
      {icon}
      {children}
    </motion.a>
  );
}