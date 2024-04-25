import sprite from '../../images/icons/sprite.svg';

import styles from './RatingLocationBlock.module.css';

export const RatingLocationBlock = ({ rating, reviewsQuantity, location }) => {
  return (
    <div className={styles.ratingLocationContainer}>
      <div className={styles.ratingContainer}>
        <svg className={styles.starIcon} width="16" height="16">
          <use xlinkHref={`${sprite}#star`} />
        </svg>
        <span className={styles.rating}>
          {rating} ({reviewsQuantity} Reviews)
        </span>
      </div>
      <div className={styles.locationContainer}>
        <svg className={styles.locationIcon} width="16" height="16">
          <use xlinkHref={`${sprite}#location`} />
        </svg>
        <span>{location.split(', ').reverse().join(', ')}</span>
      </div>
    </div>
  );
};
