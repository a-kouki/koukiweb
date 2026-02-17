import Image from "next/image"
import { useTranslation } from 'react-i18next';

export default function Top(){
    const {t,i18n} = useTranslation();

    const isJapanese = i18n.language === 'jp';


    return (
        <>
        <section id="#" className="relative md:h-auto pb-10 mt-23 bg-neutral-primary dark:bg-linear-to-br dark:from-[#03152C] dark:from-40% dark:to-black to-90%  overflow-hidden">

            <div className="flex flex-col justify-center items-center sm:h-120 md:h-130 relative">
                <div className="right-0 absolute">
                    <div className="hidden lg:flex  w-70 xl:w-100 2xl:w-[25vw] h-125 bg-blue-700 mr-0 ml-auto rounded-tl-lg rounded-bl-lg top-2 items-center">
                        <div
                        className={`
                            flex flex-col gap-4
                            [writing-mode:vertical-rl]
                            select-none
                            ml-20
                            items-center
                            ${!isJapanese ? "rotate-180" : ""}
                        `}
                        >
                        <p className="text-3xl sm:text-7xl font-extrabold text-white pt-5">
                            {t('header.tema.one')}
                        </p>
                        <p className="
                            text-3xl sm:text-7xl font-extrabold tracking-widest
                            text-transparent
                            [-webkit-text-stroke:2px_white]
                            
                            ">{t('header.tema.two')}</p>
                        </div>
                    </div>
                </div>
                <div className="absolute -right-30 sm:-right-50 lg:right-auto lg:pl-150 pt-10">
                    <Image
                    className=" w-56 sm:w-87.5 z-20 opacity-50 lg:opacity-100"
                    width={350}
                    height={350}
                    src="/lion.svg"
                    alt=""
                    aria-hidden="true"
                    />
                </div>
                <div className="absolute right-20 sm:right-30 lg:right-auto  pr-0 lg:pr-40">
                    <Image 
                    className="dark:opacity-40
                    w-80 sm:w-125"
                    src="/wind.svg"
                    width={500}
                    height={500}
                    alt=""
                    priority
                    fetchPriority="high"
                    aria-hidden="true"
                    />
                </div>

                <div className="lg:absolute lg:pr-120">
                    <div className="flex flex-col justify-center items-center pt-5 md:pt-15 lg:pt-0  left-60 text-white z-100  lg:top-10  ">
                        <div className="flex flex-col items-center md:leading-heading-none font-bold z-50">
                            <p className="py-0 m-0 text-[12px] sm:text-[19px] lg:text-[22px] bg-linear-to-r from-[#000BA5] dark:from-white to-[#00F6FF] bg-clip-text text-transparent">
                                {t('header.one')}
                            </p>
                            <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] text-black dark:text-white font-poetsen ">
                                {t('header.two.one')} <span className="text-[#2A0DCB]">{t('header.two.two')}</span>
                            </h1>
                            <h2 className=" text-[12px] sm:text-[19px] lg:text-[22px] text-[#BC9252] text-center">
                                {t('header.three')}
                            </h2>
                        </div>

                        <div className="flex flex-col text-black pt-10  z-20 space-y-3 items-start">
                            <a href="https://wa.me/5566997187450" target="_blank" rel="noopener noreferrer" className="flex gap-x-1 items-center">
                            <Image
                            src="/logos/whatsapp.png"
                            width={40}
                            height={40}
                            alt="Logo WhatsApp for Contact"
                            />
                            <p className="bg-green-600 dark:text-white px-3 rounded-full">{t('contact.whatsapp')}</p>
                            </a>

                            <a href="https://www.instagram.com/kouki.web/" target="_blank" rel="noopener noreferrer" className="flex gap-x-1 items-center">
                            <Image
                            src="/insta.png"
                            width={40}
                            height={40}
                            alt="Logo Instagram for Contact"
                            />
                            <p className="bg-[#EF3640] dark:text-white px-3 rounded-full">{t('contact.insta')}</p>
                            </a>
                            <a href="mailto:koukitech5@gmail.com" className="flex gap-x-1 items-center">
                            <Image
                            src="/email.png"
                            width={40}
                            height={40}
                            alt="Logo Email for Contact"
                            />
                            <div className="flex items-center bg-yellow-500 flex-col rounded-full">
                                <p className=" dark:text-black px-3">koukitech5@gmail.com</p>
                            </div>
                            </a>
                        </div>

                        <div className="w-full px-15 sm:px-10 pt-10 text-black dark:text-white max-w-120">
                            <h1 className="text-2xs sm:text-[13px] text-center ">
                                {t('header.about')}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="w-100wh h-15 sm:h-20 bg-[#00F6FF] flex justify-center items-center font-bold text-black space-x-10 overflow-hidden">
            {[...Array(5)].map((_, i) => (
                <p key={i} className="text-3xl sm:text-5xl whitespace-nowrap">
                KOUKI WEB
                </p>
            ))}
        </div>
        <div className="bg-neutral-primary dark:bg-[#03152C] h-35 md:h-50 lg:hidden px-10">
            <div className="w-100vw h-25 md:h-35 rounded-b-[70px] bg-blue-600 flex flex-col items-center  justify-center">
                <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold  text-white pt-5 sm:pt-20">
                    {t('header.tema.one')}
                </p>
                <p className="
                        text-5xl sm:text-8xl md:text-9xl font-extrabold 
                        text-transparent
                        dark:[-webkit-text-stroke:2px_white]
                        [-webkit-text-stroke:2px_black]
                        ">
                    {t('header.tema.two')}
                </p>
                    
            </div>
        </div>
        </>
    )
}
