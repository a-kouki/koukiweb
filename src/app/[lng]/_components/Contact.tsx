import Image from "next/image";
import type { Dict } from "@/i18n/dictionaries";
import { EMAIL, INSTAGRAM_URL, whatsappLink } from "@/site";
import { InstagramIcon, WhatsAppIcon } from "./ui/Icons";
import { ImageSlot } from "./ImageSlot";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import me from "../../../../public/me 2.png"

export default function Contact({ t }: { t: Dict["contact"] }) {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const newTab = <span className="sr-only"> ({t.newTab})</span>;
  return (
    <Section id="contato">
    <div className="grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-[minmax(0,420px)_1fr]">
      <Image
        src={me}
        alt={"developer"}
        sizes="(min-width: 900px) 420px, 360px"
        className="mx-auto aspect-[2/3] w-full max-w-[360px] rounded-card object-cover md:max-w-none"
      />
        <div className="text-center md:text-left">
          <h2 className="text-head-sm">{t.title}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href={whatsappLink(t.message)} {...ext}>
              <WhatsAppIcon />
              <span translate="no">{t.whatsapp}</span>
              {newTab}
            </Button>
            <Button href={INSTAGRAM_URL} variant="secondary" {...ext}>
              <InstagramIcon />
              <span translate="no">{t.instagram}</span>
              {newTab}
            </Button>
          </div>
         <div className="mt-8 border-t border-line pt-6">
          <a
            href={`mailto:${EMAIL}`}
            translate="no"
            className="inline-flex min-h-11 items-center break-all text-lead underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-ink"
          >
            {EMAIL}
          </a>
        </div>
        </div>
      </div>
    </Section>
  );
}