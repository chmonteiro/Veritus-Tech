/**
 * O símbolo ganhou um quadro com brilho para segurar o peso visual
 * ao lado do menu. `markSize` menor é usado no rodapé.
 */
export default function Logo({ size = 18, markSize = 34 }) {
  return (
    <a href="#topo" className="logo" aria-label="Veritus Tech, voltar ao início">
      <span
        className="logo__mark"
        style={{ width: markSize, height: markSize }}
        aria-hidden="true"
      >
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
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
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="logo__text">
        Veritus<b>Tech</b>
      </span>
    </a>
  );
}
