import { motion }       from 'framer-motion';
import { Mail, FileText, ArrowUp }   from 'lucide-react';
import { FaGithub, FaLinkedin }      from 'react-icons/fa';
import { SiLeetcode,
         SiCodeforces } from 'react-icons/si';
import { siteConfig }   from '../../data/siteConfig';

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
const NAV = [
  { label: 'Projects',     id: 'projects'     },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Skills',       id: 'skills'       },
  { label: 'About',        id: 'about'        },
  { label: 'Education',    id: 'education'    },
  { label: 'Contact',      id: 'contact'      },
];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
const SOCIAL = [
  {
    href:  siteConfig.social.github,
    icon:  <FaGithub size={16} />,
    label: 'GitHub profile',
  },
  {
    href:  siteConfig.social.linkedin,
    icon:  <FaLinkedin size={16} />,
    label: 'LinkedIn profile',
  },
  {
    href:  siteConfig.social.leetcode,
    icon:  <SiLeetcode size={16} />,
    label: 'LeetCode profile',
  },
  {
    href:  siteConfig.social.codeforces,
    icon:  <SiCodeforces size={16} />,
    label: 'Codeforces profile',
  },
  {
    href:  `mailto:${siteConfig.email}`,
    icon:  <Mail size={16} />,
    label: 'Send email',
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative z-10 border-t border-white/8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-14">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* ── COL 1 — Brand ──────────────────────────────────────── */}
          <div className="flex flex-col gap-4">

            <button
              onClick={scrollTop}
              className="text-white font-black text-xl tracking-tight
                         w-fit focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-cyan-400
                         rounded-md"
              aria-label="Scroll to top"
            >
              Gopal
              <span className="text-cyan-400">.</span>
            </button>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Software Engineer · Full Stack Developer ·
              Competitive Programmer
            </p>

            <p className="text-gray-600 text-xs font-mono">
              MNNIT Allahabad · CSE · 2027
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 w-fit
                         px-3 py-1.5 rounded-full
                         border border-emerald-500/25 bg-emerald-500/8"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400
                           animate-pulse"
                aria-hidden="true"
              />
              <span className="text-emerald-400 text-xs font-medium">
                Open to opportunities
              </span>
            </div>

          </div>

          {/* ── COL 2 — Navigation ─────────────────────────────────── */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col gap-3"
          >
            <p className="text-gray-500 text-xs font-mono uppercase
                          tracking-widest mb-1">
              Navigate
            </p>
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-400 hover:text-white text-sm
                           text-left w-fit
                           transition-colors duration-150
                           focus-visible:outline-none
                           focus-visible:ring-2 focus-visible:ring-cyan-400
                           rounded"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ── COL 3 — Links ──────────────────────────────────────── */}
          <div className="flex flex-col gap-4">

            <p className="text-gray-500 text-xs font-mono uppercase
                          tracking-widest mb-1">
              Find Me
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2" role="list">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  role="listitem"
                  className="
                    w-9 h-9 rounded-xl
                    border border-white/8 bg-white/[0.03]
                    flex items-center justify-center
                    text-gray-500 hover:text-white
                    hover:border-white/20 hover:bg-white/[0.06]
                    transition-all duration-150
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-cyan-400
                  "
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Resume */}
            <a
              href={siteConfig.resume}
              download
              className="
                inline-flex items-center gap-2
                text-sm text-gray-400 hover:text-white
                transition-colors duration-150 w-fit
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-400
                rounded
              "
              aria-label="Download resume PDF"
            >
              <FileText size={14} aria-hidden="true" />
              Download Resume
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="
                text-sm text-gray-500 hover:text-white
                transition-colors duration-150 w-fit break-all
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-400
                rounded
              "
              aria-label={`Email ${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>

          </div>
        </div>

        {/* ── BOTTOM BAR ─────────────────────────────────────────────── */}
        <div
          className="pt-8 border-t border-white/5
                     flex flex-col sm:flex-row items-center
                     justify-between gap-4"
        >
          <p className="text-gray-600 text-base font-mono">
            © {year} Gopal Maheshwari 
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-white/10 bg-white/[0.03]
              text-gray-400 hover:text-white
              text-xs font-medium
              hover:border-white/20
              transition-all duration-150
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-cyan-400
            "
            aria-label="Scroll back to top"
          >
            <ArrowUp size={12} aria-hidden="true" />
            Back to top
          </motion.button>

        </div>
      </div>
    </footer>
  );
}