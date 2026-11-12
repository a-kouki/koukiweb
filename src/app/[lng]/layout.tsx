import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
  Stack_Sans_Headline,
  Stack_Sans_Text,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";
import { HTML_LANG, LOCALES, isLocale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";

const headline = Stack_Sans_Headline({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const text = Stack_Sans_Text({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// Reserva para o japonês: carrega só quando há caracteres japoneses.
const jp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafafa",
};

const SITE_URL = "https://koukiwebservice.com";
const GTM_ID = "GTM-MKQ2KPM4";
const GA_ID = "G-GW5HL2EVE4";

export function generateStaticParams() {
  return LOCALES.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;
  if (!isLocale(lng)) return {};
  const t = await getDict(lng);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lng}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [HTML_LANG[l], `/${l}`])),
        "x-default": "/pt",
      },
    },
    category: "web service",
    keywords: ["Web", "Site", "Products WEB", "Create web", "Managed web", "Multilingual", "Programming"],
    icons: {
      icon: [
        { url: "/favicon.png" },
        //{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        //{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/favicon.png",
      //apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  if (!isLocale(lng)) notFound();
  const t = await getDict(lng);

  return (
    <html
      lang={HTML_LANG[lng]}
      className={`${headline.variable} ${text.variable} ${jp.variable}`}
    >
      <body>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a className="skip" href="#main">
          {t.skip}
        </a>
        {children}
        {/* Confira se o GA4 já é disparado dentro do GTM. Se for, remova os dois Script do gtag abaixo (contagem em dobro). */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}