import clsx from "clsx";
import Link from "next/link";

interface Props {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

const NavigationBarItem = ({ label, icon, href, active }: Props) => {
  return (
    <li
      className={clsx(
        "flex flex-col justify-center",
        "h-[65px] w-14",
        "rounded-lg",
        "text-xs",
        "cursor-pointer",
        {
          "bg-white-transparent-10": active,
        },
        {
          "hover:bg-white-transparent-20": !active,
        },
      )}
    >
      <Link
        className={clsx("flex flex-col gap-1", "items-center justify-center")}
        href={href}
      >
        <span className="text-lg">{icon}</span>
        {label}
      </Link>
    </li>
  );
};

export default NavigationBarItem;
