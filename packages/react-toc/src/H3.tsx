import { slugify } from "./slugify";

interface H3Props {
  children: string;
}

export const H3 = ({ children }: H3Props) => {
  return <h3 id={slugify(children)}>{children}</h3>;
};
