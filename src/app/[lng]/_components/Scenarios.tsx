import type { Dict } from "@/i18n/dictionaries";
import { ImageSlot } from "./ImageSlot";
import { Panel } from "./ui/Panel";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export default function Scenarios({ t }: { t: Dict["scenarios"] }) {
  return (
    <Section center>
      <h2 className="text-head">{t.title}</h2>
      <div className="mt-[clamp(32px,5vw,56px)] grid gap-4 text-left md:grid-cols-3">
        {t.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="h-full">
            <Panel outline className="grid h-full content-start gap-4">
              {/*<ImageSlot ratio="aspect-[4/3]" label="4:3 · cenário" />*/}
              <h3 className="px-2 text-lead">{item.title}</h3>
              <p className="px-2 pb-2 text-small text-muted">{item.text}</p>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}