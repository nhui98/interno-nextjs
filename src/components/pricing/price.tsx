import clsx from "clsx";
import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";

const options = [
  {
    title: "Design advices",
    ppm: 29,
    features: [
      "General living space advices",
      "Rennovation advices",
      "Interior design advices",
      "Furniture reorganization",
      "Up to 5 hours meetings",
    ],
  },
  {
    title: "Complete interior",
    ppm: 39,
    features: [
      "Complete home redesign",
      "Interior and exterior works",
      "Modular interior planning",
      "Kitchen design",
      "Garages organization",
    ],
  },
  {
    title: "Furniture design",
    ppm: 59,
    features: [
      "Furniture for living room",
      "Furniture refurbishment",
      "Sofas and amchairs",
      "Tables and chairs",
      "Kitchens",
    ],
  },
];

export default function Price() {
  return (
    <section className="mt-52">
      <Container>
        <div className="grid grid-cols-3 gap-x-12">
          {options.map((option, i) => (
            <div
              key={option.title}
              className={clsx(
                "flex flex-col items-center rounded-[37px] bg-grey py-16",
                i % 2 === 1 &&
                  "drop-shadow-[0_10px_20px_rgba(136,136,136,0.25)]"
              )}
            >
              <h3 className="font-serif text-4xl">{option.title}</h3>
              <div className="text-center font-serif">
                <div>
                  <span className="text-4xl">$</span>
                  <span
                    className={clsx("text-7xl", i % 2 === 1 && "text-brown")}
                  >
                    {option.ppm}
                  </span>
                </div>
                <span className="text-4xl">/month</span>
              </div>

              {i % 2 === 1 ? (
                <>
                  <div className="relative mt-10 h-[1px] w-full bg-black">
                    <div className="absolute -top-5 flex w-full justify-center">
                      <span className="rounded-full bg-black px-10 py-2 text-white">
                        Most Popular Plan
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-10 h-[1px] w-full bg-brown" />
              )}

              <ul className="mt-7">
                {option.features.map((feature) => (
                  <li key={feature} className="mt-4 text-center text-md">
                    {feature}
                  </li>
                ))}
              </ul>

              {i % 2 === 1 ? (
                <Button.Primary
                  buttonText="Get Started"
                  icon={<ArrowRightIcon className="h-6 w-6 fill-brown" />}
                  className="mt-8"
                />
              ) : (
                <Button.Secondary
                  buttonText="Get Started"
                  icon={<ArrowRightIcon className="h-6 w-6" />}
                  className="mt-8"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
