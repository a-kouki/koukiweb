"use client"

import Nav from "./_components/Nav";
import Top from "./_components/Top";
import Services from "./_components/Services";
import Products from "./_components/Products";
import Upgrade from "./_components/UpgradeImg";
import Contact from "./_components/Contact";
import Foot from "./_components/Foot";

export default function HomeClient() {

  return (
    <>
      <Nav />
      <Top />
      <Services />
      <Products />
      <Upgrade />
      <Contact />
      <Foot />
    </>
  );
}
