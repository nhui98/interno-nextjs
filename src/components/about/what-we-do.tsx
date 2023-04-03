import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";
import Image from "next/image";
import AboutWhatWeDo from "../../images/about-what-we-do.png";

export default function WhatWeDo() {
  return (
    <section className="mt-52">
      <Container>
        <div className="flex items-center justify-between">
          <div className="max-w-md">
            <h2 className="font-serif text-6xl">What We Do</h2>
            <p className="mt-[23px] text-lg">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <Button.Primary
              buttonText="Our Concept"
              icon={<ArrowRightIcon className="h-6 w-6 fill-brown" />}
              className="mt-[41px]"
            />
          </div>

          <Image
            src={AboutWhatWeDo}
            alt="what we do"
            className="rounded-[70px]"
          />
        </div>
      </Container>
    </section>
  );
}
