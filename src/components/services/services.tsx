import { InfoCard } from "../InfoCard";
import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";

const services = [
  {
    id: 0,
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    button: (
      <Button.Tertiary
        buttonText="Read More"
        icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
      />
    ),
  },
  {
    id: 1,
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    button: (
      <Button.Tertiary
        buttonText="Read More"
        icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
      />
    ),
  },
  {
    id: 2,
    title: "Retail Design",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    button: (
      <Button.Tertiary
        buttonText="Read More"
        icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
      />
    ),
  },
  {
    id: 3,
    title: "2d/3d Art Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    button: (
      <Button.Tertiary
        buttonText="Read More"
        icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
      />
    ),
  },
  {
    id: 4,
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    button: (
      <Button.Tertiary
        buttonText="Read More"
        icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
      />
    ),
  },
  {
    id: 5,
    title: "Decoration Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    button: (
      <Button.Tertiary
        buttonText="Read More"
        icon={<ArrowRightIcon className="h-5 w-5 fill-brown" />}
      />
    ),
  },
];

export default function Services() {
  return (
    <section className="mt-52">
      <Container>
        <div className="grid grid-cols-3 gap-y-10 [&>article:nth-child(5)]:bg-grey">
          {services.map((service) => (
            <InfoCard
              key={service.id}
              description={service.description}
              button={service.button}
              title={service.title}
              className="py-20"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
