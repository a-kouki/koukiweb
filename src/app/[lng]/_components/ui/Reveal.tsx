"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "./cx";

type Props = { children: ReactNode; className?: string; delay?: number };

// Entrada leve para itens de uma mesma lista (com atraso entre eles), não para seções inteiras.
// Visível por padrão: só esconde o que está abaixo da tela e sempre reaparece sozinho.
export function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;

    const show = () => {
      delete el.dataset.pre;
    };
    el.dataset.pre = "";
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    const safety = window.setTimeout(show, 6000); // rede de segurança: nunca fica escondido
    window.addEventListener("beforeprint", show);
    return () => {
      io.disconnect();
      clearTimeout(safety);
      window.removeEventListener("beforeprint", show);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cx(
        "transition-[opacity,transform] duration-600 ease-[cubic-bezier(.25,1,.5,1)] data-[pre]:translate-y-6 data-[pre]:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}