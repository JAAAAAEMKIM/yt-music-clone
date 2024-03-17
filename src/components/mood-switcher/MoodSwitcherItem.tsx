import { Link } from "react-router-dom";
import { Mood } from "./MoodSwitcher";
import styles from "./MoodSwitcher.module.css";

const convertMoodToLink = (value: Mood["value"]) => {
  return `?mood=${value}`;
};

const MoodSwitcherItem: React.FC<Mood> = ({ value, label }) => {
  return (
    <li className={styles.item}>
      <Link to={convertMoodToLink(value)}>{label}</Link>
    </li>
  );
};

export default MoodSwitcherItem;