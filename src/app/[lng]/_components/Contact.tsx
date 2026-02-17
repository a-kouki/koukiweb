"use client"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function Contact(){
    const [t, i18n] = useTranslation()

    return (
        <section id="contact" className="bg-neutral-primary dark:bg-[#03152C]">
            <div className="relative flex justify-center pt-25 sm:pt-40 pb-10">
            <div className="relative flex flex-col items-center">

                <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
                <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
                    <p>{t('contact.title')}</p>

                    <span className="absolute -top-2 -right-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />

                    <span className="absolute -bottom-2 -left-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black  border border-black dark:border-white" />
                </div>
                </div>

                <div className="relative flex justify-center">
                    <h3
                        className="
                        text-[30px] sm:text-[70px] md:text-[90px]
                        leading-4 sm:leading-5
                        text-black/20 dark:text-[#939393] dark:opacity-22
                        font-anton
                        tracking-[0.6rem] sm:tracking-[1.5rem]
                        "
                    >
                        {t('contact.sub')}
                    </h3>

                    <div className="
                    absolute
                        m-0
                        leading-5 sm:leading-10
                    ">
                        <div className="">
                            <h3
                                className="
                                text-[20px] sm:text-[40px] md:text-[50px]
                                text-center
                                
                                text-[#00F6FF]
                                "
                            >
                                <span className="dark:text-white text-black">{t('contact.subtitle.one')} </span>{t('contact.subtitle.two')}<br/>{t('contact.subtitle.three')}
                            </h3>
                        </div>

                        

                    </div>
                    
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center text-black pb-15 z-20 sm:pt-15">
            <div className="space-y-3">
            <a href="https://wa.me/5566997187450" aria-label="Contact via Whastapp" target="_blank" rel="noopener noreferrer" className="flex gap-x-1 items-center">
            <Image
            src="/logos/whatsapp.png"
            alt="Contact Whastapp"
            width={40}
            height={40}
            />
            <p className="bg-green-500 dark:text-white px-3 rounded-full">{t('contact.whatsapp')}</p>
            </a>

            <a href="https://www.instagram.com/kouki.web/" aria-label="Contact via Instagram" target="_blank" rel="noopener noreferrer" className="flex gap-x-1 items-center">
            <Image
            src="/insta.png"
            alt="Contact Instagram"
            loading="lazy"
            width={40}
            height={40}
            />
            <p className="bg-[#EF3640] dark:text-white px-3 rounded-full">{t('contact.insta')}</p>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Contact via Email" className="flex gap-x-1 items-center">
            <Image
            src="/email.png"
            alt="Contact Email"
            loading="lazy"
            width={40}
            height={40}
            />
            <div className="flex items-center bg-yellow-500 flex-col rounded-full">
                <p className=" dark:text-black px-3">koukitech5@gmail.com</p>
            </div>
            </a>
            </div>
        </div>

        <div className="w-100wh h-15 sm:h-20 bg-[#00F6FF] flex justify-center items-center font-bold text-black space-x-10 overflow-hidden">
            {[...Array(5)].map((_, i) => (
                <p key={i} className="text-3xl sm:text-5xl whitespace-nowrap">
                KOUKI WEB
                </p>
            ))}
        </div>
        </section>
    )
}
