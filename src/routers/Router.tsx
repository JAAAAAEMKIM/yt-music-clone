import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import Player from "../components/player/Player";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import ExplorePage from "../pages/ExplorePage";
import LibraryPage from "../pages/LibraryPage";
import SearchPage from "../pages/SearchPage";
import Header from "@components/header/Header";

const router = createBrowserRouter([
  {
    element: (
      <MainLayout
        header={<Header />}
        navigation={<NavigationBar />}
        player={<Player />}
        content={<Outlet />}
      />
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/library",
        element: <LibraryPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

const MainRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
