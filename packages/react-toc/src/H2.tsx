type H2Props = Omit<
  React.ComponentProps<"h2"> & {
    children: string;
  },
  "id"
>;

export const H2 = ({ children, ...props }: H2Props) => {
  return (
    <h2 {...props} className={["toc-heading", props.className].join(" ")}>
      {children}
    </h2>
  );
};
