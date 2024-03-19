import Link from "next/link";
import { Mood } from "./MoodSwitcher";
import styles from "./MoodSwitcher.module.css";
import clsx from "clsx";

const convertMoodToLink = (value: Mood["value"]) => {
  return `?mood=${value}`;
};

const MoodSwitcherItem: React.FC<Mood> = ({ value, label }) => {
  return (
    <li
      className={clsx(
        "inline-flex place-content-center",
        "px-3",
        "rounded-md",
        "text-sm/4",
        "cursor-pointer",
        "bg-white-transparent-10",
        "hover:bg-white-transparent-20",
      )}
    >
      <Link className="h-9 leading-9" href={convertMoodToLink(value)}>
        {label}
      </Link>
    </li>
  );
};

export default MoodSwitcherItem;
