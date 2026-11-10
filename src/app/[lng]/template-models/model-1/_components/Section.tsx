"use client";

import Image from "next/image";
import { useState } from "react";

export function Section({ data }: { data: any }) {
  const [active, setActive] = useState(1);

  const section = data.section;
  const photos = section.specials.images;

  return (
    <div className="mt-3 md:mt-3">
      <div className="relative w-[calc(100%-1rem)] mx-auto max-w-375 p-2 md:p-3 bg-white rounded-[30px] text-black">
        {/* Header */}
        <div className="flex justify-between items-center gap-x-5">
          <div className="flex flex-col md:flex-row md:items-center w-[60%] justify-between gap-x-5">
            <h2 className="text-6xl md:text-8xl font-grandHotel text-[#D20A2E]">
              {section.specials.title}
            </h2>
            <p>“{section.specials.subtitle}”</p>
          </div>

          <p className="bg-[#D20A2E] px-5 py-2 rounded-4xl text-white">
            {section.specials.badge}
          </p>
        </div>

        {/* Specials */}
        <div className="flex gap-x-1 md:gap-x-5 pt-10">
          {photos.map((s:string, i:number) => (
            <div
              key={i}
              className={`relative h-120 overflow-hidden rounded-4xl hover:w-[60%]
                transition-all duration-500 ease-in-out
                ${i === active ? "w-full md:w-[40%]" : "w-[15%]"}
              `}
              onClick={() => setActive(i)}
            >
              <Image src={s} alt="" fill className="object-cover" />

              {i === active ? null : (
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/70
                    via-black/30
                    to-transparent
                    sm:hidden
                  "
                >
                  <p className="relative flex justify-center top-[70%] text-white">
                    click
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Store text */}
        <h1 className="font-grandHotel text-[#ABD1F3] text-6xl flex justify-center pt-20">
          {section.store.brandTitle}
        </h1>

        <p className="flex justify-center text-1xl sm:text-2xl md:text-3xl font-bold px-0 sm:px-20 md:px-30">
          “{section.store.brandSubtitle}”
        </p>

        {/* Banner */}
        <div className="px-0 sm:px-20 md:px-30 pt-10">
          <div className="relative w-full h-[150px] md:h-[300px] overflow-hidden rounded-4xl">
            <Image
              src={section.store.image}
              alt=""
              fill
              priority
              className="object-cover"
            />

            <div
              className="
                absolute inset-0
                bg-linear-to-t
                from-black/70
                via-black/30
                to-transparent
              "
            />

            <p className="relative top-[65%] md:top-[75%] left-[10%] w-[90%] text-5xl md:text-7xl text-white font-grandHotel">
              {section.store.bannerTitle}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-2 md:gap-6 px-0 sm:px-20 md:px-30 mt-2">
          {/* Left */}
          <div className="relative h-[250px] md:h-[420px] overflow-hidden rounded-3xl">
            <Image
              src={section.gallery.images.left}
              alt=""
              fill
              className="object-cover"
            />

            <div
              className="
                absolute inset-0
                bg-linear-to-t
                from-black/70
                via-black/30
                to-transparent
              "
            />

            <p className="relative leading-none top-[75%] sm:top-[85%] left-[10%] w-[90%] text-2xl md:text-4xl xl:text-5xl text-white font-grandHotel">
              {section.gallery.titles.left}
            </p>
          </div>

          {/* Right column */}
          <div className="grid grid-rows-3 gap-2 md:gap-6">
            <div className="relative row-span-1 h-[90px] md:h-[130px] overflow-hidden rounded-3xl">
              <Image
                src={section.gallery.images.rightTop}
                alt=""
                fill
                className="object-cover"
              />

              <div
                className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/70
                  via-black/30
                  to-transparent
                "
              />

              <p className="relative top-[60%] left-[10%] w-[90%] text-3xl md:text-5xl text-white font-grandHotel">
                {section.gallery.titles.rightTop}
              </p>
            </div>

            <div className="relative row-span-2 h-[150px] md:h-[260px] overflow-hidden rounded-3xl">
              <Image
                src={section.gallery.images.rightBottom}
                alt=""
                fill
                className="object-cover"
              />

              <div
                className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/70
                  via-black/30
                  to-transparent
                "
              />

              <p className="relative top-[70%] leading-none left-[10%] w-[90%] text-2xl md:text-4xl text-white font-grandHotel">
                {section.gallery.titles.rightBottom}
              </p>
            </div>
          </div>
        </div>

        {/* Flavors */}
        <h2
          className="text-6xl md:text-8xl font-grandHotel text-[#D20A2E]"
          id="flavors"
        >
          {section.flavors.title}
        </h2>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            gap-1
            px-0 sm:px-20 md:px-30
          "
        >
          {section.flavors.items.map((flavor: { name: string; image: string }, index: number) => (
            <div key={index} className="flex flex-col gap-y-1">
              <p className="text-lg font-bold text-[#D20A2E] pt-5">
                {flavor.name}
              </p>

              <div className="relative w-full h-[280px] md:h-[330px] overflow-hidden rounded-4xl">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
