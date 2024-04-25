import sprite from '../../images/icons/sprite.svg';

import styles from './ReviewItem.module.css';

export const ReviewItem = ({ review }) => {
  const { comment, reviewer_name, reviewer_rating } = review;

  const createRatingStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      let star;
      if (i < Math.floor(reviewer_rating)) {
        star = (
          <svg
            className={`${styles.starIcon} ${styles.painted}`}
            width="16"
            height="16"
          >
            <use xlinkHref={`${sprite}#star`} />
          </svg>
        );
      } else {
        star = (
          <svg className={`${styles.starIcon}`} width="16" height="16">
            <use xlinkHref={`${sprite}#star`} />
          </svg>
        );
      }

      stars.push(star);
    }

    return stars;
  };

  return (
    <div>
      <div className={styles.reviewTop}>
        <div className={styles.avatar}>
          <span>{reviewer_name.charAt(0)}</span>
        </div>
        <div>
          <h3 className={styles.title}>{reviewer_name}</h3>
          <div className={styles.rating}>
            {createRatingStars().map((star, index) => (
              <span key={`${index}_star`}>{star}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="description">{comment}</div>
    </div>
  );
};
