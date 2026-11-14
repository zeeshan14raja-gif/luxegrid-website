import type { CSSProperties } from "react";
export function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h16m-6-6 6 6-6 6" />
      </>
    ),
    northeast: (
      <>
        <path d="m6 18 12-12M7 6h11v11" />
      </>
    ),
    home: (
      <>
        <path d="m2 11 10-9 10 9M5 9v13h5v-8h4v8h5V9" />
      </>
    ),
    tag: (
      <>
        <path d="m3 12 9-9h8l1 8-10 10-8-9Z" />
        <circle cx="16.5" cy="7.5" r="1" />
      </>
    ),
    key: (
      <>
        <circle cx="16" cy="7" r="5" />
        <path d="m12.5 10.5-10 10 3 1 2-2v-2h2v-2h2l4-4" />
      </>
    ),
    chart: (
      <>
        <path d="M3 14h4v8H3zM10 8h4v14h-4zM17 2h4v20h-4z" />
      </>
    ),
    camera: (
      <>
        <path d="M3 6h5l2-3h5l2 3h4v15H3z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    hardhat: (
      <>
        <path d="M3 17h18M2 21h20M5 17v-5a7 7 0 0 1 14 0v5M10 13V3h4v10M3 17v4m18-4v4" />
      </>
    ),
    target: (
      <>
        <circle cx="11" cy="13" r="9" />
        <circle cx="11" cy="13" r="5" />
        <path d="m11 13 10-10m-5 1V1m5 2h-3m3 0v5" />
      </>
    ),
    eye: (
      <>
        <path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12Z" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    diamond: (
      <>
        <path d="m1 7 5-5h12l5 5-11 15L1 7Zm0 0h22M6 2l6 20 6-20M6 7l6-5 6 5" />
      </>
    ),
    layers: (
      <>
        <path d="m1 7 11-5 11 5-11 5L1 7Zm0 5 11 5 11-5M1 17l11 5 11-5" />
      </>
    ),
    image: (
      <>
        <rect x="2" y="3" width="20" height="18" rx="1" />
        <circle cx="7" cy="8" r="2" />
        <path d="m3 19 7-7 4 4 3-3 5 5" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 9 4v7c-1 5-9 9-9 9s-8-4-9-9V6l9-4Z" />
        <path d="m7 12 3 3 7-7" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m9 5 10 7-10 7Z" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    plus: <path d="M12 4v16M4 12h16" />,
    whatsapp: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13.3 8L2 21l1.5-5.3A9 9 0 1 1 21 11.5Z" />
        <path d="M8 6.5c-4 2 4 10 7 9l1-2-3-1-1 1c-2-1-3-2-3-3l1-1-2-3Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".6" />
      </>
    ),
    facebook: (
      <path d="M14 22V12h4l1-4h-5V6c0-1.5 1-2 2-2h3V1h-3c-4 0-6 2-6 5v2H7v4h3v10" />
    ),
    linkedin: (
      <>
        <path d="M3 9v12M9 21V9m0 5c0-7 11-7 11 0v7" />
        <circle cx="3" cy="3" r="1" />
      </>
    ),
    youtube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 6 3-6 3Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="1" />
        <path d="m2 5 10 8L22 5" />
      </>
    ),
    phone: (
      <path d="M7 2 3 4c-3 7 10 20 17 17l2-4-6-3-2 3c-4-2-6-4-7-7l3-2-3-6Z" />
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
