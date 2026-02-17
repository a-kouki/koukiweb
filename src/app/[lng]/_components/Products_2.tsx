"use client"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ModelAvail(){
    const models = [
            {
                imgs: [
                "/products/1/1.png",
                "/products/1/2.png",
                "/products/1/3.png",
                ],
            },
            {
                imgs: [
                "/products/2/1.png",
                "/products/2/2.png",
                "/products/2/3.png",
                ],
            },
            {
                imgs: ["/products/3.png"],
            },
            {
                imgs: ["/products/4.png"],
            },
            ];
    
        const [t, i18n] = useTranslation()

    return(
        <section id="services" className="dark:bg-[#03152C]">
                    <div className="relative flex justify-center pt-35 sm:pt-50 pb-20">
                        <div className="relative flex flex-col items-center">
        
                            <div className="absolute -top-9 sm:-top-11 md:-top-15 z-20">
                            <div className="relative inline-flex items-center justify-center px-6 py-2 border border-black dark:text-white text-black text-[8.5px] sm:text-2xs md:text-sm tracking-widest bg-transparent">
                                <p>{t('product_web.productPage.one')} </p>
        
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
                                    {t('product_web.title')} 
                                </h2>
        
                                <h2
                                    className="
                                    absolute
                                    bottom-0
                                    m-0
                                    text-[20px] sm:text-[40px] md:text-[50px]
                                    leading-0
                                    text-[#00F6FF]
                                    "
                                >
                                    {t('product_web.subtitle')}
                                </h2>
                            </div>
                        </div>
                    </div>
        
                    <p className="dark:text-white flex justify-center text-[15px] sm:text-[24px]">{t('product_web.productPage.two')}</p>
        
                    <div className="flex flex-col gap-10 justify-center items-center">
                    {models.map((model, modelIndex) => (
                        <div
                        key={modelIndex}
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl px-5 sm:px-10"
                        >
                        {model.imgs.map((src, imgIndex) => (
                            <div key={imgIndex} className="w-30 sm:w-50">
                            <Image
                                src={src}
                                alt={`Model ${modelIndex + 1} image ${imgIndex + 1}`}
                                width={200}
                                height={200}
                                className="object-cover"
                                loading="lazy"
                            />
                            </div>
                        ))}
                        </div>
                    ))}
                    </div>
        
                    
                    
                </section>
    )
}