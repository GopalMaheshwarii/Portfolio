import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence }           from 'framer-motion';
import { Menu, X, FileText }                 from 'lucide-react';
import { siteConfig }                        from '../../data/siteConfig';

const NAV_ITEMS = [
  { label: 'Home',         id: 'home'         },
  { label: 'Projects',     id: 'projects'     },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Skills',       id: 'skills'       },
  { label: 'About',        id: 'about'        },
  { label: 'Education',    id: 'education'    },
  { label: 'Contact',      id: 'contact'      },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -12 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.25,
      ease: [0, 0, 0.2, 1],
    },
  }),
};

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [activeId,  setActiveId]  = useState('home');
  const [menuOpen,  setMenuOpen]  = useState(false);

  // ── Scroll tracking ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveId(NAV_ITEMS[i].id);
          return;
        }
      }
      setActiveId('home');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close on Escape ──────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // ── Lock body scroll when menu open ─────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ── THE FIXED SCROLL FUNCTION ────────────────────────────────────────────
  // This correctly accounts for navbar height on ALL screen sizes
  const scrollTo = useCallback((id) => {
    // Close menu FIRST — wait for it to close before scrolling
    setMenuOpen(false);

    // Small delay so mobile menu closes and body overflow is restored
    // before we attempt to scroll
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;

      // Get navbar height dynamically — works on all screen sizes
      const navbar     = document.querySelector('header');
      const navHeight  = navbar ? navbar.offsetHeight : 64;
      const buffer     = 20; // extra breathing room

      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      const scrollTo   = elementTop - navHeight - buffer;

      window.scrollTo({
        top:      Math.max(0, scrollTo),
        behavior: 'smooth',
      });
    }, 300); // 300ms — enough for menu close animation
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-[#020010]/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
        }
      `}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-5 md:px-10 pointer-events-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex-shrink-0 group focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-cyan-400
                       focus-visible:ring-offset-2
                       focus-visible:ring-offset-[#020010] rounded-md"
            aria-label="Go to top"
          >
            <span className="text-white font-black text-xl tracking-tight
                             group-hover:text-gray-200 transition-colors duration-150">
              Gopal
              <span className="text-cyan-400 group-hover:text-cyan-300
                               transition-colors duration-150">.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                active={activeId === item.id}
                onClick={() => scrollTo(item.id)}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.a
              href={siteConfig.resume}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2
                         px-4 py-2 rounded-full
                         bg-cyan-500 hover:bg-cyan-400
                         text-black text-sm font-semibold
                         transition-colors duration-150
                         focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-cyan-400
                         focus-visible:ring-offset-2
                         focus-visible:ring-offset-[#020010]"
              aria-label="Download resume PDF"
            >
              <FileText size={14} aria-hidden="true" />
              Resume
            </motion.a>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden w-9 h-9 flex items-center justify-center
                         rounded-lg border border-white/10 bg-white/5
                         text-gray-300 hover:text-white hover:border-white/20
                         transition-all duration-150
                         focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate:  90, opacity: 0 }}
                    animate={{ rotate:  0,  opacity: 1 }}
                    exit={{    rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden border-t border-white/8"
            >
              <div className="py-3 flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    role="menuitem"
                    custom={i}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => scrollTo(item.id)}
                    className={`
                      text-left w-full px-4 py-3.5 rounded-xl
                      text-sm font-medium
                      transition-all duration-150
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-cyan-400
                      ${activeId === item.id
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                      }
                    `}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {activeId === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                              aria-hidden="true" />
                      )}
                    </span>
                  </motion.button>
                ))}

                {/* Resume in mobile menu */}
                <div className="pt-3 mt-2 border-t border-white/8 px-1">
                  <motion.a
                    href={siteConfig.resume}
                    download
                    custom={NAV_ITEMS.length}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2
                               w-full py-3.5 rounded-xl
                               bg-cyan-500 hover:bg-cyan-400
                               text-black text-sm font-semibold
                               transition-colors duration-150"
                    aria-label="Download resume PDF"
                  >
                    <FileText size={15} aria-hidden="true" />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function NavLink({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      role="link"
      aria-current={active ? 'page' : undefined}
      className={`
        relative px-3 py-2 rounded-lg text-sm font-medium
        transition-colors duration-150
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-cyan-400
        focus-visible:ring-offset-1
        focus-visible:ring-offset-[#020010]
        ${active
          ? 'text-cyan-400'
          : 'text-gray-400 hover:text-white'
        }
      `}
    >
      {item.label}
      {active && (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute bottom-0.5 left-3 right-3 h-[2px]
                     bg-cyan-400 rounded-full"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          aria-hidden="true"
        />
      )}
    </button>
  );
}