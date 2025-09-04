import s from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';
import { ApiImage } from '../../types';

interface ImageGalleryProps {
  dataImage: ApiImage[];
  openModal: (imgUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  dataImage,
  openModal,
}) => {
  return (
    <ul className={s.galaryList}>
      {dataImage.map(item => (
        <ImageCard key={item.id} dataImage={item} openModal={openModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;
