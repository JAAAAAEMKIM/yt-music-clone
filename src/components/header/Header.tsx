import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import HamburgerButton from "../hamburger-button/HamburgerButton";

interface Props {
  onClickHamburger: () => void;
}

const Header = ({ onClickHamburger }: Props) => {
  return (
    <div className="flex justify-between h-16">
      <div className="flex items-center pl-4 gap-3">
        <HamburgerButton onClick={onClickHamburger} />
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.input}>
        <i>Search Icon</i>

        <input placeholder="Search songs, albums, artists, podcasts" />
      </div>
      <div className={styles.toolbar}>
        <button>cast</button>
        <button>UserName</button>
      </div>
    </div>
  );
};

export default Header;
