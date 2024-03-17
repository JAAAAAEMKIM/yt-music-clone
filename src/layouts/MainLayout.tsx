import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  header: React.ReactNode;
  navigation: React.ReactNode;
  content: React.ReactNode;
  player: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({
  header,
  navigation,
  content,
  player,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.mainArea}>
        {navigation}
        {content}
      </div>
      <div className={styles.playerArea}>{player}</div>
    </div>
  );
};

export default MainLayout;
