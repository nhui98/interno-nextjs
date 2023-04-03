import Container from "../container";

export default function Quote() {
  return (
    <section className="mt-52">
      <Container>
        <div className="relative mx-auto max-w-4xl p-20">
          <div className="absolute left-0 top-0 h-full w-[200px] rounded-l-[70px] border-y-[25px] border-l-[25px] border-grey" />
          <div className="text-center font-serif text-7xl">“</div>
          <blockquote className="text-center font-serif text-5xl italic">
            I like an interior that defies labeling. I don&apos;t really want
            someone to walk into a room and know that I did it
          </blockquote>
          <p className="mt-[34px] text-center text-4xl text-[#4D5053]">
            -BUNNY WILLIAMS
          </p>
          <div className="absolute right-0 top-0 h-full w-[200px] rounded-r-[70px] border-y-[25px] border-r-[25px] border-grey" />
        </div>
      </Container>
    </section>
  );
}
