import type { Dict } from "@/i18n/dictionaries";
import { Section } from "./ui/Section";

/*
const TONES = [
  "bg-step-1 text-[#1a1d21]",
  "bg-step-2 text-[#1a1d21]",
  "bg-step-3 text-white",
  "bg-step-4 text-white",
];
*/
const TONES = [
  "bg-step-1 text-ink",
  "bg-step-2 text-ink",
  "bg-step-3 text-page",
  "bg-step-4 text-page",
];

export default function Steps({ t }: { t: Dict["steps"] }) {
  return (
    <Section id="processo" center>
      <h2 className="text-head">{t.title}</h2>
      <ol role="list" className="mt-[clamp(32px,5vw,56px)] grid list-none gap-4 p-0 text-left md:grid-cols-4">
        {t.items.map((item, i) => (
          <li
            key={item.title}
            className={`flex min-h-40 flex-col justify-end rounded-panel p-6 md:min-h-64 ${TONES[i]}`}
          >
            <span className="text-small opacity-70" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-auto text-lead">{item.title}</h3>
            <p className="mt-1.5 text-small">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}