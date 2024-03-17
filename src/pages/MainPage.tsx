import { Suspense } from "react";
import MainMoodSwitcher from "../containers/main-mood-switcher/MainMoodSwitcher";
import { ErrorBoundary } from "react-error-boundary";
import MainContents from "@containers/main-contents/MainContents";

const MainPage: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Error Boundary</div>}>
      <Suspense fallback={"...loading"}>
        <div>
          <MainMoodSwitcher />
          <MainContents />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
