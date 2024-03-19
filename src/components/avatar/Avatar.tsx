import Image from "next/image";
import clsx from "clsx";

interface Props {
  src: string;
  alt: string;
  size: "s" | "m";
  onClick: () => void;
}
const Avatar = ({ src, alt, size, onClick }: Props) => {
  return (
    <button
      className={clsx("rounded-full overflow-hidden cursor-pointer", {
        "h-7 w-7": size === "s",
        "h-12 w-12": size === "m",
      })}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </button>
  );
};

export default Avatar;
