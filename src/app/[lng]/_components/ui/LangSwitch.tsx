import { LANG_NAME, LANG_SHORT, LOCALES, type Locale } from "@/i18n/config";
import { Chip } from "./Chip";

type Props = { lng: Locale; label: string; tone?: "default" | "onDark" };

// O nome acessível começa pelo texto visível ("PT, Português").
const accName = (l: Locale) =>
  LANG_SHORT[l] === LANG_NAME[l] ? LANG_NAME[l] : `${LANG_SHORT[l]}, ${LANG_NAME[l]}`;

export default function LangSwitch({ lng, label, tone }: Props) {
  return (
    <div role="group" aria-label={label} className="flex">
      {LOCALES.map((l) => (
        <Chip
          key={l}
          href={`/${l}`}
          selected={l === lng}
          tone={tone}
          label={accName(l)}
          lang={l === "jp" ? "ja" : l}
        >
          {LANG_SHORT[l]}
        </Chip>
      ))}
    </div>
  );
}