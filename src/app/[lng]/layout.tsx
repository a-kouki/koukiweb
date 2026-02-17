import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Anton, Poetsen_One,Inclusive_Sans } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/i18n/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const inclusive = Inclusive_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inclusive",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const poetsen = Poetsen_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poetsen",
  display: "swap",
});

const SITE_URL = "https://koukiwebservice.com"; 
export async function generateMetadata(
  {params}:{ params: Promise<{ lng: string }> }
): Promise<Metadata>{
  const { lng = "en" }  = await params;
  const canonical = `/${lng}`;

  console.log(canonical)

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
      title: "KOUKI WEB - Web Service",
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
      keywords: ['Web', 'Site','Products WEB', 'Create web', 'Managed web', 'Multilingual', 'Programming'],
      icons: {
        icon: [
          { url: "/favicon.png" },
          { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
          { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        shortcut: '/favicon.png',
        apple: "/apple-touch-icon.png",
        other: [
        {
          rel: 'apple-touch-icon.png"',
          url: '/apple-touch-icon.png',
        }
      ]
      },
    }
}

export default async function RootLayout({
  children,
  params,
}:{
  children: React.ReactNode;
  params: Promise<{lng: string}>
}) {

  const {lng} =  await params

  return (
    <html lang={lng} suppressHydrationWarning className="dark" >
      <head>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MKQ2KPM4');
        `}</script>
  
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GW5HL2EVE4"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-GW5HL2EVE4');
        `}
      </script>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${inclusive.variable} ${anton.variable} ${poetsen.variable} antialiased`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKQ2KPM4"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

        <I18nProvider lng={lng}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
