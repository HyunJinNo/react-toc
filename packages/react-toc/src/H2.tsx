import { slugify } from "./slugify";

interface H2Props {
  children: string;
}

export const H2 = ({ children }: H2Props) => {
  return <h2 id={slugify(children)}>{children}</h2>;
};
