export default function Logo({ size = 26 }) {
  return (
    <a href="#topo" className="logo" aria-label="Veritus Tech, voltar ao início">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 7 L27 7 L16 27 Z"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M11 12 L21 12 L16 21 Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
      <span className="logo__text">
        Veritus<b>Tech</b>
      </span>
    </a>
  );
}
