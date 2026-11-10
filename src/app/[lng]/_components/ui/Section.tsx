import type { ReactNode } from "react";
import { cx } from "./cx";

type Props = { id?: string; center?: boolean; className?: string; children: ReactNode };

// py-10 em cima e embaixo = 80px entre uma seção e a próxima.
export function Section({ id, center, className, children }: Props) {
  return (
    <section
      id={id}
      className={cx("mx-auto w-full max-w-page px-(--m) py-10", center && "text-center", className)}
    >
      {children}
    </section>
  );
}