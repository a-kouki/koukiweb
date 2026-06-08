import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Upgrade() {
  const { t, i18n } = useTranslation();

  const imgUp = [
    {
      im_1: "/upgrade_img/1.jpg",
      im_2: "/upgrade_img/2.png",
      label: "Food image enhancement",
      h: "h-20",
      smH: "30",
      w: "w-40",
      smW: "70",
    },
    {
      im_1: "/upgrade_img/3.jpg",
      im_2: "/upgrade_img/4.png",
      label: "Food image enhancement",
      h: "h-35",
      smH: "70",
      w: "w-40",
      smW: "70",
    },
    {
      im_1: "/upgrade_img/5.jpg",
      im_2: "/upgrade_img/6.png",
      label: "Food image enhancement",
      h: "h-35",
      smH: "70",
      w: "w-40",
      smW: "70",
    },
    {
      im_1: "/upgrade_img/7.png",
      im_2: "/upgrade_img/8.png",
      label: "Food image enhancement",
      h: "h-35",
      smH: "70",
      w: "w-40",
      smW: "70",
    },
  ];

  const logoImg = [
    { img_1: "/upgrade_img/logo/1.png", label: "Logo redesign variation" },
    { img_1: "/upgrade_img/logo/2.png", label: "Logo redesign variation" },
    { img_1: "/upgrade_img/logo/4.png", label: "Logo redesign variation" },
    { img_1: "/upgrade_img/logo/6.png", label: "Logo redesign variation" },
    { img_1: "/upgrade_img/logo/7.png", label: "Logo redesign variation" },
    { img_1: "/upgrade_img/logo/8.png", label: "Logo redesign variation" },
  ];

  const logoEst = [
    {
      img_1: "/upgrade_img/logo/estação/inverno.png",
      name: t("upgrade_img.season.inverno"),
      label: "Winter themed logo",
    },
    {
      img_1: "/upgrade_img/logo/estação/outono.png",
      name: t("upgrade_img.season.outono"),
      label: "Autumn themed logo",
    },
    {
      img_1: "/upgrade_img/logo/estação/primavera.png",
      name: t("upgrade_img.season.primavera"),
      label: "Spring themed logo",
    },
    {
      img_1: "/upgrade_img/logo/estação/verao.png",
      name: t("upgrade_img.season.verao"),
      label: "Summer themed logo",
    },
  ];

  const logoTema = [
    {
      img_1: "/upgrade_img/logo/tema/natal.png",
      name: t("upgrade_img.specialData.chrismass"),
      label: "Christmas themed logo",
    },
    {
      img_1: "/upgrade_img/logo/tema/new-year.png",
      name: t("upgrade_img.specialData.newYear"),
      label: "New year themed logo",
    },
    {
      img_1: "/upgrade_img/logo/tema/love.png",
      name: t("upgrade_img.specialData.valent"),
      label: "Valentine’s day themed logo",
    },
    {
      img_1: "/upgrade_img/logo/tema/soccer.png",
      name: t("upgrade_img.specialData.soccer"),
      label: "Soccer themed logo",
    },
  ];

    const isJP = i18n.language === "jp"

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

          <p className="dark:text-white text-black w-[50%] text-2xs md:text-[15px]">
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
          <div
            className="
              relative z-10
              flex flex-col items-start gap-y-2
            "
          >

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
                alt={`${t("upgrade_img.before")} — ${i.label} ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 200px, 420px"
                className="
                  object-cover
                  object-center
                "
              />

            </div>

            <div className="bg-linear-to-r from-[#00F6FF] to-transparent rounded-full p-[1px]">
              <p
                className="
                  px-4 py-1
                  dark:bg-black bg-white
                  rounded-full
                  dark:text-white text-black
                  text-[10px] sm:text-sm
                "
              >
                {t("upgrade_img.before")}
              </p>
            </div>

          </div>

          {/* AFTER */}
          <div
            className="
              relative z-20
              flex flex-col items-end gap-y-2
              -ml-10 sm:-ml-20
            "
          >

            <div className="bg-linear-to-l from-[#00F6FF] to-transparent rounded-full p-[1px]">
              <p
                className="
                  px-4 py-1
                  dark:bg-black bg-white
                  rounded-full
                  dark:text-white text-black
                  text-[10px] sm:text-sm
                "
              >
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
                alt={`${t("upgrade_img.after")} — ${i.label} ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 200px, 420px"
                className="
                  object-cover
                  object-center
                "
              />

            </div>

          </div>

        </div>
      ))}


    </section>
  );
}

      {/*
      <div className="flex flex-col justify-center items-center text-[12px] px-10 pt-5">
        <h3 className="dark:text-white text-[20px] sm:text-3xl font-bold text-black">
          {t("upgrade_img.logo.title.one")}
          <span className="text-[#00F6FF]"> {t("upgrade_img.logo.title.two")}</span>
        </h3>
        <p className="dark:text-white text-2xs sm:text-[15px] px-5 max-w-3xl text-black">
          {t("upgrade_img.logo.about")}
        </p>
      </div>

      <div className="flex justify-center relative py-5 sm:py-10">
        <div className="relative z-10 flex flex-col items-start gap-y-1">
          <div className="bg-linear-to-r from-[#00F6FF] to-transparent rounded-full p-0.5">
            <p className="px-5 dark:bg-black bg-white rounded-full dark:text-white text-black text-2xs sm:text-[14px]">
              {t("upgrade_img.before")}
            </p>
          </div>

          <Image
            src="/upgrade_img/logo/before.png"
            className="w-20 sm:w-30"
            width={100}
            height={100}
            alt={`${t("upgrade_img.before")}`}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative py-5 sm:py-10 gap-y-2">
        <div className="relative z-20 flex flex-col items-end gap-y-1">
          <div className="bg-linear-to-l from-[#00F6FF] to-transparent rounded-full p-0.5">
            <p className="px-5 dark:bg-black bg-white rounded-full dark:text-white text-black text-2xs sm:text-[14px]">
              {t("upgrade_img.after")}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {logoImg.map((l, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={l.img_1}
                  className="w-20 sm:w-30"
                  width={100}
                  height={100}
                  alt={`${l.label} ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xs text-gray-500">{t("upgrade_img.example")}</p>
      </div>

      <div className="flex justify-center px-10 sm:pr-40">
        <h3 className=" dark:text-white sm:px-10 sm:max-w-3xl sm:text-[15px] text-2xs text-black">
          {t("upgrade_img.manyStyle")}
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center relative py-5 sm:py-10 gap-y-2">
        <div className="relative z-20 flex flex-col items-end gap-y-1">
          <p className="rounded-full dark:text-[#00F6FF] text-black text-[13px] sm:text-[24px]">
            {t("upgrade_img.season.title")}
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {logoEst.map((l, index) => (
              <div key={index} className="flex items-center flex-col justify-end">
                <p className="dark:text-white text-black text-2xs sm:text-[15px] max-w-20">
                  {l.name}
                </p>
                <Image
                  src={l.img_1}
                  className="w-20 sm:w-30"
                  width={100}
                  height={100}
                  alt={`${l.label} — ${l.name}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xs text-gray-500">{t("upgrade_img.example")}</p>
      </div>
      
      <div className="flex justify-center  sm:pr-40">
      <h3 className="font-anton flex flex-wrap justify-center gap-2 dark:text-white text-black px-10 max-w-3xl sm:text-3xl text-[15px]">
        <span>{t("upgrade_img.cool.one")}</span>
        <span className="text-[#00F6FF]">{t("upgrade_img.cool.two")}</span>
        <span>{t("upgrade_img.cool.three")}</span>
        <span className="text-[#00F6FF]">{t("upgrade_img.cool.four")}</span>
        <span>{t("upgrade_img.cool.five")}</span>
      </h3>
      </div>

      <div className="flex flex-col items-center justify-center relative py-5 sm:py-10 gap-y-2">
        <div className="relative z-20 flex flex-col items-end gap-y-1">
          <p className="rounded-full dark:text-[#00F6FF] text-black text-[13px] sm:text-[24px]">
            {t("upgrade_img.specialData.title")}
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {logoTema.map((l, index) => (
              <div key={index} className="flex items-center justify-end flex-col">
                <p className="dark:text-white text-black text-2xs sm:text-[15px] max-w-20">
                  {l.name}
                </p>
                <Image
                  src={l.img_1}
                  className="w-20 sm:w-30"
                  width={100}
                  height={100}
                  alt={`${l.label} — ${l.name}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xs text-gray-500">{t("upgrade_img.example")}</p>
      </div>
      */}
