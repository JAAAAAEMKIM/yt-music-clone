import styles from "./NavigationBar.module.css";
import { NavLink as Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/explore">Explore</Link>
        </li>
        <li className={styles.item}>
          <Link to="/library">Library</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
