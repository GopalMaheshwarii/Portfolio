import { useEffect, useRef } from 'react';

export default function StaticBackground() {
  const canvasRef = useRef(null);
  const observerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let rafId;
    let lastTime = 0;
    const INTERVAL = 1000 / 30;

    // --- Helper to set canvas size & reset particles ---
    const updateCanvasAndParticles = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const w = Math.floor(width);
      const h = Math.floor(height);

      // Only update if size changed
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        // Recreate particles to fill new area
        particlesRef.current = createParticles(w, h);
      }
    };

    // --- Particle factory ---
    const createParticles = (w, h) => {
      const COUNT = Math.floor(w * h / 15000);
      return Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.6 + 0.4,
        phase: Math.random() * Math.PI * 2,
        freq: Math.random() * 0.008 + 0.002,
      }));
    };

    // Initial setup
    updateCanvasAndParticles();

    // ResizeObserver to catch any size change (like dev tools responsive mode)
    observerRef.current = new ResizeObserver(() => {
      updateCanvasAndParticles();
    });
    observerRef.current.observe(canvas);

    // --- Animation loop ---
    const tick = (ts) => {
      if (ts - lastTime < INTERVAL) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      lastTime = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = ts * 0.001;
      const particles = particlesRef.current;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around new canvas edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const oscillation = 0.4 + 0.2 * Math.sin(time * p.freq * 1000 + p.phase);
        const opacity = p.alpha * oscillation;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();

        if (p.r > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34,211,238,${opacity * 0.12})`;
          ctx.fill();
        }
      });

      rafId = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafId);
      else rafId = requestAnimationFrame(tick);
    };
    document.addEventListener('visibilitychange', onVisibility);

    rafId = requestAnimationFrame(tick);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      observerRef.current?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <>
      {/* Deep dark base background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: '#01000a' }}
        aria-hidden="true"
      />

      {/* Static ambient glows */}
      <div
        className="fixed z-[1] pointer-events-none"
        style={{
          left: '50%', top: '50%',
          width: '900px', height: '900px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,255,180,0.06), transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed z-[1] pointer-events-none"
        style={{
          left: '20%', top: '30%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%)',
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{ width: '100%', height: '100%' }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          opacity: 0.02,
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="fixed inset-0 z-[4] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(1,0,10,0.6) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  );
}