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
            <article
              key={work.title}
              className="flex flex-col items-center gap-y-14 px-5"
            >
              <div className="flex flex-col gap-y-5">
                <h3 className="text-center font-serif text-4xl">
                  {work.title}
                </h3>
                <p className="text-center text-lg tracking-[0.01em]">
                  {work.description}
                </p>
              </div>

              {work.button}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
