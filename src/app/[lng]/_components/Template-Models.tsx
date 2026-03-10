"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

const list_templates = [
  {
    id: 1,
    link: "/template-models/model-1",
    imgs: [
      { f: "/templates-models/1/model.png" },
      { f: "/templates-models/1/1.png" },
      { f: "/templates-models/1/2.png" },
      { f: "/templates-models/1/3.png" },
    ],
  },
  {
    id: 2,
    link: "/template_2",
    imgs: [
      { f: "/templates-models/2/model.png" },
      { f: "/templates-models/2/1.png" },
      { f: "/templates-models/2/2.png" },
      { f: "/templates-models/2/3.png" },
    ],
  },
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
      <circle cx="44" cy="44" r={r} fill="none" stroke={color} strokeWidth="6" strokeOpacity="0.15" />
      <circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 44 44)"
        style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <text
        x="44"
        y="49"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fontFamily="monospace"
        fill={color}
      >
        {value}
      </text>
    </svg>
  )
}

export default function Templates() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = (src: string) => {
    setSelected(src)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelected("")
  }



  const imgLabels: string[] = [
    t("templates.img_labels.overview"),
    t("templates.img_labels.variation_1"),
    t("templates.img_labels.variation_2"),
    t("templates.img_labels.variation_3"),
  ]

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-[210] bg-black/75 backdrop-blur-sm flex justify-center items-start"
          onClick={closeModal}
        >
          <div
            className="relative z-[220] w-full max-w-3xl mx-4 mt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end mb-3">
              <button
                className="
                  text-white/50 hover:text-[#00F6FF]
                  text-[10px] tracking-[0.3rem] uppercase font-mono
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F6FF]
                "
                onClick={closeModal}
                aria-label={t("templates.modal.close")}
              >
                ✕ {t("templates.modal.close")}
              </button>
            </div>

            <div className="relative">
              <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#00F6FF] z-10 pointer-events-none" />
              <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#00F6FF] z-10 pointer-events-none" />
              <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#00F6FF] z-10 pointer-events-none" />
              <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#00F6FF] z-10 pointer-events-none" />

              <div className="border border-white/10 p-1 max-h-[88vh] overflow-y-auto no-scrollbar">
                <Image
                  src={selected}
                  alt={t("templates.modal.alt")}
                  width={900}
                  height={1400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="dark:bg-[#03152C] flex justify-center">
        <div className="flex flex-col pt-35 sm:pt-40 pb-20 w-full max-w-325 px-2 sm:px-10">

          <div className="relative flex flex-col items-center mb-10">
            <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
                <p>{t("templates.models")}</p>
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
                {t("templates.topic_2")}
              </h2>

              <h2 className="
                absolute bottom-0 m-0
                text-[30px] sm:text-[40px] md:text-[50px]
                leading-0 text-[#00F6FF]
              ">
                {t("templates.topic")}
              </h2>
            </div>
          </div>

          <p className="text-black dark:text-white pt-10 text-2xs md:text-[15px]">
            {t("templates.text")}
          </p>

          <div className="flex flex-col gap-12 pt-5 sm:pt-10">
            {list_templates.map((template, modelIndex) => (
              <div key={template.id}>

                <p className="text-black/40 dark:text-white/30 text-[9px] tracking-[0.3rem] uppercase font-mono mb-4 pl-1">
                  — {t("templates.models")} {String(modelIndex + 1).padStart(2, "0")}
                </p>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 w-full">
                  {template.imgs.map((img, i) => (
                    <div key={i} className="flex flex-col gap-2 items-center w-full">

<<<<<<< HEAD
                      <button
                        className="
                          group relative w-full
                          border border-transparent
                          hover:border-[#00F6FF]/50
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F6FF]
                          transition-all duration-300
                        "
                        onClick={() => openModal(img.f)}
                        aria-label={`${t("templates.modal.expand")}: ${imgLabels[i]}`}
                      >
                        <Image
                          src={img.f}
                          alt={imgLabels[i]}
                          width={400}
                          height={600}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                          loading={modelIndex === 0 && i === 0 ? "eager" : "lazy"}
                          priority={modelIndex === 0 && i === 0}
                        />

                        <span className="absolute inset-0 bg-[#00F6FF]/0 group-hover:bg-[#00F6FF]/5 transition-colors duration-300 pointer-events-none" />

                        <span className="
                          absolute bottom-0 right-0 w-0 h-0
                          border-b-[18px] border-r-[18px]
                          border-b-transparent border-r-transparent
                          group-hover:border-b-[#00F6FF]/40
                          group-hover:border-r-[#00F6FF]/40
                          transition-all duration-300
                        " />

                        <span className="
                          absolute bottom-0 left-0 right-0
                          bg-black/0 group-hover:bg-black/40
                          text-white/0 group-hover:text-white/70
                          text-[9px] tracking-widest uppercase font-mono
                          text-center py-1
                          transition-all duration-300
                        ">
                          {imgLabels[i]}
                        </span>
                      </button>

                      {i === 0 && (
                        <a
                          href={template.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            relative inline-flex items-center justify-center
                            w-[80%] py-2
                            border border-[#D20A2E]
                            bg-[#D20A2E] text-white
                            text-[9px] tracking-[0.25rem] uppercase font-mono
                            transition-all duration-300
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D20A2E]
                          "
                        >
                          ONLINE ↗
                        </a>
                      )}
                    </div>
                  ))}
=======
                                    { (index == 0 && i == 1) && 
                                    <a href="/template-models/model-1" target="_blank" rel="noopener noreferrer" className="bg-[#D20A2E] rounded-4xl text-white flex justify-center items-center py-2 w-[80%]">link</a>
                                    }
                                    { (index == 1 && i == 1) && 
                                    <a href="/template_2" target="_blank" rel="noopener noreferrer" className="bg-[#D20A2E] rounded-4xl text-white flex justify-center items-center py-2 w-[80%]">link</a>
                                    }
                                    
                                </div>
                            ))}
                            </div>
                            </div>
                        ))
                    }
>>>>>>> 96d2e449326dc3e9687a7f8a115c769ff22c3c0d
                </div>
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div className="mt-20">

            <div className="flex justify-center mb-10">
              <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:border-white">
                <p className="text-black dark:text-white text-[8.5px] sm:text-2xs md:text-sm tracking-widest uppercase">
                  {t("templates.pagespeed.badge")}
                </p>
                <span className="absolute -top-2 -right-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
                <span className="absolute -bottom-2 -left-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
              </div>
            </div>

            <a
              href="https://pagespeed.web.dev/analysis/https-www-koukiwebservice-com-template_2/sjv46a0c0s?form_factor=desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <p className="text-center text-black/40 hover:text-[#00F6FF] dark:text-white/30 text-[9px] tracking-[0.25rem] uppercase font-mono mb-10">
                {t("templates.pagespeed.link_label")}
              </p>
            </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { key: "performance", value: 98 },
                { key: "accessibility", value: 94 },
                { key: "best_practices", value: 100 },
                { key: "seo", value: 92 },
              ].map(({ key, value }) => (
                <div
                  key={key}
                  className="
                    group flex flex-col items-center gap-3
                    border border-black/10 dark:border-white/10
                    px-4 py-6
                    hover:border-[#00F6FF]/50
                    transition-colors duration-300
                    relative
                  "
                >

                  <span className="absolute top-0 right-0 w-0 h-0
                    border-t-[14px] border-r-[14px]
                    border-t-transparent border-r-transparent
                    group-hover:border-r-[#00F6FF]/50
                    transition-all duration-300" />

                  <ScoreRing value={value} />

                  <p className="text-black/60 dark:text-white/50 text-[9px] text-center tracking-[0.15rem] uppercase font-mono leading-4">
                    {t(`templates.pagespeed.metrics.${key}`)}
                  </p>

                  <span className="text-[#0CCE6B] text-[8px] tracking-widest uppercase font-mono border border-[#0CCE6B]/30 px-2 py-0.5">
                    {t("templates.pagespeed.approved_badge")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
              {[
                { color: "#FF4E42", key: "poor" },
                { color: "#FFA400", key: "needs_improvement" },
                { color: "#0CCE6B", key: "good" },
              ].map(({ color, key }) => (
                <span
                  key={key}
                  className="flex items-center gap-2 text-[9px] tracking-widest text-black/40 dark:text-white/30 uppercase font-mono"
                >
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
                  {t(`templates.pagespeed.legend.${key}`)}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
=======
    )
}
>>>>>>> 96d2e449326dc3e9687a7f8a115c769ff22c3c0d
