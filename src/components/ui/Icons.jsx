import React from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  "aria-hidden": true,
  focusable: "false",
};

export function WhatsAppIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm-2.4 4.1c-.18 0-.48.07-.73.35-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.9 2.9 4.6 4.06.64.28 1.14.44 1.53.57.64.2 1.23.17 1.69.1.52-.07 1.6-.65 1.82-1.29.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.53-.31-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.13-.6.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.28-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.6-1.45-.83-1.98-.21-.5-.43-.44-.59-.45h-.51Z" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h18M3 16h18" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

export function MinusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 12h12" />
    </svg>
  );
}

export function PauseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 5v14M14.5 5v14" />
    </svg>
  );
}

export function PlayIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-10.5A7 7 0 0 0 5 10.5C5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 8.5V7a1.5 1.5 0 0 1 1.5-1.5h1V3h-2.5A4 4 0 0 0 10.5 7v1.5H8V11h2.5v10H14V11h2.5l.5-2.5H14Z" />
    </svg>
  );
}

export function FabricIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5 17.5 8 15 20.5 3.5 16 6 3.5Z" />
      <path d="M8.2 8.5 15.8 11M7 13l7.6 2.6" />
    </svg>
  );
}

export function FitIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 9.5 9.5 3.5l11 11-6 6-11-11Z" />
      <path d="M7.5 12.5 9 11M10.5 15.5 12 14M13 8.5l1.5-1.5M16.5 12 18 10.5" />
    </svg>
  );
}

export function StoreIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.5h16v11H4z" />
      <path d="M3 9.5 5 4h14l2 5.5" />
      <path d="M9.5 20.5v-6h5v6" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.566z" />
    </svg>
  );
}

export function UserIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function ShoppingBagIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function SlidersIcon(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

export function ArrowDownUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );
}

export function ResetIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

export function TrashIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function TruckIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
