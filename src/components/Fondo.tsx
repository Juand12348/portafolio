import type { CSSProperties } from 'react'

// Trazas tipo circuito (codos de 45°) en un lienzo de 1440×900 que cubre la pantalla. `fin` es donde va la vía.
const trazas = [
  { d: 'M0 120H260L300 160H520L560 120H760V220L800 260H900', fin: [900, 260] },
  { d: 'M1440 80H1180L1140 120V300L1100 340H960', fin: [960, 340] },
  { d: 'M0 420H140L180 460V640L220 680H420L460 720H560', fin: [560, 720] },
  { d: 'M1440 520H1300L1260 560V760L1220 800H1000', fin: [1000, 800] },
  { d: 'M620 900V780L660 740H860L900 700V600', fin: [900, 600] },
  { d: 'M360 0V60L400 100H460', fin: [460, 100] },
  { d: 'M1440 300H1340L1300 340V420', fin: [1300, 420] },
  { d: 'M0 820H80L120 780V720', fin: [120, 720] },
]

// Qué trazas llevan un pulso, con su duración y retraso (s), para que no viajen todos a la vez.
const pulsos = [
  [0, 9, 0],
  [1, 7, 2.5],
  [2, 11, 1],
  [3, 8, 4],
  [4, 6, 3],
]

function Circuito({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className={`absolute inset-0 size-full ${className}`}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        {trazas.map((t) => (
          <path key={t.d} d={t.d} />
        ))}
      </g>
      <g fill="var(--color-noche)" stroke="currentColor" strokeWidth="1.5">
        {trazas.map(({ fin: [x, y] }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
        ))}
      </g>
    </svg>
  )
}

export function Fondo() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Circuito className="text-trazo" />
      {/* misma red en Cobalto, visible solo alrededor del mouse (Puntero mueve --px/--py) */}
      <Circuito className="text-cobalto/60 [mask-image:radial-gradient(circle_260px_at_var(--px,-999px)_var(--py,-999px),black,transparent)]" />
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full motion-reduce:hidden">
        {pulsos.map(([i, dur, retraso]) => (
          <path
            key={i}
            d={trazas[i].d}
            pathLength={1000}
            fill="none"
            stroke="var(--color-cobalto)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="40 1000"
            className="animate-[pulso_linear_infinite] drop-shadow-[0_0_6px_var(--color-cobalto)]"
            style={{ animationDuration: `${dur}s`, animationDelay: `${retraso}s` } as CSSProperties}
          />
        ))}
      </svg>
    </div>
  )
}
