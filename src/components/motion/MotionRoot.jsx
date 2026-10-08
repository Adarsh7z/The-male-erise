import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DONE = 'data-reveal-done';

function fresh(selector, effect) {
  return Array.from(document.querySelectorAll(selector)).filter(
    (el) => !(el.getAttribute(DONE) ?? '').split(' ').includes(effect)
  );
}

function mark(el, effect) {
  const list = (el.getAttribute(DONE) ?? '').split(' ').filter(Boolean);
  if (list.includes(effect)) return;
  list.push(effect);
  el.setAttribute(DONE, list.join(' '));
}

export default function MotionRoot({ dependencies = [] }) {
  useEffect(() => {
    // If reduced motion is requested, reveal everything immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal], [data-lines]').forEach((el) => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.clipPath = 'none';
      });
      return;
    }

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      function scan() {
        // 1. Fade and rise
        fresh("[data-reveal='up']", 'up').forEach((el) => {
          const targets = el.hasAttribute('data-reveal-stagger')
            ? Array.from(el.children)
            : [el];

          gsap.fromTo(
            targets,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.075,
              scrollTrigger: {
                trigger: el,
                start: 'top 92%',
                once: true,
              },
            }
          );
          mark(el, 'up');
          targets.forEach((t) => mark(t, 'up'));
        });

        // 2. Photograph wipe (clip-path reveal)
        fresh("[data-reveal='clip']", 'clip').forEach((frame) => {
          const img = frame.querySelector('img');
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: frame,
              start: 'top 88%',
              once: true,
            },
          });

          timeline.fromTo(
            frame,
            { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
            {
              opacity: 1,
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.1,
              ease: 'power3.out',
            },
            0
          );

          if (img) {
            timeline.fromTo(
              img,
              { scale: 1.12 },
              { scale: 1, duration: 1.5, ease: 'power3.out' },
              0
            );
          }
          mark(frame, 'clip');
        });

        // 3. Parallax scrub
        fresh("[data-reveal='scrub']", 'scrub').forEach((el) => {
          const distance = Number(el.dataset.parallax ?? 14);
          gsap.fromTo(
            el,
            { yPercent: -distance },
            {
              yPercent: distance,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
          mark(el, 'scrub');
        });

        // 4. Silver sheen sweep
        fresh("[data-reveal='sheen']", 'sheen').forEach((el) => {
          gsap.fromTo(
            el,
            { '--sheen-x': '100%' },
            {
              '--sheen-x': '-20%',
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 95%',
                end: 'bottom 5%',
                scrub: 0.6,
              },
            }
          );
          mark(el, 'sheen');
        });

        // 5. Headline line / text reveal
        fresh('[data-lines]', 'lines').forEach((el) => {
          gsap.to(el, { opacity: 1, duration: 0.5, ease: 'none' });
          mark(el, 'lines');
        });
      }

      scan();

      const observer = new MutationObserver(() => {
        scan();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener('load', onLoad);

      // Safe fallback: ensure all elements are visible after 1.5s regardless of scroll
      const fallbackTimer = setTimeout(() => {
        document.querySelectorAll('[data-reveal], [data-lines]').forEach((el) => {
          if (getComputedStyle(el).opacity === '0') {
            gsap.to(el, { opacity: 1, duration: 0.5 });
          }
        });
      }, 1500);

      return () => {
        observer.disconnect();
        window.removeEventListener('load', onLoad);
        clearTimeout(fallbackTimer);
      };
    });

    return () => {
      mm.revert();
      document
        .querySelectorAll(`[${DONE}]`)
        .forEach((el) => el.removeAttribute(DONE));
    };
  }, dependencies);

  return null;
}
