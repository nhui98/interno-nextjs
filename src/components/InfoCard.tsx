import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type InfoCardProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  description: string;
  button: JSX.Element;
};

export function InfoCard({
  button,
  description,
  title,
  className,
  ...props
}: InfoCardProps) {
  return (
    <article
      className={clsx(
        "flex flex-col items-center gap-y-14 rounded-[30px] px-5",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-5">
        <h3 className="text-center font-serif text-4xl">{title}</h3>
        <p className="text-center text-lg tracking-[0.01em]">{description}</p>
      </div>

      {button}
    </article>
  );
}
