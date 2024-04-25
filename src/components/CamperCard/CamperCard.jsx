import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { FeatureItem } from '../FeatureItem/FeatureItem';
import { CamperInfoModal } from '../CamperInfoModal/CamperInfoModal';
import { RatingLocationBlock } from '../RatingLocationBlock/RatingLocationBlock';
import { useGenerateFeatureItems } from '../../hooks/useGenerateFeatureItems';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { getFavorites } from '../../store/selectors';
import defaultImage from '../../images/default-camper-image.png';
import sprite from '../../images/icons/sprite.svg';
import styles from './CamperCard.module.css';

const CamperCard = memo(({ camper: { _id, description, gallery, location, name, price, rating, reviews } }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(getFavorites);
  const isFavorite = favorites.some(favorite => favorite._id === _id);
  const features = useGenerateFeatureItems({ _id, description, gallery, location, name, price, rating, reviews });

  const handleFavoritesButtonClick = () => {
    dispatch(isFavorite ? removeFavorite(_id) : addFavorite({ _id, description, gallery, location, name, price, rating, reviews }));
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={gallery[0] || defaultImage} alt={name} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.priceFavoriteButtonContainer}>
            <span className={styles.price}>{`€${price.toFixed(2)}`}</span>
            <button className={`${styles.fovoriteButton} ${isFavorite ? styles.isFavorite : ''}`} onClick={handleFavoritesButtonClick}>
              <svg className={styles.fovoriteButtonIcon} width="24" height="24">
                <use xlinkHref={`${sprite}#favorite`} />
              </svg>
            </button>
          </div>
          <RatingLocationBlock rating={rating} reviewsQuantity={reviews.length} location={location} />
          <div className={styles.description}>{description}</div>
          <div className={styles.details}>
            {features.map(({ key, value }) => (
              <FeatureItem key={key} iconId={key} title={value} />
            ))}
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Show more</Button>
        </div>
      </div>
      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CamperInfoModal camper={{ _id, description, gallery, location, name, price, rating, reviews }} />
      </ModalWindow>
    </>
  );
});

export default CamperCard;
