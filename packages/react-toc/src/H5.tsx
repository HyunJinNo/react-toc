import clsx from "clsx";
import { slugify } from "./slugify";

type H5Props = Omit<
  React.ComponentProps<"h5"> & {
    children: string;
  },
  "id"
>;

export const H5 = ({ children, ...props }: H5Props) => {
  return (
    <h5
      {...props}
      className={clsx("toc-heading", props.className)}
      id={slugify(children)}
    >
      {children}
    </h5>
  );
};
