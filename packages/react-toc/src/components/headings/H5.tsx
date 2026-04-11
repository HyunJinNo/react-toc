type H5Props = Omit<
  React.ComponentProps<"h5"> & {
    children: string;
  },
  "id"
>;

export const H5 = ({ children, ...props }: H5Props) => {
  return (
    <h5 {...props} className={["toc-heading", props.className].join(" ")}>
      {children}
    </h5>
  );
};
