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
    <ul className="flex gap-3 ml-14">
      {moods.map((mood) => (
        <MoodSwitcherItem {...mood} key={mood.value} />
      ))}
    </ul>
  );
};

export default MoodSwitcher;
