import { useState, useEffect, useRef } from 'react';

export function useCounter(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduced) {
      setCount(target);
      return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, shouldStart]);

  return count;
}