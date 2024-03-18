import Link from "next/link";
import styles from "./NavigationBar.module.css";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.anchor} href="/">
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.anchor} href="/explore">
            Explore
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.anchor} href="/library">
            Library
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
