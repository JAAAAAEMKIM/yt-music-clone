import styles from "./ProfileThumbnail.module.css";
interface ProfileThumbnailProps {
  src: string;
}
const ProfileThumbnail: React.FC<ProfileThumbnailProps> = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} className={styles.image} />
    </div>
  );
};

export default ProfileThumbnail;
