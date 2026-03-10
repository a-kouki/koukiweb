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
          <div className="
            absolute flex justify-center
            w-[600px] h-[600px] rounded-full
            bg-[#2A0DCB] opacity-[0.08] dark:opacity-[0.15]
            blur-[140px]
          " />

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

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease both; }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right { animation: fade-in-right 0.9s 0.3s ease both; }

        /* Leão respira suavemente — sobe e desce */
        @keyframes lion-breathe {
          0%, 100% { transform: translateY(0px)   scale(1);     }
          40%       { transform: translateY(-12px) scale(1.015); }
          60%       { transform: translateY(-5px)  scale(1.008); }
        }
        .animate-lion-breathe {
          transform-origin: center bottom;
          animation: lion-breathe 4s ease-in-out infinite;
        }

        /* Vento pulsa e deriva para a esquerda no pico do sopro */
        @keyframes wind-blow {
          0%   { opacity: 0.15; transform: scaleX(1) translateX(0px);   }
          40%  { opacity: 0.25; transform: scaleX(1) translateX(-8px);  }
          60%  { opacity: 0.38; transform: scaleX(1) translateX(-16px); }
          80%  { opacity: 0.22; transform: scaleX(1) translateX(-22px); }
          100% { opacity: 0.15; transform: scaleX(1) translateX(0px);   }
        }
        .animate-wind-blow { animation: wind-blow 4s ease-in-out infinite; }

        .dark .animate-wind-blow { animation: wind-blow-dark 4s ease-in-out infinite; }
        @keyframes wind-blow-dark {
          0%   { opacity: 0.20; transform: scaleX(1) translateX(0px);   }
          40%  { opacity: 0.32; transform: scaleX(1) translateX(-8px);  }
          60%  { opacity: 0.48; transform: scaleX(1) translateX(-16px); }
          80%  { opacity: 0.28; transform: scaleX(1) translateX(-22px); }
          100% { opacity: 0.20; transform: scaleX(1) translateX(0px);   }
        }
      `}</style>
    </>
  );
}
