import HeroSlider from "../../components/home/HeroSlider";
import CenterVision from "../../components/home/CenterVisionSection";
import SetsUsPartSection from "../../components/home/SetsUsPartSection";
import OurServicesSection from "../../components/home/OurServicesSection";

export default function page() {
  return (
    <main>
      <HeroSlider />
      <CenterVision content={"center"} />
      <SetsUsPartSection />
      <OurServicesSection />
    </main>
  );
}
