import Image from "next/image";
import DefaultImage from "@/public/image-4@2x.jpg";

type LogoProps = {
  image?: string | unknown | any;
  alt: string;
};
const Logo = ({ image }: LogoProps) => {
  return (
    <Image
      className="size-12 rounded-full"
      src={!image ? DefaultImage : image}
      alt=""
    />
  );
};

export default Logo;
