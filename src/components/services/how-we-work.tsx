import Container from "../container";
import Image1 from "../../images/services-how-1.png";
import Image2 from "../../images/services-how-2.png";
import Image3 from "../../images/services-how-3.png";
import Image4 from "../../images/services-how-4.png";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
} from "../icons/services";
import Image from "next/image";
import clsx from "clsx";

const details = [
  {
    number: "01",
    image: Image1,
    icon: <ServiceIcon1 />,
    title: "Concept & Details",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
  },
  {
    number: "02",
    image: Image2,
    icon: <ServiceIcon2 />,
    title: "Concept & Details",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
  },
  {
    number: "03",
    image: Image3,
    icon: <ServiceIcon3 />,
    title: "Concept & Details",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
  },
  {
    number: "04",
    image: Image4,
    icon: <ServiceIcon4 />,
    title: "Concept & Details",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
  },
];

export default function HowWeWork() {
  return (
    <section className="mt-52">
      <Container>
        <div className="bg-grey py-40">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-6xl">How We Work</h2>
            <p className="mt-4 text-center text-lg">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="mt-[100px] flex flex-col items-center gap-y-[70px]">
            {details.map((detail, i) => (
              <div
                key={detail.number}
                className={clsx(
                  "flex items-center gap-x-[51px]",
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <Image
                  src={detail.image}
                  alt={detail.title}
                  className="rounded-bl-[326px] rounded-tr-[123px]"
                />
                <div className="max-w-md">
                  <div className="flex items-center justify-between">
                    {detail.icon}
                    <div className="font-serif text-[120px] text-white">
                      {detail.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-5xl">{detail.title}</h3>
                    <p className="mt-3 text-lg">{detail.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
