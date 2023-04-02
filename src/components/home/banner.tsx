import Image from "next/image";
import HomeBanner from "../../images/home-banner.png";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";
import Button from "../button";

export default function Banner() {
  return (
    <section>
      <Container>
        <div className="relative">
          <Image
            src={HomeBanner}
            alt="home banner"
            className="rounded-[70px]"
            priority
          />
          <div className="absolute inset-0 ml-14 flex max-w-md flex-col justify-center">
            <h1 className="font-serif text-[65px] leading-tight">
              Let Your Home Be Unique
            </h1>
            <p className="mt-4 text-lg">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <Button.Primary
              buttonText="Get Started"
              icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
              className="mt-5"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
