import AboutUs from "@/components/home/about-us";
import Banner from "@/components/home/banner";
import Clients from "@/components/home/clients";
import Projects from "@/components/home/projects";
import Testimonials from "@/components/home/testimonials";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      <AboutUs />
      <Testimonials />
      <Clients />
      <Projects />
    </main>
  );
}
