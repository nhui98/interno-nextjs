import Banner from "@/components/banner";
import BannerImage from "../../images/about-banner.png";

export default function Page() {
  return (
    <main>
      <Banner image={BannerImage} title="About Us" subtitle="Home / About Us" />
    </main>
  );
}
