import Container from "../container";

import Project1 from "../../images/home-projects-1.png";
import Project2 from "../../images/home-projects-2.png";
import Project3 from "../../images/home-projects-3.png";
import Project4 from "../../images/home-projects-4.png";
import Image from "next/image";
import { ChevronRightIcon } from "../icons/arrow";
import Link from "next/link";

const projects = [
  {
    image: Project1,
    title: "Modern Kitchen",
    subtitle: "Decor / Architecture",
    href: "/",
  },
  {
    image: Project2,
    title: "Modern Kitchen",
    subtitle: "Decor / Architecture",
    href: "/",
  },
  {
    image: Project3,
    title: "Modern Kitchen",
    subtitle: "Decor / Architecture",
    href: "/",
  },
  {
    image: Project4,
    title: "Modern Kitchen",
    subtitle: "Decor / Architecture",
    href: "/",
  },
];

export default function Projects() {
  return (
    <section className="mt-40">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-6xl">
            Follow Our Projects
          </h2>
          <p className="mt-2 text-center text-lg">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="mt-[93px] grid grid-cols-2 gap-y-14 [&>div:nth-child(even)>img]:rounded-tl-[80px] [&>div:nth-child(odd)>img]:rounded-tr-[80px]">
          {projects.map((project, i) => (
            <div
              key={project.title + i}
              className="relative flex w-max flex-col"
            >
              <Link href={project.href} className="absolute inset-0 z-10" />
              <Image src={project.image} alt={project.title} />
              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-4xl">{project.title}</h3>
                  <div className="text-lg">{project.subtitle}</div>
                </div>
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-grey">
                  <ChevronRightIcon className="h-8 w-8 fill-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
