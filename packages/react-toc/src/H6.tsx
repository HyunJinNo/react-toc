import clsx from "clsx";

type H6Props = Omit<
  React.ComponentProps<"h6"> & {
    children: string;
  },
  "id"
>;

export const H6 = ({ children, ...props }: H6Props) => {
  return (
    <h6 {...props} className={clsx("toc-heading", props.className)}>
      {children}
    </h6>
  );
};
