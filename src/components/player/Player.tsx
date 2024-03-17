import Controller from "./Controller";
import Navigator from "./Navigator";
import Information from "./Information";
import styles from "./Player.module.css";

const Player: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Navigator />
      <Information />
      <Controller />
    </div>
  );
};

export default Player;
