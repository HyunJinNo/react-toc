import clsx from "clsx";
import { slugify } from "./slugify";

type H6Props = Omit<
  React.ComponentProps<"h6"> & {
    children: string;
  },
  "id"
>;

export const H6 = ({ children, ...props }: H6Props) => {
  return (
    <h6
      {...props}
      className={clsx("toc-heading", props.className)}
      id={slugify(children)}
    >
      {children}
    </h6>
  );
};
