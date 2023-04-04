import Container from "../container";

const interiors = [
  "We provide high quality design services.",
  "Project on time and Latest Design.",
  "Scientific Skills For getting a better result.",
  "Renovations Benefit of Service.",
  "We are confident about our projects.",
];

const art = [
  "We provide high quality design services.",
  "Project on time and Latest Design.",
  "Scientific Skills For getting a better result.",
  "Renovations Benefit of Service.",
  "We are confident about our projects.",
];

export default function Points() {
  return (
    <section className="mt-52">
      <Container>
        <div className="flex items-center justify-between px-[83px]">
          <div>
            <h2 className="font-serif text-6xl">Use of Interior</h2>
            <ul className="mt-[23px]">
              {interiors.map((interior, i) => (
                <li key={interior} className="mt-10 text-lg">
                  <span className="font-serif text-2xl text-brown">
                    {i + 1}
                  </span>
                  <span className="pl-4">{interior}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[250px] w-[1px] bg-[#CECECE]" />

          <div>
            <h2 className="font-serif text-6xl">Make An Art</h2>
            <ul className="mt-[23px]">
              {art.map((a, i) => (
                <li key={a} className="mt-10 text-lg">
                  <span className="font-serif text-2xl text-brown">
                    {i + 1}
                  </span>
                  <span className="pl-4">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
