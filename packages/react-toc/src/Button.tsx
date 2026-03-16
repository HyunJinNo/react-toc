interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return <button style={{ border: "1px solid black" }}>{title}</button>;
};
