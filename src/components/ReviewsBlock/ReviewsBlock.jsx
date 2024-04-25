import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getCamperReviews } from '../../store/selectors';
import { ReviewItem } from '../ReviewItem/ReviewItem';

import styles from './ReviewsBlock.module.css';

export const ReviewsBlock = () => {
  const { camperId } = useParams();
  const camperReviews = useSelector(getCamperReviews(camperId));

  return (
    <ul className={styles.reviewsList}>
      {camperReviews.map((review, index) => (
        <li
          className={styles.reviewItem}
          key={`${index}_${review.reviewer_name}`}
        >
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};
