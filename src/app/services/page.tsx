import Banner from "@/components/banner";
import BannerImage from "../../images/services-banner.png";
import Services from "@/components/services/services";
import HowWeWork from "@/components/services/how-we-work";
import CallToAction from "@/components/call-to-action";

export default function Page() {
  return (
    <main>
      <Banner image={BannerImage} title="Services" subtitle="Home / Services" />
      <Services />
      <HowWeWork />
      <CallToAction />
    </main>
  );
}
