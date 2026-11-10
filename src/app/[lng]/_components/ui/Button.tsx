import type { ComponentProps } from "react";
import { cx } from "./cx";

type Variant = "primary" | "secondary" | "panel";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 font-semibold transition-[background-color,color,transform] duration-150 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-ink text-ink hover:bg-surface",
  // Dentro de painéis cinza (bg-surface) o hover precisa de outro tom.
  panel: "border border-ink text-ink hover:bg-page",
};

type AnchorProps = Omit<ComponentProps<"a">, "className"> & { href: string };
type NativeButtonProps = Omit<ComponentProps<"button">, "className"> & { href?: undefined };
type ButtonProps = { variant?: Variant; className?: string } & (AnchorProps | NativeButtonProps);

// Com href vira link (âncoras, mailto); sem href vira botão.
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const cls = cx(base, variants[variant], className);
  if (props.href !== undefined) {
    return <a {...props} className={cls} />;
  }
  return <button type="button" {...props} className={cls} />;
}