import type { Dict } from "@/i18n/dictionaries";
import { Section } from "./ui/Section";

const ROW = "group border-t border-line last:border-b"; // taste-skill-ignore: lista do FAQ (referência Mobbin)

// <details> nativo: acessível por teclado e sem JavaScript.
export default function Faq({ t }: { t: Dict["faq"] }) {
  return (
    <Section id="faq" center>
      <h2 className="text-head">{t.title}</h2>
      <div className="mx-auto mt-[clamp(32px,5vw,56px)] max-w-[720px] text-left">
        {t.items.map((item) => (
          <details key={item.question} className={ROW}>
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-[1.125rem] font-w440 transition-colors duration-150 hover:underline hover:underline-offset-4 [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="text-2xl text-muted group-open:hidden">+</span>
              <span aria-hidden="true" className="hidden text-2xl text-muted group-open:inline">−</span>
            </summary>
            <p className="max-w-[56ch] pb-5 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}