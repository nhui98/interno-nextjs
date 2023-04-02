import Link from "next/link";
import Container from "./container";
import { FacebookIcon } from "./icons/facebook";
import { InstagramIcon } from "./icons/instagram";
import { LinkedInIcon } from "./icons/linked-in";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter.";

const socials = [
  {
    id: "facebook",
    icon: <FacebookIcon className="h-6 w-6 fill-black" />,
    href: "/",
  },
  {
    id: "twitter",
    icon: <TwitterIcon className="h-6 w-6 fill-black" />,
    href: "/",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon className="h-6 w-6 fill-black" />,
    href: "/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon className="h-6 w-6 fill-black" />,
    href: "/",
  },
];

const columnData = [
  {
    title: "Pages",
    links: [
      {
        text: "About Us",
        href: "/",
      },
      {
        text: "Our Projects",
        href: "/",
      },
      {
        text: "Our Team",
        href: "/",
      },
      {
        text: "Contact Us",
        href: "/",
      },
      {
        text: "Services",
        href: "/",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        text: "Kitchen",
        href: "/",
      },
      {
        text: "Living Area",
        href: "/",
      },
      {
        text: "Bathroom",
        href: "/",
      },
      {
        text: "Dinning Hall",
        href: "/",
      },
      {
        text: "Bedroom",
        href: "/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        text: "55 East Birchwood Ave. Brooklyn, New York 11201 ",
        href: null,
      },
      {
        text: "contact@interno.com",
        href: null,
      },
      {
        text: "(123) 456 - 7890",
        href: null,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-52">
      <Container>
        <div className="flex justify-between">
          <div className="max-w-[400px]">
            <div className="flex items-center gap-x-[10px]">
              <Logo className="h-[34px] w-[34px]" />
              <div className="font-serif text-[40px] leading-tight">
                Interno
              </div>
            </div>
            <p className="mt-[18px] text-lg">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <ul className="mt-[31px] flex items-center gap-14">
              {socials.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between">
            {columnData.map((column) => (
              <div key={column.title} className="flex-1">
                <h3 className="font-serif text-4xl">{column.title}</h3>
                <ul className="mt-6">
                  {column.links.map((link) => (
                    <li key={link.text} className="mt-6 text-md">
                      {link.href ? (
                        <Link href={link.href}>{link.text}</Link>
                      ) : (
                        link.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-44 h-20 text-center text-md">
          Copyright &copy; Interno
        </div>
      </Container>
    </footer>
  );
}
