import { Section } from "./ui/Section";

// Afirmação: parágrafo de até 36px no desktop (24px no celular), em até 3 linhas.
export default function Statement({ text }: { text: string }) {
  return (
    <Section center>
      <p className="mx-auto max-w-[34ch] font-display text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-semibold leading-[1.25] tracking-[-0.011em] text-balance">
        {text}
      </p>
    </Section>
  );
}