import type { Dict } from "@/i18n/dictionaries";
import WorksBand from "./WorksBand";
import { Panel } from "./ui/Panel";
import { Section } from "./ui/Section";

import { WORKS } from "../_data/works";

export default function Works({ t }: { t: Dict["works"] }) {
  return (
    <Section center>
      <h2 className="text-head">{t.title}</h2>
      <Panel className="mt-[clamp(32px,5vw,56px)]">
        <WorksBand title={t.title} pauseLabel={t.pause} alts={t.items} items={WORKS}/>
      </Panel>
    </Section>
  );
}