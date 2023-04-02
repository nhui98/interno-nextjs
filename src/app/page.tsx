import AboutUs from "@/components/home/about-us";
import Banner from "@/components/home/banner";
import Testimonials from "@/components/home/testimonials";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
