/**
 * Conjunto de ícones do site.
 * Traços em `currentColor` para herdarem a cor de quem os usa.
 * Para adicionar um ícone: crie a entrada aqui e referencie pelo nome
 * em data/content.js (campo `icon`).
 */
const paths = {
  network: (
    <path d="M5 12.5a10 10 0 0 1 14 0M2 9a15 15 0 0 1 20 0M8.5 16a5 5 0 0 1 7 0M12 20h.01" />
  ),
  server: (
    <>
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <path d="M6 6.5h.01M6 17.5h.01" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 6a4 4 0 0 0 5 5l-8.5 8.5a2.5 2.5 0 0 1-3.5-3.5L14.5 6Z" />
      <path d="M14.5 6 18 2.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="6" rx="2" />
      <rect x="17.5" y="13" width="4" height="6" rx="2" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />,
  puzzle: <path d="M9 3h6v3a2 2 0 1 0 4 0h2v6h-3a2 2 0 1 0 0 4h3v5H5V3h4Z" />,
  shield: (
    <>
      <path d="M12 3 4 6.5v5c0 5 3.4 8.4 8 9.5 4.6-1.1 8-4.5 8-9.5v-5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <path d="M12 7v5l3 2" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.5a3.5 3.5 0 0 1 0 7M17 15a6.5 6.5 0 0 1 4.5 5" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4h1.5Z" />
  ),
};

export default function Icon({ name, size = 19, strokeWidth = 1.8 }) {
  const shape = paths[name];
  if (!shape) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shape}
    </svg>
  );
}

/** O logo do WhatsApp é sólido, então fica fora do conjunto de traços. */
export function WhatsAppIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.18c-.25.69-1.44 1.32-1.99 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.13s.78-2.22 1.06-2.53c.28-.31.61-.38.81-.38.2 0 .41 0 .58.01.19.01.44-.07.69.53.25.6.86 2.08.94 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.31.39-.44.53-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.08.13.08.73-.17 1.42Z" />
    </svg>
  );
}
