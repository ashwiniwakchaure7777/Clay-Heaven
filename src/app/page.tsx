import Image from "next/image";
import HeroSection from "../components/HeroSection";
import WhatsTrending from "../components/WhatsTrending";
import Poutry from "../components/Poutry";
import WhatCustomerSay from "../components/WhatCustomerSay";
import LandingVide from "../components/LandingVide";
import BestSeller from "../components/BestSeller";
import LearnPottery from "../components/LearnPottery";
import LatestBlog from "../components/LatestBlog";
import Delivery from "../components/Delivery";
import ShopOnInsta from "../components/ShopOnInsta";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <main className=" antialiased bg-white ">
      <HeroSection />
      <WhatsTrending />
      <Poutry />
      <WhatCustomerSay />
      <LandingVide />
      <BestSeller />
      <LearnPottery />
      <LatestBlog />
      <Delivery />
      <ShopOnInsta />
      <Footer />
    </main>
  );
}
