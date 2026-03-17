import { slugify } from "./slugify";

type H3Props = React.ComponentProps<"h3"> & {
  children: string;
};

export const H3 = ({ children, ...props }: H3Props) => {
  return (
    <h3 className="tocHeading" id={slugify(children)} {...props}>
      {children}
    </h3>
  );
};
