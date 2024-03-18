import ProfileThumbnail from "@/components/thumbnail/ProfileThumbnail";
import styles from "./Carousel.module.css";

interface CarouselProps {
  title: string;
  description?: string;
  thumbnailUrl?: string;
  button?: React.ReactNode;
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  title,
  description,
  thumbnailUrl,
  button,
  children,
}) => {
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex">
          {thumbnailUrl && <ProfileThumbnail src={thumbnailUrl} />}
          <div className="flex">
            {description}
            <div className="flex">
              {title}
              {button}
            </div>
          </div>
        </div>
        <div>
          <button>&gt;</button>
          <button>&lt;</button>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Carousel;
