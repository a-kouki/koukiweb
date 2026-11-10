"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Dict } from "@/i18n/dictionaries";
import { Panel } from "./ui/Panel";
import { Section } from "./ui/Section";

const COUNT = 4; // bandeiras por vez
const INTERVAL_MS = 2500;
const OUT_MS = 400 + (COUNT - 1) * 140; // saída + escalonamento

type Props = { t: Dict["typeAndSee"]; flags: string[] };

export default function TypeAndSee({ t, flags }: Props) {
  const [group, setGroup] = useState(0);
  const [leaving, setLeaving] = useState(false);

  // grupos de 4; o último completa com as primeiras bandeiras
  const groups = useMemo(() => {
    const n = flags.length;
    if (!n) return [];
    return Array.from({ length: Math.ceil(n / COUNT) }, (_, g) =>
      Array.from({ length: COUNT }, (_, i) => flags[(g * COUNT + i) % n]),
    );
  }, [flags]);

  useEffect(() => {
    if (groups.length < 2) return;
    let out: number | undefined;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setLeaving(true);
      out = window.setTimeout(() => {
        setGroup((g) => (g + 1) % groups.length);
        setLeaving(false);
      }, OUT_MS);
    }, INTERVAL_MS);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(out);
    };
  }, [groups.length]);

  const current = groups[group] ?? [];
  const next = groups.length > 1 ? groups[(group + 1) % groups.length] : [];

  return (
    <Section id="demo">
      <div className="grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="text-head-sm">{t.title}</h2>
          <p className="mt-5 max-w-[32ch] text-lead leading-[1.35] text-muted">{t.hint}</p>
        </div>

        <Panel>
          <div
            aria-hidden="true"
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {current.map((file, i) => (
              <div key={`${group}-${i}`} className="aspect-[4/3]">
                <Image
                  src={`/flags/${file}`}
                  alt=""
                  width={160}
                  height={120}
                  unoptimized
                  draggable={false}
                  className={`h-full w-full select-none rounded-[8px] object-cover ${
                    leaving ? "flag-out" : "flag-in"
                  }`}
                  style={{ animationDelay: `${i * 140}ms` }}
                />
              </div>
            ))}
          </div>

          {/* pré-carrega o próximo grupo para não piscar vazio */}
          <div hidden aria-hidden="true">
            {next.map((file, i) => (
              <Image
                key={`pre-${i}`}
                src={`/flags/${file}`}
                alt=""
                width={160}
                height={120}
                unoptimized
                loading="eager"
              />
            ))}
          </div>
        </Panel>
      </div>
    </Section>
  );
}