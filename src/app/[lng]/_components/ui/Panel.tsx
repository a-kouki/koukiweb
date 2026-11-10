import type { ComponentProps } from "react";
import { cx } from "./cx";

type PanelProps = ComponentProps<"div"> & { outline?: boolean };

// Painel grande: preenchido (padrão) ou só com linha (outline).
export function Panel({ outline, className, ...props }: PanelProps) {
  return (
    <div
      {...props}
      className={cx(
        "rounded-panel",
        outline ? "border border-line p-4" : "bg-surface p-[clamp(16px,3vw,40px)]",
        className,
      )}
    />
  );
}