import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export default function Container({
  children,
  ...props
}: PropsWithChildren & ComponentPropsWithoutRef<"div">) {
  return (
    <div className="mx-auto max-w-[1200px]" {...props}>
      {children}
    </div>
  );
}
