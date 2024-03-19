"use client";
import styles from "./NavigationBar.module.css";
import NavigationBarItem from "./NavigationBarItem";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdOutlineLibraryMusic } from "react-icons/md";
import { usePathname } from "next/navigation";

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="w-18 pt-2 px-2">
      <ul className={styles.list}>
        <NavigationBarItem
          href="/"
          label="Home"
          icon={<GoHomeFill />}
          active={pathname === "/"}
        />
        <NavigationBarItem
          href="/explore"
          label="Explore"
          icon={<MdOutlineExplore />}
          active={pathname === "/explore"}
        />
        <NavigationBarItem
          href="/library"
          label="Library"
          icon={<MdOutlineLibraryMusic />}
          active={pathname === "/library"}
        />
      </ul>
    </nav>
  );
};

export default NavigationBar;
