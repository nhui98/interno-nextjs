import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  buttonText: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
};

function Primary({
  buttonText,
  icon: Icon,
  iconPosition = "right",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex w-max items-center justify-center gap-[10px] rounded-[18px] bg-black px-14 py-7",
        iconPosition === "right" ? "flex-row" : "flex-row-reverse",
        className
      )}
    >
      <span className="text-xl font-semibold tracking-[0.02em] text-white">
        {buttonText}
      </span>
      {Icon}
    </button>
  );
}

const Button = {
  Primary,
};

export default Button;
