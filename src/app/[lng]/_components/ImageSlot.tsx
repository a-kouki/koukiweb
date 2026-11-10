import { cx } from "./ui/cx";

type Props = { ratio: string; label: string; alt?: string; className?: string };

// PROVISÓRIO: espaço colorido que simula uma imagem (posição, proporção e rolagem).
// Quando houver imagens reais, troque o conteúdo por <Image> do next/image neste único lugar.
export function ImageSlot({ ratio, label, alt, className }: Props) {
  return (
    <div
      role="img"
      aria-label={alt ?? label}
      className={cx(
        "flex w-full items-center justify-center rounded-card bg-amber-300 p-2 text-center text-small font-medium text-amber-950",
        ratio,
        className,
      )}
    >
      {label}
    </div>
  );
}