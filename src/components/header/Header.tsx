import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">Logo Music</Link>
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
