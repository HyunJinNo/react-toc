import { slugify } from "./slugify";

interface H5Props {
  children: string;
}

export const H5 = ({ children }: H5Props) => {
  return <h5 id={slugify(children)}>{children}</h5>;
};
