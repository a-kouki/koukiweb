"use client"
import data from './data/en.json'
import { Hero } from "./_components/Hero";
import { Section } from "./_components/Section";
import { Location } from "./_components/Location";
import { Foot } from "./_components/Foot";

import MyApp from './_components/CalendarCol';
import { Calendar } from './_components/Calendar';

export default function Page() {
  return (
    <>
      <Hero data={data} />
      <Section data={data} />
      <MyApp/>
      <Calendar/>
      <Location data={data} />
      <Foot data={data} />
    </>
  );
}
