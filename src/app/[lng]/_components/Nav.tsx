import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import LangMenu from "./ui/LangMenu";
import LangSwitch from "./ui/LangSwitch";
import { Button } from "./ui/Button";

const BAR = "sticky top-0 z-40 border-b border-line bg-page pt-[env(safe-area-inset-top)]"; // taste-skill-ignore: barra fixa (referência Mobbin)

export default function Nav({ lng, t }: { lng: Locale; t: Dict }) {
  const link = "rounded-pill px-3 py-3 font-w440 text-muted transition-colors duration-150 hover:text-ink";
  const lang = t.footer.columns[2];
  return (
    <header className={BAR}>
      <nav
        aria-label={t.nav.label}
        className="mx-auto flex min-h-[60px] max-w-page flex-wrap items-center gap-x-2 gap-y-1 px-(--m) py-1 md:gap-x-3"
      >
        <a href="#top" translate="no" className="mr-auto font-display text-lg font-semibold md:mr-0">
          kouki&nbsp;web.
        </a>
        <div className="mr-auto hidden gap-1 md:flex">
          <a href="#servicos" className={link}>{t.nav.services}</a>
          <a href="#processo" className={link}>{t.nav.process}</a>
          <a href="#faq" className={link}>{t.nav.faq}</a>
        </div>
        <div className="hidden md:block"><LangSwitch lng={lng} label={lang} /></div>
        <div className="md:hidden"><LangMenu lng={lng} label={lang} /></div>
        <Button href="#contato" className="px-4 md:px-5">{t.nav.contact}</Button>
      </nav>
    </header>
  );
}