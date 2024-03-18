import MainContents from "./MainContents";
import MainMoodSwitcher from "./MainMoodSwitcher";

export default function Home() {
  return (
    <div>
      <MainMoodSwitcher />
      <MainContents />
    </div>
  );
}
