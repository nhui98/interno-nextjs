import Container from "../container";
import Team1 from "../../images/about-team-1.png";
import Team2 from "../../images/about-team-2.png";
import Team3 from "../../images/about-team-3.png";
import Image from "next/image";
import { TwitterIcon } from "../icons/twitter.";
import { FacebookIcon } from "../icons/facebook";
import { LinkedInIcon } from "../icons/linked-in";
import { InstagramIcon } from "../icons/instagram";

export default function Team() {
  return (
    <section className="mt-52 bg-grey py-44">
      <Container>
        <h2 className="mx-auto max-w-xl text-center font-serif text-6xl">
          What the People Thinks About Us
        </h2>
        <div className="mt-10 grid grid-cols-4 gap-x-[22px]">
          <Image src={Team1} alt="team member" className="rounded-[37px]" />
          <Image src={Team2} alt="team member" className="rounded-[37px]" />
          <div className="flex flex-col justify-between rounded-[37px] bg-white px-6 py-[70px]">
            <div>
              <h5 className="text-center font-serif text-4xl">
                Nattasha Julie
              </h5>
              <p className="text-center text-sm">Design, Australia</p>
            </div>

            <ul className="flex justify-center gap-x-6">
              <li>
                <FacebookIcon className="h-6 w-6 fill-black" />
              </li>
              <li>
                <TwitterIcon className="h-6 w-6 fill-black" />
              </li>
              <li>
                <LinkedInIcon className="h-6 w-6 fill-black" />
              </li>
              <li>
                <InstagramIcon className="h-6 w-6 fill-black" />
              </li>
            </ul>

            <div className="text-center text-sm">
              <div className="">+1 (378) 400-1234</div>
              <div>julie@email.com</div>
            </div>
          </div>
          <Image src={Team3} alt="team member" className="rounded-[37px]" />
        </div>
      </Container>
    </section>
  );
}
