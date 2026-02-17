import Nav from "../_components/Nav"
import FOOT from "../_components/Foot"
import Contact from "../_components/Contact"
import Templates from "../_components/Template-Models"

import { Metadata } from "next"

const SITE_URL = "https://koukiwebservice.com"; 
export async function generateMetadata(
    {params}:{ params: Promise<{ lng: string }> }
): Promise<Metadata>{
    const { lng = "en" }  = await params;
    const canonical = `/${lng}`;

    let des = ""
    switch (lng){
        case 'en': 
        des = "Everything your website needs, from planning to ongoing maintenance. We create and care for your website so that it remains up-to-date, fast, secure, and professional."
        break
        case 'pt': 
        des = "Tudo o que o seu site precisa, do planejamento à manutenção contínua. Criamos e cuidamos do seu site para que ele permaneça atualizado, rápido, seguro e profissional."
        break;
        case 'es': 
        des = "Todo lo que su sitio web necesita, desde la planificación hasta el mantenimiento continuo. Creamos y cuidamos su sitio web para que se mantenga actualizado, rápido, seguro y profesional.";
        break
        case 'jp': 
        des = "サイトに必要なことを企画から継続的な保守まで。常に最新で高速・安全・プロフェッショナルな状態を保てるよう制作・運用します。";
        break
        default:
        des = "Everything your website needs, from planning to ongoing maintenance. We create and care for your website so that it remains up-to-date, fast, secure, and professional."
    }
    
    return {
    metadataBase: new URL(SITE_URL),
    title: "Templates - KOUKI WEB SERVICE",
    description: des,
    alternates: {
        canonical: canonical,
        languages: {
        'pt-BR': "/pt",
        'en-US': "/en",
        'es-SP': "/es",
        'ja-JP': "/jp",
        },
    },
    category: 'web service',
    keywords: ['Web', 'Site','Products WEB', 'Create web', 'Managed web', 'Multilingual', 'Programming', 'Web Service', 'Templates'],
    robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                notranslate:false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export default function Home(){

    return(
        <>
        <Nav/>
        <Templates/>
        <Contact/>
        <FOOT/>
        </>
    )
}
