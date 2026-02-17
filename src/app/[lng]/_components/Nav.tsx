"use client"
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { initFlowbite } from "flowbite";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const LOCALES = ["en", "pt", "es", "jp"] as const;
type Locale = (typeof LOCALES)[number];

const COOKIE_NAME = "lng";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  if (seg && (LOCALES as readonly string[]).includes(seg)) return seg as Locale;
  return "pt";
}

function replaceLocaleInPath(pathname: string, newLocale: Locale): string {
  const parts = pathname.split("/");
  const current = parts[1];

  // pathname: ["", "pt", "products"]
  if (current && (LOCALES as readonly string[]).includes(current)) {
    parts[1] = newLocale;
    return parts.join("/") || `/${newLocale}`;
  }

  // fallback se vier sem locale
  return `/${newLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

function setLocaleCookie(lng: Locale) {
  document.cookie = `${COOKIE_NAME}=${lng}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function AmericaSvg() {
    return (
    <svg className="h-4 w-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00023 16.5C13.1425 16.5 16.5005 13.1421 16.5005 9C16.5005 4.85786 13.1425 1.5 9.00023 1.5C4.85797 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85797 16.5 9.00023 16.5Z" fill="white" />
      <path d="M8.67548 8.99996H16.5012C16.5012 8.32308 16.4109 7.66735 16.2428 7.04358H8.67548V8.99996Z" fill="#D80027" />
      <path d="M8.67548 5.08712H15.4004C14.9413 4.338 14.3543 3.67585 13.6699 3.13074H8.67548V5.08712Z" fill="#D80027" />
      <path d="M9.0005 16.5001C10.7655 16.5001 12.3878 15.89 13.6689 14.8698H4.33209C5.61318 15.89 7.23548 16.5001 9.0005 16.5001Z" fill="#D80027" />
      <path d="M2.60125 12.9132H15.4C15.7686 12.3118 16.0545 11.6543 16.2425 10.9567H1.75879C1.94679 11.6543 2.23265 12.3118 2.60125 12.9132Z" fill="#D80027" />
      <path d="M4.97397 2.67114H5.65741L5.0217 3.13297L5.26453 3.88024L4.62884 3.41841L3.99316 3.88024L4.20292 3.23468C3.6432 3.7009 3.15262 4.24713 2.74834 4.85575H2.96732L2.56266 5.14972C2.49962 5.25489 2.43915 5.36173 2.38121 5.47015L2.57444 6.06485L2.21393 5.80293C2.12432 5.99279 2.04235 6.18692 1.96867 6.3851L2.18156 7.04036H2.96732L2.33161 7.50219L2.57444 8.24947L1.93876 7.78764L1.55798 8.0643C1.51986 8.37066 1.5 8.6827 1.5 8.99941H8.99964C8.99964 4.85763 8.99964 4.36934 8.99964 1.5C7.51811 1.5 6.13703 1.92975 4.97397 2.67114Z" fill="#1A47B8"/>
    </svg>
  );
}

export function BrasilSvg() {
  return (
    <svg className="h-4 w-4 me-1.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="clip-br">
          <circle cx="256" cy="256" r="256" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-br)">
        <path d="M0 0h512v512H0z" fill="#009B3A" />
        <path d="M256 64L448 256 256 448 64 256z" fill="#FFDF00" />
        <path d="M256 176a80 80 0 1 0 0 160a80 80 0 1 0 0-160z" fill="#002776" />
      </g>
    </svg>
  );
}

export function SpanishSvg() {
  return (
    <svg className="h-4 w-4 me-1.5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="clip-es">
          <circle cx="9" cy="9" r="9" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-es)">
        <rect x="0" y="0" width="18" height="4.5" fill="#AA151B" />
        <rect x="0" y="4.5" width="18" height="9" fill="#F1BF00" />
        <rect x="0" y="13.5" width="18" height="4.5" fill="#AA151B" />
      </g>
    </svg>
  );
}

