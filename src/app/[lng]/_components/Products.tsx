import Image from "next/image"
import { useTranslation } from "react-i18next";
import { GoGear } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import { TbWorldWww } from "react-icons/tb";
import { CiCloudOn } from "react-icons/ci";
import { RxAccessibility } from "react-icons/rx";
import { TbWorldBolt } from "react-icons/tb";
import { IoShieldOutline } from "react-icons/io5";

interface Products {
    img: string,
    alt: string
}

function NotebookMockup({ img, alt }: Products) {
  return (
    <div className="flex justify-center py-2 px-5 md:px-0">
      <div className="w-full max-w-[680px]">
        <div className="bg-gray-50 border-2 border-[#2d3f55] rounded-[12px] py-[14px] px-2 pb-0 ">

          {/* Top buttons */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>

          {/* Screen */}
          <div className="bg-[#0a1628] rounded-t-[6px] h-[320px] overflow-y-auto overflow-x-hidden relative border-2 bo">
            <Image
              src={img}
              alt={alt}
              width={1400}
              height={3000}
              className="
                w-full
                h-auto
                object-cover
                object-top
              "
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export function StickyShowcase() {

    const [t] = useTranslation()

    const normalImages = [
        {
            img: '/products/5/2.png',
            title: t('product_web.showcase.catalog.title'),
            about: t('product_web.showcase.catalog.about'),
        },
        {
            img: '/products/5/3.png',
            title: t('product_web.showcase.details.title'),
            about: t('product_web.showcase.details.about'),
        }
    ]

    const verticalImages = [
        {
            img: '/products/5/4.png',
            title: t('product_web.showcase.mobile.title'),
            about: t('product_web.showcase.mobile.about'),
        },
        {
            img: '/products/5/5.png',
            title: t('product_web.showcase.responsive.title'),
            about: t('product_web.showcase.responsive.about'),
        }
    ]

    return (
        <section className="bg-[#03152C] py-20">

            <div className="max-w-7xl mx-auto px-5 md:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div
                        className="
                            lg:sticky
                            top-15 lg:top-20
                            z-20
                            h-fit
                            bg-[#03152C]/90
                            backdrop-blur-md
                            py-6
                            self-start
                        "
                    >

                        <p className="text-[#00F6FF] text-sm tracking-[0.3rem] mb-4">
                            {t('product_web.showcase.badge')}
                        </p>

                        <h2
                            className="
                                text-white
                                text-4xl md:text-6xl
                                font-bold
                                leading-tight
                                mb-6
                            "
                        >
                            {t('product_web.showcase.title')}
                        </h2>

                        <p
                            className="
                                text-[#9CA3AF]
                                text-sm md:text-lg
                                leading-relaxed
                                max-w-[500px]
                            "
                        >
                            {t('product_web.showcase.about')}
                        </p>

                    </div>

                    <div className="flex flex-col gap-8">

                        {normalImages.map((item, index) => (
                            <div
                                key={index}
                                className="
                                    overflow-hidden
                                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                                "
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={1600}
                                    height={1200}
                                    className="
                                        w-full
                                        h-auto
                                        object-cover
                                    "
                                />
                            </div>
                        ))}

                        <div className="grid grid-cols-2 gap-5 h-90 md:h-150">

                            {verticalImages.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        overflow-hidden
                                    "
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={800}
                                        height={1600}
                                        className="
                                            w-full
                                            h-auto
                                            object-cover
                                        "
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export function StickyShowcase_Two() {

    const [t] = useTranslation()

    const firstSection = {
        img: '/products/5/6.png',
        title: t('product_web.management.dashboard.title'),
        about: t('product_web.management.dashboard.about'),
    }

    const secondSection = {
        title: t('product_web.management.mobile.title'),
        about: t('product_web.management.mobile.about'),
        images: [
            '/products/5/7.png',
            '/products/5/8.png',
            '/products/5/9.png'
        ],
    }

    return (
        <section className="bg-[#03152C] py-20">

            <div className="max-w-7xl mx-auto px-5 md:px-10">

                <div
                    className="
                        flex flex-col
                        items-center lg:items-start
                        text-center lg:text-left
                        mb-20
                    "
                >

                    <p className="text-[#00F6FF] text-sm tracking-[0.3rem] mb-4">
                        {t('product_web.management.badge')}
                    </p>

                    <h2
                        className="
                            text-white
                            text-4xl md:text-6xl
                            font-bold
                            leading-tight
                            mb-6
                            max-w-[800px]
                        "
                    >
                        {t('product_web.management.title')}
                    </h2>

                    <p
                        className="
                            text-[#9CA3AF]
                            text-sm md:text-lg
                            leading-relaxed
                            max-w-[700px]
                        "
                    >
                        {t('product_web.management.about')}
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-30">

                    <div className="overflow-hidden">

                        <Image
                            src={firstSection.img}
                            alt={firstSection.title}
                            width={1600}
                            height={1200}
                            className="
                                w-full
                                h-auto
                                object-cover
                            "
                        />

                    </div>

                    <div
                        className="
                            lg:sticky
                            lg:top-20
                            h-fit
                            self-start
                        "
                    >

                        <h3
                            className="
                                text-white
                                text-3xl md:text-5xl
                                font-bold
                                mb-5
                                text-center lg:text-left
                            "
                        >
                            {firstSection.title}
                        </h3>

                        <p
                            className="
                                text-[#9CA3AF]
                                text-sm md:text-lg
                                leading-relaxed
                                text-center lg:text-left
                            "
                        >
                            {firstSection.about}
                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="grid grid-cols-2 gap-5">

                        <div className="col-span-2 overflow-hidden">

                            <Image
                                src={secondSection.images[0]}
                                alt="Mobile Preview"
                                width={1400}
                                height={900}
                                className="
                                    w-full
                                    h-auto
                                    object-cover
                                "
                            />

                        </div>

                        <div className="overflow-hidden">

                            <Image
                                src={secondSection.images[1]}
                                alt="Mobile Preview"
                                width={800}
                                height={1600}
                                className="
                                    w-full
                                    h-auto
                                    object-cover
                                "
                            />

                        </div>

                        <div className="overflow-hidden">

                            <Image
                                src={secondSection.images[2]}
                                alt="Mobile Preview"
                                width={800}
                                height={1600}
                                className="
                                    w-full
                                    h-auto
                                    object-cover
                                "
                            />

                        </div>

                    </div>

                    <div
                        className="
                            lg:sticky
                            lg:top-60
                            h-fit
                            self-start
                        "
                    >

                        <h3
                            className="
                                text-white
                                text-3xl md:text-5xl
                                font-bold
                                mb-5
                                text-center lg:text-left
                            "
                        >
                            {secondSection.title}
                        </h3>

                        <p
                            className="
                                text-[#9CA3AF]
                                text-sm md:text-lg
                                leading-relaxed
                                text-center lg:text-left
                            "
                        >
                            {secondSection.about}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}

export function StickyShowcase_Three() {

    const [t] = useTranslation()

    const normalImages = [
        {
            img: '/savanna/1.png',
            title: "",
            about: "",
        },
        {
            img: '/savanna/4.gif',
            title: "",
            about: "",
        }
    ]

    const verticalImages = [
        {
            img: '/savanna/5.png',
            title: "",
            about: "",
        },
        {
            img: '/savanna/6.png',
            title: "",
            about: "",
        }
    ]

    return (
        <section id="system" className="bg-[#03152C] py-20">

            <div className="max-w-7xl mx-auto px-5 md:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div
                        className="
                            lg:sticky
                            top-15 lg:top-20
                            z-20
                            h-fit
                            bg-[#03152C]/90
                            backdrop-blur-md
                            py-6
                            self-start
                        "
                        >
                        <p className="font-jetbrainsMono text-[#00F6FF] text-sm uppercase tracking-[0.3rem] mb-4">
                            {t('product_web.system.subtitle')}
                        </p>

                        <h2 className="font-fraunces text-white text-4xl md:text-6xl font-semibold leading-tight mb-6">
                            {t('product_web.system.title')}
                        </h2>

                        <p className="font-abeezee text-[#9CA3AF] text-sm md:text-lg leading-relaxed max-w-[500px] mb-8">
                            {t('product_web.system.about')}
                        </p>

                        <div className="flex flex-col gap-5 max-w-[500px]">
                            {[
                            {
                                group: `${t('product_web.system.list.one.title')}`,
                                items: [`${t('product_web.system.list.one.list.one')}`, `${t('product_web.system.list.one.list.two')}`],
                            },
                            {
                                group: `${t('product_web.system.list.two.title')}`,
                                items: [`${t('product_web.system.list.two.list.one')}`, `${t('product_web.system.list.two.list.two')}`],
                            },
                            {
                                group: `${t('product_web.system.list.three.title')}`,
                                items: [`${t('product_web.system.list.three.list.one')}`, `${t('product_web.system.list.three.list.two')}`],
                            },
                            ].map((section) => (
                            <div key={section.group}>
                                <p className="font-abeezee text-white text-sm font-semibold mb-2">{section.group}</p>
                                <ul className="flex flex-col gap-2">
                                {section.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 font-abeezee text-[#9CA3AF] text-sm md:text-base">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F6FF] shrink-0" />
                                    {item}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>

                        {/* Outras aplicações — reforça amplitude sem precisar de parágrafo */}
                        <p className="font-abeezee text-[#9CA3AF]/70 text-xs md:text-sm italic leading-relaxed max-w-[500px] mt-8">
                            {t('product_web.system.more')}
                        </p>
                        </div>

                    <div className="flex flex-col gap-8">

                        {normalImages.map((item, index) => (
                            <div
                                key={index}
                                className="
                                    overflow-hidden
                                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                                "
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={1600}
                                    height={1200}
                                    className="
                                        w-full
                                        h-auto
                                        object-cover
                                    "
                                />
                            </div>
                        ))}

                        <div className="grid grid-cols-2 gap-5 h-auto">

                            {verticalImages.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        overflow-hidden
                                    "
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={800}
                                        height={1600}
                                        className="
                                            w-full
                                            h-auto
                                            object-cover
                                        "
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}


export default function Products(){

    const [t,i18n] = useTranslation()

    const services = [
        {icon:GoGear, title:`${t('product_web.services.one.title')}`, about:`${t('product_web.services.one.about')}`, stockW:"0"},
        {icon:GoDatabase, title:`${t('product_web.services.two.title')}`, about:`${t('product_web.services.two.about')}`,stockW:"0"},
        {icon: TbWorldWww, title:`${t('product_web.services.three.title')}`,about:`${t('product_web.services.three.about')}`,stockW:"1"},
        {icon: CiCloudOn, title:`${t('product_web.services.four.title')}`,about:`${t('product_web.services.four.about')}`,stockW:"0"},
        {icon: RxAccessibility, title:`${t('product_web.services.five.title')}`,about:`${t('product_web.services.five.about')}`,stockW:"0"},
        {icon: TbWorldBolt, title:`${t('product_web.services.six.title')}`,about:`${t('product_web.services.six.about')}`,stockW:"1"},
        {icon: IoShieldOutline, title:`${t('product_web.services.seven.title')}`,about:`${t('product_web.services.seven.about')}`,stockW:"1"},
   ]
   const techLogo = [
    {icon: "/logos/react.png", alt:"React Logo"},
    {icon: "/logos/typescript.png", alt:"Typescript Logo"},
    {icon: "/logos/tailwind.png",alt:"Tailwind Logo"},
    {icon: "/logos/postgresql.png",alt:"PostgrSql Logo"},
    {icon: "/logos/authjs.webp", alt:"Auth Js Logo"},
    {icon: "/logos/nextjs.webp", alt:"Next Js Logo"},
   ]

    const techCompany = [
        {icon: "/logos/tesla.png", alt:"Tesla Logo"},
        {icon: "/logos/facebook.png",alt:"Facebook Logo"},
        {icon: "/logos/instagram.png", alt:"Instagram Logo"},
        {icon: "/logos/uber.png", alt:"Uber Logo"},
        {icon: "/logos/mercado.png", alt:"Mercado Livre Logo"},
        {icon: "/logos/whatsapp.png", alt:"Whastapp Logo"},
        {icon: "/logos/discord.png", alt:"Discord Logo"},
        {icon: "/logos/ifood.png", alt:"Ifood Logo"},
    ]

    const design = [
        {img:"/products/2/1.png", alt:""},
        {img:"/products/3.png", alt:""},
        {img:"/products/4.png", alt:""},
        {img:"/products/5/1.png", alt:""},
    ]

    const isJP = i18n.language === "jp"

    return (
        <section id="products-web" className="bg-neutral-primary dark:bg-[#03152C]">

            <StickyShowcase/>

            <StickyShowcase_Two/>

            <StickyShowcase_Three />

            <div className="flex justify-center px-10">
                <div className="flex flex-col justify-center pt-25 space-y-10">
                <div className="relative">
                        <h2
                            className={`
                            md:text-[90px]
                            leading-4 sm:leading-7
                            text-black/20 dark:text-[#939393] dark:opacity-22
                            font-anton
                            sm:tracking-[1.5rem]
                            ${isJP ? "tracking-[0rem] text-[45px] sm:text-[50px]" : "tracking-[1rem] text-[40px] sm:text-[70px]"}
                            `}
                        >
                            {t('product_web.title')} 
                        </h2>

                        <h2
                            className="
                            absolute
                            bottom-0
                            m-0
                            text-[22px] sm:text-[40px] md:text-[50px]
                            leading-0
                            text-[#00F6FF]
                            "
                        >
                            {t('product_web.subtitle')}
                        </h2>
                </div>

                <p className="dark:text-white text-black w-[50%] text-2xs md:text-[15px]">
                    {t('product_web.about')}
                </p>

                </div>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
                {design.map((p, index) => (
                    <NotebookMockup 
                    key={index}
                    img={p.img}
                    alt={p.alt}/>
                ))}
            </div>
            
            {/* 
            <div className="flex justify-center px-10">
            <div>
            <a href="/products" className="relative flex justify-center w-full max-w-300 z-10">
            <Image
            src="/product_web_white.webp"
            className="w-full hidden dark:flex"
            width={700}
            height={700}
            alt="Web product models available for sale"  
            />
            
            <Image
            src="/product_web_black.webp"
            className="w-full flex dark:hidden"
            width={700}
            height={700}
            alt="Web product models available for sale"          
            />
            </a>
            </div>
            </div>*/}
                            
            <div className="flex justify-center">
                <p className="pt-15 pb-5 px-20 pr-40 sm:pr-100 dark:text-white text-black  text-[20px] md:text-[35px] text-nowrap">
                    {t('product_web.service_sub')}
                </p>
            </div>
            
            <div className="flex justify-center px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-7">

                    {services.map((s, index) => (
                        <div
                            key={index}
                            className="
                                w-38 h-38
                                sm:w-50 sm:h-50
                                border-[#00F6FF]
                                border
                                rounded-2xl sm:rounded-3xl
                                flex flex-col justify-center items-center
                                p-3 sm:p-5
                            "
                        >
                            <s.icon
                                strokeWidth={s.stockW}
                                className="w-[40%] h-[40%] sm:w-[50%] sm:h-[50%] text-[#008185]"
                            />

                            <p className="text-[#00F6FF] font-bold text-xs sm:text-base text-center">
                                {s.title}
                            </p>

                            <p className="text-[#939393] text-[8px] sm:text-[9px] text-center">
                                {s.about}
                            </p>
                        </div>
                    ))}
                </div>
            </div>



            <div className="flex flex-col justify-center items-center gap-5 pt-10">

            <div className="flex space-x-2 items-center">
                <div className="w-1 h-1 rounded-full bg-[#00F6FF]" />
                <p className="dark:text-white text-black">
                    {t('product_web.languages.title')}
                </p>
                <div className="w-1 h-1 rounded-full bg-[#00F6FF]" />
            </div>

            <p className="text-2xs sm:text-2xl dark:text-white text-black px-10 text-wrap">
                {t('product_web.languages.about')}
            </p>

            {/* TECH LOGOS */}
            {/*
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 opacity-50">

                
                {techLogo.map((t, index) => (
                    <div
                        key={index}
                        className="
                            border-[#6C6C6C]
                            border
                            flex justify-center items-center
                            p-3 sm:p-5
                            w-24 h-24
                            sm:w-50 sm:h-auto
                        "
                    >
                        <Image
                            className="w-10 h-10 sm:w-15 sm:h-15"
                            loading="lazy"
                            src={t.icon}
                            alt={t.alt}
                            width={50}
                            height={50}
                        />
                    </div>
                ))}
                
            </div>
            */}

            <div className="flex flex-col items-start">

                <p className="dark:text-white text-black text-2xs sm:text-2xl">
                    {t('product_web.languages.about_company')}
                </p>

                {/* COMPANY LOGOS */}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4  opacity-50">

                    {techCompany.map((t, index) => (
                        <div
                            key={index}
                            className="
                                border-[#6C6C6C]
                                border
                                flex justify-center items-center
                                p-3 sm:p-5
                                w-24 h-24
                                sm:w-50 sm:h-auto
                            "
                        >
                            <Image
                                className="w-10 h-10 sm:w-15 sm:h-15"
                                src={t.icon}
                                alt={t.alt}
                                width={50}
                                height={50}
                            />
                        </div>
                    ))}
                </div>
                </div>
            </div>

        </section>
    )
}
