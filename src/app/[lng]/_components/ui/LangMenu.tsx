"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { HTML_LANG, LANG_NAME, LANG_SHORT, LOCALES, type Locale } from "@/i18n/config";

// Seletor compacto para telas pequenas: um botão que abre a lista de idiomas.
export default function LangMenu({ lng, label }: { lng: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${LANG_SHORT[lng]}, ${label}`}
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-11 items-center gap-1.5 rounded-pill px-3 text-small font-w440 text-ink transition-colors duration-150 hover:bg-surface"
      >
        {LANG_SHORT[lng]}
        <span aria-hidden="true" className="text-muted">▾</span>
      </button>
      <ul
          role="list"
          id={id}
          hidden={!open}
          className="absolute right-0 top-full z-50 mt-1 min-w-40 rounded-card border border-line bg-page p-1"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}`}
                scroll={false}
                lang={HTML_LANG[l]}
                aria-current={l === lng ? "true" : undefined}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-sm px-3 transition-colors duration-150 hover:bg-surface aria-[current=true]:bg-surface"
              >
                {LANG_NAME[l]}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}