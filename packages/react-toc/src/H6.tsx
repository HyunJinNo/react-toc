import { slugify } from "./slugify";

type H6Props = React.ComponentProps<"h6"> & {
  children: string;
};

export const H6 = ({ children }: H6Props) => {
  return (
    <h6 className="toc-heading" id={slugify(children)}>
      {children}
    </h6>
  );
};
