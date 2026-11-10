import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDict, getGreetings } from "@/i18n/dictionaries";
import Contact from "./_components/Contact";
import Faq from "./_components/Faq";
import Foot from "./_components/Foot";
import Hero from "./_components/Hero";
import Nav from "./_components/Nav";
import Scenarios from "./_components/Scenarios";
import Services from "./_components/Services";
import Statement from "./_components/Statement";
import Steps from "./_components/Steps";
import TypeAndSee from "./_components/TypeAndSee";
import Works from "./_components/Works";

import { readdir } from "node:fs/promises";
import path from "node:path";

async function getFlags() {
  const files = await readdir(path.join(process.cwd(), "public/flags"));
  return files.filter((f) => f.endsWith(".svg")).sort();
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  if (!isLocale(lng)) notFound();

  const [t, greetings] = await Promise.all([getDict(lng), getGreetings()]);

  return (
    <>
      <Nav lng={lng} t={t} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero t={t} />
        <Statement text={t.statement} />
        <Works t={t.works} />
        <TypeAndSee t={t.typeAndSee} flags={await getFlags()} />
        <Services t={t.services} pause={t.works.pause} />
        <Scenarios t={t.scenarios} />
        <Steps t={t.steps} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <Foot lng={lng} t={t} />
  </>
  );
}