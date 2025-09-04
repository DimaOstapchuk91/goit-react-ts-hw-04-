import { ApiImage } from '../../types';
import s from './ImageCard.module.css';

interface ImageCardProps {
  dataImage: ApiImage;
  openModal: (imgUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ dataImage, openModal }) => {
  const { urls, description, likes } = dataImage;

  return (
    <li>
      <div>
        <img
          className={s.imgGalary}
          onClick={() => openModal(urls.full)}
          src={urls.small}
          alt={description}
        />
      </div>
      <div className={s.likesBox}>
        <p>Likes: {likes} </p>
      </div>
    </li>
  );
};
export default ImageCard;
