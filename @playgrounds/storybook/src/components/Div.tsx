import { HTMLAttributes } from "react";

export type DivProps = HTMLAttributes<HTMLDivElement>;

export const Div = ({ children, ...props }: DivProps) => (
  <div {...props}>{children}</div>
);
