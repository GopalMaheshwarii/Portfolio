import { motion }         from 'framer-motion';
import {
  Mail, FileText,
  Send, MapPin, Clock,
}                        from 'lucide-react';
import { FaGithub,
         FaLinkedin }    from 'react-icons/fa';
import { SiLeetcode }     from 'react-icons/si';
import { siteConfig }     from '../../data/siteConfig';
import SectionHeader      from '../ui/SectionHeader';

// ─── CONTACT LINKS ────────────────────────────────────────────────────────────
const LINKS = [
  {
    id:       'email',
    title:    'Email',
    value:    'gopalmaheshwari214@gmail.com',
    href:     `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`,
    icon:     <Mail size={18} />,
    color:    'text-rose-400',
    border:   'border-rose-500/20',
    bg:       'bg-rose-500/8',
    hover:    'hover:border-rose-500/30',
    action:   'Send a message',
  },
  {
    id:       'github',
    title:    'GitHub',
    value:    'GopalMaheshwarii',
    href:     siteConfig.social.github,
    icon:     <FaGithub size={18} />,
    color:    'text-gray-300',
    border:   'border-white/15',
    bg:       'bg-white/5',
    hover:    'hover:border-white/25',
    action:   'View source code',
  },
  {
    id:       'linkedin',
    title:    'LinkedIn',
    value:    'gopal-maheshwari',
    href:     siteConfig.social.linkedin,
    icon:     <FaLinkedin size={18} />,
    color:    'text-blue-400',
    border:   'border-blue-500/20',
    bg:       'bg-blue-500/8',
    hover:    'hover:border-blue-500/30',
    action:   'Connect with me',
  },
  {
    id:       'leetcode',
    title:    'LeetCode',
    value:    'Rating 2061 · Top 3%',
    href:     siteConfig.social.leetcode,
    icon:     <SiLeetcode size={18} />,
    color:    'text-amber-400',
    border:   'border-amber-500/20',
    bg:       'bg-amber-500/8',
    hover:    'hover:border-amber-500/30',
    action:   'View profile',
  },
];

// ─── CARD VARIANTS ────────────────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:    i * 0.08,
      duration: 0.45,
      ease:     [0.16, 1, 0.3, 1],
    },
  }),
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 py-28 px-5 md:px-10 lg:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          badge="Get In Touch"
          badgeColor="cyan"
          title="Let's"
          highlight="Connect"
          description={`Open to ${siteConfig.availableFor}.
                        I respond within 24 hours.`}
        />

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ── LEFT — Info panel ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              lg:col-span-1
              rounded-2xl border border-white/8
              bg-white/[0.02] p-7
              flex flex-col gap-6
            "
          >
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                Available For
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  'SDE Internship roles',
                  'SDE-1 full-time roles',
                  'Freelance projects',
                  'Open source collaboration',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-gray-400"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400
                                 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/5" aria-hidden="true" />

            {/* Location + response time */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                Prayagraj, India
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock size={14} className="text-gray-500 flex-shrink-0" />
                Response within 24 hours
              </div>
            </div>

            <div className="h-px bg-white/5" aria-hidden="true" />

            {/* Resume download */}
            <motion.a
              href={siteConfig.resume}
              target="_blank"             
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center justify-center gap-2.5
                w-full py-3 rounded-xl
                bg-white text-black
                font-semibold text-sm
                hover:bg-gray-100
                transition-colors duration-150
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#020010]
              "
              aria-label="Download resume PDF"
            >
              <FileText size={15} aria-hidden="true" />
              View Resume
            </motion.a>

          </motion.div>

          {/* ── RIGHT — Contact links ───────────────────────────────── */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {LINKS.map((link, i) => (
              <motion.div
                key={link.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <ContactCard link={link} />
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-12 font-mono"
        >
          Currently seeking SDE internship and SDE-1 roles ·
          Open to remote and on-site positions
        </motion.p>

      </div>
    </section>
  );
}

// ─── CONTACT CARD ─────────────────────────────────────────────────────────────
function ContactCard({ link }) {
  return (
    <motion.a
      href={link.href}
      target="_blank"      
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group block
        rounded-2xl border border-white/8
        bg-white/[0.02] hover:bg-white/[0.04]
        ${link.hover}
        transition-all duration-200
        overflow-hidden p-6
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-cyan-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#020010]
      `}
      aria-label={`${link.title} — ${link.action}`}
    >
      {/* Icon */}
      <div
        className={`
          w-11 h-11 rounded-xl mb-5
          border ${link.border} ${link.bg}
          flex items-center justify-center
          ${link.color}
          group-hover:scale-110
          transition-transform duration-200
        `}
        aria-hidden="true"
      >
        {link.icon}
      </div>

      {/* Text */}
      <p className="text-gray-500 text-xs font-mono uppercase
                    tracking-widest mb-1">
        {link.title}
      </p>
      <p className="text-white font-semibold text-sm leading-snug mb-3
                    break-all">
        {link.value}
      </p>

      {/* Action */}
      <div
        className={`
          inline-flex items-center gap-1.5
          text-xs font-medium
          ${link.color}
          group-hover:gap-2.5
          transition-all duration-200
        `}
      >
        <Send size={11} aria-hidden="true" />
        {link.action}
      </div>

    </motion.a>
  );
}