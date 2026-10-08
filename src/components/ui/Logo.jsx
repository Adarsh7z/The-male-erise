import React from 'react';

const scale = {
  sm: { mark: "text-[15px]", sub: "text-[0.4375rem] tracking-[0.42em]", gap: "mt-[5px]" },
  md: { mark: "text-[19px]", sub: "text-[0.5rem] tracking-[0.44em]", gap: "mt-[6px]" },
  lg: { mark: "text-[30px]", sub: "text-[0.5625rem] tracking-[0.46em]", gap: "mt-2" },
};

export function Logo({ tone = "ink", size = "md", className = "", onClick }) {
  const s = scale[size] || scale.md;
  const light = tone === "silver";

  return (
    <div
      onClick={onClick}
      className={`group inline-flex flex-col items-center leading-none select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <span
        className={`font-display ${s.mark} tracking-[0.02em] font-normal transition-opacity duration-300 group-hover:opacity-90 ${
          light ? "type-silver-dark" : "text-ink"
        }`}
      >
        Male Order
      </span>
      <span className={`silver-rule w-full ${s.gap} mb-[5px] opacity-70`} />
      <span className={`label ${s.sub} ${light ? "text-silver-200" : "text-muted"}`}>
        ERISE
      </span>
    </div>
  );
}

export default Logo;
