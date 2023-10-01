"use client";

import HeroSlider from "../../components/home/HeroSlider";
import CenterVision from "../../components/home/CenterVisionSection";
import SetsUsPartSection from "../../components/home/SetsUsPartSection";

export default function page() {
  return (
    <main>
      <HeroSlider />
      <CenterVision />
      <SetsUsPartSection />
    </main>
  );
}
