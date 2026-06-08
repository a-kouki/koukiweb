"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const models = [
  {
    id: 1,
    imgs: [
      "/products/1/1.png",
      "/products/1/2.png",
      "/products/1/3.png",
    ],
  },
  {
    id: 2,
    imgs: [
      "/products/2/1.png",
      "/products/2/2.png",
      "/products/2/3.png",
    ],
  },
  {
    id: 3,
    imgs: ["/products/3.png"],
  },
  {
    id: 4,
    imgs: ["/products/4.png"],
  },
]

const pagespeedMetrics = [
  { label: "Desempenho",            value: 98  },
  { label: "Acessibilidade",        value: 94  },
  { label: "Práticas Recomendadas", value: 100 },
  { label: "SEO",                   value: 92  },
]

function getScoreColor(v: number) {
  if (v >= 90) return "#0CCE6B"
  if (v >= 50) return "#FFA400"
  return "#FF4E42"
}

function ScoreRing({ value }: { value: number }) {
  const color = getScoreColor(value)
  const r = 36
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ

  return (
    <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true">
      <circle cx="44" cy="44" r={r} fill="none" stroke="#1a1a1a" strokeWidth="6" />
      <circle cx="44" cy="44" r={r} fill="none" stroke={color} strokeWidth="6"
        strokeOpacity="0.15" />
      <circle
        cx="44" cy="44" r={r}
        fill="none" stroke={color} strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 44 44)"
        style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <text x="44" y="49" textAnchor="middle"
        fontSize="17" fontWeight="700"
        fontFamily="monospace"
        fill={color}>
        {value}
      </text>
    </svg>
  )
}

export default function ModelAvail() {
  const { t } = useTranslation()
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null)

  const openModal = (src: string, alt: string) => {
    setSelectedImg({ src, alt })
    document.body.classList.add("overflow-hidden")
  }

  const closeModal = () => {
    setSelectedImg(null)
    document.body.classList.remove("overflow-hidden")
  }

  // cleanup se o componente desmontar com modal aberto
  useEffect(() => {
    return () => document.body.classList.remove("overflow-hidden")
  }, [])

  return (
    <section
      id="services"
      className="dark:bg-[#03152C]"
      aria-label={t("product_web.title")}
    >
      {/* ── Lightbox Modal ── */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[210] bg-black/75 backdrop-blur-sm flex justify-center items-start"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          onClick={closeModal}
        >
          <div
            className="relative z-[220] w-full max-w-2xl mx-4 mt-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex items-center justify-end mb-3">
              <button
                onClick={closeModal}
                className="
                  text-white/50 hover:text-[#00F6FF]
                  text-[10px] tracking-[0.3rem] uppercase font-mono
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F6FF]
                "
                aria-label="Fechar"
              >
                ✕ fechar
              </button>
            </div>

            {/* Cantos fixos FORA do scroll */}
            <div className="relative">
              <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#00F6FF] z-10 pointer-events-none" />
              <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#00F6FF] z-10 pointer-events-none" />
              <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#00F6FF] z-10 pointer-events-none" />
              <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#00F6FF] z-10 pointer-events-none" />

              <div className="border border-white/10 p-1 max-h-[88vh] overflow-y-auto no-scrollbar">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <p className="text-white/30 text-[9px] tracking-widest uppercase font-mono text-center mt-3">
              {selectedImg.alt}
            </p>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <div className="relative flex justify-center pt-35 sm:pt-50 pb-20">
        <div className="relative flex flex-col items-center">

          <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
            <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
              <p>{t("product_web.productPage.one")}</p>
              <span className="absolute -top-2 -right-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
              <span className="absolute -bottom-2 -left-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
            </div>
          </div>

          <div className="relative flex justify-center">
            <h2 className="
              text-[50px] sm:text-[70px] md:text-[90px]
              leading-4 sm:leading-5
              text-black/20 dark:text-[#939393] dark:opacity-22
              font-anton tracking-[0.6rem] sm:tracking-[1.5rem]
            ">
              {t("product_web.title")}
            </h2>
            <h2 className="
              absolute bottom-0 m-0
              text-[20px] sm:text-[40px] md:text-[50px]
              leading-0 text-[#00F6FF]
            ">
              {t("product_web.subtitle")}
            </h2>
          </div>
        </div>
      </div>

      {/* ── Subtitle ── */}
      <p className="dark:text-white flex justify-center text-[15px] sm:text-[24px] mb-2">
        {t("product_web.productPage.two")}
      </p>

      {/* ── Models ── */}
      <div className="flex flex-col gap-14 justify-center items-center pb-20 px-5 sm:px-10">
        {models.map((model, modelIndex) => (
          <div key={model.id} className="w-full max-w-5xl">

            <p className="text-black/40 dark:text-white/30 text-[9px] tracking-[0.3rem] uppercase font-mono mb-4 pl-1">
              — Modelo {String(modelIndex + 1).padStart(2, "0")}
            </p>

            <div className={`
              grid gap-4 items-start
              ${model.imgs.length === 1 ? "grid-cols-1 max-w-[240px]" : ""}
              ${model.imgs.length === 2 ? "grid-cols-2" : ""}
              ${model.imgs.length >= 3 ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : ""}
            `}>
              {model.imgs.map((src, imgIndex) => {
                const altText = `Modelo ${modelIndex + 1} — variante ${imgIndex + 1}`
                return (
                  <button
                    key={imgIndex}
                    onClick={() => openModal(src, altText)}
                    className="
                      group relative w-full
                      border border-transparent
                      hover:border-[#00F6FF]/50
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F6FF]
                      transition-all duration-300
                    "
                    aria-label={`Ampliar: ${altText}`}
                  >
                    <Image
                      src={src}
                      alt={altText}
                      width={400}
                      height={600}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    <span className="
                      absolute inset-0
                      bg-[#00F6FF]/0 group-hover:bg-[#00F6FF]/5
                      transition-colors duration-300 pointer-events-none
                    " />

                    <span className="
                      absolute bottom-0 right-0 w-0 h-0
                      border-b-[20px] border-r-[20px]
                      border-b-transparent border-r-transparent
                      group-hover:border-b-[#00F6FF]/40
                      group-hover:border-r-[#00F6FF]/40
                      transition-all duration-300
                    " />
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}