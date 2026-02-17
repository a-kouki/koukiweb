"use client"
import data from './data/en.json'
import { Hero } from "./_components/Hero";
import { Section } from "./_components/Section";
import { Location } from "./_components/Location";
import { Foot } from "./_components/Foot";

export default function Page() {
  return (
    <>
      <Hero data={data} />
      <Section data={data} />
      <Location data={data} />
      <Foot data={data} />
    </>
  );
}
