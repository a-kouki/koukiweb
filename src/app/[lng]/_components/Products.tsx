import Image from "next/image"
import { useTranslation } from "react-i18next";
import { GoGear } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import { TbWorldWww } from "react-icons/tb";
import { CiCloudOn } from "react-icons/ci";
import { RxAccessibility } from "react-icons/rx";
import { TbWorldBolt } from "react-icons/tb";
import { IoShieldOutline } from "react-icons/io5";


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

    const isJP = i18n.language === "jp"

    return (
        <section id="products-web" className="bg-neutral-primary dark:bg-[#03152C]">
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

            <a href="/products">
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
                            
        <div className="flex justify-center">
            <p className="pt-15 pb-5 px-20 pr-40 sm:pr-100 dark:text-white text-black  text-[20px] md:text-[35px] text-nowrap">
                {t('product_web.service_sub')}
            </p>
        </div>
        
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {services.map((s, index) => (
                <div key={index} className="w-50 h-50 border-[#00F6FF] border rounded-3xl flex flex-col justify-center items-center p-5">
                    <s.icon strokeWidth={s.stockW} className="w-[50%] h-[50%] text-[#008185]"/>
                    <p className="text-[#00F6FF] font-bold">{s.title}</p>
                    <p className="text-[#939393] text-[9px] text-center">{s.about}</p>
                </div>
            ))}
            </div>
        </div>



        <div className="flex flex-col justify-center items-center gap-5 pt-10">
            <div className="flex space-x-2 items-center">
                <div className="w-1 h-1 rounded-full bg-[#00F6FF] "></div>
                <p className="dark:text-white text-black">{t('product_web.languages.title')}</p>
                <div className="w-1 h-1 rounded-full bg-[#00F6FF] "></div>
            </div>


            <p className="text-2xs sm:text-2xl dark:text-white text-black px-10 text-wrap ">
                {t('product_web.languages.about')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 opacity-50">
                {techLogo.map((t, index) => (
                    <div key={index} className="border-[#6C6C6C] border flex justify-center items-center p-5 w-35 sm:w-50">
                    <Image
                    className="w-15 h-15"
                    loading="lazy"
                    src={t.icon}
                    alt={t.alt}
                    width={50}
                    height={50}
                    />
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-start">
                <p className="dark:text-white text-black text-2xs sm:text-2xl">
                    {t('product_web.languages.about_company')}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 opacity-50">
                    {techCompany.map((t, index) => (
                    <div key={index} className="border-[#6C6C6C] border flex justify-center items-center p-5 w-35 sm:w-50">
                    <Image
                    className="w-15 h-15"
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
