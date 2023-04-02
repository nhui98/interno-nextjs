import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";

export default function Contact() {
  return (
    <section className="mt-52">
      <Container>
        <div className="flex flex-col items-center rounded-[70px] bg-black py-20">
          <h2 className="text-center font-serif text-6xl text-white">
            Wanna join the interno?
          </h2>
          <p className="mt-4 text-center text-lg text-white">
            It is a long established fact will be distracted.
          </p>
          <Button.Secondary
            buttonText="Contact With Us"
            icon={<ArrowRightIcon className="h-6 w-6 fill-black" />}
            className="mt-8"
          />
        </div>
      </Container>
    </section>
  );
}
