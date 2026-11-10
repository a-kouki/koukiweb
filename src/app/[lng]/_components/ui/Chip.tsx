import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "./cx";

type Tone = "default" | "onDark";

const base =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-pill px-3 text-small font-w440 transition-colors duration-150";

const tones: Record<Tone, string> = {
  default:
    "text-muted hover:text-ink aria-[current=true]:bg-surface aria-[current=true]:text-ink aria-[pressed=true]:bg-surface aria-[pressed=true]:text-ink aria-[current=true]:underline aria-[current=true]:underline-offset-4 aria-[pressed=true]:underline aria-[pressed=true]:underline-offset-4",
  onDark:
    "text-white/70 hover:text-white aria-[current=true]:bg-white/10 aria-[current=true]:text-white aria-[pressed=true]:bg-white/10 aria-[pressed=true]:text-white aria-[current=true]:underline aria-[current=true]:underline-offset-4 aria-[pressed=true]:underline aria-[pressed=true]:underline-offset-4",
};

type ChipProps = {
  children: ReactNode;
  selected?: boolean;
  tone?: Tone;
  lang?: string;
  label?: string;
  className?: string;
} & (
  | { href: string; onClick?: undefined }
  | { href?: undefined; onClick?: () => void }
);

// Com href é um link (troca de idioma); com onClick é um botão (demonstração).
export function Chip({
  children,
  selected,
  tone = "default",
  lang,
  label,
  className,
  href,
  onClick,
}: ChipProps) {
  const cls = cx(base, tones[tone], className);

  if (href !== undefined) {
    return (
      <Link
        href={href}
        scroll={false}
        lang={lang}
        aria-label={label}
        aria-current={selected ? "true" : undefined}
        className={cls}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      lang={lang}
      aria-label={label}
      aria-pressed={!!selected}
      onClick={onClick}
      className={cls}
    >
      {children}
    </button>
  );
}