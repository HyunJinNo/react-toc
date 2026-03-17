import { slugify } from "./slugify";

type H2Props = React.ComponentProps<"h2"> & {
  children: string;
};

export const H2 = ({ children, ...props }: H2Props) => {
  return (
    <h2 className="toc-heading" id={slugify(children)} {...props}>
      {children}
    </h2>
  );
};
