import Banner from "@/components/banner";
import BannerImage from "../../../images/services-single-banner.png";
import ServiceDetail from "@/components/services/service-detail";
import Clients from "@/components/home/clients";
import Video from "@/components/services/video";
import Points from "@/components/services/points";

export default function Page() {
  return (
    <main>
      <Banner
        image={BannerImage}
        title="Services Single"
        subtitle="Home / Services Single"
      />
      <ServiceDetail />
      <Clients />
      <Video />
      <Points />
    </main>
  );
}
