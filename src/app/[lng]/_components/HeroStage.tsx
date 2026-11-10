import type { Dict } from "@/i18n/dictionaries";
import { ImageSlot } from "./ImageSlot";
import Image from "next/image";
import dashboard from "../../../../public/savanna/7.png"

// Painel do topo: imagem de um dashboard (espaço provisório) e o que vem incluso em todo projeto.
export default function HeroStage({ t }: { t: Dict["demo"] }) {
  return (
    <div className="mt-[clamp(40px,6vw,72px)] grid gap-4 rounded-panel bg-surface p-[clamp(16px,3vw,40px)] text-left md:grid-cols-[2fr_1fr]">
        <Image
          src={dashboard}
          alt={t.imageAlt}
          preload
          sizes="(min-width: 900px) 760px, 100vw"
          className="h-auto w-full rounded-card"
        />      
        <div className="flex flex-col gap-4 rounded-card bg-page p-5 text-small">
        <p className="font-w456 text-ink">{t.includedTitle}</p>
        <ul role="list" className="grid gap-1.5 text-muted">
          {t.included.map((x) => (
            <li key={x}>
              <span aria-hidden="true">✓ </span>{/* taste-skill-ignore: símbolo de texto, não emoji */}
              {x}
            </li>
          ))}
        </ul>
        <p className="mt-auto text-ink">{t.includedFooter}</p>
      </div>
    </div>
  );
}