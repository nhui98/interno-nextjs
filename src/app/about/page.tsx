import Banner from "@/components/banner";
import BannerImage from "../../images/about-banner.png";
import Quote from "@/components/about/quote";

export default function Page() {
  return (
    <main>
      <Banner image={BannerImage} title="About Us" subtitle="Home / About Us" />
      <Quote />
    </main>
  );
}
