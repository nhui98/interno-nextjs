import Container from "../container";

const counters = [
  {
    value: 12,
    title: "Years of Experience",
  },
  {
    value: 85,
    title: "Success Project",
  },
  {
    value: 15,
    title: "Active Project",
  },
  {
    value: 95,
    title: "Happy Customer",
  },
];

export default function Counter() {
  return (
    <section className="mt-52 bg-grey">
      <Container>
        <div className="flex justify-center gap-x-[76px] px-12 py-40 [&>*:nth-child(1)]:border-r [&>*:nth-child(1)]:border-r-brown [&>*:nth-child(1)]:pr-[76px] [&>*:nth-child(2)]:border-r [&>*:nth-child(2)]:border-r-brown [&>*:nth-child(2)]:pr-[76px] [&>*:nth-child(3)]:border-r [&>*:nth-child(3)]:border-r-brown [&>*:nth-child(3)]:pr-[76px]">
          {counters.map((counter) => (
            <div key={counter.title} className="flex flex-col items-center">
              <div className="text-center font-serif text-7xl text-brown">
                {counter.value}
              </div>
              <span className="text-center text-lg">{counter.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
