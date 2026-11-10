import type { Dict } from "@/i18n/dictionaries";
import { IMAGES } from "../_data/images";
import WorksBand from "./WorksBand";
import { Panel } from "./ui/Panel";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

const ROW = "border-t border-line py-6 md:grid md:grid-cols-[1fr_1.4fr] md:items-baseline md:gap-8";

type Props = { t: Dict["services"]; pause: string };

export default function Services({ t, pause }: Props) {
  return (
    <Section id="servicos">
      <h2 className="text-head">{t.title}</h2>
      <Reveal className="mt-[clamp(32px,5vw,56px)]">
        <ul>
          {t.items.map((item) => (
            <li key={item.title} className={ROW}>
              <h3 className="text-lead">{item.title}</h3>
              {item.text && <p className="mt-2 text-small text-muted md:mt-0">{item.text}</p>}
            </li>
          ))}
          <li className="border-y border-line py-6">
            <Panel className="mt-6">
              <WorksBand title={t.images.title} pauseLabel={pause} alts={t.images.alts} items={IMAGES} />
            </Panel>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}