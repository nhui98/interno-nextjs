import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-[1200px]">{children}</div>;
}
