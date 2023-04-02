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
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "relative z-10 inline-flex w-max items-center justify-center gap-[10px] rounded-[18px] bg-black px-14 py-7 drop-shadow-btn",
        iconPosition === "right" ? "flex-row" : "flex-row-reverse",
        className
      )}
      {...props}
    >
      <span className="text-xl font-semibold tracking-[0.02em] text-white">
        {buttonText}
      </span>
      {Icon}
    </button>
  );
}

function Secondary({
  buttonText,
  icon: Icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "relative z-10 inline-flex w-max items-center justify-center gap-[10px] rounded-[18px] bg-brown px-14 py-7 drop-shadow-btn-secondary",
        iconPosition === "right" ? "flex-row" : "flex-row-reverse",
        className
      )}
      {...props}
    >
      <span className="text-xl font-semibold tracking-[0.02em] text-white">
        {buttonText}
      </span>
      {Icon}
    </button>
  );
}

function Tertiary({
  buttonText,
  icon: Icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex w-max items-center justify-center gap-3",
        iconPosition === "right" ? "flex-row" : "flex-row-reverse",
        className
      )}
      {...props}
    >
      <span className="text-xl font-semibold tracking-[0.02em] text-black">
        {buttonText}
      </span>
      {Icon}
    </button>
  );
}

const Button = {
  Primary,
  Secondary,
  Tertiary,
};

export default Button;
