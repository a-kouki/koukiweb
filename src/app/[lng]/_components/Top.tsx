// Top.jsx — Kouki Web Hero
// Requires: Tailwind CSS, next/image, react-i18next

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRef } from "react";


export default function Top() {
  const { t } = useTranslation();
  const marqueeRef = useRef(null);

  
    const CONTACT_LINKS = [
    {
        href: "#services",
        label: t("services.topic"),  // substitua por t("services.topic")
        primary: true,
    },
    {
        href: "#contact",
        label: t("contact.title"),   // substitua por t("contact.title")
        primary: false,
    },
    ];

  return (
    <>
      <section
        id="top"
        className="bg-[#F5F5F0] dark:bg-[#03152C]"
      >
      <div className="relative flex justify-center w-full min-h-screen overflow-hidden">

        {/* ── BACKGROUND: leão + vento ── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden"
        >

          {/* Glow azul centralizado atrás do leão */}
          <div className={`
            absolute flex justify-center
            w-[600px] h-[600px] rounded-full
            bg-[#2A0DCB] opacity-[0.08] dark:opacity-[0.15]
            blur-[140px]
          `}/>

            <div className="fixed inset-0 z-0 flex w-full justify-center items-center">
                <div
                className="flex animate-wind-blow"
                style={{
                width: 440,
                height: 296,
                }}
                >
                    <Image
                    src="/wind.svg"
                    width={440}
                    height={296}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain opacity-[0.15] dark:opacity-[0.50]"
                    />
                </div>
                <div
                className="flex bottom-0 animate-lion-breathe"
                style={{ width: 480, height: 600 }}
                >
                    <Image
                    src="/lion.svg"
                    width={480}
                    height={600}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain opacity-[0.08] dark:opacity-[0.1]"
                    priority
                    />
                </div>
            </div>
        </div>

        {/* ── CONTEÚDO: centralizado ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-28 pb-16">

          <div className="flex flex-col items-center gap-0 max-w-2xl animate-fade-in-up">

            {/* Eyebrow */}
            <span className="
              text-xs font-jetbrainsMono uppercase
              text-[#2A0DCB] dark:text-[#00F6FF] pb-5
            ">
              Kouki Web · FullStack
            </span>

            {/* Headline */}
            <h1 className="font-spaceGrotesk font-bold text-3xl sm:text-5xl text-black dark:text-white tracking-tight leading-8 sm:leading-10">
              {t("header.one")}
            </h1>

            {/* Sub-headline */}
            <h2 className="font-spaceGrotesk text-base sm:text-lg text-[#BC9252] font-medium max-w-lg">
              {t("header.three")}
            </h2>

            {/* About */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-4 max-w-md pt-5">
              {t("header.about")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 pt-10">
              {CONTACT_LINKS.map(({ href, label, primary }) => (
                <a
                  key={href}
                  href={href}
                  className={`
                    flex items-center gap-2 px-6 py-2.5 rounded-xl
                    text-sm font-semibold
                    border-2 border-[#00F6FF]
                    hover:scale-105 hover:shadow-lg
                    transition-all duration-200
                    ${primary
                      ? "bg-[#00F6FF] text-black shadow-md"
                      : "bg-transparent text-black dark:text-white"
                    }
                  `}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      </section>

      {/* ── MARQUEE ── */}
      <div className="relative w-full h-14 sm:h-16 bg-[#00F6FF] flex items-center overflow-hidden font-black text-black">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap animate-marquee"
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-2xl sm:text-3xl tracking-widest px-8 uppercase">
              KOUKI WEB 
            </span>
          ))}
        </div>
      </div>

     
    </>
  );
}
