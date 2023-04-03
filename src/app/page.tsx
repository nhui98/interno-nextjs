import CallToAction from "@/components/call-to-action";
import AboutUs from "@/components/home/about-us";
import Banner from "@/components/home/banner";
import Blog from "@/components/home/blog";
import Clients from "@/components/home/clients";
import Counter from "@/components/home/counter";
import Projects from "@/components/home/projects";
import Testimonials from "@/components/home/testimonials";
import Work from "@/components/home/work";

export default function Page() {
  return (
    <main>
      <Banner />
      <Work />
      <AboutUs />
      <Testimonials />
      <Clients />
      <Projects />
      <Counter />
      <Blog />
      <CallToAction />
    </main>
  );
}
