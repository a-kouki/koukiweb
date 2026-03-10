import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TbDeviceIpadCode, TbPencilStar, TbLayoutGridAdd } from "react-icons/tb";

export default function Services() {
  const [t] = useTranslation();

  const contentService = [
    {
      icon: TbDeviceIpadCode,
      title: `${t("services.container.one.title")}`,
      about: `${t("services.container.one.about")}`,
    },
    // descomente para adicionar mais:
    // { icon: FaMagic, title: `${t('services.container.two.title')}`, about: `${t('services.container.two.about')}` },
  ];

  return (
    <section id="services" className="bg-neutral-primary dark:bg-[#03152C]">
      {/* ── Cabeçalho ── */}
      <div className="relative flex justify-center pt-25 sm:pt-40 pb-20">
        <div className="relative flex flex-col items-center">
          {/* Badge título */}
          <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
            <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
              <p>{t("services.title")}</p>
              <span className="absolute -top-2 -right-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
              <span className="absolute -bottom-2 -left-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />
            </div>
          </div>

          {/* Heading decorativo */}
          <div className="relative flex justify-center">
            <h2 className="text-[50px] sm:text-[70px] md:text-[90px] leading-4 sm:leading-5 text-black/20 dark:text-[#939393] dark:opacity-22 font-anton tracking-[0.6rem] sm:tracking-[1.5rem]">
              {t("services.topic_2")}
            </h2>
            <h2 className="absolute bottom-0 m-0 text-[30px] sm:text-[40px] md:text-[50px] leading-0 text-[#00F6FF]">
              {t("services.topic")}
            </h2>
          </div>
        </div>
      </div>

      {/* ── Cards no estilo da referência ── */}
      <div className="flex flex-col items-center gap-5 px-4 ">
        {contentService.map((c, index) => (
          <ServiceCard key={index} icon={c.icon} title={c.title} about={c.about} />
        ))}
      </div>

      {/* ── Divisor ── */}
      <div className="flex justify-center">
        <div className="flex justify-center border-dashed border h-20 border-white/20" />
      </div>

      {/* ── Sub-cards inferiores no estilo da referência ── */}
      <div className="flex flex-col items-center gap-5 px-4 pb-20">

        {/* Sub-card 1 */}
        <div className="relative group w-full max-w-2xl">
          <div className="absolute left-0 top-6 w-1 h-16 bg-blue-600 rounded-r-full z-10" />
          <div className="
            relative z-20 ml-4
            flex flex-row items-center
            bg-[#0C1117]
            border border-gray-700
            rounded-2xl
            pl-6 pr-0 py-0
            gap-6
            overflow-hidden
            min-h-[110px]
            transition-all duration-300
            hover:border-cyan-500/50
            hover:shadow-[0_0_30px_rgba(0,246,255,0.08)]
          ">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

            {/* Ícone */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#0D1F2D] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,246,255,0.15)]">
              <TbPencilStar className="w-7 h-7 text-cyan-400" />
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-1 flex-1 min-w-0 py-6">
                <h3 className="text-white text-xl font-semibold leading-tight">
                    {t("services.container.one.subs.one.title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t("services.container.one.subs.one.text")}
                </p>
                <a
                    href="#products-web"
                    className="mt-1 z-10 self-start h-8 px-5 flex items-center justify-center text-white text-sm bg-blue-600 rounded-full hover:bg-blue-700 transition"
                >
                    {t("services.container.one.subs.two.more")}
                </a>
            </div>

            {/* 3 imagens em sequência sangrando na borda direita/baixo */}
            <div className="absolute sm:relative shrink-0  self-stretch w-44 h-36 sm:h-auto -bottom-8 sm:-bottom-0 right-0">
            <div className="absolute bottom-0 right-24 w-20 h-full opacity-40 rotate-[-8deg] translate-y-3">
                <Image src="/type_service/1.png" alt="service" fill loading="lazy" className="object-contain object-bottom" />
            </div>
            <div className="absolute bottom-0 right-10 w-24 h-full opacity-70 rotate-[-3deg] translate-y-1">
                <Image src="/type_service/2.png" alt="service" fill loading="lazy" className="object-contain object-bottom" />
            </div>
            <div className="absolute bottom-0 right-0 w-28 h-[115%]">
                <Image src="/type_service/3.png" alt="service" fill loading="lazy" className="object-contain object-bottom" />
            </div>
            </div>
          </div>
        </div>

        {/* Sub-card 2 */}
        <div className="relative group w-full max-w-2xl">
          <div className="absolute left-0 top-6 w-1 h-16 bg-blue-600 rounded-r-full z-10" />
          <div className="
            relative z-20 ml-4
            flex flex-row items-center
            bg-[#0C1117]
            border border-gray-700
            rounded-2xl
            pl-6 pr-0 py-0
            gap-6
            overflow-hidden
            min-h-[110px]
            transition-all duration-300
            hover:border-cyan-500/50
            hover:shadow-[0_0_30px_rgba(0,246,255,0.08)]
          ">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

            {/* Ícone */}
            <div className="shrink-0 w-14 h-14 rounded-xl bg-[#0D1F2D] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,246,255,0.15)]">
              <TbLayoutGridAdd  className="w-7 h-7 text-cyan-400" />
            </div>

            {/* Texto + botão */}
            <div className="flex flex-col sm:flex-row flex-1 min-w-0 items-end">
                <div className="flex flex-col gap-2 flex-1 min-w-0 py-6">
                    <h3 className="text-white text-xl font-semibold leading-tight">
                        {t("services.container.one.subs.two.title")}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {t("services.container.one.subs.two.text")}
                    </p>
                    
                    <a
                        href="/template-models"
                        className="mt-1 z-10 self-start h-8 px-5 flex items-center justify-center text-white text-sm bg-blue-600 rounded-full hover:bg-blue-700 transition"
                    >
                        {t("services.container.one.subs.two.more")}
                    </a>
                </div>

                {/* 3 imagens lado a lado sangrando na borda direita/baixo */}
                <div className="absolute -bottom-17 sm:-bottom-0 sm:relative shrink-0 w-40 h-36 sm:h-auto sm:w-52 sm:self-stretch">
                    <div className="absolute bottom-0 left-5 sm:left-0 w-20 h-full opacity-40 rotate-[6deg] translate-y-2 translate-x-[-8px] sm:h-[115%]">
                        <Image src="/templates-models/1/3.png" alt="service" fill loading="lazy" className="object-contain object-bottom" />
                    </div>
                    <div className="absolute bottom-0 left-10 sm:left-12 w-24 h-full opacity-70 rotate-[2deg] translate-y-1 sm:h-[115%]">
                        <Image src="/templates-models/1/2.png" alt="service" fill loading="lazy" className="object-contain object-bottom" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 sm:w-28 h-full sm:h-[120%]">
                        <Image src="/templates-models/1/1.png" alt="service" fill loading="lazy" className="object-contain object-bottom" />
                    </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Componente interno ServiceCard ── */
function ServiceCard({ icon: Icon, title, about }: any) {
  return (
    <div className="relative group w-full max-w-2xl">
      {/* Barra lateral azul */}
      <div className="absolute left-0 top-6 w-1 h-16 bg-blue-600 rounded-r-full z-10" />

      <div
        className="
          relative z-20 ml-4
          flex flex-row items-center
          bg-[#0C1117]
          border border-gray-700
          rounded-2xl
          px-6 py-6
          gap-6
          overflow-hidden
          transition-all duration-300
          hover:border-cyan-500/50
          hover:shadow-[0_0_30px_rgba(0,246,255,0.08)]
        "
      >
        {/* Glow de fundo */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Ícone */}
        <div
          className="
            flex-shrink-0
            w-14 h-14
            rounded-xl
            bg-[#0D1F2D]
            border border-cyan-500/30
            flex items-center justify-center
            shadow-[0_0_15px_rgba(0,246,255,0.15)]
          "
        >
          <Icon className="w-7 h-7 text-cyan-400" />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <h3 className="text-white text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{about}</p>
        </div>

        
      </div>
    </div>
  );
}
