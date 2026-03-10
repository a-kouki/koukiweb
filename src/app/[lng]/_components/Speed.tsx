"use client"
import { useEffect, useState } from "react"

const metrics = [
  { label: "Desempenho",           value: 98,  },
  { label: "Acessibilidade",       value: 94,  },
  { label: "Práticas Recomendadas",value: 100, },
  { label: "SEO",                  value: 92,  },
]

function getColor(v:any) {
  if (v >= 90) return "#0CCE6B"
  if (v >= 50) return "#FFA400"
  return "#FF4E42"
}

function ScoreRing({ value, animate }:any) {
  const r = 38
  const circ = 2 * Math.PI * r
  const color = getColor(value)
  const offset = animate ? circ - (value / 100) * circ : circ

  return (
    <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
      {/* Track */}
      <circle cx="48" cy="48" r={r} fill="none" stroke="#1a1a1a" strokeWidth="7" />
      {/* Glow ring */}
      <circle cx="48" cy="48" r={r} fill="none" stroke={color} strokeWidth="7"
        strokeOpacity="0.15" />
      {/* Progress */}
      <circle
        cx="48" cy="48" r={r}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 48 48)"
        style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)" }}
      />
      {/* Score text */}
      <text x="48" y="53" textAnchor="middle"
        fontSize="19" fontWeight="700"
        fontFamily="'DM Mono', monospace"
        fill={color}>
        {value}
      </text>
    </svg>
  )
}

export default function PageSpeedDiagnostics() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="dark:bg-[#03152C] bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header — mesmo padrão visual do ModelAvail */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:border-white">
            <p className="text-black dark:text-white text-[8.5px] sm:text-2xs md:text-sm tracking-widest uppercase">
              Diagnóstico de Desempenho
            </p>
            <span className="absolute -top-2 -right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black dark:bg-white border border-black dark:border-white" />
            <span className="absolute -bottom-2 -left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black dark:bg-white border border-black dark:border-white" />
          </div>
        </div>

        {/* Source label */}
        <p className="text-center text-black/40 dark:text-white/30 text-[10px] tracking-[0.25rem] uppercase mb-10 font-mono">
          PageSpeed Insights — google.com/speed/pagespeed/insights
        </p>

        {/* Score cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {metrics.map(({ label, value }, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 group"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Card */}
              <div className="
                relative flex flex-col items-center gap-3 w-full
                border border-black/10 dark:border-white/10
                px-4 py-6
                bg-black/[0.02] dark:bg-white/[0.03]
                hover:border-[#00F6FF]/60 dark:hover:border-[#00F6FF]/60
                transition-colors duration-300
              ">
                {/* Corner accent on hover */}
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-r-[16px] border-t-transparent border-r-[#00F6FF]/0 group-hover:border-r-[#00F6FF]/60 transition-all duration-300" />

                <ScoreRing value={value} animate={animate} />

                <p className="text-black/60 dark:text-white/50 text-[9px] sm:text-[10px] text-center tracking-[0.15rem] uppercase font-mono leading-4">
                  {label}
                </p>

                {/* "Aprovado" badge */}
                <span className="
                  text-[#0CCE6B] text-[8px] tracking-widest uppercase font-mono
                  border border-[#0CCE6B]/30 px-2 py-0.5
                ">
                  ✓ aprovado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            { color: "#FF4E42", label: "0–49 · Ruim" },
            { color: "#FFA400", label: "50–89 · Melhorar" },
            { color: "#0CCE6B", label: "90–100 · Bom" },
          ].map(({ color, label }) => (
            <span key={label} className="flex items-center gap-2 text-[9px] tracking-widest text-black/40 dark:text-white/30 uppercase font-mono">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}