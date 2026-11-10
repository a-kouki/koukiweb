import HeroStage from "./HeroStage";
import { Button } from "./ui/Button";
import type { Dict } from "@/i18n/dictionaries";


type Props = { t: Dict };

export default function Hero({ t }: Props) {
  return (
    <section id="top" className="mx-auto max-w-page px-(--m) pt-[clamp(40px,7vw,96px)] text-center">
      <h1 className="mx-auto max-w-[20ch] text-head">{t.hero.title}</h1>
      <p className="mx-auto mt-5 max-w-[36ch] text-lead leading-[1.35] text-muted">{t.hero.lead}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="#contato">{t.hero.primary}</Button>
        <Button href="#servicos" variant="secondary">{t.hero.secondary}</Button>
      </div>
      <HeroStage
        t={t.demo}
      />
    </section>
  );
}