"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
//import { WORKS } from "../_data/works";
import { Button } from "./ui/Button";
import { cx } from "./ui/cx";
import Image, { type StaticImageData } from "next/image";

const HOLD_MS = 1000; // tempo parado depois do último gesto antes de voltar a andar

const FADE = "[mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"; // taste-skill-ignore: esmaece as bordas da faixa (máscara, não é fundo)

export type BandItem = { id: string; src: StaticImageData };
type Props = { title: string; pauseLabel: string; alts: string[]; items: BandItem[] };

// Faixa que anda sozinha. Pausa com mouse, foco ou botão; com movimento reduzido fica parada e rola à mão.
export default function WorksBand({ title, pauseLabel, alts, items  }: Props) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const hold = useRef({ hover: false, focus: false, touch: false, until: 0 });

  const touchHold = () => performance.now() + HOLD_MS;
  const nudge = () => { hold.current.until = touchHold(); };

  // mantém o laço fechado também na rolagem manual (nos dois sentidos)
  const onScroll = () => {
    const el = viewport.current;
    const tr = track.current;
    if (!el || !tr || reduced) return;
    const g = tr.scrollWidth / 2;
    if (el.scrollLeft <= 0) el.scrollLeft += g;
    else if (el.scrollLeft > g) el.scrollLeft -= g;
  };

  useEffect(() => {
    const el = viewport.current;
    const tr = track.current;
    if (!el || !tr || reduced) return;
    const h = hold.current;
    let raf = 0;
    let last = performance.now();
    el.scrollLeft = tr.scrollWidth / 2; // começa na cópia: dá para arrastar para trás
    let pos = el.scrollLeft;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      const g = tr.scrollWidth / 2;
      const holding = paused || h.hover || h.focus || h.touch || now < h.until;
      if (holding) {
        pos = el.scrollLeft; // acompanha o gesto do usuário
      } else {
        pos += (g / (items.length * 5)) * dt; // mesma velocidade da animação antiga
        if (pos > g) pos -= g;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, reduced]);

  useEffect(() => {
    const m = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);

  // O segundo grupo repete o primeiro para o laço fechar sem salto; fica oculto a leitores de tela.
  const group = (copy: boolean) => (
    <div
      className={cx("flex gap-4 pr-4", copy && "motion-reduce:hidden")}
      aria-hidden={copy || undefined}
      inert={copy}
    >
      {items.map((w, i) => (

          <div key={`${w.id}${copy ? "-b" : ""}`} className="h-[clamp(340px,30vw,420px)] shrink-0">
            <Image
              src={w.src}
              alt={copy ? "" : (alts[i] ?? "")}
              sizes="(min-width: 900px) 640px, 80vw"
              className="h-full w-auto max-w-none rounded-card"
            />
          </div>
      ))}
    </div>
  );

  return (
    <>
      <div
        ref={viewport}
        role="region"
        aria-label={title}
        tabIndex={0}
        onScroll={onScroll}
        onWheel={nudge}
        onKeyDown={(e: KeyboardEvent) => { if (e.key.startsWith("Arrow") || e.key === "Home" || e.key === "End") nudge(); }}
        onTouchStart={() => { hold.current.touch = true; }}
        onTouchEnd={() => { hold.current.touch = false; nudge(); }}
        onTouchCancel={() => { hold.current.touch = false; nudge(); }}
        onPointerEnter={(e) => { if (e.pointerType === "mouse") hold.current.hover = true; }}
        onPointerLeave={(e) => { if (e.pointerType === "mouse") hold.current.hover = false; }}
        onFocus={() => { hold.current.focus = true; }}
        onBlur={() => { hold.current.focus = false; }}
        className={cx(
          "overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:[scrollbar-width:auto] motion-reduce:[&::-webkit-scrollbar]:block motion-reduce:[mask-image:none]",
          FADE,
        )}
      >
        <div ref={track} className="flex w-max">
          {group(false)}
          {group(true)}
        </div>
      </div>
      <div className="mt-4 mb-4 flex justify-center motion-reduce:hidden">
        <Button
          variant="panel"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
          className="aria-[pressed=true]:bg-ink aria-[pressed=true]:text-page aria-[pressed=true]:hover:bg-ink"
        >
          {pauseLabel}
        </Button>
      </div>
    </>
  );
}