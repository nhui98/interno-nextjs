import Banner from "@/components/banner";
import BannerImage from "../../images/about-banner.png";
import Quote from "@/components/about/quote";
import WhatWeDo from "@/components/about/what-we-do";
import Result from "@/components/about/results";
import Team from "@/components/about/team";

export default function Page() {
  return (
    <main>
      <Banner image={BannerImage} title="About Us" subtitle="Home / About Us" />
      <Quote />
      <WhatWeDo />
      <Result />
      <Team />
    </main>
  );
}
