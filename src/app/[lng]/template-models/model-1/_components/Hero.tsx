"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ButtonMenu } from "./_elements/buttonMenu";

export function Hero({ data }: { data: any }) {
  const { brand, nav, hero, contact } = data;
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickutside(event: PointerEvent){
      if(
        menuRef.current && !menuRef.current.contains(event.target as Node) 
      ){
        setShowMenu(false);
      }
    }
    if(showMenu){
      document.addEventListener("pointerdown", handleClickutside);
    }
  
    return () => {
      document.removeEventListener("pointerdown", handleClickutside)
    };
  }, [showMenu])

  return (
    <div className="pt-3 md:pt-3">
      <div className="relative w-[calc(100%-1rem)] mx-auto max-w-375 p-2 md:p-3 bg-white rounded-[30px] text-black">
        <div className="absolute w-[calc(100%-2rem)] z-10 mt-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-10">
              <p className="ml-5 md:ml-10 text-4xl xl:text-5xl font-grandHotel text-[#ABD1F3]">
                {brand.name}
              </p>

              <nav className="bg-white px-5 py-2 text-[15px] hidden md:block xl:px-10 xl:text-[20px] rounded-full">
                <ul className="flex flex-row gap-x-1 font-abeezee">
                  <li className="hover:bg-[#D20A2E] hover:text-white px-3 rounded-4xl">
                    <a href="#">{nav.home}</a>
                  </li>
                  <li className="hover:bg-[#D20A2E] hover:text-white px-3 rounded-4xl">
                    <a href="#contact">{nav.contact}</a>
                  </li>
                  <li className="hover:bg-[#D20A2E] hover:text-white px-3 rounded-4xl">
                    <a href="#flavors">{nav.flavors}</a>
                  </li>
                  <li className="hover:bg-[#D20A2E] hover:text-white px-3 rounded-4xl">
                    <a href="#locations">{nav.locations}</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden md:flex items-end-safe z-10 pr-0 xl:pr-20">
              <Image
                src={hero.images.phoneIcon}
                alt="Phone"
                width={60}
                height={60}
              />
              <div className="text-[#D20A2E] font-abeezee">
                <p>{contact.phone.line1}</p>
                <p>{contact.phone.line2}</p>
              </div>
            </div>

            <button
              type="button"
              onPointerDown={() => {setShowMenu(!showMenu)}}
              className="md:hidden hover:cursor-pointer relative z-20 "
              aria-label="Open menu"
              aria-expanded={showMenu}
            >
              <ButtonMenu />
            </button>

            <div
              ref={menuRef}
              className={`
                absolute right-4 top-16 z-30 w-56 rounded-3xl bg-white shadow-lg border border-black/10 p-3 md:hidden
                origin-top-right
                transition-all duration-300 ease-out
                ${showMenu ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
              `}
            >
              <ul className="flex flex-col gap-y-2 font-abeezee text-lg">
                <li>
                  <a
                    href="#"
                    className="block rounded-2xl px-4 py-2 hover:bg-[#D20A2E] hover:text-white transition-colors"
                    onClick={() => setShowMenu(false)}
                  >
                    {nav.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block rounded-2xl px-4 py-2 hover:bg-[#D20A2E] hover:text-white transition-colors"
                    onClick={() => setShowMenu(false)}
                  >
                    {nav.contact}
                  </a>
                </li>
                <li>
                  <a
                    href="#flavors"
                    className="block rounded-2xl px-4 py-2 hover:bg-[#D20A2E] hover:text-white transition-colors"
                    onClick={() => setShowMenu(false)}
                  >
                    {nav.flavors}
                  </a>
                </li>
                <li>
                  <a
                    href="#locations"
                    className="block rounded-2xl px-4 py-2 hover:bg-[#D20A2E] hover:text-white transition-colors"
                    onClick={() => setShowMenu(false)}
                  >
                    {nav.locations}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* DESKTOP / MD+ */}
        <div className="relative hidden md:block w-full h-[600px]">
          <svg
            viewBox="0 0 1704 787"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="shape" clipPathUnits="objectBoundingBox">
                <path
                  transform="scale(0.000586,0.00127)"
                  d="M0 70C0 31.3401 31.3401 0 70 0H852H1236.06C1263.67 0 1286.06 22.3858 1286.06 50V87C1286.06 114.614 1308.44 137 1336.06 137H1507H1634C1672.66 137 1704 168.34 1704 207V717C1704 755.66 1672.66 787 1634 787H852H709C670.34 787 639 755.66 639 717V634.5C639 606.886 616.614 584.5 589 584.5H427.5H248H70C31.3401 584.5 0 553.16 0 514.5V70Z"
                />
              </clipPath>
            </defs>
          </svg>

          <Image
            src={hero.images.background}
            alt="Hero"
            fill
            priority
            className="object-cover"
            style={{ clipPath: "url(#shape)", WebkitClipPath: "url(#shape)" }}
          />

          <div className="absolute right-10 max-w-[60%] text-wrap text-[#ABD1F3] w-[calc(100%-3rem)] flex flex-col items-end justify-end bottom-10">
            <p className="text-3xl lg:text-5xl font-grandHotel">{hero.kicker}</p>
            <h1 className="text-5xl lg:text-7xl font-grandHotel">{hero.title}</h1>
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative w-full md:hidden h-125">
          <svg
            viewBox="0 0 988 787"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="shape-md" clipPathUnits="objectBoundingBox">
                <path
                  transform="scale(0.001012,0.00127)"
                  d="M0 70C0 31.3401 31.3401 0 70 0H494H695.671C723.285 0 745.671 22.3858 745.671 50V87C745.671 114.614 768.057 137 795.671 137H873.777H918C956.66 137 988 168.34 988 207V717C988 755.66 956.66 787 918 787H494H440.5C401.84 787 370.5 755.66 370.5 717V634.5C370.5 606.886 348.114 584.5 320.5 584.5H247.87H143.793H70C31.3401 584.5 0 553.16 0 514.5V70Z"
                />
              </clipPath>
            </defs>
          </svg>

          <Image
            src={hero.images.background}
            alt="Hero"
            fill
            priority
            className="object-cover"
            style={{ clipPath: "url(#shape-md)", WebkitClipPath: "url(#shape-md)" }}
          />

          <div className="absolute font-grandHotel right-5 max-w-[50%] text-wrap text-[#ABD1F3] w-[calc(100%-3rem)] flex flex-col items-end justify-end bottom-10">
            <p className="text-1xl sm:text-2xl">{hero.kicker}</p>
            <h1 className="text-4xl">{hero.title}</h1>
          </div>
        </div>

        <h2 className="absolute top-100 md:top-115 text-4xl sm:text-5xl md:text-6xl xl:text-7xl w-[35%] text-black font-grandHotel">
          {hero.headline}
        </h2>

        <div className="flex pt-5">
          <div className="grid grid-cols-2 gap-x-5 md:gap-x-10">
            <div>
              <p className="text-[15px] sm:text-2xl">{hero.description}</p>

              <div className="flex flex-col md:flex-row-reverse gap-x-10 items-center">
                <div className="flex flex-col items-center">
                  <p className="pt-5 text-3xl sm:text-3xl md:text-3xl xl:text-6xl font-bold">
                    {hero.houseFlavor.title}
                  </p>
                  <p className="text-[15px] xl:text-2xl">{hero.houseFlavor.subtitle}</p>
                  <button className="bg-[#ABD1F3] w-[40%] rounded-4xl hidden md:block">
                    more
                  </button>
                </div>

                <Image
                  src={hero.images.product}
                  alt=""
                  className="relative w-full md:w-[50%] pt-5"
                  width={200}
                  height={200}
                />

                <button className="bg-[#ABD1F3] mt-5 w-[40%] rounded-4xl md:hidden">
                  more
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-5" id="contact">
              <p className="text-4xl md:text-5xl font-bold">{contact.title}</p>

              <nav>
                <ul>
                  <li>
                    <a
                      href=""
                      className="flex items-center gap-x-1 md:gap-x-5 text-[10px] sm:text-[15px] md:text-[17px] py-2.5"
                    >
                      <Image
                        src={contact.icons.messenger}
                        alt=""
                        className="w-10 md:w-15"
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                      {contact.items.deliveryPickup}
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex items-center gap-x-1 md:gap-x-5 text-[10px] sm:text-[15px] md:text-[17px] py-2.5"
                    >
                      <Image
                        src={contact.icons.instagram}
                        alt=""
                        className="w-10 md:w-15"
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                      {contact.items.visitInstagram}
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex items-center gap-x-1 md:gap-x-5 text-[10px] sm:text-[15px] md:text-[17px] py-2.5"
                    >
                      <Image
                        src="/templates-models/1/model-1/1.png"
                        alt=""
                        className="w-10 md:w-15 rounded-[7px]"
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                      {contact.items.postHighlight}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-end-safe z-10 pr-0 xl:pr-20 md:hidden">
                <Image src={hero.images.phoneIcon} alt="Phone" width={40} height={40} />
                <div className="text-[#D20A2E] text-[12px] sm:text-[15px]">
                  <p>{contact.phone.line1}</p>
                  <p>{contact.phone.line2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
