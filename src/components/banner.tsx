import Image, { StaticImageData } from "next/image";

type BannerProps = {
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export default function Banner({ image, subtitle, title }: BannerProps) {
  return (
    <section className="relative mx-auto max-w-[1920px]">
      <Image src={image} alt={title} priority />
      <div className="absolute bottom-0 flex w-full flex-col items-center">
        <div className="w-[500px] rounded-t-[37px] bg-white py-10">
          <h1 className="text-center font-serif text-6xl">{title}</h1>
          <p className="text-center text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
