import { getMoods } from "@/apis/moods";
import MainContents from "./MainContents";
import MoodSwitcher from "@/components/mood-switcher/MoodSwitcher";

export default async function Home() {
  const data = await getMoods();
  return (
    <div className="pt-10 mt-1.5 w-full">
      <MoodSwitcher moods={data} />
      {/* <MainContents /> */}
    </div>
  );
}
