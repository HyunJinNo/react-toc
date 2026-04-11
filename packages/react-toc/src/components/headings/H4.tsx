type H4Props = Omit<
  React.ComponentProps<"h4"> & {
    children: string;
  },
  "id"
>;

export const H4 = ({ children, ...props }: H4Props) => {
  return (
    <h4 {...props} className={["toc-heading", props.className].join(" ")}>
      {children}
    </h4>
  );
};
