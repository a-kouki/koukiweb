"use client"
import { useTranslation } from "react-i18next"

const contacts = [
  {
    index: "01",
    name:"WHASTAPP",
    platformKey: "contact.whatsapp",
    handle: "+55 66 99718‑7450",
    href: "https://wa.me/5566997187450",
    label: "Contact via WhatsApp",
  },
  {
    index: "02",
    name:"INSTAGRAM",
    platformKey: "contact.insta",
    handle: "@kouki.web",
    href: "https://www.instagram.com/kouki.web/",
    label: "Contact via Instagram",
  },
  {
    index: "03",
    name:"EMAIL",
    platformKey: "contact.email",
    handle: "koukitech5@gmail.com",
    href: "mailto:koukitech5@gmail.com",
    label: "Contact via Email",
  },
]

export default function Contact() {
  const [t] = useTranslation()

  return (
    <section id="contact" className=" bg-neutral-primary dark:bg-[#03152C] overflow-hidden">

      {/* ── Header — preserva estrutura e fontes originais ── */}
      <div className="relative flex justify-center pt-25 sm:pt-40 pb-10">
        <div className="relative flex flex-col items-center">

          {/* Tag com cantos decorativos */}
          <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
            <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
              <p>{t("contact.title")}</p>
              <span className="absolute -top-2 -right-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
              <span className="absolute -bottom-2 -left-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
            </div>
          </div>

          {/* Ghost + título principal — fontes originais mantidas */}
          <div className="relative flex justify-center">
            <h3
              aria-hidden="true"
              className="
                text-[30px] sm:text-[70px] md:text-[90px]
                leading-4 sm:leading-5
                text-black/20 dark:text-[#939393] dark:opacity-22
                font-anton
                tracking-[0.6rem] sm:tracking-[1.5rem]
                select-none pointer-events-none
              "
            >
              {t("contact.sub")}
            </h3>

            <div className="absolute m-0 leading-5 sm:leading-10">
              <h2
                className="
                  text-[20px] sm:text-[40px] md:text-[50px]
                  text-center
                  text-[#00F6FF]
                "
              >
                <span className="dark:text-white text-black">{t("contact.subtitle.one")} </span>
                {t("contact.subtitle.two")}
                <br />
                {t("contact.subtitle.three")}
              </h2>
            </div>
          </div>

        </div>
      </div>

      {/* ── Lista editorial de contatos ─────────────────── */}
      <nav
        aria-label="Links de contato"
        className="w-full max-w-4xl mx-auto px-6 sm:px-10 mt-8 sm:mt-12 pb-16 sm:pb-20"
      >
        {/* Linha superior */}
        <div className="border-t border-black/15 dark:border-white/10" />

        {contacts.map(({ index, name, platformKey, handle, href, label }) => (
          <a
            key={index}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="
              group relative
              flex items-center gap-5 sm:gap-8
              py-5 sm:py-6
              border-b border-black/15 dark:border-white/10
              overflow-hidden
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#00F6FF]
              focus-visible:ring-offset-2
            "
          >
            {/* Fundo deslizante no hover */}
            <span
              aria-hidden="true"
              className="
                absolute inset-0
                bg-black/5 dark:bg-white/5
                -translate-x-full group-hover:translate-x-0
                transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              "
            />

            {/* Barra ciano lateral */}
            <span
              aria-hidden="true"
              className="
                absolute left-0 top-0 bottom-0 w-[2px]
                bg-[#00F6FF]
                scale-y-0 group-hover:scale-y-100
                origin-bottom
                transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              "
            />

            {/* Índice */}
            <span className="
              relative z-10
              font-mono text-[10px] sm:text-xs tracking-widest
              text-black/30 dark:text-white/25
              group-hover:text-[#00F6FF]
              transition-colors duration-300
              w-5 flex-shrink-0
            ">
              {index}
            </span>

            {/* Plataforma + handle */}
            <div className="relative z-10 flex flex-col gap-0.5 flex-1">
              <span className="
                font-anton
                text-[26px] sm:text-[38px] md:text-[46px]
                
                text-black dark:text-white
                transition-[letter-spacing] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:tracking-[0.1em]
              ">
                {name}
              </span>
              <span className="
                font-mono text-[11px] sm:text-xs
                text-black/35 dark:text-white/30
                group-hover:text-black/65 dark:group-hover:text-white/55
                transition-colors duration-300
              ">
                {handle}
              </span>
            </div>

            {/* Seta */}
            <span
              aria-hidden="true"
              className="
                relative z-10 text-xl sm:text-2xl
                text-black/20 dark:text-white/20
                group-hover:text-[#00F6FF]
                group-hover:-translate-y-1 group-hover:translate-x-1
                transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              "
            >
              ↗
            </span>
          </a>
        ))}
      </nav>

      {/* ── Marquee banner ──────────────────────────────── */}
      <div className="relative w-full h-15 sm:h-20 bg-[#00F6FF] flex items-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="font-anton text-3xl sm:text-5xl text-black tracking-[0.15em] px-8 sm:px-12"
            >
              KOUKI WEB
            </span>
          ))}
        </div>
      </div>

      {/*
        Adicione ao tailwind.config.js:

        theme: {
          extend: {
            keyframes: {
              marquee: {
                '0%':   { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            },
            animation: {
              marquee: 'marquee 20s linear infinite',
            },
          },
        }
      */}
    </section>
  )
}