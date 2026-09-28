// A single line-art elevation sketch — a mansard roofline over an arched
// window, the two most characteristic details of French Renaissance
// facades — standing in for a hero photograph until real renders are added.
export default function ArchMotif() {
  return (
    <svg
      viewBox="0 0 480 560"
      role="img"
      aria-label="Line illustration of a French Renaissance mansard roofline and arched window, characteristic of Godrej Florenne's architecture"
      style={{ width: "100%", height: "auto" }}
    >
      <rect x="0" y="0" width="480" height="560" fill="none" />

      {/* Mansard roofline */}
      <path
        d="M40 210 L240 40 L440 210"
        fill="none"
        stroke="#1E3A32"
        strokeWidth="2.5"
      />
      <path
        d="M70 210 L240 78 L410 210"
        fill="none"
        stroke="#A1782F"
        strokeWidth="1.5"
      />
      <line x1="240" y1="40" x2="240" y2="8" stroke="#1E3A32" strokeWidth="2.5" />
      <circle cx="240" cy="4" r="4" fill="#A1782F" />

      {/* Facade body */}
      <rect
        x="60"
        y="210"
        width="360"
        height="300"
        fill="none"
        stroke="#1E3A32"
        strokeWidth="2.5"
      />

      {/* Cornice line */}
      <line x1="40" y1="210" x2="440" y2="210" stroke="#1E3A32" strokeWidth="2.5" />

      {/* Central arched window */}
      <path
        d="M195 500 V330 A45 45 0 0 1 285 330 V500"
        fill="none"
        stroke="#935A3C"
        strokeWidth="2.5"
      />
      <path
        d="M210 500 V335 A30 30 0 0 1 270 335 V500"
        fill="none"
        stroke="#A1782F"
        strokeWidth="1.2"
      />
      <line x1="240" y1="290" x2="240" y2="500" stroke="#A1782F" strokeWidth="1" opacity="0.6" />

      {/* Side windows */}
      {[110, 370].map((cx) => (
        <g key={cx}>
          <rect
            x={cx - 28}
            y="260"
            width="56"
            height="90"
            fill="none"
            stroke="#1E3A32"
            strokeWidth="1.5"
          />
          <line x1={cx} y1="260" x2={cx} y2="350" stroke="#1E3A32" strokeWidth="1" opacity="0.5" />
          <line x1={cx - 28} y1="305" x2={cx + 28} y2="305" stroke="#1E3A32" strokeWidth="1" opacity="0.5" />
        </g>
      ))}
      {[110, 370].map((cx) => (
        <rect
          key={`lower-${cx}`}
          x={cx - 28}
          y="400"
          width="56"
          height="90"
          fill="none"
          stroke="#1E3A32"
          strokeWidth="1.5"
        />
      ))}

      {/* Ground line */}
      <line x1="20" y1="510" x2="460" y2="510" stroke="#1E3A32" strokeWidth="2.5" />

      {/* Balustrade hint at base */}
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={i}
          x1={30 + i * 20}
          y1="510"
          x2={30 + i * 20}
          y2="522"
          stroke="#A1782F"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
