import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaMagic } from "react-icons/fa";
import { TbDeviceIpadCode } from "react-icons/tb";

export default function Services(){

    const [t,i18n] = useTranslation()


    const contentService = [
        {icon: TbDeviceIpadCode, title:`${t('services.container.one.title')}`,about:`${t('services.container.one.about')}`},
        //{icon: FaMagic, title:`${t('services.container.two.title')}`,about:`${t('services.container.two.about')}`},
    ]



    return (
        <section id="services" className="bg-neutral-primary dark:bg-[#03152C]">
        <div className="relative flex justify-center pt-25 sm:pt-40 pb-20">
            <div className="relative flex flex-col items-center">

                <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
                <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
                    <p>{t('services.title')}</p>

                    <span className="absolute -top-2 -right-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black border border-black dark:border-white" />

                    <span className="absolute -bottom-2 -left-2 md:w-3 sm:w-2.5 w-2 md:h-3 sm:h-2.5 h-2 dark:bg-white bg-black  border border-black dark:border-white" />
                </div>
                </div>

                <div className="relative flex justify-center">
                    <h2
                        className="
                        text-[50px] sm:text-[70px] md:text-[90px]
                        leading-4 sm:leading-5
                        text-black/20 dark:text-[#939393] dark:opacity-22
                        font-anton
                        tracking-[0.6rem] sm:tracking-[1.5rem]
                        "
                    >
                        {t('services.topic_2')}
                    </h2>

                    <h2
                        className="
                        absolute
                        bottom-0
                        m-0
                        text-[30px] sm:text-[40px] md:text-[50px]
                        leading-0
                        text-[#00F6FF]
                        "
                    >
                        {t('services.topic')}
                    </h2>
                </div>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="">
            {contentService.map((c, index) => (
                <div key={index} >
                    <div  className="z-0 w-10 h-20 bg-blue-700 absolute rounded-l-2xl mt-5 -ml-3"></div>
                    <div className="relative  z-20 sm:w-70 w-60 sm:h-70 h-55 bg-linear-to-br from-[#3D3D3D] to-black rounded-3xl border-gray-500 border-3 flex flex-col  p-5 space-y-1">
                        <div className="sm:w-15 w-10 sm:h-15 h-10 rounded-full bg-cyan-300 flex justify-center items-center">
                            <c.icon className="w-[50%] h-[50%]"/>
                        </div>
                        <h1 className="text-white sm:text-[25px] text-[20px]">{c.title}</h1>
                        <p className="sm:text-[12px] text-2xs text-[#939393]">{c.about}</p>
                    </div>
                </div>

            ))}
            </div>
        </div>
        
        <div className="flex justify-center">
        <div className="flex justify-center border-dashed border h-20 border-white"></div>
        </div>

        <div className="flex justify-center ">
            <div className="flex flex-col-reverse sm:flex-row gap-10  justify-center max-w-325 w-full px-3">
                <div className="flex flex-col items-start sm:items-center">
                    <div className="flex flex-col items-center">
                        <div className="w-3.5 h-20 bg-blue-700 absolute rounded-l-2xl mt-5  mr-63 sm:mr-73 z-0" />
                        <div className="relative bg-[#0C1117] z-20 sm:w-70 w-60 h-70
                                        rounded-3xl border border-gray-500 flex justify-between">

                        {/* topo */}
                        <div className="flex flex-col p-3 w-[62%]">
                            <div className="w-full h-3 rounded-4xl bg-cyan-300" />

                            <h1 className="text-white sm:text-[25px] text-[20px] mt-2 leading-8">
                                {t('services.container.one.subs.one.title')}                           
                            </h1>

                            <p className="sm:text-[12px] text-2xs text-[#939393]">
                                {t('services.container.one.subs.one.text')}  
                            </p>
                        </div>

                        {/* ícone */}
                        <div className="flex flex-col w-[40%] sm:w-[38%] h-full">

                            {/* item */}
                            <div className="relative w-full h-full">
                            <Image
                                src="/type_service/1.png"
                                alt="service"
                                fill
                                loading="lazy"
                                className="object-contain rounded-tr-3xl"
                            />
                            </div>

                            <div className="relative w-full h-full">
                            <Image
                                src="/type_service/2.png"
                                alt="service"
                                fill
                                loading="lazy"
                                className="object-contain"
                            />
                            </div>

                            <div className="relative w-full h-full">
                            <Image
                                src="/type_service/3.png"
                                alt="service"
                                fill
                                loading="lazy"
                                className="object-contain rounded-br-3xl"
                            />
                            </div>


                        </div>

                        </div>

                        <div className="flex justify-center border-dashed border h-40 border-white"></div>
                    </div>
            
                </div>

                <div className="flex flex-col items-end sm:items-center">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-3.5 h-20 bg-blue-700 absolute rounded-l-2xl mt-5  mr-63 sm:mr-73 z-0" />
                        <div className="relative bg-[#0C1117] z-20 sm:w-70 w-60 h-70
                                        rounded-3xl border border-gray-500 flex justify-between">

                        {/* topo */}
                        <div className="flex flex-col p-3 w-[62%]">
                            <div className="w-full h-3 rounded-4xl bg-cyan-300" />

                            <h1 className="text-white sm:text-[25px] text-[20px] mt-2 leading-8">
                                {t('services.container.one.subs.two.title')}                           
                            </h1>

                            <p className="sm:text-[12px] text-2xs text-[#939393]">
                                {t('services.container.one.subs.two.text')}   
                            </p>
                        </div>

                        {/* ícone */}
                        <div className="flex flex-col w-[33%] sm:w-[28%] h-full p-0">
                            <div className="relative w-full h-full">
                            <Image
                                src="/type_service/4.png"
                                alt="service"
                                fill
                                loading="lazy"
                                className="object-contain rounded-tr-3xl rounded-br-3xl"
                            />
                            </div>
                        </div>

                        </div>

                            <a
                            href="/template-models"
                            className="h-8 w-40 flex items-center justify-center hover:cursor-pointer
                                        text-white bg-blue-600 rounded-full
                                        hover:bg-blue-700 transition"
                            >
                            {t('services.container.one.subs.two.more')} 
                            </a>
                    </div>
            
                </div>

            </div>
        </div>

       
        </section>

    )
}
