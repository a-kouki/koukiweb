"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useState } from "react"
export default function Templates(){
    
    const [t, i18n] = useTranslation()
    
        const list_templates = [
            {q:[
                {f:"/templates-models/1/model.png"},
                {f:"/templates-models/1/1.png"},
                {f:"/templates-models/1/2.png"},
                {f:"/templates-models/1/3.png"},
            ]},
            {q:[
                {f:"/templates-models/2/model.png"},
                {f:"/templates-models/2/1.png"},
                {f:"/templates-models/2/2.png"},
                {f:"/templates-models/2/3.png"},
            ]},
        ]
    
        const [showTemp , setShowtemp] = useState<boolean>(false);
        const [selected , setSelected] = useState<string>("")
    
    
    return(
        <>
        {showTemp && (
        <div
            className="fixed inset-0 z-210 bg-black/60 flex justify-center "
            onClick={() => setShowtemp(false)}
        >
            <div
            className="relative z-220 w-full max-w-5xl"
            >
            <div className="flex items-center justify-end px-4 py-3">
                <button
                className="text-white hover:cursor-pointer text-4xl"
                onClick={() => setShowtemp(false)}
                >
                ✕
                </button>
            </div>

            <div className="max-h-[90vh] overflow-y-auto no-scrollbar" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-[1200px] md:h-[1600px]">
                <Image
                    src={selected}
                    alt="template"
                    fill
                    className="object-contain px-2"
                    priority
                />
                </div>
            </div>
            </div>
        </div>
        )}

        <section  className="bg-neutral-primary flex justify-center dark:bg-[#03152C] ">
           <div className="flex flex-col pt-35 sm:pt-40 pb-20">
                <div className="relative flex flex-col items-center">

                    <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
                    <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
                        <p>{t('templates.models')}</p>

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
                            {t('templates.topic_2')}
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
                            {t('templates.topic')}
                        </h2>
                    </div>
                </div>
                <p className="text-black dark:text-white max-w-325 w-full pt-10 px-2 sm:px-30 text-2xs md:text-[15px]">
                    {t('templates.text')}
                </p>

                <div className="flex flex-col gap-5 max-w-325 w-full px-2 sm:px-10 justify-center pt-5 sm:pt-10">
                    {
                        list_templates.map((l, index) => (
                            <div key={index}>
                            <p className="text-black dark:text-white text-[25px] sm:text-[35px]" >{t('templates.models')} {index + 1}</p>
                            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 w-full h-auto">
                            {l.q.map((s, i) => (
                                
                                <div className="flex flex-col gap-2 items-center w-full">
                                    <button key={index} className="flex flex-col w-full" 
                                    onClick={() => 
                                        {setSelected(s.f) 
                                        setShowtemp(prev => !prev)}}
                                    >   
                                        <div>
                                            <p className="text-black dark:text-white/25 text-[12px]">click</p>
                                        </div>
                                        <div className="relative  w-full  h-120 sm:h-200 hover:cursor-pointer">
                                        <Image
                                        src={s.f}
                                        alt=""
                                        fill
                                        loading="lazy"
                                        className="object-contain"/>
                                        </div>
                                    </button>

                                    { (index == 0 && i == 1) && 
                                    <a href="/template-models/model-1" target="_blank" rel="noopener noreferrer" className="bg-[#D20A2E] rounded-4xl text-white flex justify-center items-center py-2 w-[80%]">link</a>
                                    }
                                </div>
                            ))}
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </section>
        </>

    )
}