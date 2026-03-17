import { slugify } from "./slugify";

type H4Props = React.ComponentProps<"h4"> & {
  children: string;
};

export const H4 = ({ children }: H4Props) => {
  return (
    <h4 className="tocHeading" id={slugify(children)}>
      {children}
    </h4>
  );
};
