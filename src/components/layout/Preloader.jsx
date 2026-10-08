import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';

const SESSION_KEY = 'moe-intro-seen';
const HOLD_MS = 850;

export default function Preloader() {
  const [visible, setVisible] = useState(() => {
    try {
      if (typeof window === 'undefined') return false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
      return window.sessionStorage.getItem(SESSION_KEY) !== '1';
    } catch {
      return false;
    }
  });

  const [isExiting, setIsExiting] = useState(false);

  const dismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setVisible(false);
      try {
        window.sessionStorage.setItem(SESSION_KEY, '1');
      } catch (e) {}
    }, 600);
  };

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(dismiss, HOLD_MS);

    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      role="status"
      aria-label="Loading Male Order Erise"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#0a0a0a] text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer select-none ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="px-6 text-center animate-fadeIn">
        <Logo tone="silver" size="lg" />
      </div>

      <span className="label absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 opacity-80 text-xs">
        Tap to skip
      </span>
    </div>
  );
}
