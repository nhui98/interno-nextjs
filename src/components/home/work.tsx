import { InfoCard } from "../InfoCard";
import Button from "../button";
import Container from "../container";
import { ArrowRightIcon } from "../icons/arrow";

const workDetails = [
  {
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
    title: "Realization",
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

export default function Work() {
  return (
    <section className="mt-52">
      <Container>
        <div className="grid grid-cols-3">
          {workDetails.map((work) => (
            <InfoCard key={work.title} {...work} />
          ))}
        </div>
      </Container>
    </section>
  );
}
