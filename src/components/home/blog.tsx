import Container from "../container";
import Blog1 from "../../images/home-blog-1.png";
import Blog2 from "../../images/home-blog-2.png";
import Blog3 from "../../images/home-blog-3.png";
import Image from "next/image";
import { ChevronRightIcon } from "../icons/arrow";
import clsx from "clsx";
import { formatDate } from "@/utils/format-date";
import Link from "next/link";

const blogs = [
  {
    image: Blog1,
    tag: "Kitchen Design",
    title: "Let’s Get Solution For Building Construction Work.",
    date: "2022-12-26",
    href: "/",
  },
  {
    image: Blog2,
    tag: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "2022-12-22",
    href: "/",
  },
  {
    image: Blog3,
    tag: "Interior Design",
    title: "Best For Any Office & Business Interior Solution.",
    date: "2022-12-25",
    href: "/",
  },
];

export default function Blog() {
  return (
    <section className="mt-52">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-6xl">Article & News</h2>
          <p className="mt-3 text-center text-lg">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>

        <div className="mt-14 flex justify-between gap-x-7">
          {blogs.map((blog, i) => (
            <figure
              key={blog.title}
              className={clsx(
                "relative rounded-[62px] border border-[#e7e7e7] p-5",
                i % 2 === 1 ? "bg-grey" : "bg-white"
              )}
            >
              <Link href={blog.href} className="absolute inset-0 z-10" />
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-tl-[45px] rounded-tr-[45px]"
                />
                <div className="absolute bottom-5 left-5 flex items-end rounded-t-lg rounded-br-lg bg-white p-3 text-[16px]">
                  {blog.tag}
                </div>
              </div>
              <div className="mt-5 pb-5">
                <h3 className="font-serif text-4xl">{blog.title}</h3>
                <div className="mt-[30px] flex items-center justify-between">
                  <span className="text-[16px]">{formatDate(blog.date)}</span>
                  <div
                    className={clsx(
                      "flex h-[52px] w-[52px] items-center justify-center rounded-full",
                      i % 2 === 0 ? "bg-grey" : "bg-white"
                    )}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
