import Container from "../container";
import Image from "next/image";
import TestimonialAvatar1 from "../../images/testimonial-avatar-1.jpg";
import TestimonialAvatar2 from "../../images/testimonial-avatar-2.jpg";
import TestimonialAvatar3 from "../../images/testimonial-avatar-3.jpg";

const testimonials = [
  {
    image: TestimonialAvatar1,
    name: "Nattasha Mith",
    residence: "Sydney, USA",
    testimony:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    image: TestimonialAvatar2,
    name: "Raymond Galario",
    residence: "Sydney, Australia",
    testimony:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    image: TestimonialAvatar3,
    name: "Benny Roll",
    residence: "Sydney, New York",
    testimony:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-52">
      <Container>
        <div className="rounded-[70px] bg-grey px-6 py-[88px]">
          <h2 className="mx-auto max-w-xl text-center font-serif text-6xl">
            What the People Thinks About Us
          </h2>

          <div className="mt-[38px] grid grid-cols-3 gap-x-5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-[34px] bg-white px-[37px] pt-[53px]"
              >
                <div className="flex items-center gap-x-6">
                  <Image src={t.image} alt={t.name} className="rounded-full" />
                  <div className="flex flex-col">
                    <h3 className="font-serif text-4xl tracking-[0.01em]">
                      {t.name}
                    </h3>
                    <div className="text-sm tracking-[0.01em]">
                      {t.residence}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pb-[54px] text-lg">{t.testimony}</div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
