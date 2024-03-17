import MoodSwitcher from "../../components/mood-switcher/MoodSwitcher";
import { useMoodsQuery } from "../../queries/useMoodsQuery";

const MainMoodSwitcher = () => {
  const { data: moods } = useMoodsQuery();

  return <MoodSwitcher moods={moods} />;
};

export default MainMoodSwitcher;
