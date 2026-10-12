import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * Custom GSAP hook for tactile, luxury interactive button animations
 * - Magnetic pull on hover for desktop (quickTo)
 * - Tactile spring recoil on click/press
 * - Full prefers-reduced-motion respect & context cleanup
 */
export function useGSAPInteractions(containerRef) {
  useEffect(() => {
    const scope = containerRef?.current || document.body;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktopHover: "(hover: hover) and (pointer: fine) and (min-width: 768px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktopHover, reducedMotion } = context.conditions;

          if (reducedMotion) return;

          // 1. Magnetic pull on elements with [data-magnetic]
          if (desktopHover) {
            const magneticElements = scope.querySelectorAll('[data-magnetic]');
            magneticElements.forEach((el) => {
              const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
              const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

              const handlePointerMove = (e) => {
                const rect = el.getBoundingClientRect();
                const relX = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
                const relY = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
                xTo(relX);
                yTo(relY);
              };

              const handlePointerLeave = () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.4)" });
              };

              el.addEventListener('pointermove', handlePointerMove);
              el.addEventListener('pointerleave', handlePointerLeave);
            });
          }

          // 2. Interactive press recoil on buttons
          const interactiveBtns = scope.querySelectorAll('[data-interactive-btn], [data-magnetic]');
          interactiveBtns.forEach((btn) => {
            const handleDown = () => {
              gsap.to(btn, { scale: 0.95, duration: 0.1, ease: "power2.out" });
            };
            const handleUp = () => {
              gsap.to(btn, { scale: 1, duration: 0.28, ease: "power3.out" });
            };

            btn.addEventListener('pointerdown', handleDown);
            btn.addEventListener('pointerup', handleUp);
            btn.addEventListener('pointercancel', handleUp);
          });
        }
      );
    }, scope);

    return () => ctx.revert();
  }, [containerRef]);
}
