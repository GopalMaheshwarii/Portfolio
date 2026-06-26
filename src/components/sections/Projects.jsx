import { motion } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import { siteConfig } from '../../data/siteConfig';

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 py-20 md:py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="What I've Built"
          badgeColor="purple"
          title="Featured"
          highlight="Projects"
          description="Production-grade applications demonstrating full-stack
                       engineering — from database design to deployed UI."
        />

        {/* FEATURED PROJECTS */}
        <div className="space-y-6 md:space-y-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <ProjectCard project={project} featured  />
            </motion.div>
          ))}
        </div>

        {/* SECONDARY PROJECTS */}
        {secondary.length > 0 && (
          <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
            {secondary.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i + featured.length}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <ProjectCard project={project} featured={false} />
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

// ─── UNIFIED PROJECT CARD ────────────────────────────────────────────────────
function ProjectCard({ project, featured, flip = false }) {
  // Full class names to avoid Tailwind purge issues
  const accentColorClass = featured ? 'text-cyan-400' : 'text-purple-400';
  const taglineColorClass = featured ? 'text-cyan-400' : 'text-purple-400';
  const gradientLineClass = featured
    ? 'via-cyan-500/50'
    : 'via-purple-500/40';

  return (
    <article
      className="
        group relative
        rounded-xl md:rounded-2xl 
        border border-white/10
        bg-white/[0.04] backdrop-blur-xl
        hover:bg-white/[0.06]
        hover:border-white/20
        transition-all duration-300
        overflow-hidden
        flex flex-col lg:flex-row lg:items-stretch
      "
      aria-label={`${project.title} — ${project.tagline}`}
    >
      {/* Top gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent ${gradientLineClass} to-transparent`}
        aria-hidden="true"
      />

      {/* Layout: image + content side‑by‑side, flip reverses order */}
      <div
        className={`
          flex flex-col lg:flex-row lg:items-stretch
          ${flip ? 'lg:flex-row-reverse' : ''}
        `}
      >
        {/* ─── IMAGE ──────────────────────────────────────────────── */}
        <div className="lg:w-2/5 xl:w-1/3 flex-shrink-0">
          <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover 
                         group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r 
                         from-[#020010] via-transparent to-transparent 
                         opacity-40 lg:opacity-60"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ─── CONTENT + HIGHLIGHTS ──────────────────────────────── */}
        <div className="flex-1 p-4 md:p-5 lg:p-6 xl:p-7 flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            {/* Featured badge */}
            {featured && (
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <Star size={12} className="text-amber-400 fill-amber-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-amber-400 text-[10px] md:text-xs font-mono tracking-widest uppercase">
                  Featured Project
                </span>
              </div>
            )}

            <h3 className="text-white font-black text-xl md:text-2xl lg:text-3xl
                           leading-tight tracking-tight mb-0.5 md:mb-1">
              {project.title}
            </h3>

            <p className={`${taglineColorClass} font-mono text-xs md:text-sm mb-2 md:mb-3`}>
              {project.tagline}
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]
                          mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
              {project.description}
            </p>

            {/* Tech stack – all tags, no limit */}
            <div className="mb-3 md:mb-4">
              <TechStack tech={project.tech} />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.github !== '#' && (
                <ProjectLink
                  href={project.github}
                  icon={<FaGithub size={13} />}
                  label={`View ${project.title} source code on GitHub`}
                  variant="ghost"
                >
                  <span className="hidden sm:inline">Source Code</span>
                  <span className="sm:hidden">Code</span>
                </ProjectLink>
              )}

              {project.live && project.live !== '#' && (
                <ProjectLink
                  href={project.live}
                  icon={<ExternalLink size={13} />}
                  label={`Open ${project.title} live demo`}
                  variant="primary"
                >
                  <span className="hidden sm:inline">Live Demo</span>
                  <span className="sm:hidden">Demo</span>
                </ProjectLink>
              )}
            </div>
          </div>

          {/* Highlights – only for featured projects */}
          {project.highlights?.length > 0 && (
            <div className="
              lg:w-64 xl:w-72 flex-shrink-0
              rounded-xl border border-white/8
              bg-white/[0.03] p-5
            ">
              <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">
                Engineering Highlights
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      size={14}
                      className={`${accentColorClass} flex-shrink-0 mt-0.5`}
                      aria-hidden="true"
                    />
                    <span className="text-gray-300 leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── TECH STACK ───────────────────────────────────────────────────────────────
function TechStack({ tech }) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2" role="list" aria-label="Technologies used">
      {tech.map((t) => (
        <span
          key={t}
          role="listitem"
          className="
            font-mono font-medium
            rounded-lg border border-white/10
            bg-white/10
            text-white/90
            px-2.5 py-1 text-xs md:text-sm
          "
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
    inline-flex items-center gap-1.5 md:gap-2
    px-3 md:px-4 py-1.5 md:py-2
    rounded-full
    text-xs md:text-sm font-semibold
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