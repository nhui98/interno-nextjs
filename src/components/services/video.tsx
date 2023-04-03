import Image from "next/image";
import Container from "../container";
import Thumbnail from "../../images/service-single-video.png";
import { ArrowTriangleRightIcon } from "../icons/arrow";

export default function Video() {
  return (
    <section className="mt-52">
      <Container>
        <div className="relative">
          <Image src={Thumbnail} alt="thumbnail" className="rounded-[70px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-[132px] w-[132px] cursor-pointer items-center justify-center rounded-full bg-white">
              <ArrowTriangleRightIcon />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
