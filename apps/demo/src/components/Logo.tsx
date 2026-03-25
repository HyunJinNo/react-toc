import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image src="/react-toc.webp" alt="logo" width={width} height={height} />
  );
};
