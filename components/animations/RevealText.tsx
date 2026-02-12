import React, { useRef, useEffect, useState } from 'react';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
}

const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.05,
  as: Component = "div"
}) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const words = children.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Animate once — don't reset on scroll-out
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`${className} inline-block`}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.2em] -mb-[0.1em] pb-[0.1em] align-bottom">
            <span
              className={`inline-block will-change-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] transition-transform ${inView ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ transitionDelay: inView ? `${delay + (i * stagger)}s` : '0s' }}
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
};

export default RevealText;