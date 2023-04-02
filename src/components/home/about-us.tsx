import Container from "../container";
import Image from "next/image";
import HomeInterior from "../../images/home-interior.png";
import { PhoneIcon } from "../icons/phone";
import Button from "../button";
import { ArrowRightIcon } from "../icons/arrow";

export default function AboutUs() {
  return (
    <section className="mt-52">
      <Container>
        <div className="flex items-center justify-between">
          <div className="max-w-md">
            <h2 className="font-serif text-6xl">
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p className="mt-[33px] text-lg tracking-[0.01em]">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="mt-[45px] flex items-center gap-[15px]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-grey">
                <PhoneIcon className="h-8 w-8 fill-brown" />
              </div>
              <div>
                <div className="text-[25px] font-bold tracking-[0.01em]">
                  012345678
                </div>
                <div className="text-lg">Call Us Anytime</div>
              </div>
            </div>
            <div className="relative z-10 bg-white">
              <Button.Primary
                buttonText="Get Free Estimate"
                icon={<ArrowRightIcon className="h-6 w-6 fill-brown" />}
                className="mt-[47px]"
              />
            </div>
          </div>

          <div>
            <Image
              src={HomeInterior}
              alt="home interior"
              className="rounded-bl-[123px] rounded-tr-[326px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
