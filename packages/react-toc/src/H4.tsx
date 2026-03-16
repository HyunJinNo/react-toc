import { slugify } from "./slugify";

interface H4Props {
  children: string;
}

export const H4 = ({ children }: H4Props) => {
  return <h4 id={slugify(children)}>{children}</h4>;
};