export function JapaneseSvg() {
  return (
    <svg className="h-4 w-4 me-1.5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="9" cy="9" r="8.5" fill="#FFFFFF" />
      <circle cx="9" cy="9" r="4.5" fill="#BC002D" />
    </svg>
  );
}

export default function Nav() {
  const [active, setActive] = useState<string>("#");

  useEffect(() => {
    setActive(window.location.hash || "/#");
  }, []);

  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);

  
  useEffect(() => {
    initFlowbite();
  }, [pathname]);

  const { t } = useTranslation();

  const changeLanguage = (lng: Locale) => {
    setLocaleCookie(lng);

    const newPath = replaceLocaleInPath(pathname, lng);
    const qs = searchParams?.toString();
    router.push(qs ? `${newPath}?${qs}` : newPath);
  };

  const nav_options = [
    { option: `${t("nav.one")}`, href: `/${locale}#` },
    { option: `${t("nav.two")}`, href: `/${locale}#services` },
    { option: `${t("nav.three")}`, href: `/${locale}#products-web` },
    { option: `${t("nav.four")}`, href: `/${locale}#contact` },
  ];

  function CountrySvg() {
    switch (locale) {
      case "en":
        return <AmericaSvg />;
      case "pt":
        return <BrasilSvg />;
      case "es":
        return <SpanishSvg />;
      case "jp":
        return <JapaneseSvg />;
      default:
        return <AmericaSvg />;
    }
  }


  return (
    <nav className="bg-neutral-primary fixed w-full z-200 top-0 start-0 border-b dark:border-0 border-default dark:bg-[#03152C]">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => router.push(`/${locale}`)} className="flex items-center rtl:space-x-reverse pl-15 hover:cursor-pointer" type="button">
          <img src="/logo.webp" width={60} height={60} alt="Logo Company Kouki Web" className="h-15 rounded-2xl" />
        </button>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="flex items-center text-heading bg-transparent box-border border border-transparent hover:bg-neutral-200 focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none hover:cursor-pointer"
            aria-label="Change language"
          >
            {CountrySvg()}
          </button>

          <ThemeToggle />

          <div className="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44" id="language-dropdown-menu">
            <ul className="p-2 text-sm text-body font-medium" role="none">
              <li>
                <button onClick={() => changeLanguage("en")} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                  <div className="inline-flex items-center">
                    <AmericaSvg />
                    {t("nav_language.en")}
                  </div>
                </button>
              </li>

              <li>
                <button onClick={() => changeLanguage("pt")} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                  <div className="inline-flex items-center">
                    <BrasilSvg />
                    {t("nav_language.pt")}
                  </div>
                </button>
              </li>

              <li>
                <button onClick={() => changeLanguage("es")} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                  <div className="inline-flex items-center">
                    <SpanishSvg />
                    {t("nav_language.sp")}
                  </div>
                </button>
              </li>

              <li>
                <button onClick={() => changeLanguage("jp")} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                  <div className="inline-flex items-center">
                    <JapaneseSvg />
                    {t("nav_language.jp")}
                  </div>
                </button>
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
          <ul
            className="
              font-medium flex flex-col md:flex-row
              mt-4 md:mt-0
              border border-default md:border-0
              rounded-b-lg
              md:rounded-full
              px-6 py-1 md:px-5
              md:space-x-5 lg:space-x-10
              rtl:space-x-reverse
              bg-transparent
              dark:bg-white
            "
          >
            {nav_options.map((o, i) => (
              <li key={i} className="flex">
                <a
                  href={o.href}
                  onClick={() => setActive(o.href)}
                  className={`
                    inline-flex items-center justify-center
                    px-3 py-2 rounded-full
                    transition-colors
                    text-black 
                    font-bold
                    text-[17px]
                    hover:bg-neutral-200 hover:text-black dark:hover:text-white
                    ${active === o.href ? "text-blue-600 dark:bg-blue-700 dark:text-white" : "text-black"}
                  `}
                >
                  {o.option}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}
