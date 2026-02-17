"use client"
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function FOOT(){

    const [t, i18n] = useTranslation()
    const year = new Date().getFullYear();
    
    const icons = [
        {ic:FaInstagram , href:"https://www.instagram.com/kouki.tech/", label: "Contact via Instagram"},
        {ic:FaWhatsapp, href:"https://wa.me/5566997187450", label: "Contact via Whatsapp"},
        {ic:SiGmail, href:"", label: "Contact via Email"}
    ]
    
    return(
        <section>
        <div className="bg-black flex justify-center">
            <div className="flex flex-col items-start py-10 px-10 sm:px-30 gap-y-2">  
                <h3 className="text-white text-[30px] md:text-[50px]">
                    {t('foot.title.one')} <span className="text-[#00F6FF]">{t('foot.title.two')} </span>
                </h3>

                <hr className="bg-white  w-full"></hr>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-[#939393] gap-y-5 sm:gap-x-40">
                    <div className="flex flex-col items-start gap-y-3">
                        <img 
                        className="w-20 h-20 bg-gray-400 rounded-2xl border-0"
                        src="/logo.webp"
                        loading="lazy"
                        alt=""
                        width={50}
                        height={50}
                        />
                        <p className="text-2xs w-50">
                            {t('foot.subtitle')}                        
                        </p>
                        <div className="flex gap-3">
                            {icons.map((i, index) => (
                                <a key={index} href={`${i.href}`} target="_blank" rel="noopener noreferrer" aria-label={i.label}>
                                <div key={index} className="w-10 h-10 rounded-full bg-gray-400 flex justify-center text-black items-center">
                                    <i.ic/>
                                </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div >
                        <nav className="flex flex-col gap-y-1 font-inclusive">
                            <p className="text-blue-600 text-2xl">{t('nav.five')}</p>
                            <ul className="text-[15px] hover:pointer-fine">
                                <li><a href='#'>{t('nav.one')}</a></li>
                                <li><a href="#services">{t('nav.two')}</a></li>
                                <li><a href="#products-web">{t('nav.three')}</a></li>
                                <li><a href="#contact">{t('nav.four')}</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="font-inclusive gap-y-1">
                        <p className="text-blue-600 text-2xl">Contact</p>
                        <p className="text-[15px]">koukitech5@gmail.com</p>
                        <p className="text-[15px]">66 997187450</p>
                    </div>
                </div>
            </div>
        </div> 

        <div className=" bg-[#00F6FF] h-7 w-full flex items-center justify-center">
            <p className="text-2xs sm:text-[13px] font-inclusive text-[#2C2C2C]">Copyright@ {year}. All right reservetion by <span>KOUKI WEB</span></p>
        </div>
        </section>
    )
}
