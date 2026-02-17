"use client";

import Image from "next/image";

export function Foot({ data }: any) {
  const { nav, footer } = data;

  return (
    <div className="mt-3 md:mt-3">
      <div className="relative w-[calc(100%-1rem)] mx-auto max-w-375 p-2 md:p-3 rounded-[30px] bg-white text-black">
        {/* Email */}
        <p className="absolute top-6 right-6 text-sm sm:text-base font-semibold text-gray-600">
          {footer.contact.email}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 justify-between px-10 py-10 sm:py-20 md:px-30 items-center">
          {/* Marca */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl pt-5 sm:pt-0 sm:text-6xl font-grandHotel text-[#ABD1F3]">
              {footer.brand.name}
            </h2>
            <p className="leading-none text-[15px]">
              {footer.brand.slogan}
            </p>
          </div>

          {/* Links + Social */}
          <div className="flex gap-x-10 pt-5 md:pt-0 justify-center md:justify-start">
            <nav>
              <ul className="flex flex-col gap-y-3 text-xl sm:text-2xl font-bold">
                <li>
                  <a className="hover:text-[#D20A2E] transition-colors" href="#">
                    {nav.home}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#D20A2E] transition-colors"
                    href="#contact"
                  >
                    {nav.contact}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#D20A2E] transition-colors"
                    href="#flavors"
                  >
                    {nav.flavors}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#D20A2E] transition-colors"
                    href="#locations"
                  >
                    {nav.locations}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social */}
            <div className="flex flex-col items-center">
              <p className="text-[15px] font-bold sm:text-[20px]">
                {footer.social.title}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                {footer.social.icons.map((icon:string, i:number) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-[#D20A2E] rounded-4xl hover:scale-105 transition-transform flex items-center justify-center"
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-end pt-5 md:pt-0 pr-6">
          <p className="text-sm sm:text-base text-gray-700">
            {footer.copyright.replace(
              "{{year}}",
              new Date().getFullYear().toString()
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
