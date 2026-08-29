"use client"
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";

const SHOWCASE = [
  { src: "/savanna/1.png", label: "Sistema de pedidos" },
  { src: "/products/2/1.png", label: "Painel administrativo" },
  { src: "/savanna/4.gif", label: "Sistema de pedidos" },
  { src: "/savanna/3.png", label: "Sistema de pedidos" },
  { src: "/savanna/2.png", label: "Sistema de pedidos" },
  { src: "/savanna/5.png", label: "Sistema de pedidos" },
  { src: "/savanna/6.png", label: "Sistema de pedidos" },
  { src: "/savanna/7.png", label: "Sistema de pedidos" },
  { src: "/products/5/1.png", label: "Sistema de pedidos" },
  { src: "/products/5/2.png", label: "Vitrine de produtos" },
  { src: "/products/2/3.png", label: "Painel administrativo" },
  { src: "/products/5/3.png", label: "Painel administrativo" },
  { src: "/templates-models/1/1.png", label: "Painel administrativo" },
  { src: "/products/2/2.png", label: "Painel administrativo" },

];

const POSITIONS = [
  { offset: "translate-x-0 translate-y-0",   z: "z-30", style: "opacity-100 blur-0" },
  { offset: "translate-x-10 translate-y-6",  z: "z-20", style: "opacity-60 blur-[1px]" },
  { offset: "translate-x-20 translate-y-12", z: "z-10", style: "opacity-0 blur-[2px]" },
];

function HeroMockup() {
  const [step, setStep] = useState(0);
  const total = SHOWCASE.length;

  useEffect(() => {
    const id = setInterval(() => setStep((prev) => prev + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md lg:max-w-lg h-[50vh] shrink-0">
      {SHOWCASE.map((card, i) => {
        const posIndex = (i - step % total + total) % total;
        const pos = POSITIONS[Math.min(posIndex, POSITIONS.length - 1)];

        return (
          <div
            key={card.src}
            className={`absolute inset-x-0 top-0 ${pos.z} ${pos.offset} ${pos.style}
                        rounded-xl overflow-hidden border border-[#BC9252]/20
                        shadow-2xl shadow-black/30 transition-all duration-700 ease-in-out
                        `}
          >

            <Image
              src={card.src}
              width={800}
              height={600}
              alt={card.label}
              className="w-full h-auto object-cover"
              priority={i === 0}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Top() {
  const { t } = useTranslation();
  const marqueeRef = useRef(null);

  const CONTACT_LINKS = [
    { href: "#services", label: t("services.topic"), primary: true },
    { href: "#contact", label: t("contact.title"), primary: false },
  ];

  return (
    <>
      <section id="top" className="bg-[#F5F5F0] dark:bg-[#03152C]">
        <div className="relative flex justify-center w-full min-h-screen overflow-hidden">
          <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center
                          gap-10 lg:gap-16 text-center lg:text-left px-6 sm:px-12 pt-28 pb-16 max-w-6xl mx-auto">

            {/* Texto */}
            <div className="flex flex-col items-center lg:items-start gap-0 max-w-xl animate-fade-in-up">

              {/* Eyebrow: tagline poética, discreta, mono só pro "Kouki Web" */}
              <span className="text-xs uppercase tracking-wider text-[#C9A24C] pb-4">
                <span className="font-jetbrainsMono">Kouki Web</span>
                <span className="font-abeezee normal-case tracking-normal text-neutral-500 dark:text-neutral-400">
                  {" "}· {t("header.one")}
                </span>
              </span>

              {/* Headline: agora com a frase clara, em serifada */}
              <h1 className="font-fraunces font-semibold text-3xl sm:text-5xl
                             text-[#1C1C1C] dark:text-[#F5F5F0] tracking-tight leading-tight">
                {t("header.three")}
              </h1>

              {/* Sub-headline: "pra quem" — novo texto, dourado como acento único */}
              <h2 className="font-abeezee text-base sm:text-lg text-[#C9A24C] font-medium max-w-lg pt-3">
                {t("header.about")}
              </h2>


              {/* CTAs: dourado como cor primária única, secundário neutro */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-10">
                {CONTACT_LINKS.map(({ href, label, primary }) => (
                  <a
                    key={href}
                    href={href}
                    className={`
                      flex items-center gap-2 px-6 py-2.5 rounded-xl
                      text-sm font-semibold font-abeezee
                      hover:scale-105 hover:shadow-lg
                      transition-all duration-200
                      ${primary
                        ? "bg-[#C9A24C] text-[#1C1C1C] border-2 border-[#C9A24C] shadow-md"
                        : "bg-transparent text-[#1C1C1C] dark:text-[#F5F5F0] border-2 border-[#1C1C1C]/20 dark:border-white/20"
                      }
                    `}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Marquee: dourado no lugar do ciano, texto com conteúdo real em vez de repetição pura */}
      <div className="relative w-full h-14 sm:h-16 bg-[#C9A24C] flex items-center overflow-hidden font-black text-[#1C1C1C]">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap animate-marquee font-abeezee"
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-2xl sm:text-3xl tracking-widest px-8 uppercase flex items-center gap-8">
              KOUKI WEB
              <span className="text-base font-normal opacity-70">creation · management · growth</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}