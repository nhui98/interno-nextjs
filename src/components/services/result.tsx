import Image from "next/image";
import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";
import ServiceResult from "../../images/services-single-result.png";

export default function Result() {
  return (
    <section className="mt-36">
      <Container>
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="max-w-lg">
            <h2 className="font-serif text-6xl">
              We love design. That&apos;s how we got here.
            </h2>
            <p className="mt-[23px] text-lg">
              It is a long established fact that a reader will be distracted by
              the of readable content.
            </p>
            <Button.Primary
              buttonText="Our Portfolio"
              icon={<ArrowRightIcon className="h-6 w-6 fill-brown" />}
              className="mt-[41px]"
            />
          </div>

          <Image
            src={ServiceResult}
            alt="what we do"
            className="rounded-[70px]"
          />
        </div>
      </Container>
    </section>
  );
}
