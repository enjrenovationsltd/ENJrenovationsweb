// Stylized, hand-drawn illustrations — NOT photographs and not a real ENJ
// project. They exist purely so the before/after slider component has
// something to demonstrate with until real project photos are dropped in.

export function KitchenBeforeIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustrated concept of a dated kitchen before renovation"
    >
      <rect width="800" height="600" fill="#c7bfae" />
      <rect x="0" y="0" width="800" height="360" fill="#d3ccbc" />

      {/* window */}
      <rect x="590" y="55" width="150" height="150" fill="#aaa08c" stroke="#867c68" strokeWidth="5" />
      <line x1="665" y1="55" x2="665" y2="205" stroke="#867c68" strokeWidth="5" />
      <line x1="590" y1="130" x2="740" y2="130" stroke="#867c68" strokeWidth="5" />

      {/* upper cabinets */}
      <rect x="40" y="55" width="470" height="150" fill="#8f7a5e" stroke="#6e5c45" strokeWidth="4" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={46 + i * 117} y="61" width="105" height="138" fill="none" stroke="#6e5c45" strokeWidth="3" />
      ))}
      <path d="M96 90 L124 145 L104 195" stroke="#5c4c39" strokeWidth="2" fill="none" />
      <path d="M332 70 L364 112 L342 198" stroke="#5c4c39" strokeWidth="2" fill="none" />

      {/* backsplash */}
      <rect x="0" y="205" width="800" height="110" fill="#bcb39f" />

      {/* counter */}
      <rect x="0" y="315" width="800" height="30" fill="#71685a" />

      {/* lower cabinets */}
      <rect x="40" y="345" width="470" height="160" fill="#786347" stroke="#5c4c39" strokeWidth="4" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={46 + i * 117} y="353" width="105" height="144" fill="none" stroke="#5c4c39" strokeWidth="3" />
      ))}
      <path d="M180 380 L210 420 L185 495" stroke="#5c4c39" strokeWidth="2" fill="none" />

      {/* floor */}
      <rect x="0" y="505" width="800" height="95" fill="#5f574a" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={i * 120} y1="505" x2={i * 120} y2="600" stroke="#4c4639" strokeWidth="2" />
      ))}

      {/* dated fridge */}
      <rect x="545" y="280" width="130" height="225" fill="#b7b2a4" stroke="#867c68" strokeWidth="4" />
      <line x1="545" y1="365" x2="675" y2="365" stroke="#867c68" strokeWidth="3" />

      {/* dim overhead light */}
      <ellipse cx="400" cy="20" rx="90" ry="14" fill="#00000014" />
    </svg>
  );
}

export function KitchenAfterIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustrated concept of a renovated kitchen after renovation"
    >
      <rect width="800" height="600" fill="#f4eee6" />
      <rect x="0" y="0" width="800" height="360" fill="#efe7db" />

      {/* window */}
      <rect x="590" y="55" width="150" height="150" fill="#e7ded0" stroke="#b8863b" strokeWidth="5" />
      <line x1="665" y1="55" x2="665" y2="205" stroke="#b8863b" strokeWidth="4" />
      <line x1="590" y1="130" x2="740" y2="130" stroke="#b8863b" strokeWidth="4" />

      {/* upper cabinets */}
      <rect x="40" y="55" width="470" height="140" fill="#5b3a29" rx="4" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={46 + i * 117} y="61" width="105" height="128" rx="3" fill="none" stroke="#402919" strokeWidth="2" />
      ))}
      {/* brass handles */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={46 + i * 117 + 8} y="122" width="20" height="4" rx="2" fill="#b8863b" />
      ))}

      {/* pendant lights */}
      <line x1="220" y1="0" x2="220" y2="70" stroke="#211a16" strokeWidth="3" />
      <circle cx="220" cy="82" r="14" fill="#b8863b" />
      <line x1="420" y1="0" x2="420" y2="70" stroke="#211a16" strokeWidth="3" />
      <circle cx="420" cy="82" r="14" fill="#b8863b" />

      {/* tile backsplash */}
      <rect x="0" y="205" width="800" height="110" fill="#fbf8f3" />
      {Array.from({ length: 10 }).map((_, col) =>
        Array.from({ length: 3 }).map((_, row) => (
          <rect
            key={`${col}-${row}`}
            x={col * 80}
            y={205 + row * 37}
            width="78"
            height="35"
            fill="none"
            stroke="#ddd0ba"
            strokeWidth="1.5"
          />
        ))
      )}

      {/* counter (quartz) */}
      <rect x="0" y="315" width="800" height="30" fill="#e7ddcc" />
      <rect x="0" y="315" width="800" height="6" fill="#5c6b4f" />

      {/* lower cabinets */}
      <rect x="40" y="345" width="470" height="155" rx="4" fill="#5c6b4f" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={46 + i * 117} y="353" width="105" height="139" rx="3" fill="none" stroke="#47543c" strokeWidth="2" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={46 + i * 117 + 8} y="418" width="20" height="4" rx="2" fill="#b8863b" />
      ))}

      {/* island */}
      <rect x="330" y="440" width="220" height="90" rx="4" fill="#211a16" />
      <rect x="330" y="440" width="220" height="8" fill="#b8863b" />

      {/* floor */}
      <rect x="0" y="505" width="800" height="95" fill="#e7ddcc" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={i * 120} y1="505" x2={i * 120} y2="600" stroke="#ddd0ba" strokeWidth="2" />
      ))}

      {/* stainless fridge */}
      <rect x="545" y="270" width="130" height="235" rx="4" fill="#e7ddcc" stroke="#ddd0ba" strokeWidth="3" />
      <line x1="545" y1="360" x2="675" y2="360" stroke="#ddd0ba" strokeWidth="3" />
      <rect x="655" y="290" width="6" height="55" rx="3" fill="#b8863b" />
    </svg>
  );
}
