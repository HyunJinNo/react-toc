import clsx from "clsx";
import { slugify } from "./slugify";

type H2Props = Omit<
  React.ComponentProps<"h2"> & {
    children: string;
  },
  "id"
>;

export const H2 = ({ children, ...props }: H2Props) => {
  return (
    <h2
      {...props}
      className={clsx("toc-heading", props.className)}
      id={slugify(children)}
    >
      {children}
    </h2>
  );
};
