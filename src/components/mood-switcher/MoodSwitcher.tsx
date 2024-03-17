import MoodSwitcherItem from "./MoodSwitcherItem";
import styles from "./MoodSwitcher.module.css";

export type Mood = {
  label: string;
  value: string;
};
interface MoodSwitcherProps {
  moods: Array<Mood>;
}

const MoodSwitcher: React.FC<MoodSwitcherProps> = ({ moods }) => {
  return (
    <ul className={styles.wrapper}>
      {moods.map((mood) => (
        <MoodSwitcherItem {...mood} />
      ))}
    </ul>
  );
};

export default MoodSwitcher;
