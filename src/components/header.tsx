import Container from "./container";
import { Logo } from "./icons/logo";
import Link from "next/link";
import { SearchIcon } from "./icons/search";
const Navlinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Pages",
    href: "/pages",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="mb-12 mt-10">
      <Container>
        <nav className="flex h-[50px] items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <Logo className="h-[34px] w-[34px]" />
            <div className="font-serif text-[40px] leading-tight">Interno</div>
          </div>

          <ul className="flex items-center gap-10">
            {Navlinks.map((link) => (
              <li key={link.title}>
                <Link className="text-md" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
            <SearchIcon className="h-5 w-5 cursor-pointer fill-black" />
          </ul>
        </nav>
      </Container>
    </header>
  );
}
