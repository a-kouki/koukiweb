import type { ComponentProps } from "react";
import { cx } from "./cx";

// Cartão: fundo da página com borda de 1px (sem sombra, sem preenchimento).
export function Card({ className, ...props }: ComponentProps<"article">) {
  return (
    <article {...props} className={cx("rounded-card border border-line bg-page p-6", className)} />
  );
}