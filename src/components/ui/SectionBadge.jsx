export default function SectionBadge({ children, color = 'cyan' }) {
  const colors = {
    cyan:   'border-cyan-500/30   bg-cyan-500/8   text-cyan-400',
    purple: 'border-purple-500/30 bg-purple-500/8 text-purple-400',
    amber:  'border-amber-500/30  bg-amber-500/8  text-amber-400',
    emerald:'border-emerald-500/30 bg-emerald-500/8 text-emerald-400',
    rose:   'border-rose-500/30   bg-rose-500/8   text-rose-400',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  border font-mono text-xs tracking-widest uppercase
                  ${colors[color] ?? colors.cyan}`}
    >
      {children}
    </div>
  );
}