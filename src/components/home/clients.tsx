import Container from "../container";
import {
  ModernHomeLogo,
  BrandLogo,
  ClassicLogo,
  NatureHomeLogo,
  StyleVintageLogo,
} from "../icons/client-logo";

export default function Clients() {
  return (
    <section className="mt-40">
      <Container>
        <div className="flex items-center justify-between px-[55px]">
          <ModernHomeLogo />
          <StyleVintageLogo />
          <BrandLogo />
          <NatureHomeLogo />
          <ClassicLogo />
        </div>
      </Container>
    </section>
  );
}
