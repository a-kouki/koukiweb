import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { INSTAGRAM_URL, whatsappLink } from "@/site";
import LangSwitch from "./ui/LangSwitch";

export default function Foot({ lng, t }: { lng: Locale; t: Dict }) {
  const [navTitle, contactTitle, langTitle] = t.footer.columns;
  const title = "mb-2 text-small text-on-dark/70";
  const link = "block py-3 hover:underline";
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const newTab = <span className="sr-only"> ({t.contact.newTab})</span>;

  return (
    <footer className="[--focus:#fff] bg-footer pb-[calc(24px+env(safe-area-inset-bottom))] pt-[clamp(40px,6vw,72px)] text-on-dark/90">
      <div className="mx-auto max-w-page px-(--m)">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p translate="no" className="font-display text-3xl font-semibold">kouki&nbsp;web.</p>
            <p className="mt-3 max-w-[28ch] text-on-dark/70">{t.footer.text}</p>
          </div>
          <nav aria-label={navTitle}>
            <p className={title}>{navTitle}</p>
            <a href="#servicos" className={link}>{t.nav.services}</a>
            <a href="#processo" className={link}>{t.nav.process}</a>
            <a href="#faq" className={link}>{t.nav.faq}</a>
          </nav>
          <div>
            <p className={title}>{contactTitle}</p>
            <a href={whatsappLink(t.contact.message)} {...ext} className={link}>
              <span translate="no">{t.contact.whatsapp}</span>
              {newTab}
            </a>
            <a href={INSTAGRAM_URL} {...ext} className={link}>
              <span translate="no">{t.contact.instagram}</span>
              {newTab}
            </a>
          </div>
          <div>
            <p className={title}>{langTitle}</p>
            <LangSwitch lng={lng} label={langTitle} tone="onDark" />
          </div>
        </div>
        <p translate="no" className="mt-12 text-small text-on-dark/70">{t.footer.rights}</p>
      </div>
    </footer>
  );
}