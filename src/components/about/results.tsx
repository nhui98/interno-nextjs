import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";
import Image from "next/image";
import AboutResult from "../../images/about-result.png";

export default function Result() {
  return (
    <section className="mt-36">
      <Container>
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="max-w-md">
            <h2 className="font-serif text-6xl">The End Result</h2>
            <p className="mt-[23px] text-lg">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <Button.Primary
              buttonText="Our Portfolio"
              icon={<ArrowRightIcon className="h-6 w-6 fill-brown" />}
              className="mt-[41px]"
            />
          </div>

          <Image
            src={AboutResult}
            alt="what we do"
            className="rounded-[70px]"
          />
        </div>
      </Container>
    </section>
  );
}
