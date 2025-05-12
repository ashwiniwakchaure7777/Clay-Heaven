import Image from "next/image";
import HeroSection from "../components/HeroSection";
import WhatsTrending from "../components/WhatsTrending";
import Poutry from "../components/Poutry";
import WhatCustomerSay from "../components/WhatCustomerSay";

export default function Home() {
  return (
    <main className=" antialiased bg-white ">
      <HeroSection />
      <WhatsTrending />
      <Poutry />
      <WhatCustomerSay />
    </main>
  );
}
