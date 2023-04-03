import Banner from "@/components/banner";
import BannerImage from "../../images/services-banner.png";
import Services from "@/components/services/services";

export default function Page() {
  return (
    <main>
      <Banner image={BannerImage} title="Services" subtitle="Home / Services" />
      <Services />
    </main>
  );
}
