import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Upgrade() {
  const { t, i18n } = useTranslation();

  const imgUp = [
    { im_1: "/upgrade_img/1.jpg", im_2: "/upgrade_img/2.png", caption: "Correção de iluminação e nitidez" },
    { im_1: "/upgrade_img/3.jpg", im_2: "/upgrade_img/4.png", caption: "Remoção de fundo e realce de cor" },
    { im_1: "/upgrade_img/5.jpg", im_2: "/upgrade_img/6.png", caption: "Ajuste de composição e contraste" },
    { im_1: "/upgrade_img/7.png", im_2: "/upgrade_img/8.png", caption: "Padronização visual entre fotos" },
  ];

  const isJP = i18n.language === "jp";

  return (
    <section className="bg-neutral-primary dark:bg-linear-to-b from-[#03152C] via-black to-[#03152C]">
      <div className="flex justify-center px-10 sm:px-30">
        <div className="flex flex-col justify-center pt-25 space-y-10">
          <div className="relative">
            <h3
              className={`
                leading-4 sm:leading-7
                text-black/20 dark:text-[#939393] dark:opacity-22
                font-anton
                ${isJP ? "tracking-[0rem] text-[30px] sm:text-[50px] sm:tracking-[0rem] md:text-[70px]" : "tracking-[1rem] text-[40px] sm:text-[70px] sm:tracking-[1.5rem] md:text-[90px]"}
              `}
            >
              {t("upgrade_img.title")}
            </h3>

            <h3
              className={`
                absolute
                bottom-0
                m-0
                leading-0
                text-[#00F6FF]
                ${isJP ? "text-[18px]  sm:text-[30px] md:text-[35px]" : "text-[22px]  sm:text-[40px] md:text-[50px]"}
              `}
            >
              {t("upgrade_img.subtitle")}
            </h3>
          </div>

          <p className="dark:text-white text-black w-full sm:w-[70%] md:w-[50%] text-2xs md:text-[15px]">
            {t("upgrade_img.about")}
          </p>
        </div>
      </div>

      

      {imgUp.map((i, index) => (
        <div
          key={index}
          className="
            flex justify-center items-center
            relative
            py-8 sm:py-14
            px-4
          "
        >
          {/* BEFORE */}
          <div className="relative z-10 flex flex-col items-start gap-y-2">
            <div
              className="
                relative
                w-[190px] h-[120px]
                sm:w-[320px] sm:h-[180px]
                md:w-[420px] md:h-[240px]
                overflow-hidden
                [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]
                shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              "
            >
              <Image
                src={i.im_1}
                alt={`${t("upgrade_img.before")} — exemplo ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 200px, 420px"
                className="object-cover object-center"
              />
            </div>

            <div className="bg-linear-to-r from-[#00F6FF] to-transparent rounded-full p-[1px]">
              <p className="px-4 py-1 dark:bg-black bg-white rounded-full dark:text-white text-black text-[10px] sm:text-sm">
                {t("upgrade_img.before")}
              </p>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative z-20 flex flex-col items-end gap-y-2 -ml-10 sm:-ml-20">
            <div className="bg-linear-to-l from-[#00F6FF] to-transparent rounded-full p-[1px]">
              <p className="px-4 py-1 dark:bg-black bg-white rounded-full dark:text-white text-black text-[10px] sm:text-sm">
                {t("upgrade_img.after")}
              </p>
            </div>

            <div
              className="
                relative
                w-[190px] h-[120px]
                sm:w-[320px] sm:h-[180px]
                md:w-[420px] md:h-[240px]
                overflow-hidden
                [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]
              "
            >
              <Image
                src={i.im_2}
                alt={`${t("upgrade_img.after")} — exemplo ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 200px, 420px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}