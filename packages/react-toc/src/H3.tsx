import clsx from "clsx";

type H3Props = Omit<
  React.ComponentProps<"h3"> & {
    children: string;
  },
  "id"
>;

export const H3 = ({ children, ...props }: H3Props) => {
  return (
    <h3 {...props} className={clsx("toc-heading", props.className)}>
      {children}
    </h3>
  );
};
