type H3Props = Omit<
  React.ComponentProps<"h3"> & {
    children: string;
  },
  "id"
>;

export const H3 = ({ children, ...props }: H3Props) => {
  return (
    <h3 {...props} className={["toc-heading", props.className].join(" ")}>
      {children}
    </h3>
  );
};
