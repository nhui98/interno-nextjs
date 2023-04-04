import Banner from "@/components/banner";
import BannerImage from "../../images/pricing-banner.jpg";
import Price from "@/components/pricing/price";

export default function Page() {
  return (
    <main>
      <Banner
        image={BannerImage}
        title="Pricing & Plan"
        subtitle="Home / Pricing"
      />
      <Price />
    </main>
  );
}
