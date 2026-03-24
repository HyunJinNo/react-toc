import clsx from "clsx";

type H4Props = Omit<
  React.ComponentProps<"h4"> & {
    children: string;
  },
  "id"
>;

export const H4 = ({ children, ...props }: H4Props) => {
  return (
    <h4 {...props} className={clsx("toc-heading", props.className)}>
      {children}
    </h4>
  );
};
