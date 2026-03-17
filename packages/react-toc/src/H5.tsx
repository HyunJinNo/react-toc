import { slugify } from "./slugify";

type H5Props = React.ComponentProps<"h5"> & {
  children: string;
};

export const H5 = ({ children }: H5Props) => {
  return (
    <h5 className="toc-heading" id={slugify(children)}>
      {children}
    </h5>
  );
};
